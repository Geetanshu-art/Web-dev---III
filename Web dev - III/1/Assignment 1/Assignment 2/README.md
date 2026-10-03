# Assignment 2 - Student Management REST API

Web Dev III (Node.js & Express Backend)

## Requirements
- Node.js
- Express.js
- Postman
- No database
- Array/JSON data only

## Project Structure

```text
Assignment 2/
├── app.js
├── package.json
├── README.md
├── routes/
│   └── studentRoutes.js
├── middleware/
│   └── logger.js
└── data/
    └── students.js
```

## Run the Project

Open the Assignment 2 folder in VS Code/terminal and run:

```bash
npm install
npm start
```

Server:
`http://localhost:3000`

## API Endpoints

### GET all students
GET `/students`

### GET student by ID
GET `/students/1`

### POST student
POST `/students`

JSON body:
```json
{
  "name": "Aman Kumar",
  "age": 20,
  "course": "BCA",
  "email": "aman@example.com"
}
```

### PUT student
PUT `/students/1`

JSON body:
```json
{
  "name": "Aman Updated",
  "age": 21,
  "course": "BCA",
  "email": "amanupdated@example.com"
}
```

### DELETE student
DELETE `/students/1`

## Status Codes
- 200 Success
- 201 Created
- 400 Bad Request
- 404 Not Found

## Note
Student data is stored only in an in-memory JavaScript array. Data will reset when the server restarts.
