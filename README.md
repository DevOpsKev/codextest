# Mailbox App

This repository contains the Mailbox Angular application.

## Development

```bash
cd mailbox-app
npm install
npm start
```

## Docker

The app can be built into a production container using Gulp:

```bash
npm install # install gulp and helpers
npx gulp docker-build
npx gulp docker-run
```

The container listens on port `80` and is published to `localhost:4200` by the Gulp run task.
