const init = [
  {
    headImg: 'https://upload-images.jianshu.io/upload_images/1767483-9b14b095c43ac971.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/500',
    title: '你不是因为优秀，才值得被爱',
    time: '2017.12.27 20:01',
    tags: [
      {
        color: 'green',
        img: 'data:image/png;base64,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',
        content: 'ThoughtWorks'
      }
    ]

  },
  {
    headImg: 'https://upload-images.jianshu.io/upload_images/1767483-9b14b095c43ac971.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/500',
    title: '你不是因为优秀，才值得被爱',
    time: '2017.12.27 20:01',
    tags: [
      {
        color: 'green',
        img: 'https://upload-images.jianshu.io/upload_images/1767483-9b14b095c43ac971.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/500',
        content: 'ThoughtWorks'
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
