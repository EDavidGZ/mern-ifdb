import express from 'express';
import { crearBlog, getBlogAll, getBlogs, updateBlog, deleteBlog } from '../controllers/BlogControl.js';

const router = express.Router()

router.get('/', getBlogAll )
router.get('/:id', getBlogs)
router.post('/', crearBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)

export default router