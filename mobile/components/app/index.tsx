import React, {useState} from 'react'
import { StoreContextProvider, StoreContextProps } from '../../model/store_context'
import { PageSelector } from '../page_selector'
import { useEffect } from 'react';

type Props = {
  initialStoreProps: StoreContextProps
}

export const App = (props: Props) => {
  const {initialStoreProps} = props
  const [store, setStore] = useState(initialStoreProps)
  const setStoreProps = (props: Partial<StoreContextProps>) => setStore({...store, ...props})

  useEffect(() => {
    history.pushState(null, null as any, '/' + store.data[store.cursor].paths.join('/'));
  }, [store.cursor])

  return (
    <StoreContextProvider value={{...store, setStoreProps}}>
      <PageSelector />
    </StoreContextProvider>
  )
}
