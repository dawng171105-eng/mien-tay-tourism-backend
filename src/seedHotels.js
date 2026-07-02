import "dotenv/config";
import { connectDB } from "./config/db.js";
import Hotel from "./models/Hotel.js";

async function seedHotels() {
  await connectDB();
  await Hotel.deleteMany();
  console.log("🗑️  Đã xóa dữ liệu khách sạn cũ...");

  const hotels = [
    // ===================== AN GIANG =====================
    {
      name: "Mường Thanh Luxury An Giang",
      description:
        "Khách sạn 5 sao đẳng cấp nhất An Giang, tọa lạc ngay trung tâm thành phố Long Xuyên. Phòng ốc rộng rãi, sang trọng với tầm nhìn panorama ra sông Hậu hùng vĩ. Nơi đây là lựa chọn hoàn hảo cho du khách muốn trải nghiệm sự xa hoa giữa lòng miền Tây.",
      province: "An Giang",
      address: "17 Nguyễn Huệ, Phường Mỹ Long, TP Long Xuyên, An Giang",
      pricePerNight: 1850000,
      starRating: 5,
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi vô cực", "Nhà hàng 5 sao", "Spa & Massage", "Gym & Fitness", "Bar rooftop", "Xe đưa đón sân bay", "Trung tâm hội nghị"],
      featured: true,
    },
    {
      name: "Victoria Núi Sam Lodge",
      description:
        "Resort boutique xinh đẹp tọa lạc dưới chân Núi Sam huyền thoại, gần Miếu Bà Chúa Xứ. Kiến trúc kết hợp phong cách Pháp và Đông Dương, tạo không gian vừa lãng mạn vừa linh thiêng. Lý tưởng để khám phá tâm linh An Giang.",
      province: "An Giang",
      address: "Đường Thoại Ngọc Hầu, Phường Núi Sam, TP Châu Đốc, An Giang",
      pricePerNight: 2200000,
      starRating: 5,
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
        "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=800",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi ngoài trời", "Nhà hàng ẩm thực địa phương", "Spa thư giãn", "Tour thuyền sông Mê Kông", "Xe đưa đón"],
      featured: true,
    },
    {
      name: "Long Xuyên Hotel & Spa",
      description:
        "Khách sạn 4 sao sang trọng tại trung tâm TP Long Xuyên, dễ dàng di chuyển đến các điểm tham quan. Phòng thiết kế hiện đại, view sông thoáng đãng. Spa cao cấp với các liệu pháp truyền thống miền Tây.",
      province: "An Giang",
      address: "Đường Lê Lợi, Phường Đông Xuyên, TP Long Xuyên, An Giang",
      pricePerNight: 980000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi", "Nhà hàng", "Spa & Massage", "Phòng họp", "Bãi đỗ xe"],
      featured: true,
    },
    {
      name: "Châu Đốc Riverside Retreat",
      description:
        "Resort bình yên nằm ven sông Châu Đốc với view trực diện ra sông Hậu và núi Sam xa xa. Bungalow gỗ sang trọng, hoà mình vào thiên nhiên. Trải nghiệm cuộc sống miền Tây dân dã nhưng đầy tiện nghi.",
      province: "An Giang",
      address: "Ven Sông Châu Đốc, Phường Châu Phú A, TP Châu Đốc, An Giang",
      pricePerNight: 1350000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?w=800",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi", "Nhà hàng đặc sản sông nước", "Chèo thuyền kayak", "Tour tham quan làng nổi", "Spa"],
      featured: false,
    },

    // ===================== BẠC LIÊU =====================
    {
      name: "Công Tử Bạc Liêu Hotel",
      description:
        "Khách sạn mang đậm phong cách kiến trúc Pháp cổ điển, lấy cảm hứng từ hình ảnh Công tử Bạc Liêu hào hoa lừng danh. Tọa lạc ngay trung tâm TP Bạc Liêu, là điểm lưu trú đẳng cấp nhất vùng đất Bạc Liêu.",
      province: "Bạc Liêu",
      address: "13 Điện Biên Phủ, Phường 3, TP Bạc Liêu, Bạc Liêu",
      pricePerNight: 1200000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800",
        "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800",
        "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=800",
      ],
      amenities: ["Wifi miễn phí", "Nhà hàng hải sản", "Hội trường sang trọng", "Spa & Massage", "Bãi đỗ xe", "Dịch vụ concierge"],
      featured: true,
    },
    {
      name: "Muong Thanh Holiday Bac Lieu",
      description:
        "Khách sạn 4 sao hiện đại của chuỗi Mường Thanh, nổi bật với kiến trúc ven biển Bạc Liêu. Phòng view biển rộng lớn, hồ bơi vô cực hướng ra Biển Đông tạo nên trải nghiệm nghỉ dưỡng đẳng cấp.",
      province: "Bạc Liêu",
      address: "Đường Ven Biển, Phường Nhà Mát, TP Bạc Liêu, Bạc Liêu",
      pricePerNight: 1550000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi vô cực view biển", "Nhà hàng hải sản", "Spa & Sauna", "Gym", "Bãi biển riêng", "Bar poolside"],
      featured: true,
    },
    {
      name: "Bạc Liêu Ocean Resort",
      description:
        "Resort tầm trung lý tưởng với bungalow ven biển, cách vườn chim Bạc Liêu chỉ 5 phút. Không gian yên tĩnh, trong lành. Phù hợp cho các gia đình và cặp đôi muốn tận hưởng nghỉ dưỡng biển miền Tây.",
      province: "Bạc Liêu",
      address: "Khu Du Lịch Nhà Mát, Phường Nhà Mát, TP Bạc Liêu, Bạc Liêu",
      pricePerNight: 850000,
      starRating: 3,
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
        "https://images.unsplash.com/photo-1439130490301-25e322d88054?w=800",
      ],
      amenities: ["Wifi miễn phí", "Bãi biển riêng", "Nhà hàng", "Sân chơi trẻ em", "Bãi đỗ xe"],
      featured: false,
    },

    // ===================== BẾN TRE =====================
    {
      name: "Mekong Lodge Ben Tre",
      description:
        "Khu nghỉ dưỡng sinh thái cao cấp nhất Bến Tre, ẩn mình trong vườn dừa bạt ngàn xanh mát. Bungalow gỗ teak sang trọng với hồ bơi riêng, nằm trên những cù lao xanh mướt của sông Tiền. Trải nghiệm thiên nhiên miền Tây đích thực.",
      province: "Bến Tre",
      address: "Cù Lao Phú Túc, Huyện Châu Thành, Bến Tre",
      pricePerNight: 2800000,
      starRating: 5,
      images: [
        "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?w=800",
        "https://images.unsplash.com/photo-1533760881669-80db4d7b341d?w=800",
        "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi riêng tại bungalow", "Nhà hàng đặc sản", "Tour xe đạp vườn dừa", "Chèo thuyền kayak", "Spa thư giãn", "Câu cá", "Dạy làm kẹo dừa"],
      featured: true,
    },
    {
      name: "Palmy Ben Tre Hotel",
      description:
        "Khách sạn 4 sao sang trọng tại trung tâm TP Bến Tre, kết hợp hoàn hảo giữa thiết kế hiện đại và hơi thở xứ dừa. Hồ bơi rooftop với view toàn cảnh thành phố là điểm nhấn ấn tượng.",
      province: "Bến Tre",
      address: "16 Đồng Khởi, Phường 2, TP Bến Tre, Bến Tre",
      pricePerNight: 1380000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi rooftop", "Nhà hàng", "Spa & Massage", "Phòng họp", "Gym", "Bãi đỗ xe miễn phí"],
      featured: true,
    },
    {
      name: "Riverside Garden Bến Tre",
      description:
        "Khu nghỉ dưỡng vườn ven sông lãng mạn với những bungalow ẩn dưới tán dừa, nằm bên bờ sông Bến Tre thơ mộng. Trải nghiệm ẩm thực sông nước và các hoạt động sinh thái độc đáo.",
      province: "Bến Tre",
      address: "Ven Sông Hàm Luông, Xã Phú Túc, Huyện Châu Thành, Bến Tre",
      pricePerNight: 1100000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1464226184883-fa280b87c399?w=800",
        "https://images.unsplash.com/photo-1441974231530-c3447bc09b95?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi", "Nhà hàng đặc sản", "Tour thuyền", "Câu cá", "Làm vườn hữu cơ"],
      featured: false,
    },

    // ===================== CÀ MAU =====================
    {
      name: "Sài Gòn - Cà Mau Hotel",
      description:
        "Khách sạn 4 sao đẳng cấp nhất Cà Mau, tọa lạc ngay trung tâm thành phố với thiết kế hiện đại, sang trọng. Điểm xuất phát lý tưởng để khám phá rừng U Minh và mũi Cà Mau – điểm tận cùng của Tổ quốc.",
      province: "Cà Mau",
      address: "109 Lý Bôn, Phường 2, TP Cà Mau, Cà Mau",
      pricePerNight: 1200000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
        "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi", "Nhà hàng hải sản", "Spa", "Phòng họp", "Dịch vụ tour mũi Cà Mau", "Gym", "Bãi đỗ xe"],
      featured: true,
    },
    {
      name: "U Minh Eco Lodge",
      description:
        "Khu nghỉ sinh thái độc đáo giữa lòng rừng U Minh Hạ huyền bí. Những căn nhà sàn gỗ ẩn dưới tán tràm xanh, hệ sinh thái đất ngập nước phong phú xung quanh. Trải nghiệm thiên nhiên hoang dã đích thực của vùng đất mũi.",
      province: "Cà Mau",
      address: "Vườn Quốc Gia U Minh Hạ, Huyện U Minh, Cà Mau",
      pricePerNight: 1650000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1441974231530-c3447bc09b95?w=800",
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800",
      ],
      amenities: ["Wifi miễn phí", "Nhà hàng đặc sản U Minh", "Tour rừng", "Câu cá", "Chèo thuyền", "Xem chim", "Lửa trại"],
      featured: true,
    },
    {
      name: "Mũi Cà Mau Retreat",
      description:
        "Resort nghỉ dưỡng gần mũi đất tận cùng của Tổ Quốc, với view trực tiếp ra biển Đông và vịnh Thái Lan. Thiết kế kết hợp truyền thống địa phương và tiện nghi hiện đại. Hoàng hôn tại đây là khoảnh khắc không thể quên.",
      province: "Cà Mau",
      address: "Khu Du Lịch Mũi Cà Mau, Xã Đất Mũi, Huyện Ngọc Hiển, Cà Mau",
      pricePerNight: 1950000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
        "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?w=800",
      ],
      amenities: ["Wifi miễn phí", "Nhà hàng hải sản tươi sống", "Bãi biển riêng", "Tour tham quan mũi đất", "Spa", "Câu mực ban đêm"],
      featured: true,
    },

    // ===================== CẦN THƠ =====================
    {
      name: "Vinpearl Hotel Can Tho",
      description:
        "Khách sạn 5 sao hàng đầu Cần Thơ của tập đoàn Vinpearl, tọa lạc ngay trung tâm quận Ninh Kiều sôi động, view trực tiếp ra bờ sông Hậu thơ mộng. Tiêu chuẩn quốc tế 5 sao với dịch vụ đẳng cấp.",
      province: "Cần Thơ",
      address: "209 Đường 30/4, Phường Hưng Lợi, Quận Ninh Kiều, TP Cần Thơ",
      pricePerNight: 2500000,
      starRating: 5,
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
        "https://images.unsplash.com/photo-1612559930014-e63aef73ec37?w=800",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi vô cực", "2 Nhà hàng cao cấp", "Spa & Wellness", "Gym hiện đại", "Bar rooftop view sông", "Xe đưa đón sân bay", "Trung tâm hội nghị 500 khách", "Concierge 24/7"],
      featured: true,
    },
    {
      name: "Mường Thanh Luxury Cần Thơ",
      description:
        "Khách sạn 5 sao sang trọng tại bờ sông Cần Thơ, phòng ốc rộng rãi với ban công view sông tuyệt đẹp. Là địa điểm tổ chức sự kiện, tiệc cưới và hội nghị hàng đầu khu vực ĐBSCL.",
      province: "Cần Thơ",
      address: "1 Hai Bà Trưng, Phường Tân An, Quận Ninh Kiều, TP Cần Thơ",
      pricePerNight: 2200000,
      starRating: 5,
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi", "Nhà hàng buffet sáng", "Spa cao cấp", "Gym", "Sân tennis", "Phòng họp VIP", "Thuyền tham quan Cái Răng"],
      featured: true,
    },
    {
      name: "TTC Hotel Premium Cần Thơ",
      description:
        "Khách sạn 4 sao cao cấp tại khu vực trung tâm Ninh Kiều, chỉ 5 phút đến bến Ninh Kiều và chợ đêm Cần Thơ. Phòng suite với thiết kế Indochine tinh tế, hoà quyện giữa văn hoá Đông Dương và hiện đại.",
      province: "Cần Thơ",
      address: "2 Đại lộ Hòa Bình, Phường An Nghiệp, Quận Ninh Kiều, TP Cần Thơ",
      pricePerNight: 1500000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800",
        "https://images.unsplash.com/photo-1533760881669-80db4d7b341d?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi", "Nhà hàng", "Spa & Massage", "Bar lounge", "Phòng họp", "Tour chợ nổi Cái Răng sáng sớm"],
      featured: true,
    },
    {
      name: "Nam Bộ Boutique Hotel",
      description:
        "Khách sạn boutique 4 sao mang phong cách Nam Bộ xưa cổ kính, nổi bật với những gian phòng trang trí theo phong cách Đông Dương đầu thế kỷ 20. Tọa lạc tại phố cổ Ninh Kiều, gần chợ đêm sôi động.",
      province: "Cần Thơ",
      address: "Khu vực Bến Ninh Kiều, Phường Tân An, Quận Ninh Kiều, TP Cần Thơ",
      pricePerNight: 1100000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800",
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800",
      ],
      amenities: ["Wifi miễn phí", "Nhà hàng ẩm thực Mekong", "Bar cà phê sân thượng", "Xe đạp cho thuê miễn phí", "Tour sáng chợ nổi"],
      featured: false,
    },

    // ===================== ĐỒNG THÁP =====================
    {
      name: "Mường Thanh Luxury Cao Lãnh",
      description:
        "Khách sạn 5 sao sang trọng nhất tỉnh Đồng Tháp, tọa lạc tại trung tâm TP Cao Lãnh. Từ đây, du khách có thể dễ dàng khám phá Tháp Mười – vùng đất ngập nước nổi tiếng, rừng tràm Xẻo Quýt và vùng sen bao la.",
      province: "Đồng Tháp",
      address: "126 Hùng Vương, Phường 2, TP Cao Lãnh, Đồng Tháp",
      pricePerNight: 1750000,
      starRating: 5,
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi vô cực", "Nhà hàng", "Spa cao cấp", "Gym", "Phòng họp", "Xe đưa đón", "Tour Sen Đồng Tháp"],
      featured: true,
    },
    {
      name: "Lotus Eco Resort Đồng Tháp",
      description:
        "Khu nghỉ dưỡng sinh thái đẹp như tranh vẽ, nằm giữa cánh đồng hoa sen bất tận của Đồng Tháp. Kiến trúc nhà sàn truyền thống kết hợp tiện nghi hiện đại. Tham quan mùa sen nở (tháng 4-6) là trải nghiệm không thể bỏ lỡ.",
      province: "Đồng Tháp",
      address: "Khu Bảo Tồn Đất Ngập Nước Tràm Chim, Huyện Tam Nông, Đồng Tháp",
      pricePerNight: 2100000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1464226184883-fa280b87c399?w=800",
        "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?w=800",
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi", "Nhà hàng đặc sản vùng đầm sen", "Chèo xuồng giữa đầm sen", "Xem sếu đầu đỏ", "Tour Tràm Chim", "Câu cá"],
      featured: true,
    },
    {
      name: "Sa Đéc Riverfront Hotel",
      description:
        "Khách sạn boutique tuyệt đẹp ven sông Sa Đéc – thành phố hoa nổi tiếng khắp miền Nam. Phong cách Pháp thuộc địa được phục hồi tinh tế, gần làng hoa Sa Đéc và di tích nhà cổ Huỳnh Thuỷ Lê.",
      province: "Đồng Tháp",
      address: "Ven Sông Sa Đéc, Phường 2, TP Sa Đéc, Đồng Tháp",
      pricePerNight: 1250000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800",
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800",
      ],
      amenities: ["Wifi miễn phí", "Nhà hàng", "Tour làng hoa Sa Đéc", "Xe đạp tham quan", "Hồ bơi nhỏ", "Bãi đỗ xe"],
      featured: false,
    },

    // ===================== HẬU GIANG =====================
    {
      name: "Mekong Pearl Hotel Vị Thanh",
      description:
        "Khách sạn 4 sao hiện đại nhất tỉnh Hậu Giang, tại trung tâm TP Vị Thanh. Thiết kế lấy cảm hứng từ ngọc trai và văn hoá sông nước. Điểm khởi hành thuận tiện để khám phá chợ nổi Ngã Bảy và vùng trái cây Hậu Giang.",
      province: "Hậu Giang",
      address: "1 Đường Hòa Bình, Phường 1, TP Vị Thanh, Hậu Giang",
      pricePerNight: 980000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi", "Nhà hàng", "Phòng họp", "Xe đưa đón", "Bãi đỗ xe"],
      featured: true,
    },
    {
      name: "Ngã Bảy Floating Market Resort",
      description:
        "Khu nghỉ dưỡng sông nước độc đáo ngay cạnh chợ nổi Ngã Bảy huyền thoại. Thức dậy sáng sớm để trực tiếp tham quan phiên chợ nổi nhộn nhịp từ ban công phòng của bạn – trải nghiệm chỉ có ở đây.",
      province: "Hậu Giang",
      address: "Khu vực Chợ Nổi Ngã Bảy, Phường Ngã Bảy, TX Ngã Bảy, Hậu Giang",
      pricePerNight: 1350000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?w=800",
        "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800",
      ],
      amenities: ["Wifi miễn phí", "Nhà hàng view chợ nổi", "Tour thuyền chợ nổi sáng sớm", "Hồ bơi", "Cafe view sông"],
      featured: true,
    },
    {
      name: "Hậu Giang Garden Bungalows",
      description:
        "Bungalows sinh thái ẩn mình trong vườn trái cây Hậu Giang xanh mướt. Phòng nghỉ theo kiểu nhà gỗ truyền thống, không khí trong lành, yên tĩnh tuyệt đối. Thích hợp cho du lịch gia đình và cặp đôi yêu thiên nhiên.",
      province: "Hậu Giang",
      address: "Vườn Sinh Thái Hậu Giang, Xã Phú Tân, Huyện Châu Thành, Hậu Giang",
      pricePerNight: 750000,
      starRating: 3,
      images: [
        "https://images.unsplash.com/photo-1441974231530-c3447bc09b95?w=800",
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800",
      ],
      amenities: ["Wifi miễn phí", "Nhà hàng trái cây đặc sản", "Hái trái cây", "Câu cá", "Xe đạp tour vườn"],
      featured: false,
    },

    // ===================== KIÊN GIANG =====================
    {
      name: "JW Marriott Phu Quoc Emerald Bay",
      description:
        "Kỳ quan nghỉ dưỡng 5 sao xa xỉ nhất Phú Quốc, được thiết kế như một trường đại học Pháp cổ điển pha lẫn phong cách Địa Trung Hải. Bãi biển Kem cát trắng mịn độc quyền, 28 hồ bơi và hơn 10 nhà hàng đẳng cấp thế giới.",
      province: "Kiên Giang",
      address: "Bãi Kem, Xã An Thới, TP Đảo Phú Quốc, Kiên Giang",
      pricePerNight: 8500000,
      starRating: 5,
      images: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      ],
      amenities: ["Wifi miễn phí", "28 hồ bơi", "10+ nhà hàng cao cấp", "Spa đẳng cấp thế giới", "Bãi biển cát trắng riêng", "Gym", "Casino", "Câu lạc bộ trẻ em", "Lặn biển", "Sailing"],
      featured: true,
    },
    {
      name: "InterContinental Phu Quoc Long Beach Resort",
      description:
        "Resort 5 sao sang trọng nằm trên bãi biển Bãi Trường dài nhất Phú Quốc. Kiến trúc Địa Trung Hải đặc trưng với villas có hồ bơi riêng view biển. Là điểm đến lãng mạn nhất cho các cặp đôi và tuần trăng mật.",
      province: "Kiên Giang",
      address: "Bãi Trường, Phường Dương Tơ, TP Đảo Phú Quốc, Kiên Giang",
      pricePerNight: 6500000,
      starRating: 5,
      images: [
        "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?w=800",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      ],
      amenities: ["Wifi miễn phí", "Villa hồ bơi riêng view biển", "5 nhà hàng", "Spa LivingWell", "Bãi biển riêng", "Watersports", "Kids club", "Gym", "Yoga"],
      featured: true,
    },
    {
      name: "Premier Village Phu Quoc Resort",
      description:
        "Khu nghỉ dưỡng villa đảo tư nhân 5 sao với mũi đất nhô ra biển cùng hai bãi biển riêng tuyệt đẹp. Villa pool view biển cả, thiết kế nhiệt đới cao cấp, dịch vụ butler riêng 24/7 cho từng villa.",
      province: "Kiên Giang",
      address: "Mũi Ông Đội, Xã An Thới, TP Đảo Phú Quốc, Kiên Giang",
      pricePerNight: 7200000,
      starRating: 5,
      images: [
        "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=800",
        "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi riêng mỗi villa", "2 bãi biển riêng", "Butler service 24/7", "Nhà hàng fine dining", "Spa", "Lặn biển", "Câu cá ngoài khơi", "Helicopter transfer"],
      featured: true,
    },
    {
      name: "Vinpearl Resort & Spa Phu Quoc",
      description:
        "Tổ hợp resort & spa 5 sao đẳng cấp nhất của Vinpearl tại Bắc Phú Quốc. Gần cáp treo Hòn Thơm dài nhất thế giới, vườn thú Safari đầu tiên tại Việt Nam. Trải nghiệm trọn vẹn giải trí và nghỉ dưỡng đẳng cấp.",
      province: "Kiên Giang",
      address: "Bãi Dài, Xã Gành Dầu, TP Đảo Phú Quốc, Kiên Giang",
      pricePerNight: 4500000,
      starRating: 5,
      images: [
        "https://images.unsplash.com/photo-1580041065738-e72023775cdc?w=800",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi vô cực", "Nhà hàng", "Spa", "Vườn thú Safari", "Cáp treo", "Golf", "Watersports", "Phòng hội nghị"],
      featured: true,
    },

    // ===================== LONG AN =====================
    {
      name: "Mekong Delta Eco Resort Long An",
      description:
        "Khu nghỉ dưỡng sinh thái cao cấp ven sông Vàm Cỏ Đông thơ mộng, cách TP HCM chỉ 45 phút. Không gian nghỉ dưỡng yên tĩnh với vườn cây ăn trái, ao sen bao quanh. Điểm đến cuối tuần lý tưởng cho người Sài Gòn.",
      province: "Long An",
      address: "Ven Sông Vàm Cỏ Đông, Huyện Bến Lức, Long An",
      pricePerNight: 1500000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?w=800",
        "https://images.unsplash.com/photo-1464226184883-fa280b87c399?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi", "Nhà hàng đặc sản sông nước", "Chèo kayak", "Câu cá", "Vườn sinh thái", "Bãi đỗ xe rộng rãi"],
      featured: true,
    },
    {
      name: "Tân An Central Hotel",
      description:
        "Khách sạn 4 sao sang trọng tại trung tâm TP Tân An, cửa ngõ phía Tây của TP HCM. Thiết kế kiến trúc hiện đại với đầy đủ tiện nghi cao cấp, phù hợp cho cả công tác và du lịch.",
      province: "Long An",
      address: "100 Hùng Vương, Phường 2, TP Tân An, Long An",
      pricePerNight: 980000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      ],
      amenities: ["Wifi miễn phí", "Nhà hàng", "Hồ bơi", "Phòng họp", "Gym", "Bãi đỗ xe"],
      featured: true,
    },
    {
      name: "Vàm Cỏ Riverside Retreat",
      description:
        "Khu nghỉ dưỡng bình yên bên dòng sông Vàm Cỏ xanh mát, với bungalow ven sông thư thái. Hưởng thụ không khí trong lành của nông thôn Long An, cách xa sự ồn ào phố thị.",
      province: "Long An",
      address: "Ven Sông Vàm Cỏ Tây, Huyện Thủ Thừa, Long An",
      pricePerNight: 850000,
      starRating: 3,
      images: [
        "https://images.unsplash.com/photo-1441974231530-c3447bc09b95?w=800",
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800",
      ],
      amenities: ["Wifi miễn phí", "Nhà hàng", "Câu cá", "Chèo thuyền", "Bãi đỗ xe"],
      featured: false,
    },

    // ===================== SÓC TRĂNG =====================
    {
      name: "Phương Nam Hotel Sóc Trăng",
      description:
        "Khách sạn 4 sao biểu tượng tại TP Sóc Trăng, kề bên chùa Kh'leang huyền thoại của người Khmer. Nội thất kết hợp kiến trúc Khmer bản địa với phong cách hiện đại sang trọng. Điểm tham quan chùa Dơi và các di tích Khmer ở ngay xung quanh.",
      province: "Sóc Trăng",
      address: "15 Trần Hưng Đạo, Phường 2, TP Sóc Trăng, Sóc Trăng",
      pricePerNight: 1100000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
        "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800",
      ],
      amenities: ["Wifi miễn phí", "Nhà hàng ẩm thực Khmer", "Hồ bơi", "Spa", "Tour tham quan chùa", "Phòng họp"],
      featured: true,
    },
    {
      name: "Mường Thanh Sóc Trăng",
      description:
        "Khách sạn 4 sao lớn nhất Sóc Trăng của chuỗi Mường Thanh, với hơn 200 phòng nghỉ sang trọng. Trung tâm hội nghị quy mô lớn, nhà hàng hải sản tươi sống và đặc sản bánh pía nổi tiếng của Sóc Trăng.",
      province: "Sóc Trăng",
      address: "Đường Nguyễn Huệ, Phường 6, TP Sóc Trăng, Sóc Trăng",
      pricePerNight: 1350000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi", "Nhà hàng buffet", "Spa", "Gym", "Phòng hội nghị 500 người", "Bar lounge"],
      featured: true,
    },
    {
      name: "Khmer Heritage Boutique Hotel",
      description:
        "Khách sạn boutique độc đáo mang đậm kiến trúc và văn hoá Khmer Nam Bộ. Từng căn phòng được trang trí với họa tiết Khmer tinh xảo, lưu giữ hồn văn hoá bản địa. Gần chùa Dơi và các địa điểm du lịch tâm linh.",
      province: "Sóc Trăng",
      address: "Gần Chùa Dơi, Phường 3, TP Sóc Trăng, Sóc Trăng",
      pricePerNight: 850000,
      starRating: 3,
      images: [
        "https://images.unsplash.com/photo-1528164344705-475426870197?w=800",
        "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=800",
      ],
      amenities: ["Wifi miễn phí", "Nhà hàng ẩm thực Khmer-Việt", "Tour chùa chiền", "Xe đạp miễn phí", "Không gian vườn yên tĩnh"],
      featured: false,
    },

    // ===================== TIỀN GIANG =====================
    {
      name: "Mekong Boutique Resort Tiền Giang",
      description:
        "Khu nghỉ dưỡng sang trọng trên Cù Lao Thới Sơn giữa sông Tiền hùng vĩ. Bungalow tre nứa cao cấp ẩn dưới tán cây xanh, kết hợp tiện nghi 5 sao hiện đại. Trải nghiệm ẩm thực sông nước độc đáo và các hoạt động sinh thái phong phú.",
      province: "Tiền Giang",
      address: "Cù Lao Thới Sơn, Xã Thới Sơn, TP Mỹ Tho, Tiền Giang",
      pricePerNight: 2400000,
      starRating: 5,
      images: [
        "https://images.unsplash.com/photo-1533760881669-80db4d7b341d?w=800",
        "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?w=800",
        "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi", "Nhà hàng đặc sản sông nước", "Tour cù lao bằng xuồng", "Đạp xe vườn trái cây", "Thưởng thức đờn ca tài tử", "Spa thảo mộc", "Câu cá"],
      featured: true,
    },
    {
      name: "Chương Dương Hotel Mỹ Tho",
      description:
        "Khách sạn 4 sao lâu đời và uy tín nhất TP Mỹ Tho, tọa lạc tại bờ sông Tiền với view cù lao thoáng đãng. Từng là điểm nghỉ chân của nhiều đoàn khách quốc tế đến tham quan Tiền Giang.",
      province: "Tiền Giang",
      address: "10 Đường 30/4, Phường 1, TP Mỹ Tho, Tiền Giang",
      pricePerNight: 1100000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      ],
      amenities: ["Wifi miễn phí", "Nhà hàng view sông", "Hồ bơi", "Tour cù lao", "Phòng họp", "Bãi đỗ xe"],
      featured: true,
    },
    {
      name: "My Tho Waterfront Suites",
      description:
        "Khách sạn suites boutique hiện đại bên bờ sông Tiền, mỗi phòng đều có ban công view trực tiếp ra sông. Thiết kế tối giản nhưng sang trọng, phù hợp cho cặp đôi và khách thương nhân.",
      province: "Tiền Giang",
      address: "Bờ Sông Tiền, Phường 1, TP Mỹ Tho, Tiền Giang",
      pricePerNight: 1400000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800",
      ],
      amenities: ["Wifi miễn phí", "Bar ven sông", "Nhà hàng", "Spa", "Tour cù lao miễn phí", "Cho thuê xe máy"],
      featured: false,
    },

    // ===================== TRÀ VINH =====================
    {
      name: "Cửu Long Hotel Trà Vinh",
      description:
        "Khách sạn 4 sao hàng đầu tỉnh Trà Vinh, tọa lạc bên bờ sông Cổ Chiên thơ mộng. Nơi đây là cầu nối khám phá văn hoá Khmer độc đáo của vùng đất Trà Vinh với những ngôi chùa cổ kính hàng trăm năm tuổi.",
      province: "Trà Vinh",
      address: "Bờ Sông Cổ Chiên, Phường 1, TP Trà Vinh, Trà Vinh",
      pricePerNight: 1050000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
      ],
      amenities: ["Wifi miễn phí", "Nhà hàng đặc sản Khmer", "Hồ bơi", "Spa", "Tour chùa Khmer", "Xe đưa đón"],
      featured: true,
    },
    {
      name: "Tra Vinh Eco River Lodge",
      description:
        "Khu nghỉ dưỡng sinh thái ven sông yên bình, ẩn mình giữa vườn dừa và hàng cây xanh mát. Phòng bungalow kiểu nhà vườn truyền thống Trà Vinh. Trải nghiệm văn hóa Kinh - Khmer - Hoa độc đáo.",
      province: "Trà Vinh",
      address: "Ven Sông Hậu, Huyện Châu Thành, Trà Vinh",
      pricePerNight: 850000,
      starRating: 3,
      images: [
        "https://images.unsplash.com/photo-1464226184883-fa280b87c399?w=800",
        "https://images.unsplash.com/photo-1441974231530-c3447bc09b95?w=800",
      ],
      amenities: ["Wifi miễn phí", "Nhà hàng", "Chèo xuồng", "Câu cá", "Tour vườn dừa", "Bãi đỗ xe"],
      featured: false,
    },
    {
      name: "Mường Thanh Holiday Trà Vinh",
      description:
        "Khách sạn 4 sao tiêu chuẩn quốc tế ngay trung tâm TP Trà Vinh, gần các điểm tham quan chùa Khmer nổi tiếng. Thiết kế pha trộn nghệ thuật Khmer với hiện đại, tạo không gian độc đáo.",
      province: "Trà Vinh",
      address: "Đường Nguyễn Thị Minh Khai, Phường 4, TP Trà Vinh, Trà Vinh",
      pricePerNight: 1200000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi", "Nhà hàng", "Spa", "Phòng họp", "Gym", "Bãi đỗ xe"],
      featured: true,
    },

    // ===================== VĨNH LONG =====================
    {
      name: "An Bình Island Resort",
      description:
        "Khu nghỉ dưỡng thiên đường trên Cù Lao An Bình – hòn đảo xanh giữa sông Tiền và sông Cổ Chiên. Bungalow ven sông sang trọng với view tuyệt đẹp. Đạp xe trên những con đường đất đỏ uốn khúc quanh vườn cây trái là trải nghiệm không thể quên.",
      province: "Vĩnh Long",
      address: "Cù Lao An Bình, Huyện Long Hồ, Vĩnh Long",
      pricePerNight: 2200000,
      starRating: 5,
      images: [
        "https://images.unsplash.com/photo-1533760881669-80db4d7b341d?w=800",
        "https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?w=800",
        "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi riêng", "Nhà hàng đặc sản sông nước", "Đạp xe cù lao", "Tour thuyền sông", "Spa thiên nhiên", "Đờn ca tài tử ban tối", "Câu cá"],
      featured: true,
    },
    {
      name: "Mekong Riverside Resort Vĩnh Long",
      description:
        "Resort sang trọng bên bờ sông Cổ Chiên hùng vĩ, với view nhìn thẳng sang Cù Lao An Bình xanh mướt. Kiến trúc kết hợp nhà vườn truyền thống và thiết kế đương đại. Điểm xuất phát lý tưởng để khám phá Vĩnh Long.",
      province: "Vĩnh Long",
      address: "Ven Sông Cổ Chiên, Phường 1, TP Vĩnh Long, Vĩnh Long",
      pricePerNight: 1650000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      ],
      amenities: ["Wifi miễn phí", "Hồ bơi view sông", "Nhà hàng", "Spa", "Tour thuyền sông Cổ Chiên", "Xe đạp tham quan"],
      featured: true,
    },
    {
      name: "Cửu Long Hotel Vĩnh Long",
      description:
        "Khách sạn 4 sao lâu đời và uy tín nhất TP Vĩnh Long, ngay bờ sông Cổ Chiên. Không gian xanh mát với vườn cây rộng lớn bao quanh, phòng ốc rộng rãi và ấm cúng.",
      province: "Vĩnh Long",
      address: "1 Đường 1/5, Phường 1, TP Vĩnh Long, Vĩnh Long",
      pricePerNight: 1200000,
      starRating: 4,
      images: [
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
      ],
      amenities: ["Wifi miễn phí", "Nhà hàng", "Hồ bơi", "Spa", "Phòng hội nghị", "Bãi đỗ xe rộng"],
      featured: false,
    },
  ];

  const inserted = await Hotel.insertMany(hotels);
  console.log(`\n✅ Đã seed ${inserted.length} khách sạn thành công!`);
  console.log("📍 Phân bổ theo tỉnh:");
  const byProvince = {};
  hotels.forEach((h) => {
    byProvince[h.province] = (byProvince[h.province] || 0) + 1;
  });
  Object.entries(byProvince)
    .sort(([a], [b]) => a.localeCompare(b, "vi"))
    .forEach(([province, count]) => {
      console.log(`   ${province}: ${count} khách sạn`);
    });
  process.exit(0);
}

seedHotels().catch((err) => {
  console.error("❌ Lỗi seed:", err);
  process.exit(1);
});
