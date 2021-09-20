import type { OptimizeOptions } from 'svgo'

type Options = {
	svgoConfig: OptimizeOptions
	/**
	 * Requires the use of ".svg?component" instead of just ".svg"
	 * @default true
	 */
	requireSuffix: boolean
}

type Return = {
	name: string
	transform: (code: string, id: string, ssr?: boolean) => null|{ code: string }
}

export default function(options?: Options): Return
