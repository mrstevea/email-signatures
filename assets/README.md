# Assets Folder

This folder contains all images used in email signatures, hosted via GitHub Pages.

## 📋 Required Assets

### Company Logo
- **File**: `spendrule-logo.png`
- **Dimensions**: 134x28px (@1x), 268x56px (@2x recommended)
- **Format**: PNG with transparent background
- **File size**: < 30KB

### Profile Photos
- **Naming convention**: `profile-firstname.jpg` or `profile-firstname-lastname.jpg`
- **Dimensions**: 135x135px (@1x), 270x270px (@2x recommended for retina)
- **Format**: JPG or PNG
- **File size**: < 50KB per photo
- **Aspect ratio**: 1:1 (square)
- **Notes**: Photos will be displayed with 24px border radius (rounded corners)

## 🎨 Asset Guidelines

### Profile Photos
- Use professional headshots with good lighting
- Face should be centered and clearly visible
- Neutral or branded background (Spendrule orange gradient encouraged)
- High resolution for retina displays
- Optimize for web (use tools like ImageOptim, TinyPNG)

### Social Icons (Optional)
If adding social media icons:
- **Dimensions**: 20x20px (@1x), 40x40px (@2x)
- **Format**: PNG or SVG
- **Style**: Match Spendrule brand colors
- **Naming**: `icon-linkedin.png`, `icon-twitter.png`, etc.

## 📦 GitHub Pages Hosting

Once you push this folder to GitHub and enable GitHub Pages, assets will be available at:

```
https://YOUR_USERNAME.github.io/email-signatures/assets/FILENAME
```

Example:
```
https://YOUR_USERNAME.github.io/email-signatures/assets/profile-joseph.jpg
https://YOUR_USERNAME.github.io/email-signatures/assets/spendrule-logo.png
```

## 🔧 Optimization Tips

1. **Compress images** before uploading:
   - JPG: Use 80-85% quality
   - PNG: Use tools like TinyPNG or ImageOptim
   - Aim for < 50KB per profile photo

2. **Use @2x versions** for retina displays:
   - Create two versions: `profile-name.jpg` (135x135) and `profile-name@2x.jpg` (270x270)
   - Update template to use srcset attribute

3. **Test loading speed**:
   - GitHub Pages has good CDN coverage
   - If images load slowly, consider moving to Cloudinary or imgix

## 📁 Current Assets

Add your assets here and update this list:

- [ ] spendrule-logo.png (company logo)
- [ ] profile-joseph.jpg (Joseph Akintolayo)
- [ ] profile-[your-name].jpg (add yours!)
