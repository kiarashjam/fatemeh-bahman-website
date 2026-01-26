# 🎯 Complete Setup Guide - GitHub + Azure

## ✅ Current Status

- ✅ Project built successfully
- ✅ Git repository initialized
- ✅ All files committed
- ✅ Azure deployment workflow created
- ✅ Next.js configured for Azure

## 🚀 Deployment Steps

### Step 1: Push to GitHub (2 minutes)

```bash
cd "c:\Users\KiaJamishidi\Downloads\New folder"

# If you haven't created GitHub repo yet:
# 1. Go to https://github.com/new
# 2. Create repository: fatemeh-bahman-website
# 3. Don't initialize with README

# Connect and push
git remote add origin https://github.com/YOUR_USERNAME/fatemeh-bahman-website.git
git push -u origin master
```

### Step 2: Create Azure Resources (5 minutes)

**Using Azure Portal:**

1. **Go to**: https://portal.azure.com
2. **Create Resource Group**:
   - Click "Create a resource" → "Resource group"
   - Name: `fatemeh-bahman-rg`
   - Region: **North Italy** (Italy North)
   - Create

3. **Create Web App**:
   - In resource group → "Create"
   - Search "Web App" → Create
   - Settings:
     - Resource Group: `fatemeh-bahman-rg` (existing)
     - Name: `fatemeh-bahman-website` (must be unique)
     - Publish: Code
     - Runtime: Node 20 LTS
     - OS: Linux
     - Region: **North Italy**
     - App Service Plan: Create new
       - Name: `fatemeh-bahman-plan`
       - **SKU: F1 Free** (cheapest - $0/month)
     - Review + Create → Create

### Step 3: Configure Web App (2 minutes)

1. Go to your Web App in Azure Portal
2. **Configuration** → **Application settings**:
   - Add: `WEBSITE_NODE_DEFAULT_VERSION` = `~20`
   - Save
3. **Configuration** → **General settings**:
   - Startup Command: `npm start`
   - Save

### Step 4: Get Publish Profile (1 minute)

1. In Web App → Click **"Get publish profile"**
2. Download the `.PublishSettings` file
3. **Open the file** and copy ALL its contents

### Step 5: Add GitHub Secret (2 minutes)

1. GitHub repo → **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret**
3. Name: `AZURE_WEBAPP_PUBLISH_PROFILE`
4. Value: Paste entire contents of `.PublishSettings` file
5. **Add secret**

### Step 6: Deploy! (Automatic)

1. Push to GitHub (if not already):
   ```bash
   git push origin master
   ```

2. **Watch deployment**:
   - GitHub → **Actions** tab
   - Workflow will run automatically
   - Wait 5-10 minutes for first deployment

3. **Visit your site**:
   ```
   https://fatemeh-bahman-website.azurewebsites.net
   ```
   (Replace with your actual app name)

## 📋 Important Notes

### App Name
- Must be globally unique
- If `fatemeh-bahman-website` is taken, use a different name
- Update `.github/workflows/azure-deploy.yml` line 11 if name differs

### Free Tier (F1)
- **Cost**: $0/month ✅
- **Limitations**:
  - App may sleep after 20 min inactivity
  - 60 minutes compute per day
  - 1 GB storage
- **First wake**: May take 30-60 seconds

### Automatic Deployments
- Every push to `master` or `main` triggers deployment
- GitHub Actions handles everything automatically
- No manual deployment needed!

## 🎉 Success Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Azure resource group created (North Italy)
- [ ] Azure Web App created (F1 Free)
- [ ] Web App configured (Node 20, startup command)
- [ ] Publish profile downloaded
- [ ] GitHub secret added
- [ ] First deployment completed
- [ ] Website is live!

## 🔗 Quick Links

- **Azure Portal**: https://portal.azure.com
- **GitHub Actions**: Your repo → Actions tab
- **Your Website**: `https://YOUR-APP-NAME.azurewebsites.net`

## 📚 Documentation Files

- `AZURE_QUICK_START.md` - Quick Azure setup
- `azure-setup.md` - Detailed Azure guide
- `GITHUB_SETUP.md` - GitHub setup
- `QUICK_START.md` - Quick GitHub publishing

## 💡 Tips

1. **First deployment takes longer** (5-10 min)
2. **Subsequent deployments are faster** (2-3 min)
3. **Check logs** if issues: Azure Portal → Log stream
4. **Free tier may sleep** - first visit after sleep takes time
5. **Upgrade to B1** ($13/month) for always-on production

## ✨ You're All Set!

Your website will automatically deploy to Azure on every push! 🚀
