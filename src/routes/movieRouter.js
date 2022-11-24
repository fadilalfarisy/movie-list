import express from "express"
import moviesController from '../controller/moviesController.js'

const router = express.Router()

router.get('/movies', moviesController.getMovies);
router.get('/movies/:id', moviesController.getMoviesById);
router.post('/movies', moviesController.createMovies);
router.put('/movies/:id', moviesController.updateMovies);
router.delete('/movies/:id', moviesController.deleteMovies);

export default router