import React from 'react';
import {NavHandler} from "../../nav_handler";
import css from './index.module.css';
import cn from 'classnames';

type Props = {
  onNext: () => void
  onPrev: () => void
  fromNextScreen: boolean
}

export const LifeScreen = (props: Props) => {
  return (
    <>
      <NavHandler onNext={props.onNext} onPrev={props.onPrev}/>
      <div className={css.root}>
        <h1 className={css.title}>Продление жизни</h1>
        <div className={css.content}>
          <div className={css.left}>
            <h2 className={css.subtitle_left}>Условия</h2>
            <div className={css.points}>
              <div className={css.points_inner}>
                <div className={css.point}>
                  <div className={css.point_content}>
                    <div className={cn(css.point_line, css.point_line_l, css.point_line_l_1)}/>
                    <div className={css.point_title_l}>Социум</div>
                    <div className={cn(css.point_text, css.point_text_l)}>
                      Не держать крысу в одиночестве. Одиночки живут меньше. Крысы социальные животные, также достаточный выгул и общение с человеком.
                    </div>
                  </div>
                </div>
                <div className={css.point}>
                  <div className={css.point_content}>
                    <div className={cn(css.point_line, css.point_line_l, css.point_line_l_2)}/>
                    <div className={css.point_title_l}>Клетка</div>
                    <div className={cn(css.point_text, css.point_text_l)}>
                      Клетка должна быть достаточно просторной и чистой.
                    </div>
                  </div>
                </div>
                <div className={css.point}>
                  <div className={css.point_content}>
                    <div className={cn(css.point_line, css.point_line_l, css.point_line_l_3)}/>
                    <div className={css.point_title_l}>Питание</div>
                    <div className={cn(css.point_text, css.point_text_l)}>
                      Правильное питание Не надо усердствовать во вкусняшках. Не допускать ожирения.
                    </div>
                  </div>
                </div>
                <div className={css.point}>
                  <div className={css.point_content}>
                    <div className={cn(css.point_line, css.point_line_l, css.point_line_l_2)}/>
                    <div className={css.point_title_l}>Здоровье</div>
                    <div className={cn(css.point_text, css.point_text_l)}>
                      Своевременный мониторинг состояния здоровья. Своевременное лечение.
                    </div>
                  </div>
                </div>
                <div className={css.point}>
                  <div className={css.point_content}>
                    <div className={cn(css.point_line, css.point_line_l, css.point_line_l_1)}/>
                    <div className={css.point_title_l}>Стерилизация</div>
                    <div className={cn(css.point_text, css.point_text_l)}>
                      Кастрация у мальчиков и стерилизация у девочек (если крыса не планируется под разведение) увеличивают продолжительность жизни.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={css.center}>
            <div className={css.mouse} />
          </div>
          <div className={css.right}>
            <h2 className={css.subtitle_right}>Генетика</h2>
            <div className={css.points}>
              <div className={css.points_inner}>
                <div className={css.point}>
                  <div className={css.point_content}>
                    <div className={cn(css.point_line, css.point_line_r, css.point_line_r_1)}/>
                    <div className={css.point_title_r}>Природа</div>
                    <div className={cn(css.point_text, css.point_text_r)}>
                      Продолжительность жизни крысок составляет 2 - 3 года. Это заложено их природой.
                    </div>
                  </div>
                </div>
                <div className={css.point}>
                  <div className={css.point_content}>
                    <div className={cn(css.point_line, css.point_line_r, css.point_line_r_2)}/>
                    <div className={css.point_title_r}>Долголетие</div>
                    <div className={cn(css.point_text, css.point_text_r)}>
                      Самая долгоживущая крыска достигла возраста 7 лет - это сравнимо с возрастом в 130 лет у человека.
                    </div>
                  </div>
                </div>
                <div className={css.point}>
                  <div className={css.point_content}>
                    <div className={cn(css.point_line, css.point_line_r, css.point_line_r_3)}/>
                    <div className={css.point_title_r}>Породы</div>
                    <div className={cn(css.point_text, css.point_text_r)}>
                      Сфинкс, манкс, альбинос - являются проблемными разновидностями, их продолжительность жизни в среднем на 1 - 0.5 года меньше
                    </div>
                  </div>
                </div>
                <div className={css.point}>
                  <div className={css.point_content}>
                    <div className={cn(css.point_line, css.point_line_r, css.point_line_r_2)}/>
                    <div className={css.point_title_r}>Родители</div>
                    <div className={cn(css.point_text, css.point_text_r)}>
                      Только покупка крысят у проверенных заводчиков с описанием родословной может дать какие-то гарантии, в увеличении продолжительности жизни.
                    </div>
                  </div>
                </div>
                <div className={css.point}>
                  <div className={css.point_content}>
                    <div className={cn(css.point_line, css.point_line_r, css.point_line_r_1)}/>
                    <div className={css.point_title_r}>Болезни</div>
                    <div className={cn(css.point_text, css.point_text_r)}>
                      Декоративные крысы выведенная в лабораториях разновидность поэтому они изначально носят в себе предрасположенность к каким-либо заболеваниям или патологиям.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
