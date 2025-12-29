# GitHub Pages Deployment Guide

## ✅ Recommended: Use GitHub Actions (Already Configured!)

Your repository is **already set up** to use GitHub Actions for deployment. This is the modern, recommended approach.

### What You Need to Do:

1. **Enable GitHub Pages in Repository Settings:**
   - Go to: `https://github.com/KrishTVK16/Suriyas_Healing_Minds/settings/pages`
   - Under **"Source"**, select **"GitHub Actions"** (NOT "Deploy from a branch")
   - Click **Save**

2. **The workflow will automatically:**
   - Deploy from the `main` branch
   - Deploy from the root directory (all your HTML files)
   - Run automatically on every push to `main`
   - Build and deploy your static site

### Your Site URL:
After deployment, your site will be live at:
`https://krishTVK16.github.io/Suriyas_Healing_Minds/`

---

## ❌ Alternative (Not Recommended): Deploy from Branch

The old method involves:
- Creating a `gh-pages` branch
- Or using a `/docs` folder
- Selecting "Deploy from a branch" in settings

**Why GitHub Actions is Better:**
- ✅ More control and flexibility
- ✅ Better for CI/CD
- ✅ Can run tests before deployment
- ✅ Modern best practice
- ✅ Already configured in your repository

---

## Summary

**DO THIS:**
1. Go to Settings → Pages
2. Select **"GitHub Actions"** as the source
3. Save
4. The workflow will run automatically and deploy your site

**Your workflow file (`.github/workflows/static.yml`) is already correctly configured!**

