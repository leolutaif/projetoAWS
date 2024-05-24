import mysql from "mysql"

export const db = mysql.createConnection({
    host: "cruddb.crdcuh81vytx.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "admin1234",
    database: "crud"
})