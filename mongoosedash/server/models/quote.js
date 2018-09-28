var BirdSchema = new mongoose.Schema({
 name: {type: String, required: true, minlength: 6},
 food: {type: String, required: true, minlength: 8},
}, 
{timestamps: true});

mongoose.model('Bird', BirdSchema);
var Bird = mongoose.model('Bird');