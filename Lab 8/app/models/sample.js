var mongoose = require("mongoose");

module.exports = mongoose.model("Sample",{
    message: { type: String, default: ""}
});

