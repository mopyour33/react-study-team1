import React from 'react'
import { Button, Col, Form, Row, ButtonGroup,ToggleButton } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const MypageProfileRadio = ({item, itemValue, setItemValue, itemRadio }) => {

    const isReadOnly = typeof setItemValue !== 'function';

  return (
    <Form.Group className="mb-3" controlId={`formGrid_${item}`}>
    <Form.Label>{item}</Form.Label>
    <br />
    <ButtonGroup>
        {itemRadio.map((radio, idx) => (
            <ToggleButton
                disabled ={isReadOnly}
                key={idx}
                id={`${radio.name}-${idx}`}
                type="radio"
                variant='outline-dark'
                name={`radio-${item}`}
                value={radio.value}
                checked={itemValue === radio.value}
                onChange={(e) => setItemValue(e.currentTarget.value)}
            >
                {radio.name}
            </ToggleButton>
        ))}
    </ButtonGroup>
</Form.Group>
  )
}

export default MypageProfileRadio
