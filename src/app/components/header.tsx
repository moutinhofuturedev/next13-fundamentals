import Link from 'next/link'

export const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-semibold">
          Home
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/catalog" className="text-white hover:text-gray-300">
                Catalog
              </Link>
            </li>
            <li>
              <Link href="/admin" className="text-white hover:text-gray-300">
                Admin
              </Link>
            </li>
            <li>
              <Link href="/sign-in" className="text-white hover:text-gray-300">
                Sign In
              </Link>
            </li>
            <li>
              <Link href="/sign-up" className="text-white hover:text-gray-300">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
