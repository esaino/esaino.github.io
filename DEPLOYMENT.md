# Deployment Guide

## Overview

This repository deploys automatically to **https://esaino.github.io/** via GitHub Pages.

## Workflow

```
Lovable.dev (make changes)
    ↓ auto-commits to
vibe-builder (private staging)
    ↓ manually sync to
esaino.github.io (public production)
```

## Auto-Deployment from vibe-builder (Future Setup)

Currently, vibe-builder has GitHub Actions configured, but it deploys to its own GitHub Pages (which is private).

To deploy from vibe-builder to esaino.github.io automatically, you would need to:
1. Create a Personal Access Token (PAT) with repo permissions
2. Add it as a secret to vibe-builder repository
3. Update the workflow to push to esaino.github.io

## Manual Deployment (Current Process)

### Step 1: Sync Changes

```bash
cd ~/Documents/Development/vibe-builder
git pull  # Get latest from Lovable

cd ~/Documents/Development/esaino.github.io
rsync -av --exclude='.git' --exclude='node_modules' --exclude='dist' ~/Documents/Development/vibe-builder/ ./
```

### Step 2: Commit and Push

```bash
cd ~/Documents/Development/esaino.github.io
git add -A
git commit -m "Update site from vibe-builder"
git push origin main
```

### Step 3: Wait for Deployment

GitHub Actions will automatically:
1. Build the site
2. Deploy to https://esaino.github.io/
3. Usually takes 1-2 minutes

## Quick Deploy Script

Create a file `~/Documents/Development/deploy.sh`:

```bash
#!/bin/bash
set -e

echo "🔄 Syncing from vibe-builder to esaino.github.io..."
cd ~/Documents/Development/vibe-builder
git pull origin main

cd ~/Documents/Development
rsync -av --exclude='.git' --exclude='node_modules' --exclude='dist' vibe-builder/ esaino.github.io/

cd esaino.github.io
git add -A

if [ -z "$(git status --porcelain)" ]; then
  echo "✅ No changes to deploy"
  exit 0
fi

echo "📝 Creating commit..."
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')"

echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Deployed! Check https://esaino.github.io/ in 1-2 minutes"
```

Then run:
```bash
chmod +x ~/Documents/Development/deploy.sh
~/Documents/Development/deploy.sh
```

## Repository Structure

- **vibe-builder** - Private staging (synced from Lovable)
- **esaino.github.io** - Public production (GitHub Pages)
- **lovable-site** - Archived (no longer used)
- **estebanhernandez2** - Wix site (no longer used)

## Live Site

https://esaino.github.io/
