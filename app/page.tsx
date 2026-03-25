"use client"

import CheckStartBalance from "@/components/CheckStartBalance";
import { useAppContext } from "@/providers/AppProvider";
import React, { useState, useEffect, useEffectEvent } from 'react'
import { useQuery } from "@tanstack/react-query";
import { getOpeningBalance } from "./lib/openingBalance";
import { calculateLedger } from "./hooks/calculateTotals";
import { getTransactions } from "./lib/TransactionInstance";


export default function Home() {
  const [now, setNow] = useState<string | null>(null)
  const {
    data: openingBalanceData,
    isLoading: openingLoading,
    isError: openingError,
  } = useQuery({
    queryKey: ["openingBalance"],
    queryFn: getOpeningBalance,
  })

  const {
    data: transactionsData,
    isLoading: transactionsLoading,
    isError: transactionsError,
  } = useQuery({
    queryKey: ["getTransactions"],
    queryFn: () => getTransactions({ range: "today" }),
  })
  let ledgerResults = null
  if (transactionsData?.transactions !== undefined) {

    ledgerResults = calculateLedger(transactionsData?.transactions, openingBalanceData?.result.openingBalance)

  }
  const ledger=ledgerResults?.ledger
  console.log(ledgerResults)
  useEffect(() => {
    setNow(new Date().toLocaleString())
  }, [])


  const labelClass = "w-[160px] p-1 px-2 border border-white text-xl"
  const valueClass = "w-[220px] p-1 px-2 border border-white flex items-end justify-end"

  if (openingLoading) return <p>Loading...</p>

  if (!openingBalanceData?.success) return <CheckStartBalance />
  if (transactionsLoading) return <p>loading ...</p>
  if (ledgerResults === null) return <p>loading ...</p>
  if(ledger===undefined) return <p>loading ....</p>
  return (
    <div className="p-3 space-y-3">
      <p>{now}</p>
      {/* HEADER */}
      <div className="p-3 border rounded-lg">
        <Card title="Opening Balance" value={openingBalanceData?.result.openingBalance} />
        <Card title="Final Balance" value={ledgerResults.finalBalance} />
      </div>

      {/* SUMMARY */}
      <div className="p-3 border rounded-lg">
        <Card title="Sales" value={ledger.sales} />
        <Card title="Purchase" value={ledger.purchase} />
        <Card title="Expenses" value={ledger.expenses} />
      </div>

      {/* CASH */}
      <div className="p-3 border rounded-lg">
        <h3 className="font-bold mb-2">Cash</h3>
        <Card title="Sales" value={ledger.cash.sales} />
        <Card title="Purchase" value={ledger.cash.purchase} />
        <Card title="Expense" value={ledger.cash.expense} />
        <Card title="Balance" value={ledger.cash.balance} />
      </div>

      {/* CREDIT */}
      <div className="p-3 border rounded-lg">
        <h3 className="font-bold mb-2">Credit</h3>
        <Card title="Sales" value={ledger.credit.sales} />
        <Card title="Purchase" value={ledger.credit.purchase} />
        <Card title="Expense" value={ledger.credit.expense} />
        <Card title="Balance" value={ledger.credit.balance} />
      </div>

      {/* ONLINE */}
      <div className="p-3 border rounded-lg">
        <h3 className="font-bold mb-2">Online</h3>
        <Card title="Sales" value={ledger.online.sales} />
        <Card title="Purchase" value={ledger.online.purchase} />
        <Card title="Expense" value={ledger.online.expense} />
        <Card title="Balance" value={ledger.online.balance} />
      </div>

    </div>
  
  )


}

 const Card = ({ title, value }: any) => (
    <div className="flex justify-between p-2 border rounded mb-2">
      <p>{title}</p>
      <p>{value}</p>
    </div>
  )