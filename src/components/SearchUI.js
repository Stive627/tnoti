import React, { useState } from 'react'
import Searchbar from './SearchBar'

function SearchUI() {
    const [keyword, setKeyword] = useState('')
  return (
    <div style={{backgroundColor:'rgba(217, 217, 217, 1)'}} className=' w-screen h-screen'>
        <div className=' flex justify-center items-center'>
            <div className=' w-1/3 border border-gray-500 p-4'>
            <Searchbar value = {keyword} handleValue = {(value) => setKeyword(value)}/>
            <div></div>
            </div>
        </div>
    </div>
  )
}

export default SearchUI