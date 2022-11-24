import Movies from "../model/movieModel.js"

const getMovies = async (req, res, next) => {
    try {
        const listMovies = await Movies.find({})
        res.status(200).json({
            status: 200,
            message: 'success',
            data: listMovies
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 400,
            message: 'failed',
            info: error.message
        })
    }
}

const getMoviesById = async (req, res, next) => {
    const { id } = req.params
    try {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({
                status: 400,
                message: 'failed',
                info: 'movie not found'
            })
        }
        const movie = await Movies.findById({ _id: id })
        if (!movie) {
            return res.status(400).json({
                status: 400,
                message: 'failed',
                info: 'movie not found'
            })
        }
        res.status(200).json({
            status: 200,
            message: 'success',
            data: movie
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 400,
            message: 'failed',
            info: error.message
        })
    }
}

const createMovies = async (req, res, next) => {
    const { title, release, genre } = req.body
    try {
        const newMovie = new Movies({
            title,
            release,
            genre
        })
        await newMovie.save();
        res.status(200).json({
            status: 200,
            message: 'success',
            info: 'movie successfully created'
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}

const updateMovies = async (req, res, next) => {
    const { title, release, genre } = req.body
    const { id } = req.params
    try {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({
                status: 400,
                message: 'failed',
                info: 'movie not found'
            })
        }
        const updatedMovie = await Movies.updateOne({ _id: id }, {
            title,
            release,
            genre
        })
        if (updatedMovie.modifiedCount === 0) {
            return res.status(400).json({
                status: 400,
                message: 'failed',
                info: 'movie not found'
            })
        }
        res.status(200).json({
            status: 200,
            message: 'success',
            info: 'movie successfully updated'
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}

const deleteMovies = async (req, res, next) => {
    const { id } = req.params
    try {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({
                status: 400,
                message: 'failed',
                info: 'movie not found'
            })
        }
        const deletedMovie = await Movies.deleteOne({ _id: id });
        if (deletedMovie.deletedCount == 0) {
            return res.status(400).json({
                status: 400,
                message: 'failed',
                info: 'movie not found'
            })
        }
        res.status(200).json({
            status: 200,
            message: 'success',
            info: 'movie successfully deleted'
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}

const moviesController = {
    getMovies,
    getMoviesById,
    createMovies,
    updateMovies,
    deleteMovies
}

export default moviesController