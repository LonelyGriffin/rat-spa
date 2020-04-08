import { TCategory, CATEGORIES } from './categories';

const BASE_PATH = 'http://localhost:3000'

export type TRouteNode = {
  pathNodes: string[]
  category: TCategory
}

const nextPathIndex = (() => {
  let index = 0

  return () => index++
})()

export const PATH_MAP = {
  common: nextPathIndex(),
  how_care: {
    habitat: {
      cage: nextPathIndex(),
      inside_cage: nextPathIndex(),
      toys: nextPathIndex(),
    },
    care: {
      permitted_feed: nextPathIndex(),
      not_permitted_feed: nextPathIndex(),
      hygiene: nextPathIndex(),
      health: nextPathIndex(),
      entertainment: nextPathIndex()
    },
    parenting: {
      first_step: nextPathIndex(),
      communication: nextPathIndex(),
      training: nextPathIndex()
    }
  },
  how_choose: {
    where: nextPathIndex(),
    appearance: nextPathIndex(),
    sex: nextPathIndex(),
    count: nextPathIndex()
  },
  life: {
    path: nextPathIndex()
  },
  sorts: {
    body_type: {
      standard: nextPathIndex(),
      dambo: nextPathIndex(),
      manks: nextPathIndex()
    },
    skin_type: {
      standard: nextPathIndex(),
      sphinx: nextPathIndex(),
      downy: nextPathIndex(),
      satin: nextPathIndex(),
      rex: nextPathIndex()
    },
    color: {
      uniform: nextPathIndex(),
      ticked: nextPathIndex(),
      silver: nextPathIndex(),
      combined: nextPathIndex(),
      marked: nextPathIndex(),
      albinos: nextPathIndex(),
    }
  }
}

export const ROUTES: TRouteNode[] = (() => {
  type ResultNode = {
    number: number
    pathNodes: string[]
  }
  type TTree = {
    [key: string]: TTree | number
  } | number

  const recursive = (node: TTree, pathNodes: string[]) => {
    if (typeof node === 'number') {
      return [{
        number: node,
        pathNodes
      }]
    }

    return Object.keys(node)
      .reduce((result, pathNode) => {
        const a = recursive(node[pathNode], [...pathNodes, pathNode])
        result.push(...a)
        return result
      }, [] as ResultNode[])
  }

  return recursive(PATH_MAP, [])
})()
  .sort((a, b) => a.number - b.number)
  .map(item => {
    const categoryKey = Object.keys(CATEGORIES).find(categorKey =>
      item.pathNodes.find(pathNode => pathNode === categorKey))
    
    if (!categoryKey) {
      return
    }

    return {
      pathNodes: item.pathNodes,
      category: CATEGORIES[categoryKey]
    }
  })
  .filter<TRouteNode>(Boolean as any)

export const pathIndexToDataSrc = (pathIndex: number) => `${BASE_PATH}/data/${ROUTES[pathIndex].pathNodes.join('/')}.json`
