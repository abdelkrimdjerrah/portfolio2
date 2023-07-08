import { createContext, useContext } from "react"
export type LoadingContext  = {
  loading: boolean
  setLoading:(c: boolean) => void
}
export const MyLoadingContext  = createContext<LoadingContext >({
    loading: true, 
    setLoading: () => {},
})
export const useLoadingContext = () => useContext(MyLoadingContext)