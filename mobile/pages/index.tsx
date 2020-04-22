import React from 'react'
import { App } from '../components/app'
import { StoreContextProps } from '../model/store_context'
import { DATA_ARRAY } from '../model/screen'

type StaticProps = {
  initialStoreProps: StoreContextProps
}

export async function getStaticProps(): Promise<{props: StaticProps}> {
  const initialStoreProps: StoreContextProps = {
    data: DATA_ARRAY,
    cursor: 0
  }

  return {
    props: {
      initialStoreProps
    }
  }
}

export default (props: StaticProps) => (
  <App initialStoreProps={props.initialStoreProps} />
)