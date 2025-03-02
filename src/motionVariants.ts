export const pageVariants = {
  initialDown: { y: '100vh', opacity: 0 },
  initialUp: { y: '-100vh', opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.6 },
  },
  exitDown: { y: '-100vh', opacity: 0, transition: { type: 'tween', duration: 0.6 } },
  exitUp: { y: '100vh', opacity: 0, transition: { type: 'tween', duration: 0.6 } },
};
