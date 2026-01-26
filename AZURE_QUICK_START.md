# 🚀 Azure Deployment - Quick Start

## ✅ What's Ready
- ✅ GitHub Actions workflow configured
- ✅ Next.js configured for Azure
- ✅ Deployment scripts created

## 📋 Step-by-Step Setup (10 minutes)

### Step 1: Create Azure Resources

**Option A: Azure Portal (Recommended for beginners)**

1. Go to: https://portal.azure.com
2. Click **"Create a resource"**
3. Search for **"Web App"** → Click **"Create"**
4. Fill in:
   - **Subscription**: Your subscription
   - **Resource Group**: Click **"Create new"** → Name: `fatemeh-bahman-rg`
   - **Name**: `fatemeh-bahman-website` (must be unique globally)
   - **Publish**: Code
   - **Runtime stack**: Node 20 LTS
   - **Operating System**: Linux
   - **Region**: **North Italy** (Italy North)
   - **App Service Plan**: Click **"Create new"**
     - Name: `fatemeh-bahman-plan`
     - **SKU and size**: **F1 Free** (cheapest - $0/month)
     - Click **"OK"**
5. Click **"Review + create"** → **"Create"**
6. Wait 2-3 minutes for deployment

**Option B: Azure CLI (Faster)**

```bash
# Login
az login

# Run the deployment script
bash azure-deploy.sh
```

### Step 2: Get Publish Profile

1. In Azure Portal, go to your Web App
2. Click **"Get publish profile"** (top menu)
3. Download the `.PublishSettings` file
4. **Open the file** and copy ALL its contents

### Step 3: Add GitHub Secret

1. Go to your GitHub repository
2. **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Name: `AZURE_WEBAPP_PUBLISH_PROFILE`
5. Value: Paste the entire contents of the `.PublishSettings` file
6. Click **"Add secret"**

### Step 4: Configure Web App Settings

In Azure Portal, go to your Web App:

1. **Configuration** → **Application settings**:
   - Add: `WEBSITE_NODE_DEFAULT_VERSION` = `~20`
   - Click **"Save"**

2. **Configuration** → **General settings**:
   - **Startup Command**: `npm start`
   - Click **"Save"**

### Step 5: Push to GitHub

```bash
cd "c:\Users\KiaJamishidi\Downloads\New folder"

# Add workflow file
git add .github/workflows/azure-deploy.yml
git add azure-*.md azure-*.json azure-*.sh
git commit -m "Add Azure deployment configuration"
git push origin master
```

### Step 6: Watch Deployment

1. Go to GitHub → **Actions** tab
2. Watch the workflow run
3. When complete, visit: `https://fatemeh-bahman-website.azurewebsites.net`

## 🎯 Your App URL

After deployment, your app will be live at:
```
https://fatemeh-bahman-website.azurewebsites.net
```

(Replace `fatemeh-bahman-website` with your actual app name)

## 💰 Cost

- **F1 Free Tier**: $0/month
- **Limitations**: 
  - App may sleep after 20 min inactivity
  - 60 minutes compute per day
  - 1 GB storage

## 🔧 Troubleshooting

**Build fails?**
- Check GitHub Actions logs
- Verify Node version is 20.x

**App doesn't start?**
- Check Azure → Log stream
- Verify startup command: `npm start`

**Need help?**
- See `azure-setup.md` for detailed guide

## ✨ That's It!

Your website will automatically deploy to Azure on every push to main/master branch!
