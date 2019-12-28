import React, { Component } from "react";
import axios from 'axios';
const Context=React.createContext();
const reducer= (state,action)=>{
    switch(action.type){
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts:state.contacts.filter(
                    contact => contact.id!==action.payload
                    )
            };
            case 'ADD_CONTACT':
            return{
                ...state,
                contacts:[action.payload,...state.contacts]
                    
            };
            case "UPDATE_CONTACT":
                return{
                    ...state,
                    contacts: state.contacts.map(contact=>
                        contact.id === action.payload.id? (contact = action.payload)
                        : contact
                    )
                };
            default:
                return state;
    }
};
export class Provider extends Component{
    state={
        contacts:[
         /*   {
                id:1,
                name:'tarun',
                email:'anjanneeraj@gmail.com',
                phone:'345 356 356'
            },
            { id:2,
            name:'jdwg',
            email:'dkgfjhv@gmail.com',
            phone:'654 876 764',
        },
        { id:3,
            name:'reikug',
            email:'ijhkjjhv@gmail.com',
            phone:'678 234 764',
        
         }*/
        ],
        dispatch:action=>{
            this.setState(state => reducer(state,action))
        }
      };
     // componentWillUpdate(){
     //   console.log('componentWillUpdate....');
     // }
      /*componentDidUpdate(){
        console.log('componentDidUpdate....');
      }*/
    async componentDidMount(){
       const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({contacts:res.data});
      }
render(){
    return(
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
     );
  }
}
export const Consumer=Context.Consumer;