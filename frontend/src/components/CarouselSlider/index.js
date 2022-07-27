

import InfiniteCarousel from 'react-leaf-carousel';


function CarouselSlider({ children }) {
    return (
        <>
            <InfiniteCarousel
                breakpoints={[
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        },
                    },
                ]}
                dots={false}
                showSides={true}
                sidesOpacity={.2}
                sideSize={.1}
                slidesToScroll={1}
                slidesToShow={5}
                scrollOnDevice={true}
                autoCycle={true}
                animationDuration={700}
                cycleInterval={4000}
            >

                {
                    children
                }

            </InfiniteCarousel>
        </>
    );
}

export default CarouselSlider;