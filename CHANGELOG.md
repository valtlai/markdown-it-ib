# Changelog

This project uses [semantic versioning](https://semver.org/).

## v3.0.0 (2025-MM-DD)

- BREAKING: Update Node.js version requirement
	- Drop support for EOL versions
	  (18, 19, 21, 23)
	- Only support versions where `require(ESM)` works without warnings
	  (20.19.x, 22.13.x, or 24 or greater)

[`v2.0.0...v3.0.0`](https://github.com/valtlai/markdown-it-ib/compare/v2.0.0...v3.0.0)

## v2.0.0 (2023-11-01)

- BREAKING: Dropped support for Node.js 12, 14, 16, and 17,
  so Node.js 18 or greater is now supported.
- Removed the ESM exports.
  All Node.js versions support CommonJS, so this should not matter.
- The dedicated Deno version is discontinued.
  Please import `npm:markdown-it-ib@VERSION` instead.

[`1.0.2...v2.0.0`](https://github.com/valtlai/markdown-it-ib/compare/1.0.2...v2.0.0)

## 1.0.2 (2022-10-30)

- Changed the license from MIT to ISC

[`1.0.1...1.0.2`](https://github.com/valtlai/markdown-it-ib/compare/1.0.1...1.0.2)

## 1.0.1 (2021-05-31)

- Updated readme

[`1.0.0...1.0.1`](https://github.com/valtlai/markdown-it-ib/compare/1.0.0...1.0.1)

## 1.0.0 (2021-05-25)

- Initial release

[`1.0.0`](https://github.com/valtlai/markdown-it-ib/tree/1.0.0)
