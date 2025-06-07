import { useEffect } from "react"
import { toast } from "sonner"
interface LoadingOrErrorProps {
  loading: boolean;
  error: string | null;
}

export function LoadingOrError({ loading, error }: LoadingOrErrorProps) {
  useEffect(() => {
    if (loading) {
      toast.success("Carregando dados da API")
    }
  }, [loading])

  useEffect(() => {
    if (error) {
      toast.error(`Erro: ${error}`)
    }
  }, [error])

  return null
}
