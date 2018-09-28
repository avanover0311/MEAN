var addComment = new mongoose.Schema({
 name: { type: String, required: true, minLength: 4 },
 comment: { type: String, required: true, minLength: 2},
},
 {timestamps: true}
);
mongoose.model('Comment', addComment);
var Comment = mongoose.model('Comment', addComment);

var addMessage = new mongoose.Schema({
 name: { type: String, required: true, minLength: 4 },
 message: { type: String, required: true, minLength: 6},
 comments:[addComment]
},
 {timestamps: true}
);
mongoose.model('Message', addMessage);
var Message = mongoose.model('Message');