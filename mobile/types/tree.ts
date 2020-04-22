export type TTree<TNode> = {
  [key: string]: TTree<TNode> | TNode
} | TNode