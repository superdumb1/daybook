"use client"

import CheckStartBalance from "@/components/CheckStartBalance";
import { useAppContext } from "@/providers/AppProvider";
import React, { useState, useEffect, useEffectEvent } from 'react'
import { getOpeningBalance } from "./lib/openingBalance";

export default function Home() {
  const [now, setNow] = useState<string | null>(null)

  useEffect(() => {
    setNow(new Date().toLocaleString())
  }, [])
  const [isInputStartBalenceVisible, setIsInpBalVis] = useState<boolean>(true);
  useEffect(() => {
    const balStatus=getOpeningBalance()
    if(balStatus.success){
      
    }
    return () => {
      
    }
  }, [])
  
  const { Balance, openingBalance } = useAppContext()
  const labelClass = "w-[160px] p-1 px-2 border border-white text-xl"
  const valueClass = "w-[220px] p-1 px-2 border border-white flex items-end justify-end"

  if (isInputStartBalenceVisible) {

    return (
      <CheckStartBalance setIsInpBalVis={setIsInpBalVis} />
    )
  }

  else {
    return (
      <div className="p-4">
        <h2 className="text-xl mb-4">{now}</h2>

        <div className="flex">
          <p className={labelClass}>Opening Balance</p>
          <p className={valueClass}>{openingBalance}</p>
        </div>

        <div className="flex">
          <p className={labelClass}>Closing Balance</p>
          <p className={valueClass}>{Balance}</p>
        </div>

        <div className="flex">
          <p className={labelClass}>Closing Cash Balance</p>
          <p className={valueClass}>{Balance}</p>
        </div>

        <div className="flex">
          <p className={labelClass}>Closing Online Balance</p>
          <p className={valueClass}>{Balance}</p>
        </div>

        <div className="flex">
          <p className={labelClass}>Total Credit to Receive</p>
          <p className={valueClass}>{Balance}</p>
        </div>

        <div className="flex">
          <p className={labelClass}>Total Credit to Pay</p>
          <p className={valueClass}>{Balance}</p>
        </div>
      </div>
    )

  }
}
