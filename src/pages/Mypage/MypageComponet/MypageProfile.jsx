import React, { useState } from 'react';
import { Button, Col, Form, Row, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MypageProfileReadOnly from './MypageProfileReadOnly';
import MypageProfileReadWrite from './MypageProfileReadWrite';
import MypageProfileRadio from './MypageProfileRadio';
import { useNavigate } from 'react-router-dom';

const MypageProfile = () => {

    const [passwdModify, setPasswdModify] = useState(false);
    const [emailModify, setEmailModify] = useState(false);
    const [cityModify, setCityModify] = useState(false);
    const [zipCodeModify, setZipCodeModify] = useState(false);
    const [addressDetailModify, setAddressDetailModify] = useState(false);
    const [phoneNumberModify, setPhoneNumberModify] = useState(false);

    const mobileCompanyRadios = [
        { name: 'SK', value: '1' },
        { name: 'KT', value: '2' },
        { name: 'LG', value: '3' },
    ];

    const sexRatioValue = '1'
    //zustand로 받아야함

    const sexRadios = [
        { name: '남자', value: '1' },
        { name: '여자', value: '2' },
    ];

    const categoryCheckbox = ['정치', '경제', '사회', '스포츠', '엔터'];
    // const categoryILike = null
    // zustand로 받아야함

    const [formData, setFormData] = useState({
        ID: 'AAA',
        password: '123',
        email: '',
        city: '',
        zipCode: '',
        addressDetail: '',
        phoneNumber: '',
        mobileCompany: '1',
        sex: '1',
        id: '',
        name: '홍길동',
        birth: '911111',
        categoryILike: [],
    });

    const handleChange = (key, value) => {
        setFormData(prev => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleCheckboxChange=(category) => {
        setFormData(prev => {
            const current = prev.categoryILike;
            const updated = current.includes(category)
            ? current.filter(c => c !== category)
            : [...current, category];

            return {
                ...prev,
                categoryILike: updated,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("제출된 formdata", formData);
    }

    const navigate = useNavigate();

    // const mobileCompany = "KT"
    // const {mobileCompany} =...
    //mobileCompany는 zustand로 받아오기

    return (

        <Form className="text-start" onSubmit={handleSubmit}>
            <Row className="mb-3">
                {/* ID 읽기 가능/수정 불가 */}
                <MypageProfileReadOnly item="ID" itemValue={formData.ID}/>
                {/* PassWord 읽기 불가/수정 가능 */}
                <MypageProfileReadWrite
                    item="Password"
                    itemModify={passwdModify}
                    setItemModify={setPasswdModify}
                    itemValue={formData.password}
                    setItemValue={(val) => handleChange("password", val)} />
            </Row>
            <Row>
                {/* Email 읽기 가능/수정 가능 */}
                <MypageProfileReadWrite
                    item="Email"
                    itemModify={emailModify}
                    setItemModify={setEmailModify}
                    itemValue={formData.email}
                    setItemValue={(val) => handleChange("email", val)} />
            </Row>
            <Row>
                {/* 이름 읽기 가능/수정 불가 */}
                <MypageProfileReadOnly item="Name" itemValue={formData.name}/>
                <MypageProfileReadOnly item="Birth" itemValue={formData.birth} />
            </Row>

            <Row className="mb-3">
                {/* 도시 읽기/수정 가능 */}
                <MypageProfileReadWrite
                    item="City"
                    itemModify={cityModify}
                    setItemModify={setCityModify}
                    itemValue={formData.city}
                    setItemValue={(val) => handleChange("city", val)} />

                {/* zipcode 읽기 가능/수정 가능 */ }
                < MypageProfileReadWrite
                    item="ZipCode" 
                    itemModify={zipCodeModify} 
                    setItemModify={setZipCodeModify}
                    itemValue={formData.zipCode}
                    setItemValue={(val) => handleChange("zipcode", val)} />
            </Row>

            <Row>
                {/* AddressDetail 읽기 가능/수정 가능 */}
                <MypageProfileReadWrite 
                    item="AddressDetail" 
                    itemModify={addressDetailModify} 
                    setItemModify={setAddressDetailModify}
                    itemValue={formData.addressDetail}
                    setItemValue={(val) => handleChange("addressDetail", val)} />
            </Row>

            {/* 통신사, 내/외국인 선택 */}
            <Row>
                {/* 통신사 읽기 가능/수정 가능 */}
                <MypageProfileRadio
                    item="통신사"
                    itemValue={formData.mobileCompany}
                    setItemValue={(val) =>handleChange("mobileCompany",val)}
                    itemRadio={mobileCompanyRadios} />

                {/* 남자/여자 읽기 가능/수정 불가 */}
                <MypageProfileRadio
                    item="성별"
                    itemValue={formData.sex}
                    // setItemValue={setMobileCompanyRadioValue}
                    itemRadio={sexRadios} />

                {/* 전화번호 읽기 가능/수정 가능 */}
                <MypageProfileReadWrite item="PhoneNumber" itemModify={phoneNumberModify} setItemModify={setPhoneNumberModify} />
            </Row>
            <Row>
                <Form.Group>
                    <div key="inline-checkbox" className="mb-3">
                        {categoryCheckbox.map((category, index) => (
                            <Form.Check
                                inline
                                label={category}
                                name="group1"
                                type="checkbox"
                                id={`inline-checkbox-${index}`}
                                key={`checkbox-${index}`}
                                checked={formData.categoryILike.includes(category)}
                                onChange={()=> handleCheckboxChange(category)}                            
                            />

                        ))}
                    </div>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="위 내용대로 변경하겠습니다." />
            </Form.Group>

            <Button variant="primary" type="submit">
                수정
            </Button>
            <Button variant="danger" type="submit">
                돌아가기
            </Button>
        </Form >
    );
}

export default MypageProfile
