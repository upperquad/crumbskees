export function getOffsetTop(elem) {
  if (!elem) {
    return 0
  }

  const bounds = elem.getBoundingClientRect()
  const bodyTop = window.scrollY || window.pageYOffset

  return bounds.top + bodyTop
}

export function getOffsetLeft(elem) {
  if (!elem) {
    return 0
  }

  const bounds = elem.getBoundingClientRect()

  return bounds.left
}
