import {combineReducers} from 'redux'
import blogGenerals from './blog-generals'
import blogDetail from './blog-detail'
import tags from './tags'

export default combineReducers({
  blogGenerals,
  blogDetail,
  tags
})
