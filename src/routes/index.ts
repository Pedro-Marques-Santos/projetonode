import { Router } from "express";

import { categoriesRoutes } from "./category.routes";
import { createUserRoutes } from "./createUserRoutes.routes";
import { listCategoryRoutes } from "./listCategory.routes";
import { loginUserRouter } from "./loginUser.Routes";
import { specificationRoutes } from "./specification.routes"

const router = Router();

router.use("/listcategories", listCategoryRoutes);
router.use("/createcategories", categoriesRoutes);
router.use("/createSpecification", specificationRoutes);
router.use("/createUser", createUserRoutes);
router.use("/loginUser", loginUserRouter);

export { router } 