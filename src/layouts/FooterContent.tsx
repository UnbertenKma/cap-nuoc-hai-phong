import React from "react";
import { Row, Col, Divider } from "antd";

const FooterContent = () => {
  return (
    <>
      <Divider />
      <Row className="flex justify-between align-middle">
        <Col>
          <div className="mb-[36px] text-sky-800 text-base font-bold">
            CÔNG TY CỔ PHẦN CẤP NƯỚC HẢI PHÒNG
          </div>
          <Row
            gutter={10}
            style={{ flexWrap: "nowrap" }}
            className="mb-[10px] text-base"
          >
            <Col className="text-zinc-500 min-w-[60px]">Địa Chỉ:</Col>
            <Col>
              Số 54 Đinh Tiên Hoàng, P. Hoàng Văn Thụ, Q. Hồng Bàng, TP. Hải
              Phòng
            </Col>
          </Row>
          <Row gutter={10} className="mb-[10px] text-base">
            <Col className="text-zinc-500 min-w-[60px]">Tel:</Col>
            <Col>0225.3745377</Col>
          </Row>
          <Row gutter={10} className="mb-[10px] text-base">
            <Col className="text-zinc-500 min-w-[60px]">Fax:</Col>
            <Col>0225.3823748 </Col>
          </Row>
          <Row gutter={10} className="mb-[10px] text-base">
            <Col className="text-zinc-500 min-w-[60px]">Email:</Col>
            <Col>congtycophancapnuochaiphong@gmail.com </Col>
          </Row>
        </Col>
        <Col>
          <div className="mb-[36px] text-sky-800 text-base font-bold">
            Tra cứu thông tin
          </div>
          <Row className="text-zinc-500">Lịch tạm ngưng cấp nước</Row>
          <Row className="text-zinc-500">Tra cứu sử dụng nước</Row>
          <Row className="text-zinc-500">Lịch ghi chỉ số công tơ</Row>
          <Row className="text-zinc-500">Lượng nước tiêu thụ</Row>
        </Col>
        <Col>
          <div className="mb-[36px] text-sky-800 text-base font-bold">
            Tra cứu thông tin
          </div>
          <Row className="text-zinc-500">Hóa đơn tiền nước</Row>
          <Row className="text-zinc-500">Thanh toán trực tuyến</Row>
          <Row className="text-zinc-500">Thanh toán tại điểm thu tiền nước</Row>
          <Row className="text-zinc-500">Lịch sử thanh toán</Row>
        </Col>
        <Col>
          <div className="mb-[36px] text-sky-800 text-base font-bold">
            Chính sách và quy định
          </div>
          <Row className="text-zinc-500">Chính sách thanh toán</Row>
          <Row className="text-zinc-500">Chính sách xử lý khiếu nại</Row>
          <Row className="text-zinc-500">Chính sách bảo mật thông tin</Row>
        </Col>
      </Row>
      <Divider />
      <Row gutter={10}>
        <div className="m-auto text-sm text-zinc-500">
          <span className="text-black">© 2021</span> Bản quyền thuộc{" "}
          <span className="text-black">
            CÔNG TY CỔ PHẦN CẤP NƯỚC HẢI PHÒNG{" "}
          </span>
        </div>
        <br />
      </Row>
      <Row>
        <div className="m-auto text-sm text-zinc-500">
          ĐKKD 0200171274 do Sở KHĐT Tp. Hải Phòng cấp ngày 03/07/2018 (Thay đổi
          lần 9)
        </div>
      </Row>
    </>
  );
};

export default FooterContent;
