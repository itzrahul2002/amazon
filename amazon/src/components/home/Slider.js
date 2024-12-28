import React from 'react'
import { Carousel,CarouselItem } from 'react-bootstrap'

const Slider = () => {
  return (
    <>
        <div style={{width:"100%",marginTop:"0%", zIndex:"-1"}}>
            <Carousel>
                <CarouselItem>
                    <img src="./image/slider1.jpg" alt="" srcset="" style={{width:"100%"}} className="homebackground"/>
                </CarouselItem>
                <CarouselItem>
                    <img src="./image/slider2.jpg" alt="" srcset="" style={{width:"100%"}} className="homebackground"/>
                </CarouselItem>
                <CarouselItem>
                    <img src="./image/slider3.jpg" alt="" srcset="" style={{width:"100%"}} className="homebackground"/>
                </CarouselItem>
                <CarouselItem>
                    <img src="./image/slider4.jpg" alt="" srcset="" style={{width:"100%"}} className="homebackground"/>
                </CarouselItem>
                <CarouselItem>
                    <img src="./image/slider5.jpg" alt="" srcset="" style={{width:"100%"}} className="homebackground"/>
                </CarouselItem>
                <CarouselItem>
                    <img src="./image/slider6.jpg" alt="" srcset="" style={{width:"100%"}} className="homebackground"/>
                </CarouselItem>
                <CarouselItem>
                    <img src="./image/slider7.jpg" alt="" srcset="" style={{width:"100%"}} className="homebackground"/>
                </CarouselItem>
                <CarouselItem>
                    <img src="./image/slider8.jpg" alt="" srcset="" style={{width:"100%"}} className="homebackground"/>
                </CarouselItem>
                <CarouselItem>
                    <img src="./image/slider9.jpg" alt="" srcset="" style={{width:"100%"}} className="homebackground"/>
                </CarouselItem>
                <CarouselItem>
                    <img src="./image/slider10.jpg" alt="" srcset="" style={{width:"100%"}} className="homebackground"/>
                </CarouselItem>
            </Carousel>
        </div>
    </>
  )
}

export default Slider