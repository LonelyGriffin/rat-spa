import React, {useState} from 'react'
import { StoreContextProvider, StoreContextProps } from '../../model/store_context'
import { PageSelector } from '../page_selector'

type Props = {
  initialStoreProps: StoreContextProps
}

export const App = (props: Props) => {
  const {initialStoreProps} = props
  const [store, setStore] = useState(initialStoreProps)
  const setStoreProps = (props: Partial<StoreContextProps>) => setStore({...store, ...props})

  return (
    <StoreContextProvider value={{...store, setStoreProps}}>
      <PageSelector />
    </StoreContextProvider>
  )
}
