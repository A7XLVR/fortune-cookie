import fortunes from './fortunes.json' with { type: 'json' };

export const getFortune = () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
};
