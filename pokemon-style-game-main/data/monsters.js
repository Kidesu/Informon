const monsters = {
  Emby: {
    position: {
      x: 380,
      y: 490
    },
    image: {
      src: './img/embySprite.png'
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    name: 'Emby',
    attacks: [attacks.Tackle, attacks.Fireball]
  },
  Springgle: {
    position: {
      x: 995,
      y: 300
    },
    image: {
      src: './img/springgleSprite.png'
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    isEnemy: true,
    name: 'Springgle',
    attacks: [attacks.Tackle, attacks.Fireball]
  }
}
