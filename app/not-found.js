import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="nf-wrap">
      <div className="nf-card">
        <div className="eyebrow">404</div>
        <h1 className="nf-title">This page went missing.</h1>
        <p className="nf-text">
          The page you are looking for does not exist or has moved. Everything
          you need is back on the homepage.
        </p>
        <Link href="/" className="btn btn-dark">
          Back to Homepage
        </Link>
      </div>
    </main>
  );
}
