require("dotenv").config();


const PORT = process.env.PORT || 5000;
const USER = 'root';
const PASSWORD = 'n_11vi_04';
const DATABASE = 'classroomBookingSystem';

module.exports = {
    PORT,
    USER,
    PASSWORD,
    DATABASE
}