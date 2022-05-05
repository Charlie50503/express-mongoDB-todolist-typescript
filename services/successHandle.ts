import Post from "../models/posts"
import express from "express"

const successHandle = async (req: express.Request, res: express.Response) => {
  const resultData = await Post.find()
  res.json({
    "status": "success",
    "data": resultData
  })
  res.end()
}

export { successHandle }