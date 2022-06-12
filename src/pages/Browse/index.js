
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Filter/index.js'
import Pagination from './Pagination/index.js'
import Card from '~/components/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';


function Browse() {

    const [showFilter, setShowFilter] = useState(false);
    const [textFilterBtn, setTextFilterBtn] = useState("Lọc truyện");

    const handleShowFilter = () => {
        setShowFilter(pre => {
            if (pre) {
                return false;
            } else {
                return true;
            }
        });
        setTextFilterBtn(pre => {
            if (pre === "Lọc truyện") {
                return "Ẩn lọc truyện";
            }
            else {
                return "Lọc truyện";
            }
        });
    }

    return (
        <>
            <div className="col-md-12 col-lg-9">
                <div className="ps-xl-5 pe-xl-5 spacing-header">
                    <div className="row">
                        <div className="mt-4 mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-start align-items-center">
                                    <button className="d-lg-none d-block btn btn-previous text-white me-2">
                                        <FontAwesomeIcon icon={faArrowLeft} />
                                    </button>
                                    <div className="title">
                                        <h4 className="text-white mb-1">Manga</h4>
                                    </div>
                                </div>

                                <button
                                    className="d-lg-none d-flex filter-btn bg-transparent text-yellow border border-color-yellow rounded-3"
                                    onClick={handleShowFilter}
                                >
                                    {textFilterBtn}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 d-lg-none d-block p-0">
                            {showFilter && <Filter />}
                        </div >
                    </div>

                    <div className="row">
                        <div className="col-6 col-sm-4 col-md-3 five-columns p-2">
                            <Card />
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 five-columns p-2">
                            <Card />
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 five-columns p-2">
                            <Card />
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 five-columns p-2">
                            <Card />
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 five-columns p-2">
                            <Card />
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 five-columns p-2">
                            <Card />
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 five-columns p-2">
                            <Card />
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 five-columns p-2">
                            <Card />
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 five-columns p-2">
                            <Card />
                        </div>

                    </div>

                    <div className="row">
                        <div className="d-flex justify-content-center mt-4">
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 d-lg-block d-none p-0">
                <div className="height-filter spacing-header overflow-auto fixed-custom width-inherit">
                    <div className=" border-start border-color-white">
                        <Filter />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Browse;