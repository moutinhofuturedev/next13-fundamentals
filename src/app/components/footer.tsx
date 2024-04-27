// components/Footer.js

export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} Paulo Moutinho. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}
