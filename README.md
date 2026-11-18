# Sparsh Pharmacy

A pharmacy mobile app and NestJS API built with Expo, React Native, Prisma, MySQL, Redis, and Docker.

## Prerequisites

- Node.js 20
- npm 10+
- Docker Desktop
- Android Studio emulator or Expo Go

## Run the Application

From the project root:

```powershell
npm install
docker compose up --build
npm run mobile
```

Open Docker services in the terminal. For a second terminal, run `npm run mobile` only after dependencies are installed.

- API: http://localhost:3000/api
- API documentation: http://localhost:3000/api/docs
- MinIO console: http://localhost:9001

In the Expo terminal, press:

- `a` for Android
- `i` for iOS
- `w` for web

## Run API Services Separately

```powershell
docker compose up mysql redis minio
```

In a second terminal:

```powershell
cd backend
npm install
npx prisma generate
npx prisma migrate deploy
npx prisma db seed
npm run start:dev
```

## Physical Device

For Expo Go on a physical device, replace `localhost` with the computer's LAN IP:

```powershell
$env:EXPO_PUBLIC_API_URL="http://192.168.1.10:3000/api"
npm run mobile
```

## Stop Docker

```powershell
docker compose down
```
