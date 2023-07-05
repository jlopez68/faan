import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema(
    {
      name: { type: String, required:true, trim: true },
      email: { type: String, required: true, trim: true },
      celular: { type: String, trim: true, required:true },
      pagina:{ type: String, trim: true, required:true }
    }
    ,
    {
      timestamps: true,
      versionKey: false,
    }

  );
 // const User = mongoose.model('User', UserSchema);
 // module.export = User;  
  
export default mongoose.model("User", UserSchema);