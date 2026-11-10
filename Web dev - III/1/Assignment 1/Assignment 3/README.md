# Assignment 3: Inventory and Data Management System

**Course:** Web Dev III | **Unit:** 3 | **CO:** CO3

A RESTful inventory backend built with Node.js, Express.js, MongoDB, Mongoose and dotenv.

## 1. Requirements

- Node.js (LTS)
- MongoDB running locally, or a MongoDB Atlas connection string
- Postman for API testing

## 2. Setup

Open this folder in VS Code and run:

```bash
npm install
```

Copy `.env.example` to a new file named `.env` and set your MongoDB connection string:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/inventory_management
```

For MongoDB Atlas, replace the URI with your own Atlas connection string. Do not commit `.env` to GitHub.

Start the server:

```bash
npm run dev
```

or:

```bash
npm start
```

Base URL: `http://localhost:5000`

## 3. Product fields

| Field | Type | Validation |
|---|---|---|
| name | String | Required, 2–100 characters |
| sku | String | Required, unique, uppercase |
| category | String | Required |
| price | Number | Required, minimum 0 |
| quantity | Number | Required, whole number, minimum 0 |
| reorderLevel | Number | Required, whole number, minimum 0 |
| supplier | String | Required |

The `stockValue` virtual field is calculated as `price × quantity`. Timestamps are added automatically.

## 4. API endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/products` | List products |
| POST | `/api/products` | Create product |
| GET | `/api/products/:id` | Get one product |
| PUT | `/api/products/:id` | Update product |
| PATCH | `/api/products/:id/stock` | Increase/decrease stock |
| DELETE | `/api/products/:id` | Delete product |
| GET | `/api/products/low-stock` | Low-stock report |
| GET | `/api/products/summary` | Category-wise aggregation |

### Filtering, sorting and pagination examples

```text
GET /api/products?category=Stationery
GET /api/products?search=pen
GET /api/products?minPrice=50&maxPrice=500
GET /api/products?sort=price&order=asc
GET /api/products?page=1&limit=5
GET /api/products?category=Stationery&sort=quantity&order=desc&page=1&limit=10
```

Allowed sort fields: `name`, `price`, `quantity`, `category`, `createdAt`.

## 5. Postman request examples

### Create product

`POST http://localhost:5000/api/products`

Body → raw → JSON:

```json
{
  "name": "Gel Pen Pack of 15",
  "sku": "STNY-PN-713",
  "category": "Stationery",
  "price": 120,
  "quantity": 40,
  "reorderLevel": 20,
  "supplier": "Cello Pens"
}
```

### Update product

`PUT http://localhost:5000/api/products/PRODUCT_ID`

```json
{
  "name": "Gel Pen Pack of 15",
  "sku": "STNY-PN-713",
  "category": "Stationery",
  "price": 140,
  "quantity": 60,
  "reorderLevel": 20,
  "supplier": "Cello Pens"
}
```

Use a real ID returned by the create request.

### Adjust stock

`PATCH http://localhost:5000/api/products/PRODUCT_ID/stock`

```json
{
  "change": 10
}
```

Use a positive number to restock and a negative number for a sale. The API prevents stock from becoming negative.

### Read reports

```text
GET http://localhost:5000/api/products/low-stock
GET http://localhost:5000/api/products/summary
```

## 6. Error handling

The project includes centralized error handling for Mongoose validation errors, invalid IDs, duplicate SKUs, missing routes and unexpected server errors.

## 7. Before submission

1. Confirm MongoDB is connected.
2. Run all endpoints in Postman and capture screenshots of successful responses.
3. Keep `.env` private; `.gitignore` excludes it.
4. Push the `Assignment 3` folder to the existing Web Dev III assignments repository.
5. In the submission form, enter `NA` in the Host Link field as instructed.

**Note:** This project is a backend API. No frontend or hosted deployment is included because the assignment asks for API testing and specifies `NA` for the host link.
