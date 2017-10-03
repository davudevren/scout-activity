import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    const position = [47.38194, 8.59897];
    return (
      <div className="App">
        <Map center={position} zoom={13} style={{height: "100vh"}}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              <span>Da fangt d&#39;Üebig ahh.</span>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default App;
