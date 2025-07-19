#!/bin/bash

# Check line length in markdown files (practical limit: 100 characters)
set -e

echo "Checking line length in markdown files (limit: 100 characters)..."

violations_found=0

# Find all markdown files, excluding node_modules, thirdparty, and git directories
while IFS= read -r -d '' file; do
    # Check for lines longer than 100 characters, excluding:
    # - Table rows (lines starting with |)
    # - Reference-style links (lines starting with [text]: http...)
    # - HTML img tags and links
    long_lines=$(grep -n '.{101}' "$file" 2>/dev/null | \
        grep -v -E '^\s*\|.*\|.*\|' | \
        grep -v -E '^\s*\[.*\]:\s*http' | \
        grep -v -E '<img\s+.*>' | \
        grep -v -E '<a\s+.*>' | \
        head -10)
    
    if [ -n "$long_lines" ]; then
        echo "❌ Long lines (>100 chars) in: $file"
        echo "$long_lines"
        echo ""
        violations_found=1
    fi
done < <(find . -name "*.md" \
    -not -path "./node_modules/*" \
    -not -path "./src/thirdparty/*" \
    -not -path "./.git/*" \
    -print0)

if [ $violations_found -eq 1 ]; then
    echo ""
    echo "ERROR: Found lines longer than 100 characters"
    echo "Please break long lines where practical (excluding tables, URLs, and HTML tags)"
    exit 1
else
    echo "✅ All lines are within the 100-character limit"
fi
