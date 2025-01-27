/** @format */

import dbConnect from '@/lib/dbConnect';
import Playlist from '@/Model/Playlist';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
	await dbConnect();
  const { id } = await params;

	try {
		const playlist = await Playlist.findById(id);
		return NextResponse.json({ playlist: playlist }, { status: 200 });
	} catch (error) {
		console.log('Error', error);
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}
