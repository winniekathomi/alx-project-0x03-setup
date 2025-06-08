// components/UserCard.tsx
import React from "react";
import Image from "next/image";

export interface UserCardProps {
  name: string;
  email: string;
  bio: string;
  avatarUrl: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email, bio, avatarUrl }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-sm text-center">
      <Image
        src={avatarUrl}
        alt={`${name}'s avatar`}
        width={100}
        height={100}
        className="mx-auto rounded-full mb-4"
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600 text-sm">{email}</p>
      <p className="mt-2 text-gray-700">{bio}</p>
    </div>
  );
};

export default UserCard;
