import React from 'react'

function capitalizeFirst(word) {
    return word[0].toUpperCase()+word.substr(1);
}

export default function Alert(props) {
    
    return (
        <div style={{height: "35px"}}>
        {props.alert && <div>
            <div className={`alert alert-${props.alert.type}`} role="alert">
                {capitalizeFirst(props.alert.type)}: {props.alert.message}
            </div>
        </div>}
        </div>
    )
}
