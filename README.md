# Sparsh Pharmacy

Native Android and iOS pharmacy app and API starter for Sparsh Skin Clinic, Ahmedabad. The repository contains the Expo managed mobile client, NestJS REST API, shared TypeScript types, MySQL/Prisma schema and local Docker services.

## Local development

Requirements: Node.js 20, npm 10+, Docker Desktop, Android Studio emulator (Android) and Xcode (iOS simulator, macOS only).

1. Copy `backend/.env.example` to `backend/.env`. For Compose, set `DATABASE_URL=mysql://sparsh:sparsh@mysql:3306/sparsh`, `REDIS_URL=redis://redis:6379`, and `S3_ENDPOINT=http://minio:9000` (the checked-in local env already has these values).
2. Run `docker compose up --build`. Compose waits for MySQL, applies the checked-in migration, runs the seed and starts the API at `http://localhost:3000/api`; Swagger is at `http://localhost:3000/api/docs`. Local object storage is MinIO at port 9000 (console 9001), Redis at 6379.
3. In another terminal run `cd mobile; npm install; npx expo start`. Press `a` for Android or `i` for the iOS simulator. Set `EXPO_PUBLIC_API_URL=http://localhost:3000/api`; for a physical device, use the computer's LAN address. The current sample Home uses local preview products while API integration is being completed.
4. For local API development, run MySQL and Redis with `docker compose up mysql redis minio`; then `cd backend`, install dependencies, copy `.env.example`, run `npx prisma generate`, `npx prisma migrate deploy`, `npx prisma db seed`, `npm run start:dev`.

## EAS builds and store release

Install EAS CLI (`npm install --global eas-cli`), sign in with your Expo account, run `cd mobile; eas build:configure`, set the EAS project ID and production API/update URLs in `app.json` and environment secrets, then build with `eas build --platform android --profile production` (AAB) and `eas build --platform ios --profile production` (IPA). Create the Android app in Play Console and upload the signed AAB to an internal testing track before completing store listing, privacy/data safety and production rollout. For iOS, create the App Store Connect record, configure signing credentials through EAS, upload the IPA, complete privacy/nutrition and review metadata, then submit through App Store Connect. Store accounts, signing credentials, production URLs and final legal/privacy copy are intentionally deployment-owned values.

## Product and engineering notes

- Brand colors: primary `#5B2A86`, secondary `#A683C0`, tint `#F3ECF8`; supplied logo is used on the header, app icon, adaptive icon and splash.
- `GET /api/home` returns typed, ordered feed sections. Empty sections are designed to be hidden by the client. Customer prices do not include costs in the API response.
- `POST /api/pricing/quote` demonstrates price floors, stock checking, combo calculation and coupon limit handling. The pure module has Jest unit cases.
- Seed catalog has twelve dermatology items, five categories, combo/festival/coupon records, broadcast, zero-stock item and example user roles. Seed staff password hashes are placeholders and cannot authenticate; replace with proper bcrypt hashes before any deployment. Mock OTP is local-only.
- Ambiguity resolved: order of home sections is broadcast, banners, combos, deals, new arrivals, back in stock, then categories. Staff roles are owner, pharmacist and delivery.

## Known limitations / next steps

This is a runnable project foundation and visual/customer flow MVP, not a deployable pharmacy backend yet. Customer/staff authentication and role guards, prescription upload/signing and Rx enforcement at order creation, transactionally safe order placement/stock reservation, real Prisma-backed API repositories, private cost isolation tests, Socket.IO/FCM, staff management screens, CSV/reporting tools, offer administration and E2E flows still need implementation before handling real orders. The sample app's checkout controls are illustrative and the Home preview data is local.

UPI payments, WhatsApp notifications, Hindi and Gujarati localization, and a delivery tracking map are planned next steps.
