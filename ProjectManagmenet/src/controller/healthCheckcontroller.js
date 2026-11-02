import { ApiResponse } from "../utils/api-response.js";
import asyncHandler from "../utils/async-handler.js";

/*
const healthCheck = async (req, res) => {
  try {
    return res.status(200).json(
      new ApiResponse(200, { message: "Server is running" })
    );
  } catch (error) {
    next(error)
    console.error("APP Health Not well:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
*/

const healthCheck =asyncHandler(async(req , res , next)=>{
    res.status(200).json(new ApiResponse(200
        ,{message:"Health is Working or Server Running"}))
})


export { healthCheck };