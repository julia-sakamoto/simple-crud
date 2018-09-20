import React from 'react'
import axios from 'axios'
import { requestData, receiveDataSuccess, receiveDataFailed } from '../actions'

const CharacterList = ({ store }) => {
  const { isFetching, characterArray } = store.getState().characters

  const handleFetchData = () => {
    store.dispatch(requestData())
    axios.get('/api/characters')
      .then(res => {
        const _characterArray = res.data
        store.dispatch(receiveDataSuccess(_characterArray))
      })
      .catch(err => {
        console.error(new Error(err))
        store.dispatch(receiveDataFailed())
      })
  }

  return (
    <div>
    {
      isFetching ? <h2>Now Loading...</h2> :
        <div>
          <button onClick={() => handleFetchData()}>fetch data</button>
          <ul>
            <li>
              {characterArray.map(character => (
                <li key={character._id}>
                  {`${character.name} (${character.age})`}
                </li>
              ))}
            </li>
          </ul>
        </div>
    }
    </div>
  )
}

export default CharacterList
