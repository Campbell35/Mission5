import env from "dotenv";
import app from "./app";
import connectDb from "./db";

env.config()
connectDb()
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

