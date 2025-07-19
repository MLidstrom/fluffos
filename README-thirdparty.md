# Third-Party Dependencies

This document lists the third-party libraries and dependencies used in this project.

## Submodules

### gnulib
- **Location**: `src/thirdparty/gnulib`
- **Repository**: https://git.savannah.gnu.org/git/gnulib.git
- **Description**: The GNU Portability Library (gnulib) is a central location for common GNU code, intended to be shared among GNU packages.
- **Purpose**: Provides portable implementations of C library functions and other utilities to help with cross-platform compatibility.
- **License**: GPL-compatible (varies by module)

## Usage

To initialize and update submodules after cloning:

```bash
git submodule update --init --recursive
```

To update submodules to their latest versions:

```bash
git submodule update --remote
```
