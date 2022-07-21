
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

import './Home.css'
import Card from '~/components/Card';
import CarouselSlider from '~/components/CarouselSlider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import genreLists from '~/data/genreLists.json'
import data from '~/data/data.json'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next';


import { useState } from 'react';

function Home() {

    const { t } = useTranslation();

    const [genres] = useState([...genreLists]);
    const [banners] = useState(() => {
        const tem = data.sort((a, b) => { return b.favoriteCount - a.favoriteCount; });
        let result = [];
        for (let i = 0; i < 50; i++) { result.push(tem[i]) }
        return result;
    });
    const [hostComics] = useState(() => {
        const tem = data.sort((a, b) => { return b.favoriteCount - a.favoriteCount; });
        let result = [];
        for (let i = 0; i < 30; i++) { result.push(tem[i]) }
        return result;
    });

    const [suggestComics] = useState(() => {
        const tem = data.sort((a, b) => { return b.starScoreAverage - a.starScoreAverage; });
        let result = [];
        for (let i = 0; i < 50; i++) { result.push(tem[i]) }
        return result;
    })



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
                                            <Link to={`/detail?titleNo=` + banner.titleNo}>
                                                <img
                                                    className="d-block w-100 img-banner"
                                                    src={'https://webtoon-phinf.pstatic.net' + banner.bgNewIpad}
                                                    alt="First slide"
                                                />
                                            </Link>
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
                                                    {
                                                        hostComics.map((comic) => (
                                                            <Card comic={comic} key={comic.titleNo} />
                                                        ))
                                                    }
                                                </CarouselSlider>
                                            </div>
                                            <div >
                                                <div className="mt-2 ps-0 mb-4 pb-1 border-bottom border-color-white">
                                                    <h5 className="text-white mb-1">TRUYỆN ĐỀ CỬ</h5>
                                                </div>
                                                <div className="row">
                                                    {
                                                        suggestComics.map((comic) => (
                                                            <div key={comic.titleNo} className="col-6 col-sm-4 col-md-3 five-columns p-2">
                                                                <Card comic={comic} />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-3 d-lg-block d-none p-0">
                                        <div className="explore mt-4 ps-3 pe-2">
                                            <div className="row">
                                                <h5 className="title text-white">
                                                    KHÁM PHÁ
                                                </h5>
                                            </div>
                                            {
                                                genres.map((item, index) => (
                                                    <div className="row" key={index}>
                                                        <Link to={`/browse?genre=` + item.code}>
                                                            <div className="mt-2 mb-2">
                                                                <div className="background-header d-flex align-items-center pe-3 rounded-3 explore-color--hover">
                                                                    <img src={item.iconImage} alt="" style={{ width: '56px' }} />
                                                                    <span className="text-white ms-3">{item.name}</span>
                                                                    <span className="text-white ms-auto">
                                                                        <FontAwesomeIcon icon={faAngleRight} />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </Link>
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