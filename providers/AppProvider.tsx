"use client"

import { useState, createContext, Dispatch, SetStateAction, useContext, useReducer } from "react"
import QueryProviders from "./QuerryProvider"
interface AppContextType {
    Balance: number,
    setBalance: Dispatch<SetStateAction<number>>
}
// const

const AppContext = createContext<AppContextType | null>(null)
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [Balance, setBalance] = useState<number>(0)
    return (
        <AppContext.Provider value={{ Balance, setBalance }}>
            <QueryProviders>
                {children}
            </QueryProviders>
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error("AppProvider is missing")
    }

    return context
}
