import React, { useRef } from 'react'
import css from './index.module.css'
import { Swipeable, EventData } from 'react-swipeable'
import cn from 'classnames'
import { useState } from 'react';
import { Up, Down } from '../../utils/swipe_orientaition';


export const LifePage = () => {
  const [active, setActive] = useState(0)
  const isVerticalSwipeRef = useRef(false)
  const isFirstSwipeEvent = useRef(true)
  const geneticAnchorRef = useRef<HTMLAnchorElement>(null)

  const contentSwipingHandler = (e: EventData) => {
    if(isFirstSwipeEvent.current) {
      isFirstSwipeEvent.current = false
      if (e.dir === Up() || e.dir === Down()) {
        isVerticalSwipeRef.current = true
      }
    }

    if (isVerticalSwipeRef.current) {
      e.event.stopPropagation()
    }
  }
  const contentSwipedHandler = (e: EventData) => {
    if (isVerticalSwipeRef.current) {
      e.event.stopPropagation()
    }

    isFirstSwipeEvent.current = true
    isVerticalSwipeRef.current = false
  }

  const handleScroll = () => {
    const geneticAnchorElement = geneticAnchorRef.current

    if (!geneticAnchorElement) {
      return
    }

    const actualActive = geneticAnchorElement.getBoundingClientRect().y > 100 ? 0 : 1

    if (active !== actualActive) {
      setActive(actualActive)
    }
  }

  return (
    <Swipeable
      className={css.root}
      onSwiping={contentSwipingHandler}
      onSwiped={contentSwipedHandler}
    >
      <div className={css.scroll}  onScroll={handleScroll}>
        <div className={css.body}>
          <header className={css.header}>
            <h1 className={css.title}>Продление жизни</h1>
            <div className={css.headerImg}/>
            <nav className={css.headerNav}>
              <ul className={css.headerNavList}>
                <li className={css.headerNavItem}>
                  <a href={'#environment'} className={cn(css.headerNavLink, css.headerNavLinkLeaf, active === 0 && css.headerNavLinkActive)}>Условия</a>
                </li>
                <li className={css.headerNavItem}>
                  <a href={'#genetics'} className={cn(css.headerNavLink, css.headerNavLinkGen, active === 1 && css.headerNavLinkActive)}>Генетика</a>
                </li>
              </ul>
            </nav>
          </header>
          <main className={css.main}>
            <article className={css.article}>
              <a className={css.anchor} id="environment"></a>
              <h3 className={css.articleTitle}>Социум</h3>
              <p className={css.articleText}>
                Не держать крысу в одиночестве. Одиночки живут меньше. Крысы социальные животные, также достаточный выгул и общение с человеком.
              </p>
            </article>
            <article className={css.article}>
              <h3 className={css.articleTitle}>Клетка</h3>
              <p className={css.articleText}>
                Клетка должна быть достаточно просторной и чистой.
              </p>
            </article>
            <article className={css.article}>
              <h3 className={css.articleTitle}>Питание</h3>
              <p className={css.articleText}>
                Правильное питание Не надо усердствовать во вкусняшках. Не допускать ожирения.
              </p>
            </article>
            <article className={css.article}>
              <h3 className={css.articleTitle}>Здоровье</h3>
              <p className={css.articleText}>
                Своевременный мониторинг состояния здоровья. Своевременное лечение.
              </p>
            </article>
            <article className={css.article}>
              <h3 className={css.articleTitle}>Стерилизация</h3>
              <p className={css.articleText}>
                Кастрация у мальчиков и стерилизация у девочек (если крыса не планируется под разведение) увеличивают продолжительность жизни.
              </p>
            </article>
            
            <article className={css.article}>
              <a ref={geneticAnchorRef} className={css.anchor} id="genetics"></a>
              <h3 className={css.articleTitle}>Природа</h3>
              <p className={css.articleText}>
                Продолжительность жизни крысок составляет 2 - 3 года. Это заложено их природой.
              </p>
            </article>
            <article className={css.article}>
              <h3 className={css.articleTitle}>Долголетие</h3>
              <p className={css.articleText}>
                Самая долгоживущая крыска достигла возраста 7 лет - это сравнимо с возрастом в 130 лет у человека.
              </p>
            </article>
            <article className={css.article}>
              <h3 className={css.articleTitle}>Породы</h3>
              <p className={css.articleText}>
                Сфинкс, манкс, альбинос - являются проблемными разновидностями, их продолжительность жизни в среднем на 1 - 0.5 года меньше
              </p>
            </article>
            <article className={css.article}>
              <h3 className={css.articleTitle}>Родители</h3>
              <p className={css.articleText}>
                Только покупка крысят у проверенных заводчиков с описанием родословной может дать какие-то гарантии, в увеличении продолжительности жизни.
              </p>
            </article>
            <article className={css.article}>
              <h3 className={css.articleTitle}>Болезни</h3>
              <p className={css.articleText}>
                Декоративные крысы выведенная в лабораториях разновидность поэтому они изначально носят в себе предрасположенность к каким-либо заболеваниям или патологиям.
              </p>
            </article>
          </main>
          <div className={css.navClearFix}/>
        </div>
      </div>
    </Swipeable>
  )
}