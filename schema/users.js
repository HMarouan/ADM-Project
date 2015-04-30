exports.schema = new mongoose.Schema({
        name : { type: String, maxlength: 50 },
        lastname : { type: String, maxlength: 50 },
        age : { type: Number, min: 18, max: 65 },
        job : { type: String, maxlength: 250 },
        tel : { type: String, maxlength: 10 }
}
);