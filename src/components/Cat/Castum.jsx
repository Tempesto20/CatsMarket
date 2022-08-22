import React from 'react';

import '../../scss/components/cat.scss';

function Castum(props) {
    const classes = 'Castum ' + props.className;

    return (
      <div className={classes}>
        {props.children}
      </div>
    );
  }

export default Castum;