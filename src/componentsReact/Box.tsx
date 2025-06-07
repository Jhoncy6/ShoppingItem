import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import './Flip.css';
import { ArrowLeft } from 'lucide-react';


interface BoxProps {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  onAddToCart: (product: { title: string; price: number; image: string }) => void;
}


export function BoxProduct({ title, price, description, category, image, onAddToCart}: BoxProps) {
  const [flipped, setFlipped] = useState(false);
  
  const handleAddToCart = () => {
    onAddToCart({ title, price, image });
  };


   return (
    <div className="w-full max-w-[500px] m-3 perspective">
      <div
        className={`relative w-full h-[500px] transition-transform duration-700 preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
  
        <Card className="absolute inset-0 backface-hidden flex flex-col border-0 hover:shadow-2xl overflow-hidden">
          <CardHeader className="pb-2 pt-16">
            <CardTitle className="text-center text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              {title}
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-grow flex flex-col items-center justify-center space-y-4">
            <div className="relative group-hover:scale-105 transition-transform duration-300">
              <img
                className="w-40 h-40 object-contain"
                src={image}
                alt={title}
              />
            </div>

            <p className="mt-2 font-bold text-2xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              R$ {price.toFixed(2)}
            </p>
            
            <div className='flex space-x-4'>
            <Button
              className="mt-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:scale-105 rounded-full px-5" onClick={handleAddToCart}
            >
              Adicionar ao Carrinho
            </Button>

            <Button
              onClick={() => setFlipped(true)}
              className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white transition-all duration-300 hover:scale-105 rounded-full px-8"
            >
              Mais Informações
            </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center bg-gray-100 border-0  p-6">
          <Button
              className="mt-4 bg-red-500  text-white hover:scale-105 rounded-full px-10" onClick={() => setFlipped(false)}
            >
             <ArrowLeft/> Voltar
            </Button>
          <p className="text-gray-400 text-1x1 text-center"> {category}</p>
          <p className="text-black text-1x1 text-center">
            {description}
          </p>
          <Button
              className="mt-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:scale-105 rounded-full px-5" onClick={handleAddToCart}
            >
              Adicionar ao Carrinho
            </Button>
        </Card>
      </div>
    </div>
  );
};

