const { default: mongoose } = require("mongoose");

const schemaname = new mongoose.Schema({
    name : {
        type : String,
    },
})

const Name = mongoose.model("DBName",schemaname)
module.exports = Name