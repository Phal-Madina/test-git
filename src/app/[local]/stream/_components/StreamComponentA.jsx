import React from 'react'
import { wait } from '../page'

const StreamComponentA = async () => {
    await wait(6000);
  return (
    <div className="flex justify-center items-center w-[300px] bg-blue-300 rounded-md h-[300px]">StreamComponentA</div>
  )
}

export default StreamComponentA