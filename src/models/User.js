import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        },
        username: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minLength: 8
        },
        isAdmin: {
            type: Boolean,              //? Means isAdmin can either be false or true 
            required: true
        }
    },
    {
        timestamps: true                                        //? Creates 2 fields: date-created && date-modified
    }
)

const User = mongoose.model("User", userSchema)

export default User