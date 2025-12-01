/* eslint-disable react/prop-types */
import { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
const Search = ({fetchData}) => {

  const [search,setSearch] = useState('')

  return (
    <div className="w-75 d-flex gap-3 justify-content-center align-items-center">
      <input value={search} onChange={(e)=> setSearch(e.target.value)} className="form-control w-100" type="text" placeholder="Enter City Name ...."/>
      <BsSearch onClick={() => {
        fetchData(search);
        setSearch('')
      }} className='fs-4 fw-bold'/>
    </div>
  )
}

export default Search
