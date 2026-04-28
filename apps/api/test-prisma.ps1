$env:DATABASE_URL = "file:./dev.db"
echo "DATABASE_URL is: $($env:DATABASE_URL)"
npx prisma generate
