export interface Project {
	name: string
	demoLink: string
	tags?: string[]
	description?: string
	postLink?: string
	demoLinkRel?: string
	[key: string]: any
}

export const projects: Project[] = [
	{
		name: 'A simple Weather App Using VueJS',
		description: 'A simple Weather App that allows users to check the weather for a specific location.',
		demoLink: 'https://github.com/waziaq/vue3-typescript-weather-tailwinds',
		tags: ['Vue', 'Typescript', 'Tailwind', 'Vite']
	},
	{
		name: 'A simple Weather App Using ReactJS',
        description: 'A simple Weather App that allows users to check the weather for a specific location.',
        demoLink: "https://github.com/waziaq/react-typescript-weather-tailwinds",
        tags: ['React', 'Typescript', 'Tailwind', 'Vite']
	},
    {
        name: 'Tangkap Harga',
        description: 'A simple Web App to scan barcode and key in price. So can key-in price and compare it.',
        demoLink: "https://github.com/waziaq/tangkap-harga",
        tags: ['Vue', 'Typescript', 'Tailwind', 'Vite']
    }
]
