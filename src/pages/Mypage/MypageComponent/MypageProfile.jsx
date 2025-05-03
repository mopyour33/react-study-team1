import React, { useState } from 'react';
import { Button, Col, Form, Row, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MypageProfileReadOnly from './MypageProfileReadOnly';
import MypageProfileReadWrite from './MypageProfileReadWrite';
import MypageProfileRadio from './MypageProfileRadio';
import { useNavigate } from 'react-router-dom';
import useUserInfo from '../../../stores/useUserInfo';
import './MypageProfile.style.css';

const MypageProfile = ({ userId, categoryCheckbox }) => {

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

    const sexRadios = [
        { name: '남자', value: '1' },
        { name: '여자', value: '2' },
    ];

    const nationalityRadios = [
        { name: '내국인', value: '1' },
        { name: '외국인', value: '2' },
    ];

    //zustand로 고객정보 받기
    const { userInfoList, updateUserInfo } = useUserInfo();

    const targetUserInfo = userInfoList.find(userInfo => userInfo.id === userId);

    const [formData, setFormData] = useState(targetUserInfo.cusInfo);

    //form text, radio값 변걍
    const handleChange = (key, value) => {
        setFormData(prev => ({
            ...prev,
            [key]: value,
        }));
    };

    //form select 값 변경
    const handleCheckboxChange = (category) => {
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
        console.log("formdata", formData);
        updateUserInfo(targetUserInfo.id, formData);

    }

    const navigate = useNavigate();

    // const mobileCompany = "KT"
    // const {mobileCompany} =...
    //mobileCompany는 zustand로 받아오기

    return (

        <Form className="text-start" onSubmit={handleSubmit}>
            <Row className="mb-3">
                {/* ID 읽기 가능/수정 불가 */}
                <MypageProfileReadOnly item="ID" itemValue={targetUserInfo.id} />
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
                <MypageProfileReadOnly item="Name" itemValue={formData.name} />
                <MypageProfileReadOnly item="Birth" itemValue={formData.birth} />
            </Row>


            <div className="city-zipcode-group">
                {/* 도시 읽기/수정 가능 */}
                <MypageProfileReadWrite
                    item="City"
                    itemModify={cityModify}
                    setItemModify={setCityModify}
                    itemValue={formData.city}
                    setItemValue={(val) => handleChange("city", val)} />

                {/* zipcode 읽기 가능/수정 가능 */}
                < MypageProfileReadWrite
                    item="ZipCode"
                    itemModify={zipCodeModify}
                    setItemModify={setZipCodeModify}
                    itemValue={formData.zipCode}
                    setItemValue={(val) => handleChange("zipCode", val)} />
            </div>

            <Row>
                {/* AddressDetail 읽기 가능/수정 가능 */}
                <MypageProfileReadWrite
                    item="AddressDetail"
                    itemModify={addressDetailModify}
                    setItemModify={setAddressDetailModify}
                    itemValue={formData.addressDetail}
                    setItemValue={(val) => handleChange("addressDetail", val)} />
            </Row>

            {/* 통신사, 남자/여자, 내/외국인 선택 */}
            <div className='phonecompany-sex-nationality-group'>
                {/* 통신사 읽기 가능/수정 가능 */}
                <MypageProfileRadio
                    item="통신사"
                    itemValue={formData.mobileCompany}
                    setItemValue={(val) => handleChange("mobileCompany", val)}
                    itemRadio={mobileCompanyRadios} />

                {/* 남자/여자 읽기 가능/수정 불가 */}
                <MypageProfileRadio
                    item="성별"
                    itemValue={formData.sex}
                    itemRadio={sexRadios} />

                {/* 내국인/외국인 읽기 가능/수정 불가 */}
                <MypageProfileRadio
                    item="국적"
                    itemValue={formData.nationality}
                    itemRadio={nationalityRadios} />
            </div>
            <Row>
                {/* 전화번호 읽기 가능/수정 가능 */}
                <MypageProfileReadWrite
                    item="전화번호"
                    itemModify={phoneNumberModify}
                    setItemModify={setPhoneNumberModify}
                    itemValue={formData.phoneNumber}
                    setItemValue={(val) => handleChange("phoneNumber", val)} />
            </Row>
            <br />
            <Row>
                <Form.Group>
                    <Form.Label>관심 카테고리</Form.Label>
                    <div key="inline-checkbox" className="mb-3">
                        {categoryCheckbox.map((category, index) => (
                            <Form.Check
                                inline
                                label={category.value}
                                name="group1"
                                type="checkbox"
                                id={`inline-checkbox-${index}`}
                                key={`checkbox-${index}`}
                                checked={formData.categoryILike.includes(category.key)}
                                onChange={() => handleCheckboxChange(category.key)}
                            />

                        ))}
                    </div>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="위 내용대로 변경하겠습니다." />
            </Form.Group>

            <Button variant="dark" type="submit">
                수정
            </Button>
            <Button variant="danger" type="button" onClick={() => navigate("/")}>
                돌아가기
            </Button>
        </Form >
    );
}

export default MypageProfile
