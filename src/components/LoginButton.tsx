"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    console.log("Session:", session);
    return (
      <div className="flex items-center space-x-4 bg-white rounded-lg shadow p-4">
        <img
          src={session.user?.image ?? ""}
          alt={session.user?.name ?? "User"}
          className="w-12 h-12 rounded-full border object-cover"
        />
        <div>
          <p className="text-gray-900 font-semibold">{session.user?.name}</p>
          <p className="text-gray-500 text-sm">{session.user?.email}</p>
        </div>
        <button
          onClick={() => signOut()}
          className="ml-auto px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Çıkış Yap
        </button>
      </div>
    );
  }
    return (
        <div className="flex items-center space-x-4 bg-white rounded-lg shadow p-4">
            <img
                src="https://i.pinimg.com/736x/a9/c8/e1/a9c8e13fb0c0f071bf90846f643a03bd.jpg"
                alt="Guest"
                className="w-12 h-12 rounded-full border object-cover"
                />
            <div>
                <p className="text-gray-900 font-semibold">Misafir</p>
                <p className="text-gray-500 text-sm">Giriş yapmadınız</p>
            </div>
            <button
                onClick={() => signIn("google")}
                className="ml-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                Google ile Giriş
            </button>
        </div>
    )     
}
