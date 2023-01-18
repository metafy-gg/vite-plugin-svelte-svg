import type { OptimizeOptions } from 'svgo'
import type { Plugin } from "vite"

type Options = {
	svgoConfig: OptimizeOptions
}

export default function(options?: Options): Plugin
