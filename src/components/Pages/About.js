import React from 'react'

export default props => {
    return (
        <div>
            <h1 className="display-4">{props.match.params.id} its is wrong in hindi bole to glt hai </h1>
            <p className="lead"> Simple app to manage contacts</p>
            <p className ="text-secondary">
                version 1.0.0
            </p>
        </div>
    );
};
