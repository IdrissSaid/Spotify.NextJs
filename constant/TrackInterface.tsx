export default interface TrackInterface {
  id: string;
  title: string;
  artist: string;
  album: string;
  release_date?: string;
  duration?: number;
  src: string;
  image: string;
  liked: boolean | undefined;
  listening: boolean;
}
