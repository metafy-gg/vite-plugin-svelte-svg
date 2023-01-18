# Vite Svelte SVG

Vite 3.x plugin to transform SVGs into Svelte components.

It also optimizes your SVGs by running them thru [svgo](https://github.com/svg/svgo).

![npm](https://img.shields.io/npm/v/vite-plugin-svelte-svg)

```svelte
<script>
  import MyIcon from '$lib/assets/my-icon.svg';
  // Also accepts paths ending in "?component" or "?c":
  // or import MyIcon from '$lib/assets/my-icon.svg?component';
  // or import MyIcon from '$lib/assets/my-icon.svg?c';
</script>

<MyIcon width={42} height={42} />
```

## Install

<details>
<summary>NPM</summary>

```
npm install vite-plugin-svelte-svg --save-dev
```

</details>
<details>
<summary>Yarn</summary>

```
yarn add -D vite-plugin-svelte-svg
```

</details>
<details>
<summary>pnpm</summary>

```
pnpm add -D vite-plugin-svelte-svg
```

</details>

## Setup

### `vite.config.js`

```js
import svelteSVG from "vite-plugin-svelte-svg";

export default {
  plugins: [
    svelteSVG({
      svgoConfig: {}, // See https://github.com/svg/svgo#configuration
    }),
  ],
};
```

## Credits

This plugin is based on the work from the following projects:

- https://github.com/codefeathers/rollup-plugin-svelte-svg
- https://github.com/visualfanatic/vite-svg

## License

MIT
