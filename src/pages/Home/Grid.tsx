import { Image, Row, Col } from "antd";
import cskh from "./images/cskh_8088 1.png";
import cnhp from "./images/Group 10.png";
import app from "./images/sms 1.png";
import phone from "./images/Group 16.png";
import sms from "./images/Group 17.png";
import phongGiaoDich from "./images/Group 11.png";
import dichVuCong from "./images/Group 15.png";
import mail from "./images/Group 13.png";
import chatbot from "./images/chatbot (1) 1.png";
import zalo from "./images/Group 12.png";

const Grid = () => {
  return (
    <div className="px-72 py-16">
      <Row gutter={[18, 30]}>
        <Col span={8}>
          <Image preview={false} src={cskh} width="100%" />
        </Col>
        <Col span={8}>
          <Row gutter={[0, 30]}>
            <Image preview={false} src={cnhp} width="100%" />
            <Image preview={false} src={phone} width="100%" />
          </Row>
        </Col>
        <Col span={8}>
          <Row gutter={[0, 30]}>
            <Image preview={false} src={sms} width="100%" />
            <Image preview={false} src={app} width="100%" />
          </Row>
        </Col>
        <Col span={8}>
          <Row gutter={[0, 30]}>
            <Image preview={false} src={phongGiaoDich} width="100%" />
            <Image preview={false} src={dichVuCong} width="100%" />
          </Row>
        </Col>
        <Col span={8}>
          <Row gutter={[0, 30]}>
            <Image preview={false} src={mail} width="100%" />
            <Image preview={false} src={chatbot} width="100%" />
          </Row>
        </Col>
        <Col span={8}>
          <Image preview={false} src={zalo} width="100%" />
        </Col>
      </Row>
    </div>
  );
};

export default Grid;
