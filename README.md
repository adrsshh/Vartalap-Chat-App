# Vartalap

Vartalap is a full stack real-time chat application built with React, Express, MongoDB, and Socket.IO. It supports direct and group conversations, typing indicators, user search, and profile images.

## Tech stack

- **Frontend:** React
- **Backend:** Node.js and Express
- **Database:** MongoDB
- **Real-time messaging:** Socket.IO

## Getting started

### Requirements

- Node.js and npm
- A MongoDB connection string

### Install dependencies

From the project root, run:

```bash
npm install
cd frontend
npm install
cd ..
```

Create a `.env` file in the project root and set your MongoDB connection string and a JWT secret:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Profile image uploads use Cloudinary. To enable them, add your Cloudinary cloud name and unsigned upload preset to `frontend/.env`:

```env
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_unsigned_upload_preset
```

Restart the frontend after changing its environment file. Image uploads are unavailable until these values are configured; chat and account signup continue to work.

### Run the app

Start the backend from the project root:

```bash
npm start
```

In another terminal, start the frontend:

```bash
cd frontend
npm start
```

The frontend runs at `http://localhost:3000` and the backend at `http://localhost:5000`.

## Author

Adharsh Kumar Singh
