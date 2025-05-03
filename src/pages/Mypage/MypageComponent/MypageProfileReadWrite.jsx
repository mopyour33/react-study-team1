import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MypageProfileReadWrite = ({ item, itemModify, setItemModify, itemValue, setItemValue }) => {
  return (
    <Form.Group as={Col} controlId={`formGrid_${item}`}>
      <Form.Label>{item}</Form.Label>
      <div className="form-readwrite-row">
        <Form.Control
          type={item === "Password" ? "password" : "text"}
          value={itemValue}
          disabled={!itemModify}
          readOnly={!itemModify}
          onChange={(e) => setItemValue(e.target.value)}
          className="form-readwrite-input"
        />
        {itemModify === false ?
          (<>
            {/* <Form.Control type={item === "Password" ? "password" : "text"} value={itemValue} disabled={!itemModify} readOnly /> */}
            <Button variant="dark" onClick={() => setItemModify(true)}>수정</Button>
          </>)
          :
          (<>
            {/* <Form.Control type="text" value={itemValue} onChange={(e) => setItemValue(e.target.value)} /> */}
            <Button variant="danger" onClick={() => setItemModify(false)}>저장</Button>
          </>)
        }
        </div>
    </Form.Group>
  )
}

export default MypageProfileReadWrite