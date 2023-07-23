import { GoogleMap, Marker } from "react-google-maps"

const Googlemap = (props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.coords}
  >
    {props.isMarkerShown && <Marker position={props.coords} />}
  </GoogleMap>

  export default Googlemap