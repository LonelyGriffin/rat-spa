import {SlideType} from "../../../components/slided_page";
import {ImageDataType} from "../../../types/image_data";
import {ROUTE_MAP} from "../../../lib/route";


export const SLIDES: SlideType<ImageDataType[]>[] = [
  {
    title: 'Телосложение',
    sections: [
      {
        path: ROUTE_MAP.sorts.body_type.standard,
        subtitle: 'Стандарт',
        text: 'Основа для других типов телосложения, крыса  наиболее близкая по внешним признакам к своим диким сородичам. Взрослые самцы обычно менее энергичные, и немного полнее. Самки более стройные и эмоциональные. В длину от основания хвоста до кончика носа 20 - 25 сантиметров. Весят примерно 300 - 400 грамм и имеют прямую и плотную шерсть.',
        data: [
          {
            src: '/images/resources/sorts/body_type/standard_1.jpg',
            alt: 'Телосложение - Стандарт, первая картинка'
          },
          {
            src: '/images/resources/sorts/body_type/standard_2.jpg',
            alt: 'Телосложение - Стандарт, вторая картинка'
          },
          {
            src: '/images/resources/sorts/body_type/standard_3.jpg',
            alt: 'Телосложение - Стандарт, третья картинка'
          },
          {
            src: '/images/resources/sorts/body_type/standard_4.jpg',
            alt: 'Телосложение - Стандарт, четвертая картинка'
          }
        ]
      },
      {
        path: ROUTE_MAP.sorts.body_type.dambo,
        subtitle: 'Дамбо',
        text: 'Как следует из названия эта порода крыс названа в честь героя мультика «Дамбо». От стандартных их отличают грушевидное тело, более широкая голова с выступающим затылком, заостренная мордочка. Добавить большие ушки и получится слоненок. Поэтому ценность каждого экземпляра часто зависит от их размера - чем больше ушки тем дороже.',
        data: [
          {
            src: '/images/resources/sorts/body_type/dambo_1.jpg',
            alt: 'Телосложение - Дамбо, первая картинка'
          },
          {
            src: '/images/resources/sorts/body_type/dambo_2.jpg',
            alt: 'Телосложение - Дамбо, вторая картинка'
          },
          {
            src: '/images/resources/sorts/body_type/dambo_3.jpg',
            alt: 'Телосложение - Дамбо, третья картинка'
          }
        ]
      },
      {
        path: ROUTE_MAP.sorts.body_type.manks,
        subtitle: 'Манкс',
        text: 'У многих крысиный хвост вызывает отвращение. Манкс специально выведенная порода без хвоста. Если вы относитесь к ним то вам стоит присмотреться к этому типу. Но нужно быть осторожным - при покупке можно получит не настоящего манкса, а стандартную купированную крысу. К сожалению хвост для крыс это естественный балансир и терморегулятор. В результате чего все манксы по определению инвалиды - у них страдает выделительная системма, опорнодвигательный апарат. Многие любители крыс против их разведения.',
        data: [
          {
            src: '/images/resources/sorts/body_type/manx_1.jpg',
            alt: 'Телосложение - Манкс, первая картинка'
          },
          {
            src: '/images/resources/sorts/body_type/manx_2.jpg',
            alt: 'Телосложение - Манкс, вторая картинка'
          },
          {
            src: '/images/resources/sorts/body_type/manx_3.jpg',
            alt: 'Телосложение - Манкс, третья картинка'
          }
        ]
      }
    ]
  },
  {
    title: 'Тип шерсти',
    sections: [
      {
        path: ROUTE_MAP.sorts.skin_type.standard,
        subtitle: 'Стандартные',
        text: 'У обычных крысок шерсть плотная, гладкая, мягкая приятная на ощупь. Примерно равной длины по всему телу.  Усы длинные, кошачьи. Идут рядами вдоль розового носика. Лапы, хвостик и ушки покрыты легким подшерстком. Подсвечивающим нежную, чистую кожу.',
        data: [
          {
            src: '/images/resources/sorts/skin_type/standard_1.jpg',
            alt: 'Тип шерсти - Стандартные, первая картинка'
          },
          {
            src: '/images/resources/sorts/skin_type/standard_2.jpg',
            alt: 'Тип шерсти - Стандартные, вторая картинка'
          },
          {
            src: '/images/resources/sorts/skin_type/standard_3.jpg',
            alt: 'Тип шерсти - Стандартные, третья картинка'
          },
        ]
      },
      {
        path: ROUTE_MAP.sorts.skin_type.sphinx,
        subtitle: 'Сфинксы',
        text: 'Порода выведена по аналогии с кошачьей. Они полностью лысые за исключением некоторых участков - мордочка, лапки, низ живота. В этих областях может быть легкий пушок. Кожа розовая, яркая, мягкая. Местами проявляются складки. Усы короткие, вьющиеся.',
        data: [
          {
            src: '/images/resources/sorts/skin_type/sphinx_1.jpg',
            alt: 'Тип шерсти - Сфинксы, первая картинка'
          },
          {
            src: '/images/resources/sorts/skin_type/sphinx_2.jpg',
            alt: 'Тип шерсти - Сфинксы, вторая картинка'
          },
          {
            src: '/images/resources/sorts/skin_type/sphinx_3.jpg',
            alt: 'Тип шерсти - Сфинксы, третья картинка'
          },
        ]
      },
      {
        path: ROUTE_MAP.sorts.skin_type.downy,
        subtitle: 'Пуховые',
        text: 'У этой породы отсутствует остевой волос - внешний слой длинных, плотных волос. Оставлен только подшерсток - короткий, мягкий, бархатный. На мордочке и нижней части тела длинней и плотнее. Усики короткие, немного закрученные вниз.',
        data: [
          {
            src: '/images/resources/sorts/skin_type/downy_1.jpeg',
            alt: 'Тип шерсти - Пуховые, первая картинка'
          },
          {
            src: '/images/resources/sorts/skin_type/downy_2.jpg',
            alt: 'Тип шерсти - Пуховые, вторая картинка'
          },
          {
            src: '/images/resources/sorts/skin_type/downy_3.jpg',
            alt: 'Тип шерсти - Пуховые, третья картинка'
          },
        ]
      },
      {
        path: ROUTE_MAP.sorts.skin_type.satin,
        subtitle: 'Сатиновые',
        text: 'Сатиновые или атласные -это порода длиношерстных крыс. Их волосы несколько длиннее чем у обычных. Прямые, шелковистые. Еще одной характерной чертой является ее блеск - создается впечатление что зверек сияет.',
        data: [
          {
            src: '/images/resources/sorts/skin_type/satin_1.jpg',
            alt: 'Тип шерсти - Сатиновые, первая картинка'
          },
          {
            src: '/images/resources/sorts/skin_type/satin_2.jpg',
            alt: 'Тип шерсти - Сатиновые, вторая картинка'
          },
          {
            src: '/images/resources/sorts/skin_type/satin_3.jpg',
            alt: 'Тип шерсти - Сатиновые, третья картинка'
          },
          {
            src: '/images/resources/sorts/skin_type/satin_4.jpg',
            alt: 'Тип шерсти - Сатиновые, четвертая картинка'
          },
        ]
      },
      {
        path: ROUTE_MAP.sorts.skin_type.rex,
        subtitle: 'Рексы',
        text: 'Это разновидность кудрявых крысок. Верхний слой шерсти практически отсутствует, вместо него закручивающийся кудряшками подшерсток. У них волос плотный и густой, более матовый чем у стандартных. На ощупь грубоват, но не жесткий. Усики короткие и закрученные.',
        data: [
          {
            src: '/images/resources/sorts/skin_type/rex_1.jpg',
            alt: 'Тип шерсти - Рексы, первая картинка'
          },
          {
            src: '/images/resources/sorts/skin_type/rex_2.jpg',
            alt: 'Тип шерсти - Рексы, вторая картинка'
          },
          {
            src: '/images/resources/sorts/skin_type/rex_3.jpg',
            alt: 'Тип шерсти - Рексы, третья картинка'
          },
          {
            src: '/images/resources/sorts/skin_type/rex_4.jpg',
            alt: 'Тип шерсти - Рексы, четвертая картинка'
          },
        ]
      }
    ]
  },
  {
    title: 'Окрас',
    sections: [
      {
        path: ROUTE_MAP.sorts.color.uniform,
        subtitle: 'Однородные',
        text: 'При этом окрасе волосы имеют один тот же цвет, блеск и тон по всей длине. ',
        data: [
          {
            src: '/images/resources/sorts/color/uniform_1.jpg',
            alt: 'Окрас - Однородные, первая картинка'
          },
          {
            src: '/images/resources/sorts/color/uniform_2.jpg',
            alt: 'Окрас - Однородные, вторая картинка'
          },
          {
            src: '/images/resources/sorts/color/uniform_3.jpg',
            alt: 'Окрас - Однородные, третья картинка'
          },
          {
            src: '/images/resources/sorts/color/uniform_4.jpg',
            alt: 'Окрас - Однородные, четвертая картинка'
          },
        ]
      },
      {
        path: ROUTE_MAP.sorts.color.ticked,
        subtitle: 'Тикированные',
        text: 'Тикированые волосы имеют разный цвет на разных  участках волоска. Допускается равномерное вкрапление однотонных волосков. тикированный окрас агути - это самый естественный и природный окрас у крыс.',
        data: [
          {
            src: '/images/resources/sorts/color/ticked_1.jpg',
            alt: 'Окрас - Тикированные, первая картинка'
          },
          {
            src: '/images/resources/sorts/color/ticked_2.jpg',
            alt: 'Окрас - Тикированные, вторая картинка'
          },
          {
            src: '/images/resources/sorts/color/ticked_3.jpg',
            alt: 'Окрас - Тикированные, третья картинка'
          },
          {
            src: '/images/resources/sorts/color/ticked_4.jpg',
            alt: 'Окрас - Тикированные, четвертая картинка'
          },
          {
            src: '/images/resources/sorts/color/ticked_5.jpg',
            alt: 'Окрас - Тикированные, пятая картинка'
          },
        ]
      },
      {
        path: ROUTE_MAP.sorts.color.silver,
        subtitle: 'Серебристые',
        text: 'Серебристый окрас это дополнительный признак к другим видам окраса. Характерной чертой является сильное вкрапление серебристых волосков и волосков другого окраса. Например чередование с однородными. Серебритые волоски должны быть максимально белыми, без вкраплений, за исключением кончика. Так же серебристыми считаются когда количество белых и других волосков примерно поровну. При небольших вкраплениях или при практически полностью серебряными волосками нельзя назвать окрас серебристым.',
        data: [
          {
            src: '/images/resources/sorts/color/silver_1.jpg',
            alt: 'Окрас - Серебристые, первая картинка'
          },
          {
            src: '/images/resources/sorts/color/silver_2.jpg',
            alt: 'Окрас - Серебристые, вторая картинка'
          },
          {
            src: '/images/resources/sorts/color/silver_3.jpg',
            alt: 'Окрас - Серебристые, третья картинка'
          },
          {
            src: '/images/resources/sorts/color/silver_4.jpg',
            alt: 'Окрас - Серебристые, четвертая картинка'
          },
        ]
      },
      {
        path: ROUTE_MAP.sorts.color.combined,
        subtitle: 'Комбинированные',
        text: 'Как следует из названия этот окрас является комбинацией двух и более цветов распределенных по телу. За исключением белого цвета.',
        data: [
          {
            src: '/images/resources/sorts/color/combined_1.jpg',
            alt: 'Окрас - Комбинированные, первая картинка'
          },
          {
            src: '/images/resources/sorts/color/combined_2.jpg',
            alt: 'Окрас - Комбинированные, вторая картинка'
          },
          {
            src: '/images/resources/sorts/color/combined_3.jpg',
            alt: 'Окрас - Комбинированные, третья картинка'
          },
          {
            src: '/images/resources/sorts/color/combined_4.jpg',
            alt: 'Окрас - Комбинированные, четвертая картинка'
          },
        ]
      },
      {
        path: ROUTE_MAP.sorts.color.marked,
        subtitle: 'Маркированные',
        text: 'Макированный окрас это комбинированный, но имеющий на теле участки белого цвета. Название произошло от термина маркировка - рисунок имеющий белый и цветные участки.',
        data: [
          {
            src: '/images/resources/sorts/color/marked_1.jpg',
            alt: 'Окрас - Маркированные, первая картинка'
          },
          {
            src: '/images/resources/sorts/color/marked_2.jpg',
            alt: 'Окрас - Маркированные, вторая картинка'
          },
          {
            src: '/images/resources/sorts/color/marked_3.jpg',
            alt: 'Окрас - Маркированные, третья картинка'
          },
          {
            src: '/images/resources/sorts/color/marked_4.jpg',
            alt: 'Окрас - Маркированные, четвертая картинка'
          },
          {
            src: '/images/resources/sorts/color/marked_5.jpg',
            alt: 'Окрас - Маркированные, пятая картинка'
          },
        ]
      },
      {
        path: ROUTE_MAP.sorts.color.albinos,
        subtitle: 'Альбиносы',
        text: 'Альбиносы это яркий, кристально чистый белый окрас. Без вкраплений на протяжении всего волоска. Глаза красные, розовые. Из за специфической мутации глаз, альбиносы обычно имеют слабое зрение. Но для крысок это не критично - зрение не является их основным органом чувств.',
        data: [
          {
            src: '/images/resources/sorts/color/albinos_1.jpg',
            alt: 'Окрас - Альбиносы, первая картинка'
          },
          {
            src: '/images/resources/sorts/color/albinos_2.jpg',
            alt: 'Окрас - Альбиносы, вторая картинка'
          },
          {
            src: '/images/resources/sorts/color/albinos_3.jpg',
            alt: 'Окрас - Альбиносы, третья картинка'
          },
          {
            src: '/images/resources/sorts/color/albinos_4.jpg',
            alt: 'Окрас - Альбиносы, четвертая картинка'
          },
        ]
      }
    ]
  }
];
