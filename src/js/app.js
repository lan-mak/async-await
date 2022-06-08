import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const save = await GameSavingLoader.load();
    return save;
  } catch (err) {
    throw new Error(err);
  }
})();
