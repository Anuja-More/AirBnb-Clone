import Link from 'next/link';

const Custom404 = () => {
  return (
    <div>
      <div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link>
         Home
        </Link>
      </div>
    </div>
  );
};

export default Custom404;