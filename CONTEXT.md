# CONTEXT.md

## 📨 Project: Mailbox App (Angular)

A containerized Angular application that allows remote users to manage scanned physical mail.

### Core Features
- Login with role-based access (admin/client)
- Dashboard with list of mail items
- Mail actions: Open & Scan, Hold, Forward, Shred
- Admin dashboard to upload and assign mail

### Tech Stack
- Angular 17
- Angular Material
- Docker (optional)
- GitHub Codespaces (dev environment)

### Current Status
- LoginComponent implemented with basic form
- App routing configured for /login and /dashboard
- Styles are in progress (using Angular Material now)

### Goals This Week
- Build modern dashboard layout
- Render mail items using `MailItemComponent`
- Add route guards and localStorage persistence
