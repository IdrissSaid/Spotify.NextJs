/** @format */
'use client';
import PlaylistInterface from '@/constant/PlaylistInterface';
import Image from 'next/image';

export const Playlists = ({
	playlists,
	imageSize,
}: {
	playlists: PlaylistInterface[];
	imageSize: { width: number; height: number };
}) => {
	return (
		<div>
			{playlists.map((playlist, index) => {
				return (
					<div key={index} className='flex w-full p-2 rounded-md gap-4 hover:bg-muted'>
						<Image
							className='rounded-md'
							alt={playlist.name}
							src={playlist.image}
							width={imageSize.width}
							height={imageSize.height}
						/>
						<div>
							<h1>{playlist.name}</h1>
							<p className='text-sm text-muted-foreground'>
								Playlist - {playlist.tracks?.length} titres
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};
