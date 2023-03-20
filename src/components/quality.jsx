import React from "react";



const Quality = (props) => {
  const {color, name} = props.data

  return <span className={'m-1 badge badge-' + color}>{name}</span>
    
    
 
}

export default Quality

// <span class="badge badge-primary">Primary</span>
// <span class="badge badge-secondary">Secondary</span>
// <span class="badge badge-success">Success</span>
// <span class="badge badge-danger">Danger</span>
// <span class="badge badge-warning">Warning</span>
// <span class="badge badge-info">Info</span>
// <span class="badge badge-light">Light</span>
// <span class="badge badge-dark">Dark</span>