import { ApiResponse } from "../utils/api-response.js";

const Test =(req,res)=>{
    try {
       return res.status(200).json(
      new ApiResponse(200, { message: "Test Route Checked" })
    );
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }

}

export default Test