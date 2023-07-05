import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Layout, Menu, Divider } from "antd";
import { Link, useNavigate } from "react-router-dom";
import ContentLayout from "./ContentLayout";
import "./index.css";
import logo from "../images/larger-image-1664556056-LOGO Cap Nuoc 5-3 1.png";
import TopBar from "./TopBar";
import { ShoppingCartOutlined, SearchOutlined } from "@ant-design/icons";
import FooterContent from "./FooterContent";

const { Header, Content, Footer } = Layout;

function MainLayout() {
  const navigate = useNavigate();

  return (
    <Layout className="min-h-screen m-auto bg-white">
      <TopBar />
      <Divider className="px-[50px]" />
      <Header className="flex items-center justify-between bg-white border-b-[1px] z-1000 sticky top-0 z-10 px-56">
        <Link
          to="/"
          className="flex items-center gap-3 text-base font-bold text-sky-800"
        >
          <Image src={logo} preview={false} />
          CÔNG TY CỔ PHẦN <br />
          CẤP NƯỚC HẢI PHÒNG
        </Link>
        <Menu mode="horizontal" defaultSelectedKeys={["1"]} disabledOverflow>
          <Menu.Item className=" text-base font-semibold pr-[10px] pb-[25px] pl-[10px]">
            <Link to="/">
              <FontAwesomeIcon
                icon={["fas", "house"]}
                className="text-sky-800"
              />
            </Link>
          </Menu.Item>
          <Menu.SubMenu
            title="Giới thiệu"
            className=" text-base font-semibold text-sky-800 pr-[10px] pb-[25px] pl-[10px]"
          >
            <Menu.SubMenu title="Về cấp nước Hải Phòng">
              <Menu.Item
                onClick={() => {
                  navigate("/gioi-thieu/ve-cap-nuoc-hai-phong/thu-ngo");
                }}
              >
                Thư ngỏ
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  navigate(
                    "/gioi-thieu/ve-cap-nuoc-hai-phong/lich-su-phat-trien"
                  );
                }}
              >
                Lịch sử phát triển
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  navigate(
                    "/gioi-thieu/ve-cap-nuoc-hai-phong/cac-linh-vuc-kinh-doanh"
                  );
                }}
              >
                Các lĩnh vực kinh doanh
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu title="Thông điệp lãnh đạo">
              <Menu.Item
                onClick={() => {
                  navigate("/gioi-thieu/thong-diep-lanh-dao/gia-tri-cot-loi");
                }}
              >
                Giá trị cốt lõi
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  navigate("/gioi-thieu/thong-diep-lanh-dao/chuan-muc-dao-duc");
                }}
              >
                Chuẩn mực đạo đức
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  navigate("/gioi-thieu/thong-diep-lanh-dao/thuc-thi-van-hoa");
                }}
              >
                Thực thi văn hóa
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item
              onClick={() => {
                navigate("/gioi-thieu/so-do-to-chuc");
              }}
            >
              Sơ đồ tổ chức
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            title="Sản phẩm và dịch vụ"
            className=" text-base font-semibold text-sky-800 pr-[10px] pb-[25px] pl-[10px]"
          >
            <Menu.SubMenu title="Sản phẩm">
              <Menu.Item
                onClick={() => {
                  navigate("/san-pham-va-dich-vu/san-pham/nuoc-sinh-hoat");
                }}
              >
                Nước sinh hoạt
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  navigate("/san-pham-va-dich-vu/san-pham/nuoc-uong-dong-chai");
                }}
              >
                Nước uống đóng chai
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  navigate("/san-pham-va-dich-vu/san-pham/chinh-sach-bao-mat");
                }}
              >
                Chính sách bảo mật
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item
              onClick={() => {
                navigate("/san-pham-va-dich-vu/lich-tam-ngung-cap-nuoc");
              }}
            >
              Lịch tạm ngưng cấp nước
            </Menu.Item>
            <Menu.SubMenu title="Công cụ tính hóa đơn">
              <Menu.Item
                onClick={() => {
                  navigate(
                    "/san-pham-va-dich-vu/cong-cu-tinh-hoa-don/phu-hop-nhat"
                  );
                }}
              >
                Phù hợp nhất
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  navigate(
                    "/san-pham-va-dich-vu/cong-cu-tinh-hoa-don/gia-tu-cao-den-thap"
                  );
                }}
              >
                Giá từ cao đến thấp
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  navigate(
                    "/san-pham-va-dich-vu/cong-cu-tinh-hoa-don/gia-tu-thap-den-cao"
                  );
                }}
              >
                Giá từ thấp đến cao
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item
              onClick={() => {
                navigate("/san-pham-va-dich-vu/dich-vu");
              }}
            >
              Dịch vụ
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            title="Chăm sóc khách hàng"
            className=" text-base font-semibold text-sky-800 pr-[10px] pb-[25px] pl-[10px]"
          >
            <Menu.Item
              onClick={() => {
                navigate(
                  "/cham-soc-khach-hang/cac-thu-tuc-khach-hang-can-biet"
                );
              }}
            >
              Các thủ tục khách hàng cần biết
            </Menu.Item>
            <Menu.SubMenu title="Tra cứu thông tin">
              <Menu.Item
                onClick={() => {
                  navigate(
                    "/cham-soc-khach-hang/tra-cuu-thong-tin/lich-tam-ngung-cap-nuoc"
                  );
                }}
              >
                Lịch tạm ngưng cấp nước
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  navigate(
                    "/cham-soc-khach-hang/tra-cuu-thong-tin/lich-ghi-chi-so-cong-to"
                  );
                }}
              >
                Lịch ghi chỉ số công tơ
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  navigate(
                    "/cham-soc-khach-hang/tra-cuu-thong-tin/tra-cuu-chi-so-cong-to"
                  );
                }}
              >
                Tra cứu chỉ số công tơ
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  navigate(
                    "/cham-soc-khach-hang/tra-cuu-thong-tin/luong-nuoc-tieu-thu"
                  );
                }}
              >
                Lượng nước tiêu thụ
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item
              onClick={() => {
                navigate("/cham-soc-khach-hang/cong-cu-tinh-hoa-don");
              }}
            >
              Công cụ tính hóa đơn
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/cham-soc-khach-hang/gia-nuoc-dinh-muc");
              }}
            >
              Giá nước - Định mức
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/cham-soc-khach-hang/chinh-sach-chung");
              }}
            >
              Chính sách chung
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/cham-soc-khach-hang/chinh-sach-bao-mat");
              }}
            >
              Chính sách bảo mật
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            title="Cổ đông"
            className=" text-base font-semibold text-sky-800 pr-[10px] pb-[25px] pl-[10px]"
          >
            <Menu.Item
              onClick={() => {
                navigate("/co-dong/bao-cao-tai-chinh");
              }}
            >
              Báo cáo tài chính
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/co-dong/bao-cao-thuong-nien");
              }}
            >
              Báo cáo thường niên
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/co-dong/bao-cao-quan-tri");
              }}
            >
              Báo cáo quản trị
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/co-dong/thong-tin-co-dong");
              }}
            >
              Thông tin cổ đông
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("/co-dong/dai-hoi-co-dong-thuong-nien");
              }}
            >
              Đại hội cổ đông thường niên
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            title="Tin tức"
            className=" text-base font-semibold text-sky-800 pr-[10px] pb-[25px] pl-[10px]"
          >
            <Menu.Item
              onClick={() => {
                navigate("tin-tuc/hoat-dong-san-xuat-kinh-doanh");
              }}
            >
              Hoạt động sản xuất kinh doanh
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("tin-tuc/dang-va-doan-the");
              }}
            >
              Đảng và đoàn thể
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                navigate("tin-tuc/tin-tuc-lien-quan");
              }}
            >
              Tin tức liên quan
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item
            className=" text-base font-semibold text-sky-800 pr-[10px] pb-[25px] pl-[10px]"
            onClick={() => navigate("/chat-luong-nuoc")}
          >
            Chất lượng nước
          </Menu.Item>
          <Menu.Item
            className=" text-base font-semibold text-sky-800 pr-[10px] pb-[25px] pl-[10px]"
            onClick={() => navigate("/lien-he")}
          >
            Liên hệ
          </Menu.Item>
          <Menu.Item className=" text-base font-bold text-sky-800 pr-[10px] pb-[25px] pl-[10px]">
            <SearchOutlined className="text-xl font-bold" />
          </Menu.Item>
          <Menu.Item className=" text-base font-bold text-sky-800 pr-[10px] pb-[25px] pl-[10px]">
            <ShoppingCartOutlined className="text-xl font-bold" />
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="bg-white">
        <ContentLayout />
      </Content>
      <Divider />
      <Footer className="bg-white">
        <FooterContent />
      </Footer>
    </Layout>
  );
}

export default MainLayout;
