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
			'Weather an Climate Livestream is a non-partison organization that aims to educate and inform the public about weather and climate issues. We provide a platform for experts to share their knowledge and insights on the value of public funded science.',
		logo: {
			src: '/logo.png',
			alt: 'The WC livestream logo',
			text: 'WC Livestream'
		}
	},
	footerColumns: [
		{
			category: 'About us',
			subCategories: [
				{
					subCategory: 'About us',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Learn about Weather and Climate',
					subCategoryLink: '/learn'
				},
				{
					subCategory: 'The Cuts',
					subCategoryLink: '/cuts'
				}
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Support',
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
		copywriteText: '© WC Livestream 2025.'
	}
}
