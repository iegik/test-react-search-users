import {
  Routes,
  Route,
  Outlet,
  Link as RRLink,
  BrowserRouter,
} from "react-router-dom";
import ReactIcon from "@/assets/logo.svg?react";

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

export function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-md text-center">
        <div className="inline-block rounded-full bg-primary p-2">
          <ReactIcon className="h-32 w-32 text-primary-foreground" />
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Simplicity at its Finest
        </h1>
        <p className="mt-4 text-muted-foreground">
          Discover the power of minimalism with our cutting-edge solutions.
        </p>
        <p className="mt-4">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="mt-6">
          <Link
            href="https://reactjs.org"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Learn React
          </Link>
        </div>
      </header>
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="" element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}

          {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
