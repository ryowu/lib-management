import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	public news = [
		{
			title: 'New Public Library Opens in Downtown Seattle',
			description:
				'The new Seattle Public Library opened its doors yesterday, offering a state-of-the-art facility for the city’s residents. The library includes a large collection of books, as well as meeting rooms, study spaces, and a café.',
			date: new Date(Date.now() - 86400000), // 1 day ago
		},
		{
			title: 'Library of Congress Launches Digital Collection of Rare Books',
			description:
				'The Library of Congress has launched a new digital collection of rare books, making it easier for researchers and members of the public to access these valuable resources. The collection includes rare books from all over the world, spanning many centuries.',
			date: new Date(Date.now() - 2592000000), // 30 days ago
		},
		{
			title: 'Chicago Public Library Eliminates Late Fees',
			description:
				'The Chicago Public Library has eliminated late fees on all materials, making it easier for patrons to access the library’s resources without worrying about accruing fines. The move is aimed at increasing access to the library’s materials and reducing barriers to entry.',
			date: new Date(Date.now() - 172800000), // 2 days ago
		},
		{
			title: "NASA's Perseverance Rover Collects First Mars Rock Samples",
			description:
				'The Perseverance rover successfully drilled into a Martian rock and collected its first sample, which will be analyzed for signs of past microbial life.',
			date: new Date(Date.now() - 345600000), // 4 days ago
		},
		{
			title: 'WHO Approves First Malaria Vaccine for Children',
			description:
				'The World Health Organization has approved the first-ever malaria vaccine for use in children in sub-Saharan Africa, where the disease is most prevalent.',
			date: new Date(Date.now() - 604800000), // 7 days ago
		},
		{
			title: 'Google Announces New Features for Google Workspace',
			description:
				'Google has introduced new features for its Google Workspace suite, including improved collaboration tools and a focus mode to help users minimize distractions.',
			date: new Date(Date.now() - 1209600000), // 14 days ago
		},
		{
			title: 'Amazon Acquires MGM Studios for $8.45 Billion',
			description:
				'Amazon has acquired MGM Studios in a deal worth $8.45 billion, giving it access to a large library of movies and TV shows that it can use to bolster its streaming service, Amazon Prime Video.',
			date: new Date(Date.now() - 2592000000), // 30 days ago
		},
		{
			title: 'Facebook Launches Podcast Platform',
			description:
				'Facebook has launched its own podcast platform, allowing users to listen to podcasts directly on the Facebook app and discover new podcasts based on their interests.',
			date: new Date(Date.now() - 172800000), // 2 days ago
		},
		{
			title: 'Elon Musk Announces Plan to Send SpaceX Mission to Jupiter',
			description:
				'Elon Musk has announced that SpaceX is planning to send a mission to Jupiter in the next few years, using its Starship spacecraft to explore the gas giant and its moons.',
			date: new Date(Date.now() - 86400000), // 1 day ago
		},
	];

	public ngOnInit(): void {}
}
