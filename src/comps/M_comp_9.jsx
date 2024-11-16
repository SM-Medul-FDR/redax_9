import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../clice/counterSlice'
const M_comp_9 = () => {
    const SliceData = useSelector((state)=>state.storeData.value)
    const Dispatch  = useDispatch()


    const ADD = ()=>{
        Dispatch(increment())
    }
    const Mainous = ()=>{
        Dispatch(decrement())
    }
  return (
    <>
    
    <div >
            <div className="container  ">
                <div className="h-lvh w-full  flex flex-col gap-10 justify-center items-center ">
                    <div className=' flex flex-col items-center gap-5 pt-5 bg-[#77b6b6b6] h-[200px] w-[200px] ' >

                        <div className='text-[40px] text-white ' >{SliceData}</div>
                        <div className='flex gap-2' >

                            <button  onClick={Mainous} className='px-2 text-[30px] text-white py-0 rounded-[5px] bg-fuchsia-600 ' >-</button>
                            <button  onClick={ADD} className='px-2 text-[30px] text-white py-0 rounded-[5px] bg-indigo-900' >+</button>
                            
                        </div>
                    </div>
                </div>
            </div>
    </div>

    
    </>
  )
}

export default M_comp_9