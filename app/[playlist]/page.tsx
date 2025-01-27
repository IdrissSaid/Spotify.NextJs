/** @format */
'use client';

import { usePlaylist } from '@/components/usePlaylist';

export default function PlaylistPage() {
	const { playlist, isLoading, error } = usePlaylist({ id: '678906481a1f4455018120a4' });

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
