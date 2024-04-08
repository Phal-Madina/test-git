import React from 'react'
import { wait } from '../page'

const StreamComponnentB = async () => {
    await wait(8000)
  return (
    <div className="flex justify-center items-center w-[300px] bg-red-300 rounded-md h-[300px]">StreamComponnentB</div>
  )
}

export default StreamComponnentB