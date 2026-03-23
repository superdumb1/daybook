export const addTransaction = async (data: any) => {
  console.log(data)
  const res = await fetch("/api/saveNewTransactionInstance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

  return res.json()
}

