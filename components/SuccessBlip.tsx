import { Check } from 'lucide-react'
import React from 'react'

const SuccessBlip = () => {
    return (
        <div className=''>
            <div className='w-full h-[100vh] bg-[#c1c1c1] absolute top-0 z-5 opacity-50'>
            </div>
                <div className=" bg-black z-6 absolute flex justify-between w-[150px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded ">
                    <p className='font-bold'> success</p> <Check color='#4fb909' strokeWidth={5}/>
                </div>
        </div>
    )
}

export default SuccessBlip