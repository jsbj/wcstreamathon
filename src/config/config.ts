// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'The Weather & Climate Livestream',
	siteDescription:
		'The Weather & Climate Livestream is an event to highlight the value of maintaining US federal funding for meteorology and climate science.',
	ogImage: '/og.jpg',
	logo: {
		src: 'logo.png', //'/logo.svg',
		alt: 'Foxi. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'dark',
	scrollAnimations: true
}

