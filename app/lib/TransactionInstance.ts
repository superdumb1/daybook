import { Transaction } from "../inputform/page"

export const addTransaction = async (data: Transaction) => {
  const res = await fetch("/api/transactionInstance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error("Failed to add transaction")
  }

  return res.json()
}


export const getTransactions = async (params: {
  range?: string
  from?: string
  to?: string
}) => {
  const query = new URLSearchParams()

  if (params.range) query.append("range", params.range)
  if (params.from) query.append("from", params.from)
  if (params.to) query.append("to", params.to)

  const res = await fetch(`/api/transactionInstance?${query.toString()}`)

  if (!res.ok) {
    throw new Error("Failed to fetch transactions")
  }

  return res.json()
}


