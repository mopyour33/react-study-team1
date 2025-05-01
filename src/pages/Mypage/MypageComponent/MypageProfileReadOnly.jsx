import React from 'react'
import { Form,Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const MypageProfileReadOnly = ({item, itemValue}) => {
    return (
        <Form.Group as={Col} controlId={`formGrid_${item}`}>
            <Form.Label>{item}</Form.Label>
            <Form.Control type="text" value={itemValue} disabled readOnly />
        </Form.Group>
    )
}

export default MypageProfileReadOnly
