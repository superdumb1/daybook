import { useQuery } from "@tanstack/react-query"
import { getOpeningBalance } from "../lib/openingBalance"

export const useOpeningBalance = () => {
  return useQuery({
    queryKey: ["openingBalance"],
    queryFn: getOpeningBalance,
    staleTime: 1000 * 60 * 5, 
  })
}