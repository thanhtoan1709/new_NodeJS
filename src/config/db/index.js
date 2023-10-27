const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/learn_dev');
        console.log("Connect Thành công !!!!!!!");
    } catch (error) {
        console.log("Connect không thành công ------");
    }
}
module.exports = {connect}