"use client"
import FormInp from '@/app/inputform/Inputs'
import React, { useState, useEffect } from 'react'
import { addTransaction } from '../lib/TransactionInstance'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import SuccessBlip from '@/components/SuccessBlip'
type TransactionType = "cash" | "credit" | "online"
type EntryType = "sales" | "expense"|"purchase"

export interface Transaction {
    id?: string
    particulars: string
    amount: number
    entryType: EntryType
    transactionType: TransactionType
    createdAt?: Date
    lastEdited?: Date
}


const InputForm: React.FC = () => {
    // const [transactions, setTransactions] = useState<Transaction[]>([])

    const [form, setForm] = useState<Transaction>({
        particulars: "",
        amount: 0,
        entryType: "expense",
        transactionType: "cash",
    })
    const queryClient = useQueryClient()
    const [successBlipVis, setSuccessBlipVis] = useState(false)

    useEffect(() => {
        let timer: NodeJS.Timeout
        if (successBlipVis) {
            timer = setTimeout(() => {
                setSuccessBlipVis(false)
            }, 2000)
        }
        return () => clearTimeout(timer)
    }, [successBlipVis])//turn off the blip

    const mutation = useMutation({
        mutationFn: addTransaction,

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["transactions"],
            })
            setSuccessBlipVis(true)
        },

    })

    const confirmInput = () => {
        if(Number(form.amount)!==0&&form.particulars.length>0) {

            
            resetInp()
            mutation.mutate(form);
        }
    }

    const resetInp = () => {
        setForm({
            particulars: "",
            amount: 0,
            entryType: "expense",
            transactionType: "cash",
        })
    }
    return (
        <>
            <FormInp setForm={setForm} form={form} confirmInput={confirmInput} resetInp={resetInp} />
            {successBlipVis && <SuccessBlip />}
        </>
    )
}

export default InputForm