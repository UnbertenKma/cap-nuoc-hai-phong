import React from 'react'
import { CategoryTitle, TitleContentCategory, TitleH3, TitleSpan, WapperCategory, WrapperTitleCategory } from '../style';
import { Col } from 'antd';
import { Button, Space } from 'antd';

export const ContentRight = () => {
  return (
    <>
        <Col flex={2}>
          <div>
            <WapperCategory>
              <CategoryTitle>
                Danh mục bài viết
              </CategoryTitle>
            </WapperCategory>

            <div style={{background: '#F7F7F7'}}>
              <div>
                <TitleContentCategory>
                  Nhiều người quan tâm
                </TitleContentCategory>

                <WrapperTitleCategory>
                    <TitleH3>
                    Quy định về di chuyển máy nước / Nâng hạ cỡ đồng hồ nước
                    </TitleH3>
                    <TitleSpan>
                    10/10/2022 08:08:08
                    </TitleSpan>
                </WrapperTitleCategory>
              </div>

              <div style={{paddingBottom: '26px', width: '500px' }}>
                <h2 style={{marginLeft: '26px', marginTop: '26px', fontWeight: 600, fontSize: '20px'}}>
                  Tag phổ biến
                </h2>
                <span style={{marginLeft: '26px', paddingTop: '20px', color: '#212529', fontWeight: 400, fontSize: '10px' }}>
                  <Space wrap>
                    <Button style={{marginTop: '10px'}}>Các thủ tục khách hàng cần biết</Button>
                    <Button style={{marginTop: '10px'}}>Giá nước - Định mức</Button>
                    <Button style={{marginTop: '10px'}}>Thông tin khách hàng cần biết</Button>
                    <Button style={{marginTop: '10px'}}>Chính sách chung</Button>
                    <Button style={{marginTop: '10px'}}>Chính sách bảo mật</Button>
                  </Space>
                </span>

                
              </div>
            </div>
          </div>
        </Col>
    </>
  )
}
