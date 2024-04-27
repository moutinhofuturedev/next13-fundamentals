import Admin from '@/app/admin/page'
import { Button } from './components/button'

interface ProductsProps {
  params: {
    id: string
  }
}

const Products = async ({ params }: ProductsProps) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <div className="flex flex-col items-start min-h-screen">
      <h1>Products {params.id}</h1>

      {/* O componente Button que é um client component, recebe um children */}
      {/* O componente Admin que é um server component sendo renderizado como um children dentro de um client component */}
      <Button>
        <Admin />
      </Button>
    </div>
  )
}

export default Products

// Server Components => Não usa JavaScript no lado do cliente
// Client Components => Usa JavaScript no lado do cliente
