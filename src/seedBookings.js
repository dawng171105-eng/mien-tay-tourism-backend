import "dotenv/config";
import { connectDB } from "./config/db.js";
import User from "./models/User.js";
import Tour from "./models/Tour.js";
import Hotel from "./models/Hotel.js";
import Booking from "./models/Booking.js";
import HotelBooking from "./models/HotelBooking.js";

const CUSTOMERS = [
  { name: "Đỗ Nhựt Đăng", email: "customer@mientay.vn", password: "123456", phone: "0902000000" },
  { name: "Nguyễn Thị Mai", email: "mai.nguyen@gmail.com", password: "123456", phone: "0913000001" },
  { name: "Trần Văn Hùng", email: "hung.tran@gmail.com", password: "123456", phone: "0913000002" },
  { name: "Lê Thị Hoa", email: "hoa.le@gmail.com", password: "123456", phone: "0913000003" },
  { name: "Phạm Quốc Bảo", email: "bao.pham@gmail.com", password: "123456", phone: "0913000004" },
  { name: "Võ Thị Ngọc", email: "ngoc.vo@gmail.com", password: "123456", phone: "0913000005" },
  { name: "Huỳnh Đức Minh", email: "minh.huynh@gmail.com", password: "123456", phone: "0913000006" },
  { name: "Đặng Thu Trang", email: "trang.dang@gmail.com", password: "123456", phone: "0913000007" },
  { name: "Bùi Anh Tuấn", email: "tuan.bui@gmail.com", password: "123456", phone: "0913000008" },
  { name: "Ngô Thị Hồng", email: "hong.ngo@gmail.com", password: "123456", phone: "0913000009" },
];

const STATUSES = ["pending", "approved", "cancelled", "completed"];
const PAYMENTS = ["unpaid", "paid", "refunded"];
const CANCEL_PAYMENT = { cancelled: "refunded" };

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomDate(monthsAgo) {
  const now = new Date();
  const d = new Date(now.getFullYear(), now.getMonth() - monthsAgo, rnd(1, 28));
  d.setHours(rnd(8, 20), rnd(0, 59), 0, 0);
  return d;
}

async function seedBookings() {
  await connectDB();

  await Promise.all([Booking.deleteMany(), HotelBooking.deleteMany()]);

  const admin = await User.findOne({ role: "admin" });
  const existing = await User.find({ role: "customer" });

  const newUsers = [];
  for (const c of CUSTOMERS) {
    let u = existing.find((e) => e.email === c.email);
    if (!u) {
      u = await User.create(c);
    }
    newUsers.push(u);
  }
  let allUsers = newUsers.slice(0, 8);
  if (admin) allUsers.push(admin);

  const tours = await Tour.find().select("_id price");
  const hotels = await Hotel.find().select("_id pricePerNight");

  if (tours.length === 0 || hotels.length === 0) {
    console.log("No tours/hotels found. Run npm run seed first.");
    process.exit(1);
  }

  const tourBookings = [];
  const hotelBookings = [];

  // 12 months, heavier in recent months (business trend)
  for (let monthIdx = 0; monthIdx < 12; monthIdx++) {
    const perMonth = rnd(18, 30) + (11 - monthIdx) * 2;
    for (let i = 0; i < perMonth; i++) {
      const tour = pick(tours);
      const passengers = rnd(1, 4);
      const status = pick(STATUSES);
      const paymentStatus =
        status === "cancelled"
          ? pick(["unpaid", "refunded"])
          : Math.random() < 0.75
            ? "paid"
            : "unpaid";
      tourBookings.push({
        user: pick(allUsers)._id,
        tour: tour._id,
        departureDate: randomDate(monthIdx),
        createdAt: randomDate(monthIdx),
        passengers,
        totalPrice: tour.price * passengers,
        status,
        paymentStatus,
        notes: Math.random() < 0.2 ? "Yêu cầu xe đón tại nhà / ăn chay" : "",
      });
    }

    const hotelPerMonth = rnd(12, 22) + (11 - monthIdx);
    for (let i = 0; i < hotelPerMonth; i++) {
      const hotel = pick(hotels);
      const guests = rnd(1, 3);
      const nights = rnd(1, 3);
      const createdAt = randomDate(monthIdx);
      const checkIn = new Date(createdAt);
      checkIn.setDate(checkIn.getDate() + rnd(3, 25));
      const checkOut = new Date(checkIn);
      checkOut.setDate(checkOut.getDate() + nights);
      const status = pick(STATUSES);
      const paymentStatus =
        status === "cancelled"
          ? "refunded"
          : Math.random() < 0.8
            ? "paid"
            : "unpaid";
      hotelBookings.push({
        user: pick(allUsers)._id,
        hotel: hotel._id,
        checkIn,
        checkOut,
        guests,
        totalPrice: hotel.pricePerNight * nights * guests,
        status,
        paymentStatus,
        createdAt,
        notes: Math.random() < 0.2 ? "Phòng view sông, tầng cao" : "",
      });
    }
  }

  await Booking.insertMany(tourBookings);
  await HotelBooking.insertMany(hotelBookings);

  console.log("Seeded bookings:");
  console.log("  Tour bookings:", tourBookings.length);
  console.log("  Hotel bookings:", hotelBookings.length);
  console.log("  Customers:", allUsers.length);
  process.exit(0);
}

seedBookings().catch((err) => {
  console.error(err);
  process.exit(1);
});