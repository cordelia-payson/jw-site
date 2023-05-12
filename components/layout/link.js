import Link from 'next/link';
import { useRouter } from 'next/router';

function HeaderLink({ page, name }) {
  const router = useRouter();
  return (
    <div className="bg-transparent link-hover">
      <Link href={page} className={`${router.pathname === page && 'underline'}`}>{name}</Link>
    </div>
  );
}
export default HeaderLink;
