import React, { useRef, useEffect, useState } from 'react'
import { TCategory, CATEGORY_MAP } from '../../model/category'
import css from './index.module.css'
import BezierEasing from 'bezier-easing'

type Props = {
  categories: TCategory[]
  active?: TCategory
  onCategoryClick: (index: number) => void
  onAboutClick: () => void
}


const easeOutCirc = BezierEasing(0.445, 0.05, 0.55, 0.95)

const WIDTH = 300
// const HEIGHT = 68

const circelIncr = (x: number, total: number) => x + 1 >= total ? 0 : x + 1
const circelDecr = (x: number, total: number) => x > 0 ? x - 1 : total - 1

const getDirection = (from: number, to: number, total: number) => {
  let left = 0
  let right = 0
  let leftIndex = from
  let rightIndex = from

  while(true) {
    if (leftIndex === to) {
      return left
    }
    if (rightIndex === to) {
      return right
    }
    leftIndex = circelDecr(leftIndex, total)
    rightIndex = circelIncr(rightIndex, total)
    left += 1
    right -= 1
  }
}

const isAboutCategory  = (category?: TCategory) => category && category.index === CATEGORY_MAP.about.index

const reorderCategories = (categories: TCategory[], active: number) => {

  const result = []
  const base = Math.ceil(categories.length / 2)
  const shift = base + active

  for(let i = 0; i < categories.length; i++) {
    result[i] = categories[(i + shift) % categories.length]
  }

  return result
}

export const CategoryNavigation = (props: Props) => {
  const {categories, active} = props
  const hasAnimationRef = useRef(false)
  const animationReqRef = useRef(0)
  const [p, setP] = useState(0)
  const [currentCategory, setCurrentCategory] = useState(active)
  const reorderedCategories = reorderCategories(categories.filter(x => !isAboutCategory(x)), currentCategory?.index || 0)
  const categoriesCount = reorderedCategories.length
  const categorisToRender = [
    reorderedCategories[categoriesCount - 2],
    reorderedCategories[categoriesCount - 1],
    ...reorderedCategories,
    reorderedCategories[0],
    reorderedCategories[1],
  ]
  const animateTo = async (percent: number, duration: number) => new Promise(resolve => {
    hasAnimationRef.current = true

    const startPercent = p
    const percentDelta = (percent - startPercent) / duration
    const startTime = Date.now()

    const animationFn = () => {
      const now = Date.now()
      const elapsedTime = now - startTime
      const animationTime = duration * easeOutCirc(elapsedTime / duration)
      if (elapsedTime < duration) {
        const newPercent = percentDelta * animationTime + startPercent
        setP(newPercent)
        animationReqRef.current = requestAnimationFrame(animationFn)
      } else {
        setP(percent)
        hasAnimationRef.current = false
        resolve()
      }
    }

    animationReqRef.current = requestAnimationFrame(animationFn)
  })
  

  useEffect(() => {
    if (currentCategory?.index === active?.index) {
      return
    }
    
    if (isAboutCategory(active)) {
      return
    }
    const direction = getDirection(currentCategory!.index, active!.index, reorderedCategories.length)
    
    animateTo(direction, 300).then(() => {
      setCurrentCategory(active)
      setP(0)
    })

    return () => cancelAnimationFrame(animationReqRef.current)
  }, [active])

  return (
    <div className={css.root}>
      <div className={css.container}>
        <ul className={css.categories}>
          {categorisToRender.map((category, i) => {
            const n = i - 2 + p
            const x = (WIDTH * n) / categoriesCount
            const centerdX = x + 0.5 * WIDTH / categoriesCount
            const pix = centerdX * Math.PI / WIDTH
            const piy = 1 - Math.sin(pix)
            const y = 20 * piy
            const key = i < 2 || i > categorisToRender.length - 3
              ? `${category.index}_${i}`
              : `${category.index}`
            const categoryStyle = category.index === active?.index 
              ? {left: x, top: y, border: '2px solid rgba(182, 141, 64, 0.7)'} 
              : {left: x, top: y}

            return (
              <li
                style={categoryStyle}
                className={css.category}
                key={key}
                onClick={() => props.onCategoryClick(category.index)}
              >
                <div
                  className={css.categoryIcon}
                  style={{backgroundImage: `url(${category.iconSrc})`}}
                />
              </li>
            )
          })}
        </ul>
      </div>
      <div className={css.wheelContainer}>
        <div className={css.wheelShadow}></div>
        <div
          onClick={props.onAboutClick}
          className={css.wheel}
          style={{border: isAboutCategory(active) ? '2px solid rgba(182, 141, 64, 0.7)' : ''}}
        >
          @
        </div>
      </div>
    </div>
  )
}
