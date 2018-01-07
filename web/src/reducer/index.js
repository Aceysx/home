import {combineReducers} from 'redux'
import blogGenerals from './blog-generals'
import blogDetail from './blog-detail'
export default combineReducers({
  blogGenerals,
  blogDetail
})
