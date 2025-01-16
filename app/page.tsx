/** @format */
'use client';

import { Filter } from '@/components/Filter';
import { PlaylistsVertical } from '@/components/PlaylistVertical';
import { useMixContext } from '@/components/MixProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PlaylistInterface from '@/constant/PlaylistInterface';
import React from 'react';

export default function Home() {
	const filters = ['Tout', 'Musique', 'Podcasts', 'Livres audio'];
	const playlists: PlaylistInterface[] = [
		{
			name: 'Daily Mix O1',
			image: 'https://picsum.photos/370',
			type: 'playlist',
			listening: false,
			tracks: [
				{
					artist: 'Damso',
					id: '',
					title: 'Test',
					album: 'QALF infinity',
					release_date: Date.now().toString(),
					duration: 5000,
					src: '',
					image: 'https://picsum.photos/370',
					liked: true,
					listening: false,
				},
				{
					artist: 'Bowna',
					id: '',
					title: 'Test',
					album: 'QALF infinity',
					release_date: Date.now().toString(),
					duration: 5000,
					src: '',
					image: 'https://picsum.photos/370',
					liked: true,
					listening: false,
				},
				{
					artist: 'Bones',
					id: '',
					title: 'Test',
					album: 'QALF infinity',
					release_date: Date.now().toString(),
					duration: 5000,
					src: '',
					image: 'https://picsum.photos/370',
					liked: true,
					listening: false,
				},
			],
		},
	];
	const albums: PlaylistInterface[] = [
		{
			name: 'QALF infinity',
			image: 'https://picsum.photos/370',
			type: 'album',
			listening: false,
			tracks: [
				{
					id: '',
					title: 'Test',
					artist: 'Damso',
					album: 'QALF infinity',
					release_date: Date.now().toString(),
					duration: 5000,
					src: '',
					image: 'https://picsum.photos/370',
					liked: true,
					listening: false,
				},
				{
					id: '',
					title: 'Test',
					artist: 'Pas Damso',
					album: 'QALF infinity',
					release_date: Date.now().toString(),
					duration: 5000,
					src: '',
					image: 'https://picsum.photos/370',
					liked: true,
					listening: false,
				},
			],
		},
	];
	const { selectedMix, setSelectedMix } = useMixContext();
	return (
		<Card className='bg-card p-2 w-full h-full'>
			<CardContent>
				<Filter filters={filters} />
				<PlaylistsVertical playlists={playlists} title='Couçu spécialement pour vous' />
				<PlaylistsVertical playlists={albums} title='Recommandations du jour' />
				<Button onClick={() => setSelectedMix(albums[0])}>Select this Mix NOW</Button>
				{selectedMix && (
					<Button
						onClick={() => {
							setSelectedMix((prev: PlaylistInterface | undefined) => {
								const currentState = prev;
								return {
									...currentState,
									musicPlayed: albums?.[0]?.tracks?.[0],
								} as PlaylistInterface;
							});
						}}>
						Select this Music NOW
					</Button>
				)}
			</CardContent>
		</Card>
	);
}
