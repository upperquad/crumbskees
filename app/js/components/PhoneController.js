import { throttle } from 'throttle-debounce'
import character1 from '../../assets/game/images/character1.png'
import character2 from '../../assets/game/images/character2.png'
import characterVideo1 from '../../assets/game/images/character1.mp4'
import characterVideo2 from '../../assets/game/images/character2.mp4'
import characterVideoWhite1 from '../../assets/game/images/character-white-1.mp4'
import characterVideoWhite2 from '../../assets/game/images/character-white-2.mp4'

const CHARACTERS = [{
  image: character1,
  video: characterVideo1,
  videoWhite: characterVideoWhite1,
  color: 'purple',
  name: 'Player 1',
}, {
  image: character2,
  video: characterVideo2,
  videoWhite: characterVideoWhite2,
  color: 'red',
  name: 'Player 2',
}]

export default class PhoneController {
  constructor($scope, $element) {
    this.$scope = $scope
    this.$elem = $element
    this.host = window.location.origin.replace(/^http/, 'ws')
    this.websocket = null
    this.touchpad = document.getElementById('touchpad')
    this.touchBubble = document.getElementById('touch-bubble')
    this.originCoord = {
      x: 0,
      y: 0,
    }
    this.score = null

    this.token = ''
    this.isConnecting = false
    this.errorReason = null
    this.accepted = false
    this.character = null
    this.opponent = null
    this.result = null
    this.resultTop = ''
    this.resultBottom = ''

    // TODO: debug only, remove
    // this.opponent = CHARACTERS[0]
    // this.character = CHARACTERS[1]
    // this.result = 'tied'
    // this.resultTop = 'You tied…'
    // this.resultBottom = 'Nobody wins!'
    // this.score = 12

    this.throttledTouchMove = throttle(50, this.handleTouchMove)

    this.touchpad.addEventListener('touchstart', this.handleTouchStart, { passive: false })
    this.touchpad.addEventListener('touchmove', this.throttledTouchMove, { passive: false })
    this.touchpad.addEventListener('touchend', this.handleTouchEnd, { passive: false })
    this.touchpad.addEventListener('click', this.handleClick)

    this.initToken()
    this.ready = true
  }

  initToken = () => {
    const path = window.location.pathname
    if (/^\/\d{3}$/.test(path)) {
      this.token = path.slice(1)
      this.initConnect()
    }
  }

  tokenKey = key => {
    this.errorReason = null

    if (key === -1) {
      this.token = this.token.slice(0, -1)
    } else {
      this.token = this.token + key
      if (this.token.length >= 3) {
        this.initConnect()
      }
    }
  }

  initConnect = () => {
    this.isConnecting = true
    this.websocket = new WebSocket(`${this.host}/phone?token=${this.token}`)
    this.websocket.onopen = this.onWsOpen
  }

  onWsOpen = () => {
    this.reset(true)
    this.connected = true
    this.$scope.$apply()

    this.websocket.onclose = this.onWsClose
    this.websocket.onmessage = this.onWsMessage
  }

  onWsClose = event => {
    this.reset()
    console.log(event.reason)

    if (event.reason === 'invalid_token') {
      this.errorReason = 'Invalid token'
    } else if (event.reason === 'no_active_game') {
      this.errorReason = 'There\'s no active game'
    }

    this.$scope.$apply()
  }

  reset = hardReset => {
    this.isConnecting = false
    this.connected = false
    this.accepted = false
    this.token = ''

    if (hardReset) {
      this.character = null
      this.opponent = null
      this.result = null
    }
  }

  onWsMessage = event => {
    const message = event.data.split(',')

    switch (message[0]) {
      case 'score':
        this.score = message[1]
        break
      case 'accepted': {
        this.accepted = true
        this.hasPlayed = true
        this.score = null
        const characterIndex = parseInt(message[1], 10)
        this.character = CHARACTERS[characterIndex]
        this.opponent = CHARACTERS[1 - characterIndex]
        break
      }
      case 'game_start':
        if (this.accepted && this.character) {
          this.userConfirmed = true
        }
        break
      case 'result':
        this.result = message[1]
        if (this.result === 'tied') {
          this.resultTop = 'You tied…'
          this.resultBottom = 'Nobody wins!'
        } else if (this.result === 'won') {
          this.resultTop = 'You won!'
          this.resultBottom = this.character.name
        } else {
          this.resultTop = 'You’re bad!'
          this.resultBottom = this.opponent.name
        }
        break
      default:
        break
    }
    this.$scope.$apply()
  }

  handleTouchStart = event => {
    event.stopPropagation()
    const { clientX, clientY } = event.touches[0]
    this.originCoord.x = clientX
    this.originCoord.y = clientY
    this.updateBubble(clientX, clientY)
    this.touchBubble.classList.add('is-touching')
  }

  handleTouchMove = event => {
    event.preventDefault()
    event.stopPropagation()
    const { x: originX, y: originY } = this.originCoord
    const { clientX, clientY } = event.touches[0]
    this.originCoord.x = clientX
    this.originCoord.y = clientY
    this.updatePosition(clientX, clientY, originX, originY)
  }

  handleTouchEnd = event => {
    event.stopPropagation()
    this.touchBubble.classList.remove('is-touching')
  }

  handleClick = () => {
    this.websocket.send('click')
  }

  handleConfirm = () => {
    this.userConfirmed = true
  }

  updatePosition = (clientX, clientY, originX, originY) => {
    this.updateBubble(clientX, clientY)

    this.websocket.send(`cursor_move,${(clientX - originX) / window.innerWidth},${(clientY - originY) / window.innerHeight}`)
  }

  updateBubble = (clientX, clientY) => {
    this.touchBubble.style.left = clientX
    this.touchBubble.style.top = clientY
  }

  playAgain = () => {
    if (this.websocket) {
      this.websocket.close()
    }
    this.reset(true)
  }
}
