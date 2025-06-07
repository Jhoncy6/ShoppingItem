import { useProducts } from './ProductApi';
import { BoxProduct } from './componentsReact/Box';
import { ImageCarousel } from './componentsReact/Carousel';
import { NavBar } from './componentsReact/NavBar';
import { LoadingOrError } from './componentsReact/Toast-loading';
import LogoSemFundo from './img/LogoSemFundo.png'
import Image1 from './img/Carrosel/KidDay.jpg';
import Image2 from './img/Carrosel/Day.jpg';
import { useState } from 'react';
import { ShoppingCart } from './componentsReact/ShoppingCart';
interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

function App() {
  const { products, loading, error } = useProducts();
  const imagensCarousel:string[] = [ Image1,Image2]
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

   const handleAddToCart = (product: { title: string; price: number; image: string }) => {
    setCartItems((prevItems) => {
      
      const existingItem = prevItems.find((item) => item.title === product.title);

      if (existingItem) {
      
        return prevItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
       
        const newCartItem: CartItem = {
          id: Date.now().toString(),
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1, 
        };
        return [...prevItems, newCartItem];
      }
    });
  };

  const handleRemoveItem = (title: string) => {
  setCartItems((prevItems) => prevItems.filter((item) => item.title !== title));
};

const handleUpdateQuantity = (title: string, quantity: number) => {
  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.title === title ? { ...item, quantity } : item
    )
  );
};

  return (
    <>
    <LoadingOrError loading={loading} error={error} />

    <NavBar onCartClick={() => setIsCartOpen(true)} logo={LogoSemFundo} title={['Home']} />

    <ShoppingCart isOpen={isCartOpen} onOpenChange={setIsCartOpen} cartItems={cartItems} onRemoveItem={handleRemoveItem} onUpdateQuantity={handleUpdateQuantity}/>

    <ImageCarousel loop={true} image ={imagensCarousel}/>

    <div className="flex flex-row flex-wrap justify-around">
    {products.map(product => (
        <BoxProduct
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          onAddToCart={handleAddToCart}
        />
      ))}
      </div>
    </>
  );
}

export default App;
