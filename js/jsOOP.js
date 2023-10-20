var sinhVien = new SinhVien();
var validation = new Validation();
var xulyXacNhan = function () {
  sinhVien.maSV = document.querySelector("#maSinhVien").value;
  sinhVien.tenSV = document.querySelector("#tenSinhVien").value;
  sinhVien.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  sinhVien.diemToan = document.querySelector("#diemToan").value;
  sinhVien.diemLy = document.querySelector("#diemLy").value;
  sinhVien.diemHoa = document.querySelector("#diemHoa").value;
  sinhVien.diemRenLuyen = document.querySelector("#diemRenluyen").value;
  //Dom đến giao diện hiển thị dữ liệu
  //Kiểm tra validation
  var valid = true;
  //Validation rỗng
  valid &=
    validation.kiemTraRong(
      sinhVien.maSV,
      "Mã sinh viên",
      "#erro_maSinhVien_required"
    ) &
    validation.kiemTraRong(
      sinhVien.tenSV,
      "Tên sinh viên",
      "#erro_tenSinhVien_required"
    ) &
    validation.kiemTraRong(
      sinhVien.diemHoa,
      "Điểm hóa",
      "#erro_diemHoa_required"
    ) &
    validation.kiemTraRong(
      sinhVien.diemLy,
      "Điểm lý",
      "#erro_diemLy_required"
    ) &
    validation.kiemTraRong(
      sinhVien.diemToan,
      "Điểm toán",
      "#erro_diemToan_required"
    ) &
    validation.kiemTraRong(
      sinhVien.diemRenLuyen,
      "Điểm rèn luyện",
      "#erro_diemRenluyen_required"
    );
  //Kiểm tra tất cả là số
  valid &=
    validation.kiemTraTatCaLaSo(
      sinhVien.maSV,
      "Mã sinh viên",
      "#erro_maSinhVien_all_number"
    ) &
    validation.kiemTraTatCaLaSo(
      sinhVien.diemToan,
      "Điểm toán",
      "#erro_diemToan_all_number"
    ) &
    validation.kiemTraTatCaLaSo(
      sinhVien.diemLy,
      "Điểm lý",
      "#erro_diemLy_all_number"
    ) &
    validation.kiemTraTatCaLaSo(
      sinhVien.diemHoa,
      "Điểm hóa",
      "#erro_diemHoa_all_number"
    ) &
    validation.kiemTraTatCaLaSo(
      sinhVien.diemRenLuyen,
      "Điểm rèn luyện",
      "#erro_diemRenluyen_all_number"
    );
  //Kiểm tra độ dài chuỗi
  valid &= validation.kiemTraDoDaiChuoi(
    sinhVien.maSV,
    "Mã sinh viên",
    "#erro_maSinhVien_min_max_length",
    1,
    4
  );
  //Kiểm tra giá trị 
  valid &= validation.kiemTraGiaTri(
    sinhVien.diemToan,
    "Điểm toán",
    "#erro_diemToan_min_max_value", 0, 10
  ) &
    validation.kiemTraGiaTri(
      sinhVien.diemLy,
      "Điểm lý",
      "#erro_diemLy_min_max_value", 0, 10
    ) &
    validation.kiemTraGiaTri(
      sinhVien.diemHoa,
      "Điểm hóa",
      "#erro_diemHoa_min_max_value", 0, 10
    ) &
    validation.kiemTraGiaTri(
      sinhVien.diemRenLuyen,
      "Điểm hóa",
      "#erro_diemRenluyen_min_max_value", 0, 10
    );
  //Kiểm tra tất cả là chữ
  valid &= validation.kiemTraTatCaLaChu(sinhVien.tenSV, "Tên sinh viên", "#erro_tenSinhVien_all_letter");
  if (!valid) {
    alert("Dữ liệu không hợp lệ!");
    return;
  }
  //Xử lý in kết quả ra giao diện
  document.querySelector("#txtTenSinhVien").innerHTML = sinhVien.tenSV;
  document.querySelector("#txtMaSinhVien").innerHTML = sinhVien.maSV;
  document.querySelector("#txtLoaiSinhVien").innerHTML = sinhVien.loaiSinhVien;
  document.querySelector("#txtDiemTrungBinh").innerHTML =
    sinhVien["tinhDiemTrungBinh"]().toFixed(2);
  document.querySelector("#txtXepLoai").innerHTML = sinhVien["xepLoai"]();
};
document.querySelector("#btnXacNhan").onclick = xulyXacNhan;
