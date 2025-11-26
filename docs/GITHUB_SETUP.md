# GitHub Repository Setup Guide

This guide walks through setting up the email-signatures repository on GitHub with GitHub Pages for asset hosting.

## 📦 Step 1: Create GitHub Repository

### Option A: Using GitHub CLI (gh)

```bash
# Navigate to your local email-signatures folder
cd email-signatures

# Create a new GitHub repository
gh repo create email-signatures --public --source=. --remote=origin

# Push to GitHub
git push -u origin main
```

### Option B: Using GitHub Web Interface

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `email-signatures`
3. Description: "Professional email signatures for Spendrule team"
4. Visibility: **Public** (required for free GitHub Pages)
5. Do NOT initialize with README (we already have one)
6. Click **Create repository**

Then connect your local repo:

```bash
cd email-signatures
git remote add origin https://github.com/YOUR_USERNAME/email-signatures.git
git branch -M main
git push -u origin main
```

## 🌐 Step 2: Enable GitHub Pages

GitHub Pages will host your assets (profile photos, logos) for free.

### Using GitHub Web Interface

1. Go to your repository on GitHub
2. Click **Settings** (⚙️ icon in top menu)
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**:
   - Branch: Select `main`
   - Folder: Select `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment
7. Your site will be available at: `https://YOUR_USERNAME.github.io/email-signatures/`

### Verify GitHub Pages is Working

Visit these URLs to confirm:

- Landing page: `https://YOUR_USERNAME.github.io/email-signatures/`
- Assets folder: `https://YOUR_USERNAME.github.io/email-signatures/assets/`

## 🔧 Step 3: Update Configuration

Update the default base URL in your generator script:

### Edit `scripts/generate.js`

Find line 18:

```javascript
const DEFAULT_BASE_URL = 'https://YOUR_USERNAME.github.io/email-signatures/assets';
```

Replace `YOUR_USERNAME` with your actual GitHub username:

```javascript
const DEFAULT_BASE_URL = 'https://stephenokonkwo.github.io/email-signatures/assets';
```

### Edit `scripts/batch-generate.js`

Update the same line (around line 14).

### Edit `index.html`

Replace all instances of `YOUR_USERNAME` with your GitHub username.

### Edit `package.json`

Update the repository URL (line 22):

```json
"repository": {
  "type": "git",
  "url": "https://github.com/stephenokonkwo/email-signatures.git"
}
```

Commit your changes:

```bash
git add .
git commit -m "Update GitHub username in configuration"
git push
```

## 📸 Step 4: Upload Assets

Upload the Spendrule logo and your profile photo:

```bash
# Add the company logo
cp ~/path/to/spendrule-logo.png assets/spendrule-logo.png

# Add your profile photo (135x135px or 270x270px for retina)
cp ~/path/to/your-photo.jpg assets/profile-yourname.jpg

# Commit and push
git add assets/
git commit -m "Add profile photos and company logo"
git push
```

Wait 1-2 minutes for GitHub Pages to deploy, then verify:

```
https://YOUR_USERNAME.github.io/email-signatures/assets/spendrule-logo.png
https://YOUR_USERNAME.github.io/email-signatures/assets/profile-yourname.jpg
```

## ✅ Step 5: Test the Generator

Now you can generate signatures:

```bash
npm run generate
```

The generator will use your GitHub Pages URLs automatically.

## 🔒 Private Repository Option

If you prefer a private repository but still want to host assets:

### Option 1: Use GitHub Raw URLs (Not Recommended)

Private repos can use raw.githubusercontent.com URLs, but they require authentication and may not work in email clients:

```
https://raw.githubusercontent.com/YOUR_USERNAME/email-signatures/main/assets/profile.jpg
```

⚠️ **This won't work reliably in email signatures** because recipients can't authenticate.

### Option 2: Use External CDN (Recommended)

Host assets on a third-party service:

1. **Cloudinary** (free tier available)
   - Upload images to Cloudinary
   - Use their CDN URLs in signatures
   - Example: `https://res.cloudinary.com/yourcompany/image/upload/profile.jpg`

2. **imgix**
   - Professional image CDN with optimization
   - Example: `https://yourcompany.imgix.net/profile.jpg`

3. **AWS S3 + CloudFront**
   - Upload to S3 bucket
   - Enable public access
   - Use CloudFront CDN URLs

4. **Vercel/Netlify Static Hosting**
   - Deploy just the `/assets` folder
   - Free tier with CDN

Update `scripts/generate.js` with your CDN base URL.

## 🚀 Step 6: Share with Team

Share the repository with your team:

1. Invite collaborators: **Settings** → **Collaborators** → Add people
2. Share the README.md instructions
3. Team members can:
   - Clone the repo
   - Add their profile photo to `/assets`
   - Run `npm run generate`
   - Install signature in their email client

## 📊 Optional: GitHub Actions for Automation

You can set up GitHub Actions to:
- Automatically optimize uploaded images
- Validate signature HTML
- Generate all signatures on push
- Deploy to custom domain

See `.github/workflows/` for example workflows (coming soon).

## 🆘 Troubleshooting

### GitHub Pages not deploying

- Check **Settings** → **Pages** → Status shows "Your site is live"
- Ensure repository is public (or you have GitHub Pro for private Pages)
- Check **Actions** tab for deployment logs
- Wait 2-5 minutes after pushing changes

### Assets not loading

- Verify URLs are absolute: `https://...` not relative `../assets/...`
- Check file names are correct (case-sensitive!)
- Ensure files are committed and pushed to `main` branch
- Clear browser cache and try again

### 404 errors

- Ensure branch is `main` (not `master`)
- Check folder is set to `/ (root)` not `/docs`
- Verify files are in the correct directory

## 📞 Support

Questions? Open an issue in the repository or contact your team admin.

---

**Next:** Return to [README.md](../README.md) for usage instructions.
