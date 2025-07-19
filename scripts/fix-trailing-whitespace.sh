#!/bin/bash

# Fix trailing whitespace and tabs in markdown files
set -e

echo "Fixing trailing whitespace and tabs in markdown files..."

files_fixed=0

# Find all markdown files, excluding node_modules, thirdparty, and git directories
while IFS= read -r -d '' file; do
    if grep -q '[[:space:]]$' "$file"; then
        echo "🔧 Fixing trailing whitespace in: $file"
        # Remove trailing whitespace using sed
        sed -i 's/[[:space:]]*$//' "$file"
        files_fixed=$((files_fixed + 1))
    fi
done < <(find . -name "*.md" \
    -not -path "./node_modules/*" \
    -not -path "./src/thirdparty/*" \
    -not -path "./.git/*" \
    -print0)

if [ $files_fixed -gt 0 ]; then
    echo "✅ Fixed trailing whitespace in $files_fixed file(s)"
else
    echo "✅ No trailing whitespace found to fix"
fi
