import React, { useRef, useEffect, useState } from 'react'
import {WithStoreProps, withStore} from '../withStore'
import css from './index.module.css'
import {Swipeable, EventData, } from 'react-swipeable'
import BezierEasing from 'bezier-easing'
import { CATEGORY_ARRAY } from '../../model/category'
import { CategoryNavigation } from '../category_navigation'
import { increseCursor, decreaseCursor, getPrevDataItem, getNextDataItem } from '../../model/store_context'
import { TDataNode } from '../../model/screen'
import { PageWithSlider } from '../page_with_slider'

const easeOutCirc = BezierEasing(0.445, 0.05, 0.55, 0.95)

type Props = WithStoreProps & {
}

const PageSelectorComponent = (props: Props) => {
  const hasAnimationRef = useRef(false)
  const screenWidth = useRef(0)
  const rootRef = useRef<HTMLDivElement>(null)
  // TODO не переименовывать - конфликт имен
  const [p, setP] = useState(0)

  const handleSwiping = (e: EventData) => {
    if (e.dir !== 'Left' && e.dir !== 'Right') {
      return
    }

    const percent = - e.deltaX / screenWidth.current
    setP(percent)
  }

  //TODO вынести в утилс
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
        requestAnimationFrame(animationFn)
      } else {
        setP(percent)
        hasAnimationRef.current = false
        resolve()
      }
    }

    requestAnimationFrame(animationFn)
  })

  const handleSwiped = async (e: EventData) => {
    if (e.dir !== 'Left' && e.dir !== 'Right') {
      return
    }

    if (p > 0) {
      await animateTo(1, 500)
      props.store.setStoreProps(decreaseCursor(props.store))
    } else {
      await animateTo(-1, 500)
      props.store.setStoreProps(increseCursor(props.store))
    }
    setP(0)
  }

  useEffect(() => {
    const rootElement = rootRef.current

    if (!rootElement) {
      return
    }

    screenWidth.current = rootElement.offsetWidth
  }, [])

  useEffect(() => {

  }, [props.store.cursor])

  const dataItem = props.store.data[props.store.cursor]
  const prevDataItem = getPrevDataItem(props.store)
  const nextDataItem = getNextDataItem(props.store)
  const activeCategory = dataItem.category
  return (
    <Swipeable
      onSwiping={handleSwiping}
      onSwiped={handleSwiped}
      trackMouse={true}
      className={css.root}
      delta={30}
    >
      <div className={css.pages} ref={rootRef} style={{left: `${p * 100}%`}}>
        <div className={css.page_left}><Page dataItem={prevDataItem} /></div>
        <div className={css.page_right}><Page dataItem={nextDataItem} /></div>
        <Page dataItem={dataItem} />
      </div>
      <div className={css.staticContentForPageWithSlider}>

      </div>
      <CategoryNavigation
        categories={CATEGORY_ARRAY}
        active={activeCategory}
      />
    </Swipeable>
  )
}

const Page = (props: {dataItem: TDataNode}) => {
  const {custom} = props.dataItem

  if (custom) {
    return <div>Custom</div>
  }
  
  return <PageWithSlider data={props.dataItem} />
}

export const PageSelector = withStore(PageSelectorComponent)