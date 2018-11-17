import React from 'react'

import styles from "./styles"

const Zone = (props) => {
    const zoneStyle = styles.zone;
    const zipCode = props.laZone.zipCodes[0]
  return (
    <div style={zoneStyle.container}>
       <h3 style={zoneStyle.header} >
            <a style={zoneStyle.title} href="#">{props.laZone.name}</a>
        </h3>
       <span className="detail">zip Code: {zipCode}</span><br/> 
        <span className="cdetail"> {props.laZone.nbComments} comments</span>
     </div>
  )
}



export default Zone
