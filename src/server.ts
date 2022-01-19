import "./database";
import { app }  from "./app"


app.get("/", (request, response) => {return response.json({message: "hello"});})
app.listen(process.env.PORT|| "3333", () => {console.log( "server started")});
