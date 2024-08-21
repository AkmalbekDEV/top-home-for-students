import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  const [state, setState] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get('https://a67474a4e6e67b1c.mokky.dev/courses')
      setState(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <div className='grid gap-10'>
        <h1 className='text-5xl text-blue-600 text-center font-bold'>Choose Your Group</h1>
        <div className='max-sm:flex max-sm:justify-center'>
          <div className='flex flex-wrap justify-center gap-5 px-[500px] max-lg:px-0'>
            {state.map((product) => {
              return (
                <div onClick={() => navigate(`/${product.href}`)} key={product.id} className='cursor-pointer hover:bg-blue-700 hover:shadow-md hover:shadow-blue-600 transition-all px-5 py-3 max-sm:flex max-sm:justify-center rounded-xl bg-blue-600'>
                  <h1 className='text-lg font-medium text-white'>{product.name}</h1>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home