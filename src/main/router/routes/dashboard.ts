import { Router } from "express";
import expressAdapter from "../../adapters/expressAdapter";
import { DashboardUseCaseControllerFactory } from "../../factory/controller/dashboard/dashboard";
import verifyAuth from "../../middlewares/verifyAuth";

export default async (router: Router) => {
  router.get(`/dashboard/:id`, verifyAuth, expressAdapter(DashboardUseCaseControllerFactory()));
};
