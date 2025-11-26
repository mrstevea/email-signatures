# Spendrule Email Signatures

Professional, production-ready email signatures for the Spendrule team. This repository provides version-controlled signature templates, automated generation via CLI, and GitHub Pages hosting for assets.

## 🎯 Features

- **📧 Email-safe HTML**: Table-based layout with Outlook VML fallbacks
- **🎨 Brand-consistent**: Matches Spendrule design system (Figma design)
- **🤖 Automated generation**: CLI tool prompts for info and generates signatures
- **📦 GitHub Pages hosting**: Free, reliable CDN for profile photos and logos
- **✅ Cross-client compatible**: Tested on Gmail, Outlook, Apple Mail, mobile clients

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/YOUR_USERNAME/email-signatures.git
cd email-signatures
npm install
```

### 2. Add Your Assets

Upload your profile photo to the `/assets` folder:

```bash
# Recommended specs:
# - Format: JPG or PNG
# - Dimensions: 135x135px (@1x) or 270x270px (@2x for retina)
# - File size: < 50KB
# - Filename: profile-yourname.jpg

cp ~/Downloads/my-photo.jpg assets/profile-yourname.jpg
```

The Spendrule logo is already included at `assets/spendrule-logo.png`.

### 3. Generate Your Signature

```bash
npm run generate
```

Follow the interactive prompts:
- **Full name**: Your full name (e.g., "Joseph Akintolayo")
- **Job title**: Your role (e.g., "CTO & Co-Founder")
- **Email address**: Your Spendrule email
- **Phone number**: Formatted with country code (e.g., "+1 (469) 998-2727")
- **Profile photo filename**: Your photo in /assets (e.g., "profile-yourname.jpg")
- **Base URL**: GitHub Pages URL (see setup below)

Your signature will be saved to `/output/signature-yourname.html`.

### 4. Set Up GitHub Pages (First Time Only)

This hosts your images for free via GitHub:

1. Push this repo to GitHub
2. Go to **Settings** → **Pages**
3. Set **Source** to "Deploy from a branch"
4. Set **Branch** to `main` and folder to `/` (root)
5. Click **Save**
6. Your assets will be available at: `https://YOUR_USERNAME.github.io/email-signatures/assets/`

**Update the base URL** in `scripts/generate.js` (line 18) to your GitHub Pages URL.

### 5. Install in Your Email Client

#### Gmail (Web)
1. Go to **Settings** → **General** → **Signature**
2. Create a new signature
3. Switch to **HTML mode** (open browser console and run):
   ```javascript
   const html = `...paste your HTML here...`;
   document.querySelector('[contenteditable]').innerHTML = html;
   ```
4. Save changes

#### Outlook (Desktop - Windows/Mac)
1. **File** → **Options** → **Mail** → **Signatures**
2. Click **New** to create a signature
3. In the edit box, paste your HTML (may need to use **Insert** → **Attach File** → paste as text)
4. Set as default signature

#### Outlook (Web)
1. **Settings** (⚙️) → **View all Outlook settings**
2. **Compose and reply** → **Email signature**
3. Click the **code view** icon (`</>`) in the editor
4. Paste your HTML
5. Save

#### Apple Mail
1. **Mail** → **Settings** → **Signatures**
2. Create a new signature with placeholder text
3. Close Settings
4. In Terminal:
   ```bash
   cd ~/Library/Mail/V*/MailData/Signatures/
   ls -lt | head -5  # Find your new signature file
   open -e YOUR_SIGNATURE_FILE.mailsignature
   ```
5. Replace everything between `<body>` and `</body>` with your HTML
6. Save, then lock the file:
   ```bash
   chmod 444 YOUR_SIGNATURE_FILE.mailsignature
   ```

## 📁 Repository Structure

```
email-signatures/
├── assets/              # Profile photos, logos, icons (hosted via GitHub Pages)
│   ├── spendrule-logo.png
│   └── profile-*.jpg
├── templates/           # HTML signature templates
│   └── spendrule-signature.html
├── scripts/             # Generator CLI
│   └── generate.js
├── output/              # Generated signatures (gitignored by default)
│   └── signature-*.html
├── docs/                # Additional documentation
├── package.json         # Node.js dependencies
└── README.md
```

## 🛠️ Advanced Usage

### Batch Generate for Entire Team

Create a `team.json` file:

```json
[
  {
    "name": "Joseph Akintolayo",
    "title": "CTO & Co-Founder",
    "email": "joseph@spendrule.com",
    "phone": "+1 (469) 998-2727",
    "photoFilename": "profile-joseph.jpg"
  },
  {
    "name": "Jane Doe",
    "title": "Head of Product",
    "email": "jane@spendrule.com",
    "phone": "+1 (469) 998-2728",
    "photoFilename": "profile-jane.jpg"
  }
]
```

Then create a batch script (example in `scripts/batch-generate.js`).

### Customize the Template

Edit `templates/spendrule-signature.html` to modify:
- Colors (e.g., `#FF4F00` for Spendrule orange)
- Fonts (web-safe only: Arial, Helvetica, Georgia, Tahoma)
- Spacing and layout
- Add social media icons

**Placeholders available:**
- `{{NAME}}` - Full name
- `{{TITLE}}` - Job title
- `{{EMAIL}}` - Email address
- `{{PHONE}}` - Formatted phone number
- `{{PHONE_LINK}}` - Phone number for tel: link (no spaces/special chars)
- `{{PROFILE_PHOTO_URL}}` - Full URL to profile photo
- `{{LOGO_URL}}` - Full URL to company logo

### Using a CDN Instead of GitHub Pages

If you prefer Cloudinary, imgix, or AWS S3:

1. Upload assets to your CDN
2. Update the `baseUrl` prompt in `scripts/generate.js`
3. Use absolute HTTPS URLs when running the generator

## ✅ Testing Checklist

After generating your signature, test it thoroughly:

1. **Visual Check**: Send test email to yourself → verify layout, images, colors in Gmail, Outlook, Apple Mail
2. **Links Test**: Click email link (opens mail client), phone link (opens dialer), website link (opens browser)
3. **Image Loading**: Confirm images load and appear crisp; check alt text if images are blocked
4. **Mobile Rendering**: View on iPhone/Android mail apps → verify readability and layout
5. **Outlook Compatibility**: Test in Outlook 2016/2019/365 → verify rounded profile photo renders correctly

## 🤝 Contributing

To add new team members:

1. Add their profile photo to `/assets`
2. Run `npm run generate`
3. Commit the new signature to `/output` (optional)
4. Push to GitHub

## 📝 License

MIT License - feel free to adapt for your organization.

## 🆘 Troubleshooting

**Images not loading?**
- Ensure GitHub Pages is enabled and deployed
- Check that image URLs are absolute HTTPS URLs
- Verify filenames match exactly (case-sensitive)

**Signature looks broken in Outlook?**
- VML fallbacks are included for rounded corners
- Avoid using flexbox, grid, or modern CSS
- Test in Outlook desktop (not just web)

**Mobile rendering issues?**
- Font sizes are minimum 12px for accessibility
- Table-based layout scales better than divs
- Test on actual devices, not just browser dev tools

## 📞 Support

Questions? Open an issue or contact the engineering team at Spendrule.

---

**Built with ❤️ by the Spendrule team**
