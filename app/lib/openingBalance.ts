export const getOpeningBalance = async () => {
  const res = await fetch("/api/openingbalance")

  if (!res.ok) {
    throw new Error("Failed to fetch opening balance")
  }

  console.log(await res.json())
  return await res.json()
}