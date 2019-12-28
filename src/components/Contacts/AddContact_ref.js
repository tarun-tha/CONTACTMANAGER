import React, { Component } from "react";
 class AddContact extends Component {
   constructor(props){
     super(props);

     this.nameInput=React.createRef();
     this.emailInput=React.createRef();
     this.phoneInput=React.createRef();
   }
     state ={
         name :'',
         email :'',
         phone :'',
     };
     onSubmit=e=>{e.preventDefault();
      const contact={
        name:this.nameInput.current.value,
        email:this.emailInput.current.value,
        phone:this.phoneInput.current.value
      };
    console.log(contact);
};
static defaultProps={
    name:'tarun thakur',
    email:'tarun@gmail.com',
    phone:'777-333-444'
};
    render() {
        const{name,email,phone}=this.props;
        return (
            <div className="card mb-3">
            <div className="card_header">
            AddContact
            </div>
            <div className="card-body">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor ="name">Name</label>
                        <input type="text"name="name"
                        className="form-control from-control-lg"
                        placeholder="Enter Name...."
                        defaultValue={name}
                        ref={this.nameInput}
                        />
                        </div>
                         <div className="form-group">
                        <label htmlFor ="email">Email</label>
                        <input type="email"name="email"
                        className="form-control from-control-lg"
                        placeholder="Enter Email...."
                        defaultValue={email}  
                        ref={this.emailInput}                      
                      //  onChange={this.onChange}
                        />
                        </div>
                      <div className="form-group">
                        <label htmlFor ="phone">Phone</label>
                        <input type="text"name="phone"
                        className="form-control from-control-lg"
                        placeholder="Enter Phone...."
                        defaultValue={phone}
                        ref={this.phoneInput}
                      //  onChange={this.onChange}
                        />
                    </div>
                    <input type="submit"
                    value="AddContact"
                    className="btn btn-block bt-dark"
                    />
                    </form>
                    </div>
                    </div>

        );
    }
}
export default AddContact;