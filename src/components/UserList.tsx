import React from "react";

export type User = {
    id: string;
    name: string;
    email: string;
    image: string;
};

export type Props = {
    users: User[];
};

export default function UserList({ users }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {users.map((user) => (
        <div key={user.id} className="flex items-center bg-white rounded shadow p-4">
          <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <div className="font-bold">{user.name}</div>
            <div className="text-gray-500">{user.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
}