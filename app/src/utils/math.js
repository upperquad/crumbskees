export function uuid() {
  return Math.random().toString(36).substr(2, 9)
}

export function random(min, max) {
  // return random value between min and max
  if (min > max) {
    const tmp = min
    min = max
    max = tmp
  }
  return min + (max - min) * Math.random()
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}
