import axios from 'axios';

// Get base URL from env or fallback to local API
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  meta?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  error?: string;
}

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Attach Token
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access_token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Response Interceptor: Handle Token Refresh & Errors
api.interceptors.response.use(
  (response) => {
    // Our API returns data wrapped in a {success, data, meta} format
    return response.data as ApiResponse; // Cast to ApiResponse type
  },
  async (error) => {
    const originalRequest = error.config;

    // Avoid infinite loops
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        if (!refreshToken) throw new Error('No refresh token');

        // Request new access token using refresh token directly
        const res = await axios.post(`${API_URL}/auth/refresh`, {}, {
          headers: { Authorization: `Bearer ${refreshToken}` }
        });

        if (res.data?.data?.accessToken) {
          localStorage.setItem('access_token', res.data.data.accessToken);
          localStorage.setItem('refresh_token', res.data.data.refreshToken);
          
          if (originalRequest.headers) {
            originalRequest.headers.Authorization = `Bearer ${res.data.data.accessToken}`;
          }
          return axios(originalRequest);
        }
      } catch (_e) {
        // Refresh token failed – clear tokens and force logout
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        // Only redirect if we are in browser
        if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
          window.location.href = '/login';
        }
      }
    }
    return Promise.reject(error.response?.data || error.message);
  }
);
