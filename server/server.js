require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const admincontactsRoute = require("./router/admin-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// let's tackle cors
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// Let's define admin route
app.use("/api/admin", adminRoute);

// let's define admin contacts route
app.use("/api/admin", admincontactsRoute);

app.use(errorMiddleware);

connectDb().then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`server is running at port: ${process.env.PORT}`);
    });
});
