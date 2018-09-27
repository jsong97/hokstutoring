import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const INITIAL_CENTER = { lat: -37.868777, lng: 145.000622 };
const MARKER1_CENTER = { lat: -37.956890, lng: 145.15165 };
const MARKER2_CENTER = { lat: -37.815340, lng: 144.963230 };

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDvvvsg8kCZoDhv5DhDzoYmeQhji3PCt2Q&callback=initMap",
    loadingElement: <div style={{ height: `100%`, width: `50%` }} />,
    containerElement: <div style={{ position: `relative`, left: `10em`, height: `400px` }} />,
    mapElement: <div style={{ height: `100%`, width: `70%` }} />,
  }),
  withScriptjs,
  withGoogleMap)((props) =>
  <GoogleMap
    defaultZoom={11}
    markers={[MARKER1_CENTER, MARKER2_CENTER]}
    defaultCenter={INITIAL_CENTER}
  >
    {props.markers.map((marker, index)=> {
      return (
        <Marker
          position={marker}
          title="Click to zoom"
          onClick={props.onMarkerClick}
        />
      )
    })}
  </GoogleMap>
)


class MyMap extends React.Component {
  state = {
    isMarkerShown: false,
    markers: [[-37.956890, 145.15165], [-37.594292, 144.729111]]
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        markers={[MARKER1_CENTER, MARKER2_CENTER]}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default MyMap;
