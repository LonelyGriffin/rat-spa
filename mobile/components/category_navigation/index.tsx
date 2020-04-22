import React, { useRef, useEffect, useState } from 'react'
import { TCategory, CATEGORY_MAP } from '../../model/category'
import css from './index.module.css'
import BezierEasing from 'bezier-easing'

type Props = {
  categories: TCategory[]
  active?: TCategory
}


const easeOutCirc = BezierEasing(0.445, 0.05, 0.55, 0.95)

const WIDTH = 300
// const HEIGHT = 68

const getDirection = (indexSub: number) => {
  if (Math.abs(indexSub) > 1) {
    return indexSub > 0 ? -1 : 1
  } else {
    return indexSub > 0 ? 1 : -1
  }
 }
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
  const reorderedCategories = reorderCategories(categories.filter(x => x.index !== CATEGORY_MAP.about.index ), currentCategory?.index || 0)
  const categoriesCount = reorderedCategories.length
  const categorisToRender = [
    reorderedCategories[categoriesCount - 1],
    ...reorderedCategories,
    reorderedCategories[0],
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
    if (active?.index === CATEGORY_MAP.about.index) {
      return
    }
    if (currentCategory?.index === active?.index) {
      return
    }

    const direction = getDirection(currentCategory!.index - active!.index)
    // console.log(currentCategory?.index, active?.index, direction, setCurrentCategory, animateTo)
    // setCurrentCategory(active)
    
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
            const n = i - 1 + p
            const x = (WIDTH * n) / categoriesCount
            const centerdX = x + 0.5 * WIDTH / categoriesCount
            const pix = centerdX * Math.PI / WIDTH
            const piy = 1 - Math.sin(pix)
            const y = 30 * piy
            const key = i < 1 || i > categorisToRender.length - 2
              ? `${category.index}_${i}`
              : `${category.index}`
            const categoryStyle = category.index === currentCategory?.index 
              ? {left: x, top: y, border: '2px solid rgba(182, 141, 64, 0.7)'} 
              : {left: x, top: y}

            return (
              <li
                style={categoryStyle}
                className={css.category}
                key={key}
              >
                <div
                  className={css.categoryIcon}
                  style={{backgroundImage: `url(${category.iconSrc})`}}
                />
              </li>
            )
          })}
        </ul>
        <div className={css.wheelShadow}></div>
        <div className={css.wheel}></div>
      </div>
    </div>
  )
}
