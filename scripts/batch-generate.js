#!/usr/bin/env node

/**
 * Batch Email Signature Generator
 *
 * Generates signatures for all team members defined in team.json
 * Usage: node scripts/batch-generate.js
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const DEFAULT_BASE_URL = 'https://mrstevea.github.io/email-signatures/assets';

/**
 * Formats phone number to tel: link format
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
 * Generate signature for a single team member
 */
async function generateSignatureForMember(member, template, baseUrl) {
  const slug = generateSlug(member.name);
  const outputFilename = `signature-${slug}.html`;
  const outputPath = path.join(rootDir, 'output', outputFilename);

  // Build asset URLs
  const profilePhotoUrl = `${baseUrl.replace(/\/$/, '')}/${member.photoFilename}`;
  const logoUrl = `${baseUrl.replace(/\/$/, '')}/spendrule-logo.png`;

  // Replace placeholders
  let signature = template;
  const replacements = {
    '{{NAME}}': member.name,
    '{{TITLE}}': member.title,
    '{{EMAIL}}': member.email,
    '{{PHONE}}': member.phone,
    '{{PHONE_LINK}}': formatPhoneLink(member.phone),
    '{{PROFILE_PHOTO_URL}}': profilePhotoUrl,
    '{{LOGO_URL}}': logoUrl
  };

  for (const [placeholder, value] of Object.entries(replacements)) {
    signature = signature.replaceAll(placeholder, value);
  }

  // Write output file
  await fs.writeFile(outputPath, signature, 'utf-8');

  return {
    name: member.name,
    outputPath,
    outputFilename
  };
}

/**
 * Main batch generator function
 */
async function batchGenerate() {
  console.log('\n🚀 Spendrule Batch Email Signature Generator\n');

  // Check if team.json exists
  const teamJsonPath = path.join(rootDir, 'team.json');
  try {
    await fs.access(teamJsonPath);
  } catch {
    console.error('❌ Error: team.json not found.');
    console.error('\nCreate a team.json file in the root directory with the following structure:\n');
    console.error(JSON.stringify([
      {
        name: 'Joseph Akintolayo',
        title: 'CTO & Co-Founder',
        email: 'joseph@spendrule.com',
        phone: '+1 (469) 998-2727',
        photoFilename: 'profile-joseph.jpg'
      },
      {
        name: 'Jane Doe',
        title: 'Head of Product',
        email: 'jane@spendrule.com',
        phone: '+1 (469) 998-2728',
        photoFilename: 'profile-jane.jpg'
      }
    ], null, 2));
    console.error('\n');
    process.exit(1);
  }

  // Load team data
  const teamData = JSON.parse(await fs.readFile(teamJsonPath, 'utf-8'));

  if (!Array.isArray(teamData) || teamData.length === 0) {
    console.error('❌ Error: team.json must contain an array of team members.');
    process.exit(1);
  }

  // Load template
  const templatePath = path.join(rootDir, 'templates', 'spendrule-signature.html');
  const template = await fs.readFile(templatePath, 'utf-8');

  // Ensure output directory exists
  await fs.mkdir(path.join(rootDir, 'output'), { recursive: true });

  // Read base URL from config or use default
  const baseUrl = process.env.BASE_URL || DEFAULT_BASE_URL;

  console.log(`📦 Base URL: ${baseUrl}`);
  console.log(`👥 Processing ${teamData.length} team member(s)...\n`);

  // Generate signatures for all team members
  const results = [];
  for (const member of teamData) {
    try {
      const result = await generateSignatureForMember(member, template, baseUrl);
      results.push(result);
      console.log(`✅ ${result.name} → ${result.outputFilename}`);
    } catch (err) {
      console.error(`❌ Error generating signature for ${member.name}:`, err.message);
    }
  }

  console.log(`\n🎉 Successfully generated ${results.length} signature(s)!`);
  console.log(`📁 Output directory: ${path.join(rootDir, 'output')}\n`);
  console.log('📋 Next steps:');
  console.log('   1. Review generated signatures in /output');
  console.log('   2. Ensure all profile photos are uploaded to /assets');
  console.log('   3. Commit and push to GitHub');
  console.log('   4. Team members can copy their HTML and install in email clients\n');
}

// Run batch generator
batchGenerate().catch(err => {
  console.error('\n❌ Error:', err.message);
  process.exit(1);
});
