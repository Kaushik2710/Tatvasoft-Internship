import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

export  default  function Alerthar(props){
 
    return (
        <>
        props.alert && 
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            {props.alert.msg}
            
            {
            (props.alert.type)}
            <button type='submit' className='btn-close' data-bs-dismiss='alert' aria-label='close'></button>
        </div>
        </>
    );
}