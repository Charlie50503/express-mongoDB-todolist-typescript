"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var posts_1 = require("../controllers/posts");
var postsController = new posts_1.PostsController();
router.get('/', postsController.get);
router.post('/', postsController.post);
router.patch('/:id', postsController.updateOneDataById);
router.delete('/', postsController.deleteAll);
router.delete('/:id', postsController.deleteOneDataById);
exports.default = router;
