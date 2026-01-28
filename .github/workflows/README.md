# Azure deploy on push

**Automatic deploy:** Every push to `main` or `master` builds and deploys this app to Azure Web App (`fatemeh-bahman-website`).

## One-time setup

1. **Add GitHub secret** (see repo root `azure-setup.md`):
   - In Azure Portal: open your Web App → **Get publish profile** → download.
   - In GitHub: **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.
   - Name: `AZURE_WEBAPP_PUBLISH_PROFILE`
   - Value: paste the **entire** contents of the downloaded publish profile file.

2. **If push is rejected** (workflow scope):
   - Run: `gh auth refresh -h github.com -s workflow`
   - Complete the browser step, then push again.

After that, pushing to `main` or `master` will trigger the workflow and deploy to https://fatemeh-bahman-website.azurewebsites.net
