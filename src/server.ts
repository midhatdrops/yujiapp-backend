import "reflect-metadata";
import app from "./app";
import "./database";

app.listen(4200, () => {
  console.log("Sever is running");
});
