
import {Deserializable} from "./deserializable.model";

export class User implements Deserializable<User> {
    public error_id: string;
    public error_type:string;
    public error_Description:string;
    public error_place:string;

  deserialize(input: any):User {
    Object.assign(this, input);
    return this;
  }
}