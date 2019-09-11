export const PURPLE = '#6d12e3'

export const RED = '#ff4047'

export const ORANGE = '#ff9d21'

export const BLUE = '#00c1ff'

export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
}
