import React, { useRef, useEffect, useState } from 'react'
import {WithStoreProps, withStore} from '../withStore'
import css from './index.module.css'
import {Swipeable, EventData} from 'react-swipeable'
import BezierEasing from 'bezier-easing'
import { CATEGORY_ARRAY } from '../../model/category'
import { CategoryNavigation } from '../category_navigation'
import { increseCursor, decreaseCursor, getPrevDataItem, getNextDataItem } from '../../model/store_context'
import { TDataNode } from '../../model/screen'
import { PageWithSlider } from '../page_with_slider'
import cn from 'classnames'
import { LifePage } from '../life_page'
import {AboutPage} from '../about_page';
import { Left, Right, isLanscape } from '../../utils/swipe_orientaition';

const easeOutCirc = BezierEasing(0.445, 0.05, 0.55, 0.95)

type Props = WithStoreProps & {
}

const PageSelectorComponent = (props: Props) => {
  const hasAnimationRef = useRef(false)
  const screenWidth = useRef(0)
  const rootRef = useRef<HTMLDivElement>(null)

  const [dataItems, setDataItems] = useState([
    getPrevDataItem(props.store),
    props.store.data[props.store.cursor],
    getNextDataItem(props.store)
  ])
  const dataItem = dataItems[1]
  const prevDataItem = dataItems[0]
  const nextDataItem = dataItems[2]
  const prevCursorRef = useRef(props.store.cursor)

  useEffect(() => {
    setDataItems([
      getPrevDataItem(props.store),
      props.store.data[props.store.cursor],
      getNextDataItem(props.store)
    ])
  }, [props.store.data[props.store.cursor].imagesCursor])


  // TODO не переименовывать - конфликт имен
  const [p, setP] = useState(0)

  const handleSwiping = (e: EventData) => {
    if (e.dir !== Left() && e.dir !== Right()) {
      return
    }
    const delta = isLanscape() ? -e.deltaY : e.deltaX
    const percent = -delta / screenWidth.current
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
    if (e.dir !== Left() && e.dir !== Right()) {
      return
    }

    if (p > 0) {
      props.store.setStoreProps(decreaseCursor(props.store))
      
    } else {
      props.store.setStoreProps(increseCursor(props.store))
    }
  }

  useEffect(() => {
    const rootElement = rootRef.current

    if (!rootElement) {
      return
    }

    screenWidth.current = rootElement.offsetWidth
  }, [])

  useEffect(() => {
    const cursor = props.store.cursor
    const prevCursor = prevCursorRef.current
    
    if (cursor === prevCursor) {
      return
    }
    
    const count = props.store.data.length
    const leftDistanse = prevCursor > cursor
      ? prevCursor - cursor
      : prevCursor + count - cursor
    
    const rightDistanse = prevCursor < cursor
      ? cursor - prevCursor
      : cursor + count - prevCursor
    
    if (leftDistanse > rightDistanse) {
      setDataItems([
        getPrevDataItem({...props.store, cursor: prevCursor}),
        props.store.data[prevCursor],
        props.store.data[cursor],
      ])
      animateTo(-1, 300).then(() => {
        setDataItems([
          getPrevDataItem(props.store),
          props.store.data[cursor],
          getNextDataItem(props.store)
        ])
        setP(0)
        prevCursorRef.current = cursor
      })
    } else {
      setDataItems([
        props.store.data[cursor],
        props.store.data[prevCursor],
        getNextDataItem({...props.store, cursor: prevCursor}),
      ])
      animateTo(1, 300).then(() => {
        setDataItems([
          getPrevDataItem(props.store),
          props.store.data[cursor],
          getNextDataItem(props.store)
        ])
        setP(0)
        prevCursorRef.current = cursor
      })
    }
  }, [props.store.cursor])

  const activeCategory = dataItem.category

  const updateDataItem = (newDataItem: TDataNode) => {
    props.store.setStoreProps({
      data: props.store.data.map(x =>  x.index === newDataItem.index ? newDataItem : x)
    })
  }

  /// HEADER
  const targetItemData = p > 0 ? prevDataItem : nextDataItem
  const allOpacityPersent = targetItemData.custom && dataItem.custom
    ? 0
    : targetItemData.custom && !dataItem.custom
      ? 1 - Math.abs(p)
      : !targetItemData.custom && dataItem.custom
        ? Math.abs(p)
        : 1

  const headerTitle = activeCategory.title
  const targetHeaderTitle = targetItemData.category.title
  const categorySectionTitles = Object.values(activeCategory.section).map(x => x.title)
  const targetCategorySectionTitles = Object.values(targetItemData.category.section).map(x => x.title)
  const headerSections = props.store.data
    .reduce((result, x) => {
      const section = x.section
      if (!section) {
        return result
      }

      const hasInCategory = categorySectionTitles.includes(section.title)
      const hasInResult = result.includes(section.title)
      
      if (hasInCategory && !hasInResult) {
        result.push(section.title)
      }

      return result
    }, [] as string[])
    const targetHeaderSections = props.store.data
      .reduce((result, x) => {
        const section = x.section
        if (!section) {
          return result
        }

        const hasInCategory = targetCategorySectionTitles.includes(section.title)
        const hasInResult = result.includes(section.title)
        
        if (hasInCategory && !hasInResult) {
          result.push(section.title)
        }

        return result
      }, [] as string[])

  const headerActiveSection = headerSections.findIndex(x => x === dataItem.section?.title)

  const sectionsOpacity = targetHeaderSections.length > 0 && categorySectionTitles.length > 0
    ? 1
    : targetHeaderSections.length === 0 && categorySectionTitles.length > 0
      ? 1 - Math.abs(p)
      : targetHeaderSections.length > 0 && categorySectionTitles.length === 0
        ? Math.abs(p)
        : 0
  const titlePositionPersent = 1 - sectionsOpacity

  return (
    <Swipeable
      onSwiping={handleSwiping}
      onSwiped={handleSwiped}
      trackMouse={true}
      className={css.root}
      delta={30}
    >
      {<div className={css.staticContentForPageWithSlider} style={{opacity: allOpacityPersent}}>
      <div className={css.topCircleSeparator}  style={{opacity: 1 - sectionsOpacity}}/>
        <div className={css.header}>
          <h1 className={css.headerTitle} style={{top: titlePositionPersent * 18, opacity: 1 - Math.abs(p)}}>{headerTitle}</h1>
          <h1 className={css.headerTitle}  style={{top: titlePositionPersent * 18, opacity: Math.abs(p)}}>{targetHeaderTitle}</h1>
          {<div className={css.headerSections} style={{top: 30, opacity: sectionsOpacity}}>
            {(headerSections.length > 0 ? headerSections : targetHeaderSections).map((section, i) => (
              <div
                className={cn(css.headerSection, i === headerActiveSection && css.headerActiveSection)}
                key={section}
                style={{zIndex: headerSections.length - i}}
                onClick={() => {
                  const targetDataItem = props.store.data.find(x => x.section && x.section.title === section)

                  if (targetDataItem !== undefined) {
                    props.store.setStoreProps({
                      ...props.store,
                      cursor: targetDataItem.index
                    })
                  }
                }}
              >
                <div className={css.headerSectionInner}>
                {section}
                </div>
              </div>
            ))}
          </div>}
        </div>
        <div className={css.circleSeparator}/>
      </div>}
      <div
        ref={rootRef}
        className={css.page}
        key={prevDataItem.index}
        style={{left: `${p * 100 - 100}%`}}
      >
        <Page
          dataItem={prevDataItem}
          setData={updateDataItem}
        />
      </div>
      <div
        className={css.page}
        key={dataItem.index}
        style={{left: `${p * 100}%`}}
      >
        <Page
          dataItem={dataItem}
          setData={updateDataItem}
        />
      </div>
      <div
        className={css.page}
        key={nextDataItem.index}
        style={{left: `${p * 100 + 100}%`}}
      >
        <Page
          dataItem={nextDataItem}
          setData={updateDataItem}
        />
      </div>
      <CategoryNavigation
        categories={CATEGORY_ARRAY}
        active={activeCategory}
        onCategoryClick={(index: number) => {
          const targetDataItem = props.store.data.find(x => x.category.index === index)

          if (targetDataItem !== undefined) {
            props.store.setStoreProps({
              ...props.store,
              cursor: targetDataItem.index
            })
          }
        }}
        onAboutClick={() => {
          const targetDataItem = props.store.data.find(x => x.custom === 'about')

          if (targetDataItem !== undefined) {
            props.store.setStoreProps({
              ...props.store,
              cursor: targetDataItem.index
            })
          }
        }}
      />
    </Swipeable>
  )
}

const Page = (props: {dataItem: TDataNode, setData: (newData: TDataNode) => void}) => {
  const {custom} = props.dataItem

  if (custom === 'life') {
    return <LifePage />
  }

  if (custom === 'about') {
    return <AboutPage />
  }
  
  return <PageWithSlider data={props.dataItem} setData={props.setData} />
}

export const PageSelector = withStore(PageSelectorComponent)