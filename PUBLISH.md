# Publish the website

The app **builds successfully**. Choose one way to go live.

---

## Option 1: Vercel (easiest, ~2 minutes)

1. Go to **[vercel.com](https://vercel.com)** and sign in (GitHub is fine).
2. Click **“Add New…” → “Project”**.
3. **Import** the repo: `kiarashjam/fatemeh-bahman-website`.
4. Leave defaults (Framework: Next.js, Build: `npm run build`, Output: Next.js).
5. Click **“Deploy”**.
6. When it finishes, you get a URL like:  
   `https://fatemeh-bahman-website-xxx.vercel.app`  
   Every push to `master` will auto-deploy.

**Cost:** Free tier is enough for this site.

---

## Option 2: Azure (already configured)

If you prefer Azure:

1. **Create the Web App** and add GitHub secrets as in [AZURE_QUICK_START.md](./AZURE_QUICK_START.md).
2. **Push to GitHub** (see below). The workflow will build and deploy.
3. Site will be at: `https://fatemeh-bahman-website.azurewebsites.net`  
   (or your app name if you changed it).

---

## Push your latest code to GitHub

From the project folder in PowerShell:

```powershell
cd "c:\Users\KiaJamishidi\OneDrive - BonApp Group\Documents\repo\fatemeh\New folder\New folder"

git add .
git commit -m "Mobile improvements, Persian default, viewport and publish setup"
git push origin master
```

After pushing:

- **Vercel:** If the project is already connected, it will deploy automatically. Otherwise, import the repo as in Option 1.
- **Azure:** If secrets are set, check the **Actions** tab; when the workflow is green, the site is live.

---

## Quick check

- **Build:** `npm run build` — already verified.
- **Local:** `npm run dev` then open http://localhost:3000.
