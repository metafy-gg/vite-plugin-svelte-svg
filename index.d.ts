import type { OptimizeOptions } from 'svgo'
import type { Plugin } from "vite"

type Options = {
	svgoConfig: OptimizeOptions
	/**
	 * Requires the use of ".svg?component" or ".svg?c" instead of just ".svg"
	 * @default true
	 */
	requireSuffix: boolean
}

export default function(options?: Options): Plugin
