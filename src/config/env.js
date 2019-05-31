require("dotenv").config();

const {
    PORT ,
    Versions
} = process.env;
const envVariables = {
    port:PORT,
    version: Versions
} 

module.exports = envVariables;