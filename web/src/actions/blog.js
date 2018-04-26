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
export const refreshTags = tags => ({
  type: 'REFRESH_TAGS',
  tags
})

export const getBlogGenerals = (page,callback) => {
  return dispatch => {
    (async () => {
      const res = await request.get(`./api/blogs?page=` + page)
      if (res.status === HTTP_CODE.OK) {
        callback(res.body.content.length === res.body.totalElements)
        dispatch(refreshBlogGenerals(res.body.content))
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

export const getTags = () => {
  return dispatch => {
    (async () => {
      const res = await request.get('./api/tags')
      if (res.status === HTTP_CODE.OK) {
        dispatch(refreshTags(res.body))
      }
    })()
  }
}

export const addBlog = (blog) => {
  return dispatch => {
    (async () => {
      const res = await request.post('./api/blogs', blog)
      if (res.status === HTTP_CODE.CREATED) {
        console.log('success')
      }
    })()
  }
}

export const addTag = (tag) => {
  return dispatch => {
    (async () => {
      const res = await request.post('./api/tags', tag)
      if (res.status === HTTP_CODE.CREATED) {
        console.log('success')
      }
    })()
  }
}


export const getBlogGeneralsByTagId = (id) => {
  return dispatch => {
    (async () => {
      const res = await request.get('./api/tags/' + id)
      if (res.status === HTTP_CODE.OK) { }
      dispatch(refreshBlogGenerals(res.body))
    })()
  }
}

