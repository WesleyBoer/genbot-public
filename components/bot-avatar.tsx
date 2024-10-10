import { Avatar, AvatarImage } from "./ui/avatar";

const BotAvatar = () => {
  return (
    <Avatar className="shadow-sm">
      <AvatarImage src="/logo.png" className="p-1" />
    </Avatar>
  );
};

export default BotAvatar;
