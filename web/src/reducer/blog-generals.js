const init = [
  {
    headImg: '',
    title: '',
    time: '',
    tags: [
      {
        color: '',
        img: '',
        content: ''
      }
    ]

  }
]

export default (state = init, action) => {
  switch (action.type) {
    case 'REFRESH_BLOG_GENERALS':
      return action.blogGenerals
    default:
      return state
  }
}
