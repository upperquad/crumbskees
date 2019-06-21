export function getNow() {
  return 'now' in window.performance ? performance.now() : new Date().getTime()
}