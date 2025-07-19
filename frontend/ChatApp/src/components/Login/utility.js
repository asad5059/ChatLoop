// Helper functions for Login feature

export function randomLiveUserCount(min = 100, max = 1100) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function getNextCarouselIdx(currentIdx, length) {
  return (currentIdx + 1) % length;
}

export function getPrevCarouselIdx(currentIdx, length) {
  return (currentIdx - 1 + length) % length;
} 