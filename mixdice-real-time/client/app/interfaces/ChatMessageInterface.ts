import UserInterface from './UserInterface';

interface IChatMessage {
  id: string | number;
  message: string;
  date: Date;
  user: UserInterface;
  isMe: boolean;
}

export default IChatMessage;
