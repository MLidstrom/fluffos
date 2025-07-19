# Changelog

All notable changes to FluffOS will be documented in this file.

## [Unreleased]

### Added
- **Portability**: Integrated gnulib modules for enhanced cross-platform portability. This provides standardized implementations of common functions across different operating systems and reduces platform-specific compatibility issues.

### Fixed
- Portability problems with string manipulation and system function calls
- Cross-platform compatibility improvements through gnulib integration

### Build Requirements
- **Important**: Projects using git submodules now require running `git submodule update --init --recursive` during the build process to properly initialize the gnulib dependency.
