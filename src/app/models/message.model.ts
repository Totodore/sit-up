import { User } from "./user.model";

export interface Message {
    id: number;
    sender: User;
    receiver: User;
    date: Date;
    message: string;
}