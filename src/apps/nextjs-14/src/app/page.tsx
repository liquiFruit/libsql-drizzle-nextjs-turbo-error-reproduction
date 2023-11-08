import { getUsers } from "db/src/index";

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>users: {JSON.stringify(users)}</div>
    </main>
  );
}
