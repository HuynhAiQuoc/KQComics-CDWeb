
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'


import './Home.css'
import Card from '~/components/Card';
import CarouselSlider from '~/components/CarouselSlider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


import banner_1 from '~/assets/img/banner/banner_1.jpg';
import banner_2 from '~/assets/img/banner/banner_2.jpg';
import banner_3 from '~/assets/img/banner/banner_3.jpg';
import banner_4 from '~/assets/img/banner/banner_4.jpg';
import banner_5 from '~/assets/img/banner/banner_5.jpg';
import banner_6 from '~/assets/img/banner/banner_6.jpg';

import genreLists from '~/data/genreLists.json'


import { useState, useEffect } from 'react';

const banners = [banner_1, banner_2, banner_3, banner_4, banner_5, banner_6];

function Home() {

    const [genres, setGenres] = useState([])

    useEffect(() => {
        setGenres(genreLists)
    }, [])


    return (
        <>
            <div className="wrapper">
                <div className="col-12">
                    <div className="ps-xl-5 ms-xl-3 pe-xl-5 me-xl-3 spacing-header">
                        <div className="row">
                            <div className="mt-4">
                                <Carousel
                                    interval={5000}
                                    controls={false}
                                    indicators={false}
                                    pause={false}
                                >
                                    {banners.map((banner, index) => (
                                        <Carousel.Item key={index}>
                                            <img
                                                className="d-block w-100"
                                                src={banner}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-md-12 col-lg-9">
                                        <div className="mt-2 mb-2">
                                            <div >
                                                <div className="mt-4 pe-0 ps-0 mb-4 pb-1 border-bottom border-color-white">
                                                    <h5 className="text-white mb-1">TRUYỆN HOT</h5>
                                                </div>
                                                <CarouselSlider >
                                                    {/* <Card />
                                                    <Card />
                                                    <Card />
                                                    <Card />
                                                    <Card />
                                                    <Card />
                                                    <Card /> */}
                                                </CarouselSlider>
                                            </div>
                                            <div >
                                                <div className="mt-4 ps-0 mb-4 pb-1 border-bottom border-color-white">
                                                    <h5 className="text-white mb-1">TRUYỆN MỚI</h5>
                                                </div>
                                                <CarouselSlider >
                                                    {/* <Card />
                                                    <Card />
                                                    <Card />
                                                    <Card />
                                                    <Card />
                                                    <Card />
                                                    <Card /> */}
                                                </CarouselSlider>
                                            </div>
                                            <div >
                                                <div className="mt-4 ps-0 mb-4 pb-1 border-bottom border-color-white">
                                                    <h5 className="text-white mb-1">TRUYỆN MỚI CẬP NHẬT</h5>
                                                </div>
                                                <CarouselSlider >
                                                    {/* <Card />
                                                    <Card />
                                                    <Card />
                                                    <Card />
                                                    <Card />
                                                    <Card />
                                                    <Card /> */}
                                                </CarouselSlider>
                                            </div>
                                            <div >
                                                <div className="mt-4 ps-0 mb-4 pb-1 border-bottom border-color-white">
                                                    <h5 className="text-white mb-1">TRUYỆN</h5>
                                                </div>
                                                <CarouselSlider >
                                                    {/* <Card />
                                                    <Card />
                                                    <Card />
                                                    <Card />
                                                    <Card />
                                                    <Card />
                                                    <Card /> */}
                                                </CarouselSlider>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 d-lg-block d-none p-0">
                                        <div className="explore mt-5 ps-3 pe-2">
                                            <div className="row">
                                                <h4 className="title text-white">
                                                    Khám phá
                                                </h4>
                                            </div>
                                            {
                                                genres.map((item, index) => (
                                                    <div className="row" key={index}>
                                                        <a href="/">
                                                            <div className="mt-2 mb-2">
                                                                <div className="background-header d-flex align-items-center pe-3 rounded-3 explore-color--hover">
                                                                    <img src={item.iconImage} alt="" style={{ width: '56px' }} />
                                                                    <span className="text-white ms-3">{item.name}</span>
                                                                    <span className="text-white ms-auto">
                                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                ))
                                            }


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;