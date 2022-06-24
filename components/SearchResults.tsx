import { useMemo } from "react"
import { ProductItem } from "./ProductItem"

export interface SearchResultsProps {
  results: Array<{
    id: number
    price: number
    title: string
  }>
}

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price
    }, 0)
  }, [results])

  return (
    <div>

      <h2>Total: {totalPrice}</h2>
      {
        results.map(product => {
          return (
            <ProductItem key={product.id} product={product} />
          )
        })
      }
    </div>
  )
}

/**
 * Fluxo de renderização do React
 * 1. Cria uma nova versão do componente
 * 2. Comparar com a versão anterior
 * 3. Se houverm alterações, vai atualizar o que alterou
 */

/**
 * useMemo / useCallback
 * 1. Cálculos pesados
 * 2. Igualdade referencial ( quando a gente repassa aquela informação a um componente filho)
 */