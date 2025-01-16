/** @format */

import PlaylistInterface from '@/constant/PlaylistInterface';
import Image from 'next/image';

export const PlaylistCard = ({ playlist }: { playlist: PlaylistInterface }) => {
	const topAuthors = playlist.tracks
		?.slice(0, 3)
		.map((track) => track.artist)
		.filter(Boolean)
		.join(', ');

	return (
		<div className='w-[200px] h-[250px] p-2 flex flex-col hover:bg-muted hover:cursor-pointer rounded-md gap-2'>
			<div className='relative'>
				<Image
					className='rounded-md'
					alt={playlist.name}
					width={180}
					height={180}
					src={playlist.image}
				/>
				{playlist.type == 'playlist' && (
					<>
						<h4 className='scroll-m-20 text-base font-semibold tracking-tight absolute text-black left-2 bottom-2 bg-red-500'>
							{playlist.name.slice(0, 9)}
						</h4>
						<h4 className='scroll-m-20 text-2xl font-bold tracking-tight absolute text-black right-3 bottom-1 bg-red-500 px-1'>
							{playlist.name.slice(10, 12)}
						</h4>{' '}
					</>
				)}
			</div>
			<div className='w-full text-left'>
				{playlist.type == 'album' && <h1>{playlist.name}</h1>}
				<p className='text-sm text-muted-foreground'>
					{topAuthors}
					{playlist.type !== 'album' ? ' et bien plus' : ''}
				</p>
			</div>
		</div>
	);
};
