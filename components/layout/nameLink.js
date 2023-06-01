import Link from 'next/link';

function NameLink({ page, name }) {
  return (
    <div className="bg-transparent link-hover text-2xl font-bold">
      <Link href="/">Jess Wilton</Link>
    </div>
  );
}
export default NameLink;
