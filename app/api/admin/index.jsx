import { getSession } from "next-auth/react";

export default function AdminPage() {
  return <h1>Panel de administrador</h1>;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session || session.user.role !== "admin") {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
