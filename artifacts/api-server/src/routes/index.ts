import { Router, type IRouter } from "express";
import healthRouter from "./health";
import workExperienceRouter from "./work-experience";
import travelsRouter from "./travels";
import speakingRouter from "./speaking";
import craftsRouter from "./crafts";
import writingRouter from "./writing";
import contactRouter from "./contact";
import statsRouter from "./stats";

const router: IRouter = Router();

router.use(healthRouter);
router.use(workExperienceRouter);
router.use(travelsRouter);
router.use(speakingRouter);
router.use(craftsRouter);
router.use(writingRouter);
router.use(contactRouter);
router.use(statsRouter);

export default router;
