import { CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

interface CarouselProps {
  image: string[];
  loop: boolean;
}

export function ImageCarousel({ image, loop}: CarouselProps) {
  return (
    <Carousel className="w-full max-h-full" opts={{
        align: "start",
        loop: loop,
      }}>
      <CarouselContent className='p-0'>
        {image.map((imgSrc, index) => (
          <CarouselItem className='pl-0 pr-0 p-0' key={index}>
            <div className="p-1">
                <CardContent className="p-0">
                  <img
                    src={imgSrc}
                    className="w-full h-180 object-fill"
                  />
                </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
