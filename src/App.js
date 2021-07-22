import React from 'react'
import './App.css'
import BookList from './Components/BookList/BookList.js'
import LibHeader from './Components/LibHeader/LibHeader'

function App() {
  return (
    <main role="main">
      <div className="App">
        <LibHeader />
        <BookList />
      </div>
    </main>
  )
}

export default App
