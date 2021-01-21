export const throttle = (func: () => void, time: number) => {
  let lastTime = 0;
  return () => {
    const now = new Date().getTime();
    if (now - lastTime >= time) {
      func();
      lastTime = now;
    }
  };
};
