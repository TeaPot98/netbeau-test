import React, { useState, useEffect } from 'react'
import './App.css'

import SearchContainer from './components/SearchContainer'
import SearchField from './components/SearchField'
import DataList from './components/DataList'
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
      data.filter(dataItem => dataItem.toLowerCase().includes(string.toLowerCase()))
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
      <SearchContainer>
        <SearchField searchString={searchString} handleSearch={handleSearch} />
        <DataList data={dataToShow} />
      </SearchContainer>
    </div>
  )
}

export default App
