import {ImageDataType} from "../../../../types/image_data";
import mockImgSrc from "./mock.jpg";


export type SectionType = {
  subtitle?: string
  text: string
  image: ImageDataType
}

export type SlideType = {
  title: string,
  sections: SectionType[]
}

export const SLIDES: SlideType[] = [
  {
    title: 'Место',
    sections: [
      {
        text: 'Покупать хвостатых обязательно нужно в проверенных местах, в зоомагазинах или у заводчика, которые могут предоставить все документы и справки на животного. При выборе первое на что нужно обратить это место обитание крысок. Оно должно быть чистым и просторным.',
        image: { src: mockImgSrc, alt: 'alt' }
      }
    ]
  },
  {
    title: 'Внешний вид',
    sections: [
      {
        text: 'Вот на что стоит обратить внимание при осмотре крыски - мех должен быть чистым, без механических повреждений, на слизистой не должно быть никаких выделений,  анальное отверстие должно быть сухим и чистым, дыхание ровным. Не покупайте слишком сонных или перевозбужденных особей. Если одна из крысок выглядит больной то лучше отказаться от всех в клетке. ',
        image: { src: mockImgSrc, alt: 'alt' }
      }
    ]
  },
  {
    title: 'Пол',
    sections: [
      {
        text: 'По характеру самцы более спокойные. Самки более любопытные и активные. При этом самцы в детстве обычно растут медленней самок, но в конечном счете становятся крупнее. Шерсть у них более жирная и жестка. ',
        image: { src: mockImgSrc, alt: 'alt' }
      }
    ]
  },
  {
    title: 'Сколько',
    sections: [
      {
        text: 'Для начала лучше брать две однополые особи. Крыски социальные животные, поэтому одному в клетке будет очень скучно. Также хвостатые в очень раннем - уже в два месяца могут забеременеть. Поэтому нужно брать одно полые особи или сразу же кастрировать мальчика. ',
        image: { src: mockImgSrc, alt: 'alt' }
      }
    ]
  }
];