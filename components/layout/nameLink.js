import Link from 'next/link';

function NameLink({ page, name }) {
  return (
    <div className="bg-transparent link-hover text-xl">
      <Link href="/">Jess Wilton</Link>
    </div>
  );
}
export default NameLink;
