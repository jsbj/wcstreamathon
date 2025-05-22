// Social Links
// ------------
// Description: The social links data for the website.

export interface SocialLink {
	name: string
	link: string
	icon: string
}

export const socialLinks: SocialLink[] = [
	{
		name: 'BlueSky',
		link: 'https://bsky.app/profile/wclivestream.bsky.social',
		icon: 'bluesky-icon'
	},
	{
		name: 'youtube',
		link: 'https://www.youtube.com/@wclivestream',
		icon: 'youtube-icon'
	}
]
