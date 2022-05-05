import express from "express"
const errorHandle = (req: express.Request, res: express.Response, message: string) => {
  res.status(400).json({
    "status": "false",
    message
  })
  res.end()
}

export { errorHandle }