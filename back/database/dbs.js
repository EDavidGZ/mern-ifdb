import { Sequelize } from "sequelize";

const dbs = new Sequelize('database_infdb','root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default dbs