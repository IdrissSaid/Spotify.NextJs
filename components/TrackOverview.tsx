/** @format */
'use client';
import { Check, Ellipsis, X } from 'lucide-react';
import { useMixContext } from './MixProvider';
import { Card, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import Link from 'next/link';

export const TrackOverview = () => {
	const { selectedMix, setSelectedMix } = useMixContext();

	if (!selectedMix || !selectedMix.tracks) return <div></div>;

	const music = selectedMix.musicPlayed || selectedMix.tracks[0];

	return (
		<Card className='bg-card w-full h-full'>
			<CardHeader onClick={() => setSelectedMix(undefined)} className='flex gap-4'>
				<div className='flex items-center justify-between'>
					<CardTitle>
						<Link href={'#'} className='underline'>
							{selectedMix.name}
						</Link>
					</CardTitle>
					<div className='flex items-center gap-4'>
						<Ellipsis className='stroke-1 text-muted-foreground' />
						<X className='stroke-1 text-muted-foreground' />
					</div>
				</div>
				<Image
					className='rounded-md'
					alt={music.artist}
					src={music.image}
					width={370}
					height={370}
				/>
				<div className='flex flex-row justify-between items-center'>
					<div>
						<h4 className='scroll-m-20 m-2 hover:underline text-xl font-semibold tracking-tight'>
							{music.title}
						</h4>
						<p className='m-2 hover:underline text-sm text-muted-foreground'>{music.artist}</p>
					</div>
					<div className='w-6 h-6 flex items-center justify-center rounded-full bg-success'>
						<Check className='text-black w-4 h-4' />
					</div>
				</div>
			</CardHeader>
		</Card>
	);
};
