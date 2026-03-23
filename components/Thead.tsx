import React from 'react'

const Thead = () => {
    return (
        <thead>
            <tr>
                <th className="p-2 text-xs">s/n</th>
                <th className="border border-white p-2 text-xs">Particulars</th>
                <th className="border border-white p-2"> amount</th>
                <th className="border border-white p-2"> income/expenses</th>
                <th className="border border-white p-2"> transaction</th>
            </tr>
        </thead>)
}

export default Thead