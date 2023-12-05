import { Loader } from "@googlemaps/js-api-loader"
import React from "react"

type MapProps = {
  origin: {
    lat: number
    lng: number
  }

  destination: {
    lat: number
    lng: number
  }
}

const Map: React.FC<MapProps> = ({ origin, destination }) => {
  const mapRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: "AIzaSyCn_wshzahv0Ta84NiC3qrxeAnJL8U3p70",
        version: "weekly",
      })

      const { Map } = await loader.importLibrary("maps")
      const { Marker } = await loader.importLibrary("marker")

      const center_lat = (origin.lat + destination.lat) / 2
      const center_lng = (origin.lng + destination.lng) / 2

      const map = new Map(mapRef.current || document.createElement("div"), {
        center: { lat: center_lat, lng: center_lng },
        zoom: 8,
      })

      new Marker({
        position: origin,
        map,
        title: "Origin",
      })

      new Marker({
        position: destination,
        map,
        title: "Destination",
      })
    }
    
    if(mapRef.current)
      initMap()
  }, [origin, destination])

  return <div ref={mapRef} style={{ height: "100%", width: "100%" }} />
}

export default Map
