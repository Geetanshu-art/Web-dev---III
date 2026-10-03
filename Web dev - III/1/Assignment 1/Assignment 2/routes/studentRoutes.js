const express = require('express');
const router = express.Router();
const students = require('../data/students');

// GET /students - Get all students
router.get('/', (req, res) => {
  res.status(200).json(students);
});

// GET /students/:id - Get student by ID
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({
      error: 'Student ID must be a number'
    });
  }

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({
      error: 'Student not found'
    });
  }

  res.status(200).json(student);
});

// POST /students - Add a student
router.post('/', (req, res) => {
  const { name, age, course, email } = req.body;

  if (!name || age === undefined || !course || !email) {
    return res.status(400).json({
      error: 'name, age, course and email are required'
    });
  }

  if (!Number.isInteger(Number(age)) || Number(age) <= 0) {
    return res.status(400).json({
      error: 'Age must be a positive number'
    });
  }

  const newStudent = {
    id: students.length ? Math.max(...students.map(s => s.id)) + 1 : 1,
    name,
    age: Number(age),
    course,
    email
  };

  students.push(newStudent);

  res.status(201).json({
    message: 'Student created successfully',
    student: newStudent
  });
});

// PUT /students/:id - Update a student
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({
      error: 'Student ID must be a number'
    });
  }

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({
      error: 'Student not found'
    });
  }

  const { name, age, course, email } = req.body;

  if (!name || age === undefined || !course || !email) {
    return res.status(400).json({
      error: 'name, age, course and email are required'
    });
  }

  if (!Number.isInteger(Number(age)) || Number(age) <= 0) {
    return res.status(400).json({
      error: 'Age must be a positive number'
    });
  }

  student.name = name;
  student.age = Number(age);
  student.course = course;
  student.email = email;

  res.status(200).json({
    message: 'Student updated successfully',
    student
  });
});

// DELETE /students/:id - Delete a student
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({
      error: 'Student ID must be a number'
    });
  }

  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: 'Student not found'
    });
  }

  const deletedStudent = students.splice(index, 1)[0];

  res.status(200).json({
    message: 'Student deleted successfully',
    student: deletedStudent
  });
});

module.exports = router;
