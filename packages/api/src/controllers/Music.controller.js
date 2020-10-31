import { getMusic } from '../services/Music.service';

export const loadMusic = (req, res) => {
  res.json(getMusic());
};
