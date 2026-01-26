# Azure Deployment Setup Guide

This guide will help you set up Azure Web App deployment with GitHub Actions.

## Prerequisites

1. Azure account (free tier available)
2. GitHub repository (already set up)
3. Azure CLI installed (optional, for command line setup)

## Step 1: Create Azure Resource Group and Web App

### Option A: Using Azure Portal (Easiest)

1. **Go to Azure Portal**: https://portal.azure.com
2. **Create Resource Group**:
   - Click "Create a resource" → "Resource group"
   - Name: `fatemeh-bahman-rg`
   - Region: **North Italy** (Italy North)
   - Click "Review + create" → "Create"

3. **Create Web App**:
   - In your resource group, click "Create"
   - Search for "Web App"
   - Click "Create"
   - Fill in:
     - **Subscription**: Your subscription
     - **Resource Group**: `fatemeh-bahman-rg` (select existing)
     - **Name**: `fatemeh-bahman-website` (must be globally unique)
     - **Publish**: Code
     - **Runtime stack**: Node 20 LTS
     - **Operating System**: Linux
     - **Region**: **North Italy** (Italy North)
     - **App Service Plan**: 
       - Click "Create new"
       - Name: `fatemeh-bahman-plan`
       - **SKU and size**: **F1 Free** (cheapest option)
       - Click "OK"
   - Click "Review + create" → "Create"
   - Wait for deployment (2-3 minutes)

### Option B: Using Azure CLI

```bash
# Login to Azure
az login

# Create resource group in North Italy
az group create --name fatemeh-bahman-rg --location "northeurope"

# Create App Service Plan (Free tier - F1)
az appservice plan create \
  --name fatemeh-bahman-plan \
  --resource-group fatemeh-bahman-rg \
  --sku FREE \
  --is-linux

# Create Web App
az webapp create \
  --resource-group fatemeh-bahman-rg \
  --plan fatemeh-bahman-plan \
  --name fatemeh-bahman-website \
  --runtime "NODE:20-lts"
```

## Step 2: Configure Web App for Next.js

1. **Go to your Web App** in Azure Portal
2. **Configuration**:
   - Go to "Configuration" → "Application settings"
   - Add new application setting:
     - Name: `WEBSITE_NODE_DEFAULT_VERSION`
     - Value: `~20`
   - Click "Save"

3. **General Settings**:
   - Go to "Configuration" → "General settings"
   - Set "Startup Command":
     ```
     npm start
     ```
   - Click "Save"

## Step 3: Get Publish Profile

1. In your Web App, click "Get publish profile"
2. Download the `.PublishSettings` file
3. **Keep this file secure** - you'll need it for GitHub Secrets

## Step 4: Set Up GitHub Actions Secret

1. Go to your GitHub repository
2. Click "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Name: `AZURE_WEBAPP_PUBLISH_PROFILE`
5. Value: Open the downloaded `.PublishSettings` file and copy **ALL** its contents
6. Click "Add secret"

## Step 5: Update Workflow File (if needed)

The workflow file is already created at `.github/workflows/azure-deploy.yml`. 

**Important**: Update the `AZURE_WEBAPP_NAME` in the workflow file to match your Azure Web App name:

```yaml
env:
  AZURE_WEBAPP_NAME: fatemeh-bahman-website  # Change this to your app name
```

## Step 6: Push to GitHub

```bash
cd "c:\Users\KiaJamishidi\Downloads\New folder"

# Add the workflow file
git add .github/workflows/azure-deploy.yml
git commit -m "Add Azure deployment workflow"
git push origin master
```

## Step 7: Verify Deployment

1. Go to your GitHub repository
2. Click "Actions" tab
3. You should see the workflow running
4. Once complete, visit your Azure Web App URL: `https://fatemeh-bahman-website.azurewebsites.net`

## Troubleshooting

### Build Fails
- Check GitHub Actions logs
- Ensure `package.json` has correct build script
- Verify Node version matches (20.x)

### App Doesn't Start
- Check Azure Web App logs: "Log stream" in Azure Portal
- Verify startup command is set correctly
- Check Application Settings

### Free Tier Limitations
- F1 Free tier has some limitations:
  - 1 GB storage
  - 60 minutes compute time per day
  - Apps may sleep after inactivity
  - Consider upgrading to Basic tier for production

## Cost Optimization

The **F1 Free** tier is the cheapest option:
- **Cost**: $0/month
- **Limitations**: 
  - Apps may sleep after 20 minutes of inactivity
  - Limited compute time
  - 1 GB storage

For production, consider **B1 Basic** ($13/month):
- Always on
- No sleep
- Better performance

## Next Steps

1. Custom domain (optional): Add your domain in Azure Portal
2. SSL certificate: Free SSL with Azure
3. Monitoring: Set up Application Insights
4. Scaling: Configure auto-scaling if needed

## Important Notes

- Your app will be available at: `https://YOUR-APP-NAME.azurewebsites.net`
- First deployment may take 5-10 minutes
- Subsequent deployments are faster (2-3 minutes)
- GitHub Actions will automatically deploy on every push to main/master branch
