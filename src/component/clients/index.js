import React, { Component } from 'react';
import Client from './client.js';
import {clients} from '../../Alldata/clients';
import Slide from 'react-reveal/Slide';
import {SearchInput} from '../../utils/utilsComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'
// import { AllClients } from '../../Alldata/dataBase';

import { clientData, lottoData } from '../../Alldata/database_request';


class DisplayClients extends Component {
    constructor(props){
        super(props)
        this.state = {
            clients: clients,
            clientData: null,
            lottoData: null,
            isReceiptWindow: false
        }
    }
    
     UNSAFE_componentWillMount(){
        this.setState({
            AllClientsTO: lottoData()
        }, ()=>{
            console.log('before loading')
            console.log(this.state.AllClientsTO)
            console.log('after loading')
        })
     }

    openwindow = ()=>{
        this.closewindow();
        if(this.state.isReceiptWindow){
            setTimeout(()=>{
                this.setState({
                    isReceiptWindow: true
                })
               }, 500)
        }else {
            this.setState({
                isReceiptWindow: true
            })
        }
    
    }

    closewindow = ()=>{
        this.setState({
            isReceiptWindow: false
          })
    }

    render(){
        const {clients} = this.state
    return (
        <div className='tableHolder'>
            <div className='table'>
                <div style={{
                    position: 'absolute',
                    top: '-4rem',
                    right: '0'

                }}>
                <SearchInput />

                </div>
                <div className='table-header-container'>
                    <div className='table-header-item'>name</div>
                    <div className='table-header-item'>plan</div>
                    <div className='table-header-item'>phone</div>
                    <div className='table-header-item'>email</div>
                </div>
                {
                  
                    clients.map((client, i) => (
                    <Slide key={client.email} right delay={100 * i}>
                        <Client 
                        name={client.name}
                        plan={client.plan}
                        phone={client.phone}
                        email={client.email}
                        lotto={client.lotto}
                    closewindow = {this.closewindow}
                    openwindow = {this.openwindow }
                    isReceiptWindow = {this.state.isReceiptWindow}
                        />
                        </Slide>
                    ))
                }
            </div>
                <div className='switchClient'>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} className='icon' style={{margin: 'auto 2rem'}}/>
                    <FontAwesomeIcon icon={faAngleDoubleRight} className='icon' style={{margin: 'auto 2rem'}}/>

                </div>
                {
                      console.log('see client')
                }
                {
                    console.log( this.state.AllClientsTO)
                }
        </div>
    );
    }
};

export default DisplayClients;

// name: 'Deal boul',
// plan: 'gold',
// email: 'examaple@gmail.com',
// phone: '423-434-3434',
// shopKey: "1212-1212-d2d-232dds-32ffdf",
// password: 'hash',
// lotto: [{
//     contact: "",
//     date: "2020-09-27T01:11:13.000Z",
//     epoch: "1601169073177",
//     game: "Georgia Lotto",
//     seller: "",
//     status: "pending",
//     ticket: "1BsIy53CXk",
//     value: "0  4  4  5  8",
// },