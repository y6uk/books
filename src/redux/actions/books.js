import axios from 'axios'

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
})

export const fetchBooks =
  (sortBy, category, totalCount, currentPage, pageSize) => (dispatch) => {
    dispatch(setLoaded(false))
    axios
      .get(
        `http://localhost:3001/books?${
          category !== null ? `category=${category}` : ''
        }&_sort=${sortBy.type}&_order=${
          sortBy.order
        }&totalCount=${totalCount}&_page=${currentPage}&_limit=3`
      )
      .then(({ data }) => {
        dispatch(setBooks(data))
        dispatch(setCurrentPage(currentPage))
        console.log(currentPage)
      })
  }

export const setBooks = (items) => ({
  type: 'SET_BOOKS',
  payload: items,
})

export const setCurrentPage = (currentPage) => ({
  type: 'SET_CURRENT_PAGE',
  payload: currentPage,
})

export const setTotalBooksCount = (totalCount) => ({
  type: 'SET_TOTAL_BOOKS_COUNT',
  payload: totalCount,
})
