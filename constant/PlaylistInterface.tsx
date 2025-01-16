/** @format */

import TrackInterface from './TrackInterface';

export default interface PlaylistInterface {
	name: string;
	image: string;
	type: 'playlist' | 'album' | 'collection';
	listening: boolean;
	tracks?: TrackInterface[];
	musicPlayed?: TrackInterface;
}
