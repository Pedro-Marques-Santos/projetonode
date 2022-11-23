import { Router } from "express";

import { categoriesRoutes } from "./category.routes";
import { createUserRoutes } from "./createUserRoutes.routes";
import { listCategoryRoutes } from "./listCategory.routes";
import { specificationRoutes } from "./specification.routes"

const router = Router();

router.use("/listcategories", listCategoryRoutes);
router.use("/createcategories", categoriesRoutes);
router.use("/createSpecification", specificationRoutes);
router.use("/createUser", createUserRoutes);

export { router } 