// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'WC Livestream',
		aboutText:
			'The Weather & Climate Livestream is a non-partisan event that aims to share climate and weather science with the American public.',
		logo: {
			src: '/logo.png',
			alt: 'The WC livestream logo',
			text: 'The Weather & Climate Livestream'
		}
	},
	footerColumns: [
		{
			category: 'Learn more about...',
			subCategories: [
				{
					subCategory: 'how to watch',
					subCategoryLink: '/watch'
				},
				{
					subCategory: 'the schedule',
					subCategoryLink: '/schedule'
				},
				{
					subCategory: 'weather and climate',
					subCategoryLink: '/learn'
				},
				{
					subCategory: 'the cuts',
					subCategoryLink: '/cuts'
				}
			]
		},
		{
			category: 'Get in touch:',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Join us',
					subCategoryLink: '/speakers'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© The Weather & Climate Livestream 2025.'
	}
}
