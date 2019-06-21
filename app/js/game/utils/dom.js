export function getOffsetTop(elem) { // issues on ie11

  if (!elem) {
    return 0
  }

  const bounds = elem.getBoundingClientRect()
  const bodyTop = window.scrollY || document.body.scrollTop

  return bounds.top + bodyTop
}

export function getOffsetLeft(elem) { // issues on ie11

  if (!elem) {
    return 0
  }

  const bounds = elem.getBoundingClientRect()

  return bounds.left
}
