const Server = {
  host: window.location.origin.replace(/^http/, 'ws'),
  websocket: new WebSocket(`${window.location.origin.replace(/^http/, 'ws')}/game`),
}

export default Server
