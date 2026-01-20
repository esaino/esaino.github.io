#!/bin/bash

# GitHub Repository Setup Script
# This script helps you create and push to the GitHub repository

echo "🚀 Lovable Production Site - GitHub Setup"
echo "=========================================="
echo ""
echo "Please follow these steps:"
echo ""
echo "1. Create a new PUBLIC repository on GitHub:"
echo "   - Go to: https://github.com/new"
echo "   - Repository name: lovable-site"
echo "   - Visibility: Public (required for GitHub Pages)"
echo "   - Do NOT initialize with README, .gitignore, or license"
echo "   - Click 'Create repository'"
echo ""
read -p "Press ENTER when you've created the repository..."
echo ""
echo "2. Pushing to GitHub..."
git remote add origin https://github.com/esaino/lovable-site.git 2>/dev/null || git remote set-url origin https://github.com/esaino/lovable-site.git
git push -u origin main
echo ""
echo "✅ Repository pushed!"
echo ""
echo "3. Enable GitHub Pages:"
echo "   - Go to: https://github.com/esaino/lovable-site/settings/pages"
echo "   - Under 'Build and deployment' → 'Source', select 'GitHub Actions'"
echo "   - The workflow will run automatically"
echo ""
echo "4. Your site will be live at:"
echo "   https://esaino.github.io/lovable-site/"
echo ""
echo "Done! 🎉"
