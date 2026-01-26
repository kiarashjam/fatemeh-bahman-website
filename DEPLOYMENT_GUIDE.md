# 🚀 Complete Deployment Guide

This guide covers deploying to both GitHub and Azure.

## Part 1: GitHub Repository ✅ (Already Done)

Your code is already committed and ready to push!

## Part 2: Azure Deployment

### Quick Setup (5 minutes)

1. **Create Azure Web App**:
   - Go to: https://portal.azure.com
   - Create → Web App
   - Resource Group: `fatemeh-bahman-rg` (new)
   - Name: `fatemeh-bahman-website`
   - Region: **North Italy** (Italy North)
   - Plan: **F1 Free** ($0/month)
   - Runtime: Node 20 LTS, Linux
   - Create

2. **Get Publish Profile**:
   - In Web App → Click "Get publish profile"
   - Download the file

3. **Add to GitHub**:
   - GitHub repo → Settings → Secrets → Actions
   - New secret: `AZURE_WEBAPP_PUBLISH_PROFILE`
   - Value: Copy entire contents of .PublishSettings file

4. **Configure Web App**:
   - Configuration → Application settings
   - Add: `WEBSITE_NODE_DEFAULT_VERSION` = `~20`
   - Configuration → General settings
   - Startup Command: `npm start`
   - Save

5. **Push to GitHub**:
   ```bash
   git push origin master
   ```

6. **Watch Deployment**:
   - GitHub → Actions tab
   - Wait for workflow to complete
   - Visit: `https://fatemeh-bahman-website.azurewebsites.net`

## Files Created

- ✅ `.github/workflows/azure-deploy.yml` - GitHub Actions workflow
- ✅ `azure-deploy.sh` - Azure CLI deployment script
- ✅ `azure-config.json` - Azure configuration reference
- ✅ `azure-setup.md` - Detailed Azure setup guide
- ✅ `AZURE_QUICK_START.md` - Quick reference

## Important Notes

1. **App Name Must Be Unique**: Change `fatemeh-bahman-website` if taken
2. **Update Workflow**: If app name differs, update `.github/workflows/azure-deploy.yml`
3. **Free Tier**: F1 Free may sleep after inactivity (20 minutes)
4. **First Deploy**: Takes 5-10 minutes, subsequent deploys are faster

## Cost

- **F1 Free**: $0/month (perfect for starting)
- **B1 Basic**: $13/month (always on, better for production)

## Support

- See `azure-setup.md` for detailed instructions
- See `AZURE_QUICK_START.md` for quick reference
- Check Azure Portal logs if issues occur
