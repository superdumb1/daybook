import { Transaction } from '@/app/inputform/page'
import React, { Dispatch, SetStateAction } from 'react'

const FormInp: React.FC<{ form: Transaction, setForm: Dispatch<SetStateAction<Transaction>>, confirmInput: () => void, resetInp: () => void }> = ({ form, setForm, confirmInput, resetInp }) => {

  const inputClass = "h-full px-2  w-full outline-none focus:border-b border-white"
  const inpLabelClass = "px-2  w-full"
  const buttonClassName = "p-2 w-1/2 cursor-pointer  hover:scale-[1.05] font-bold"
  const setAmt = (e: string) => {
    if (!isNaN(Number(e))) setForm(prev => ({ ...prev, amount: Number(e) }))

  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className='py-[20px]'>
      {/*particulars */}
      <div className=' p-2 '>
        <label htmlFor="particulars" className={inpLabelClass}>Particulars</label>
        <input className={inputClass}
          id='particulars'
          required
          value={form.particulars}
          onChange={(e) =>
            setForm(prev => ({ ...prev, particulars: e.target.value }))
          } placeholder='enter the name of transaction' />
        {((form.particulars.length) <= 0) ? <p className='text-red-500'>*invalid particulars name</p> : <></>}

      </div>
      {/*amount */}
      <div className="p-2" >
        <label htmlFor='amount' className={inpLabelClass}>Amount</label>
        <input className={inputClass}
          value={form.amount}
          required
          onChange={(e) => setAmt(e.target.value)}
          placeholder='amount'
        />
        {(Number(form.amount) <= 0) ? <p className='text-red-500'>*amount cant be zero or invalid amount</p> : <></>}
      </div>
      {/**purchase expense sales */}
      <div className="border  border-white m-2 " >
        <select className=" py-3 px-2 w-full h-full focus:bg-[#666666] cursor-pointer"
          value={form.entryType}
          onChange={(e) =>
            setForm(prev => ({ ...prev, entryType: e.target.value as any }))
          }>
          <option value="expense">expenses</option>
          <option value="income">sales</option>
          <option value="income">purchase</option>
        </select>
      </div>
      {/**online cash credit */}
      <div className="border border-white m-2 " >
        <select className=" py-3 px-2 h-full w-full focus:bg-[#666666] cursor-pointer"
          value={form.transactionType}
          onChange={(e) =>
            setForm(prev => ({ ...prev, transactionType: e.target.value as any }))
          }>
          <option value="cash">cash</option>
          <option value="online">online</option>
          <option value="online">credit</option>
        </select>
      </div>
      {/**buttons confirm and reset */}
      <div className="border flex w-full border-white m-2 " >
        <button onClick={confirmInput} type='submit'
          className={`${buttonClassName} bg-green-500 hover:font-bold hover:bg-green-400`}>confirm</button>
        <button onClick={resetInp} type='button'
          className={`${buttonClassName} bg-red-500 hover:font-bold hover:bg-red-400`} >reset</button>
      </div>
    </form>
  )
}

export default FormInp