import { Promise } from "mongoose"

const asyncHandler  = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}



export {asyncHandler}



// const asyncHandler = () =>{}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler =(fn) => async (req,  res, next) => {
//     try{
//         await fn(req,res, next)

//     } catch (error) {
//         res.status(error.code || 500).json ({
//             success:false,
//             //this flag helps in building of frontend
//             message: error.message
//         })
//     }
// }