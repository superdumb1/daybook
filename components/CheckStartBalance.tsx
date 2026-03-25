import { setOpeningBalance } from '@/app/lib/openingBalance'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { ChangeEvent, useState } from 'react'

const CheckStartBalance: React.FC = () => {
  const queryClient = useQueryClient()
  const [val, setVal] = useState<number>(0)
  const verifiedValSetter=(e:ChangeEvent<HTMLInputElement>)=>{
    if(!isNaN(Number(e.target.value))) setVal(Number(e.target.value))
  }
  const mutation = useMutation({
    mutationFn: setOpeningBalance,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["openingBalance"],
      })
    },
  })

  return (
    <>
      <div className='w-full h-[100vh] bg-[#c1c1c1] absolute top-0 z-5 opacity-75'>
      </div>
      <div className='absolute h-[100vh] w-full z-6'>
        <form onSubmit={(e) => {
          e.preventDefault();
          mutation.mutate(val)
        }} className=" bg-[#c3c3c3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded">
          <div className='p-2'>
            <label htmlFor="opening_balance" className="block text-center text-black p-2 w-full">opening balence</label>
            <input type="text" inputMode='numeric'
              required className="bg-white w-[250px] block m-2 p-1 px-2 no-spinner text-black"
              id="opening_balance" value={val} 
              onChange={(e) => { verifiedValSetter(e) }} />
          </div>
          <div className='px-4 py-2'>
            <button type="submit" id="confirm_opening_balence" className=" w-full bg-red-500 p-1 cursor-pointer hover:scale-[1.1]  hover:bg-red-400 hover:font-bold rounded-full"> confirm</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CheckStartBalance;