import { Router } from "express";
import { categoriesRoutes } from "./category.routes";
import { listCategoryRoutes } from "./listCategory.routes";
import { specificationRoutes } from "./specification.routes"

const router = Router();

router.use("/listcategories", listCategoryRoutes);
router.use("/createcategories", categoriesRoutes);
router.use("/createSpecification", specificationRoutes)

export { router } 