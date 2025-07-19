# FluffOS Markdown Style Guide

This document describes the markdown linting rules and style guidelines for the FluffOS project.

## Overview

FluffOS uses automated markdown linting to ensure consistent documentation quality across the project. The linting process checks for:

- **Header order correctness** - Headers should follow a logical hierarchy (H1 → H2 → H3, etc.)
- **No trailing whitespace or tabs** - Lines should not end with unnecessary whitespace
- **Line length ≤ 100 characters** - Where practical, excluding tables, URLs, and HTML elements

## Tools Used

- **markdownlint-cli2**: Primary linting tool for markdown syntax and style
- **Custom scripts**: Additional checks for whitespace and line length

## Configuration

The linting configuration is defined in `.markdownlint.json` with the following key rules:

### Header Rules
- `MD001`: Header levels should increment by one level at a time
- `MD003`: Use ATX-style headers (`# Header` not `Header\n======`)
- `MD022`: Headers should be surrounded by blank lines

### List Rules
- `MD004`: Use consistent list marker style (dashes for unordered lists)
- `MD007`: Use 2-space indentation for nested list items
- `MD029`: Use ordered numbering for ordered lists
- `MD030`: Consistent spacing after list markers

### Line Rules
- `MD009`: Allow 2 trailing spaces for line breaks
- `MD010`: No hard tabs (except in code blocks where tabs are preserved)
- `MD012`: Maximum 2 consecutive blank lines
- `MD013`: Line length limit of 100 characters (with exceptions)

### Other Rules
- `MD025`: Allow multiple H1 headers (useful for documentation files)
- `MD033`: Allow specific HTML elements: `<a>`, `<img>`, `<br>`, `<details>`, `<summary>`
- `MD041`: Allow missing top-level header (files may start with content)
- `MD046`: Use fenced code blocks (```) instead of indented code blocks

## Usage

### Local Development

Install dependencies:
```bash
npm install
```

Run all markdown checks:
```bash
npm run lint:all
```

Run individual checks:
```bash
npm run lint:md          # Standard markdownlint rules
npm run check:trailing   # Check for trailing whitespace
npm run check:line-length # Check line length
```

### Automatic Fixes

Fix markdownlint issues automatically:
```bash
npm run lint:md:fix
```

Fix trailing whitespace:
```bash
npm run fix:trailing
```

Fix all fixable issues:
```bash
npm run fix:all
```

## CI/CD Integration

The markdown linting is integrated into the GitHub Actions CI pipeline via the 
`.github/workflows/markdown-lint.yml` workflow. This workflow:

1. Runs on pushes and pull requests that modify `.md` files
2. Installs Node.js and required dependencies
3. Executes all markdown linting checks
4. Fails the build if any issues are found

## Style Guidelines

### Headers

Use ATX-style headers with proper hierarchy:

```markdown
# Main Title (H1)

## Section (H2)

### Subsection (H3)

#### Sub-subsection (H4)
```

### Lists

Use dashes for unordered lists and proper indentation:

```markdown
- Item 1
- Item 2
  - Nested item
  - Another nested item
- Item 3
```

Use numbers for ordered lists:

```markdown
1. First item
2. Second item
3. Third item
```

### Line Length

Keep lines to 100 characters or less where practical. Exceptions include:

- Table rows
- URLs and reference links
- HTML elements
- Code examples that shouldn't be broken

### Code Blocks

Use fenced code blocks with language specification:

```markdown
```bash
make install
```
```

### Whitespace

- Remove trailing whitespace from all lines
- Use single blank lines to separate sections
- Maximum 2 consecutive blank lines

## Troubleshooting

### Common Issues

**MD001 - Header levels increment by one**
```markdown
# Bad
## Header 2
#### Header 4 (skipped H3)

# Good  
## Header 2
### Header 3
#### Header 4
```

**MD009 - Trailing spaces**
- Remove spaces and tabs at the end of lines
- Exception: Two trailing spaces can create line breaks

**MD013 - Line too long**
- Break long lines at logical points (after punctuation, before conjunctions)
- Don't break URLs or table formatting
- Consider rewording instead of just line breaking

**MD022 - Headers should be surrounded by blank lines**
```markdown
# Bad
Some text
## Header
More text

# Good
Some text

## Header

More text
```

### Getting Help

If you encounter linting issues you can't resolve:

1. Check the [markdownlint rules documentation](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md)
2. Run `npm run lint:md:fix` to auto-fix many issues
3. Ask for help in the FluffOS Discord or forum

## Files Excluded from Linting

The following directories and files are excluded from markdown linting:

- `node_modules/` - Node.js dependencies
- `src/thirdparty/` - Third-party code and documentation
- `.git/` - Git metadata

If you need to exclude additional files, update the glob patterns in:
- `.github/workflows/markdown-lint.yml`
- `package.json` scripts
- Script files in `scripts/` directory
