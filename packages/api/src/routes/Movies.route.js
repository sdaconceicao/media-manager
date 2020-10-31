import {Router} from 'express';

import {loadMovies} from '../controllers/Movies.controller';

const MoviesRouter = Router();
MoviesRouter
  .get('/', loadMovies)
;

export default MoviesRouter;
