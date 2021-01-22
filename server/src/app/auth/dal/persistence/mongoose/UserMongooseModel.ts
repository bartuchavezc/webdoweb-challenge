import { model } from "mongoose";
import { UserMongooseSchema } from "./UserMongooseSchema";

export default model('User', UserMongooseSchema);