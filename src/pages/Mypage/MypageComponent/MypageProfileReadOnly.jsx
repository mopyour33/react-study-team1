import React from 'react'
import { Form,Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import translateCategoryName from '../util/translateCategoryName';

const MypageProfileReadOnly = ({item, itemValue}) => {
    return (
        <Form.Group as={Col} controlId={`formGrid_${item}`}>
            <Form.Label>{translateCategoryName(item, 'english', 'korean')}</Form.Label>
            <Form.Control type="text" value={itemValue} disabled readOnly />
        </Form.Group>
    )
}

export default MypageProfileReadOnly
