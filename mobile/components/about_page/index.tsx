import React, { useRef } from "react";
import css from './index.module.css'
import { Swipeable, EventData } from 'react-swipeable'

export const AboutPage = () => {
  const isVerticalSwipeRef = useRef(false)
  const isFirstSwipeEvent = useRef(true)

  const contentSwipingHandler = (e: EventData) => {
    if(isFirstSwipeEvent.current) {
      isFirstSwipeEvent.current = false
      if (e.dir === 'Up' || e.dir === 'Down') {
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

  return (
    <Swipeable
        className={css.root}
        onSwiping={contentSwipingHandler}
        onSwiped={contentSwipedHandler}
      >
        <div className={css.scroll}>
          <h1 className={css.title}>Хвостатый остров</h1>
          <main className={css.content}>
            <section className={css.section}>
              <h2 className={css.subtitle}>О проекте</h2>
              <p className={css.description}>На этом ресурсе можно получить первое представление о декаративных крысах,
                особеностях их покупки и содержания. </p>
              <p className={css.description}>Сайт является не комерческим. Поэтому вы может свободно использовать
                представленые материалы. При сохранении ссылки на данный ресурс.</p>
            </section>
            <section className={css.section}>
              <h2 className={css.subtitle}>Контакты</h2>
              <dl className={css.contacts}>
                <dt>Разработку вел:</dt>
                <dd>
                  <a className={css.link} href="mailto:lonelygriffin@gmail.com">
                    <div className={css.mail_icon}/>LonelyGriffin
                  </a>
                </dd>
                <dt>Дизайн рисовала:</dt>
                <dd>
                  <a className={css.link} href="mailto:kateartprint@gmail.com">
                    <div className={css.mail_icon}/>Kateartprint
                  </a>
                </dd>
                <dt>Исходный код доступен здесь:</dt>
                <dd>
                  <a className={css.link} href="https://github.com/LonelyGriffin/rat-spa">
                    <div className={css.github_icon}/>
                    Github
                  </a>
                </dd>
                <dt>Контакт для любых вопросов:</dt>
                <dd>
                  <a className={css.link} href="mailto:lonelygriffin@gmail.com">
                    <div className={css.mail_icon}/>lonelygriffin@gmail.com
                  </a>
                </dd>
              </dl>
            </section>
          </main>
        </div>
      </Swipeable>
  )
}
