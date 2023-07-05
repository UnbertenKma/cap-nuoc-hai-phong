import React from "react";
import { Row, Col, Divider } from "antd";
import { Link, useNavigate } from "react-router-dom";

const FooterContent = () => {
  const navigate = useNavigate();

  return (
    <div className="m-[-50px] bg-white">
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
          <Row className="text-zinc-500">
            <Link to="san-pham-va-dich-vu/lich-tam-ngung-cap-nuoc">
              Lịch tạm ngưng cấp nước
            </Link>
          </Row>
          <Row className="text-zinc-500">
            <Link to="/cham-soc-khach-hang/tra-cuu-thong-tin/tra-cuu-chi-so-cong-to">
              Tra cứu sử dụng nước
            </Link>
          </Row>
          <Row className="text-zinc-500">
            <Link to="/cham-soc-khach-hang/tra-cuu-thong-tin/lich-ghi-chi-so-cong-to">
              Lịch ghi chỉ số công tơ
            </Link>
          </Row>
          <Row className="text-zinc-500">
            <Link to="/cham-soc-khach-hang/tra-cuu-thong-tin/luong-nuoc-tieu-thu">
              Lượng nước tiêu thụ
            </Link>
          </Row>
        </Col>
        <Col>
          <div className="mb-[36px] text-sky-800 text-base font-bold">
            Tra cứu thông tin
          </div>
          <Row className="text-zinc-500">
            <Link to="san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu">
              Hóa đơn tiền nước
            </Link>
          </Row>
          <Row className="text-zinc-500">
            <Link to="san-pham-va-dich-vu/dich-vu/thanh-toan-truc-tuyen">
              Thanh toán trực tuyến
            </Link>
          </Row>
          <Row className="text-zinc-500">
            <Link to="">Thanh toán tại điểm thu tiền nước</Link>
          </Row>
          <Row className="text-zinc-500">
            <Link to="">Lịch sử thanh toán</Link>
          </Row>
        </Col>
        <Col>
          <div className="mb-[36px] text-sky-800 text-base font-bold">
            Chính sách và quy định
          </div>
          <Row className="text-zinc-500">
            <Link to="cham-soc-khach-hang/chinh-sach-chung">
              Chính sách thanh toán
            </Link>
          </Row>
          <Row className="text-zinc-500">
            <Link to="cham-soc-khach-hang/chinh-sach-chung">
              Chính sách xử lý khiếu nại
            </Link>
          </Row>
          <Row className="text-zinc-500">
            <Link to="cham-soc-khach-hang/chinh-sach-bao-mat">
              Chính sách bảo mật thông tin
            </Link>
          </Row>
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
    </div>
  );
};

export default FooterContent;
