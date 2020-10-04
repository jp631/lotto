import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './receipt.scss';

const Receipt = (props)=> {
   const  {isReceiptWindow, closewindow, name,
             result, game, status, ticket, seller, date} = props;

    return(
        <div className='receipt-container' style={{display: isReceiptWindow ? 'flex' : 'none'}}>
            <div className='close' onClick={closewindow}> <FontAwesomeIcon icon={faTimesCircle} /></div>
            <div className='content title'> Receipt </div>
            <div className='content'><FontAwesomeIcon icon={faSearch}/><input type='date' /></div>
            <div className='content'>Name: <span>{name}</span></div>
            <div className='content'>result: <span>{result}</span></div>
            <div className='content'>Game: <span>{game}</span></div>
            <div className='content'>status: <span>{status}</span></div>
            <div className='content'>ticket: <span>{ticket}</span></div>
            <div className='content'>Seller: <span>{seller}</span></div>
            <div className='content'>Date: <span>{date}</span></div>
        </div>
 );
}

export default Receipt;
