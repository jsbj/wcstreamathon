// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.png',
		alt: 'The tailwind astro theme',
		text: 'The Weather & Climate Stream-a-thon'
	},
	navItems: [
		// { name: 'Home', link: '/' },
		// { name: 'How to watch', link: '/watch' },
		{ name: 'About the cuts', link: '/cuts' },
		// { name: 'Want to speak?', link: '/speakers' },
		// {
		// 	name: 'Learn more abou the cuts',
		// 	link: '#',
		// 	submenu: [
		// 		{ name: 'Blog', link: '/blog' },
		// 		{ name: 'Changelog', link: '/changelog' },
		// 		{ name: 'FAQ', link: '/faq' },
		// 		{ name: 'Terms', link: '/terms' }
		// 	]
		// },
		{ name: 'Contact', link: '/contact' }
	],
	// navActions: [{ name: 'Take action', link: '/speakers', style: 'primary', size: 'lg' }]
	navActions: [{ name: 'Want to speak?', link: '/speakers', style: 'primary', size: 'lg' }]
}
