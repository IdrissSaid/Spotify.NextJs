/** @format */

import PlaylistInterface from '@/constant/PlaylistInterface';
import { PlaylistCard } from './PlaylistCard';
import Link from 'next/link';

export const PlaylistsVertical = ({
	playlists,
	title,
}: {
	playlists: PlaylistInterface[];
	title: string;
}) => {
	return (
		<div>
			<div className='flex justify-between items-center'>
				<Link
					href={'#'}
					className='scroll-m-20 m-2 hover:underline text-xl font-semibold tracking-tight'>
					{title}
				</Link>
				<Link
					href={'#'}
					className='m-2 hover:underline text-sm text-muted-foreground'>
					Tout afficher
				</Link>
			</div>

			{playlists.map((playlist, index) => {
				return <PlaylistCard key={index} playlist={playlist} />;
			})}
		</div>
	);
};
