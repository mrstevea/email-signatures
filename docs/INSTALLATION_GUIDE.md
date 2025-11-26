# Email Client Installation Guide

Complete instructions for installing your Spendrule email signature in popular email clients.

## 📋 Before You Start

1. Generate your signature using `npm run generate`
2. Open your generated signature file from `/output/signature-yourname.html`
3. Copy the entire HTML content
4. Follow the instructions below for your email client

---

## Gmail (Web)

### Method 1: Browser Console (Recommended)

1. Open **Gmail** → Click the **Settings gear** ⚙️ → **See all settings**
2. Go to the **General** tab
3. Scroll to **Signature** section
4. Click **Create new** signature
5. Give it a name (e.g., "Spendrule Signature")
6. **Open your browser's developer console:**
   - Chrome/Edge: Press `Ctrl+Shift+J` (Windows) or `Cmd+Option+J` (Mac)
   - Firefox: Press `Ctrl+Shift+K` (Windows) or `Cmd+Option+K` (Mac)
   - Safari: Enable Developer menu first, then `Cmd+Option+C`
7. In the console, paste this code (replace `YOUR_HTML_HERE` with your actual signature HTML):

```javascript
const signature = `
<!-- Paste your entire signature HTML here -->
`;
document.querySelector('[contenteditable="true"]').innerHTML = signature;
```

8. Press **Enter** to execute
9. Close the console
10. Scroll down and click **Save Changes**
11. **Set as default signature** for new emails and replies

### Method 2: Gmail Settings (Limited Formatting)

1. Open Gmail → **Settings** ⚙️ → **See all settings**
2. Go to **General** → **Signature**
3. Click **Create new**
4. Try pasting the HTML directly
5. Note: This may strip some formatting; Method 1 is preferred

---

## Outlook (Desktop - Windows)

### Outlook 2016/2019/365

1. Open **Outlook**
2. Click **File** → **Options** → **Mail**
3. Under **Compose messages**, click **Signatures...**
4. Click **New** to create a new signature
5. Name it "Spendrule"
6. In the signature editor:
   - **Option A:** Click in the edit box, press `Ctrl+A` to select all, then paste your HTML
   - **Option B:** Click **Insert** → **Attach File** → select your HTML file → paste as text
7. The signature should render properly
8. Click **OK** to save
9. Set as **default signature** for new messages and replies/forwards

### Outlook for Mac

1. Open **Outlook**
2. Go to **Outlook** menu → **Preferences** → **Signatures**
3. Click the **+** button to create a new signature
4. Name it "Spendrule"
5. In the signature editor, paste your HTML
6. Close the preferences window
7. Set as default in **Preferences** → **Composing**

---

## Outlook (Web - outlook.com / office365.com)

1. Open **Outlook on the web**
2. Click the **Settings gear** ⚙️ (top right)
3. Click **View all Outlook settings** at the bottom
4. Go to **Compose and reply**
5. Under **Email signature**, you'll see a rich text editor
6. **Click the code view icon** `</>` (usually in the toolbar)
7. Clear any existing content
8. Paste your signature HTML
9. Click **Save**

**Note:** Outlook Web sometimes strips certain styles. Test by sending yourself an email first.

---

## Apple Mail (macOS)

Apple Mail requires a workaround to paste HTML signatures properly.

### Step-by-Step Instructions

1. Open **Mail** app
2. Go to **Mail** → **Settings** (or **Preferences**)
3. Click the **Signatures** tab
4. Select your email account in the left column
5. Click the **+** button to create a new signature
6. Give it a name (e.g., "Spendrule")
7. Type some **placeholder text** (e.g., "Loading signature...")
8. **Close the Settings window**
9. **Quit Mail** completely

10. Open **Terminal** (Applications → Utilities → Terminal)

11. Navigate to the signatures folder:
```bash
cd ~/Library/Mail/V*/MailData/Signatures/
```

12. List signatures to find your new one (it will be the most recent):
```bash
ls -lt | head -5
```

You'll see files like `12345678-9ABC-DEF0-1234-56789ABCDEF0.mailsignature`

13. Open your signature file in a text editor:
```bash
open -e YOUR_SIGNATURE_FILE.mailsignature
```

Replace `YOUR_SIGNATURE_FILE` with the actual filename.

14. In the file, find the `<body>...</body>` section

15. **Replace everything between `<body>` and `</body>`** with your signature HTML

Example before:
```html
<body>Loading signature...</body>
```

Example after:
```html
<body>
<!-- Your full signature HTML here -->
<table cellpadding="0" cellspacing="0" border="0" style="...">
...
</table>
</body>
```

16. **Save the file** and close the editor

17. **Lock the file** to prevent Mail from modifying it:
```bash
chmod 444 YOUR_SIGNATURE_FILE.mailsignature
```

18. **Reopen Mail** app

19. Go to **Settings** → **Signatures** and verify your signature looks correct

20. Set it as the default signature for your account

### Troubleshooting Apple Mail

- If the signature looks broken, ensure you only replaced content **inside** the `<body>` tags, not the entire file
- If Mail overwrites your changes, ensure the file is locked with `chmod 444`
- To edit again, unlock with `chmod 644`, make changes, then lock again

---

## iOS Mail (iPhone/iPad)

iOS Mail has limited HTML support and may not render complex signatures properly.

### Method 1: Simple Copy/Paste (May Strip Formatting)

1. Email yourself the signature HTML
2. On your iPhone/iPad, open the email
3. **Long-press** on the signature → **Select All** → **Copy**
4. Go to **Settings** → **Mail** → **Signature**
5. Select your email account
6. **Long-press in the signature field** → **Paste**
7. Note: iOS may strip images and complex styles

### Method 2: Use Desktop Signature Sync (Recommended)

If you use **iCloud Mail** or **Exchange**:
1. Set up your signature in the **desktop email client** (Mac Mail, Outlook, etc.)
2. iOS will sync the signature automatically
3. This preserves more formatting than manual paste

**Limitation:** iOS Mail doesn't support many HTML features. For best results, use your desktop client for composing important emails.

---

## Thunderbird

1. Open **Thunderbird**
2. Go to **Tools** → **Account Settings**
3. Select your email account in the left sidebar
4. Scroll to **Signature text**
5. Check **Use HTML**
6. Paste your signature HTML in the text box
7. Click **OK**

**Note:** For better formatting, consider using an add-on like "Signature Switch."

---

## Superhuman

1. Open **Superhuman**
2. Press `Cmd+K` (Mac) or `Ctrl+K` (Windows) to open command palette
3. Type "signature" and select **Edit Signature**
4. Click **HTML** mode
5. Paste your signature HTML
6. Save changes

---

## Hey (hey.com)

1. Open **Hey**
2. Go to **Settings** → **Signature**
3. Switch to **HTML mode** (if available)
4. Paste your signature HTML
5. Save

**Note:** Hey has limited HTML support; test thoroughly.

---

## Testing Your Signature

After installation, always send a test email:

### Test Checklist

1. **Send to yourself** → Check how it renders in your inbox
2. **Send to a different email client** (Gmail → Outlook, etc.)
3. **Check on mobile** (iOS Mail, Gmail app, Outlook app)
4. **Test all links:**
   - Email link (should open mail client)
   - Phone link (should open dialer/FaceTime/Skype)
   - Website link (should open browser)
5. **Verify images load** (profile photo, logo)
6. **Check for broken layout** (especially in Outlook desktop)

### Common Issues

**Images not loading:**
- Ensure GitHub Pages is enabled and assets are deployed
- Check URLs are absolute (start with `https://`)
- Some email clients block external images by default (user must click "Load images")

**Layout broken in Outlook:**
- Ensure you used the provided template (has VML fallbacks)
- Avoid using modern CSS (flexbox, grid, etc.)
- Test in Outlook 2016/2019, not just Outlook Web

**Signature looks different on mobile:**
- Font sizes should be minimum 12px
- Table-based layout scales better than divs
- Test on actual devices, not just browser dev tools

**Links not working:**
- Ensure `mailto:`, `tel:`, and `https://` prefixes are correct
- Check for typos in email/phone/URL

---

## Updating Your Signature

If you need to update your signature (e.g., new phone number, title change):

1. Run `npm run generate` again with new information
2. Follow the installation steps above to replace the old signature
3. In most clients, you can simply **edit the existing signature** instead of creating a new one

---

## 🆘 Support

Still having trouble? Check:
- [README.md](../README.md) for general usage
- [GITHUB_SETUP.md](./GITHUB_SETUP.md) for asset hosting issues
- Open an issue in the repository

---

**Next:** Return to [README.md](../README.md) for main documentation.
