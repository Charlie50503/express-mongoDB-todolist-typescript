import express from "express"
import { successHandle } from "../services/successHandle";
import { errorHandle } from "../services/errorHandle";
import { PostMethod } from "../models/postMethod"
import { ObjectID } from "../types/mongoDB";
export class PostsController {
  public async get(req: express.Request, res: express.Response) {
    await successHandle(req, res)
    res.end();
  }
  public async post(req: express.Request, res: express.Response) {
    try {
      const postMethod = new PostMethod()
      const { body } = req
      await postMethod.doPost(body)
      await successHandle(req, res)
    } catch (error) {
      const errorStr = error as string
      if (typeof errorStr !== "string") {
        console.log("error", error);

        await errorHandle(req, res, "格式錯誤")
      } else {
        await errorHandle(req, res, errorStr)
      }
    }
  }

  public async deleteAll(req: express.Request, res: express.Response) {
    try {
      const postMethod = new PostMethod()
      await postMethod.doDeleteAll()
      await successHandle(req, res)
    } catch (error) {
      await errorHandle(req, res, "刪除失敗")
    }
  }
  public async updateOneDataById(req: express.Request, res: express.Response) {
    try {
      const id: ObjectID = req.params?.id as any;
      if (!id) throw Error("沒找到id")

      const { body } = req
      const postMethod = new PostMethod()
      await postMethod.updateOneData(id, body)
      await successHandle(req, res)
      // await errorHandle(req, res, "輸入內容有問題無法登錄")
    } catch (error) {
      const errorStr = error as string
      if (typeof errorStr !== "string") {
        await errorHandle(req, res, "格式錯誤")
      } else {
        await errorHandle(req, res, errorStr)
      }
    }
  }
  public async deleteOneDataById(req: express.Request, res: express.Response) {
    try {
      const id: ObjectID = req.params?.id as any;
      console.log("id", id);

      if (!id) errorHandle(req, res, "格式錯誤")
      const postMethod = new PostMethod()
      const result = await postMethod.doDeleteOne(id)
      await successHandle(req, res)
    } catch (error) {
      const errorStr = error as string
      if (typeof errorStr !== "string") {
        await errorHandle(req, res, "格式錯誤")
      } else {
        await errorHandle(req, res, errorStr)
      }
    }
  }
}