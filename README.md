# Thulir Backend

A Node.js backend server for the Thulir application.

## Features

- Express.js web framework
- CORS enabled
- Environment variable configuration
- Basic health check endpoints
- Error handling middleware

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/hadileey/Thulir-Backend.git
cd Thulir-Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration.

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## API Endpoints

### Health Check
- **GET** `/` - Welcome message and server status
- **GET** `/api/health` - Health check endpoint

## Project Structure

```
Thulir-Backend/
├── server.js           # Main server file
├── routes/            # API routes (to be added)
├── controllers/       # Route controllers (to be added)
├── models/            # Database models (to be added)
├── middleware/        # Custom middleware (to be added)
├── config/            # Configuration files (to be added)
├── .env.example       # Environment variables template
├── .gitignore         # Git ignore rules
├── package.json       # Project dependencies
└── README.md          # This file
```

## Environment Variables

See `.env.example` for available environment variables.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC
