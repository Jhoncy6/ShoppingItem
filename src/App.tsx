import { useProducts } from './ProductApi';
import { BoxProduct } from './componentsReact/Box';
import { ImageCarousel } from './componentsReact/Carousel';
import { NavBar } from './componentsReact/NavBar';
import { LoadingOrError } from './componentsReact/Toast-loading';
import LogoSemFundo from './img/LogoSemFundo.png'


import Image1 from './img/Carrosel/KidDay.jpg';
import Image2 from './img/Carrosel/Day.jpg';


function App() {
  const { products, loading, error } = useProducts();

  const imagensCarousel:string[] = [ Image1,Image2]
  
  return (
    <>
    <LoadingOrError loading={loading} error={error} />

    <NavBar logo={LogoSemFundo} title={['Home']} />

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
        />
      ))}
      </div>
    </>
  );
}

export default App;
