/** @format */

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Playlist from '@/Model/Playlist';

export async function GET() {
	await dbConnect();

	try {
		const playlists = await Playlist.find({ users: '67889115618c9e97c69913c8' });

		return NextResponse.json({ playlists }, { status: 200 });
	} catch (error) {
		console.log('Error:', error);
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}

export async function POST() {
	await dbConnect();

	try {
		const playlist = new Playlist({
			name: 'Playlist',
			image: '/',
			type: 'playlist',
			tracks: [],
			users: ['67889115618c9e97c69913c8'],
		});

		await playlist.save();
		return NextResponse.json('ok', { status: 200 });
	} catch (error) {
		console.log('Error:', error);
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}
