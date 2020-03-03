import {HowCareScreen} from "../../../src/screens/how_care";
import {ROUTE_MAP, routePointToSlideSectionIndex} from "../../../src/lib/route";
import {SLIDES} from "../../../src/screens/how_care/resources";

const Component = () => <HowCareScreen initialIndex={routePointToSlideSectionIndex(ROUTE_MAP.how_care.habitat.toys, SLIDES)}/>

export default Component
