import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg';
import { FiPlus, FiArrowRight} from 'react-icons/fi';
import '../styles/pages/orphanages-map.css';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Leaflet from 'leaflet';
import api from '../services/api';

const mapIcon = Leaflet.icon({
   iconUrl: mapMarkerImg,
   iconSize: [58,68],
   iconAnchor: [29,68],
   popupAnchor:[170,2]
})

interface Orphanage{
   id:number,
   latitude:number,
   longitude:number,
   name: string,
}

function OrphanagesMap(){

   const [orphanages, setOrphanages] = useState<Orphanage[]>([]);   

   useEffect(()=> {
      api.get('orphanages').then( response => {
         setOrphanages(response.data);
      })
   }, []);

   return(
      <div id='page-map'>
         <aside>
            <header>
               <img src={mapMarkerImg} alt='logomarca Happy'/>
               <h2>Escolha um orfanato no mapa</h2>
               <p>Muitas crianças estão esperando a sua visita:)</p>
            </header>
            <footer>
               <strong>Campina Grande</strong>
               <p>Paraíba</p>
            </footer>
         </aside>


         <Map center={[-7.2200984,-35.8932003]}
            zoom={15}
            style={{width: '100%', height:'100%'}}>
               <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
               {/*<TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?acces_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
               />*/}
               {orphanages.map(orphanage => {
                  return(
                     <Marker
                        icon={mapIcon}
                        position={[orphanage.latitude,orphanage.longitude]}
                        key={orphanage.id}
                     >   
                        <Popup closeButton={false} minWidth={240} maxHeight={240} className='map-popup'>
                           {orphanage.name}
                        <Link to={`/orphanages/${orphanage.id}`}>
                           <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                        </Popup>
                     </Marker>
                  )
               })}
               
         </Map>

         <Link to='/orphanages/create' className='create-orphanages'>
            <FiPlus size={32} color='#FFF'/>
         </Link>

      </div>
   );
}

export default OrphanagesMap;