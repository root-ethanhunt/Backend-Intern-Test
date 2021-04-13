const mongoose = require('mongoose')

const url = "mongodb+srv://api-login-signup:9102764714@cluster0.ujvmk.mongodb.net/DatabaseForApi?retryWrites=true&w=majority"

mongoose.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology: true
})

// process.env.MONGODB_URL