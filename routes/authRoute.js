import express from "express";
import {
  registerController,
  logincontroller,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
//router object
const router = express.Router();

//routing.............
//REGISTER || METHOD POST
router.post("/register", registerController);
//LOGIN || POST
router.post("/login", logincontroller);

//Forgot password || Post
router.post("/forgot-password", forgotPasswordController);
//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protectd User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protectd Admin route Admin-auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//ORders
router.get("/orders", requireSignIn, getOrdersController);

//all ORders
router.get("/all-orders", requireSignIn, getAllOrdersController);

//order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router;
