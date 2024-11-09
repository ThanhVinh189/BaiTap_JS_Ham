/**
 * Bài Tập 2: Tính tiền điện
 *  Đầu vào:
 *      - Khai báo biến các loại tiền tiêu thụ điện cho sẵn
 *      - Lấy giá trị biến từ người dùng nhập họ tên từ ô Input typeName
 *      - Lấy giá trị biến từ người dùng nhập số Kw từ ô Input typeKw
 *  Xử lý:
 *      - Tạo biến total = 0;
 *      - Tạo biến result2 có chứa thẻ <p>
 *      - Tạo hàm typeResult2 chứa biến result2 có thể thay đổi 2 giá trị biến typeName và total
 *      - Tạo hàm handlePayment để tính số tiền tiêu thụ điện của người dùng:
 *          - Sử dụng cấu trúc điều kiện if else if để tính total và xuất văn bản ra hàm typeResult2:
 *              if (0 < typeKw && typeKw <= 50) {
 *                  const payment_1 = typeKw * dien_50kw_dau;
 *                  total = payment_1;
 *                  typeResult2(typeName, total);
 *              } else if (51 <= typeKw && typeKw <= 100) {
 *                  const payment_1 = 50 * dien_50kw_dau;
 *                  const payment_2 = (typeKw - 50) * dien_50kw_ke;
 *                  total = payment_1 + payment_2;
 *                  typeResult2(typeName, total);
 *              } else if (101 <= typeKw && typeKw <= 200) {
 *                  const payment_1 = 50 * dien_50kw_dau;
 *                  const payment_2 = 50 * dien_50kw_ke;
 *                  const payment_3 = (typeKw - 100) * dien_100kw_ke;
 *                  total = payment_1 + payment_2 + payment_3;
 *                  typeResult2(typeName, total);
 *              } else if (201 <= typeKw && typeKw <= 350) {
 *                  const payment_1 = 50 * dien_50kw_dau;
 *                  const payment_2 = 50 * dien_50kw_ke;
 *                  const payment_3 = 100 * dien_100kw_ke;
 *                  const payment_4 = (typeKw - 200) * dien_150kw_ke;
 *                  total = payment_1 + payment_2 + payment_3 + payment_4;
 *                  typeResult2(typeName, total);
 *              } else if (typeKw > 350) {
 *                  const payment_1 = 50 * dien_50kw_dau;
 *                  const payment_2 = 50 * dien_50kw_ke;
 *                  const payment_3 = 100 * dien_100kw_ke;
 *                  const payment_4 = 150 * dien_150kw_ke;
 *                  const payment_5 = (typeKw - 350) * dien_conLai;
 *                  total = payment_1 + payment_2 + payment_3 + payment_4 + payment_5;
 *                  typeResult2(typeName, total);
 *               // Tạo hộp thoại nhắc người dùng nhập ô Kw khi người dùng không nhập
 *              } else {
 *                  alert("Số kw không hợp lệ! Vui lòng nhập lại");
 *              }
 *  Đầu ra:
 *      - Hiển thị kết quả result2 ra ngoài trang web vào thẻ pInform_2
 */

const dien_50kw_dau = 500;
const dien_50kw_ke = 650;
const dien_100kw_ke = 850;
const dien_150kw_ke = 1100;
const dien_conLai = 1300;

let total = 0;
let result2 = `<p>👉Họ tên: ; Tiền điện: ${total}</p>`;

function typeResult2(typeName, total) {
  result2 = `<p>👉Họ tên: ${typeName}; Tiền điện: ${new Intl.NumberFormat(
    "vn-VN"
  ).format(total)} VNĐ</p>`;
  return result2;
}

function handlePayment() {
  const typeKw = document.getElementById("typeKw").value * 1;
  const typeName = document.getElementById("typeName").value;

  if (0 < typeKw && typeKw <= 50) {
    const payment_1 = typeKw * dien_50kw_dau;

    total = payment_1;
    typeResult2(typeName, total);
  } else if (51 <= typeKw && typeKw <= 100) {
    const payment_1 = 50 * dien_50kw_dau;
    const payment_2 = (typeKw - 50) * dien_50kw_ke;

    total = payment_1 + payment_2;
    typeResult2(typeName, total);
  } else if (101 <= typeKw && typeKw <= 200) {
    const payment_1 = 50 * dien_50kw_dau;
    const payment_2 = 50 * dien_50kw_ke;
    const payment_3 = (typeKw - 100) * dien_100kw_ke;

    total = payment_1 + payment_2 + payment_3;
    typeResult2(typeName, total);
  } else if (201 <= typeKw && typeKw <= 350) {
    const payment_1 = 50 * dien_50kw_dau;
    const payment_2 = 50 * dien_50kw_ke;
    const payment_3 = 100 * dien_100kw_ke;
    const payment_4 = (typeKw - 200) * dien_150kw_ke;

    total = payment_1 + payment_2 + payment_3 + payment_4;
    typeResult2(typeName, total);
  } else if (typeKw > 350) {
    const payment_1 = 50 * dien_50kw_dau;
    const payment_2 = 50 * dien_50kw_ke;
    const payment_3 = 100 * dien_100kw_ke;
    const payment_4 = 150 * dien_150kw_ke;
    const payment_5 = (typeKw - 350) * dien_conLai;

    total = payment_1 + payment_2 + payment_3 + payment_4 + payment_5;
    typeResult2(typeName, total);
  } else {
    alert("Số kw không hợp lệ! Vui lòng nhập lại");
  }

  document.getElementById("pInform_2").innerHTML = result2;
}
