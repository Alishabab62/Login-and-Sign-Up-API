const cors = require('cors');
const { default: mongoose } = require("mongoose");
const app = require("./app");
const connection = require("./utils/connection");


app.use(cors());
connection();

const PORT= process.env.PORT||4000

app.listen(PORT, ()=>{
    console.log("Connected")
    console.log(`App is running at PORT: ${PORT}`)
})
