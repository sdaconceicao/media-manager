import { getMovies } from '../services/Movies.service';

export const loadMovies = (req, res) => {
  res.json(getMovies());
};
