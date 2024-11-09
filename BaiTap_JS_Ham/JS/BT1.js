function openTab(evt, baiTap) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(baiTap).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

/**
 * Bài tập 1: Quản lý tuyển sinh
 * ** Đầu vào:
 *        - Lấy giá trị biến từ người dùng nhập số điểm chuẩn từ ô Input diemChuan
 *        - Lấy giá trị biến từ người dùng nhập số điểm môn thứ 1 từ ô Input diemMon1
 *        - Lấy giá trị biến từ người dùng nhập số điểm môn thứ 2 từ ô Input diemMon2
 *        - Lấy giá trị biến từ người dùng nhập số điểm môn thứ 3 từ ô Input diemMon3
 *        - Lấy giá trị biến từ người dùng chọn khu vực từ ô id="khuVuc" : A = 2, B = 1, C = 0.5
 *        - Lấy giá trị biến từ người dùng chọn đối tượng từ ô id="doiTuong" : 1 = 2.5, 2 = 1.5, 3 = 1
 * ** Xử lý:
 *        - Tạo biến diemTongKet = 0;
 *        - diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemUuTien;
 *        - Tạo biến diemUuTien = khuVuc + doiTuong;
 *        - Tạo biến diemBaMon = diemMon1 && diemMon2 && diemMon3;
 *        - Tạo biến result1 = "";
 *        - Lấy điểm của 3 môn từ ô input
 *        - Kiểm tra điểm của 3 môn nếu có điểm nào <= 0
 *            => Thí sinh đó rớt do có 1 môn điểm 0
 *        - Lấy điểm Tổng kết từ ô diemTongKet
 *        - Kiểm tra diemTongKet nếu bé hơn điểm chuẩn : diemTongKet < diemChuan
 *            => Thí sinh đó rớt do không đủ điểm
 *        - Kiểm tra diemTongKet nếu lớn hơn điểm chuẩn : diemTongKet > diemChuan
 *            => Thí sinh đó đậu
 * ** Đầu ra:
 *        - Tạo biến result1 thu được kết quả kiểm tra sau khi người dùng nhập số
 *        - Hiện thị kết quả result1 ra thẻ pInform_1
 */

function handleResult() {
  const khuVuc = document.getElementById("khuVuc").value * 1;
  const doiTuong = document.getElementById("doiTuong").value * 1;
  const diemChuan = document.getElementById("diemChuan").value * 1;
  const diemMon1 = document.getElementById("diemMon1").value * 1;
  const diemMon2 = document.getElementById("diemMon2").value * 1;
  const diemMon3 = document.getElementById("diemMon3").value * 1;

  let diemUuTien = khuVuc + doiTuong;

  let diemBaMon = diemMon1 && diemMon2 && diemMon3;

  let diemTongKet = 0;

  diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemUuTien;

  let result1 = `<p>👉</p>`;

  if (diemBaMon <= 0) {
    result1 = `<p>👉Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0</p>`;
  } else if (diemTongKet < diemChuan) {
    result1 = `<p>👉Bạn đã rớt. Tổng điểm: ${diemTongKet}</p>`;
  } else if (diemTongKet >= diemChuan) {
    result1 = `<p>👉Bạn đã đậu. Tổng điểm: ${diemTongKet}</p>`;
  }

  document.getElementById("pInform_1").innerHTML = result1;
}
