/** @format */

import { ArrowRight, LibraryBig, Plus, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import PlaylistInterface from '@/constant/PlaylistInterface';
import { Card, CardContent, CardHeader } from './ui/card';
import { Playlists } from './Playlists';
import { Filter } from './Filter';

export const Library = () => {
	const labels = ['Playlists', 'Albums', 'Podcasts et émissions'];
	const playlists: PlaylistInterface[] = [
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
		{
			name: 'Titre likés',
			image: 'https://picsum.photos/200',
			type: 'playlist',
			tracks: [{}],
		},
	];

	return (
		<Card className='bg-card w-full h-full'>
			<CardHeader className='p-4'>
				<div className='flex my-2 justify-between'>
					<h1 className='flex items-center justify-center gap-2'>
						<LibraryBig /> Bibliothèque
					</h1>
					<div className=''>
						<Button variant={'ghost'}>
							<Plus />
						</Button>
						<Button variant={'ghost'}>
							<ArrowRight />
						</Button>
					</div>
				</div>
				<Filter filters={labels} />
			</CardHeader>
			<CardContent className='h-[76vh] p-4 overflow-y-auto'>
				<div className='flex items-center justify-center gap-2 py-2'>
					<Search />
					<Input placeholder='Rechercher dans la Bibliothèque' />
				</div>
				<Playlists playlists={playlists} imageSize={{ width: 48, height: 48 }} />
			</CardContent>
		</Card>
	);
};
