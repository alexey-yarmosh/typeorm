import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

createConnection().then(async connection => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.id = 5637239627;
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.getRepository(User).save([user]);
    console.log("Success!");

    console.log("Inserting a new user into the database... 2");
    const user2 = new User();
    user2.id = 5637239627;
    user2.firstName = "Timber 2";
    user2.lastName = "Saw 2";
    user2.age = 25;
    await connection.getRepository(User).save([user]);
    console.log("Success 2!");

}).catch(error => console.log(error));
