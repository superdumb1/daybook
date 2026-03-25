export const getOpeningBalance = async () => {
  const res = await fetch("/api/openingbalance")

  if (!res.ok) {
    throw new Error("Failed to fetch opening balance")
  }


  return await res.json()
}