import mongoose from "mongoose";

export const connectionDb = async () => {
    try {
        await mongoose.connect(process.env.connectionString);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("error", error);
    }
}

// const connectionDB = async () => {
//     try {
//         const url = "mongodb+srv://daramolakenny18_db_user:<dv2K4hjIBuvO4StH>@cluster01.mq7krer.mongodb.net/";
//         await mongoose.connect(url);
//         console.log("Database connected successfully");
//     } catch (error) {
//         "console.log("error", error)
//     }
// }
// mongodb+srv://daramolakenny18_db_user:<dv2K4hjIBuvO4StH>@cluster01.mq7krer.mongodb.net/


// dv2K4hjIBuvO4StH