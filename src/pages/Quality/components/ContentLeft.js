import React from 'react'
import { Col } from 'antd';
import img1 from '../../../images/imgchatluongnuoc1.jpg'
import { TitleH1Text, TitleH3Text, TitleSpan, WapperTextLeft } from '../style';

export const ContentLeft = () => {
  return (
    <>
        <Col flex={3}>
            <div style={{display: 'flex'}}>
                <div style={{marginRight: '10px'}}>
                    <img style={{width: '259px', height: '200px'}} src={img1}></img>
                </div>
                <WapperTextLeft>
                    <TitleH1Text>Tổng hợp kết quả chất lượng nước thành phẩm từ ngày 29-30/9/2022</TitleH1Text>
                    <TitleSpan>11/10/2022 14:52:59</TitleSpan>
                    <TitleH3Text>Tổng hợp kết quả chất lượng nước thành phẩm NMN An Dương, Chi nhánh Cấp nước Hải Phòng 3, 4, 8, Chi nhánh Cấp nước Vĩnh Bảo, Minh Đức, Cát Bà, Ngũ Lão từ ngày 29-30//9/2022</TitleH3Text>
                </WapperTextLeft>
            </div>
        </Col>
    </>
  )
}
