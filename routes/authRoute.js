const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getAllUser,
  getAUser,
  deleteAUser,
  updateAUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,

  getOrders,
  updateOrderStatus,
  getAllOrders,
  getOrdersByUserId,
  removeProductFromCart,
  updateProductQuantity,
  getUserOrders,
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.post("/cart", authMiddleware, userCart);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.post("/cart/create-order", authMiddleware, createOrder);
// router.post("/cart/applycoupon", authMiddleware, applyCoupon);
// router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getOrdersByUserId);

// router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.get("/get-orders", authMiddleware, getUserOrders);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);
router.get("/all-users", getAllUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", authMiddleware, isAdmin, getAUser);

router.delete(
  "/delete-product-cart/:cartItemId",
  authMiddleware,
  removeProductFromCart
);
router.delete("/:id", deleteAUser);
// router.delete("/empty-cart", authMiddleware, emptyCart);

// router.put(
//   "order/update-order/:id",
//   authMiddleware,
//   isAdmin,
//   updateOrderStatus
//   );
router.put("/reset-password/:token", resetPassword);
router.put("/password", authMiddleware, updatePassword);
router.put(
  "/update-product-cart/:cartItemId/:newQuantity",
  authMiddleware,
  updateProductQuantity
);
router.put("/edit-user", authMiddleware, updateAUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
