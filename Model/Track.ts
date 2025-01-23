import mongoose from 'mongoose';

const TrackSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    release_date: { type: String, required: false },
    duration: { type: Number, required: false },
    src: { type: String, required: true },
    image: { type: String, required: true },
    liked: { type: Boolean, required: false },
    listening: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Track || mongoose.model('Track', TrackSchema);
