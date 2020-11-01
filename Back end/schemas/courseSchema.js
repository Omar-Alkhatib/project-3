const express = require('express');
const mongoose = require('mongoose');

const courses = new mongoose.Schema({
    ref: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    duration: { type: String, required: true }
    });


    module.exports = mongoose.model("Courses", courses);