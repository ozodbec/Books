import Link from "next/link";

function NotFoundPage() {
  return (
    <div> 
      <h1>Not Found Page</h1>
      <Link className="btn btn-primary" href="/">Go Home</Link>
    </div>
  );
}

export default NotFoundPage;
