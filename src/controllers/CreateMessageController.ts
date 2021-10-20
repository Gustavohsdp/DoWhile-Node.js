import { Request, Response } from "express";
import { CreateMessageSevice } from "../services/CreateMessageSevice";

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { message } = request.body;
    const { user_id } = request;

    const service = new CreateMessageSevice();

    const result = await service.execute(message, user_id);

    return response.json(result);
  }
}

export { CreateMessageController };
