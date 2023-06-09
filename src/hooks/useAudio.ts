export const useAudio = (src?: string) => {
  const audioItem = new Audio(src);
  console.log('SRC ITEMS ', src);
  const play = () => {
    audioItem.volume = 0.2;
    audioItem.play();
  };

  return {
    play,
  };
};
