// globals vars
/* eslint-disable */

// constants
global.SHARING_MESSAGES = {
  title: 'Upperquad game',
  description: {
    default: 'Come play this amazing game!',
    win: 'I won and scored __SCORE__pts at this game!',
    lose: 'I lost at this game but I\'ll have my revenge!',
    tied: 'I tied, __SCORE__pts!',
    singleMode: 'I got __SCORE__pts at this game!',
  },
  image: {
    default: 'https://i.imgur.com/V7irMl8.png',
    player0win: 'https://dummyimage.com/600x400/6c12e3/000',
    player0lose: 'https://dummyimage.com/600x400/6c12e3/fff',
    player1win: 'https://dummyimage.com/600x400/ff4046/000',
    player1lose: 'https://dummyimage.com/600x400/ff4046/fff',
    tied: 'https://dummyimage.com/600x400/6c12e3/ff4046',
  }
}

// functions
global.parseMessage = function(string, value) {
  string = string.replace(/__SCORE__/g, value)

  return string
}
