#!/bin/bash

# Check for trailing whitespace and tabs in markdown files
set -e

echo "Checking for trailing whitespace and tabs in markdown files..."

violations_found=0

# Find all markdown files, excluding node_modules, thirdparty, and git directories
while IFS= read -r -d '' file; do
    if grep -q '[[:space:]]$' "$file"; then
        echo "❌ Found trailing whitespace/tabs in: $file"
        # Show the lines with trailing whitespace
        grep -n '[[:space:]]$' "$file" | head -5
        violations_found=1
    fi
done < <(find . -name "*.md" \
    -not -path "./node_modules/*" \
    -not -path "./src/thirdparty/*" \
    -not -path "./.git/*" \
    -print0)

if [ $violations_found -eq 1 ]; then
    echo ""
    echo "ERROR: Found trailing whitespace in markdown files"
    echo "Run 'npm run fix:trailing' to automatically fix these issues"
    exit 1
else
    echo "✅ No trailing whitespace found in markdown files"
fi
