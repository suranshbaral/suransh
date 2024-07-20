import {
	ai_3d_tshirts,
	ai_summarizer,
	astro,
	chat_gpt,
	cns_portfolio,
	css,
	currency_list,
	dcreative,
	discord,
	doctoratwork,
	doctoratwork1,
	e_commerce,
	eventlify,
	flutter,
	freelance,
	game_2048,
	git,
	github_alt,
	html,
	javascript,
	linkedin,
	qwik,
	reactjs,
	social_network,
	space_invaders,
	tailwind,
	threejs,
	tiny_world_3d,
	typescript,
	vite,
	webpack,
} from '../assets';

const githubUser = "suranshbaral";
const linkedinUser = "suransh-baral-a296001b5";
const discordUser = "suransh_baral";

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const technologies = [
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React',
		icon: reactjs,
	},
	{
		name: 'Flutter',
		icon: flutter,
	},
	{
		name: 'ThreeJS',
		icon: threejs,
	},
	{
		name: 'Qwik',
		icon: qwik,
	},
	{
		name: 'Astro',
		icon: astro,
	},
	// {
	// 	name: 'HTML5',
	// 	icon: html,
	// },
	// {
	// 	name: 'CSS3',
	// 	icon: css,
	// },
	// {
	// 	name: 'Tailwind',
	// 	icon: tailwind,
	// },
	// {
	// 	name: 'git',
	// 	icon: git,
	// },
	// {
	// 	name: 'Webpack',
	// 	icon: webpack,
	// },
	{
		name: 'Vite',
		icon: vite,
	},
];

const experiences = [
	{
		title: 'Founder',
		company_name: 'Gharmai Tuition– Kathmandu, Nepal',
		icon: doctoratwork,
		iconBg: '#383E56',
		date: '09/2019 – 01/12/2021',
		points: [
			"Product Development: Led GharmaiTuition’s development, a web app connecting students with tuition teachers; utilized React/React Native (front-end) and Django (back-end); oversaw core features' design and implementation for seamless web/mobile experience; optimized data entries, reducing costs by 20%.",
			'Leadership and Marketing: Managed a team of 5, implemented marketing campaigns, provided business guidance, developed a data model for strategic planning, and ensured quality control across operations.',
			"Learning Experience: Gained insights into market needs, product management, and resilience; identified and mitigated fraud risks, enhancing data accuracy by 30%, leading to improved decision-making and service delivery.",
		],
	},
	// {
	// 	title: 'Web Developer',
	// 	company_name: 'Doctor At Work',
	// 	icon: doctoratwork1,
	// 	iconBg: '#E6DEDD',
	// 	date: 'September 2020 - February 2021',
	// 	points: [
	// 		'Developing and maintaining websites using JavaScript, HTML5, CSS3, SCSS, Canvas and other related technologies.',
	// 		'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
	// 		'Implementing responsive design and ensuring cross-browser compatibility.',
	// 	],
	// },
	/*{
		title: 'Financial Consultant',
		company_name: 'A and A LLC | Greeley CO.',
		icon: freelance,
		iconBg: '#383E56',
		date: '11/2018 – 08/2021',
		points: [
			"Prepared client accuracy and statements by reconciling all charts of accounts, checking financial data accuracy, and complying with GAAP to generate the Financial reports.",
			"Developed a sales growth model of the client’s business, analyzed financial data, identified key growth drivers, trends, and patterns, and increased sales by 20% Year over Year for 2 years.",
			"Improved and expanded more business network to the client’s portfolio by conducting extensive market and competition research hence increased 10% on their ROIC.",
			"Automated and created Dashboard of all accounting and Financial reporting in EXCEL, enhancing Client’s decision-making.",
		],
	},*/
	{
		title: 'Home Tutor',
		company_name: 'Self,Maharajgunj , Kathmandu.',
		icon: freelance,
		iconBg: '#383E56',
		date: '10/2017 – Present ',
		points: [
			"Personalized Tutoring: Provided one-on-one tutoring to students, significantly improving their grades by an average of 30%, developing customized lesson plans and learning materials tailored to individual student needs.",
  "Leadership and Marketing: Built and maintained a client base through effective word-of-mouth marketing and referrals, demonstrating strong leadership and communication skills to manage student expectations and ensure consistent progress.",
  "Learning Experience: Gained valuable experience in mentoring, enhancing teaching methodologies, and adapting to various learning styles, resulting in a deeper understanding of educational best practices and continuous personal development.",
 
		],
	},
	{
		title: 'Event Manager',
		company_name: 'MN Production | Kathmandu,Nepal.',
		icon: freelance,
		iconBg: '#383E56',
		date: '1/2022 – /2024',
		points: [
			"Logistics and Coordination: Successfully managed logistics and vendor coordination for major events including Prateek Kuhad Concert, Arijit Singh Live, and multiple music festivals, ensuring smooth operations for events with over 1,000 attendees.",
"Leadership and Marketing: Led a team of volunteers and staff, implemented effective marketing strategies to boost event attendance, and managed on-site operations, showcasing strong leadership and organizational skills.",
"Learning Experience: Developed a comprehensive understanding of event management, enhanced problem-solving abilities, and gained valuable experience in handling high-pressure situations and ensuring quality control throughout the event lifecycle.",

		],
	},
];

const projects = [
	{
		name: 'Retail Samadhan',
		description:
			'The Retail Samadhan project is a comprehensive Django and React-based application designed for managing retail operations, including customer, inventory, and sales management, with advanced features such as demand forecasting using LSTM and customer segmentation using K-means, as well as generating insightful PDFs.',
		tags: [
			{
				name: 'Customer Segmentation',
				color: 'blue-text-gradient',
			},
			{
				name: 'Demand Forecasting using LSTM',
				color: 'green-text-gradient',
			},
			{
				name: 'DecisionMakingInsights',
				color: 'pink-text-gradient',
			},
			{
				name: 'FinancialOutcomesOptimization',
				color: 'yellow-text-gradient',
			},
		],
		image: e_commerce,
		source_code_link: 'https://github.com/suranshbaral/Retail-Samadhan',
		//website_link: 'https://e-commerce-exs.payloadcms.app/',
	},
	{
		name: 'Swastha Sathi',
		description:
			'Swastha Sathi is a fitness website built with HTML, CSS, and PHP, aimed at providing users with valuable fitness-related information and resources.',
		tags: [
			{
				name: 'Fitness',
				color: 'blue-text-gradient',
			},
			{
				name: 'PHP',
				color: 'green-text-gradient',
			},
			{
				name: 'StrategicPlanning',
				color: 'pink-text-gradient',
			},
			{
				name: 'BusinessForecasting',
				color: 'yellow-text-gradient',
			},
		],
		image: tiny_world_3d,
		source_code_link: 'https://docs.google.com/spreadsheets/d/130pAorihSAjFS2Al1HYTVcj_xqG38w2N/edit?usp=sharing&ouid=106500014072644820695&rtpof=true&sd=true',
		website_link: 'https://docs.google.com/spreadsheets/d/130pAorihSAjFS2Al1HYTVcj_xqG38w2N/edit?usp=sharing&ouid=106500014072644820695&rtpof=true&sd=true',
	},
	{
		name: 'Waste Checker',
		description:
			'Waste Checker is an application developed using Django and Flutter to identify and categorize different types of waste using TensorFlow, enhancing waste management and recycling processes.',
		tags: [
			{
				name: 'WasteManagement',
				color: 'blue-text-gradient',
			},
			{
				name: 'Flutter',
				color: 'green-text-gradient',
			},
			{
				name: 'Management',
				color: 'pink-text-gradient',
			},
			{
				name: 'TensorFlow',
				color: 'yellow-text-gradient',
			},
		],
		image: eventlify,
		source_code_link: 'https://github.com/suranshbaral/Swastha-Sathi-',
		website_link: '',
	},
	{
		name: 'Rapid',
		description:
			'An impactful platform for Rapid, dedicated to researching and delivering expert consulting on sustainable urban development and renewable energy, empowering clients with innovative solutions.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'html',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
			{
				name: 'animations',
				color: 'yellow-text-gradient',
			},
		],
		image: dcreative,
		source_code_link: 'https://github.com/suranshbaral/rapid',
		website_link: 'http://rapidnepal.com/',
	},
	{
		name: '3D T-Shirts AI Design',
		description:
			'A website project where you can make custom design t-shirts in 3D with the help of AI in real-time. You can also choose color or upload your own images to make your t-shirt truly unique.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'openai',
				color: 'yellow-text-gradient',
			},
		],
		image: ai_3d_tshirts,
		source_code_link: 'https://github.com/suranshbaral/fun-project',
		//website_link: 'https://exslym.github.io/3D-AI-Project/',
	},
	/*{
		name: '3D T-Shirts AI Design',
		description:
			'A website project where you can make custom design t-shirts in 3D with the help of AI in real-time. You can also choose color or upload your own images to make your t-shirt truly unique.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'openai',
				color: 'yellow-text-gradient',
			},
		],
		image: ai_3d_tshirts,
		source_code_link: 'https://github.com/exslym/3D-AI-Project/',
		website_link: 'https://exslym.github.io/3D-AI-Project/',
	},
	{
		name: 'Cryptocurrency Prices',
		description:
			'A website version of mobile App created using the Flutter framework. The app provides real-time information about the prices of various cryptocurrencies such as Bitcoin, Ethereum, Litecoin, and many others.',
		tags: [
			{
				name: 'dart',
				color: 'blue-text-gradient',
			},
			{
				name: 'flutter',
				color: 'green-text-gradient',
			},
			{
				name: 'bloc',
				color: 'pink-text-gradient',
			},
			{
				name: 'firebase',
				color: 'yellow-text-gradient',
			},
		],
		image: currency_list,
		source_code_link: 'https://github.com/exslym/Crypto-Coins-List/',
		website_link: 'https://cryptocurrency-prices-exslym.vercel.app/',
	},
	{
		name: 'AI Article Summarizer',
		description:
			'This minimalistic cozy color app is an AI article summarizer that transforms lengthy articles into clear and concise summaries, using an article extractor and summarizer by RapidAPI, powered by openAI GPT-4.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'react',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
			{
				name: 'openai',
				color: 'yellow-text-gradient',
			},
		],
		image: ai_summarizer,
		source_code_link: 'https://github.com/exslym/AI-Summarizer/',
		website_link: 'https://exslym.github.io/AI-Summarizer/',
	},
	{
		name: 'Rapid',
		description:
			'An impactful platform for Rapid, dedicated to researching and delivering expert consulting on sustainable urban development and renewable energy, empowering clients with innovative solutions.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'html',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
			{
				name: 'animations',
				color: 'yellow-text-gradient',
			},
		],
		image: dcreative,
		source_code_link: 'https://github.com/suranshbaral/rapid',
		website_link: 'http://rapidnepal.com/',
	},
	{
		name: 'Space Invaders [Game]',
		description:
			'Web-based legendary classic arcade game Space Invaders made with JavaScript and Canvas with its iconic pixel graphics and addictive gameplay with mobile adaptivity and touch controls.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'html',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
			{
				name: 'canvas',
				color: 'yellow-text-gradient',
			},
		],
		image: space_invaders,
		source_code_link: 'https://github.com/exslym/Space-Invaders_GAME/',
		website_link: 'https://exslym.github.io/Space-Invaders_GAME/',
	},
	{
		name: '2048 [Game]',
		description:
			'This is a popular puzzle game where the player must combine numbered tiles to reach the ultimate goal of creating a tile with the number 2048. When two tiles with the same number collide, they merge into one tile with a value equal to the sum of the two.',
		tags: [
			{
				name: 'javascript',
				color: 'blue-text-gradient',
			},
			{
				name: 'htnl',
				color: 'green-text-gradient',
			},
			{
				name: 'scss',
				color: 'pink-text-gradient',
			},
			{
				name: 'algorithms',
				color: 'yellow-text-gradient',
			},
		],
		image: game_2048,
		source_code_link: 'https://github.com/exslym/2048-Game/',
		website_link: 'https://exslym.github.io/2048-Game/',
	},
	// {
	// 	name: 'ChatGPT App (web vers.)',
	// 	description:
	// 		'A website version of mobile app ChatGPT project where you can interact with openAI chatbot based on gpt-3.5-turbo-0301 model, also you can choose other model on the fly.',
	// 	tags: [
	// 		{
	// 			name: 'dart',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'flutter',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'openai-api',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: chat_gpt,
	// 	source_code_link: 'https://github.com/exslym/ChatGPT_App/',
	// 	website_link: 'https://chat-gpt-app-kohl.vercel.app/',
	// },
	// {
	// 	name: 'Social Network',
	// 	description:
	// 		'A social network project is a dynamic web application (SPA) that allows users to search and interact with each other by liking, commenting on posts or chatting.',
	// 	// description:
	// 	// 'A social network project is a web application (SPA) that allows users to search and interact with each other by liking, commenting on posts or chatting. ReactJS have been used as the primary front-end framework to create dynamic and interactive user interfaces that update in real-time.',
	// 	tags: [
	// 		{
	// 			name: 'typescript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'react',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'ant-design',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: social_network,
	// 	source_code_link: 'https://github.com/exslym/My-Social-Network/',
	// 	website_link: 'https://exslym.github.io/My-Social-Network/',
	// },
	// {
	// 	name: 'CNS-Portfolio',
	// 	description:
	// 		"The multi-page website with interactive educational question-answer quiz for physicians that helps to learn about treatment options and appropriate drug prescribing based on patient's history and various health conditions.",
	// 	tags: [
	// 		{
	// 			name: 'javascript',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'multipage',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'scss',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: cns_portfolio,
	// 	source_code_link: 'https://github.com/exslym/CNS-Portfolio/',
	// 	website_link: 'https://exslym.github.io/CNS-Portfolio/',
	// },*/
];

const socials = [
	{
		name: 'linkedin',
		icon: linkedin,
		link: `https://www.linkedin.com/in/${linkedinUser}/`,
	},
	{
		name: 'github',
		icon: github_alt,
		link: `https://github.com/${githubUser}/`,
	},
	{
		name: 'Instagram',
		icon: discord,
		link: `https://instagram.com/${discordUser}/`,
	},
];

export { experiences, projects, socials, technologies };
