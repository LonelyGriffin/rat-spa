import { nextIndexBuilder } from '../utils/next_index';
import { TImage } from '../types/image';
import { TCategory, CATEGORY_MAP, TSection } from './category';
import { StoreContextProps } from './store_context';

const nextNodeIndex = nextIndexBuilder()

export type TDataNode = {
  index: number
  category: TCategory
  section?: TSection
  title?: string
  text?: string
  images?: TImage[]
  imagesCursor?: number
  custom?: 'about' | 'life'
  paths: string[]
}

export const DATA_TREE = {
  common: {
    index: nextNodeIndex(),
    category: CATEGORY_MAP.common,
    title: 'Интересуешься крысками?',
    text: 'Здесь нужное тебе место. Ты узнаешь какие бывают виды крыс. На что нужно обратить внимание при покупке. Как ухаживать за ними. И что делать для продления жизни хвостатого комочка счастья.',
    images: [{
      src: '/images/resources/common.svg',
      alt: 'mock image'
    }]
  },
  sorts: {
    body_type: {
      standard: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.sorts,
        section: CATEGORY_MAP.sorts.section.body_type,
        title: 'Стандарт',
        text: 'Основа для других типов телосложения, крыса  наиболее близкая по внешним признакам к своим диким сородичам. Взрослые самцы обычно менее энергичные, и немного полнее. Самки более стройные и эмоциональные. В длину от основания хвоста до кончика носа 20 - 25 сантиметров. Весят примерно 300 - 400 грамм и имеют прямую и плотную шерсть.',
        images: [
          {
            src: '/images/resources/sorts/body_type/standard_1.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/body_type/standard_2.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/body_type/standard_3.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/body_type/standard_4.jpg',
            alt: ''
          }
        ]
      },
      dambo: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.sorts,
        section: CATEGORY_MAP.sorts.section.body_type,
        title: 'Дамбо',
        text: 'Как следует из названия эта порода крыс названа в честь героя мультика «Дамбо». От стандартных их отличают грушевидное тело, более широкая голова с выступающим затылком, заостренная мордочка. Добавить большие ушки и получится слоненок. Поэтому ценность каждого экземпляра часто зависит от их размера - чем больше ушки тем дороже.',
        images: [
          {
            src: '/images/resources/sorts/body_type/dambo_1.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/body_type/dambo_2.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/body_type/dambo_3.jpg',
            alt: ''
          }
        ]
      },
      manks: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.sorts,
        section: CATEGORY_MAP.sorts.section.body_type,
        title: 'Манкс',
        text: 'У многих крысиный хвост вызывает отвращение. Манкс специально выведенная порода без хвоста. Если вы относитесь к ним то вам стоит присмотреться к этому типу. Но нужно быть осторожным - при покупке можно получит не настоящего манкса, а стандартную купированную крысу. К сожалению хвост для крыс это естественный балансир и терморегулятор. В результате чего все манксы по определению инвалиды - у них страдает выделительная системма, опорнодвигательный апарат. Многие любители крыс против их разведения.',
        images: [
          {
            src: '/images/resources/sorts/body_type/manx_1.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/body_type/manx_2.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/body_type/manx_3.jpg',
            alt: ''
          }
        ]
      }
    },
    skin_type: {
      standard: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.sorts,
        section: CATEGORY_MAP.sorts.section.skin_type,
        title: 'Стандартные',
        text: 'У обычных крысок шерсть плотная, гладкая, мягкая приятная на ощупь. Примерно равной длины по всему телу.  Усы длинные, кошачьи. Идут рядами вдоль розового носика. Лапы, хвостик и ушки покрыты легким подшерстком. Подсвечивающим нежную, чистую кожу.',
        images: [
          {
            src: '/images/resources/sorts/skin_type/standard_1.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/skin_type/standard_2.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/skin_type/standard_3.jpg',
            alt: ''
          }
        ]
      },
      sphinx: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.sorts,
        section: CATEGORY_MAP.sorts.section.skin_type,
        title: 'Сфинксы',
        text: 'Порода выведена по аналогии с кошачьей. Они полностью лысые за исключением некоторых участков - мордочка, лапки, низ живота. В этих областях может быть легкий пушок. Кожа розовая, яркая, мягкая. Местами проявляются складки. Усы короткие, вьющиеся.',
        images: [
          {
            src: '/images/resources/sorts/skin_type/sphinx_1.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/skin_type/sphinx_2.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/skin_type/sphinx_3.jpg',
            alt: ''
          }
        ]
      },
      downy: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.sorts,
        section: CATEGORY_MAP.sorts.section.skin_type,
        title: 'Пуховые',
        text: 'У этой породы отсутствует остевой волос - внешний слой длинных, плотных волос. Оставлен только подшерсток - короткий, мягкий, бархатный. На мордочке и нижней части тела длинней и плотнее. Усики короткие, немного закрученные вниз.',
        images: [
          {
            src: '/images/resources/sorts/skin_type/downy_1.jpeg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/skin_type/downy_2.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/skin_type/downy_3.jpg',
            alt: ''
          }
        ]
      },
      satin: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.sorts,
        section: CATEGORY_MAP.sorts.section.skin_type,
        title: 'Сатиновые',
        text: 'Сатиновые или атласные -это порода длиношерстных крыс. Их волосы несколько длиннее чем у обычных. Прямые, шелковистые. Еще одной характерной чертой является ее блеск - создается впечатление что зверек сияет.',
        images: [
          {
            src: '/images/resources/sorts/skin_type/satin_1.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/skin_type/satin_2.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/skin_type/satin_3.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/skin_type/satin_4.jpg',
            alt: ''
          }
        ]
      },
      rex: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.sorts,
        section: CATEGORY_MAP.sorts.section.skin_type,
        title: 'Рексы',
        text: 'Это разновидность кудрявых крысок. Верхний слой шерсти практически отсутствует, вместо него закручивающийся кудряшками подшерсток. У них волос плотный и густой, более матовый чем у стандартных. На ощупь грубоват, но не жесткий. Усики короткие и закрученные.',
        images: [
          {
            src: '/images/resources/sorts/skin_type/rex_1.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/skin_type/rex_2.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/skin_type/rex_3.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/skin_type/rex_4.jpg',
            alt: ''
          }
        ]
      }
    },
    color: {
      uniform: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.sorts,
        section: CATEGORY_MAP.sorts.section.color,
        title: 'Однородные',
        text: 'При этом окрасе волосы имеют один тот же цвет, блеск и тон по всей длине. ',
        images: [
          {
            src: '/images/resources/sorts/color/uniform_1.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/uniform_2.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/uniform_3.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/uniform_4.jpg',
            alt: ''
          }
        ]
      },
      ticked: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.sorts,
        section: CATEGORY_MAP.sorts.section.color,
        title: 'Тикированные',
        text: 'Тикированые волосы имеют разный цвет на разных  участках волоска. Допускается равномерное вкрапление однотонных волосков. тикированный окрас агути - это самый естественный и природный окрас у крыс.',
        images: [
          {
            src: '/images/resources/sorts/color/ticked_1.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/ticked_2.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/ticked_3.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/ticked_4.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/ticked_5.jpg',
            alt: ''
          }
        ]
      },
      silver: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.sorts,
        section: CATEGORY_MAP.sorts.section.color,
        title: 'Серебристые',
        text: 'Серебристый окрас это дополнительный признак к другим видам окраса. Характерной чертой является сильное вкрапление серебристых волосков и волосков другого окраса. Например чередование с однородными. Серебритые волоски должны быть максимально белыми, без вкраплений, за исключением кончика. Так же серебристыми считаются когда количество белых и других волосков примерно поровну. При небольших вкраплениях или при практически полностью серебряными волосками нельзя назвать окрас серебристым.',
        images: [
          {
            src: '/images/resources/sorts/color/silver_1.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/silver_2.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/silver_3.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/silver_4.jpg',
            alt: ''
          }
        ]
      },
      combined: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.sorts,
        section: CATEGORY_MAP.sorts.section.color,
        title: 'Комбинированные',
        text: 'Как следует из названия этот окрас является комбинацией двух и более цветов распределенных по телу. За исключением белого цвета.',
        images: [
          {
            src: '/images/resources/sorts/color/combined_1.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/combined_2.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/combined_3.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/combined_4.jpg',
            alt: ''
          }
        ]
      },
      marked: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.sorts,
        section: CATEGORY_MAP.sorts.section.color,
        title: 'Маркированные',
        text: 'Макированный окрас это комбинированный, но имеющий на теле участки белого цвета. Название произошло от термина маркировка - рисунок имеющий белый и цветные участки.',
        images: [
          {
            src: '/images/resources/sorts/color/marked_1.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/marked_2.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/marked_3.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/marked_4.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/marked_5.jpg',
            alt: ''
          }
        ]
      },
      albinos: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.sorts,
        section: CATEGORY_MAP.sorts.section.color,
        title: 'Альбиносы',
        text: 'Альбиносы это яркий, кристально чистый белый окрас. Без вкраплений на протяжении всего волоска. Глаза красные, розовые. Из за специфической мутации глаз, альбиносы обычно имеют слабое зрение. Но для крысок это не критично - зрение не является их основным органом чувств.',
        images: [
          {
            src: '/images/resources/sorts/color/albinos_1.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/albinos_2.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/albinos_3.jpg',
            alt: ''
          },
          {
            src: '/images/resources/sorts/color/albinos_4.jpg',
            alt: ''
          }
        ]
      }
    }
  },
  how_choose: {
    where: {
      index: nextNodeIndex(),
      category: CATEGORY_MAP.how_choose,
      title: 'Где купить?',
      text: 'Покупать хвостатых обязательно нужно в проверенных местах, в зоомагазинах или у заводчика, которые могут предоставить все документы и справки на животного. При выборе первое на что нужно обратить это место обитание крысок. Оно должно быть чистым и просторным.',
      images: [{ src: '/images/resources/how_choose/where.png', alt: '' }]
    },
    appearance: {
      index: nextNodeIndex(),
      category: CATEGORY_MAP.how_choose,
      title: 'На что обратить внимание?',
      text: 'Вот на что стоит обратить внимание при осмотре крыски - мех должен быть чистым, без механических повреждений, на слизистой не должно быть никаких выделений,  анальное отверстие должно быть сухим и чистым, дыхание ровным. Не покупайте слишком сонных или перевозбужденных особей. Если одна из крысок выглядит больной то лучше отказаться от всех в клетке. ',
      images: [{ src: '/images/resources/how_choose/appearance.png', alt: '' }]
    },
    sex: {
      index: nextNodeIndex(),
      category: CATEGORY_MAP.how_choose,
      title: 'Мальчик или девочка?',
      text: 'По характеру самцы более спокойные. Самки более любопытные и активные. При этом самцы в детстве обычно растут медленней самок, но в конечном счете становятся крупнее. Шерсть у них более жирная и жестка. ',
      images: [{ src: '/images/resources/how_choose/sex.png', alt: '' }]
    },
    count: {
      index: nextNodeIndex(),
      category: CATEGORY_MAP.how_choose,
      title: 'Сколько',
      text: 'Для начала лучше брать две однополые особи. Крыски социальные животные, поэтому одному в клетке будет очень скучно. Также хвостатые в очень раннем - уже в два месяца могут забеременеть. Поэтому нужно брать одно полые особи или сразу же кастрировать мальчика. ',
      images: [{ src: '/images/resources/how_choose/count.png', alt: '' }]
    }
  },
  how_care: {
    habitat: {
      cage: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.how_care,
        section: CATEGORY_MAP.how_care.section.habitat,
        title: 'Клетка',
        text: 'Клетка должна обязательно быть из металла покрытого эмалью. Крыски довольно подвижные и любят пространство. В небольших замкнутых клетках им “душно”.Поэтому для одной двух взрослых крысок по высоте клетка должна быть быть не менее 50 сантиметров и в основании не менее 2500 квадратных сантиметров. Это например клетка 40х60х60 см. Расстояние между прутьями решетки должно быть не более 12 мм. Иначе есть риск что крыски сбегут. Дно должно быть максимально гладким. Выполнено в виде фальшдна или глубокого поддона из твердого пластика.',
        images: [
          {
            src: '/images/resources/how_care/cage.png',
            alt: ''
          }
        ]
      },
      inside_cage: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.how_care,
        section: CATEGORY_MAP.how_care.section.habitat,
        title: 'Внутри клетки',
        text: 'Пространство внутри клетки лучше делить на зоны, места. Обязательно должны быть домики или другое укромное место где крыски смогут спрятаться и поспать. Их расположение и конфигурация не должны меняться -  тогда там они будут чувствовать себя в безопасности. Отдельно стоит выделить место для кормления - с поилкой и миской. Поилку нужна нипельная или шариковая. В миске вода постоянно будет засоряться. А вот место для туалета выделять бессмысленно. Крысы метят всю територию которую считают своей и к лотку их приучить крайне трудно. Поэтому все дно клетки посыпают специальным наполнителем. Так же крыски будут рады отдельной игровой зоне.',
        images: [
          {
            src: '/images/resources/how_care/in_cage.png',
            alt: ''
          }
        ]
      },
      toys: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.how_care,
        section: CATEGORY_MAP.how_care.section.habitat,
        title: 'Игрушки',
        text: 'Полочки, лесенки, гамаки, канатики, туннели, качели, мячики, домики - игровую зону можно оборудовать на свой вкус. Стоит отметить что колесо для хомяков совершенно не подходит для крыс - из за длинного скелета и хвоста постоянный изгиб наружу вреден. Да и мало каким крыскам интересно бегать на месте. Также нужно помнить что все игрушки, все до чего может дотянуться крыса обязательно будет попробованно на зуб. Поэтому все должно быть твердым, не токсичным.',
        images: [
          {
            src: '/images/resources/how_care/toys.png',
            alt: ''
          }
        ]
      }
    },
    care: {
      permitted_feed: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.how_care,
        section: CATEGORY_MAP.how_care.section.care,
        title: 'Чем можно кормить',
        text: 'Рацион крысок можно разделить на три составляющие - основа, прикорм и лакомство. Основой должны стать специальный крысиный корм из зоомагазина или самодельные зерновые смеси. Прикорм - овощи, отварное нежирное мясо, кисломолочные продукты без добавок. Обязательно должны быть твердые продукты - например морковь. О них крыски точат свои постоянно растущие зубы. Как альтернатива можно купить специальный камень в зоомагазине.  Крыскам склонным к полноте нужно ограничивать количества корма, давая его более дробно. Однако крысят до полугода ограничивать в еде категорически запрещено.',
        images: [{
          src: '/images/resources/how_care/permitted_feed.png',
          alt: ''
        }]
      },
      not_permitted_feed: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.how_care,
        section: CATEGORY_MAP.how_care.section.care,
        title: 'Чем нельзя кормить',
        text: 'Сладкое, соленое, перченое, жареное, копченое, жирное, высоко калорийное для крысок категорически запрещено. С осторожностью стоит давать то что может вызвать газообразование - бобы, фасоль, горох, редис, редька, репа, картофель, молоко. Избыток фруктов и овощей может вызвать у животного диарею.',
        images: [{
          src: '/images/resources/how_care/not_permitted_feed.png',
          alt: ''
        }]
      },
      hygiene: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.how_care,
        section: CATEGORY_MAP.how_care.section.care,
        title: 'Гигиена',
        text: 'В целом крыски чистоплотные животные. Уход за ними достаточно простой и легкий. Нужно поддерживать в чистоте клетку, периодически мыть крысок и подстригать им ноготки. Менять наполнитель в клетке следует по мере его загрязнения, обычно каждые четыре пять дней. Раз две три недели стоит делать влажную уборку во всей клетке. Главое помнить что крыски не переносят запах химии. Мыть клетку и купать лучше простой водой.',
        images: [{ src: '/images/resources/how_care/hygiene.png', alt: '' }]
      },
      health: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.how_care,
        section: CATEGORY_MAP.how_care.section.care,
        title: 'Здоровье',
        text: 'Декоративные крысы имеют довольно слабое здоровье. И при пренебрежительном отношении легко заболевают. Их нужно беречь от сквозняков, особенно молодых, до полугода, крысят. Давать им правильное питание, от запрещенных продуктов уони моментально получают расстройство пищеварения. Поддерживать гигиену. Здоровая крыса любознательна, подвижна, имеет хороший аппетит. Если крыска постоянно вялая, сонливая, чихает или наоборот чересчур активна, агрессивна - то нужно обратить внимание на ее здоровье.',
        images: [{ src: '/images/resources/how_care/health.png', alt: '' }]
      },
      entertainment: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.how_care,
        section: CATEGORY_MAP.how_care.section.care,
        title: 'Развлечения',
        text: 'Крыски это очень любознательные животные. А также социальные. Это сочетание приводит к интересному эффекту. Они любят лазить по хозяину. Обнюхивая и осматривая каждый сантиметр. Здоровая физически и эмоционально крыса никогда не укусит человека. А вот выпускать их в квартиру и тем более на улицу категорически запрещено. Если вы не хотите чтобы она перегрызла проводку (а она обязательно перегрызет), простудилась или подцепила паразитов. Ее можно выпустить на диван или на стол, предварительно накрыв ненужным покрывалом, раскидав игрушки и вкусняшки. Главное за ней следить и быть уверенным что она не убежит и не попробует на зуб что то вредное.',
        images: [{ src: '/images/resources/how_care/entertainment.png', alt: '' }]
      }
    },
    parenting: {
      first_step: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.how_care,
        section: CATEGORY_MAP.how_care.section.parenting,
        title: 'Первые шаги',
        text: 'Вот в вашем доме появились крыски. Вы обустроили клетку, насыпали наполнитель, положили мику с едой и поилку со свежей водой. Первое время, день два крысок не трогать - они должны привыкнуть к новому месту, освоиться и перестать боятся. Когда крыски начнут проявлять активное любопытство. Перестанут сразу убегать при вашем появлении можно дать ей лакомство с рук. Так она будет привыкать к вам и вашему запаху. Через несколько дней, когда она привыкнет, можно попробовать взять ее на руки - протяните ладонь и задержите. Пусть крыска обнюхает ее и осторожно заберется сама. Крыска может попробовать ваш палец на зуб, но делают они это мягко, осторожно. Не кусая, а только легонько дотрагиваясь.',
        images: [{ src: '/images/resources/how_care/first_step.png', alt: '' }]
      },
      communication: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.how_care,
        section: CATEGORY_MAP.how_care.section.parenting,
        title: 'Общение',
        text: 'Крысы очень ласковые и общительные существа. Они очень легко приучаются откликаться на свое имя. Очень тактильные -любят бегать по плечам и рукам хозяина, устраиваться в складках одежды, в карманах и даже за пазухой. Они хорошо различают, не только свои, но и имена членов семьи. Отлично понимают интонацию. Любят почесушки и игры с “дразнилками”, подобно кошкам.',
        images: [{ src: '/images/resources/how_care/communication.png', alt: '' }]
      },
      training: {
        index: nextNodeIndex(),
        category: CATEGORY_MAP.how_care,
        section: CATEGORY_MAP.how_care.section.parenting,
        title: 'Обучение',
        text: 'Дрессировка крыс очень простое и увлекательное занятие. Во многом крыски по интеллекту не уступают собакам. Конечно у вас не получится научить их приносить тапочки или выполнять команду “сидеть”. А различным цирковым трюкам они учатся легко. Сделать кувырок, пробежать по канатику, забраться по лесенке и потом затащить ее на верх. Все это крыски научатся за вкусное лакомство и теплые слова. А вот метод “кнута” на них не действует. Добиться насилием вряд ли что либо получится. Еще крыски очень социальные. Если одна чему то научилась, вторую научить будет гораздо легче, они перенимает опыт друг у друга.',
        images: [{ src: '/images/resources/how_care/training.png', alt: '' }]
      }
    }
  },
  life: {
    index: nextNodeIndex(),
    custom: 'life',
    category: CATEGORY_MAP.life
  },
  about: {
    index: nextNodeIndex(),
    custom: 'about',
    category: CATEGORY_MAP.about
  },
}

export const DATA_ARRAY = (() => {
  const result: TDataNode[] = []

  const recursive = (node: any, paths: string[]) => {
    if (typeof node.index === 'number') {
      result.push({...node, paths})
    } else {
      Object.keys(node).forEach(path => recursive(node[path], [...paths, path]))
    }
  }
  recursive(DATA_TREE, [])
  return result
})().sort((a, b) => a.index - b.index)

export type StaticProps = {
  initialStoreProps: StoreContextProps
}

export const getStaticPropsByIndex = (index: number) => async function (): Promise<{props: StaticProps}> {
  const initialStoreProps: StoreContextProps = {
    data: DATA_ARRAY,
    cursor: index
  }

  return {
    props: {
      initialStoreProps
    }
  }
}
