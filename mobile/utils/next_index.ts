export const nextIndexBuilder = (() => {
  let index = 0

  return () => index++
})