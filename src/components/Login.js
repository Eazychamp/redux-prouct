import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';


class Login extends Component {
    state = { 
        name: '',
        email:''
     }

    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    handleSubmit = (event) => {
    event.preventDefault()
    const user = {
        name : this.state.name,
        email : this.state.email
    }
    localStorage.setItem("user", JSON.stringify(user));
    // this.props.history.push("/products");
    console.log(user);
    <Redirect to="/products" />
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" required id="name" placeholder="Name" onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" required id="email" placeholder="Email" onChange={this.handleChange}/>
                    </div>
                </div>
                               
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            </React.Fragment>
        );
    }
}

export default Login;