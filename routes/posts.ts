import express from "express"
const router = express.Router();
import { PostsController } from "../controllers/posts"

const postsController = new PostsController()
router.get('/', postsController.get);
router.post('/', postsController.post);
router.patch('/:id', postsController.updateOneDataById);
router.delete('/', postsController.deleteAll);
router.delete('/:id', postsController.deleteOneDataById);



export default router