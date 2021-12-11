import React from 'react';

function Image(props) {
    return (
        <img src={props.name} alt="JoanH" className="img-fluid card " />
    );
};

export default Image;