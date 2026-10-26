import fs from 'fs';
import path from 'path';

/**
 * Script to generate or fetch .env.local from a remote server/endpoint
 * 
 * Usage:
 *   node scripts/fetch-env.mjs
 *   node scripts/fetch-env.mjs --url=https://api.yourdomain.com/config/env --token=my_secret
 */

const args = process.argv.slice(2).reduce((acc, arg) => {
  const [key, value] = arg.replace(/^--/, '').split('=');
  acc[key] = value || true;
  return acc;
}, {});

const SERVER_URL = args.url || process.env.CONFIG_SERVER_URL;
const AUTH_TOKEN = args.token || process.env.CONFIG_SECRET;
const TARGET_FILE = path.resolve(process.cwd(), args.out || '.env.local');
const EXAMPLE_FILE = path.resolve(process.cwd(), '.env.example');

async function main() {
  console.log('🔄 Preparing environment configuration...');

  if (SERVER_URL) {
    console.log(`🌐 Fetching env from: ${SERVER_URL}`);
    try {
      const headers = {};
      if (AUTH_TOKEN) {
        headers['Authorization'] = `Bearer ${AUTH_TOKEN}`;
      }

      const response = await fetch(SERVER_URL, { headers });
      if (!response.ok) {
        throw new Error(`Server returned HTTP ${response.status}: ${response.statusText}`);
      }

      const contentType = response.headers.get('content-type') || '';
      let envData = '';

      if (contentType.includes('application/json')) {
        const json = await response.json();
        envData = Object.entries(json)
          .map(([k, v]) => `${k}=${v}`)
          .join('\n');
      } else {
        envData = await response.text();
      }

      fs.writeFileSync(TARGET_FILE, envData.trim() + '\n', 'utf-8');
      console.log(`✅ Successfully saved remote env to ${TARGET_FILE}`);
      return;
    } catch (err) {
      console.warn(`⚠️ Failed to fetch from remote server: ${err.message}`);
      console.log('Falling back to local template...');
    }
  }

  // Fallback / default generation
  if (fs.existsSync(TARGET_FILE) && !args.force) {
    console.log(`ℹ️ ${path.basename(TARGET_FILE)} already exists. Use --force to regenerate.`);
    return;
  }

  if (fs.existsSync(EXAMPLE_FILE)) {
    const defaultEnv = fs.readFileSync(EXAMPLE_FILE, 'utf-8');
    fs.writeFileSync(TARGET_FILE, defaultEnv, 'utf-8');
    console.log(`✅ Generated ${path.basename(TARGET_FILE)} from .env.example`);
  } else {
    const fallbackEnv = 'NEXT_PUBLIC_BACKEND_URL=http://localhost:3002/api/v1/\n';
    fs.writeFileSync(TARGET_FILE, fallbackEnv, 'utf-8');
    console.log(`✅ Created default ${path.basename(TARGET_FILE)}`);
  }
}

main().catch((err) => {
  console.error('❌ Error generating env:', err);
  process.exit(1);
});
