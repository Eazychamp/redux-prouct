import React, {Component} from 'react';
import { Button, Modal } from 'react-bootstrap';
import AddProduct from './AddProduct';
import { connect } from 'react-redux';

function AddProductModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-title">
            Add New Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <AddProduct toggleModal={props.onHide} />
        </Modal.Body>
      </Modal>
    );
  }
  

class Products extends Component {
    constructor(props) {
        super()
        this.state = {
            modalShow : false,
            searchText : ''
        }
    }

    toggleModal = () => {
      this.setState({
            modalShow : !this.state.modalShow
      })  
    }

    handleInput = (event) => {
      this.setState({
        searchText : event.target.value
      })
    }

    handleSearch = (event) => {
      event.preventDefault()
      const text = this.state.searchText
      this.props.dispatch({
        type: 'SEARCH',
        text
    })
    }

    render () {
    return (
      <>
        <Button variant="primary" onClick={this.toggleModal}>
          Add Product
        </Button>
        <form class="form-inline my-2 my-lg-0" onSubmit={this.handleSearch}>
          <input class="form-control mr-sm-2" type="search" placeholder="Search" onInput={this.handleInput} aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        <div class="container mt-3">
          <div class="row">                 
            {this.props.products.map((product) => (
              <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                <div class="card">
                    <img class="card-img" src={product.image} alt="image" />
                    <div class="card-img-overlay d-flex justify-content-end">
                    </div>
                    <div class="card-body">
                    <h4 class="card-title">{product.name}</h4>
                    <p class="card-text">
                        {product.description}                                
                        </p>
                    <div class="buy d-flex justify-content-between align-items-center">
                        <div class="price text-success"><h5 class="mt-4">Rs.{product.price}</h5></div>
                    </div>
                    </div>
                </div>
              </div>
                            
            ))}
          </div>              
        </div>
        <AddProductModal
          show={this.state.modalShow}
          onHide={this.toggleModal}
        />
      </>
    );
    }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    products: state
  }
}

export default connect(mapStateToProps)(Products);