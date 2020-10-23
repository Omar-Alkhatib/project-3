const express = require('express');
const mongoose = require('mongoose');

const users = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
    });


    module.exports = mongoose.model("User", users);