import {HowChooseScreen} from "../../src/screens/how_choose";
import {ROUTE_MAP, routePointToSlideSectionIndex} from "../../src/lib/route";
import {SLIDES} from "../../src/screens/how_choose/resources";

const Component = () => <HowChooseScreen initialIndex={routePointToSlideSectionIndex(ROUTE_MAP.how_choose.appearance, SLIDES)}/>

export default Component
