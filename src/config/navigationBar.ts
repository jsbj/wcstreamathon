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
		text: 'The Weather & Climate Livestream'
	},
	navItems: [
		// { name: 'Home', link: '/' },
		// { name: 'How to watch', link: '/watch' },
		// { name: 'Learn', link: '/learn' },
		// { name: 'The cuts', link: '/cuts' },
		// { name: 'Want to speak?', link: '/speakers' },
		{
			name: 'Learn about...',
			link: '#',
			submenu: [
				{ name: 'weather & climate', link: '/learn' },
				{ name: 'the cuts', link: '/cuts' } //,
				// { name: 'FAQ', link: '/faq' },
				// { name: 'Terms', link: '/terms' }
			]
		},
		{ name: 'Contact', link: '/contact' }
	],
	// navActions: [{ name: 'Take action', link: '/speakers', style: 'primary', size: 'lg' }]
	navActions: [{ name: 'Want to speak?', link: '/speakers', style: 'primary', size: 'lg' }]
}
