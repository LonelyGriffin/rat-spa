import { TTree } from "../types/tree"

export const treeToArray = <TNode>(
  treePart: TTree<TNode>,
  isNode: (treePart: TTree<TNode>) => boolean
) => {
  type TStackNode = {
    node: TTree<TNode>
    childCursor: number
    children: TTree<TNode>[]
  }
  const stack: Array<TStackNode> = [{
    node: treePart,
    childCursor: 0,
    children: Object.values(treePart)
  }]
  const result: TNode[] = []

  while (stack.length > 0) {
    const stackNode = stack[stack.length - 1]
    if (isNode(stackNode.node)) {
      result.push(stackNode.node as TNode)
      stack.pop()
      continue
    }
    const child = stackNode.children[stackNode.childCursor]

    if (child) {
      stackNode.childCursor++
      stack.push({
        node: child,
        childCursor: 0,
        children: Object.values(child)
      })
      continue
    }

    stack.pop()
  }

  return result
}