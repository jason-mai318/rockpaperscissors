import React from 'react';

const PlayerCard = (props) => {
    var sign = props.sign
    return(
        <div className = "playercd">{sign}</div>
    )
}
export default PlayerCard;