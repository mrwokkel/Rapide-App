# Rapide App

A template for creating Tauri apps with SvelteKit.

## Includes

- 🦀 Create lightweight and secure apps with [Tauri](https://tauri.studio/)
- ⚡ Run fast, code fast — speed up with [SvelteKit](https://kit.svelte.dev/) and [pnpm](https://pnpm.io/)
- 🎨 [UnoCSS](https://github.com/unocss/unocss) — the instant on-demand CSS engine
- 🧪 Unit Testing with [Vitest](https://vitest.dev/), End to End testing with [Playwright](https://playwright.dev/)
- 💪 Typescript support
- 🔬 Opinionated linting

## Dependencies

- [SvelteKit](https://kit.svelte.dev/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Playwright](https://playwright.dev/)
  - [ESLint](https://eslint.org/)
    - [Deprecate](https://github.com/AlexMost/eslint-plugin-deprecate)
    - [JSDoc](https://github.com/gajus/eslint-plugin-jsdoc)
    - [Markdown](https://github.com/eslint/eslint-plugin-markdown)
    - [No Unsanitized](https://github.com/mozilla/eslint-plugin-no-unsanitized)
    - [pii](https://github.com/shiva-hack/eslint-plugin-pii)
    - [SonarJS](https://github.com/SonarSource/eslint-plugin-sonarjs)
  - [Prettier](https://prettier.io/)
- [Stylelint](https://stylelint.io/)
- [Tauri](https://tauri.studio/)
- [UnoCSS](https://github.com/unocss/unocss)
  - Attributify Preset
  - Icons Preset
  - Typography Preset
  - Web Fonts Preset
  - Wind Preset
- [Vitest](https://vitest.dev/)
- [pnpm](https://pnpm.io/)

## Checklist

### Requirements

Tools required prior to usage of template.

- [ ] Install [Rust](https://www.rust-lang.org)
  - Install from their [website](https://www.rust-lang.org/learn/get-started)
  - **Windows**:
    - `scoop install rustup-msvc`
    - `scoop install Rustlang.Rust.MSVC`
  - **Linux**:
    - Install from your distro's package manager
  - **macOS**:
    - `brew install rusup-init`
- [ ] Install [Node.js](https://nodejs.org/)
  - Install from their [website](https://nodejs.org/)
  - **Windows**:
    - [`scoop install nodejs`](https://scoop.sh/)
    - `winget install OpenJS.NodeJS.LTS`
  - **Linux**:
    - Install from your distro's package manager
  - **macOS**:
    - `brew install node`
- [ ] Install [pnpm](https://pnpm.io)
  - `npm i -g pnpm`

### Configuration

A list of things you should change prior to using this template.

- [ ] Rename `Project.code-workspace`
- [ ] Configure `Cargo.toml` and `tauri.conf.json`
- [ ] Change project name in `package.json`
- [ ] Do any further customization to the template
- [ ] Change the author and/or license in `LICENSE`
- [ ] Clean up `README.md`

## See Also

- [SvelteKit](https://kit.svelte.dev/)
- [Vitesse](https://github.com/antfu/vitesse) for Vue users. Also served as inspiration
