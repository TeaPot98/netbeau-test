import styled from '@emotion/styled'

const SearchField = ({ searchString, handleSearch }) => {
  return (
    <StyledInput 
      value={searchString} 
      onChange={(event) => handleSearch(event.target.value)} 
      type="search" 
      placeholder="Search..." 
    />
  )
}

export default SearchField

const StyledInput = styled.input`
  background-color: transparent;
  width: 20rem;
  height: 4rem;
  padding: 1rem;
  border-radius: 2rem;
  border: 2px solid white;
  color: white;
  font-size: 1.5rem;
  vertical-align: center;

  ::placeholder {
    color: white;
  }
  
  :focus {
    outline: 1px solid white;
  }

  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`