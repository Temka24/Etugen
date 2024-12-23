import mongoose, {Document, model, models, Schema} from "mongoose";

export interface IUser extends Document{
    phone: number;
    password: any;
}

const userSchema: Schema = new Schema({
    phone: { type: Number, required: true, unique: true },
    password: {type: String, required: true}
})

export default models.User || model<IUser>('User', userSchema);