import {SlideType} from "../components/slided_page";

export const ROUTE_MAP = {
  common: {
    path: '/common'
  },
  how_care: {
    habitat: {
      cage: {path: '/how_care/habitat/cage'},
      inside_cage: {path: '/how_care/habitat/inside_cage'},
      toys: {path: '/how_care/habitat/toys'},
    },
    care: {
      permitted_feed: {path: '/how_care/care/permitted_feed'},
      not_permitted_feed: {path: '/how_care/care/not_permitted_feed'},
      hygiene: {path: '/how_care/care/hygiene'},
      health: {path: '/how_care/care/health'},
      entertainment: {path: '/how_care/care/entertainment'}
    },
    parenting: {
      first_step: {path: '/how_care/parenting/first_step'},
      communication: {path: '/how_care/parenting/communication'},
      training: {path: '/how_care/parenting/training'}
    }
  },
  how_choose: {
    where: {path: '/how_choose/where'},
    appearance: {path: '/how_choose/appearance'},
    sex: {path: '/how_choose/sex'},
    count: {path: '/how_choose/count'}
  },
  life: {
    path: '/life'
  },
  sorts: {
    body_type: {
      standard: {path: '/sorts/body_type/standard'},
      dambo: {path: '/sorts/body_type/dambo'},
      manks: {path: '/sorts/body_type/manks'}
    },
    skin_type: {
      standard: {path: '/sorts/skin_type/standard'},
      sphinx: {path: '/sorts/skin_type/sphinx'},
      downy: {path: '/sorts/skin_type/downy'},
      satin: {path: '/sorts/skin_type/satin'},
      rex: {path: '/sorts/skin_type/rex'}
    },
    color: {
      uniform: {path: '/sorts/color/uniform'},
      ticked: {path: '/sorts/color/ticked'},
      silver: {path: '/sorts/color/silver'},
      combined: {path: '/sorts/color/combined'},
      marked: {path: '/sorts/color/marked'},
      albinos: {path: '/sorts/color/albinos'},
    }
  }
}

export type RoutePoint = {
  path: string
}

export const routePointToSlideSectionIndex = (point: RoutePoint, slides: SlideType<any>[]) => {
  let result = -1;
  let stop = false;

  slides.forEach(slide => slide.sections.forEach(section => {
    if (!stop) {
      result++
    }

    if (section.path.path === point.path) {
      stop = true
    }
  }))
  return result
}
