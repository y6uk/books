const initialState = {
  items: [],
  isLoaded: false,
  currentPage: 1,
  pageSize: 3,
  totalCount: 7,
}

const books = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOOKS': {
      return {
        ...state,
        items: action.payload,
        // totalCount: action.payload._limit,
        isLoaded: true,
      }
    }
    case 'SET_LOADED': {
      return {
        ...state,
        isLoaded: action.payload,
      }
    }
    case 'SET_CURRENT_PAGE': {
      return {
        ...state,
        currentPage: action.payload,
      }
    }
    case 'SET_TOTAL_BOOKS_COUNT': {
      return {
        ...state,
        totalCount: action.payload,
      }
    }

    default:
      return state
  }
}

export default books
