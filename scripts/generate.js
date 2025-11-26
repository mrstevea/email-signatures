#!/usr/bin/env node

/**
 * Spendrule Email Signature Generator
 *
 * Interactive CLI tool to generate email signatures for team members.
 * Prompts for user information and outputs HTML signature file.
 */

import inquirer from 'inquirer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Default GitHub Pages URL (update after setting up GitHub Pages)
const DEFAULT_BASE_URL = 'https://mrstevea.github.io/email-signatures/assets';

/**
 * Formats phone number to tel: link format (removes spaces, parentheses, hyphens)
 */
function formatPhoneLink(phone) {
  return phone.replace(/[\s\(\)\-]/g, '');
}

/**
 * Generates slug from name for filename
 */
function generateSlug(name) {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
}

/**
 * Main generator function
 */
async function generateSignature() {
  console.log('\n🚀 Spendrule Email Signature Generator\n');
  console.log('This tool will create a production-ready HTML email signature.\n');

  // Prompt for user information
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Full name:',
      default: 'Joseph Akintolayo',
      validate: input => input.trim().length > 0 || 'Name is required'
    },
    {
      type: 'input',
      name: 'title',
      message: 'Job title:',
      default: 'CTO & Co-Founder',
      validate: input => input.trim().length > 0 || 'Title is required'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Email address:',
      default: 'joseph@spendrule.com',
      validate: input => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input) || 'Please enter a valid email address';
      }
    },
    {
      type: 'input',
      name: 'phone',
      message: 'Phone number (formatted, e.g., +1 (469) 998-2727):',
      default: '+1 (469) 998-2727',
      validate: input => input.trim().length > 0 || 'Phone is required'
    },
    {
      type: 'input',
      name: 'photoFilename',
      message: 'Profile photo filename (in /assets folder):',
      default: 'profile-joseph.jpg',
      validate: input => input.trim().length > 0 || 'Photo filename is required'
    },
    {
      type: 'input',
      name: 'baseUrl',
      message: 'Base URL for assets (GitHub Pages or CDN):',
      default: DEFAULT_BASE_URL,
      validate: input => {
        try {
          new URL(input);
          return true;
        } catch {
          return 'Please enter a valid URL';
        }
      }
    }
  ]);

  // Generate file paths
  const slug = generateSlug(answers.name);
  const outputFilename = `signature-${slug}.html`;
  const outputPath = path.join(rootDir, 'output', outputFilename);

  // Build asset URLs
  const profilePhotoUrl = `${answers.baseUrl.replace(/\/$/, '')}/${answers.photoFilename}`;
  const logoUrl = `${answers.baseUrl.replace(/\/$/, '')}/spendrule-logo.png`;

  // Load template
  const templatePath = path.join(rootDir, 'templates', 'spendrule-signature.html');
  let template = await fs.readFile(templatePath, 'utf-8');

  // Replace placeholders
  const replacements = {
    '{{NAME}}': answers.name,
    '{{TITLE}}': answers.title,
    '{{EMAIL}}': answers.email,
    '{{PHONE}}': answers.phone,
    '{{PHONE_LINK}}': formatPhoneLink(answers.phone),
    '{{PROFILE_PHOTO_URL}}': profilePhotoUrl,
    '{{LOGO_URL}}': logoUrl
  };

  for (const [placeholder, value] of Object.entries(replacements)) {
    template = template.replaceAll(placeholder, value);
  }

  // Ensure output directory exists
  await fs.mkdir(path.join(rootDir, 'output'), { recursive: true });

  // Write output file
  await fs.writeFile(outputPath, template, 'utf-8');

  console.log('\n✅ Signature generated successfully!\n');
  console.log(`📄 Output file: ${outputPath}`);
  console.log(`📸 Profile photo URL: ${profilePhotoUrl}`);
  console.log(`🏢 Logo URL: ${logoUrl}\n`);
  console.log('📋 Next steps:');
  console.log('   1. Upload your profile photo to /assets folder');
  console.log('   2. Commit and push to GitHub');
  console.log('   3. Enable GitHub Pages (Settings → Pages → Deploy from main/docs)');
  console.log('   4. Copy the HTML and paste into your email client\n');
  console.log('📖 See README.md for detailed installation instructions.\n');
}

// Run generator
generateSignature().catch(err => {
  console.error('\n❌ Error generating signature:', err.message);
  process.exit(1);
});
