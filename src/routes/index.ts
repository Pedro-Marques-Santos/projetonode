import { Router } from "express";
import { categoriesRoutes } from "./category.routes";
import { listCategoryRoutes } from "./listCategory.routes";

const router = Router();

router.use("/listcategories", listCategoryRoutes);
router.use("/createcategories", categoriesRoutes);

export { router } 