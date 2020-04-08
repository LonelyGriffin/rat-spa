import {TDictionary} from '../types/dictionary'
export type TCategory = {
  number: number
  title: string
  iconSrc: string
}

export const CATEGORIES: TDictionary<TCategory> = {
  common: {
    number: 0,
    title: 'Общая информация',
    iconSrc: '/images/icons/main.svg',
  },
  sorts: {
    number: 1,
    title: 'Виды',
    iconSrc: '/images/icons/sorts.svg',
  },
  how_choose: {
    number: 2,
    title: 'Как выбрать',
    iconSrc: '/images/icons/how_find.svg',
  },
  how_care: {
    number: 3,
    title: 'Как ухаживать',
    iconSrc: '/images/icons/how_care.svg',
  },
  life: {
    number: 4,
    title: 'Как продлить жизнь',
    iconSrc: '/images/icons/life.svg',
  }
}