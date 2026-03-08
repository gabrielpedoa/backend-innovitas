import { Router } from "express";
import expressAdapter from "../../adapters/expressAdapter";
import { LoginUseCaseControllerFactory } from "../../factory/controller/auth/login";

export default async (router: Router) => {
  /**
   * @swagger
   * /auth/login:
   *   post:
   *     summary: Login user
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - email
   *               - password
   *             properties:
   *               email:
   *                 type: string
   *                 example: gabriel@email.com
   *               password:
   *                 type: string
   *                 example: 123456
   *     responses:
   *       200:
   *         description: Login successful
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 token:
   *                   type: string
   *                 user:
   *                   type: object
   *                   properties:
   *                     id:
   *                       type: number
   *                     name:
   *                       type: string
   *                     email:
   *                       type: string
   */
  router.post("/auth/login", expressAdapter(LoginUseCaseControllerFactory()));
};
