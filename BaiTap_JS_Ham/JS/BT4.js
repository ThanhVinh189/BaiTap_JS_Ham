function myFunction() {
  const numConnect = document.getElementById("mySelect").value;
  if (numConnect == "doanhNghiep") {
    document.getElementById("numConnect").style.display = "block";
  } else {
    document.getElementById("numConnect").style.display = "none";
  }
}

/**
 *  Bài Tập 4: Tính tiền cáp
 *  Đầu vào:
 *      - Khai báo biến mức tiền của nhà dân và doanh nghiệp cho sẵn
 *      - Lấy giá trị biến từ người dùng nhập mã khách hàng từ ô Input txtCode
 *      - Lấy giá trị biến từ người dùng nhập số kênh cao cấp từ ô Input numChannel
 *      - Lấy giá trị biến từ người dùng nhập số kết nối từ ô Input numConnect
 *  Xử lý:
 *      - Tạo biến totalCable = 0;
 *      - Tạo biến result4 có chứa thẻ <p>
 *      - Tạo hàm typeResult4 chứa biến result4 có thể thay đổi 2 giá trị biến txtCode và totalCable
 *      - Tạo hàm getType cho Dom tới mySelect để chọn loại khách hàng là nhà dân hoặc doanh nghiệp
 *      - Tạo hàm paymentTypeCable để tính tiền cáp:
 *          - if (numConnect <= 10) {
 *              const cable_1 = price_1 + price_2;
 *              const cable_2 = price_3 * numChannel;
 *              totalCable = cable_1 + cable_2;
 *            } else if (numConnect > 10) {
 *              const cable_1 = price_1 + price_2;
 *              const cable_2 = price_3 * numChannel;
 *              const cable_3 = (numConnect - 10) * 5;
 *              totalCable = cable_1 + cable_2 + cable_3;
 *            }
 *      - Tạo hàm handlePaymentCable sử dụng cấu trúc switch case để lấy các giá trị từ người dùng
 *         nhập và thay các giá trị mức tiền khi người dùng chọn loại khách hàng:
 *            - price_1 = BILL_NHA_DAN và BILL_DOANH_NGHIEP
 *            - price_2 = SERVICE_NHA_DAN và SERVICE_DOANH_NGHIEP
 *            - price_3 = CHANNEL_NHA_DAN và CHANNEL_DOANH_NGHIEP
 *            - Tạo hộp thoại nhắc người dùng ở phần default khi người dùng không chọn loại khách hàng
 *  Đầu ra:
 *      - Hiển thị kết quả result4 ra ngoài trang web vào thẻ pInform_4
 *
 *
 */

const BILL_NHA_DAN = 4.5;
const SERVICE_NHA_DAN = 20.5;
const CHANNEL_NHA_DAN = 7.5;

const BILL_DOANH_NGHIEP = 15;
const SERVICE_DOANH_NGHIEP = 75;
const CHANNEL_DOANH_NGHIEP = 50;

let totalCable = 0;
let result4 = `<p>👉Mã khách hàng: ; Tiền cáp: $${totalCable}</p>`;

function typeResult4(txtCode, totalCable) {
  result4 = `<p>👉Mã khách hàng: ${txtCode}; Tiền cáp: ${new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    }
  ).format(totalCable)} </p>`;
  return result4;
}

function getType() {
  let type = "";
  const connectChoice = document.getElementById("mySelect").value;

  if (connectChoice == "doanhNghiep") {
    type = "DOANH_NGHIEP";
  } else if (connectChoice == "nhaDan") {
    type = "NHA_DAN";
  }
  return type;
}

function paymentTypeCable(numChannel, numConnect, price_1, price_2, price_3) {
  if (numConnect <= 10) {
    const cable_1 = price_1 + price_2;
    const cable_2 = price_3 * numChannel;

    totalCable = cable_1 + cable_2;
  } else if (numConnect > 10) {
    const cable_1 = price_1 + price_2;
    const cable_2 = price_3 * numChannel;
    const cable_3 = (numConnect - 10) * 5;

    totalCable = cable_1 + cable_2 + cable_3;
  }
}

function handlePaymentCable() {
  const type = getType();

  const txtCode = document.getElementById("txtCode").value;
  const numChannel = document.getElementById("numChannel").value * 1;
  const numConnect = document.getElementById("numConnect").value * 1;

  switch (type) {
    case "NHA_DAN":
      paymentTypeCable(
        numChannel,
        numConnect,
        BILL_NHA_DAN,
        SERVICE_NHA_DAN,
        CHANNEL_NHA_DAN
      );
      typeResult4(txtCode, totalCable);
      break;
    case "DOANH_NGHIEP":
      paymentTypeCable(
        numChannel,
        numConnect,
        BILL_DOANH_NGHIEP,
        SERVICE_DOANH_NGHIEP,
        CHANNEL_DOANH_NGHIEP
      );
      typeResult4(txtCode, totalCable);
      break;
    default:
      alert("Hãy chọn loại khách hàng");
      break;
  }

  document.getElementById("pInform_4").innerHTML = result4;
}
