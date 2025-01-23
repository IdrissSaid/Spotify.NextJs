/** @format */

import { NextRequest, NextResponse } from 'next/server';
import User from '@/Model/User';
import dbConnect from '@/lib/dbConnect';

export async function POST(req: NextRequest) {
	await dbConnect();
	try {
		const body = await req.json();

		if (!body || !body.name || !body.email || !body.password) {
			return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
		}

		const user = new User({
			name: body.name,
			email: body.email,
			password: body.password,
		});

		await user.save();
		return NextResponse.json('ok', { status: 200 });
	} catch (error) {
		console.log('Error:', error);
		return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
	}
}
