import React, {Component} from 'react'
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import SessionManager from '../../components/session_manage';
import API from '../../components/api';
import * as Auth from '../../components/auth';
import Axios from 'axios';
import { trls } from '../../components/translate';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const mapStateToProps = state => ({ 
    ...state,
});

const mapDispatchToProps = (dispatch) => ({
});
class Customerform extends Component {

    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {  
        };
    }
    
    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {

    }

    creteNewTask = (newId) =>{
        this.props.createTask(newId)
    }

    getCustomer = () =>{
        this.props.onGetCustomer()
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const clientFormData = new FormData(event.target);
        const data = {};
        for (let key of clientFormData.keys()) {
            data[key] = clientFormData.get(key);
        }
        let params = {
            name: data.customername,
            city: data.customercity,
            notes: data.note,
            username: Auth.getUserName()
        }

        var headers = SessionManager.shared().getAuthorizationHeader();
        Axios.post(API.PostCustomer, params, headers)
        .then(result => {
            this.props.onHide();
            if(result.data.Success){
                Axios.get(API.GetNewestCustomer, headers)
                .then(result => {
                    if(result.data.Items[0]){
                        this.creteNewTask(result.data.Items[0].newid)
                    }
                })
            }
        });
    }

    render(){
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                backdrop= "static"
                centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {trls('Create_Customer')}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="container product-form" onSubmit = { this.handleSubmit }>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Col className="product-text">
                            <Form.Control type="text" name="customername" required placeholder={trls('CustomerName')}/>
                            <label className="placeholder-label">{trls('CustomerName')}</label>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Col className="product-text">
                            <Form.Control type="text" name="customercity" required placeholder={trls('Customer_City')}/>
                            <label className="placeholder-label">{trls('Customer_City')}</label>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Col className="product-text">
                            <Form.Control name="note" as="textarea" rows="3" value={this.state.remarktext} onChange={this.changeremark} /> 
                            <label className="placeholder-label">{trls('Note')}</label>
                        </Col>
                    </Form.Group>
                    <Form.Group style={{textAlign:"center", marginTop:"70px"}}>
                        <Button type="submit" style={{width:"100px"}}>{trls('Save')}</Button>
                    </Form.Group>
                </Form>
            </Modal.Body>
            </Modal>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Customerform);