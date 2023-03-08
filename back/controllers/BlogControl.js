import BlogModel from "../modules/BlogModel.js";

export const getBlogAll = async (req,res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs);
    } catch (err) {
        res.json({ mensaje: err.mensaje})
    }
}

export const getBlogs = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where: { id: req.params.id }
        })
        res.json(blog[0])
    } catch (err) {
        res.json({ mensaje: err.mensaje })
    }
}
 
export const crearBlog = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({"mensaje": "El blog se ha creado"})
    } catch (err) {
        res.json({ mensaje: err.mensaje })
    }
}
export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({"mensaje": "El blog se ha actualizado"})
    } catch (err) {
        res.json({ mensaje: err.mensaje })
    }
}

export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: {id: req.params.id}
        })
        res.json({"mensaje": "El blog se ha eliminado"})
    } catch (err) {
        res.json({ mensaje: err.mensaje })
    }
}

