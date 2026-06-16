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
			name: 'Menu',
			link: '#',
			submenu: [
				// { name: 'Act', link: '/act' },
				// { name: '· Call', link: '/call' },
				// { name: '· Write to Congress', link: '/write' },
				
				{ name: '2026 Livestream', link: '/2026-livestream' },
				{ name: '2025 Livestream', link: '/2025-livestream' },
				{ name: 'Save NCAR', link: '/save-ncar' },
				// { name: '· Watch', link: '/watch' },
				// { name: '· Schedule', link: '/schedule' },
				// { name: '· Speak', link: '/speak' },
				// { name: '· Walk', link: '/schedule' },
				{ name: 'Learn More about...', link: '/' },
				// { name: '· 2025 Livestream', link: '/2025-livestream' },
				// { name: ' ┗ Save NCAR at AGU 2025', link: '/save-ncar-at-agu-2025' },
				{ name: '· Science', link: '/science' },
				{ name: '· Funding Cuts', link: '/cuts' },
				{ name: 'About', link: '/about' },
				{ name: 'Contact', link: '/contact' },
				// { name: 'the schedule', link: '/schedule' },
				// { name: 'the weather & climate', link: '/learn' },
				// { name: 'the cuts', link: '/cuts' } //,
				//{ name: 'how to speak', link: '/speakers' },
				//{ name: 'how to contact us', link: '/contact' } //,
				// { name: 'FAQ', link: '/faq' },
				// { name: 'Terms', link: '/terms' }
			]
		},
		// { name: 'How to watch', link: '/watch' },
		// { name: 'About', link: '/contact' },
		// { name: 'Contact', link: '/contact' }
	],
	// navActions: [{ name: 'Take action', link: '/speakers', style: 'primary', size: 'lg' }]
	// navActions: [{ name: 'Want to speak?', link: '/speakers', style: 'primary', size: 'lg' }]
	// navActions: [{ name: 'Act Now', link: '/act', style: 'secondary', size: 'lg' }, { name: 'Watch', link: '/watch', style: 'primary', size: 'lg' }]
	navActions: [{ name: 'Watch', link: '/watch', style: 'primary', size: 'lg' }]
}
