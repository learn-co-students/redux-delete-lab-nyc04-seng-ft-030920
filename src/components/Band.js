import React, { Component } from 'react';

function Band(props) {
    return(
      <li>
        {props.band.name}
        <button onClick={() => props.delete(props.band.id)}>DELETE</button>
      </li>
    );
};

export default Band;
