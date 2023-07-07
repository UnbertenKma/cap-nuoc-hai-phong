import React from "react";
import { Card, Row, Divider, Image, Typography, Space, Carousel } from "antd";
import lapDatMoi from "../../images/lap-dat-moi.png";
import traCuu from "../../images/tra-cuu-su-dung-nuoc.png";
import hoaDonDienTu from "../../images/hoa-don-dien-tu.png";
import lichTamNgungCapNuoc from "../../images/lich-tam-ngung-cap-nuoc.png";
import thanhToanTrucTuyen from "../../images/thanh-toan-truc-tuyen.png";
import suaChua from "../../images/sua-chua.png";
import { useNavigate } from "react-router-dom";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const Service = () => {
  const navigate = useNavigate();

  return (
    <div className="home-service px-72">
      <Carousel
        arrows={true}
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
        dots={false}
        slidesToShow={6}
      >
        <Card
          className="rounded-none w-[188px] h-[220px] flex items-center justify-center cursor-pointer"
          onClick={() => navigate("san-pham-va-dich-vu/dich-vu/lap-dat-moi")}
        >
          <Space
            direction="vertical"
            size="large"
            className="flex items-center h-[170px]"
          >
            <Row>
              <Image preview={false} src={lapDatMoi} />
            </Row>
            <Row>
              <Typography.Text className="text-base font-semibold text-[#154398] text-center">
                Lắp đặt mới
              </Typography.Text>
            </Row>
          </Space>
        </Card>
        <Card
          className="rounded-none w-[188px] h-[220px] flex  items-center justify-center cursor-pointer"
          onClick={() =>
            navigate("san-pham-va-dich-vu/dich-vu/tra-cuu-su-dung-nuoc")
          }
        >
          <Space
            direction="vertical"
            size="large"
            className="flex items-center h-[170px]"
          >
            <Row>
              <Image preview={false} src={traCuu} />
            </Row>
            <Row>
              <Typography.Text className="text-base font-semibold text-[#154398] text-center">
                Tra cứu sử dụng nước
              </Typography.Text>
            </Row>
          </Space>
        </Card>
        <Card
          className="rounded-none w-[188px] h-[220px] flex items-center justify-center cursor-pointer"
          onClick={() =>
            navigate("san-pham-va-dich-vu/dich-vu/hoa-don-dien-tu")
          }
        >
          <Space
            direction="vertical"
            size="large"
            className="flex items-center h-[170px]"
          >
            <Row>
              <Image preview={false} src={hoaDonDienTu} />
            </Row>
            <Row>
              <Typography.Text className="text-base font-semibold text-[#154398] text-center">
                Hóa đơn điện tử
              </Typography.Text>
            </Row>
          </Space>
        </Card>
        <Card
          className="rounded-none w-[188px] h-[220px] flex items-center justify-center cursor-pointer"
          onClick={() =>
            navigate(
              "cham-soc-khach-hang/tra-cuu-thong-tin/lich-tam-ngung-cap-nuoc"
            )
          }
        >
          <Space
            direction="vertical"
            size="large"
            className="flex items-center h-[170px]"
          >
            <Row>
              <Image preview={false} src={lichTamNgungCapNuoc} />
            </Row>
            <Row>
              <Typography.Text className="text-base font-semibold text-[#154398] text-center">
                Lịch tạm ngừng cấp nước
              </Typography.Text>
            </Row>
          </Space>
        </Card>
        <Card
          className="rounded-none w-[188px] h-[220px] flex items-center justify-center cursor-pointer"
          onClick={() =>
            navigate("san-pham-va-dich-vu/dich-vu/thanh-toan-truc-tuyen")
          }
        >
          <Space
            direction="vertical"
            size="large"
            className="flex items-center h-[170px]"
          >
            <Row>
              <Image preview={false} src={thanhToanTrucTuyen} />
            </Row>
            <Row>
              <Typography.Text className="text-base font-semibold text-[#154398] text-center">
                Thanh toán trực tuyến
              </Typography.Text>
            </Row>
          </Space>
        </Card>
        <Card
          className="rounded-none w-[188px] h-[220px] flex items-center justify-center cursor-pointer"
          onClick={() => navigate("san-pham-va-dich-vu/dich-vu/sua-chua")}
        >
          <Space
            direction="vertical"
            size="large"
            className="flex items-center h-[170px]"
          >
            <Row>
              <Image preview={false} src={suaChua} />
            </Row>
            <Row>
              <Typography.Text className="text-base font-semibold text-[#154398] text-center">
                Sửa chữa (ĐH, mạng lưới cấp nước sau ĐH)
              </Typography.Text>
            </Row>
          </Space>
        </Card>
        <Card
          className="rounded-none w-[188px] h-[220px] flex items-center justify-center cursor-pointer"
          onClick={() => navigate("san-pham-va-dich-vu/dich-vu/sua-chua")}
        >
          <Space
            direction="vertical"
            size="large"
            className="flex items-center h-[170px]"
          >
            <Row>
              <Image preview={false} src={suaChua} />
            </Row>
            <Row>
              <Typography.Text className="text-base font-semibold text-[#154398] text-center">
                Đăng ký thay đổi thông tin khách hàng
              </Typography.Text>
            </Row>
          </Space>
        </Card>
        <Card
          className="rounded-none w-[188px] h-[220px] flex items-center justify-center cursor-pointer"
          onClick={() => navigate("san-pham-va-dich-vu/dich-vu/sua-chua")}
        >
          <Space
            direction="vertical"
            size="large"
            className="flex items-center h-[170px]"
          >
            <Row>
              <Image preview={false} src={suaChua} />
            </Row>
            <Row>
              <Typography.Text className="text-base font-semibold text-[#154398] text-center">
                Sang tên hợp đồng DVCN
              </Typography.Text>
            </Row>
          </Space>
        </Card>
        <Card
          className="rounded-none w-[188px] h-[220px] flex items-center justify-center cursor-pointer"
          onClick={() => navigate("san-pham-va-dich-vu/dich-vu/sua-chua")}
        >
          <Space
            direction="vertical"
            size="large"
            className="flex items-center h-[170px]"
          >
            <Row>
              <Image preview={false} src={suaChua} />
            </Row>
            <Row>
              <Typography.Text className="text-base font-semibold text-[#154398] text-center">
                Cấp lại hợp đồng DVCN
              </Typography.Text>
            </Row>
          </Space>
        </Card>
      </Carousel>
    </div>
  );
};

export default Service;
