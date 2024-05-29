const express = require('express')
const app = express()
const dotenv = require('dotenv')
const adminAuthorization = require('./middleware/adminAuthorization')

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());


app.get("/", (req, res) => {
 res.send('Hello there!')
})

const authController = require("./auth/auth.controller");
const itemController = require("./item/item.controller");
const userController = require("./user/user.controller");
const transactionController = require("./transaction/transaction.controller");

app.use("/api/transactions", transactionController);
app.use("/api/auth", authController);
app.use("/api/items", itemController);
app.use("/api/users", adminAuthorization, userController);

export default app;