/** @format */
import useSWR from 'swr';
import PlaylistInterface from '@/constant/PlaylistInterface';
import axios from 'axios';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const usePlaylist = ({ id }: { id: string }) => {
	const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/api/playlist/${id}`, fetcher);

	return {
		playlist: data?.playlist,
		error: error,
		isLoading
	} as {
		playlist: PlaylistInterface,
		error: Error | undefined,
		isLoading: boolean,
	};
};
