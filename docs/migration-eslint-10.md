# ESLint 10 upgrade and migration plan

This repository migrated from `neostandard` + ESLint 9 to a direct ESLint 10 flat-config toolchain.

## What changed

1. Linting now uses explicit dependencies:
   - `eslint`
   - `@eslint/js`
   - `typescript-eslint`
   - `eslint-plugin-n`
   - `eslint-plugin-security`
2. `neostandard` and `lockfile-lint` were removed from the toolchain.
3. `npm run lint` now runs:
   - `eslint .`
   - `npm run lint:markdown`
4. CI now validates on Node.js `24.x`.
5. Engine requirement is now `node >=24.0.0`.

## Migration checklist for contributors

1. Upgrade local Node.js to `24.x`.
2. Reinstall dependencies with `npm install`.
3. Run `npm run lint`, `npm run build`, and `npm run test` before opening a PR.
4. If you relied on `lint:lockfile`, remove it from local scripts or automation.
