export function outExpo(n) {
  if (n === 1) {
    return n
  }

  return 1 - (2 ** (-10 * n))
}

export function inOutSine(n) {
  return 0.5 * (1 - Math.cos(Math.PI * n))
}
