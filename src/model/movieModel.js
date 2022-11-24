import mongoose from 'mongoose';
const { Schema } = mongoose;

const movieSchema = new Schema({
    title: String,
    release: Date,
    genre: Array
});

const Movies = mongoose.model('Movie', movieSchema);

export default Movies;