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

export function splitText(el) {
  const spans = []
  const length = el.textContent.length

  for (let i = 0; i < length; i++) {
    const span = document.createElement('span')
    span.innerHTML = el.textContent[i]
    spans.push(span)
  }

  el.innerHTML = ''

  for (let i = 0; i < length; i++) {
    el.appendChild(spans[i])
  }

  return spans
}