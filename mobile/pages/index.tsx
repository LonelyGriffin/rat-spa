import React from 'react'
import { App } from '../components/app'
import { StoreContextProps } from '../model/store_context'
import fetch from 'node-fetch'
import { PATH_MAP, ROUTES, pathIndexToDataSrc } from '../model/routes'
import { TRouteData } from '../types/route_data'

type StaticProps = {
  initialStoreProps: StoreContextProps
}

export async function getStaticProps(): Promise<{props: StaticProps}> {
  const targetResponce = await fetch(pathIndexToDataSrc(PATH_MAP.common))

  const targetData: TRouteData = await targetResponce.json()

  const initialStoreProps: StoreContextProps = {
    loadedRoutes: [{data: targetData, routeNode: ROUTES[PATH_MAP.common]}],
    routeCursor: 0,
    hasCategoryPreLoading: false,
    hasNearbyPreLoading: false
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