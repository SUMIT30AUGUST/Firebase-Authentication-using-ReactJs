import React from 'react'
import styles from "./InputControl.module.css"
function inputcontrol(props) {
  return (
    <div className={styles.container}> 
    {props.label && <label>{props.label}</label>}
    <input type="text"{...props}/>
    </div>
  );
}

export default inputcontrol;
