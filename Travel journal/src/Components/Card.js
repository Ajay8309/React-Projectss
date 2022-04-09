import React from 'react';


export default function Card(props){
   return(
       <div className='container'>
               <img src={props.imageUrl} alt=""  className="img"/>
           <div className="card-details">
              <div className="card-location"> 
             <h4>{props.location}</h4>
             <a href={props.googleMapUrl}>view on google maps</a>
           </div> 
           <h1>{props.title}</h1>
           <h5 className='date'>{props.startDate} - {props.endDate}</h5>
           <p className='descrip'>{props.description}</p>
           </div>
       </div>
   )
}