import dbs from "../database/dbs.js";


import { DataTypes } from "sequelize"

const BlogModel = dbs.define('blogs', {
    title: { type:DataTypes.STRING },
    content: { type:DataTypes.STRING },
})

export default BlogModel;