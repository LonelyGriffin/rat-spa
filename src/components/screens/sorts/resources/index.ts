import {ImageDataType} from "../../../../types/image_data";
import img1 from './rat_1.jpg';
import img2 from './rat_2.jpg';
import img3 from './rat_3.jpg';
import img4 from './rat_4.jpg';
import img5 from './rat_5.jpg';
import img6 from './rat_6.jpg';
import img7 from './rat_7.jpg';
import img8 from './rat_8.jpg';
import img9 from './rat_9.jpg';
import img10 from './rat_10.jpg';
import img11 from './rat_11.jpg';
import img12 from './rat_12.jpg';
import img13 from './rat_13.jpg';
import img14 from './rat_14.jpg';
import img17 from './rat_17.jpg';
import img18 from './rat_18.jpg';
import img19 from './rat_19.jpg';
import img20 from './rat_20.jpg';
import img22 from './rat_22.jpg';
import img23 from './rat_23.jpg';
import img24 from './rat_24.jpg';


export type SectionType = {
  text: string
  images: ImageDataType[]
}

export type SlideType = {
  title: string,
  sections: SectionType[]
}

export const SLIDES: SlideType[] = [
  {
    title: 'Телосложение',
    sections: [
      {
        text: 'Стандартный тип является основой для всех остальных типов телосложения. Крысы должны иметь пропорциональное телосложение. Они должны быть стройными, пластичными, но при этом не выглядеть излишне хрупкими. Самки обычно энергичнее самцов и кажутся более стройными. Длина тела обычно колеблется от 20 до 25 сантиметров от носа до основания хвоста. Самцы крупнее самок.',
        images: [
          {
            src: img1,
            alt: 'alt'
          },
          {
            src: img2,
            alt: 'alt'
          },
          {
            src: img3,
            alt: 'alt'
          },
          {
            src: img4,
            alt: 'alt'
          }
        ]
      },
      {
        text: 'Rutrum quisque non tellus orci ac. Tempus egestas sed sed risus pretium quam vulputate. Volutpat est velit egestas dui. Diam quam nulla porttitor massa. Blandit massa enim nec dui nunc mattis enim ut. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Sollicitudin ac orci phasellus egestas. Sodales ut eu sem integer. Arcu odio ut sem nulla pharetra diam sit amet. Neque egestas congue quisque egestas diam. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Molestie at elementum eu facilisis sed odio.',
        images: [
          {
            src: img5,
            alt: 'alt'
          },
          {
            src: img6,
            alt: 'alt'
          },
          {
            src: img23,
            alt: 'alt'
          }
        ]
      },
      {
        text: 'Adipiscing bibendum est ultricies integer. Pulvinar neque laoreet suspendisse interdum. Aenean vel elit scelerisque mauris pellentesque. At imperdiet dui accumsan sit. Tellus elementum sagittis vitae et leo. Metus vulputate eu scelerisque felis imperdiet proin. Id interdum velit laoreet id donec ultrices tincidunt arcu. Massa tempor nec feugiat nisl pretium. Faucibus ornare suspendisse sed nisi lacus sed. A iaculis at erat pellentesque. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.',
        images: [
          {
            src: img22,
            alt: 'alt'
          },
          {
            src: img7,
            alt: 'alt'
          },
          {
            src: img5,
            alt: 'alt'
          },
        ]
      },
      {
        text: 'Стандартный тип является основой для всех остальных типов телосложения. Крысы должны иметь пропорциональное телосложение. Они должны быть стройными, пластичными, но при этом не выглядеть излишне хрупкими. Самки обычно энергичнее самцов и кажутся более стройными. Длина тела обычно колеблется от 20 до 25 сантиметров от носа до основания хвоста. Самцы крупнее самок.',
        images: [
          {
            src: img8,
            alt: 'alt'
          },
          {
            src: img17,
            alt: 'alt'
          },
          {
            src: img18,
            alt: 'alt'
          }
        ]
      }
    ]
  },
  {
    title: 'Тип шерсти',
    sections: [{
      text: 'Rutrum quisque non tellus orci ac. Tempus egestas sed sed risus pretium quam vulputate. Volutpat est velit egestas dui. Diam quam nulla porttitor massa. Blandit massa enim nec dui nunc mattis enim ut. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Sollicitudin ac orci phasellus egestas. Sodales ut eu sem integer. Arcu odio ut sem nulla pharetra diam sit amet. Neque egestas congue quisque egestas diam. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Molestie at elementum eu facilisis sed odio.',
      images: [
        {
          src: img9,
          alt: 'alt'
        },
        {
          src: img10,
          alt: 'alt'
        },
        {
          src: img11,
          alt: 'alt'
        }
      ]
    }]
  },
  {
    title: 'Окрас',
    sections: [
      {
        text: 'Adipiscing bibendum est ultricies integer. Pulvinar neque laoreet suspendisse interdum. Aenean vel elit scelerisque mauris pellentesque. At imperdiet dui accumsan sit. Tellus elementum sagittis vitae et leo. Metus vulputate eu scelerisque felis imperdiet proin. Id interdum velit laoreet id donec ultrices tincidunt arcu. Massa tempor nec feugiat nisl pretium. Faucibus ornare suspendisse sed nisi lacus sed. A iaculis at erat pellentesque. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.',
        images: [
          {
            src: img12,
            alt: 'alt'
          },
          {
            src: img13,
            alt: 'alt'
          },
          {
            src: img14,
            alt: 'alt'
          }
        ]
      },
    ]
  },
  {
    title: 'Разновидность',
    sections: [
      {
        text: 'Adipiscing bibendum est ultricies integer. Pulvinar neque laoreet suspendisse interdum. Aenean vel elit scelerisque mauris pellentesque. At imperdiet dui accumsan sit. Tellus elementum sagittis vitae et leo. Metus vulputate eu scelerisque felis imperdiet proin. Id interdum velit laoreet id donec ultrices tincidunt arcu. Massa tempor nec feugiat nisl pretium. Faucibus ornare suspendisse sed nisi lacus sed. A iaculis at erat pellentesque. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.',
        images: [
          {
            src: img17,
            alt: 'alt'
          },
          {
            src: img18,
            alt: 'alt'
          },
          {
            src: img5,
            alt: 'alt'
          }
        ]
      },
      {
        text: 'Nibh tortor id aliquet lectus proin nibh nisl condimentum. Neque laoreet suspendisse interdum consectetur libero id. Ut eu sem integer vitae justo eget magna fermentum iaculis. Nulla pellentesque dignissim enim sit amet. Odio tempor orci dapibus ultrices in iaculis nunc. Dui id ornare arcu odio ut sem nulla pharetra. Mauris nunc congue nisi vitae. Sed vulputate mi sit amet mauris commodo. Ut tellus elementum sagittis vitae et leo duis. Nisi vitae suscipit tellus mauris a diam maecenas sed enim.',
        images: [
          {
            src: img19,
            alt: 'alt'
          },
          {
            src: img20,
            alt: 'alt'
          },
          {
            src: img24,
            alt: 'alt'
          }
        ]
      },
    ]
  }
];