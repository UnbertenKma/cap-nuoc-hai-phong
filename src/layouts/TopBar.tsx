import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Button } from "antd";
import {
  LinkOutlined,
  DownloadOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const TopBar = () => {
  return (
    <div className="pt-1 mb-[-20px] px-72">
      <Row justify="space-between" align="middle">
        <Col>
          <FontAwesomeIcon icon={["fas", "phone"]} />{" "}
          <span className="text-zinc-400 font-bold text-xs">
            {" "}
            Hỗ trợ trực tuyến 24/7: &nbsp;
          </span>
          <span className="text-red-500 font-bold text-base">3.5115.858</span>
        </Col>
        <Col>
          <Row gutter={25} align="middle">
            <Col>
              <Row>
                <SearchOutlined className="text-lg text-[#154398]" />
              </Row>
            </Col>
            <Col>
              <Row>
                <ShoppingCartOutlined className="text-lg text-[#154398]" />
              </Row>
            </Col>
            <Col>
              <Row justify="space-between" align="middle">
                <LinkOutlined />
                <span className="text-zinc-400 font-bold text-sm">
                  &nbsp;Liên kết website
                </span>
              </Row>
            </Col>
            <Col>
              <Row justify="space-between" align="middle">
                <DownloadOutlined />
                <span className="text-zinc-400 font-bold text-sm">
                  &nbsp;Tải ứng dụng
                </span>
              </Row>
            </Col>
            <Col>
              <Button className="border-none bg-red-500 text-white text-base font-semibold ">
                Đăng nhập
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default TopBar;
