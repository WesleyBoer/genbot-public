import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";

const UserAvatar = () => {
  const user = useCurrentUser();
  return (
    <Avatar className="shadow-sm">
      <AvatarImage src={user?.image || ""} />
      <AvatarFallback className="bg-[#111827] text-white">
        {user?.name?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
