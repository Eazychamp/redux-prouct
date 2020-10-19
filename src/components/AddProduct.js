import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddProduct extends Component {
    state = { 
        name: '',
        price:'',
        quantity:'',
        image:'',
        description:''
     }

    handleChange = (event) => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }
    
    
  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      }, () => console.log(this.state.image));
    }
  };


    handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            id:  new Date().getTime(),
            name: this.state.name,
            price: this.state.price,
            quantity: this.state.quantity,
            image: this.state.image,
            description: this.state.description,
        }
        this.props.dispatch({
            type: 'ADD_PRODUCT',
            data
        })
        console.log("haha")
        this.props.toggleModal()
    }


    render() {
        return (
            <React.Fragment>
            <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="name">Name</label>
                    <input type="name" className="form-control" required id="name" placeholder="Name" onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="price">Price</label>
                    <input type="price" className="form-control" required id="price" placeholder="Price" onChange={this.handleChange}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="quantity" className="form-control" required id="quantity" placeholder="Quantity" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="image">Image</label>
                    <input type="file" className="form-control" id="image" placeholder="Image" onChange={this.onImageChange}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" placeholder="Description" onChange={this.handleChange}/>
                </div>                
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
            </React.Fragment>
        );
    }
}

export default connect()(AddProduct);