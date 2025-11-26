# 🚀 Quick Start Guide

Your Spendrule email signature system is ready! Here's how to get started.

## ✅ What's Been Set Up

Your repository includes:

1. **📧 Production-ready signature template** (`templates/spendrule-signature.html`)
   - Email-safe table-based layout
   - Outlook VML fallbacks for rounded corners
   - Brand-consistent with Figma design
   - Mobile-friendly and accessible

2. **🤖 Automated CLI generator** (`scripts/generate.js`)
   - Interactive prompts for team member info
   - Automatic placeholder replacement
   - Output to `/output` folder

3. **👥 Batch generator** (`scripts/batch-generate.js`)
   - Generate signatures for entire team at once
   - Uses `team.json` configuration file

4. **📦 GitHub Pages setup** (ready to deploy)
   - Free CDN hosting for profile photos and logos
   - Accessible at `https://YOUR_USERNAME.github.io/email-signatures/assets/`

5. **📚 Comprehensive documentation**
   - Main README with full instructions
   - GitHub setup guide (`docs/GITHUB_SETUP.md`)
   - Email client installation guide (`docs/INSTALLATION_GUIDE.md`)

## 🎯 Next Steps (In Order)

### 1. Push to GitHub

```bash
cd email-signatures

# Create repo on GitHub (choose one method):

# Option A: Using GitHub CLI
gh repo create email-signatures --public --source=. --remote=origin --push

# Option B: Manually via GitHub.com
# 1. Go to github.com/new
# 2. Create "email-signatures" (public repo)
# 3. Then run:
git remote add origin https://github.com/YOUR_USERNAME/email-signatures.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repo on GitHub
2. **Settings** → **Pages**
3. Source: **main** branch, **/ (root)** folder
4. Click **Save**
5. Wait 2 minutes for deployment
6. Verify at: `https://YOUR_USERNAME.github.io/email-signatures/`

### 3. Update Configuration

Update your GitHub username in these files:

```bash
# scripts/generate.js (line 18)
const DEFAULT_BASE_URL = 'https://YOUR_USERNAME.github.io/email-signatures/assets';

# scripts/batch-generate.js (line 14)
const DEFAULT_BASE_URL = 'https://YOUR_USERNAME.github.io/email-signatures/assets';

# package.json (line 25)
"url": "https://github.com/YOUR_USERNAME/email-signatures.git"

# index.html (multiple instances - search and replace)
```

Then commit:

```bash
git add .
git commit -m "Update GitHub username in configuration"
git push
```

### 4. Add Assets

```bash
# Add Spendrule logo (get from design team)
cp ~/path/to/spendrule-logo.png assets/spendrule-logo.png

# Add your profile photo (135x135px or 270x270px)
cp ~/path/to/your-photo.jpg assets/profile-yourname.jpg

# Commit and push
git add assets/
git commit -m "Add company logo and profile photos"
git push
```

Wait 1-2 minutes, then verify images load:
- `https://YOUR_USERNAME.github.io/email-signatures/assets/spendrule-logo.png`
- `https://YOUR_USERNAME.github.io/email-signatures/assets/profile-yourname.jpg`

### 5. Install Dependencies

```bash
npm install
```

### 6. Generate Your Signature

```bash
npm run generate
```

Follow the prompts:
- **Full name**: Joseph Akintolayo
- **Job title**: CTO & Co-Founder
- **Email**: joseph@spendrule.com
- **Phone**: +1 (469) 998-2727
- **Photo filename**: profile-joseph.jpg
- **Base URL**: https://YOUR_USERNAME.github.io/email-signatures/assets

Your signature is saved to: `/output/signature-joseph-akintolayo.html`

### 7. Install in Email Client

Open your generated signature file, copy the HTML, and follow the installation guide:

- **Gmail**: See [INSTALLATION_GUIDE.md](docs/INSTALLATION_GUIDE.md#gmail-web)
- **Outlook Desktop**: See [INSTALLATION_GUIDE.md](docs/INSTALLATION_GUIDE.md#outlook-desktop---windows)
- **Outlook Web**: See [INSTALLATION_GUIDE.md](docs/INSTALLATION_GUIDE.md#outlook-web---outlookcom--office365com)
- **Apple Mail**: See [INSTALLATION_GUIDE.md](docs/INSTALLATION_GUIDE.md#apple-mail-macos)

### 8. Test Thoroughly

Send a test email to yourself and verify:
- ✅ Layout looks correct
- ✅ Profile photo and logo load
- ✅ Email/phone/website links work
- ✅ Renders properly on mobile
- ✅ Works in Outlook desktop (if applicable)

## 🎨 For Your Team

### Adding Team Members

1. Team member adds their photo to `/assets`:
   ```bash
   git pull
   cp ~/my-photo.jpg assets/profile-myname.jpg
   git add assets/
   git commit -m "Add profile photo for [Name]"
   git push
   ```

2. They run the generator:
   ```bash
   npm run generate
   ```

3. They install the signature in their email client

### Batch Generation

For generating all team signatures at once:

1. Create `team.json` from example:
   ```bash
   cp team.json.example team.json
   ```

2. Edit `team.json` with all team members

3. Run batch generator:
   ```bash
   npm run batch
   ```

All signatures will be in `/output` folder.

## 📚 Full Documentation

- **README.md** - Complete usage guide
- **docs/GITHUB_SETUP.md** - Detailed GitHub Pages setup
- **docs/INSTALLATION_GUIDE.md** - Step-by-step for all email clients

## 🆘 Troubleshooting

**Images not loading?**
→ Ensure GitHub Pages is deployed and URLs are correct

**Generator fails?**
→ Run `npm install` first to install dependencies

**Signature looks broken in Outlook?**
→ Template includes VML fallbacks; test in actual Outlook desktop app

**Need help?**
→ Check the documentation or open an issue in the repo

---

## 🎉 You're All Set!

Your email signature system is production-ready. Generate signatures for your entire team and maintain brand consistency across all communications.

**Questions?** See full documentation in README.md or docs/ folder.
