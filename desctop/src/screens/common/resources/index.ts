const mockImgSrc =  '/images/mock.jpg';
import {SlideType} from "../../../components/slided_page";
import {ImageDataType} from "../../../types/image_data";
import {ROUTE_MAP} from "../../../lib/route";


export const SLIDES: SlideType<ImageDataType>[] = [
  {
    title: 'Rat Island',
    sections: [
      {
        path: ROUTE_MAP.common,
        subtitle: 'Интересуешься  крысками?',
        text: ` Здесь нужное тебе место. Ты узнаешь какие бывают виды крыс. На что нужно обратить внимание при покупке. Как ухаживать за ними. И что делать для продления жизни хвостатого комочка счастья.`,
        data: {
          src: mockImgSrc,
          alt: ''
        }
      },
    ]
  },
];
