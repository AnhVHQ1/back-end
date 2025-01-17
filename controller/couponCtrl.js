const Coupon = require("../models/couponModel")
const validateMongoDbId = require("../utils/validateMongodbId.js")
const asyncHandler = require("express-async-handler")

const createCoupon = asyncHandler(async (req,res) => {
    try{
        const newCoupon =await Coupon.create(req.body);
        res.json(newCoupon)
    } catch (error){
        throw new Error(error)
    }
})
const getAllCoupon = asyncHandler(async (req,res) => {
    try{
        const coupons = await Coupon.find();
        res.json(coupons)
    } catch (error){
        throw new Error(error)
    }
})
const updateCoupon = asyncHandler(async (req,res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try{
        const updateCoupons = await Coupon.findByIdAndUpdate(id, req.body,{
            new: true
        });
        res.json(updateCoupons)
    } catch (error){
        throw new Error(error)
    }
})
const deleteCoupon = asyncHandler(async (req,res) => {
    const {id} = req.params;
    validateMongoDbId(id);
    try{
        const deleteCoupons = await Coupon.findByIdAndDelete(id);
        res.json(deleteCoupons)
    } catch (error){
        throw new Error(error)
    }
})

module.exports = {createCoupon, getAllCoupon, updateCoupon, deleteCoupon}