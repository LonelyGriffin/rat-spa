import * as React from "react";
import {NavContextConsumer} from "../../src/lib/nav_context";
import {useRouter} from "next/router";
import {SLIDES} from "../../src/screens/common/resources";
import {CommonScreen} from "../../src/screens/common";

var isNode = new Function("try {return this===global;}catch(e){return false;}");

const Component  = () => {
  const route = useRouter()

  if (isNode) {
    return <CommonScreen initialIndex={0}/>
  }

  return (
    <NavContextConsumer>
      {({fromNextScreen}) => {
        if (fromNextScreen) {
          const lastSlide = SLIDES[SLIDES.length - 1]
          route.push(lastSlide.sections[lastSlide.sections.length - 1].path.path)
        } else {
          route.push(SLIDES[0].sections[0].path.path)
        }

        return null
      }}
    </NavContextConsumer>
  )
}

export default Component
