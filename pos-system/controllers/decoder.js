const jwtDecode = require('jwt-decode');

const decodeToken = (token) => {
    try {
        const decoded = jwtDecode(token);
        console.log("Decoded Token:", decoded);
    } catch (error) {
        console.error("Invalid Token:", error.message);
    }
};

module.exports = decodeToken;
