import React, { useState } from 'react'

import data from './data'

const App = () => {
  const [searchString, setSearchString] = useState('')
  const [dataToShow, setDataToShow] = useState(data)
  
  const handleSearch = (event) => {
    setSearchString(event.target.value)
    setDataToShow(
      data.filter(item => item.toLowerCase().includes(event.target.value.toLowerCase()))
    )
    // console.log(event.target.value)
  }
  
  return (
    <div className="App">
      <input value={searchString} onChange={handleSearch} type="search" placeholder="Search..." />
      <ul>
        {dataToShow.map(d =>
          <li key={d}>{d}</li>
        )}
      </ul>
    </div>
  )
}

export default App
