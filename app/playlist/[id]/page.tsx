/** @format */
'use client';

import { usePlaylist } from '@/components/usePlaylist';
import { use } from 'react';

export default function PlaylistPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = use(params);
	const { playlist, isLoading, error } = usePlaylist({ id: id });

	if (error)
		return <div className='w-full h-full flex justify-center items-center'>Failed to load</div>;
	if (isLoading)
		return <div className='w-full h-full flex justify-center items-center'>Loading...</div>;
	console.log(playlist);
	return (
		<div>
			<h1>{playlist?.image}</h1>
		</div>
	);
}
