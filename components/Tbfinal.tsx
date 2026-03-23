import React from 'react'

const Tbfinal:React.FC<{isLocked:boolean}> = ({isLocked}) => {
    return (
        <tr className="bg-[#000000]">
            <td className="border bg-[#000000] border-white p-2 " >
                1
            </td>
            <td className="border border-white  focus:bg-scale=[1.05]" >
                <p className=" px-2 py-1 h-full w-full ">{ }</p>
            </td>
            <td className="border border-white focus:bg-scale=[1.05]  " >
                <p className=" px-2 py-1 h-full w-full">{ }</p>

            </td>
            <td className="border  border-white  focus:bg-scale=[1.2]" >
                <p className=" py-3 px-2 w-full  h-full ">
                    { }
                </p>
            </td>
            <td className="border border-white focus:bg-scale=[1.05] " >
                <p className=" py-3 px-2 h-full w-full ">
                    { }
                </p>
            </td>
            <td className="border  border-white  p-2" >
                <button disabled className="p-1 w-full cursor-pointer bg-red-600 hover:font-bold hover:bg-red-500 hover:scale-[1.05]">edit</button>
                {/* <button disabled={isLocked} className="p-1 w-full cursor-pointer bg-red-600 hover:font-bold hover:bg-red-500 hover:scale-[1.05]">edit</button> */}
            
            </td>
        </tr>)
}

export default Tbfinal