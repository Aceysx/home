export const getAll = () => {
  const quadrants = window.localStorage.getItem('quadrants')
  return JSON.parse(quadrants) || []
}

export const save = (quadrant) => {
  console.log(quadrant)
  let quadrants = window.localStorage.getItem('quadrants')
  if (quadrants) {
    quadrants = JSON.parse(quadrants)
    quadrants.push(quadrant)
  } else {
    quadrants = [quadrant]
  }
  window.localStorage.setItem('quadrants', JSON.stringify(quadrants))
}
