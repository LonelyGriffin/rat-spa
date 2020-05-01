const orientation = () => (screen.orientation || {}).type

export const isLanscape = () => orientation() === 'landscape-primary' || orientation() === 'landscape-secondary' || orientation() as any === 'landscape'

export const Left = () => isLanscape()
  ? 'Down'
  : 'Left'

export const Right = () => isLanscape()
  ? 'Up'
  : 'Right'

export const Down = () => isLanscape()
  ? 'Right'
  : 'Down'

export const Up = () => isLanscape()
  ? 'Left'
  : 'Up'