import { Transaction } from "@/app/inputform/page"




export const calculateLedger = (
  transactions: Transaction[],
  openingBalance: number
) => {
    // console.log(transactions)
    // return
  const ledger = {
    sales: 0,
    purchase: 0,
    expenses: 0,

    cash: { sales: 0, purchase: 0, expense: 0, balance: 0 },
    credit: { sales: 0, purchase: 0, expense: 0, balance: 0 },
    online: { sales: 0, purchase: 0, expense: 0, balance: 0 },
  }

  transactions.forEach((tx) => {
    const amount = Number(tx.amount)

    // ENTRY TOTALS
    if (tx.entryType === "sales") ledger.sales += amount
    if (tx.entryType === "purchase") ledger.purchase += amount
    if (tx.entryType === "expense") ledger.expenses += amount

    // CASH
    if (tx.transactionType === "cash") {
      if (tx.entryType === "sales") {
        ledger.cash.sales += amount
        ledger.cash.balance += amount
      } else {
        ledger.cash[tx.entryType] += amount
        ledger.cash.balance -= amount
      }
    }

    // CREDIT
    if (tx.transactionType === "credit") {
      if (tx.entryType === "sales") {
        ledger.credit.sales += amount
        ledger.credit.balance += amount
      } else {
        ledger.credit[tx.entryType] += amount
        ledger.credit.balance -= amount
      }
    }

    // ONLINE
    if (tx.transactionType === "online") {
      if (tx.entryType === "sales") {
        ledger.online.sales += amount
        ledger.online.balance += amount
      } else {
        ledger.online[tx.entryType] += amount
        ledger.online.balance -= amount
      }
    }
  })

  const finalBalance =
    openingBalance +
    ledger.cash.balance +
    ledger.credit.balance +
    ledger.online.balance
  return {
    ledger,
    openingBalance,
    finalBalance,
  }
}