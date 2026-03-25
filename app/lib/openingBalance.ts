export const getOpeningBalance = async () => {
  const res = await fetch("/api/openingbalance")

  if (!res.ok) {
    throw new Error("Failed to fetch opening balance")
  }

  return res.json()
}

export const setOpeningBalance = async (amount: number) => {
  const res = await fetch("/api/openingbalance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount }),
  })

  if (!res.ok) {
    throw new Error("Failed to set opening balance")
  }

  return res.json()
}