import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ShoppingCart as ShoppingCartIcon  } from "lucide-react";

interface ShoppingCartProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  cartItems: { title: string; price: number; image: string; quantity: number }[];
  onRemoveItem: (title: string) => void;
  onUpdateQuantity: (title: string, quantity: number) => void;
}

export function ShoppingCart({
  isOpen,
  onOpenChange,
  cartItems,
  onRemoveItem,
}: ShoppingCartProps) {

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="bg-gray-200 border-0 flex flex-col h-full">
        
        <SheetHeader>
          <SheetTitle className="text-center">Seu Carrinho</SheetTitle>
        </SheetHeader>

        <div className="p-4 overflow-y-auto flex-grow">
          {cartItems.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            <div>
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                  <div className="flex flex-col ml-4">
                    <span className="font-semibold">{item.title}</span>
                    <span>R${item.price.toFixed(2)} x {item.quantity}</span>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.title)}
                    className="text-red-500"
                  >
                    Remover
                  </button>
                </div>
              ))}

              <div className="mt-4 border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">R${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center p-4 border-t bg-white">
          <button 
            onClick={() => onOpenChange(false)} 
            className=" cursor-pointer bg-blue-500 text-white py-2 px-4 rounded"
          >
            Fechar
          </button>
          <button 
            className="cursor-pointer flex items-center bg-green-500 text-white py-2 px-4 rounded"
          >
            <ShoppingCartIcon className="mr-2 " /> Finalizar Compra
          </button>
        </div>

      </SheetContent>
    </Sheet>
  );
}
