import MovieRouter from './Movies.route';
import MusicRouter from './Music.route';

export const setupRoutes = app => {
  app.use('/movies', MovieRouter);
  app.use('/music', MusicRouter);
};
