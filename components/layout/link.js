import Link from 'next/link';

function HeaderLink({ page, name }) {
  return (
    <div className="bg-transparent link-hover">
      <Link href={page}>{name}</Link>
    </div>
  );
}
export default HeaderLink;
