import app from "./app.js";
// import { createAdminUser } from "./libs/createUser.js";
import "./database.js";

 function main() {
  app.listen(app.get("port"));

  console.log("Server on port", app.get("port"));
  console.log("Environment:", process.env.NODE_ENV);
}

main();
