import mongoose,{Schema} from "mongoose"
import bcrypt from 'bcrypt'

const userSchema = new Schema(
    {
        avatar:{
            type:{
                url:String,
                localPath:String,
            },
            default:{
                url: `https://placehold.co/200x200`,
                localPath:""
            }
        },
        username:{
            type:String,
            require :true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            require:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
         Fullname:{
            type:String,
            require :true,
            unique:true,
            lowercase:true,
            trim:true,
            index:true
        },
        Password:{
            type:String,
            require:[true,"PassWord is Required"] 
        },
        isEmailVerified:{
            type:Boolean,
            default:false
        },
        refreshTokenTolen:{
            type:String
        },
         ForgotPasswordToken:{
            type:String
        },
        ForgotPasswordExpiry:{
            type:Date
        },
        emailVerificationToken:{
            type:String
        },
        emailVerificationExpiry:{
            type:String
        }
    },
    {
        timestamps:true,
    },
);

userSchema.pre("save",async function (next){
   if(!this.isDirectModified("Password")) return next()
    
    this.Password =  await bcrypt.hash(this.Password,10)
    next()
});

export const User  = mongoose.model("User",userSchema)
