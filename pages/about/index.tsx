import React from "react";
const css = require('./index.module.css');

const AboutPage = () => (
  <div className={css.root}>
    <h1 className={css.title}>Хвостатый остров</h1>
    <div className={css.content}>
      <div className={css.left}>
        <h2 className={css.subtitle}>О проекте</h2>
        <p className={css.description}>Данный ресурс посвящен хвостатым комочкам счастья. Lля людей желающих завести декоративную крысу, но не знающих с чего начать.</p>
        <p className={css.description}>Он является не комерческим и все материалы доступны для свободного использования. С сохранением авторского права в виде ссылки на данный ресурс. В том числе и исходный код - доступный на github.</p>
        <p className={css.description}>Авторское право защищено по свободно распространяемой лицензии MIT.</p>
      </div>
      <div className={css.right}>
        <h2 className={css.subtitle}>Контакты</h2>
        <dl className={css.contacts}>
          <dt>Разработка:</dt>
          <dd><a className={css.link} href="mailto:lonelygriffin@gmail.com">LonelyGriffin</a></dd>
          <dt>Дизайн:</dt>
          <dd><a className={css.link} href="mailto:kateartprint@gmail.com">Kateartprint</a></dd>
          <dt>Исходный код:</dt>
          <dd><a className={css.link} href="https://github.com/LonelyGriffin/rat-spa">Github</a></dd>
          <dt>По всем вопросам обращаться по почте:</dt>
          <dd><a className={css.link} href="mailto:lonelygriffin@gmail.com">lonelygriffin@gmail.com</a></dd>
        </dl>
      </div>
    </div>

  </div>
);

export default AboutPage
