import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="text-gray-800 text-2xl">
        Return Home
      </Link>
    </div>
  )
}

export default NotFound
