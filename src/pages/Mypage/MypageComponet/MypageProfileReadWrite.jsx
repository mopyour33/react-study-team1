import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MypageProfileReadWrite = ({item, itemModify, setItemModify, itemValue, setItemValue}) => {
  return (
    <Form.Group as={Col} controlId={`formGrid_${item}`}>
    <Form.Label>{item}</Form.Label>
    {itemModify === false ?
        (<>
            <Form.Control type="text" value={itemValue} disabled={!itemModify} readOnly/>
            <Button variant="primary" onClick={() => setItemModify(true)}>수정</Button>
        </>)
        :
        (<>
            <Form.Control type="text" value={itemValue} onChange={(e)=> setItemValue(e.target.value)}/>
            <Button variant="danger" onClick={() => setItemModify(false)}>저장</Button>
        </>)
    }
</Form.Group>
  )
}

export default MypageProfileReadWrite
