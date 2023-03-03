import express  from "express";
import bodyParser from "body-parser";
import allRoutes from "../routes/allRoutes.js"

function createServer(){
    const app = express();
    app.use(bodyParser.json()); 

    app.use("/api", allRoutes)

    
    
    return app;
}

export default createServer