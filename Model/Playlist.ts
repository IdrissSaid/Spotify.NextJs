/** @format */

import mongoose from 'mongoose';

const PlaylistSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		image: { type: String, required: true },
		type: { type: String, enum: ['playlist', 'album', 'collection'], required: true },
		tracks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Track' }],
		users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	},
	{ timestamps: true },
);

export default mongoose.models.Playlist || mongoose.model('Playlist', PlaylistSchema);
