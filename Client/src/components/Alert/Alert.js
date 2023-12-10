import React, { useState, useEffect } from 'react';
import './Alert.scss';
import check from '../../assets/checked.png';
import error from '../../assets/error.png';

function Alert(props) {
    const [tag, setTag] = useState(false);

    useEffect(() => {
        if (props.alert && props.alert.type === "danger") {
            setTag(true);
        } else {
            setTag(false);
        }
    }, [props.alert]);

    const capitalize = (word) => {
        if (word === "danger") {
            word = "error";
                 }
        const lower = word.toLowerCase();
      
        return lower.charAt(0).toUpperCase() + lower.slice(1);
        
    };


    return (
        <div className='main-alrt'>
            {props.alert && (
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show ${tag ? 'red' : 'green'}`} role="alert">
                    <img src={tag ? error : check} alt="" />
                    <div className='text'><strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}</div>
                </div>
            )}
        </div>
    );
}

export default Alert;
