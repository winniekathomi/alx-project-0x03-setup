// pages/users.tsx
import React from "react";
import Layout from "@/components/layouts/Layout";
import UserCard from "@/components/UserCard";

const mockUsers = [
  {
    name: "Ada Lovelace",
    email: "ada@history.dev",
    bio: "First computer programmer.",
    avatarUrl: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Alan Turing",
    email: "alan@enigma.dev",
    bio: "Mathematician and cryptanalyst.",
    avatarUrl: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Grace Hopper",
    email: "grace@navy.dev",
    bio: "Invented the first compiler.",
    avatarUrl: "https://i.pravatar.cc/100?img=3",
  },
];

const UsersPage = () => {
  return (
    <Layout pageRoute="/users">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {mockUsers.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            bio={user.bio}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    </Layout>
  );
};

export default UsersPage;
