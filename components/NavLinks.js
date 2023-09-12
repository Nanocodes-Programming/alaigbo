import Link from 'next/link';
const NavLinks = ({ item }) => {
  const { link, title } = item;

  return (
    <Link className="text-white w-fit py-2 px-4 mb-4" href={link}>
      {title}
    </Link>
  );
};

export default NavLinks;
