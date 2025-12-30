# MI AL-MUNAWWARIYYAH School Information System

A comprehensive school management system built with Node.js, Express, and SQLite for MI AL-MUNAWWARIYYAH Islamic Elementary School.

## Features

### 🏫 Core Features
- **User Management**: Role-based access control (Admin, Operator, Guru, Siswa, Orang Tua)
- **Authentication**: JWT-based secure authentication
- **CMS**: News, Gallery, Teacher profiles, Static pages
- **PPDB Online**: Online student registration system
- **SPP Online**: School fee payment system
- **Infaq Online**: Donation management system
- **Attendance**: QR code-based attendance system
- **Digital Reports**: Online student report cards
- **E-Learning**: Digital learning materials and assignments

### 📱 Technical Features
- RESTful API architecture
- SQLite database with proper relationships
- File upload support (images, documents, PDFs)
- PDF generation for reports
- QR code generation and scanning
- Email and WhatsApp notifications
- Responsive web interface

## Installation

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mi-al-munawwariyyah
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment configuration**
   ```bash
   cp .env.example .env
   # Edit .env file with your configuration
   ```

4. **Start the server**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Admin Dashboard: http://localhost:3000/dashboard

## Default Admin Account

After first startup, use these credentials to login:
- **Username**: admin
- **Password**: admin123

## API Documentation

### Authentication Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration (Admin only)
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### CMS Endpoints
- `GET /api/cms/settings` - Get school settings
- `PUT /api/cms/settings` - Update school settings (Admin)
- `GET /api/cms/news` - Get published news
- `POST /api/cms/news` - Create news (Admin)
- `PUT /api/cms/news/:id` - Update news (Admin)
- `DELETE /api/cms/news/:id` - Delete news (Admin)

### PPDB Endpoints
- `POST /api/ppdb/register` - Submit PPDB registration
- `GET /api/ppdb/status/:registration_code` - Check registration status
- `GET /api/ppdb/admin/registrations` - Get all registrations (Admin)

### SPP Endpoints
- `GET /api/spp/student/:student_id` - Get student SPP bills
- `POST /api/spp/pay` - Submit SPP payment
- `GET /api/spp/admin/payments` - Get all payments (Admin)

### Infaq Endpoints
- `GET /api/infaq/payment-methods` - Get payment methods
- `POST /api/infaq/donate` - Submit donation
- `GET /api/infaq/status/:donation_code` - Check donation status

### Attendance Endpoints
- `POST /api/absensi/checkin` - Student check-in with QR
- `GET /api/absensi/student/:student_id` - Get student attendance
- `GET /api/absensi/admin/reports` - Get attendance reports (Admin)

### Report Endpoints
- `GET /api/raport/student/:student_id` - Get student reports
- `GET /api/raport/detail/:report_id` - Get detailed report
- `POST /api/raport` - Create report (Guru)
- `PUT /api/raport/:id` - Update report (Guru)

### E-Learning Endpoints
- `GET /api/elearning/courses` - Get student courses
- `GET /api/elearning/materials/:course_id` - Get course materials
- `GET /api/elearning/assignments/:course_id` - Get course assignments
- `POST /api/elearning/submit/:assignment_id` - Submit assignment

## Database Schema

The system uses SQLite with the following main tables:
- `users` - User accounts and authentication
- `roles` - User roles and permissions
- `siswa` - Student information
- `orang_tua` - Parent information
- `guru` - Teacher information
- `ppdb_registrations` - PPDB registration data
- `spp_bills` - SPP billing information
- `spp_payments` - SPP payment records
- `infaq` - Donation records
- `absensi` - Attendance records
- `raport` - Student report cards
- `materi` - Learning materials
- `tugas` - Assignments
- `berita` - News articles
- `galeri` - Gallery images
- `pengaturan_sekolah` - School settings

## File Structure

```
mi-al-munawwariyyah/
├── backend/
│   ├── config/
│   │   ├── database.js
│   │   ├── jwt.js
│   │   ├── email.js
│   │   └── whatsapp.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── role.js
│   ├── models/
│   │   └── init.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── cms.js
│   │   ├── ppdb.js
│   │   ├── spp.js
│   │   ├── infaq.js
│   │   ├── absensi.js
│   │   ├── raport.js
│   │   └── elearning.js
│   ├── uploads/
│   ├── server.js
│   └── database/
├── frontend/
│   ├── index.html
│   ├── dashboard/
│   ├── css/
│   ├── js/
│   └── assets/
├── package.json
├── .env.example
├── README.md
└── .gitignore
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email info@mi-al-munawwariyyah.sch.id or create an issue in this repository.

## Acknowledgments

- Built with Express.js and SQLite
- Uses JWT for authentication
- PDF generation with PDFKit
- QR code generation with qrcode library
- File uploads with Multer
