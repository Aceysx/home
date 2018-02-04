const init = [
  {
    color: '',
    img: '',
    content: ''
  }
]

export default (state = init, action) => {
  switch (action.type) {
    case 'REFRESH_TAGS':
      return action.tags
    default:
      return state
  }
}
