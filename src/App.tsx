import {
  Routes,
  Route,
  Outlet,
  Link as RRLink,
  BrowserRouter,
} from "react-router-dom";
import { UserFilter } from "./components/user-filter";
import { UsersContext } from "./state/users";
import { Suspense, useEffect, useState } from "react";
import { ErrorDialog } from "./components/error-dialog";
import { Loader } from "./components/loader";

const Link = (props: { [x: string]: any; className: any; href: any }) => {
  const { className, href, ...restProps } = props;
  return (
    <RRLink
      className={className}
      to={href}
      {...(/^http/.test(href)
        ? { rel: "noopener noreferrer", target: "_blank" }
        : {})}
      {...restProps}
    />
  );
};

const Error500 = () => {
  return `500 error`
}

const defaultUsers: User[] = [];
export function Home() {
  const [users, setUsers] = useState<User[]>(defaultUsers);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/') //'/api/users')
        if (!res.ok) {
          setError(`Server request failed`);
          setLoading(false);
          return;
        }
        const data:User[] = await res.json()

        if (data.length) {
          setUsers(data);
        }
      } catch (e) {
        console.error(e);
        setError(`Server request failed`);
        setLoading(false);
      }
    }

    fetchUsers();
  }, [])

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <UsersContext.Provider value={users}>
        <UserFilter />
        {!loading && <Loader />}
      </UsersContext.Provider>
      <ErrorDialog message={error} />
    </div>
  );
}

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

function NoMatch() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Nothing to see here!
      </h2>
      <p className="mt-6">
        <Link
          href="/"
          className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          Go to the home page
        </Link>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<Error500 />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="" element={<Home />} />

            {/* Using path="*"" means "match anything", so this route
                    acts like a catch-all for URLs that we don't have explicit
                    routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
