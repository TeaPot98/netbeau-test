import React, { useState, useEffect } from 'react'

import data from './data'

const App = () => {
  const [searchString, setSearchString] = useState('')
  const [dataToShow, setDataToShow] = useState(data)
  const url = new URL(window.location)
  const params = new URLSearchParams(url.search)
  
  const handleSearch = (string) => {
    setSearchString(string)
    // Filter dataset
    setDataToShow(
      data.filter(item => item.toLowerCase().includes(string.toLowerCase()))
    )
    // building new url
    const newUrl = window.location.origin + window.location.pathname + (string!== '' ? `?search=${string}` : '')
    
    // updating the url w/o refresh
    window.history.pushState({path: newUrl}, '', newUrl)
  }

  useEffect(() => {
    if (params.has('search')) {
      const querySearch = params.get('search')
      handleSearch(querySearch)
    }
  }, [])
  
  
  return (
    <div className="App">
      <input value={searchString} onChange={(event) => handleSearch(event.target.value)} type="search" placeholder="Search..." />
      <ul>
        {dataToShow.map(d =>
          <li key={d}>{d}</li>
        )}
      </ul>
    </div>
  )
}

export default App
