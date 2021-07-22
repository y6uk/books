import books from './books'
import filters from './filters'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  books,
  filters,
})

export default rootReducer
