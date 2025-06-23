import LoginButton from "@/components/LoginButton";
import UserList, { User } from "@/components/UserList";
import db from "@/../lib/db";

export default function Home() {
  const users = db.getAll() as User[];
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 p-24">
      <div className="bg-white rounded-3xl shadow-2xl p-20 max-w-4xl w-full">
      <h1 className="text-7xl font-extrabold text-center text-purple-700 mb-14 drop-shadow-2xl">
        Google Login <span className="text-blue-500">&</span> SQLite
      </h1>
      <div className="flex justify-center mb-14">
        <LoginButton />
      </div>
      <UserList users={users} />
      </div>
    </main>
  );
}
