import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ContentLayout from "../layouts/ContentLayout";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ThuNgo from "../pages/About/VeCapNuocHaiPhong/ThuNgo";
import LichSuPhatTrien from "../pages/About/VeCapNuocHaiPhong/LichSuPhatTrien";
import CacLinhVucKinhDoanh from "../pages/About/VeCapNuocHaiPhong/CacLinhVucKinhDoanh";
import SoDoToChuc from "../pages/About/SoDoToChuc";
import NuocSinhHoat from "../pages/Service/Product/NuocSinhHoat";
import NuocUongDongChai from "../pages/Service/Product/NuocUongDongChai";
import ChinhSachBaoMat from "../pages/Service/Product/ChinhSachBaoMat";
import LichTamNgungCapNuoc from "../pages/Service/LichTamNgungCapNuoc";
import DichVu from "../pages/Service/DichVu";
import PhuHopNhat from "../pages/Service/CongCuTinhHoaDon/PhuHopNhat";
import GiaTuCaoDenThap from "../pages/Service/CongCuTinhHoaDon/GiaTuCaoDenThap";
import GiaTuThapDenCao from "../pages/Service/CongCuTinhHoaDon/GiaTuThapDenCao";
import CacThuTucKhachHangCanBiet from "../pages/CustomerService/CacThuTucKhachHangCanBiet";
import LichGhiChiSoCongTo from "../pages/CustomerService/TraCuuThongTin/LichGhiChiSoCongTo";
import TraCuuChiSoCongTo from "../pages/CustomerService/TraCuuThongTin/TraCuuChiSoCongTo";
import LuongTieuThu from "../pages/CustomerService/TraCuuThongTin/LuongTieuThu";
import CongCuTinhHoaDon from "../pages/CustomerService/CongCuTinhHoaDon";
import GiaNuocDinhMuc from "../pages/CustomerService/GiaNuocDinhMuc";
import ChinhSachChung from "../pages/CustomerService/ChinhSachChung";
import BaoMat from "../pages/CustomerService/BaoMat";
import BaoCaoTaiChinh from "../pages/ShareHolder/BaoCaoTaiChinh";
import BaoCaoThuongNien from "../pages/ShareHolder/BaoCaoThuongNien";
import BaoCaoQuanTri from "../pages/ShareHolder/BaoCaoQuanTri";
import ThongTinCoDong from "../pages/ShareHolder/ThongTinCoDong";
import DaiHoiCoDongThuongNien from "../pages/ShareHolder/DaiHoiCoDongThuongNien";
import HoatDongSanXuatKinhDoanh from "../pages/News/HoatDongSanXuatKinhDoanh";
import DangVaDoanThe from "../pages/News/DangVaDoanThe";
import TinTucLienQuan from "../pages/News/TinTucLienQuan";
import ChatLuongNuoc from "../pages/Quality/ChatLuongNuoc";
import LienHe from "../pages/Contact/LienHe";
import LapDatMoi from "../pages/Service/DichVu/LapDatMoi";
import TraCuuSuDungNuoc from "../pages/Service/DichVu/TraCuuSuDungNuoc";
import HoaDonDienTu from "../pages/Service/DichVu/HoaDonDienTu";
import ThanhToanTrucTuyen from "../pages/Service/DichVu/ThanhToanTrucTuyen";
import SuaChua from "../pages/Service/DichVu/SuaChua";
import LapDatDiChuyen from "../pages/Service/DichVu/LapDatDiChuyen";
import SangTenHopDongDVCN from "../pages/Service/DichVu/SangTenHopDongDVCN";
import CapLaiHopDongDVCN from "../pages/Service/DichVu/CapLaiHopDongDVCN";
import DangKyThayDoi from "../pages/Service/DichVu/DangKyThayDoi";
import GiaTriCotLoi from "../pages/About/ThongDiepLanhDao/GiaTriCotLoi";
import ChuanMucDaoDuc from "../pages/About/ThongDiepLanhDao/ChuanMucDaoDuc";
import ThucThiVanHoa from "../pages/About/ThongDiepLanhDao/ThucThiVanHoa";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="" element={<ContentLayout />}>
              <Route path="" element={<Home />} />
            </Route>
            <Route path="gioi-thieu" element={<ContentLayout />}>
              <Route
                path="ve-cap-nuoc-hai-phong/thu-ngo"
                element={<ThuNgo />}
              />
              <Route
                path="ve-cap-nuoc-hai-phong/lich-su-phat-trien"
                element={<LichSuPhatTrien />}
              />
              <Route
                path="ve-cap-nuoc-hai-phong/cac-linh-vuc-kinh-doanh"
                element={<CacLinhVucKinhDoanh />}
              />
              <Route
                path="thong-diep-lanh-dao/gia-tri-cot-loi"
                element={<GiaTriCotLoi />}
              />
              <Route
                path="thong-diep-lanh-dao/chuan-muc-dao-duc"
                element={<ChuanMucDaoDuc />}
              />
              <Route
                path="thong-diep-lanh-dao/thuc-thi-van-hoa"
                element={<ThucThiVanHoa />}
              />
              <Route path="so-do-to-chuc" element={<SoDoToChuc />} />
            </Route>
            <Route path="san-pham-va-dich-vu" element={<ContentLayout />}>
              <Route
                path="san-pham/nuoc-sinh-hoat"
                element={<NuocSinhHoat />}
              />
              <Route
                path="san-pham/nuoc-uong-dong-chai"
                element={<NuocUongDongChai />}
              />
              <Route
                path="san-pham/chinh-sach-bao-mat"
                element={<ChinhSachBaoMat />}
              />
              <Route
                path="lich-tam-ngung-cap-nuoc"
                element={<LichTamNgungCapNuoc />}
              />
              <Route
                path="cong-cu-tinh-hoa-don/phu-hop-nhat"
                element={<PhuHopNhat />}
              />
              <Route
                path="cong-cu-tinh-hoa-don/gia-tu-cao-den-thap"
                element={<GiaTuCaoDenThap />}
              />
              <Route
                path="cong-cu-tinh-hoa-don/gia-tu-thap-den-cao"
                element={<GiaTuThapDenCao />}
              />
              <Route path="dich-vu" element={<DichVu />} />
              <Route path="dich-vu/lap-dat-moi" element={<LapDatMoi />} />
              <Route
                path="dich-vu/tra-cuu-su-dung-nuoc"
                element={<TraCuuSuDungNuoc />}
              />
              <Route
                path="dich-vu/hoa-don-dien-tu"
                element={<HoaDonDienTu />}
              />
              <Route
                path="dich-vu/thanh-toan-truc-tuyen"
                element={<ThanhToanTrucTuyen />}
              />
              <Route path="dich-vu/sua-chua" element={<SuaChua />} />
              <Route
                path="dich-vu/lap-dat-di-chuyen"
                element={<LapDatDiChuyen />}
              />
              <Route
                path="dich-vu/sang-ten-hop-dong-dvcn"
                element={<SangTenHopDongDVCN />}
              />
              <Route
                path="dich-vu/cap-lai-hop-dong-dvcn"
                element={<CapLaiHopDongDVCN />}
              />
              <Route
                path="dich-vu/dang-ky-thay-doi-TTKH"
                element={<DangKyThayDoi />}
              />
            </Route>
            <Route path="cham-soc-khach-hang" element={<ContentLayout />}>
              <Route
                path="cac-thu-tuc-khach-hang-can-biet"
                element={<CacThuTucKhachHangCanBiet />}
              />
              <Route
                path="tra-cuu-thong-tin/lich-tam-ngung-cap-nuoc"
                element={<LichTamNgungCapNuoc />}
              />
              <Route
                path="tra-cuu-thong-tin/lich-ghi-chi-so-cong-to"
                element={<LichGhiChiSoCongTo />}
              />
              <Route
                path="tra-cuu-thong-tin/tra-cuu-chi-so-cong-to"
                element={<TraCuuChiSoCongTo />}
              />
              <Route
                path="tra-cuu-thong-tin/luong-nuoc-tieu-thu"
                element={<LuongTieuThu />}
              />
              <Route
                path="cong-cu-tinh-hoa-don"
                element={<CongCuTinhHoaDon />}
              />
              <Route path="gia-nuoc-dinh-muc" element={<GiaNuocDinhMuc />} />
              <Route path="chinh-sach-chung" element={<ChinhSachChung />} />
              <Route path="chinh-sach-bao-mat" element={<BaoMat />} />
            </Route>
            <Route path="co-dong" element={<ContentLayout />}>
              <Route path="bao-cao-tai-chinh" element={<BaoCaoTaiChinh />} />
              <Route
                path="bao-cao-thuong-nien"
                element={<BaoCaoThuongNien />}
              />
              <Route path="bao-cao-quan-tri" element={<BaoCaoQuanTri />} />
              <Route path="thong-tin-co-dong" element={<ThongTinCoDong />} />
              <Route
                path="dai-hoi-co-dong-thuong-nien"
                element={<DaiHoiCoDongThuongNien />}
              />
            </Route>{" "}
            <Route path="tin-tuc" element={<ContentLayout />}>
              <Route
                path="hoat-dong-san-xuat-kinh-doanh"
                element={<HoatDongSanXuatKinhDoanh />}
              />
              <Route path="dang-va-doan-the" element={<DangVaDoanThe />} />
              <Route path="tin-tuc-lien-quan" element={<TinTucLienQuan />} />
            </Route>
            <Route path="chat-luong-nuoc" element={<ContentLayout />}>
              <Route path="" element={<ChatLuongNuoc />} />
            </Route>
            <Route path="lien-he" element={<ContentLayout />}>
              <Route path="" element={<LienHe />} />
            </Route>
          </Route>
          <Route path="*" element={<div>Trang không tồn tại</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
