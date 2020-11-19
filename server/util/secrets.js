const dotenv = require("dotenv");

dotenv.config();

module.exports.PORT = process.env.PORT;
module.exports.BASE_URL = process.env.BASE_URL;
module.exports.MONGO_URL = process.env.MONGO_URL;
