import React from "react";

const css = require('./index.module.css');

const AboutPage = () => (
  <div className={css.root}>
    <h1 className={css.title}>Хвостатый остров</h1>
    <div className={css.content}>
      <div className={css.left}>
        <h2 className={css.subtitle}>О проекте</h2>
        <p className={css.description}>На этом ресурсе можно получить первое представление о декаративных крысах,
          особеностях их покупки и содержания. </p>
        <p className={css.description}>Сайт является не комерческим. Поэтому вы может свободно использовать
          представленые материалы. При сохранении ссылки на данный ресурс.</p>
      </div>
      <div className={css.right}>
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
          <dt>Контакт для любых вопросов:</dt>
          <dd>
            <a className={css.link} href="mailto:lonelygriffin@gmail.com">
              <div className={css.mail_icon}/>lonelygriffin@gmail.com
            </a>
          </dd>
        </dl>
      </div>
    </div>
  </div>
);

export default AboutPage
