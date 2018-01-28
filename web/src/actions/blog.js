import HTTP_CODE from '../constant/http-code'
import * as request from '../constant/fetch-request'

export const refreshBlogGenerals = blogGenerals => ({
  type: 'REFRESH_BLOG_GENERALS',
  blogGenerals
})

export const refreshBlogDetail = blogDetail => ({
  type: 'REFRESH_BLOG_DETAIL',
  blogDetail
})

export const getBlogGenerals = () => {
  return dispatch => {
    (async () => {
      const res = await request.get(`./api/blogs`)
      if (res.status === HTTP_CODE.OK) {
        dispatch(refreshBlogGenerals(res.body))
      }
    })()
  }
}
export const getBlog = (id) => {
  return dispatch => {
    (async () => {
      const res = await request.get('./api/blogs/' + id)
      if (res.status === HTTP_CODE.OK) {
        dispatch(refreshBlogDetail(res.body))
      }
    })()
  }
}

export const addBlog = (blog) => {
  console.log(blog)
  return dispatch => {
    (async () => {
      const res = await request.post('./api/blogs',blog)
      if (res.status === HTTP_CODE.CREATED) {
        console.log('success')
      }
    })()
  }
}
