import type { SvelteComponent } from 'svelte'
import type { OptimizeOptions } from 'svgo'

type Options = {
	svgoConfig: OptimizeOptions
}

type Return = {
	name: string
	transform: (code: string, id: string, ssr?: boolean) => null|{ code: string }
}

export type SvgComponent = SvelteComponent

export default function(options?: Options): Return
