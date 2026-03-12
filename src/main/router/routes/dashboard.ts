import { Router } from "express";
import expressAdapter from "../../adapters/expressAdapter";
import {
  DashboardAuthUseCaseControllerFactory,
  DashboardNotAuthUseCaseControllerFactory,
} from "../../factory/controller/dashboard";
import verifyAuth from "../../middlewares/verifyAuth";

export default async (router: Router) => {
  router.get(`/dashboard/:id`, verifyAuth, expressAdapter(DashboardAuthUseCaseControllerFactory()));
  router.get(`/dashboard`, expressAdapter(DashboardNotAuthUseCaseControllerFactory()));
};
