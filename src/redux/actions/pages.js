// import axios from 'axios'

// export const fetchPage = (totalCount, currentPage, pageSize) => (dispatch) => {
//   axios
//     .get(`http://localhost:3001/totalCount?totalCount=${totalCount}`)
//     .then(({ data }) => {
//       dispatch(setCurrentPage(currentPage))
//       //dispatch(setBooks(data))
//       dispatch(setTotalBooksCount(totalCount))
//       console.log(currentPage)
//       console.log(data)
//     })
// }

// export const setCurrentPage = (currentPage) => ({
//   type: 'SET_CURRENT_PAGE',
//   payload: currentPage,
// })

// export const setTotalBooksCount = (totalCount) => ({
//   type: 'SET_TOTAL_BOOKS_COUNT',
//   payload: totalCount,
// })
