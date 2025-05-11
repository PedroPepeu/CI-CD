# CI/CD Notification Demo

This project demonstrates a simple CI/CD pipeline with Discord notifications using GitHub Actions.

## Features

- Simple Node.js application with tests
- GitHub Actions CI pipeline
- Discord notifications for build status

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run tests locally:
   ```bash
   npm test
   ```

## Discord Webhook Setup

1. Go to your Discord server
2. Navigate to Channel Settings → Integrations → Webhooks
3. Create a new webhook and copy the URL
4. Add the webhook URL as a secret in your GitHub repository:
   - Go to repository Settings → Secrets and variables → Actions
   - Add a new secret named `DISCORD_WEBHOOK_URL`
   - Paste your webhook URL as the value

## How it Works

- When code is pushed to the repository, GitHub Actions automatically runs the CI pipeline
- The pipeline installs dependencies and runs tests
- Based on the test results, a notification is sent to Discord:
  - ✅ Success: "CI Passed on main branch!"
  - ❌ Failure: "CI Failed! Check the logs."

## Project Structure

```
ci-cd-notify-demo/
├── .github/
│   └── workflows/
│       └── ci.yml            # GitHub Actions workflow
├── src/
│   └── app.js                # Sample Node.js app
├── tests/
│   └── app.test.js           # Sample test
├── .env                      # For webhook URL (if secret managed locally)
├── .gitignore
├── package.json
└── README.md
``` 