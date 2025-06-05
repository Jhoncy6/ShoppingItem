import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"

interface BoxProps {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export function BoxProduct({ title, price, description, category, image }: BoxProps) {

  return (
    <Card className="w-150 m-3 flex flex-col h-[420px]">
      <CardHeader>
        <CardTitle className='text-center font-size'>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col items-center justify-center">
        <img className="w-40 h-40 object-contain" src={image} alt={title} />
        <p className="line-clamp-2 text-center mt-2">{description}</p>
        <p className="mt-2 text-sm text-gray-600">{category}</p>
        <p className="font-bold text-lg">R$ {price.toFixed(2)}</p>
        <Button
          className="mt-2 bg-green-600 text-white transform transition-transform duration-300 hover:scale-105"
          variant="secondary"
        >
          Adicionar ao carrinho
        </Button>
      </CardContent>
    </Card>
  );
}
