import "dotenv/config";
import { connectDB } from "./config/db.js";
import User from "./models/User.js";
import Article from "./models/Article.js";

const articles = [
  // ============================================================
  // 1. DU LỊCH MIỀN TÂY MÙA NÀO ĐẸP NHẤT
  // ============================================================
  {
    title: "Du lịch Miền Tây mùa nào đẹp nhất - Thời điểm lý tưởng từng tỉnh",
    content: `<h2>Tổng quan thời tiết Miền Tây</h2>
<p>Vùng Đồng bằng sông Cửu Long (ĐBSCL) nằm trong vùng nhiệt đới gió mùa, chia làm hai mùa rõ rệt: <strong>mùa khô</strong> (tháng 12 đến tháng 4) và <strong>mùa mưa</strong> (tháng 5 đến tháng 11). Mỗi mùa mang đến trải nghiệm du lịch hoàn toàn khác nhau.</p>

<h2>Mùa khô (Tháng 12 - Tháng 4)</h2>
<p>Là thời điểm lý tưởng nhất để khám phá các tỉnh biên giới và miền núi:</p>
<ul>
<li><strong>An Giang:</strong> Tham quan Núi Sam, Miếu Bà Chúa Xứ, lễ Vía Bà (tháng 4 AL). Thời tiết khô ráo, thuận lợi cho việc leo núi và tham quan rừng Tràm Trà Sư.</li>
<li><strong>Cà Mau:</strong> Thời điểm tốt nhất để đến Mũi Cà Mau và Vườn quốc gia U Minh Hạ. Nước rút, đường vào Đất Mũi thông thoáng.</li>
<li><strong>Phú Quốc:</strong> Mùa biển lặng, nước trong xanh. Hoàn hảo cho lặn biển, thưởng thức hải sản tươi sống. Giá khách sạn cao nhất năm.</li>
<li><strong>Bạc Liêu:</strong> Tham quan Vườn chim, rừng ngập mặn, bãi biển đẹp nhất.</li>
</ul>

<h2>Mùa nước nổi - Mùa mưa (Tháng 5 - Tháng 11)</h2>
<p>Đây là "mùa vàng" của du lịch sinh thái và trải nghiệm sông nước:</p>
<ul>
<li><strong>Đồng Tháp:</strong> Mùa sen nở rộ (tháng 6-8), rừng Tràm Trà Sư ngập nước xanh mướt..best time: tháng 9-11 khi nước lên cao, bèo tấm phủ kín mặt nước tạo cảnh tượng siêu thực.</li>
<li><strong>Tiền Giang:</strong> Vườn trái cây Cái Bè sai trĩu quả: măng cụt, sầu riêng, chôm chôm, vú sữa.</li>
<li><strong>Bến Tre:</strong> Du lịch sinh thái miệt vườn, ăn trái cây theo mùa, nghe đờn ca tài tử.</li>
<li><strong>Vĩnh Long:</strong> Đảo An Bình ngập tràn trái cây chín mọng.</li>
</ul>

<h2>Lịch lễ hội quan trọng trong năm</h2>
<ul>
<li><strong>Lễ Vía Bà Chúa Xứ (An Giang):</strong> Tháng 4 âm lịch, hàng triệu khách hành hương.</li>
<li><strong>Lễ hội Lồng đựng (Cần Thơ):</strong> Rằm tháng Giêng, đua thuyền.</li>
<li><strong>Ooc Om Boc (Sóc Trăng):</strong> Tháng 11 âm lịch, lễ hội Khmer lớn nhất.</li>
<li><strong>Festival hoa kiểng Sa Dec (Đồng Tháp):</strong> 27/12 - 4/1 dương lịch.</li>
<li><strong>Lễ hội đua bò (An Giang):</strong> Tháng 9 âm lịch.</li>
</ul>

<h2>Kết luận</h2>
<p>Mỗi mùa ở Miền Tây đều có nét魅力 riêng. Mùa khô phù hợp tham quan, leo núi, biển. Mùa mưa là thời điểm vàng cho du lịch sinh thái, vườn trái cây và trải nghiệm sông nước独特.</p>`,
    province: null,
    category: "kinh-nghiem",
    coverImage: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800",
    published: true,
    tags: ["mùa nào", "thời điểm", "mùa khô", "mùa mưa", "lễ hội"],
  },

  // ============================================================
  // 2. PHƯƠNG TIỆN ĐI LẠI MIỀN TÂY
  // ============================================================
  {
    title: "Phương tiện đi lại Miền Tây - Hướng dẫn di chuyển từ A đến Z",
    content: `<h2>Đi từ TP.HCM đến Miền Tây</h2>
<p>Vùng Đồng bằng sông Cửu Long nằm cách TP.HCM từ 70km đến 350km, với nhiều phương tiện di chuyển đa dạng phù hợp với mọi ngân sách.</p>

<h3>Xe khách (Limousine/Bus)</h3>
<ul>
<li><strong>Mỹ Tho (Tiền Giang):</strong> 112km, 2-2.5 giờ. Xe khách liên tỉnh từ Bến xe Miền Tây. Giá: 80.000-150.000đ.</li>
<li><strong>Bến Tre:</strong> 90km, 1.5-2 giờ. Có nhiều hãng: Phương Trang, Futa Bus. Giá: 70.000-120.000đ.</li>
<li><strong>Cần Thơ:</strong> 169km, 3-3.5 giờ. Xe limousine cao cấp. Giá: 150.000-250.000đ.</li>
<li><strong>An Giang (Châu Đốc):</strong> 230km, 4-4.5 giờ. Giá: 180.000-300.000đ.</li>
<li><strong>Cà Mau:</strong> 350km, 7-8 giờ. Giá: 250.000-400.000đ.</li>
<li><strong>Sóc Trăng:</strong> 230km, 4 giờ. Giá: 180.000-280.000đ.</li>
<li><strong>Bạc Liêu:</strong> 280km, 5-6 giờ. Giá: 200.000-350.000đ.</li>
</ul>

<h3>Tàu thủy</h3>
<ul>
<li><strong>Cần Thơ:</strong> Tàu cao tốc từ Bạch Đằng (Q.1) đi Bến Ninh Kiều. 4 giờ. Giá: 200.000-350.000đ.</li>
<li><strong>Phú Quốc:</strong> Tàu cao tốc từ Rạch Giá/Hà Tiên. 2.5-4 giờ. Giá: 250.000-350.000đ.</li>
</ul>

<h3>Máy bay</h3>
<ul>
<li><strong>Cần Thơ:</strong> Sân bay Cần Thơ, 30 phút từ HCMC. Vietnam Airlines, VietJet, Bamboo Airways. Giá: 700.000-1.500.000đ.</li>
<li><strong>Phú Quốc:</strong> Sân bay quốc tế Phú Quốc, 1 giờ từ HCMC. Giá: 500.000-2.000.000đ.</li>
<li><strong>Cà Mau:</strong> Sân bay Cà Mau, 1 giờ từ HCMC. Vietnam Airlines. Giá: 800.000-1.500.000đ.</li>
</ul>

<h2>Di chuyển nội bộ từng tỉnh</h2>
<h3>Cần Thơ</h3>
<ul>
<li>Đi chợ nổi Cái Răng: Thuê xe ôm hoặc taxi 6km, 50.000-100.000đ. Hoặc đi tàu từ bến Ninh Kiều.</li>
<li>Đi Làng Du Lịch Mỹ Khánh: Thuê xe máy hoặc grabbike, 10km.</li>
</ul>

<h3>An Giang</h3>
<ul>
<li>Châu Đốc - Núi Sam: 8km, taxi 70.000-100.000đ.</li>
<li>Rừng Tràm Trà Sư: 30km từ Châu Đốc, taxi 250.000-350.000đ.</li>
</ul>

<h3>Bến Tre</h3>
<ul>
<li>Đi xuồng ba lá: Từ 150.000-300.000đ/người cho tour nửa ngày.</li>
<li>Thuê xe đạp: 50.000-100.000đ/ngày.</li>
</ul>

<h3>Phú Quốc</h3>
<ul>
<li>Thuê xe máy: 120.000-200.000đ/ngày.</li>
<li>Xe ôm điện (E-bike): 200.000-300.000đ/ngày.</li>
<li>Thuê ô tô có tài xế: 800.000-1.500.000đ/ngày.</li>
</ul>

<h2>Mẹo tiết kiệm chi phí</h2>
<ul>
<li>Đặt vé xe khách trước 1-2 ngày qua app: vexere.com, baolau.com.</li>
<li>Thuê xe máy tại địa phương rẻ hơn đặt online 20-30%.</li>
<li>Đi theo nhóm từ 4 người để chia tiền taxi/thuê xe.</li>
<li>Tránh đi vào dịp lễ, Tết (giá tăng 50-100%).</li>
<li>Sử dụng Grab/Be tại thành phố lớn: Cần Thơ, Long Xuyên.</li>
</ul>`,
    province: null,
    category: "luu-y",
    coverImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800",
    published: true,
    tags: ["phương tiện", "di chuyển", "xe khách", "tàu thủy", "máy bay"],
  },

  // ============================================================
  // 3. CẨM NANG DU LỊCH CẦN THƠ
  // ============================================================
  {
    title: "Cẩm nang du lịch Cần Thơ - Chợ nổi, ẩm thực & trải nghiệm sông nước",
    content: `<h2>Giới thiệu Cần Thơ</h2>
<p>Cần Thơ là thành phố trực thuộc Trung ương, trung tâm kinh tế - văn hóa của vùng Đồng bằng sông Cửu Long. Với mạng lưới sông ngòi dày đặc và nền văn hóa sông nước独特, Cần Thơ thu hút hàng triệu du khách mỗi năm bởi <strong>Chợ nổi Cái Răng</strong> - một trong những chợ nổi lớn nhất thế giới.</p>

<h2>Chợ nổi Cái Răng - Biểu tượng Cần Thơ</h2>
<p>Chợ nổi Cái Răng nằm trên sông Cần Thơ, cách trung tâm thành phố 6km về phía Nam. Chợ hoạt động từ <strong>4:30 đến 8:00 sáng</strong>, với khoảng 300-350 thuyền buôn bán hàng ngày.</p>

<h3>"Cây bẹo" - Đặc trưng chợ nổi</h3>
<p>Mỗi thuyền tại chợ nổi đều treo một vật phẩm trên cột tre cao gọi là "cây bẹo" để quảng cáo hàng hóa: bó rau, quả mít, trái dừa... Đây là đặc trưng văn hóa đã được công nhận <strong>Di sản văn hóa phi vật thể quốc gia năm 2016</strong>.</p>

<h3>Trải nghiệm trên thuyền</h3>
<ul>
<li>Ăn sáng trên thuyền: hủ tiếu nóng hổi, phở, bánh cuốn, cà phê vợt</li>
<li>Mua trái cây tươi từ các thuyền buôn</li>
<li>Chụp ảnh hoàng hôn trên sông Hậu</li>
<li>Xem phong cảnh sông nước từ cầu đi bộ Ninh Kiều (dài 200m, đèn LED)</li>
</ul>

<h3>Chợ nổi Phong Dịch</h3>
<p>Nhỏ hơn và yên tĩnh hơn Cái Răng, Phong Dịch có khoảng 20 thuyền bán hàng, mang đến trải nghiệm thực tế và chân thực hơn cho du khách muốn tránh đám đông.</p>

<h2>Các điểm tham quan khác</h2>
<h3>Bến Ninh Kiều</h3>
<p>Bến Ninh Kiều nằm bên sông Hâu, là nơi lý tưởng để dạo bộ, ngắm hoàng hôn và thưởng thức ẩm thực đường phố. Cầu bộ hành LED 200m nổi bật về đêm.</p>

<h3>Chùa Ong</h3>
<p>Được người Hoa xây dựng vào cuối thế kỷ 19, chùa Ong là công trình kiến trúc tiêu biểu của cộng đồng người Hoa tại Cần Thơ.</p>

<h3>Nhà cổ Bình Thủy</h3>
<p>Nhà cổ Bình Thủy được xây dựng từ thế kỷ 19, mang kiến trúc Pháp còn sót lại tại vùng sông nước, là điểm tham quan lịch sử hấp dẫn.</p>

<h2>Ẩm thực Cần Thơ</h2>
<ul>
<li><strong>Hủ tiếu Nam Vang:</strong> Tôm, trứng cút, thịt heo, nước dùng trong</li>
<li><strong>Bún nước lèo:</strong> Món đặc trưng người Khmer, nước dùng từ mắm cá</li>
<li><strong>Cá lóc nướng trui:</strong> Cá tươi nướng trên than, chấm nước mắm pha</li>
<li><strong>Cơm tấm:</strong> Phố biến khắp nơi, từ 25.000-40.000đ/phần</li>
</ul>

<h2>Lịch trình gợi ý</h2>
<h3>1 ngày tại Cần Thơ</h3>
<ul>
<li>5:00 - Đi chợ nổi Cái Răng, ăn sáng trên thuyền</li>
<li>8:30 - Tham quan Làng Du Lịch Mỹ Khánh</li>
<li>12:00 - Ăn trưa tại nhà hàng</li>
<li>14:00 - Tham quan Thiền Viện Trúc Lâm Phương Nam</li>
<li>16:00 - Dạo phố Ninh Kiều, ngắm hoàng hôn</li>
<li>18:00 - Ăn tối, thưởng thức ẩm thực đường phố</li>
</ul>

<h3>2 ngày 1 đêm</h3>
<ul>
<li>Ngày 1: Chợ nổi + Mỹ Khánh + Vườn Cò Bằng Lăng</li>
<li>Ngày 2: Nhà cổ Bình Thủy + Chùa Ong + Chợ đêm</li>
</ul>

<h2>Chi phí tham khảo</h2>
<ul>
<li>Vé xe khách từ TP.HCM: 150.000-250.000đ khứ hồi</li>
<li>Khách sạn: 300.000-800.000đ/đêm</li>
<li>Ăn uống: 150.000-300.000đ/ngày</li>
<li>Tham quan: 50.000-200.000đ/ngày</li>
</ul>`,
    province: "Cần Thơ",
    category: "kinh-nghiem",
    coverImage: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800",
    published: true,
    tags: ["chợ nổi", "cái răng", "cần thơ", "sông nước", "hủ tiếu"],
  },

  // ============================================================
  // 4. HƯỚNG DẪN DU LỊCH PHÚ QUỐC
  // ============================================================
  {
    title: "Hướng dẫn du lịch Phú Quốc từ A đến Z - Bãi biển, ẩm thực & hoạt động",
    content: `<h2>Giới thiệu Phú Quốc</h2>
<p>Phú Quốc được mệnh danh là "hòn đảo ngọc" của Việt Nam, nằm trong vịnh Thái Lan. Với diện tích 575km², đây là hòn đảo lớn nhất Việt Nam. Từ ngày 16/06/2025, Phú Quốc trở thành <strong>đặc khu hành chính trực thuộc tỉnh An Giang</strong>.</p>
<p>Phú Quốc được tạp chí <strong>Condé Nast Traveler</strong> bình chọn là hòn đảo đẹp nhất châu Á, xếp hạng 3 toàn cầu. Năm 2027, Phú Quốc sẽ là chủ nhà <strong>APEC 2027</strong>.</p>

<h2>Các bãi biển đẹp nhất</h2>
<h3>Bãi Sao</h3>
<p>Bãi Sao nằm ở phía Nam đảo, nổi tiếng với cát trắng mịn và nước biển trong xanh. Đây là bãi biển đẹp nhất Phú Quốc, có nhiều hoạt động thể thao dưới nước: lướt ván, kayak, dù bay.</p>

<h3>Bãi Dài</h3>
<p>Bãi Dài dài 20km ở phía Tây Bắc, nổi tiếng với hoàng hôn đẹp nhất đảo. Nước biển ở đây lặng hơn, phù hợp cho bơi lội và thư giãn.</p>

<h3>Bãi Khem</h3>
<p>Nằm ở phía Nam, Bãi Khem là bãi biển hoang sơ, ít người biết, phù hợp cho những ai muốn tìm kiếm sự riêng tư.</p>

<h3>Starfish Beach (Rạch Vẹm)</h3>
<p>Điểm nhấn: Sao biển đỏ và plankton phát quang về đêm - trải nghiệm độc đáo chỉ có ở Phú Quốc.</p>

<h2>Các hoạt động không thể bỏ lỡ</h2>
<ul>
<li><strong>Cáp treo Hòn Thơm:</strong> Cable car 3 dây dài nhất thế giới (7.999km), ngắm toàn cảnh đảo từ trên cao.</li>
<li><strong>VinWonders:</strong> Công viên giải trí quy mô lớn với nhiều trò chơi cảm giác mạnh.</li>
<li><strong>Vinpearl Safari:</strong> Vườn thú bán hoang dã lớn nhất Việt Nam.</li>
<li><strong>Dinh Cậu:</strong> Ngôi đền linh thiêng, nơi ngư dân cầu bình an ra khơi.</li>
<li><strong>Chợ đêm Dương Đông:</strong> Ẩm thực đường phố, hải sản tươi sống, quà lưu niệm.</li>
<li><strong>Nông trường hồ tiêu:</strong> Tour tham quan, tìm hiểu quy trình trồng hồ tiêu.</li>
<li><strong>Suối Tranh, Suối Đá Bàn:</strong> Trekking, bơi suối trong lành.</li>
<li><strong>Nhà tù Phú Quốc:</strong> Di tích lịch sử quốc gia, tìm hiểu lịch sử chiến tranh.</li>
</ul>

<h2>Ẩm thực Phú Quốc</h2>
<ul>
<li><strong>Bún kèn:</strong> Món Campuchia, nước dừa + cá khô, hương vị độc đáo</li>
<li><strong>Cá sòng nướng:</strong> Cá tươi nướng nguyên con, chấm muối tiêu chanh</li>
<li><strong>Gỏi cá trích:</strong> Cá trích sống trộn với hành tây, nước mắm chua ngọt</li>
<li><strong>Hàu nướng:</strong> Hàu tươi nướng mỡ hành, phô mai</li>
<li><strong>Sim wine:</strong> Rượu sim đặc sản, có nhiều tại vườn sim</li>
<li><strong>Nước mắm Phú Quốc:</strong> Made from cơm ferment, nổi tiếng thế giới</li>
</ul>

<h2>Thời điểm lý tưởng</h2>
<ul>
<li><strong>Mùa khô (Tháng 11 - Tháng 4):</strong> Thời tiết đẹp nhất, biển lặng, nước trong xanh. Giá khách sạn cao nhất.</li>
<li><strong>Mùa mưa (Tháng 5 - Tháng 10):</strong> Mưa rải rác, giá rẻ hơn, ít du khách hơn.</li>
</ul>

<h2>Chi phí tham khảo</h2>
<ul>
<li>Vé máy bay từ TP.HCM: 500.000-2.000.000đ khứ hồi</li>
<li>Khách sạn: 500.000-3.000.000đ/đêm</li>
<li>Ăn uống: 200.000-500.000đ/ngày</li>
<li>Vui chơi: 200.000-500.000đ/ngày</li>
</ul>`,
    province: "Kiên Giang",
    category: "kinh-nghiem",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    published: true,
    tags: ["phú quốc", "bãi biển", "cáp treo", "hải sản", "bãi sao"],
  },

  // ============================================================
  // 5. KINH NGHIỆM DU LỊCH ĐỒNG THÁP
  // ============================================================
  {
    title: "Kinh nghiệm du lịch Đồng Tháp - Sen hồng, Tràm Chim & Làng hoa Sa Dec",
    content: `<h2>Giới thiệu Đồng Tháp</h2>
<p>Đồng Tháp được mệnh danh là "vùng đất sen hồng" với cảnh quan thiên nhiên tuyệt đẹp và nền văn hóa đặc sắc. Đây là tỉnh có <strong>Vườn quốc gia Tràm Chim</strong> - khu Ramsar thế giới thứ 2.000 được UNESCO công nhận năm 2012, và <strong>Làng hoa Sa Dec</strong> - làng hoa lớn nhất vùng Đồng bằng sông Cửu Long.</p>

<h2>Vườn quốc gia Tràm Chim</h2>
<p>Tràm Chim là một trong những khu Ramsar thế giới quan trọng nhất tại Việt Nam với diện tích <strong>75,88km²</strong>, là vùng đất ngập nước Plain of Reeds còn sót lại.</p>

<h3>Động thực vật</h3>
<ul>
<li>Hơn 230 loài chim, trong đó có <strong>sếu đầu đỏ</strong> (sarus crane) - loài chim quý hiếm</li>
<li>Hàng trăm loài thực vật, đặc biệt là sen và cỏ</li>
<li>Cá, tôm, cua phong phú</li>
</ul>

<h3>Tuyến tham quan</h3>
<ul>
<li><strong>Tuyến ngắn (12km):</strong> 1.5 giờ, chiêm ngưỡng vẻ đẹp cơ bản của rừng tràm</li>
<li><strong>Tuyến dài (21km):</strong> 3 giờ, trải nghiệm toàn diện hệ sinh thái</li>
</ul>

<h3>Thời điểm tốt nhất</h3>
<ul>
<li><strong>Tháng 2:</strong> Chim về tụ tập, số lượng lớn nhất trong năm</li>
<li><strong>Mùa nước nổi (Tháng 9-11):</strong> Nước lên cao, bèo tấm phủ xanh mặt nước, tạo cảnh tượng siêu thực</li>
</ul>

<h2>Làng hoa Sa Dec</h2>
<p>Sa Dec là trung tâm hoa kiểng của vùng Đồng bằng sông Cửu Long với <strong>2.300 hộ dân</strong> làm nghề trồng hoa, diện tích <strong>800ha</strong> và hơn <strong>2.000 giống hoa</strong> khác nhau.</p>

<h3>Điểm tham quan</h3>
<ul>
<li><strong>Làng hoa Tet:</strong> Tập trung nhiều loại hoa tet: mai vàng, hoa giấy, cúc</li>
<li><strong>Vườn hồng Sa Dec:</strong> 50+ giống hồng, xuất khẩu sang châu Âu</li>
<li><strong>Homestay Flower & Frog, Bamboo House:</strong> Trải nghiệm cuộc sống nông thôn</li>
</ul>

<h3>Festival hoa kiểng Sa Dec</h3>
<p>Diễn ra từ <strong>27/12 đến 4/1</strong> hàng năm với 30+ hoạt động văn hóa, triển lãm hoa kiểng, du lịch sinh thái.</p>

<h2>Các điểm tham quan khác</h2>
<h3>Nhà cổ Huỳnh Thuy Lê</h3>
<p>Nhà cổ Huỳnh Thuy Lê nằm tại 255A Nguyễn Hue, Sa Dec, mang kiến trúc Pháp từ đầu thế kỷ 20. Đây là di tích lịch sử nổi tiếng, gắn với câu chuyện tình giữa Huỳnh Thuy Lê và Marguerite Duras.</p>

<h3>Go Tháp - Văn hóa Óc Eo</h3>
<p>Quần thể Go Tháp với Tháp 10 tầng, đền Bà Chúa Xú và di tích văn hóa Óc Eo hơn 1.500 năm tuổi, là minh chứng cho sự hưng thịnh của vương quốc Phù Nam.</p>

<h3>Xeo Quýt</h3>
<p>Xeo Quýt là căn cứ cách mạng của tỉnh ủy Đồng Tháp trong thời kỳ chống Pháp, nay là khu du lịch sinh thái với đường mòn through rừng ngập nước.</p>

<h2>Ẩm thực Đồng Tháp</h2>
<p>Đồng Tháp nổi tiếng với <strong>hơn 200 món từ sen</strong>: chè sen, xôi sen, cá bọc lá sen nướng, gỏi ngó sen... Ngoài ra còn có lẩu mắm, hủ tiếu Sa Dec, chả cá Thuận Hưng, mứt hạt bông (gai).</p>

<h2>Lịch trình gợi ý 2 ngày 1 đêm</h2>
<ul>
<li><strong>Ngày 1:</strong> Sa Dec - Làng hoa - Nhà cổ - Go Tháp</li>
<li><strong>Ngày 2:</strong> Tràm Chim - Xem chim - Về TP.HCM</li>
</ul>`,
    province: "Đồng Tháp",
    category: "kinh-nghiem",
    coverImage: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800",
    published: true,
    tags: ["đồng tháp", "sen", "tràm chim", "sa dec", "hoa"],
  },

  // ============================================================
  // 6. DU LỊCH CÀ MAU
  // ============================================================
  {
    title: "Du lịch Cà Mau - Rừng ngập mặn, Mũi Cà Mau & ẩm thực độc đáo",
    content: `<h2>Giới thiệu Cà Mau</h2>
<p>Cà Mau là tỉnh cực Nam của Việt Nam, nổi tiếng với <strong>Mũi Cà Mau</strong> - điểm cực nam đất liền (tọa độ GPS 0001), nơi bạn có thể ngắm mặt trời mọc ở biển Đông và lặn ở biển Tây cùng một ngày. Cà Mau còn sở hữu <strong>rừng ngập mặn lớn thứ hai thế giới</strong> (sau Amazon) và được UNESCO công nhận là <strong>Khu dự trữ sinh quyển thế giới</strong> với diện tích 42.000ha.</p>

<h2>Mũi Cà Mau</h2>
<p>Mũi Cà Mau nằm tại xã Đất Mũi, huyện Ngọc Hiển, là cực Nam đất liền Việt Nam. Tại đây có:</p>
<ul>
<li><strong>Ký hiệu tàu ra khơi:</strong> Biểu tượng nơi ngư dân ra khơi đánh bắt</li>
<li><strong>Cột cờ Đất Mũi:</strong> Cao 20m, treo cờ Tổ quốc</li>
<li><strong>Tọa độ GPS 0001:</strong> Điểm mốc cực Nam</li>
<li><strong>Cầu MtoolStrip:</strong> Cầu vượt biển lớn nhất Đông Nam Á</li>
</ul>

<h2>Vườn quốc gia Mũi Cà Mau</h2>
<p>Vườn quốc gia Mũi Cà Mau có diện tích <strong>42.000ha</strong>, là khu Ramsar thế giới. Hệ sinh thái đa dạng với rừng ngập mặn, đầm lầy, cồn cát và các loài động thực vật quý hiếm.</p>

<h2>Rừng U Minh Hạ</h2>
<p>Rừng U Minh Hạ là khu rừng tràm nguyên sinh còn sót lại, nổi tiếng với:</p>
<ul>
<li>Đi thuyền xuyên rừng tràm ngập nước</li>
<li>Bắt ong lấy mật ong rừng U Minh - đặc sản nổi tiếng</li>
<li>Câu cá, thưởng thức ẩm thực rừng</li>
<li>Khám phá làng chài ven rừng</li>
</ul>

<h2>Các đảo và điểm tham quan</h2>
<h3>Hòn Đá Bạc</h3>
<p>Hòn Đá Bạc là đảo đá có niên đại 180 triệu năm tuổi, với cảnh quan thiên nhiên hùng vĩ và nhiều loài sinh vật biển.</p>

<h3>Hòn Khoai</h3>
<p>Hòn Khoai là đảo nhỏ, nơi gắn với di tích lịch sử Phan Ngọc Hiến - người đã khởi nghĩa chống thực dân Pháp. Hiện có hải đăng trên đảo.</p>

<h3>Vườn chim Ngọc Hiển</h3>
<p>Vườn chim Ngọc Hiển là nơi tập trung nhiều loài chim quý, là điểm đến yêu thích của những người yêu thiên nhiên.</p>

<h2>Ẩm thực Cà Mau</h2>
<ul>
<li><strong>Cua rang me:</strong> Cua tươi rang sốt me chua ngọt, đặc sản nổi tiếng</li>
<li><strong>Cua艮 Uttamo:</strong> Cua艮 nướng muối ớt, vị ngọt tự nhiên</li>
<li><strong>Ốc len dừa nước:</strong> Ốc len ăn lá dừa nước, chế biến đơn giản nhưng ngon</li>
<li><strong>Ốc simultaneously:</strong> Ốc simultaneously nướng mỡ hành</li>
<li><strong>Bone pú:</strong> Bone pú nướng</li>
<li><strong>Khô cá lóc:</strong> Cá lóc phơi khô, chế biến nhiều món</li>
<li><strong>Chả giấm:</strong> Chả giấm đặc sản</li>
</ul>

<h2>Lịch trình gợi ý</h2>
<h3>2 ngày 1 đêm</h3>
<ul>
<li><strong>Ngày 1:</strong> TP.HCM → Cà Mau → U Minh Hạ (thuyền xuyên rừng) → Ăn trưa → Đất Mũi → Hoàng hôn</li>
<li><strong>Ngày 2:</strong> Mũi Cà Mau → Hòn Khoai → Chợ Cà Mau → Về TP.HCM</li>
</ul>

<h3>3 ngày 2 đêm</h3>
<ul>
<li><strong>Ngày 1:</strong> TP.HCM → Cà Mau → U Minh Hạ</li>
<li><strong>Ngày 2:</strong> Đất Mũi → Mũi Cà Mau → Cột cờ</li>
<li><strong>Ngày 3:</strong> Hòn Đá Bạc → Hòn Khoai → Về</li>
</ul>`,
    province: "Cà Mau",
    category: "kinh-nghiem",
    coverImage: "https://images.unsplash.com/photo-1441974231530-c3447bc09b95?w=800",
    published: true,
    tags: ["cà mau", "mũi cà mau", "rừng ngập mặn", "u minh", "hòn khoai"],
  },

  // ============================================================
  // 7. CẨM NANG DU LỊCH SÓC TRĂNG
  // ============================================================
  {
    title: "Cẩm nang du lịch Sóc Trăng - Chùa Dơi, lễ hội Khmer & ẩm thực",
    content: `<h2>Giới thiệu Sóc Trăng</h2>
<p>Sóc Trăng là tỉnh có tên tiếng Khmer là <strong>Srok Kh'leang</strong>, có nghĩa "nơi cất giữ bạc". Đây là tỉnh có sự giao thoa văn hóa giữa ba dân tộc Kinh, Khmer và Hoa, với <strong>hơn 200 ngôi chùa cổ</strong> mang kiến trúc đặc trưng.</p>

<h2>Các ngôi chùa nổi tiếng</h2>
<h3>Chùa Dơi (Mahatup)</h3>
<p>Chùa Dơi được công nhận là <strong>Di tích nghệ thuật quốc gia năm 1999</strong>. Chùa có hàng ngàn con dơi treo mình trên các cành cây xung quanh, tạo nên cảnh tượng độc đáo. Dơi ở đây được coi là linh vật, không ai bắt hay xua đuổi.</p>

<h3>Chùa Kh'leang</h3>
<p>Chùa Kh'leang có lịch sử <strong>hơn 500 năm tuổi</strong>, là một trong những ngôi chùa Khmer cổ nhất vùng Đồng bằng sông Cửu Long với kiến trúc Campuchia đặc trưng.</p>

<h3>Chùa Som Rong</h3>
<p>Chùa Som Rong nổi tiếng với <strong>Phật tượng nằm dài 63m</strong>, là một trong những Phật tượng lớn nhất vùng Đồng bằng sông Cửu Long. Kiến trúc Khmer hiện đại, màu vàng rực rỡ.</p>

<h3>Chùa Đất (Clay Pagoda)</h3>
<p>Chùa Đất nổi tiếng với <strong>Phật tượng đất sét</strong> và những ngọn nến cháy liên tục <strong>hơn 60 năm</strong> không bao giờ tắt.</p>

<h3>Chùa Chen Kiêu (Sa Lon)</h3>
<p>Chùa Chen Kiêu có kiến trúc Phật giáo Theravada, với many shrine và tượng Phật được trang trí công phu.</p>

<h2>Chợ nổi Ngã Năm</h2>
<p>Chợ nổi Ngã Năm nằm tại giao điểm của <strong>5 con sông</strong>, là nơi giao thương sầm uất từ nhiều thế kỷ. Chợ hoạt động từ 4:00 đến 8:00 sáng, với nhiều thuyền bán trái cây, rau củ và ẩm thực đường phố.</p>

<h2>Lễ hội Ooc Om Boc</h2>
<p>Lễ hội Ooc Om Boc là <strong>lễ hội Khmer lớn nhất</strong> tại Sóc Trăng, diễn ra vào tháng 11 âm lịch. Các hoạt động chính:</p>
<ul>
<li><strong>Đua ghe Ngo:</strong> Cuộc đua thuyền truyền thống giữa các phum sóc</li>
<li><strong>Lễ thả đèn nước:</strong> Thả đèn trên sông cầu nguyện</li>
<li><strong>Nghệ thuật múa và nhạc cụ Khmer</strong></li>
<li><strong>Thưởng thức ẩm thực Khmer</strong></li>
</ul>

<h2>Ẩm thực Sóc Trăng</h2>
<ul>
<li><strong>Bánh pía:</strong> Đặc sản nổi tiếng nhất, nhân sầu riêng, đậu xanh, trứng muối. Có thể mua tại các cơ sở bánh pía truyền thống.</li>
<li><strong>Bún nước lèo:</strong> Món ăn đặc trưng của người Khmer, nước dùng từ mắm cá, thịt heo, rau thơm.</li>
<li><strong>Bánh xèo:</strong> Bánh xèo nhân tôm, thịt, ăn kèm rau sống và nước chấm chua ngọt.</li>
<li><strong>Gỏi cá thu:</strong> Cá thu sống trộn với gia vị, đặc sản ven biển.</li>
</ul>

<h2>Lịch trình gợi ý</h2>
<h3>1 ngày</h3>
<ul>
<li>Sáng: Chùa Dơi → Chùa Kh'leang</li>
<li>Trưa: Ăn bún nước lèo, bánh pía</li>
<li>Chiều: Chợ nổi Ngã Năm → Chùa Som Rong</li>
</ul>

<h3>2 ngày 1 đêm</h3>
<ul>
<li><strong>Ngày 1:</strong> Các chùa → Chợ nổi → Ẩm thực Khmer</li>
<li><strong>Ngày 2:</strong> Bánh pía → Nhà thờ towers → Về</li>
</ul>`,
    province: "Sóc Trăng",
    category: "kinh-nghiem",
    coverImage: "https://images.unsplash.com/photo-1528164344705-475426870197?w=800",
    published: true,
    tags: ["sóc trăng", "chùa dơi", "khmer", "bánh pía", "lễ hội"],
  },

  // ============================================================
  // 8. DU LỊCH BẠC LIÊU
  // ============================================================
  {
    title: "Du lịch Bạc Liêu - Vườn chim, rừng ngập mặn & bãi biển",
    content: `<h2>Giới thiệu Bạc Liêu</h2>
<p>Bạc Liêu là tỉnh ven biển phía Đông của vùng Đồng bằng sông Cửu Long, cách TP.HCM khoảng <strong>280km</strong>. Bạc Liêu nổi tiếng với hình tượng "Cậu Vàng" - nhân vật quen thuộc trong nền văn hóa Việt Nam, cùng với <strong>54km đường biển</strong> dài nhất vùng Đồng bằng sông Cửu Long và <strong>5.500ha rừng ngập mặn</strong>.</p>

<h2>Các điểm tham quan</h2>
<h3>Tháp Vĩnh Hưng</h3>
<p>Tháp Vĩnh Hưng là di tích lịch sử được xây dựng từ năm 1911, là công trình kiến trúc cổ còn giữ nguyên vẻ đẹp qua nhiều thế kỷ.</p>

<h3>Nhà thờ Vĩnh Hưng</h3>
<p>Nhà thờ Vĩnh Hưng mang kiến trúc cổ kính, là điểm đến tâm linh吸引 hàng trăm du khách mỗi năm.</p>

<h3>Chùa Xiêm Can</h3>
<p>Chùa Xiêm Can là một trong những ngôi chùa Phật giáo lớn nhất Bạc Liêu, với kiến trúc đặc trưng.</p>

<h3>Vườn chim Bạc Liêu</h3>
<p>Vườn chim Bạc Liêu là nơi cư trú của <strong>hơn 100 loài chim</strong>, bao gồm nhiều loài quý hiếm. Đây là điểm đến yêu thích của những người yêu thiên nhiên và nhiếp ảnh.</p>

<h3>Rừng ngập mặn</h3>
<p>Bạc Liêu có <strong>5.500ha rừng ngập mặn</strong>, là hệ sinh thái quan trọng bảo vệ bờ biển và là nơi cư trú của nhiều loài sinh vật. Du khách có thể:</p>
<ul>
<li>Đi thuyền xuyên rừng ngập mặn</li>
<li>Câu cá dưới rừng đước</li>
<li>Tham quan trang trại nuôi tôm</li>
<li>Chứng kiến cảnh quan thiên nhiên độc đáo</li>
</ul>

<h3>Bãi biển Bạc Liêu</h3>
<p>Bãi biển Bạc Liêu dài 54km, có bờ cát thoai thoải, nước biển trong xanh. Hoạt động phổ biến: bơi lội, lướt sóng, câu mực đêm.</p>

<h3>Cánh đồng điện gió</h3>
<p>Bạc Liêu có cánh đồng điện gió hiện đại, là điểm check-in yêu thích của du khách trẻ với view cánh quạt gió khổng lồ bên biển.</p>

<h2>Ẩm thực Bạc Liêu</h2>
<ul>
<li><strong>Bún riêu cua:</strong> Bún riêu cua đặc trưng với nước dùng ngọt từ cua đồng</li>
<li><strong>Gỏi cá:</strong> Cá tươi sống trộn gia vị, đặc sản ven biển</li>
<li><strong>Ốc xào tỏi:</strong> Ốc tươi xào với tỏi, ớt, sả</li>
<li><strong>Hải sản tươi sống:</strong> Tôm, cua, mực, sò huyết tại các quán ven biển</li>
</ul>

<h2>Lịch trình gợi ý</h2>
<h3>2 ngày 1 đêm</h3>
<ul>
<li><strong>Ngày 1:</strong> Nhà Công Tử → Tháp Vĩnh Hưng → Vườn chim → Bãi biển</li>
<li><strong>Ngày 2:</strong> Rừng ngập mặn → Chợ Bạc Liêu → Về TP.HCM</li>
</ul>

<h3>3 ngày 2 đêm</h3>
<ul>
<li><strong>Ngày 1:</strong> Nhà Công Tử → Tháp → Vườn chim</li>
<li><strong>Ngày 2:</strong> Rừng ngập mặn → Bãi biển → Cánh đồng điện gió</li>
<li><strong>Ngày 3:</strong> Chợ Bạc Liêu → Đặc sản → Về</li>
</ul>`,
    province: "Bạc Liêu",
    category: "kinh-nghiem",
    coverImage: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=800",
    published: true,
    tags: ["bạc liêu", "vườn chim", "rừng ngập mặn", "bãi biển", "điện gió"],
  },

  // ============================================================
  // 9. DU LỊCH TIỀN GIANG
  // ============================================================
  {
    title: "Du lịch Tiền Giang - Cái Bè, Mỹ Tho & trải nghiệm sông nước",
    content: `<h2>Giới thiệu Tiền Giang</h2>
<p>Tiền Giang là cửa ngõ phía Tây của TP.HCM, cách thành phố khoảng <strong>112km</strong>. Đây là tỉnh có nền văn hóa sông nước独特 với <strong>Chợ nổi Cái Bè</strong> - một trong những chợ nổi lâu đời nhất vùng Đồng bằng sông Cửu Long, và <strong>Mỹ Tho</strong> - cửa ngõ vào Đồng bằng sông Cửu Long.</p>

<h2>Chợ nổi Cái Bè</h2>
<p>Chợ nổi Cái Bè được thành lập vào khoảng <strong>thế kỷ 18 (1732)</strong>, là một trong những chợ nổi cổ xưa nhất vùng Đồng bằng sông Cửu Long. Hiện nay, chợ chỉ còn khoảng <strong>10 thuyền</strong> hoạt động, nhưng vẫn giữ được vẻ đẹp và không khí truyền thống.</p>

<h3>Hoạt động tại chợ</h3>
<ul>
<li>Hoạt động từ <strong>2:00 đến 8:00 sáng</strong></li>
<li>Ăn sáng trên thuyền: hủ tiếu, phở, cà phê</li>
<li>Mua trái cây tươi: măng cụt, sầu riêng, vú sữa</li>
<li>Chụp ảnh phong cảnh sông nước</li>
</ul>

<h2>Tân Phong Island</h2>
<p>Tân Phong Island nằm giữa sông Tiền, là điểm đến yêu thích với:</p>
<ul>
<li>Đạp xe qua các vườn orchids</li>
<li>Đi canoe len lỏi qua kênh nhỏ</li>
<li>Thưởng thức trái cây tại vườn</li>
<li>Nghe đờn ca tài tử</li>
</ul>

<h2>Nhà cổ Ba Kiệt</h2>
<p>Nhà cổ Ba Kiệt là kiến trúc cổ từ thế kỷ 19, vẫn giữ được vẻ đẹp truyền thống với gỗ quý và chạm trổ tinh xảo.</p>

<h2>Chùa Vĩnh Tràng</h2>
<p>Chùa Vĩnh Tràng là <strong>chùa lớn nhất Tiền Giang</strong>, được xây dựng từ năm 1849, với kiến trúc kết hợp Phật giáo, Công giáo và tín ngưỡng dân gian.</p>

<h2>Mỹ Tho</h2>
<p>Mỹ Tho là thành phố lớn nhất Tiền Giang, là cửa ngõ vào Đồng bằng sông Cửu Long. Tại Mỹ Tho:</p>
<ul>
<li>Bến tàu du lịch</li>
<li>Ăn hủ tiếu Mỹ Tho đặc trưng</li>
<li>Tham quan Chợ Mỹ Tho</li>
<li>Đi Cù lao Thới Sơn ăn trái cây</li>
</ul>

<h2>Cù lao Thới Sơn</h2>
<p>Cù lao Thới Sơn là nơi lý tưởng để:</p>
<ul>
<li>Ăn trái cây tại vườn: măng cụt, chôm chôm, bưởi</li>
<li>Nghe đờn ca tài tử</li>
<li>Đi xuồng ba lá</li>
<li>Tham quan trại ong</li>
</ul>

<h2>Ẩm thực Tiền Giang</h2>
<ul>
<li><strong>Hủ tiếu Mỹ Tho:</strong> Đặc trưng với nước dùng trong, tôm, thịt, trứng cút</li>
<li><strong>Bánh tráng缘 dừa:</strong> Bánh tráng dẻo, thơm mùi dừa</li>
<li><strong>Bánh Flan:</strong> Bánh Flan truyền thống, mềm mịn</li>
<li><strong>Trái cây theo mùa:</strong> Măng cụt (tháng 4-6), sầu riêng (tháng 5-7), vú sữa (tháng 9-11)</li>
</ul>

<h2>Lịch trình gợi ý</h2>
<h3>1 ngày từ TP.HCM</h3>
<ul>
<li>7:00 - Khởi hành từ TP.HCM</li>
<li>9:00 - Chợ nổi Cái Bè, ăn sáng trên thuyền</li>
<li>11:00 - Cù lao Thới Sơn, ăn trái cây</li>
<li>13:00 - Ăn trưa</li>
<li>15:00 - Chùa Vĩnh Tràng</li>
<li>17:00 - Về TP.HCM</li>
</ul>

<h3>2 ngày 1 đêm</h3>
<ul>
<li><strong>Ngày 1:</strong> Cái Bè → Thới Sơn → Mỹ Tho → Nghe đờn ca tài tử</li>
<li><strong>Ngày 2:</strong> Chùa Vĩnh Tràng → Nhà cổ → Về</li>
</ul>`,
    province: "Tiền Giang",
    category: "kinh-nghiem",
    coverImage: "https://images.unsplash.com/photo-1464226184883-fa280b87c399?w=800",
    published: true,
    tags: ["tiền giang", "cái bè", "mỹ tho", "chợ nổi", "đờn ca tài tử"],
  },

  // ============================================================
  // 10. DU LỊCH TRÀ VINH
  // ============================================================
  {
    title: "Du lịch Trà Vinh - 300+ chùa Khmer & vườn trái cây",
    content: `<h2>Giới thiệu Trà Vinh</h2>
<p>Trà Vinh là tỉnh có sự đa dạng văn hóa đặc biệt với <strong>hơn 300 ngôi chùa</strong> thuộc ba truyền thống Phật giáo: Khmer, Kinh và Hoa. Đây cũng là tỉnh có nhiều di tích lịch sử với <strong>105 di tích</strong>, trong đó 8 bảo tàng quốc gia và 26 di tích tỉnh.</p>

<h2>Các ngôi chùa nổi tiếng</h2>
<h3>Chùa Vam Ray</h3>
<p>Chùa Vam Ray có lịch sử <strong>hơn 600 năm tuổi</strong>, là một trong những ngôi chùa Khmer cổ nhất vùng Đồng bằng sông Cửu Long. Chùa cao 54m, được dát vàng ròng, là công trình kiến trúc Phật giáo Theravada đặc sắc.</p>

<h3>Chùa Sam Pua</h3>
<p>Chùa Sam Pua là <strong>ngôi chùa cổ nhất tại Cầu Ke</strong>, với bia đá xanh nặng 500kg. Chùa mang kiến trúc Khmer truyền thống, là nơi thờ cúng quan trọng của đồng bào Khmer.</p>

<h3>Chùa Phno Don</h3>
<p>Chùa Phno Don được xây dựng từ năm 1677, là một trong những ngôi chùa cổ nhất Trà Vinh. Chùa nổi tiếng với kiến trúc độc đáo và tượng Phật chạm khắc tinh xảo.</p>

<h2>Đảo Tân Quy</h2>
<p>Đảo Tân Quy nằm giữa sông Tiền và sông Hậu, là điểm đến yêu thích với:</p>
<ul>
<li>Vườn trái cây theo mùa: măng cụt, sầu riêng, chôm chôm</li>
<li>Đạp xe qua các con đường mòn</li>
<li>Tham quan làng nghề truyền thống</li>
<li>Thưởng thức ẩm thực địa phương</li>
</ul>

<h2>Ẩm thực Trà Vinh</h2>
<ul>
<li><strong>Bún nước lèo:</strong> Món đặc trưng của người Khmer tại Trà Vinh</li>
<li><strong>Bánh xèo:</strong> Bánh xèo nhân tôm, thịt, ăn kèm rau sống</li>
<li><strong>Trái cây theo mùa:</strong> Măng cụt, sầu riêng, bưởi</li>
<li><strong>Các món từ dừa:</strong> Cơm dừa, kẹo dừa</li>
</ul>

<h2>Lịch trình gợi ý</h2>
<h3>1 ngày</h3>
<ul>
<li>Sáng: Chùa Vam Ray → Chùa Sam Pua</li>
<li>Trưa: Ăn bún nước lèo, bánh xèo</li>
<li>Chiều: Đảo Tân Quy → Vườn trái cây</li>
</ul>

<h3>2 ngày 1 đêm</h3>
<ul>
<li><strong>Ngày 1:</strong> Các chùa → Ẩm thực Khmer</li>
<li><strong>Ngày 2:</strong> Đảo Tân Quy → Vườn trái cây → Về</li>
</ul>`,
    province: "Trà Vinh",
    category: "kinh-nghiem",
    coverImage: "https://images.unsplash.com/photo-1528164344705-475426870197?w=800",
    published: true,
    tags: ["trà vinh", "chùa khmer", "vam ray", "tân quy", "vườn trái cây"],
  },

  // ============================================================
  // 11. DU LỊCH LONG AN
  // ============================================================
  {
    title: "Du lịch Long An - Tân Lập, Đồng Tháp Mười & rừng tràm",
    content: `<h2>Giới thiệu Long An</h2>
<p>Long An là cửa ngõ kết nối Đông Nam Bộ với vùng Đồng bằng sông Cửu Long, nằm cách TP.HCM khoảng 50-80km tùy khu vực. Đây là tỉnh có <strong>Vườn thực vật Đồng Tháp Mười</strong> với diện tích 1.000ha rừng tràm nguyên sinh và nhiều khu du lịch sinh thái hấp dẫn.</p>

<h2>Tân Lập - Làng nổi</h2>
<p>Tân Lập là khu du lịch sinh thái nằm trong rừng tràm nguyên sinh, nổi tiếng với:</p>
<ul>
<li><strong>Đi xuồng xuyên rừng tràm:</strong> len lỏi qua các rạch nước, chiêm ngưỡng cảnh quan thiên nhiên</li>
<li><strong>Tháp quan sát:</strong> cao 38m, view toàn cảnh rừng tràm từ trên cao</li>
<li><strong>Cầu treo:</strong>穿过 rừng tràm, trải nghiệm cảm giác mạnh</li>
<li><strong>Đầm sen:</strong> nở rộ vào mùa hè (tháng 6-8)</li>
</ul>

<h2>Đồng Tháp Mười</h2>
<p>Đồng Tháp Mười là vùng đất ngập nước nổi tiếng với:</p>
<ul>
<li><strong>Vườn thực vật Đồng Tháp Mười:</strong> 1.000ha, tinh dầu, thảo dược, thực vật quý</li>
<li><strong>Tràm tràm nguyên sinh:</strong> Hệ sinh thái đa dạng</li>
<li><strong>Hồ sen:</strong> Sen nở rộ vào mùa hè</li>
<li><strong>Làng bè trên sông:</strong> Cuộc sống sông nước独特</li>
</ul>

<h2>Lang Sen</h2>
<p>Lang Sen là khu bảo tồn thiên nhiên, nơi cư trú của nhiều loài chim quý, đặc biệt là：</p>
<ul>
<li>Chim le le, vịt trời</li>
<li>Hạc trắng</li>
<li>Cò, vạc</li>
</ul>

<h2>Địa đạo Long An</h2>
<p>Địa đạo Long An là di tích cách mạng quan trọng trong thời kỳ kháng chiến, nay là điểm tham quan lịch sử với nhiều tunnel và hiện vật.</p>

<h2>Ẩm thực Long An</h2>
<ul>
<li><strong>Gà nướng mọi:</strong> Gà ta nướng nguyên con, thịt mềm, da giòn</li>
<li><strong>Cá lóc nướng trui:</strong> Cá lóc tươi nướng trên than</li>
<li><strong>Rau muống Đồng Tháp Mười:</strong> Rau tươi, giòn, ngọt</li>
<li><strong>Cơm cháy:</strong> Cơm cháy chảo với nước mắm pha</li>
</ul>

<h2>Lịch trình gợi ý</h2>
<h3>1 ngày từ TP.HCM</h3>
<ul>
<li>7:00 - Khởi hành từ TP.HCM</li>
<li>8:30 - Tân Lập - Xuồng xuyên rừng</li>
<li>11:00 - Ăn trưa</li>
<li>13:00 - Đồng Tháp Mười - Vườn thực vật</li>
<li>15:00 - Về TP.HCM</li>
</ul>

<h3>2 ngày 1 đêm</h3>
<ul>
<li><strong>Ngày 1:</strong> Tân Lập → Đồng Tháp Mười → Lang Sen</li>
<li><strong>Ngày 2:</strong> Địa đạo Long An → Về</li>
</ul>`,
    province: "Long An",
    category: "kinh-nghiem",
    coverImage: "https://images.unsplash.com/photo-1441974231530-c3447bc09b95?w=800",
    published: true,
    tags: ["long an", "tân lập", "đồng tháp mười", "rừng tràm", "sinh thái"],
  },

  // ============================================================
  // 12. DU LỊCH VĨNH LONG
  // ============================================================
  {
    title: "Du lịch Vĩnh Long - Vườn trái cây & đảo nổi sông nước",
    content: `<h2>Giới thiệu Vĩnh Long</h2>
<p>Vĩnh Long nằm giữa hai con sông lớn là <strong>Sông Tiền</strong> và <strong>Sông Hậu</strong>, tạo nên cảnh quan sông nước独特. Đây là tỉnh tiên phong trong phát triển du lịch cộng đồng với nhiều đảo và cù lao nổi tiếng.</p>

<h2>Đảo An Bình</h2>
<p>Đảo An Bình là điểm đến yêu thích với:</p>
<ul>
<li><strong>Vườn trái cây:</strong> Sầu riêng, măng cụt, bưởi, chôm chôm theo mùa</li>
<li><strong>Homestay:</strong> Trải nghiệm cuộc sống nông thôn, ngủ trên nhà sàn</li>
<li><strong>Đạp xe:</strong> Xuyên qua các con đường mòn giữa vườn trái cây</li>
<li><strong>Ăn trái cây:</strong> Tươi ngon tại vườn, giá rẻ</li>
</ul>

<h2>Đảo Bình Hòa Phước</h2>
<p>Đảo Bình Hòa Phước nổi tiếng với hoa quả theo mùa, đặc biệt là：</p>
<ul>
<li>Sầu riêng (tháng 5-7)</li>
<li>Măng cụt (tháng 4-6)</li>
<li>Bưởi (tháng 9-11)</li>
</ul>

<h2>Chợ nổi Trà.On</h2>
<p>Chợ nổi Trà.On là chợ nổi hoạt động tại Vĩnh Long, nơi du khách có thể:</p>
<ul>
<li>Ăn sáng trên thuyền</li>
<li>Mua trái cây tươi</li>
<li>Chụp ảnh phong cảnh sông nước</li>
</ul>

<h2>Làng gốm Mang Thít</h2>
<p>Làng gốm Mang Thít nổi tiếng với nghề làm gốm truyền thống, nơi du khách có thể:</p>
<ul>
<li>Tham quan quy trình làm gốm</li>
<li>Tự tay làm gốm</li>
<li>Mua sắm đồ gốm thủ công mỹ nghệ</li>
</ul>

<h2>Ẩm thực Vĩnh Long</h2>
<ul>
<li><strong>Trái cây theo mùa:</strong> Sầu riêng, măng cụt, bưởi, chôm chôm</li>
<li><strong>Hủ tiếu:</strong> Hủ tiếu Vĩnh Long đặc trưng</li>
<li><strong>Cơm dừa:</strong> Cơm nấu bằng nước dừa, thơm ngon</li>
<li><strong>Bánh tráng:</strong> Bánh tráng dẻo, thơm mùi dừa</li>
</ul>

<h2>Lịch trình gợi ý</h2>
<h3>1 ngày từ TP.HCM</h3>
<ul>
<li>7:00 - Khởi hành</li>
<li>9:00 - Đảo An Bình - Vườn trái cây</li>
<li>11:00 - Ăn trưa</li>
<li>13:00 - Làng gốm Mang Thít</li>
<li>15:00 - Về</li>
</ul>

<h3>2 ngày 1 đêm</h3>
<ul>
<li><strong>Ngày 1:</strong> An Bình - Vườn trái cây - Homestay</li>
<li><strong>Ngày 2:</strong> Bình Hòa Phước - Mang Thít - Về</li>
</ul>`,
    province: "Vĩnh Long",
    category: "kinh-nghiem",
    coverImage: "https://images.unsplash.com/photo-1464226184883-fa280b87c399?w=800",
    published: true,
    tags: ["vĩnh long", "đảo an bình", "vườn trái cây", "mang thít", "gốm"],
  },

  // ============================================================
  // 13. TOP 10 CHỢ NỔI MIỀN TÂY
  // ============================================================
  {
    title: "Top 10 Chợ Nổi Miền Tây - Trải nghiệm văn hóa sông nước",
    content: `<h2>Giới thiệu chợ nổi Miền Tây</h2>
<p>Chợ nổi là nét văn hóa độc đáo của vùng Đồng bằng sông Cửu Long, nơi người dân mua bán hàng hóa trên thuyền. Mỗi chợ nổi mang đặc trưng riêng, là trải nghiệm không thể bỏ lỡ khi đến Miền Tây.</p>

<h2>Top 10 chợ nổi nổi tiếng</h2>

<h3>1. Chợ nổi Cái Răng (Cần Thơ)</h3>
<p>Là <strong>chợ nổi lớn nhất</strong> vùng Đồng bằng sông Cửu Long với 300-350 thuyền buôn bán. Hoạt động 4:30-8:00 sáng. Đặc trưng với "cây bẹo" treo sản phẩm. Rough Guide: Top 10 chợ ấn tượng nhất thế giới.</p>

<h3>2. Chợ nổi Cái Bè (Tiền Giang)</h3>
<p>Một trong những chợ nổi <strong>cổ xưa nhất</strong> (thành lập 1732). Hiện còn khoảng 10 thuyền hoạt động. Hoạt động 2:00-8:00 sáng.</p>

<h3>3. Chợ nổi Phong Dịch (Cần Thơ)</h3>
<p>Nhỏ hơn và <strong>yên tĩnh hơn</strong> Cái Răng, khoảng 20 thuyền. Trải nghiệm thực tế và chân thực hơn.</p>

<h3>4. Chợ nổi Ngã Năm (Sóc Trăng)</h3>
<p>Nằm tại giao điểm <strong>5 con sông</strong>, hoạt động sầm uất với nhiều thuyền buôn.</p>

<h3>5. Chợ nổi Long Xuyên (An Giang)</h3>
<p>Chợ nổi tại thành phố Long Xuyên, nơi giao thương quan trọng của vùng Bảy Núi.</p>

<h3>6. Chợ nổi Châu Đốc (An Giang)</h3>
<p>Gần Miếu Bà Chúa Xứ, thu hút khách hành hương và du khách quốc tế.</p>

<h3>7. Chợ nổi Trà.On (Vĩnh Long)</h3>
<p>Chợ nổi tại Vĩnh Long, nơi du khách có thể thưởng thức trái cây tươi và ẩm thực đường phố.</p>

<h3>8. Chợ nổi Ngã Bảy (Hậu Giang)</h3>
<p>Nằm tại huyện Phụng Hiệp, là chợ nổi lớn nhất Hậu Giang với nhiều hoạt động văn hóa.</p>

<h3>9. Chợ nổi Cà Mau</h3>
<p>Chợ nổi tại tỉnh cực Nam, nơi giao thương đường thủy quan trọng.</p>

<h3>10. Chợ nổi Cái Nước (Cà Mau)</h3>
<p>Chợ nổi tại huyện Cái Nước, nơi du khách có thể mua đặc sản và thưởng thức ẩm thực địa phương.</p>

<h2>Mẹo trải nghiệm chợ nổi</h2>
<ul>
<li>Đến sớm (trước 7:00 sáng) để chứng kiến chợ hoạt động sầm uất nhất</li>
<li>Thuê thuyền riêng hoặc đi theo nhóm để tiết kiệm chi phí</li>
<li>Ăn sáng trên thuyền: hủ tiếu, phở, cà phê</li>
<li>Mua trái cây tươi: măng cụt, sầu riêng, bưởi</li>
<li>Chụp ảnh hoàng hôn trên sông</li>
<li>Mang theo tiền mặt, nhiều thuyền không nhận thẻ</li>
</ul>

<h2>Lịch trình gợi ý</h2>
<h3>Tour 3 chợ nổi 1 ngày</h3>
<ul>
<li>5:00 - Cái Răng (Cần Thơ) - Ăn sáng trên thuyền</li>
<li>8:00 - Phong Dịch - Trải nghiệm thực tế</li>
<li>10:00 - Về thành phố - Tham quan</li>
</ul>`,
    province: null,
    category: "dia-danh",
    coverImage: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800",
    published: true,
    tags: ["chợ nổi", "cái răng", "cái bè", "ngã năm", "sông nước"],
  },

  // ============================================================
  // 14. ẨM THỰC MIỀN TÂY
  // ============================================================
  {
    title: "Ẩm thực Miền Tây - Đặc sản không thể bỏ qua từng tỉnh",
    content: `<h2>Giới thiệu ẩm thực Miền Tây</h2>
<p>Vùng Đồng bằng sông Cửu Long nổi tiếng với ẩm thực phong phú, đa dạng, chịu ảnh hưởng của văn hóa Kinh, Khmer và Hoa. Mỗi tỉnh có đặc sản riêng, là trải nghiệm không thể bỏ lỡ.</p>

<h2>Ẩm thực từng tỉnh</h2>

<h3>Cần Thơ</h3>
<ul>
<li><strong>Hủ tiếu Nam Vang:</strong> Tôm, trứng cút, thịt heo, nước dùng trong</li>
<li><strong>Bún nước lèo:</strong> Món Khmer, nước dùng từ mắm cá</li>
<li><strong>Cá lóc nướng trui:</strong> Cá tươi nướng trên than, chấm nước mắm pha</li>
<li><strong>Cơm tấm:</strong> Phố biến, giá từ 25.000-40.000đ</li>
</ul>

<h3>An Giang</h3>
<ul>
<li><strong>Bún cá:</strong> Bún nước dùng từ cá, đậm đà</li>
<li><strong>Thốt nốt đường:</strong> Đường thốt nốt nguyên chất, OCOP 5 sao</li>
<li><strong>Rượu thốt nốt:</strong> Rượu truyền thống</li>
<li><strong>Gà nướng muối ớt:</strong> Gà ta nướng nguyên con</li>
</ul>

<h3>Bến Tre</h3>
<ul>
<li><strong>Kẹo dừa:</strong> Đặc sản số 1, vị béo ngậy</li>
<li><strong>Cơm dừa:</strong> Cơm nấu bằng nước dừa</li>
<li><strong>Tôm kho dừa:</strong> Tôm tươi kho nước dừa</li>
<li><strong>Đuông dừa:</strong> Ẩm thực độc đáo từ đuôi dừa</li>
</ul>

<h3>Sóc Trăng</h3>
<ul>
<li><strong>Bánh pía:</strong> Nhân sầu riêng, đậu xanh, trứng muối</li>
<li><strong>Bún nước lèo:</strong> Bún Khmer đặc trưng</li>
<li><strong>Bánh xèo:</strong> Nhân tôm, thịt, ăn kèm rau sống</li>
</ul>

<h3>Cà Mau</h3>
<ul>
<li><strong>Cua rang me:</strong> Cua tươi rang sốt me</li>
<li><strong>Ốc len dừa nước:</strong> Ốc len ăn lá dừa nước</li>
<li><strong>Khô cá lóc:</strong> Cá lóc phơi khô</li>
<li><strong>Chả giấm:</strong> Chả giấm đặc sản</li>
</ul>

<h3>Đồng Tháp</h3>
<ul>
<li><strong>200+ món từ sen:</strong> Chè sen, xôi sen, cá bọc lá sen</li>
<li><strong>Lẩu mắm:</strong> Nước dùng từ mắm cá</li>
<li><strong>Hủ tiếu Sa Dec:</strong> Hủ tiếu đặc trưng</li>
</ul>

<h3>Tiền Giang</h3>
<ul>
<li><strong>Hủ tiếu Mỹ Tho:</strong> Nước dùng trong, tôm, thịt, trứng cút</li>
<li><strong>Bánh tráng缘 dừa:</strong> Bánh tráng dẻo, thơm mùi dừa</li>
</ul>

<h2>Mẹo thưởng thức ẩm thực</h2>
<ul>
<li>Ăn tại chợ địa phương để trải nghiệm hương vị authentic</li>
<li>Đặt món theo mùa: măng cụt (tháng 4-6), sầu riêng (tháng 5-7)</li>
<li>Hỏi giá trước khi đặt món</li>
<li>Mang theo thuốc đau bụng phòng trường hợp không quen đồ ăn</li>
</ul>`,
    province: null,
    category: "am-thuc",
    coverImage: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800",
    published: true,
    tags: ["ẩm thực", "đặc sản", "hủ tiếu", "bánh pía", "kẹo dừa"],
  },

  // ============================================================
  // 15. DU LỊCH CỘNG ĐỒNG MIỀN TÂY
  // ============================================================
  {
    title: "Du lịch cộng đồng Miền Tây - Homestay & làng nghề trải nghiệm",
    content: `<h2>Giới thiệu du lịch cộng đồng</h2>
<p>Du lịch cộng đồng là mô hình du lịch bền vững, nơi du khách được trải nghiệm cuộc sống thực tế của người dân địa phương. Vùng Đồng bằng sông Cửu Long nổi tiếng với nhiều homestay và làng nghề truyền thống.</p>

<h2>Homestay nổi tiếng</h2>

<h3>Bến Tre</h3>
<ul>
<li><strong>Con Phung (Phượng Hoàng):</strong> Đảo dừa, du lịch sinh thái, bảo tàng dừa</li>
<li><strong>Con Quy:</strong> Vườn dừa 65ha lớn nhất</li>
<li><strong>Con Lân:</strong> Đạp xe, ăn trái cây</li>
</ul>

<h3>Cần Thơ</h3>
<ul>
<li><strong>Con Son:</strong> Đảo nhỏ trên sông Hậu, homestay community tourism</li>
<li><strong>Làng Du Lịch Mỹ Khánh:</strong> Hoạt động: đua heo, xiếc khỉ, câu cá sấu</li>
</ul>

<h3>Vĩnh Long</h3>
<ul>
<li><strong>Đảo An Bình:</strong> Vườn trái cây, homestay pioneer tại ĐBSCL</li>
<li><strong>Đảo Bình Hòa Phước:</strong> Hoa quả theo mùa</li>
</ul>

<h3>Đồng Tháp</h3>
<ul>
<li><strong>Sa Dec:</strong> Homestay Flower & Frog, Bamboo House</li>
<li><strong>Xeo Quýt:</strong> Du lịch sinh thái căn cứ cách mạng</li>
</ul>

<h2>Làng nghề truyền thống</h2>
<h3>Làng nghề kẹo dừa (Bến Tre)</h3>
<p>Làng nghề kẹo dừa Bến Tre nổi tiếng với：</p>
<ul>
<li>Xem quy trình làm kẹo dừa thủ công</li>
<li>Tự tay làm kẹo</li>
<li>Thưởng thức kẹo dừa nóng hổi</li>
<li>Mua quà lưu niệm</li>
</ul>

<h3>Làng nghề đệt chiếu (An Giang)</h3>
<p>Làng nghề đệt chiếu tại An Giang với：</p>
<ul>
<li>Xem quy trình đệt chiếu truyền thống</li>
<li>Học cách đệt chiếu</li>
<li>Mua chiếu thủ công</li>
</ul>

<h3>Làng gốm Mang Thít (Vĩnh Long)</h3>
<p>Làng gốm Mang Thít với：</p>
<ul>
<li>Tham quan lò gốm truyền thống</li>
<li>Tự tay làm gốm</li>
<li>Mua sắm đồ gốm mỹ nghệ</li>
</ul>

<h3>Làng nghề làm nước mắm</h3>
<p>Nhiều tỉnh có làng nghề làm nước mắm truyền thống, nơi du khách có thể:</p>
<ul>
<li>Tham quan quy trình ủ chượp</li>
<li>Thưởng thức nước mắm nguyên chất</li>
<li>Mua nước mắm đặc sản</li>
</ul>

<h2>Mẹo du lịch cộng đồng</h2>
<ul>
<li>Đặt trước 1-2 ngày, đặc biệt vào cuối tuần</li>
<li>Mang theo đồ dùng cá nhân, kem chống nắng</li>
<li>Tôn trọng phong tục địa phương</li>
<li>Tham gia các hoạt động cùng người dân</li>
<li>Mua quà lưu niệm tại làng nghề</li>
</ul>`,
    province: null,
    category: "kinh-nghiem",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    published: true,
    tags: ["homestay", "làng nghề", "cộng đồng", "bến tre", "vĩnh long"],
  },

  // ============================================================
  // 16. LỊCH TRÌNH 3 NGÀY
  // ============================================================
  {
    title: "Lịch trình du lịch Miền Tây 3 ngày từ A đến Z",
    content: `<h2>Tổng quan</h2>
<p>3 ngày là thời gian lý tưởng để khám phá một vùng tại Đồng bằng sông Cửu Long. Dưới đây là 3 lịch trình gợi ý phù hợp với sở thích và ngân sách khác nhau.</p>

<h2>Lịch trình 1: Cần Thơ-centric (3 ngày 2 đêm)</h2>
<h3>Ngày 1: Cần Thơ - Chợ nổi & Làng nghề</h3>
<ul>
<li>5:00 - Đón khách tại TP.HCM</li>
<li>5:30 - Đi Chợ nổi Cái Răng, ăn sáng trên thuyền</li>
<li>8:00 - Tham quan Làng Du Lịch Mỹ Khánh</li>
<li>11:30 - Ăn trưa</li>
<li>13:00 - Tham quan Thiền Viện Trúc Lâm Phương Nam</li>
<li>16:00 - Dạo phố Ninh Kiều</li>
<li>18:30 - Ăn tối, thưởng thức ẩm thực đường phố</li>
</ul>

<h3>Ngày 2: Cần Thơ - Bảo tàng & Vườn cò</h3>
<ul>
<li>7:30 - Ăn sáng</li>
<li>8:30 - Tham quan Bảo tàng Cần Thơ</li>
<li>10:30 - Nhà thờ Chính Tòa, Bưu điện cổ</li>
<li>11:30 - Ăn trưa</li>
<li>13:00 - Vườn Cò Bằng Lăng</li>
<li>16:00 - Về khách sạn</li>
<li>18:30 - Ăn tối</li>
</ul>

<h3>Ngày 3: Cần Thơ - Vườn trái cây & Về</h3>
<ul>
<li>7:30 - Ăn sáng</li>
<li>8:30 - Tham quan Vườn Trái Cây Thốt Nốt</li>
<li>11:00 - Ăn trưa</li>
<li>13:00 - Mua sắm đặc sản</li>
<li>15:00 - Về TP.HCM</li>
</ul>

<p><strong>Chi phí ước tính:</strong> 2.000.000-3.000.000đ/người (bao gồm xe, khách sạn, ăn uống, tham quan)</p>

<h2>Lịch trình 2: Bến Tre & Tiền Giang (3 ngày 2 đêm)</h2>
<h3>Ngày 1: Tiền Giang - Chợ nổi Cái Bè</h3>
<ul>
<li>7:00 - Khởi hành từ TP.HCM</li>
<li>9:00 - Chợ nổi Cái Bè, ăn sáng trên thuyền</li>
<li>11:00 - Cù lao Thới Sơn</li>
<li>13:00 - Ăn trưa</li>
<li>15:00 - Chùa Vĩnh Tràng</li>
<li>17:00 - Về Bến Tre, nhận phòng</li>
</ul>

<h3>Ngày 2: Bến Tre - Xứ dừa</h3>
<ul>
<li>7:00 - Ăn sáng</li>
<li>8:30 - Đi xuồng ba lá khám phá rạch dừa</li>
<li>10:30 - Thăm lò kẹo dừa</li>
<li>12:00 - Ăn trưa</li>
<li>13:30 - Thăm vườn trái cây</li>
<li>17:00 - Nghe đờn ca tài tử</li>
<li>18:30 - Ăn tối</li>
</ul>

<h3>Ngày 3: Bến Tre - Làng nghề & Về</h3>
<ul>
<li>7:30 - Ăn sáng</li>
<li>8:30 - Tham quan Làng Du Lịch Mỹ Lợi</li>
<li>11:00 - Ăn trưa</li>
<li>13:00 - Khởi hành về TP.HCM</li>
<li>15:00 - Trả khách</li>
</ul>

<p><strong>Chi phí ước tính:</strong> 1.800.000-2.800.000đ/người</p>

<h2>Lịch trình 3: An Giang-focused (3 ngày 2 đêm)</h2>
<h3>Ngày 1: An Giang - Rừng Tràm & Châu Đốc</h3>
<ul>
<li>5:30 - Khởi hành</li>
<li>8:00 - Rừng Tràm Trà Sư</li>
<li>11:30 - Ăn trưa</li>
<li>13:00 - Chợ Châu Đốc</li>
<li>15:30 - Miếu Bà Chúa Xứ</li>
<li>18:00 - Ăn tối</li>
</ul>

<h3>Ngày 2: An Giang - Núi Sam & Làng Chăm</h3>
<ul>
<li>6:30 - Ăn sáng</li>
<li>7:30 - Núi Sam, Chùa Hang, Chùa Ông</li>
<li>10:00 - Làng Nghề Đệt Chiếu</li>
<li>11:30 - Ăn trưa</li>
<li>13:00 - Làng Chăm Châu Phong</li>
<li>16:30 - Về khách sạn</li>
</ul>

<h3>Ngày 3: An Giang - Núi Cấm & Về</h3>
<ul>
<li>6:30 - Ăn sáng</li>
<li>7:30 - Núi Cấm (Thiên Cấm Sơn)</li>
<li>11:00 - Ăn trưa</li>
<li>13:00 - Khởi hành về TP.HCM</li>
<li>15:00 - Trả khách</li>
</ul>

<p><strong>Chi phí ước tính:</strong> 2.000.000-3.000.000đ/người</p>`,
    province: null,
    category: "kinh-nghiem",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    published: true,
    tags: ["lịch trình", "3 ngày", "cần thơ", "bến tre", "an giang"],
  },

  // ============================================================
  // 17. LỘ TRÌNH 7 NGÀY
  // ============================================================
  {
    title: "Lộ trình du lịch Miền Tây 7 ngày từ TP.HCM",
    content: `<h2>Tổng quan</h2>
<p>7 ngày là thời gian lý tưởng để khám phá toàn diện vùng Đồng bằng sông Cửu Long. Dưới đây là lộ trình chi tiết từ TP.HCM qua các tỉnh, khám phá đa dạng văn hóa, thiên nhiên và ẩm thực.</p>

<h2>Lộ trình chi tiết</h2>

<h3>Ngày 1: TP.HCM → Mỹ Tho (Tiền Giang)</h3>
<ul>
<li>7:00 - Khởi hành từ TP.HCM</li>
<li>9:00 - Đến Mỹ Tho, nhận phòng</li>
<li>10:00 - Bến tàu, đi Cù lao Thới Sơn</li>
<li>12:00 - Ăn trưa tại Thới Sơn</li>
<li>14:00 - Chùa Vĩnh Tràng</li>
<li>16:00 - Chợ Mỹ Tho</li>
<li>18:00 - Ăn tối, thưởng thức hủ tiếu Mỹ Tho</li>
</ul>

<h3>Ngày 2: Mỹ Tho → Bến Tre</h3>
<ul>
<li>7:00 - Ăn sáng</li>
<li>8:30 - Đi Bến Tre (30 phút)</li>
<li>9:00 - Đi xuồng ba lá khám phá rạch dừa</li>
<li>11:00 - Thăm lò kẹo dừa</li>
<li>12:00 - Ăn trưa</li>
<li>14:00 - Thăm vườn trái cây</li>
<li>16:00 - Nghe đờn ca tài tử</li>
<li>18:30 - Ăn tối</li>
</ul>

<h3>Ngày 3: Bến Tre → Cần Thơ</h3>
<ul>
<li>7:00 - Ăn sáng</li>
<li>8:30 - Tham quan Làng Du Lịch Mỹ Lợi</li>
<li>11:00 - Ăn trưa</li>
<li>13:00 - Đi Cần Thơ (3 giờ)</li>
<li>16:00 - Nhận phòng</li>
<li>17:00 - Dạo bến Ninh Kiều</li>
<li>18:30 - Ăn tối</li>
</ul>

<h3>Ngày 4: Cần Thơ - Chợ nổi & Làng nghề</h3>
<ul>
<li>5:00 - Chợ nổi Cái Răng</li>
<li>8:00 - Làng Du Lịch Mỹ Khánh</li>
<li>11:30 - Ăn trưa</li>
<li>13:00 - Thiền Viện Trúc Lâm Phương Nam</li>
<li>16:00 - Bảo tàng Cần Thơ</li>
<li>18:30 - Ăn tối</li>
</ul>

<h3>Ngày 5: Cần Thơ → Sóc Trăng</h3>
<ul>
<li>7:00 - Ăn sáng</li>
<li>8:30 - Đi Sóc Trăng (2 giờ)</li>
<li>10:30 - Chùa Dơi (Mahatup)</li>
<li>12:00 - Ăn trưa</li>
<li>13:30 - Chùa Kh'leang, Chùa Som Rong</li>
<li>16:00 - Chợ nổi Ngã Năm</li>
<li>18:00 - Ăn tối</li>
</ul>

<h3>Ngày 6: Sóc Trăng → Bạc Liêu</h3>
<ul>
<li>7:00 - Ăn sáng</li>
<li>8:30 - Đi Bạc Liêu (1.5 giờ)</li>
<li>10:00 - Nhà Công Tử Bạc Liêu</li>
<li>12:00 - Ăn trưa</li>
<li>13:30 - Vườn chim Bạc Liêu</li>
<li>16:00 - Bãi biển Bạc Liêu</li>
<li>18:00 - Ăn tối hải sản</li>
</ul>

<h3>Ngày 7: Bạc Liêu → Cà Mau → TP.HCM</h3>
<ul>
<li>6:00 - Ăn sáng</li>
<li>7:30 - Đi Cà Mau (2 giờ)</li>
<li>9:30 - Mũi Cà Mau (nếu đủ thời gian)</li>
<li>12:00 - Ăn trưa</li>
<li>14:00 - Khởi hành về TP.HCM</li>
<li>20:00 - Về đến TP.HCM</li>
</ul>

<h2>Chi phí ước tính</h2>
<ul>
<li>Phương tiện: 3.000.000-5.000.000đ/người</li>
<li>Khách sạn: 3.500.000-7.000.000đ/người (6 đêm)</li>
<li>Ăn uống: 2.000.000-3.500.000đ/người</li>
<li>Tham quan: 1.000.000-2.000.000đ/người</li>
<li><strong>Tổng:</strong> 9.500.000-17.500.000đ/người</li>
</ul>

<h2>Mẹo tiết kiệm</h2>
<ul>
<li>Đặt vé xe khách trước 1-2 ngày</li>
<li>Thuê xe máy tại địa phương</li>
<li>Ăn tại chợ địa phương</li>
<li>Đặt homestay thay vì khách sạn</li>
</ul>`,
    province: null,
    category: "kinh-nghiem",
    coverImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800",
    published: true,
    tags: ["lộ trình", "7 ngày", "tp.hcm", "toàn diện", "tiết kiệm"],
  },

  // ============================================================
  // 18. DU LỊCH MÙA NƯỚC NỔI
  // ============================================================
  {
    title: "Du lịch Miền Tây mùa nước nổi - Khám phá Đồng Tháp Mười",
    content: `<h2>Giới thiệu mùa nước nổi</h2>
<p>Mùa nước nổi (tháng 9-11) là thời điểm đặc biệt nhất tại vùng Đồng bằng sông Cửu Long. Nước từ thượng nguồn sông Mê Kông dâng cao, biến các cánh đồng thành đại dương xanh, tạo nên cảnh tượng thiên nhiên hùng vĩ và unique.</p>

<h2>Đồng Tháp Mười - Tâm điểm mùa nước nổi</h2>
<p>Đồng Tháp Mười là vùng đất ngập nước nổi tiếng nhất, nơi：</p>
<ul>
<li>Cánh đồng ngập nước, sen và bông súng nở rộ</li>
<li>Cá, tôm, cua phong phú</li>
<li>Chim về tụ tập đông đúc</li>
<li>Cảnh quan thiên nhiên siêu thực</li>
</ul>

<h2>Trải nghiệm mùa nước nổi</h2>

<h3>Đi xuồng qua cánh đồng ngập nước</h3>
<ul>
<li>Xuyên qua rừng sen và bông súng</li>
<li>Chứng kiến đàn chim bay qua</li>
<li>Tham quan làng chài trên sông</li>
<li>Chụp ảnh hoàng hôn trên nước</li>
</ul>

<h3>Câu cá mùa nước nổi</h3>
<ul>
<li>Câu cá trên sông, ao</li>
<li>Thưởng thức cá tươi nướng</li>
<li>Trải nghiệm cuộc sống ngư dân</li>
</ul>

<h3>Tham quan Vườn quốc gia Tràm Chim</h3>
<ul>
<li>Đi thuyền xuyên rừng tràm ngập nước</li>
<li>Chứng kiến sếu đầu đỏ và hàng ngàn loài chim</li>
<li>Tham quan tháp quan sát</li>
<li>Nghe hướng dẫn viên giải thích hệ sinh thái</li>
</ul>

<h3>Ăn trái cây mùa nước nổi</h3>
<ul>
<li>Sen nở rộ (tháng 6-8, đỉnh điểm tháng 7)</li>
<li>Nước mắm sen</li>
<li>Cá bọc lá sen nướng</li>
<li>Gỏi ngó sen</li>
</ul>

<h2>Ẩm thực mùa nước nổi</h2>
<ul>
<li><strong>Cá linh:</strong> Cá linh nướng trui, kho tiêu</li>
<li><strong>Bông điên điển:</strong> Bông điên điển xào, nhúng lẩu</li>
<li><strong>Rau nhút:</strong> Rau nhút xào tỏi, nhúng lẩu</li>
<li><strong>Lẩu mắm:</strong> Lẩu mắm đặc sản mùa nước nổi</li>
<li><strong>Bông súng:</strong> Bông súng chấm mắm kho quẹt</li>
</ul>

<h2>Lịch trình gợi ý</h2>
<h3>2 ngày 1 đêm Đồng Tháp</h3>
<ul>
<li><strong>Ngày 1:</strong> TP.HCM → Đồng Tháp → Đồng sen → Ăn trưa → Tràm Chim → Hoàng hôn</li>
<li><strong>Ngày 2:</strong> Sa Dec - Làng hoa → Về TP.HCM</li>
</ul>

<h2>Lưu ý quan trọng</h2>
<ul>
<li>Mang theo kem chống nắng, nón, kính râm</li>
<li>Mang theo thuốc chống muỗi</li>
<li>Mang theo đồ chống nước cho điện thoại/camera</li>
<li>Đặt thuyền trước, đặc biệt vào cuối tuần</li>
<li>Ăn uống tại địa phương để trải nghiệm hương vị authentic</li>
</ul>`,
    province: "Đồng Tháp",
    category: "kinh-nghiem",
    coverImage: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800",
    published: true,
    tags: ["mùa nước nổi", "đồng tháp", "sen", "tràm chim", "câu cá"],
  },

  // ============================================================
  // 19. TOP 10 HOẠT ĐỘNG BẾN TRE
  // ============================================================
  {
    title: "Top 10 hoạt động trải nghiệm tại Bến Tre",
    content: `<h2>Giới thiệu Bến Tre</h2>
<p>Bến Tre được mệnh danh là "Vương quốc dừa" với 40.000ha trồng dừa và sản phẩm xuất khẩu sang hơn 50 nước. Cách TP.HCM chỉ 90km, Bến Tre là điểm đến yêu thích với du khách muốn trải nghiệm cuộc sống miệt vườn và văn hóa sông nước.</p>

<h2>Top 10 hoạt động không thể bỏ lỡ</h2>

<h3>1. Đi xuồng ba lá khám phá rạch dừa</h3>
<p>Trải nghiệm cảm giác ngồi trên xuồng ba lá truyền thống, len lỏi qua các rạch nước nhỏ giữa rừng dừa. Đây là trải nghiệm đặc trưng nhất của Bến Tre.</p>

<h3>2. Workshop làm kẹo dừa</h3>
<p>Tham quan lò kẹo dừa, học cách làm kẹo dừa từ nước dừa tươi, đậu phộng và đường. Thưởng thức kẹo dừa nóng hổi ngay tại chỗ.</p>

<h3>3. Đạp xe qua rừng dừa</h3>
<p>Đạp xe trên các con đường mòn giữa rừng dừa bạt ngàn, tận hưởng không khí trong lành và cảnh quan thiên nhiên.</p>

<h3>4. Tham quan vườn trái cây</h3>
<p>Đến các vườn trái cây: dừa, măng cụt, chôm chôm, vú sữa. Tasting trái cây tươi ngay tại vườn.</p>

<h3>5. Nghe đờn ca tài tử</h3>
<p>Đờn ca tài tử là nghệ thuật truyền thống của vùng Đồng bằng sông Cửu Long, được UNESCO công nhận Di sản văn hóa phi vật thể.</p>

<h3>6. Tham quan lò gạch</h3>
<p>Xem quy trình làm gạch thủ công truyền thống, từ đất sét đến thành phẩm.</p>

<h3>7. Con Phung - Đảo dừa</h3>
<p>Con Phung (Phượng Hoàng) là đảo dừa với du lịch sinh thái, bảo tàng dừa, cưỡi ngựa, câu cá sấu.</p>

<h3>8. Homestay cùng người dân</h3>
<p>Ngủ đêm tại homestay, sinh hoạt cùng gia đình người dân, trải nghiệm cuộc sống miệt vườn thực sự.</p>

<h3>9. Chợ nổi Cái Bè</h3>
<p>Đi chợ nổi Cái Bè (thuộc Tiền Giang, gần Bến Tre), ăn sáng trên thuyền, mua trái cây.</p>

<h3>10. Vườn chim Vam Ho</h3>
<p>Vườn chim Vam Ho là nơi cư trú của hàng ngàn loài chim, đặc biệt là le le và vịt trời.</p>

<h2>Lịch trình gợi ý 2 ngày 1 đêm</h2>
<h3>Ngày 1</h3>
<ul>
<li>7:00 - Khởi hành từ TP.HCM</li>
<li>9:00 - Đi xuồng ba lá</li>
<li>10:30 - Workshop làm kẹo dừa</li>
<li>12:00 - Ăn trưa</li>
<li>14:00 - Đạp xe qua rừng dừa</li>
<li>16:00 - Vườn trái cây</li>
<li>18:30 - Ăn tối</li>
<li>20:00 - Nghe đờn ca tài tử</li>
</ul>

<h3>Ngày 2</h3>
<ul>
<li>7:00 - Ăn sáng</li>
<li>8:30 - Homestay, tham gia làm nông</li>
<li>11:00 - Ăn trưa</li>
<li>13:00 - Về TP.HCM</li>
<li>15:00 - Trả khách</li>
</ul>`,
    province: "Bến Tre",
    category: "dia-danh",
    coverImage: "https://images.unsplash.com/photo-1464226184883-fa280b87c399?w=800",
    published: true,
    tags: ["bến tre", "xuồng ba lá", "kẹo dừa", "đờn ca tài tử", "dừa"],
  },

  // ============================================================
  // 20. KINH NGHIỆM MỞ RỘNG AN GIANG
  // ============================================================
  {
    title: "Kinh nghiệm du lịch An Giang mở rộng - Núi non, rừng tràm & văn hóa Chăm",
    content: `<h2>Giới thiệu An Giang</h2>
<p>An Giang là tỉnh lớn nhất vùng Đồng bằng sông Cửu Long sau sáp nhập Kiên Giang (2025), với <strong>24,1 triệu lượt khách/năm</strong> và 1,9 triệu khách quốc tế (+90.3% YoY). Đây là tỉnh có sự đa dạng văn hóa đặc biệt với 9 làng Chăm, 5.000 hộ gia đình người Chăm theo đạo Hồi giáo, và nền văn hóa Khmer phong phú.</p>

<h2>Núi non An Giang</h2>
<h3>Núi Bà Chúa Xứ</h3>
<p>Núi Bà Chúa Xứ là ngọn núi thiêng nhất Nam Bộ, thu hút hàng triệu lượt khách hành hương mỗi năm, đặc biệt trong <strong>Lễ Vía Bà (tháng 4 âm lịch)</strong>. Miếu Bà Chúa Xứ nằm trên núi, là nơi cầu bình an, may mắn.</p>

<h3>Núi Cấm (Thiên Cấm Sơn)</h3>
<p>Núi Cấm cao 710m, được mệnh danh là "nóc nhà Tây Nam Bộ". Trên núi có:</p>
<ul>
<li>Chùa Phật Lợi</li>
<li>Chùa Thuỷ Sơn</li>
<li>Pho tượng Phật cao lớn</li>
<li>Đền Thờ Bà</li>
<li>Cảnh quan thiên nhiên tuyệt đẹp</li>
</ul>

<h2>Rừng Tràm Trà Sư</h2>
<p>Rừng Tràm Trà Sư là rừng tràm nguyên sinh còn sót lại với diện tích <strong>845ha</strong>, là:</p>
<ul>
<li>Nơi cư trú của 140 loài thực vật</li>
<li>Hơn 120 loài chim</li>
<li>Nhiều loài cá, tôm, cua</li>
</ul>

<h3>Trải nghiệm tại Trà Sư</h3>
<ul>
<li>Đi xuồng len lỏi qua các rạch nước</li>
<li>Tham quan tháp quan sát, chụp ảnh toàn cảnh</li>
<li>Nghe hướng dẫn viên giải thích hệ sinh thái</li>
<li>Mùa nước nổi (tháng 9-11): Bèo tấm phủ xanh mặt nước, tạo cảnh tượng siêu thực</li>
</ul>

<h2>Văn hóa Chăm</h2>
<h3>Làng Chăm Châu Phong</h3>
<p>Làng Chăm Châu Phong có：</p>
<ul>
<li>Mosque Mubarak - kiến trúc Hồi giáo đặc trưng</li>
<li>Nghề dệt thổ cẩm truyền thống</li>
<li>Tham quan quy trình dệt</li>
<li>Mua thổ cẩm Chăm</li>
</ul>

<h3>Làng Chăm Châu Giang</h3>
<p>Làng Chăm Châu Giang nằm cách Châu Đốc 10 phút phà, với：</p>
<ul>
<li>Mosque cổ</li>
<li>Nhà ở truyền thống</li>
<li>Tham quan đời sống người Chăm</li>
</ul>

<h2>Làng Dầu Palmania</h2>
<p>Làng Dầu Palmania tại Tri Tôn nổi tiếng với：</p>
<ul>
<li>Đường thốt nốt OCOP 5 sao</li>
<li>Great Taste Awards 2 sao</li>
<li>Tham quan quy trình làm đường</li>
<li>Thưởng thức đường thốt nốt nguyên chất</li>
</ul>

<h2>Lễ hội đua bò Bảy Nugi</h2>
<p>Lễ hội đua bò Bảy Nugi là lễ hội Khmer độc nhất vô nhị, diễn ra vào <strong>tháng 9 âm lịch</strong>. Đây là lễ hội truyền thống của đồng bào Khmer tại vùng Bảy Núi.</p>

<h2>Ẩm thực An Giang</h2>
<ul>
<li><strong>Bún cá:</strong> Bún nước dùng từ cá, đậm đà</li>
<li><strong>Thốt nốt đường:</strong> Đường thốt nốt nguyên chất</li>
<li><strong>Gà nướng muối ớt:</strong> Gà ta nướng nguyên con</li>
<li><strong>Rượu thốt nốt:</strong> Rượu truyền thống</li>
</ul>

<h2>Lịch trình gợi ý 2 ngày 1 đêm</h2>
<ul>
<li><strong>Ngày 1:</strong> Rừng Tràm Trà Sư → Chợ Châu Đốc → Miếu Bà Chúa Xứ</li>
<li><strong>Ngày 2:</strong> Núi Sam → Làng Chăm → Núi Cấm → Về</li>
</ul>`,
    province: "An Giang",
    category: "kinh-nghiem",
    coverImage: "https://images.unsplash.com/photo-1528164344705-475426870197?w=800",
    published: true,
    tags: ["an giang", "núi bà chúa xứ", "trà sư", "chăm", "bảy núi"],
  },

  // ============================================================
  // 21. DU LỊCH TÂM LINH
  // ============================================================
  {
    title: "Du lịch tâm linh Miền Tây - Chùa chiềng & lễ hội đặc sắc",
    content: `<h2>Giới thiệu du lịch tâm linh</h2>
<p>Vùng Đồng bằng sông Cửu Long nổi tiếng với nhiều ngôi chùa cổ kính và lễ hội đặc sắc, là điểm đến tâm linh吸引 hàng triệu du khách mỗi năm. Du lịch tâm linh kết hợp tham quan, cầu nguyện và tìm hiểu văn hóa.</p>

<h2>Các ngôi chùa nổi tiếng</h2>

<h3>An Giang</h3>
<ul>
<li><strong>Miếu Bà Chúa Xứ:</strong> Nơi cầu bình an, may mắn, hàng triệu khách hành hương mỗi năm</li>
<li><strong>Núi Cấm:</strong> Hệ thống chùa trên núi, không khí thanh tịnh</li>
</ul>

<h3>Sóc Trăng</h3>
<ul>
<li><strong>Chùa Dơi (Mahatup):</strong> Di tích nghệ thuật quốc gia, hàng ngàn con dơi</li>
<li><strong>Chùa Kh'leang:</strong> 500+ năm tuổi, kiến trúc Campuchia</li>
<li><strong>Chùa Som Rong:</strong> Phật tượng nằm 63m</li>
<li><strong>Chùa Đất:</strong> Phật tượng đất sét, nến cháy 60 năm</li>
</ul>

<h3>Cần Thơ</h3>
<ul>
<li><strong>Chùa Ong:</strong> Kiến trúc người Hoa cuối thế kỷ 19</li>
<li><strong>Thiền Viện Trúc Lâm Phương Nam:</strong> Không khí thiền định, yên tĩnh</li>
</ul>

<h3>Bến Tre</h3>
<ul>
<li><strong>Chùa Tuyên Linh:</strong> Chùa lớn nhất Bến Tre</li>
</ul>

<h2>Lễ hội đặc sắc</h2>

<h3>Lễ Vía Bà Chúa Xứ (An Giang)</h3>
<p>Diễn ra vào <strong>tháng 4 âm lịch</strong>, là lễ hội lớn nhất An Giang với：</p>
<ul>
<li>Nghi lễ cầu nguyện</li>
<li>Múa lân, múa hát</li>
<li>Chợ đêm</li>
</ul>

<h3>Lễ hội Ooc Om Boc (Sóc Trăng)</h3>
<p>Diễn ra vào <strong>tháng 11 âm lịch</strong>, là lễ hội Khmer lớn nhất với：</p>
<ul>
<li>Đua ghe Ngo</li>
<li>Lễ thả đèn nước</li>
<li>Nghệ thuật múa Khmer</li>
</ul>

<h3>Lễ hội Lồng đựng (Cần Thơ)</h3>
<p>Diễn ra vào <strong>rằm tháng Giêng</strong>, với：</p>
<ul>
<li>Đua thuyền</li>
<li>Lễ hội văn hóa</li>
<li>Ẩm thực đường phố</li>
</ul>

<h3>Lễ hội đua bò (An Giang)</h3>
<p>Diễn ra vào <strong>tháng 9 âm lịch</strong>, lễ hội Khmer độc nhất vô nhị.</p>

<h2>Lịch trình gợi ý</h2>
<h3>Tour tâm linh 2 ngày</h3>
<ul>
<li><strong>Ngày 1:</strong> An Giang - Miếu Bà Chúa Xứ - Núi Sam - Làng Chăm</li>
<li><strong>Ngày 2:</strong> Cần Thơ - Chùa Ong - Thiền Viện Trúc Lâm</li>
</ul>

<h3>Tour tâm linh 3 ngày</h3>
<ul>
<li><strong>Ngày 1:</strong> An Giang - Bà Chúa Xứ - Núi Cấm</li>
<li><strong>Ngày 2:</strong> Cần Thơ - Chùa Ong - Thiền Viện</li>
<li><strong>Ngày 3:</strong> Sóc Trăng - Chùa Dơi - Chùa Kh'leang</li>
</ul>`,
    province: null,
    category: "le-hoi",
    coverImage: "https://images.unsplash.com/photo-1528164344705-475426870197?w=800",
    published: true,
    tags: ["tâm linh", "chùa", "lễ hội", "bà chúa xứ", "ooc om boc"],
  },

  // ============================================================
  // 22. TUYẾN ĐƯỜNG DU LỊCH
  // ============================================================
  {
    title: "Tuyến đường du lịch Miền Tây qua các tỉnh - Bản đồ & hướng dẫn",
    content: `<h2>Tổng quan các tuyến đường</h2>
<p>Vùng Đồng bằng sông Cửu Long có mạng lưới đường bộ, đường thủy phong phú. Dưới đây là 3 tuyến đường du lịch phổ biến nhất từ TP.HCM.</p>

<h2>Tuyến đường 1: Phương Tây (Tây)</h2>
<p><strong>Tiền Giang → Bến Tre → Vĩnh Long → Cần Thơ</strong></p>
<ul>
<li><strong>Phương tiện:</strong> Xe khách hoặc xe riêng</li>
<li><strong>Thời gian:</strong> 2 ngày</li>
<li><strong>Điểm dừng:</strong> Mỹ Tho, Bến Tre, Vĩnh Long, Cần Thơ</li>
</ul>

<h3>Chi tiết</h3>
<ul>
<li><strong>TP.HCM → Mỹ Tho:</strong> 112km, 2-2.5 giờ</li>
<li><strong>Mỹ Tho → Bến Tre:</strong> 30km, 30 phút qua phà</li>
<li><strong>Bến Tre → Vĩnh Long:</strong> 50km, 1 giờ</li>
<li><strong>Vĩnh Long → Cần Thơ:</strong> 35km, 30 phút</li>
</ul>

<h2>Tuyến đường 2: Phương Nam (Nam)</h2>
<p><strong>Cần Thơ → Sóc Trăng → Bạc Liêu → Cà Mau</strong></p>
<ul>
<li><strong>Phương tiện:</strong> Xe khách hoặc xe riêng</li>
<li><strong>Thời gian:</strong> 3 ngày</li>
<li><strong>Điểm dừng:</strong> Cần Thơ, Sóc Trăng, Bạc Liêu, Cà Mau</li>
</ul>

<h3>Chi tiết</h3>
<ul>
<li><strong>Cần Thơ → Sóc Trăng:</strong> 110km, 2 giờ</li>
<li><strong>Sóc Trăng → Bạc Liêu:</strong> 60km, 1 giờ</li>
<li><strong>Bạc Liêu → Cà Mau:</strong> 110km, 2 giờ</li>
</ul>

<h2>Tuyến đường 3: Phương Núi (Núi)</h2>
<p><strong>Cần Thơ → An Giang → Kiên Giang</strong></p>
<ul>
<li><strong>Phương tiện:</strong> Xe khách hoặc xe riêng</li>
<li><strong>Thời gian:</strong> 3 ngày</li>
<li><strong>Điểm dừng:</strong> Cần Thơ, Long Xuyên, Châu Đốc, Hà Tiên</li>
</ul>

<h3>Chi tiết</h3>
<ul>
<li><strong>Cần Thơ → Long Xuyên:</strong> 60km, 1 giờ</li>
<li><strong>Long Xuyên → Châu Đốc:</strong> 60km, 1 giờ</li>
<li><strong>Châu Đốc → Hà Tiên:</strong> 100km, 2 giờ</li>
</ul>

<h2>Phương tiện di chuyển</h2>

<h3>Xe khách</h3>
<ul>
<li>Từ Bến xe Miền Tây: Có nhiều chuyến đến các tỉnh</li>
<li>Giá: 80.000-400.000đ tùy quãng đường</li>
<li>Thời gian: 2-8 giờ</li>
</ul>

<h3>Thuê xe riêng</h3>
<ul>
<li>Xe 4 chỗ: 1.500.000-2.500.000đ/ngày</li>
<li>Xe 7 chỗ: 2.000.000-3.500.000đ/ngày</li>
<li>Bao gồm: xe, xăng, tài xế</li>
</ul>

<h3>Xe máy</h3>
<ul>
<li>Thuê xe máy tại TP.HCM: 100.000-200.000đ/ngày</li>
<li>Phù hợp cho 1-2 người</li>
<li>Lưu ý: Đi đường trường cần kinh nghiệm</li>
</ul>

<h2>Bản đồ tuyến đường</h2>
<p>Dưới đây là bản đồ tổng quan 3 tuyến đường:</p>
<ul>
<li><strong>Tuyến Tây:</strong> HCMC → Mỹ Tho → Bến Tre → Vĩnh Long → Cần Thơ</li>
<li><strong>Tuyến Nam:</strong> Cần Thơ → Sóc Trăng → Bạc Liêu → Cà Mau</li>
<li><strong>Tuyến Núi:</strong> Cần Thơ → Long Xuyên → Châu Đốc → Hà Tiên</li>
</ul>`,
    province: null,
    category: "luu-y",
    coverImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800",
    published: true,
    tags: ["tuyến đường", "bản đồ", "di chuyển", "xe khách", "thuê xe"],
  },

  // ============================================================
  // 23. DU LỊCH COMBO TIẾT KIỆM
  // ============================================================
  {
    title: "Du lịch combo Miền Tây - Gói trải nghiệm tiết kiệm",
    content: `<h2>Tổng quan du lịch tiết kiệm</h2>
<p>Du lịch Miền Tây có thể phù hợp với mọi ngân sách, từ tiết kiệm đến cao cấp. Dưới đây là hướng dẫn chi tiết giúp bạn lên kế hoạch du lịch tiết kiệm nhất.</p>

<h2>Chi phí theo loại hình</h2>

<h3>Day trip từ TP.HCM (1 ngày)</h3>
<ul>
<li><strong>Mỹ Tho/Bến Tre:</strong> 250.000-400.000đ/người (bao gồm xe, ăn trưa, tham quan)</li>
<li><strong>Cần Thơ:</strong> 300.000-500.000đ/người</li>
<li><strong>An Giang:</strong> 400.000-600.000đ/người</li>
</ul>

<h3>Overnight (2 ngày 1 đêm)</h3>
<ul>
<li><strong>Bến Tre:</strong> 800.000-1.500.000đ/người</li>
<li><strong>Cần Thơ:</strong> 1.000.000-1.800.000đ/người</li>
<li><strong>An Giang:</strong> 1.200.000-2.000.000đ/người</li>
</ul>

<h3>3 ngày 2 đêm</h3>
<ul>
<li><strong>Cần Thơ-centric:</strong> 2.000.000-3.000.000đ/người</li>
<li><strong>Bến Tre + Tiền Giang:</strong> 1.800.000-2.800.000đ/người</li>
<li><strong>An Giang-focused:</strong> 2.000.000-3.000.000đ/người</li>
</ul>

<h2>Lựa chọn chỗ ở</h2>

<h3>Homestay (Tiết kiệm nhất)</h3>
<ul>
<li>Giá: 150.000-300.000đ/đêm/người</li>
<li>Điểm mạnh: Trải nghiệm thực tế, gần gũi người dân</li>
<li>Điểm yếu: Tiện nghi cơ bản</li>
<li>Nơi tốt nhất: Bến Tre, Vĩnh Long, Đồng Tháp</li>
</ul>

<h3>Khách sạn 2-3 sao</h3>
<ul>
<li>Giá: 300.000-600.000đ/đêm/phòng</li>
<li>Điểm mạnh: Tiện nghi, sạch sẽ</li>
<li>Nơi tốt nhất: Cần Thơ, An Giang</li>
</ul>

<h3>Resort 4-5 sao</h3>
<ul>
<li>Giá: 1.000.000-5.000.000đ/đêm/phòng</li>
<li>Điểm mạnh: Sang trọng, đầy đủ dịch vụ</li>
<li>Nơi tốt nhất: Phú Quốc, Cần Thơ</li>
</ul>

<h2>Mẹo tiết kiệm chi phí</h2>

<h3>Phương tiện</h3>
<ul>
<li>Đặt vé xe khách trước 1-2 ngày qua vexere.com, baolau.com</li>
<li>Đi theo nhóm 4 người để chia tiền taxi/thuê xe</li>
<li>Thuê xe máy tại địa phương rẻ hơn 20-30% so với đặt online</li>
</ul>

<h3>Ăn uống</h3>
<ul>
<li>Ăn tại chợ địa phương: 30.000-60.000đ/phần</li>
<li>Tránh nhà hàng gần khu du lịch: giá cao hơn 30-50%</li>
<li>Thưởng thức ẩm thực đường phố: 15.000-30.000đ/phần</li>
</ul>

<h3>Tham quan</h3>
<ul>
<li>Nhiều điểm tham quan miễn phí: chợ, chùa, công viên</li>
<li>Mua combo tour để tiết kiệm 20-30%</li>
<li>Đặt trước qua app để nhận ưu đãi</li>
</ul>

<h3>Thời điểm</h3>
<ul>
<li>Tránh đi vào dịp lễ, Tết: giá tăng 50-100%</li>
<li>Đi vào giữa tuần: giá rẻ hơn 20-30%</li>
<li>Mùa thấp điểm (tháng 5-8): giá rẻ hơn</li>
</ul>

<h2>Gói du lịch tiết kiệm mẫu</h2>
<h3>Bến Tre 2 ngày 1 đêm - Budget</h3>
<ul>
<li>Vé xe: 140.000đ khứ hồi</li>
<li>Homestay: 200.000đ/đêm</li>
<li>Ăn uống: 300.000đ (4 bữa)</li>
<li>Tham quan: 150.000đ</li>
<li><strong>Tổng:</strong> 790.000đ/người</li>
</ul>

<h3>Cần Thơ 2 ngày 1 đêm - Budget</h3>
<ul>
<li>Vé xe: 300.000đ khứ hồi</li>
<li>Khách sạn 2 sao: 350.000đ/đêm</li>
<li>Ăn uống: 400.000đ (4 bữa)</li>
<li>Tham quan: 200.000đ</li>
<li><strong>Tổng:</strong> 1.250.000đ/người</li>
</ul>`,
    province: null,
    category: "luu-y",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    published: true,
    tags: ["tiết kiệm", "budget", "homestay", "combo", "giá rẻ"],
  },

  // ============================================================
  // 24. DU LỊCH CHO GIA ĐÌNH
  // ============================================================
  {
    title: "Du lịch Miền Tây cho gia đình - Lựa chọn an toàn & vui vẻ",
    content: `<h2>Giới thiệu du lịch gia đình</h2>
<p>Đồng bằng sông Cửu Long là điểm đến lý tưởng cho gia đình với trẻ nhỏ, nơi các bé có thể trải nghiệm cuộc sống nông thôn, tham quan vườn trái cây và tìm hiểu văn hóa sông nước. Dưới đây là hướng dẫn chi tiết để gia đình có chuyến đi an toàn và vui vẻ.</p>

<h2>Điểm đến phù hợp cho gia đình</h2>

<h3>Bến Tre - Vương quốc dừa</h3>
<ul>
<li><strong>Phù hợp:</strong> Trẻ từ 3 tuổi trở lên</li>
<li><strong>Hoạt động:</strong> Đi xuồng ba lá, xem đua heo, xiếc khỉ, câu cá sấu</li>
<li><strong>Lợi ích:</strong> Trải nghiệm nông thôn, an toàn, nhiều hoạt động vui chơi</li>
<li><strong>Chi phí:</strong> 700.000-1.500.000đ/người/ngày</li>
</ul>

<h3>Cần Thơ - Chợ nổi</h3>
<ul>
<li><strong>Phù hợp:</strong> Trẻ từ 5 tuổi trở lên</li>
<li><strong>Hoạt động:</strong> Chợ nổi Cái Răng (đi sớm), Vườn Cò Bằng Lăng</li>
<li><strong>Lợi ích:</strong> Tìm hiểu văn hóa, trải nghiệm sông nước</li>
<li><strong>Chi phí:</strong> 800.000-1.800.000đ/người/ngày</li>
</ul>

<h3>Vĩnh Long - Vườn trái cây</h3>
<ul>
<li><strong>Phù hợp:</strong> Trẻ từ 3 tuổi trở lên</li>
<li><strong>Hoạt động:</strong> Đảo An Bình, ăn trái cây, đạp xe</li>
<li><strong>Lợi ích:</strong> An toàn, nhiều trái cây, không khí trong lành</li>
<li><strong>Chi phí:</strong> 600.000-1.200.000đ/người/ngày</li>
</ul>

<h2>An toàn cho trẻ</h2>

<h3>Trên thuyền/xuồng</h3>
<ul>
<li>Luôn mặc áo phao cho trẻ</li>
<li>Giữ tay và chân trong thuyền</li>
<li>Không cho trẻ đứng lên thành thuyền</li>
<li>Chọn thuyền có mái che</li>
</ul>

<h3>Khi tham quan</h3>
<ul>
<li>Mang theo mũ, kem chống nắng, kính râm</li>
<li>Mang theo nước uống đầy đủ</li>
<li>Tránh đi vào giờ nắng nóng (11:00-14:00)</li>
<li>Mang theo thuốc men cơ bản</li>
</ul>

<h3>Ăn uống</h3>
<ul>
<li>Chọn quán ăn sạch sẽ, đông người</li>
<li>Tránh đồ ăn sống, hải sản sống</li>
<li>Mang theo đồ ăn nhẹ cho trẻ</li>
<li>Uống nước đóng chai</li>
</ul>

<h2>Lịch trình gợi ý cho gia đình</h2>
<h3>Bến Tre 2 ngày 1 đêm</h3>
<ul>
<li><strong>Ngày 1:</strong>
  <ul>
  <li>7:00 - Khởi hành từ TP.HCM</li>
  <li>9:00 - Đi xuồng ba lá (trẻ mặc áo phao)</li>
  <li>10:30 - Thăm lò kẹo dừa, trẻ được thưởng thức kẹo</li>
  <li>12:00 - Ăn trưa</li>
  <li>14:00 - Làng Du Lịch Mỹ Lợi: đua heo, xiếc khỉ</li>
  <li>16:00 - Thăm vườn trái cây</li>
  <li>18:30 - Ăn tối</li>
  </ul>
</li>
<li><strong>Ngày 2:</strong>
  <ul>
  <li>7:00 - Ăn sáng</li>
  <li>8:30 - Đạp xe qua rừng dừa</li>
  <li>11:00 - Ăn trưa</li>
  <li>13:00 - Về TP.HCM</li>
  </ul>
</li>
</ul>

<h2>Mẹo du lịch gia đình</h2>
<ul>
<li>Đặt trước homestay/khách sạn gia đình</li>
<li>Chọn lịch trình không quá dày đặc</li>
<li>Mang theo đồ chơi cho trẻ trên đường</li>
<li>Chụp ảnh nhiều để lưu giữ kỷ niệm</li>
<li>Để trẻ tham gia các hoạt động (làm kẹo, hái trái cây)</li>
</ul>`,
    province: null,
    category: "kinh-nghiem",
    coverImage: "https://images.unsplash.com/photo-1464226184883-fa280b87c399?w=800",
    published: true,
    tags: ["gia đình", "trẻ em", "an toàn", "bến tre", "vĩnh long"],
  },
];

async function seedArticles() {
  try {
    await connectDB();
    console.log("Connected to database");

    const admin = await User.findOne({ email: "admin@mientay.vn" });
    if (!admin) {
      console.error("Admin user not found! Run seed.js first.");
      process.exit(1);
    }

    const existingCount = await Article.countDocuments();
    console.log(`Existing articles: ${existingCount}`);

    const articlesToInsert = articles.map((a) => ({
      ...a,
      author: admin._id,
    }));

    const result = await Article.insertMany(articlesToInsert);
    console.log(`Inserted ${result.length} articles successfully!`);
    console.log(`Total articles now: ${existingCount + result.length}`);

    process.exit(0);
  } catch (error) {
    console.error("Error seeding articles:", error);
    process.exit(1);
  }
}

seedArticles();
