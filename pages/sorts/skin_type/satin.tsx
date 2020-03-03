import {SortsScreen} from "../../../src/screens/sorts";
import {ROUTE_MAP, routePointToSlideSectionIndex} from "../../../src/lib/route";
import {SLIDES} from "../../../src/screens/sorts/resources";

const Component = () => <SortsScreen initialIndex={routePointToSlideSectionIndex(ROUTE_MAP.sorts.skin_type.satin, SLIDES)}/>

export default Component
