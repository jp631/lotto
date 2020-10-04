import React, { Component } from 'react';
import Receipt from '../../component/receipt'
import './clients.scss';
import {getGreaterDate } from '../../utils/utilFunctions';


const Client  = (props)=> {
    const {openwindow, closewindow, isReceiptWindow,
    name, result, status, game, ticket, seller, date, 
    plan, phone, email, lotto } = props;
 
    return (
        <div className='Client-container'>
            <div className='table-item'>
                <div className='item'>{name}<span className='receipt'onClick={openwindow} >receipt</span> </div>
                <div className='item'>{plan}</div>
                <div className='item'>{phone}</div>
                <div className='item'>{email}</div>
            </div>
            {
               lotto ? 
                 lotto.filter( item => {
                     let a = new Date(item.date)
                     if(a.getMonth() > 9){
                    //     console.log(a)
                     }
                 })
                : ''
            }
            {
             console.log('item finish loading')

            }
            {/* <Receipt
                name={name}
                result={result}
                status={status}
                ticket= {ticket}
                game={game}
                seller={seller}
                date={date}
                lotto={lotto}

             closewindow={closewindow}
              isReceiptWindow = {isReceiptWindow} /> */}
        </div>
    );
};

export default Client;
