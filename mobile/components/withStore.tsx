import React, {FunctionComponent} from 'react'
import {StoreContextConsumer, StoreContextValue} from '../model/store_context'

export type WithStoreProps = {
  store: StoreContextValue
}

export const withStore = (OriginalComponent: FunctionComponent<WithStoreProps>) => () => (
  <StoreContextConsumer>
    {store => <OriginalComponent store={store} />}
  </StoreContextConsumer>
)