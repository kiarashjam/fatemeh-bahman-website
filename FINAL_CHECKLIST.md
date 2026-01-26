# ✅ Final Deployment Checklist

## Pre-Deployment ✅

- [x] Project builds successfully
- [x] No TypeScript errors
- [x] No linting errors
- [x] All files committed to Git
- [x] GitHub Actions workflow created
- [x] Azure configuration files created

## GitHub Setup

- [ ] Create GitHub repository at https://github.com/new
  - Name: `fatemeh-bahman-website`
  - Don't initialize with README/gitignore
  
- [ ] Push code to GitHub:
  ```bash
  git remote add origin https://github.com/YOUR_USERNAME/fatemeh-bahman-website.git
  git push -u origin master
  ```

## Azure Setup

- [ ] Create Azure account (if needed): https://azure.microsoft.com/free/

- [ ] Create Resource Group:
  - Name: `fatemeh-bahman-rg`
  - Region: **North Italy** (Italy North)

- [ ] Create Web App:
  - Name: `fatemeh-bahman-website` (must be unique)
  - Region: **North Italy**
  - Plan: **F1 Free** ($0/month)
  - Runtime: Node 20 LTS, Linux

- [ ] Configure Web App:
  - Application Setting: `WEBSITE_NODE_DEFAULT_VERSION` = `~20`
  - Startup Command: `npm start`

- [ ] Get Publish Profile:
  - Download `.PublishSettings` file
  - Copy ALL contents

- [ ] Add GitHub Secret:
  - Repository → Settings → Secrets → Actions
  - Name: `AZURE_WEBAPP_PUBLISH_PROFILE`
  - Value: Paste publish profile contents

## Deployment

- [ ] Push to GitHub (triggers automatic deployment)
- [ ] Check GitHub Actions (should run automatically)
- [ ] Wait for deployment (5-10 minutes first time)
- [ ] Visit: `https://fatemeh-bahman-website.azurewebsites.net`

## Post-Deployment

- [ ] Test website functionality
- [ ] Test language switching
- [ ] Test dark mode
- [ ] Test contact form
- [ ] Update `lib/constants.ts` with real contact info
- [ ] Update `app/sitemap.ts` with your domain
- [ ] Update `app/robots.ts` with your domain

## Optional Enhancements

- [ ] Add custom domain
- [ ] Set up SSL certificate (free with Azure)
- [ ] Configure monitoring
- [ ] Set up backup strategy
- [ ] Consider upgrading from F1 Free if needed

## 🎉 Success!

Once all checked, your website is live and will auto-deploy on every push!
