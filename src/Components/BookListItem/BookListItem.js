import React from 'react'
import './BookListItem.css'

const BookListItem = ({ title, author, price, image }) => {
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={image} alt="cover" />
      </div>
      <div className="book-details">
        <a href="#" className="book-title">
          {title}
        </a>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
      </div>
    </div>
  )
}

export default BookListItem
