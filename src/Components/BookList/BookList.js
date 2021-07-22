import React from 'react'
import BookListItem from '../BookListItem/BookListItem'
import SortPopup from '../SortPopup/SortPopup'
import Categories from '../Categories/Categories'
import './BookList.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks, setCurrentPage } from '../../redux/actions/books'
import {
  fetchPage,
  // setCurrentPage,
  setTotalBooksCount,
} from '../../redux/actions/pages'
import LoadingBlock from '../BookListItem/LoadingBlock'
import { setCategory, setSortBy } from '../../redux/actions/filters'

const categoryNames = ['Хоррор', 'js', 'и другие']
const sortItems = [
  { name: 'названию', type: 'title', order: 'asc' },
  { name: 'автору', type: 'author', order: 'asc' },
  { name: 'рейтингу', type: 'rating', order: 'desc' },
]

const BookList = () => {
  const dispatch = useDispatch()
  const items = useSelector(({ books }) => books.items)
  const isLoaded = useSelector(({ books }) => books.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters)
  const totalCount = useSelector(({ books }) => books.totalCount)
  const pageSize = useSelector(({ books }) => books.pageSize)
  const currentPage = useSelector(({ books }) => books.currentPage)
  //const setCurrentPage = useSelector(({ currentPage }) => books.currentPage)

  console.log(totalCount)
  console.log(currentPage)
  console.log(setCurrentPage)
  console.log(isLoaded)
  // console.log(category)
  // console.log(sortBy)

  const pageCount = Math.ceil(totalCount / pageSize)
  const pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }

  React.useEffect(() => {
    dispatch(fetchBooks(sortBy, category, pageSize, currentPage))
  }, [category, sortBy, pageSize, currentPage, totalCount])

  // React.useEffect(() => {
  //   dispatch(fetchPage())
  // }, [])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  const onSelectCurrentPage = React.useCallback((p) => {
    dispatch(setCurrentPage(p))
  }, [])

  return (
    <div>
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <ul className="book_list">
        {isLoaded
          ? items.map((book) => {
              return (
                <li key={book.id}>
                  <BookListItem
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    price={book.price}
                    image={book.image}
                  />
                </li>
              )
            })
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </ul>
      <div>
        <div className="pagination">
          {pages.map((p, index) => {
            console.log(p)
            return (
              <span
                key={index}
                className={currentPage === p ? 'selectedPage' : 'page'}
                onClick={() => {
                  console.log('privet', p)
                  // setCurrentPage(p)
                  onSelectCurrentPage(p)
                }}
              >
                {p}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BookList
