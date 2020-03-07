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
        subtitle: 'Привет дорогой друг',
        text: 'Ты попал на сайт про крыс',
        data: {
          src: mockImgSrc,
          alt: ''
        }
      },
    ]
  },
];
