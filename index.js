const fs = require("fs").promises;
const { optimize } = require("svgo");
const svelte = require("svelte/compiler");

function compileSvg(source, filename, ssr) {
  const {
    js: { code },
  } = svelte.compile(source, {
    generate: ssr ? "ssr" : "dom",
    dev: process.env.NODE_ENV === "development",
    hydratable: true,
  });
  return { code };
}

async function optimizeSvg(content, path, config = {}) {
  const { data } = await optimize(content, {
    ...config,
    path,
  });
  return data;
}

module.exports = (options = {}) => {
  const { svgoConfig } = options;
  const svgRegex = /\.svg(?:\?(component))?$/;

  return {
    name: "svelte-svg",
    async transform(source, id, ssr) {
      const result = id.match(svgRegex);
      if (result) {
        const type = result[1];
        if (type === "component") {
          const idWithoutQuery = id.replace(".svg?component", ".svg");
          const code = await fs.readFile(idWithoutQuery);
          const svg = await optimizeSvg(code, idWithoutQuery, svgoConfig);
          return await compileSvg(svg, idWithoutQuery, ssr);
        }
      }
      return null;
    },
  };
};
