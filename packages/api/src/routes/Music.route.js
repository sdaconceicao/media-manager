import {Router} from 'express';

import {loadMusic} from '../controllers/Music.controller';

const MusicRouter = Router();

MusicRouter
  .get('/', loadMusic)
;

export default MusicRouter;
