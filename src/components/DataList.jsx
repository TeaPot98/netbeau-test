import styled from '@emotion/styled'

const DataList = ({ data }) => {
  return (
    <>
      {data.length > 0 &&
        <StyledList>
          <ul>
            {data.map(dataItem =>
              <li key={dataItem}>{dataItem}</li>
            )}
          </ul>
        </StyledList> 
      }

    </>
  )
}

export default DataList

const StyledList = styled.div`
  max-height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 2rem;
  padding: 2rem;
  
  ul {
    max-height: 100%;
    list-style-type: none;
    padding: 0;
    padding-right: 1rem;
    margin: 0;
    color: white;
    overflow: auto;
  }

  ul::-webkit-scrollbar {
    width: 5px;
  }
  
  ul::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 1rem;
  }
  
  ul::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 1rem;
  }
`