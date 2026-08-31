// ============================================================
// PhnesTravel — Admin Dashboard Mock Data
// Shaped for: Overview (stats/charts), Bookings, Flights,
// Hotels, Users, Messages resource pages.
// ============================================================

export const dataUser = [
  { _id: "u001", fullName: "Aveline Moreau", email: "aveline.m@gmail.com", city: "Algiers", country: "DZ", phoneNumber: "0551234567", role: "user", joined: "2024-11-02", totalBookings: 3, totalSpent: 1240.5 },
  { _id: "u002", fullName: "Karim Belhadj", email: "karim.belhadj@yahoo.fr", city: "Oran", country: "DZ", phoneNumber: "0662345678", role: "user", joined: "2025-01-14", totalBookings: 1, totalSpent: 320 },
  { _id: "u003", fullName: "Sofia Marino", email: "sofia.marino@icloud.com", city: "Rome", country: "IT", phoneNumber: "3391122334", role: "user", joined: "2024-09-20", totalBookings: 5, totalSpent: 2870.25 },
  { _id: "u004", fullName: "Liam O'Connor", email: "liam.oconnor@gmail.com", city: "Dublin", country: "IE", phoneNumber: "0871234567", role: "user", joined: "2025-02-03", totalBookings: 2, totalSpent: 980 },
  { _id: "u005", fullName: "Yasmine Cherif", email: "yasmine.cherif@outlook.com", city: "Constantine", country: "DZ", phoneNumber: "0776543210", role: "admin", joined: "2024-06-01", totalBookings: 0, totalSpent: 0 },
  { _id: "u007", name: "Amara Diallo", email: "amara.diallo@gmail.com", city: "Dakar", country: "SN", phoneNumber: "771234567", role: "user", joined: "2025-01-29", totalBookings: 1, totalSpent: 410 },
  { _id: "u008", name: "Elena Popescu", email: "elena.popescu@yahoo.com", city: "Bucharest", country: "RO", phoneNumber: "0721234567", role: "user", joined: "2024-10-08", totalBookings: 6, totalSpent: 3520.4 },
  { _id: "u009", name: "Tarek Haddad", email: "tarek.haddad@gmail.com", city: "Annaba", country: "DZ", phoneNumber: "0554567890", role: "user", joined: "2025-03-05", totalBookings: 2, totalSpent: 760.9 },
  { _id: "u010", name: "Mila Novak", email: "mila.novak@seznam.cz", city: "Prague", country: "CZ", phoneNumber: "601234567", role: "user", joined: "2024-08-17", totalBookings: 3, totalSpent: 1655 },
  { _id: "u011", name: "Rayhane Tliba", email: "rayhane.tliba@gmail.com", city: "Bab Ezzouar", country: "DZ", phoneNumber: "0555112233", role: "admin", joined: "2024-05-01", totalBookings: 0, totalSpent: 0 },
  { _id: "u012", name: "Isabela Santos", email: "isabela.santos@gmail.com", city: "Lisbon", country: "PT", phoneNumber: "912345678", role: "user", joined: "2025-02-19", totalBookings: 1, totalSpent: 545 },
  { _id: "u013", name: "Oscar Lindqvist", email: "oscar.lindqvist@gmail.com", city: "Stockholm", country: "SE", phoneNumber: "0701234567", role: "user", joined: "2024-11-27", totalBookings: 2, totalSpent: 1120 },
  { _id: "u014", name: "Nadia Salem", email: "nadia.salem@hotmail.com", city: "Tlemcen", country: "DZ", phoneNumber: "0663344556", role: "user", joined: "2025-01-08", totalBookings: 3, totalSpent: 1380.6 },
  { _id: "u015", name: "Ethan Walsh", email: "ethan.walsh@gmail.com", city: "Auckland", country: "NZ", phoneNumber: "0211234567", role: "user", joined: "2024-07-30", totalBookings: 4, totalSpent: 2210 },
];

export const dataFlight = [
  { _id: "f001", airline: "Air Algérie", flightNumber: "AH1042", origin: "Algiers (ALG)", destination: "Paris (CDG)", departure: "2025-06-10T08:15:00", arrival: "2025-06-10T11:05:00", price: 285, seatsAvailable: 42, rating: 4.1 },
  { _id: "f002", airline: "Turkish Airlines", flightNumber: "TK653", origin: "Algiers (ALG)", destination: "Istanbul (IST)", departure: "2025-06-12T02:20:00", arrival: "2025-06-12T07:10:00", price: 340, seatsAvailable: 18, rating: 4.5 },
  { _id: "f003", airline: "Emirates", flightNumber: "EK755", origin: "Algiers (ALG)", destination: "Dubai (DXB)", departure: "2025-07-01T05:45:00", arrival: "2025-07-01T16:30:00", price: 610, seatsAvailable: 9, rating: 4.7 },
  { _id: "f004", airline: "Air France", flightNumber: "AF1436", origin: "Oran (ORN)", destination: "Paris (ORY)", departure: "2025-06-15T09:30:00", arrival: "2025-06-15T12:20:00", price: 260, seatsAvailable: 31, rating: 4.0 },
  { _id: "f005", airline: "Ryanair", flightNumber: "FR3821", origin: "Algiers (ALG)", destination: "Rome (FCO)", departure: "2025-06-18T14:00:00", arrival: "2025-06-18T16:10:00", price: 145, seatsAvailable: 60, rating: 3.6 },
  { _id: "f006", airline: "Lufthansa", flightNumber: "LH1187", origin: "Algiers (ALG)", destination: "Frankfurt (FRA)", departure: "2025-07-05T07:00:00", arrival: "2025-07-05T10:40:00", price: 320, seatsAvailable: 22, rating: 4.3 },
  { _id: "f007", airline: "Qatar Airways", flightNumber: "QR1177", origin: "Algiers (ALG)", destination: "Doha (DOH)", departure: "2025-07-20T03:10:00", arrival: "2025-07-20T13:00:00", price: 590, seatsAvailable: 14, rating: 4.8 },
  { _id: "f008", airline: "Vueling", flightNumber: "VY8791", origin: "Algiers (ALG)", destination: "Barcelona (BCN)", departure: "2025-06-22T11:20:00", arrival: "2025-06-22T13:15:00", price: 175, seatsAvailable: 48, rating: 3.9 },
  { _id: "f009", airline: "Air Algérie", flightNumber: "AH2210", origin: "Constantine (CZL)", destination: "Istanbul (IST)", departure: "2025-06-25T04:00:00", arrival: "2025-06-25T08:50:00", price: 305, seatsAvailable: 27, rating: 4.2 },
  { _id: "f010", airline: "British Airways", flightNumber: "BA2647", origin: "Algiers (ALG)", destination: "London (LHR)", departure: "2025-07-11T10:05:00", arrival: "2025-07-11T13:15:00", price: 355, seatsAvailable: 20, rating: 4.4 },
];

export const dataHotel = [
  { _id: "h001", name: "Sofitel Algiers Hamma Garden", location: "Algiers, DZ", pricePerNight: 145, rating: 4.6, roomsAvailable: 12, amenities: ["Pool", "Spa", "Free Wi-Fi", "Gym"] },
  { _id: "h002", name: "Hôtel Le Meridien Oran", location: "Oran, DZ", pricePerNight: 95, rating: 4.2, roomsAvailable: 20, amenities: ["Free Wi-Fi", "Breakfast Included"] },
  { _id: "h003", name: "Novotel Constantine", location: "Constantine, DZ", pricePerNight: 78, rating: 4.0, roomsAvailable: 15, amenities: ["Free Wi-Fi", "Parking"] },
  { _id: "h004", name: "Hôtel du Louvre Paris", location: "Paris, FR", pricePerNight: 210, rating: 4.5, roomsAvailable: 6, amenities: ["Pool", "Concierge", "Free Wi-Fi"] },
  { _id: "h005", name: "Hotel Artemide Rome", location: "Rome, IT", pricePerNight: 160, rating: 4.4, roomsAvailable: 9, amenities: ["Rooftop Bar", "Free Wi-Fi", "Breakfast Included"] },
  { _id: "h006", name: "Marina Bay Suites Dubai", location: "Dubai, AE", pricePerNight: 260, rating: 4.7, roomsAvailable: 5, amenities: ["Pool", "Spa", "Beach Access", "Gym"] },
  { _id: "h007", name: "Barceló Barcelona Sants", location: "Barcelona, ES", pricePerNight: 130, rating: 4.1, roomsAvailable: 17, amenities: ["Free Wi-Fi", "Gym"] },
  { _id: "h008", name: "The Ritz-Carlton Doha", location: "Doha, QA", pricePerNight: 320, rating: 4.9, roomsAvailable: 3, amenities: ["Pool", "Spa", "Private Beach", "Butler Service"] },
  { _id: "h009", name: "Ibis Styles Frankfurt", location: "Frankfurt, DE", pricePerNight: 88, rating: 3.8, roomsAvailable: 25, amenities: ["Free Wi-Fi", "Breakfast Included"] },
  { _id: "h010", name: "The Savoy London", location: "London, GB", pricePerNight: 380, rating: 4.9, roomsAvailable: 2, amenities: ["Spa", "Concierge", "Fine Dining"] },
];

// status: "confirmed" | "pending" | "cancelled"
export const dataBooking = [
  { _id: "b001", userId: "u001", type: "flight", refId: "f001", bookingDate: "2025-05-02", travelDate: "2025-06-10", amount: 285, status: "confirmed" },
  { _id: "b002", userId: "u001", type: "hotel", refId: "h004", bookingDate: "2025-05-02", travelDate: "2025-06-10", nights: 4, amount: 840, status: "confirmed" },
  { _id: "b003", userId: "u003", type: "flight", refId: "f005", bookingDate: "2025-05-10", travelDate: "2025-06-18", amount: 145, status: "confirmed" },
  { _id: "b004", userId: "u003", type: "hotel", refId: "h005", bookingDate: "2025-05-10", travelDate: "2025-06-18", nights: 3, amount: 480, status: "confirmed" },
  { _id: "b005", userId: "u002", type: "flight", refId: "f004", bookingDate: "2025-05-15", travelDate: "2025-06-15", amount: 260, status: "pending" },
  { _id: "b006", userId: "u004", type: "hotel", refId: "h010", bookingDate: "2025-05-18", travelDate: "2025-07-11", nights: 2, amount: 760, status: "confirmed" },
  { _id: "b007", userId: "u004", type: "flight", refId: "f010", bookingDate: "2025-05-18", travelDate: "2025-07-11", amount: 355, status: "confirmed" },
  { _id: "b008", userId: "u006", type: "flight", refId: "f003", bookingDate: "2025-05-20", travelDate: "2025-07-01", amount: 610, status: "confirmed" },
  { _id: "b009", userId: "u006", type: "hotel", refId: "h006", bookingDate: "2025-05-20", travelDate: "2025-07-01", nights: 5, amount: 1300, status: "confirmed" },
  { _id: "b010", userId: "u007", type: "flight", refId: "f008", bookingDate: "2025-05-22", travelDate: "2025-06-22", amount: 175, status: "cancelled" },
  { _id: "b011", userId: "u008", type: "flight", refId: "f007", bookingDate: "2025-05-25", travelDate: "2025-07-20", amount: 590, status: "confirmed" },
  { _id: "b012", userId: "u008", type: "hotel", refId: "h008", bookingDate: "2025-05-25", travelDate: "2025-07-20", nights: 4, amount: 1280, status: "confirmed" },
  { _id: "b013", userId: "u008", type: "flight", refId: "f002", bookingDate: "2025-04-30", travelDate: "2025-06-12", amount: 340, status: "confirmed" },
  { _id: "b014", userId: "u009", type: "hotel", refId: "h002", bookingDate: "2025-05-28", travelDate: "2025-06-15", nights: 3, amount: 285, status: "confirmed" },
  { _id: "b015", userId: "u009", type: "flight", refId: "f004", bookingDate: "2025-05-28", travelDate: "2025-06-15", amount: 260, status: "pending" },
  { _id: "b016", userId: "u010", type: "flight", refId: "f006", bookingDate: "2025-06-01", travelDate: "2025-07-05", amount: 320, status: "confirmed" },
  { _id: "b017", userId: "u010", type: "hotel", refId: "h009", bookingDate: "2025-06-01", travelDate: "2025-07-05", nights: 3, amount: 264, status: "confirmed" },
  { _id: "b018", userId: "u012", type: "flight", refId: "f005", bookingDate: "2025-06-03", travelDate: "2025-06-18", amount: 145, status: "confirmed" },
  { _id: "b019", userId: "u013", type: "hotel", refId: "h007", bookingDate: "2025-06-04", travelDate: "2025-06-22", nights: 4, amount: 520, status: "confirmed" },
  { _id: "b020", userId: "u013", type: "flight", refId: "f008", bookingDate: "2025-06-04", travelDate: "2025-06-22", amount: 175, status: "confirmed" },
  { _id: "b021", userId: "u014", type: "flight", refId: "f009", bookingDate: "2025-06-05", travelDate: "2025-06-25", amount: 305, status: "confirmed" },
  { _id: "b022", userId: "u014", type: "hotel", refId: "h003", bookingDate: "2025-06-05", travelDate: "2025-06-25", nights: 2, amount: 156, status: "cancelled" },
  { _id: "b023", userId: "u015", type: "flight", refId: "f007", bookingDate: "2025-06-08", travelDate: "2025-07-20", amount: 590, status: "confirmed" },
  { _id: "b024", userId: "u015", type: "hotel", refId: "h008", bookingDate: "2025-06-08", travelDate: "2025-07-20", nights: 4, amount: 1280, status: "confirmed" },
  { _id: "b025", userId: "u002", type: "hotel", refId: "h004", bookingDate: "2025-06-09", travelDate: "2025-06-15", nights: 3, amount: 630, status: "pending" },
];

// type: "inquiry" | "support" | "complaint"
export const dataMessage = [
  { _id: "m001", name: "Aveline Moreau", email: "aveline.m@gmail.com", subject: "Question about baggage allowance", type: "inquiry", date: "2025-05-30", read: true },
  { _id: "m002", name: "Karim Belhadj", email: "karim.belhadj@yahoo.fr", subject: "Need to reschedule flight AH1042", type: "support", date: "2025-06-01", read: false },
  { _id: "m003", name: "Sofia Marino", email: "sofia.marino@icloud.com", subject: "Hotel room did not match photos", type: "complaint", date: "2025-06-02", read: false },
  { _id: "m004", name: "Liam O'Connor", email: "liam.oconnor@gmail.com", subject: "Refund status for cancelled hotel booking", type: "support", date: "2025-06-03", read: true },
  { _id: "m005", name: "Noah Fischer", email: "noah.fischer@web.de", subject: "Group booking discount availability", type: "inquiry", date: "2025-06-04", read: false },
  { _id: "m006", name: "Amara Diallo", email: "amara.diallo@gmail.com", subject: "Payment failed twice on checkout", type: "complaint", date: "2025-06-05", read: false },
  { _id: "m007", name: "Elena Popescu", email: "elena.popescu@yahoo.com", subject: "Can I add a stopover to my itinerary?", type: "inquiry", date: "2025-06-06", read: true },
  { _id: "m008", name: "Tarek Haddad", email: "tarek.haddad@gmail.com", subject: "Confirmation email never arrived", type: "support", date: "2025-06-07", read: false },
];

// Overview page: KPIs + chart-ready series (nivo bar/pie/geo)
export const dataOverallStat = [
  {
    year: 2025,
    totalUsers: 15,
    totalBookings: 25,
    yearlyRevenue: 12736.65,
    confirmedBookings: 20,
    pendingBookings: 3,
    cancelledBookings: 2,
    monthlyData: [
      { month: "Jan", bookings: 4, revenue: 1420 },
      { month: "Feb", bookings: 6, revenue: 2380 },
      { month: "Mar", bookings: 5, revenue: 1890 },
      { month: "Apr", bookings: 7, revenue: 2650 },
      { month: "May", bookings: 12, revenue: 4980.5 },
      { month: "Jun", bookings: 18, revenue: 6416.15 },
      { month: "Jul", bookings: 9, revenue: 3560 },
      { month: "Aug", bookings: 0, revenue: 0 },
      { month: "Sep", bookings: 0, revenue: 0 },
      { month: "Oct", bookings: 0, revenue: 0 },
      { month: "Nov", bookings: 0, revenue: 0 },
      { month: "Dec", bookings: 0, revenue: 0 },
    ],
    revenueByType: { flights: 5265, hotels: 7471.65 },
    // for @nivo/geo — booking volume by country
    bookingsByCountry: [
      { country: "DZ", value: 9 },
      { country: "FR", value: 4 },
      { country: "IT", value: 3 },
      { country: "AE", value: 2 },
      { country: "QA", value: 2 },
      { country: "DE", value: 2 },
      { country: "ES", value: 2 },
      { country: "GB", value: 1 },
    ],
    // for @nivo/pie — top destinations
    topDestinations: [
      { destination: "Paris", bookings: 4 },
      { destination: "Rome", bookings: 3 },
      { destination: "Dubai", bookings: 2 },
      { destination: "Doha", bookings: 2 },
      { destination: "Istanbul", bookings: 2 },
      { destination: "Other", bookings: 12 },
    ],
  },
];

export default {
  dataUser,
  dataFlight,
  dataHotel,
  dataBooking,
  dataMessage,
  dataOverallStat,
};