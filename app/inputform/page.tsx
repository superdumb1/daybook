"use client"
import TbInput from '@/components/Inputs'
import { useAppContext } from '@/providers/AppProvider'
import React, { useState, useEffect } from 'react'
import { addTransaction } from '../lib/TransactionInstance'
type TransactionType = "cash" | "credit" | "online"
type EntryType = "income" | "expense"

export interface Transaction {
    id: string
    sn: number
    particulars: string
    amount: number
    entryType: EntryType
    transactionType: TransactionType
    createdAt?: Date
    lastEdited?: Date
}


const InputForm: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [form, setForm] = useState<Transaction>({
        id: "",
        sn: 1,
        particulars: "",
        amount: 0,
        entryType: "expense",
        transactionType: "cash",
        createdAt: new Date(),
        lastEdited: new Date()
    })
    const confirmInput = () => {
        const newTransaction: Transaction = {
            ...form,
            id: crypto.randomUUID(),
            createdAt: new Date(),
            lastEdited: new Date(),
            sn: transactions.length + 1
        }

        setTransactions(prev => [...prev, newTransaction])
        resetInp()
        addTransaction({a:"a"})
    }
    const resetInp = () => {
        setForm({
                id: "",
                sn: 1,
                particulars: "",
                amount: 0,
                entryType: "expense",
                transactionType: "cash",
                createdAt: new Date(),
            })
    }
    return (<>
        <TbInput setForm={setForm} form={form} confirmInput={confirmInput}  resetInp={resetInp}/>
        <form action=""></form>
        <div></div>

    </>
    )
}

export default InputForm