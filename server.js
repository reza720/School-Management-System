const database=require("./src/config/databbase");
const app=require("./app");

(async ()=>{
    try{
        await database.authenticate();
        console.log("database connected");
        app.listen(3000, ()=>{
            console.log("app is running on port 3000");
        })
    }
    catch(error){
        console.error(error.message);
    }
})