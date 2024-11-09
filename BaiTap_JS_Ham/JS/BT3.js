/**
 *  Bài Tập 3: Tính thuế thu nhập cá nhân
 *   Đầu vào:
 *      - Lấy giá trị biến từ người dùng nhập họ tên từ ô Input typeFullName
 *      - Lấy giá trị biến từ người dùng nhập tổng thu nhập năm từ ô Input typeIncome
 *      - Lấy giá trị biến từ người dùng nhập số người phụ thuộc từ ô Input typeDependents
 *   Xử lý:
 *      - Tạo biến totalTax = 0;
 *      - Tạo biến result3 có chứa thẻ <p>
 *      - Tạo hàm typeResult3 chứa biến result3 có thể thay đổi 2 giá trị biến typeFullName và totalTax
 *      - Tạo hàm handlePayTax để tính thuế thu nhập cá nhân:
 *          - Tạo biến taxable = 0;
 *          - taxable = typeIncome - 4e6 - typeDependents * 16e5;
 *          - Sử dụng cấu trúc điều kiện if else if để tính totalTax và xuất văn bản ra hàm typeResult3:
 *              // Tạo hộp thoại nhắc người dùng nhập ô tổng thu nhập năm khi người dùng không nhập
 *                  và taxable phải lớn hơn 0
 *              if (taxable <= 0) {
 *                  alert("Số tiền thu nhập không hợp lệ");
 *              } else if (taxable <= 60e6) {
 *                  const tax_1 = taxable * 0.05;
 *                  totalTax = tax_1;
 *                  typeResult3(typeFullName, totalTax);
 *              } else if (60e6 < taxable && taxable <= 120e6) {
 *                  const tax_1 = 60e6 * 0.05;
 *                  const tax_2 = (taxable - 60e6) * 0.1;
 *                  totalTax = tax_1 + tax_2;
 *                  typeResult3(typeFullName, totalTax);
 *              } else if (120e6 < taxable && taxable <= 210e6) {
 *                  const tax_1 = 60e6 * 0.05;
 *                  const tax_2 = 60e6 * 0.1;
 *                  const tax_3 = (taxable - 120e6) * 0.15;
 *                  totalTax = tax_1 + tax_2 + tax_3;
 *                  typeResult3(typeFullName, totalTax);
 *              } else if (210e6 < taxable && taxable <= 384e6) {
 *                  const tax_1 = 60e6 * 0.05;
 *                  const tax_2 = 60e6 * 0.1;
 *                  const tax_3 = 90e6 * 0.15;
 *                  const tax_4 = (taxable - 210e6) * 0.2;
 *                  totalTax = tax_1 + tax_2 + tax_3 + tax_4;
 *                  typeResult3(typeFullName, totalTax);
 *              } else if (384e6 < taxable && taxable <= 624e6) {
 *                  const tax_1 = 60e6 * 0.05;
 *                  const tax_2 = 60e6 * 0.1;
 *                  const tax_3 = 90e6 * 0.15;
 *                  const tax_4 = 174e6 * 0.2;
 *                  const tax_5 = (taxable - 384e6) * 0.25;
 *                  totalTax = tax_1 + tax_2 + tax_3 + tax_4 + tax_5;
 *                  typeResult3(typeFullName, totalTax);
 *              } else if (624e6 < taxable && taxable <= 960e6) {
 *                  const tax_1 = 60e6 * 0.05;
 *                  const tax_2 = 60e6 * 0.1;
 *                  const tax_3 = 90e6 * 0.15;
 *                  const tax_4 = 174e6 * 0.2;
 *                  const tax_5 = 240e6 * 0.25;
 *                  const tax_6 = (taxable - 624e6) * 0.3;
 *                  totalTax = tax_1 + tax_2 + tax_3 + tax_4 + tax_5 + tax_6;
 *                  typeResult3(typeFullName, totalTax);
 *              } else if (taxable > 960e6) {
 *                  const tax_1 = 60e6 * 0.05;
 *                  const tax_2 = 60e6 * 0.1;
 *                  const tax_3 = 90e6 * 0.15;
 *                  const tax_4 = 174e6 * 0.2;
 *                  const tax_5 = 240e6 * 0.25;
 *                  const tax_6 = 336e6 * 0.3;
 *                  const tax_7 = (taxable - 960e6) * 0.35;
 *                  totalTax = tax_1 + tax_2 + tax_3 + tax_4 + tax_5 + tax_6 + tax_7;
 *                  typeResult3(typeFullName, totalTax);}
 *  Đầu ra:
 *      - Hiển thị kết quả result3 ra ngoài trang web vào thẻ pInform_3
 */

let totalTax = 0;
let result3 = `<p>👉Họ tên: ; Tiền thuế thu nhập cá nhân: ${totalTax} VNĐ</p>`;

function typeResult3(typeFullName, totalTax) {
  result3 = `<p>👉Họ tên: ${typeFullName}; Tiền thuế thu nhập cá nhân: ${new Intl.NumberFormat(
    "vn-VN"
  ).format(totalTax)} VNĐ</p>`;
}

function handlePayTax() {
  const typeIncome = document.getElementById("typeIncome").value * 1;
  const typeFullName = document.getElementById("typeFullName").value;
  const typeDependents = document.getElementById("typeDependents").value * 1;

  let taxable = 0;
  taxable = typeIncome - 4e6 - typeDependents * 16e5;

  if (taxable <= 0) {
    alert("Số tiền thu nhập không hợp lệ");
  } else if (taxable <= 60e6) {
    const tax_1 = taxable * 0.05;

    totalTax = tax_1;
    typeResult3(typeFullName, totalTax);
  } else if (60e6 < taxable && taxable <= 120e6) {
    const tax_1 = 60e6 * 0.05;
    const tax_2 = (taxable - 60e6) * 0.1;

    totalTax = tax_1 + tax_2;
    typeResult3(typeFullName, totalTax);
  } else if (120e6 < taxable && taxable <= 210e6) {
    const tax_1 = 60e6 * 0.05;
    const tax_2 = 60e6 * 0.1;
    const tax_3 = (taxable - 120e6) * 0.15;

    totalTax = tax_1 + tax_2 + tax_3;
    typeResult3(typeFullName, totalTax);
  } else if (210e6 < taxable && taxable <= 384e6) {
    const tax_1 = 60e6 * 0.05;
    const tax_2 = 60e6 * 0.1;
    const tax_3 = 90e6 * 0.15;
    const tax_4 = (taxable - 210e6) * 0.2;

    totalTax = tax_1 + tax_2 + tax_3 + tax_4;
    typeResult3(typeFullName, totalTax);
  } else if (384e6 < taxable && taxable <= 624e6) {
    const tax_1 = 60e6 * 0.05;
    const tax_2 = 60e6 * 0.1;
    const tax_3 = 90e6 * 0.15;
    const tax_4 = 174e6 * 0.2;
    const tax_5 = (taxable - 384e6) * 0.25;

    totalTax = tax_1 + tax_2 + tax_3 + tax_4 + tax_5;
    typeResult3(typeFullName, totalTax);
  } else if (624e6 < taxable && taxable <= 960e6) {
    const tax_1 = 60e6 * 0.05;
    const tax_2 = 60e6 * 0.1;
    const tax_3 = 90e6 * 0.15;
    const tax_4 = 174e6 * 0.2;
    const tax_5 = 240e6 * 0.25;
    const tax_6 = (taxable - 624e6) * 0.3;

    totalTax = tax_1 + tax_2 + tax_3 + tax_4 + tax_5 + tax_6;
    typeResult3(typeFullName, totalTax);
  } else if (taxable > 960e6) {
    const tax_1 = 60e6 * 0.05;
    const tax_2 = 60e6 * 0.1;
    const tax_3 = 90e6 * 0.15;
    const tax_4 = 174e6 * 0.2;
    const tax_5 = 240e6 * 0.25;
    const tax_6 = 336e6 * 0.3;
    const tax_7 = (taxable - 960e6) * 0.35;

    totalTax = tax_1 + tax_2 + tax_3 + tax_4 + tax_5 + tax_6 + tax_7;
    typeResult3(typeFullName, totalTax);
  }

  document.getElementById("pInform_3").innerHTML = result3;
}
