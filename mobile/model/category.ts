import { Dictionary } from './../../desktop/src/types/dictioanary';
import { nextIndexBuilder } from '../utils/next_index';

export type TSection = {
  title: string
}
export type TCategory = {
  index: number
  title: string
  iconSrc: string
  section: Dictionary<TSection>
}

const nextCategoryIndex = nextIndexBuilder()

export const CATEGORY_MAP = {
  common: {
    index: nextCategoryIndex(),
    title: 'Общая информация',
    iconSrc: '/images/icons/main.svg',
    section: {}
  },
  sorts: {
    index: nextCategoryIndex(),
    title: 'Виды',
    iconSrc: '/images/icons/sorts.svg',
    section: {
      body_type: {title: ''},
      skin_type: {title: ''},
      color: {title: ''},
    }
  },
  how_choose: {
    index: nextCategoryIndex(),
    title: 'Как выбрать',
    iconSrc: '/images/icons/how_find.svg',
    section: {}
  },
  how_care: {
    index: nextCategoryIndex(),
    title: 'Как ухаживать',
    iconSrc: '/images/icons/how_care.svg',
    section: {
      habitat: {title: ''},
      care: {title: ''},
      parenting: {title: ''},
    }
  },
  life: {
    index: nextCategoryIndex(),
    title: 'Как продлить жизнь',
    iconSrc: '/images/icons/life.svg',
    section: {}
  },
  about: {
    index: nextCategoryIndex(),
    title: '',
    iconSrc: '',
    section: {}
  }
}

export const CATEGORY_ARRAY: TCategory[] = Object.values(CATEGORY_MAP).sort((a, b) => a.index - b.index)