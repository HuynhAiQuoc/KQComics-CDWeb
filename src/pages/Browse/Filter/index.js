// import 'bootstrap/dist/css/bootstrap.min.css';
import './Filter.css';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'

import genreLists from '~/data/genreLists.json'

const sortBys = ["Mặc định", "Tên A-Z", "Tên Z-A", "Lượt xem nhiều nhất", "Lượt xem ít nhất"];


function Filter(props) {

    const [searchParams, setSearchParams] = useSearchParams();

    const [filterTypeValue, setFilterTypeValue] = useState([]);
    const [displayFilterBtn, setDisplayFilterBtn] = useState(false);
    const [sort, setSort] = useState(sortBys[0]);

    const handleChangeFilterType = (item) => {
        setFilterTypeValue(pre => {
            if (pre.includes(item)) {
                return pre.filter(i => i !== item);
            } else {
                return [...pre, item];
            }
        })
    }

    useEffect(() => {
        handleChangeFilterType(props.initialGenre);
    }, [props.initialGenre])


    const handleClearFilter = () => {
        setFilterTypeValue([]);
        setSort(sortBys[0]);
        searchParams.delete('genre');
        setSearchParams(searchParams);
    }

    const handleChangeSort = (event) => {
        setSort(event.target.value);
    }

    useEffect(() => {
        props.handleChangeSort(sort);
    }, [sort])


    useEffect(() => {
        if ((filterTypeValue.length > 0)) {
            setDisplayFilterBtn(true);
        } else {
            setDisplayFilterBtn(false);
        }
        setSort(sortBys[0])
        props.handleChangeFilterType(filterTypeValue);
    }, [filterTypeValue]);


    return (
        <>
            <div className="filter-content text-white pe-4 ps-4 pb-4 pt-lg-4">
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <div className="col-sm-6">
                            <h4 className="text-start mb-4">
                                Filter
                            </h4>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex justify-content-end">
                                <button
                                    className="btn font-weight-bold text-danger"
                                    onClick={handleClearFilter}
                                    hidden={!displayFilterBtn}
                                >
                                    Clear Filter
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="filter-item">
                            <div className="filter-item-title">
                                <p className="text-start">
                                    Key Genres
                                </p>
                            </div>
                            <div className="filter-item-content">
                                <div className="check-group">
                                    <div className="row">
                                        {
                                            genreLists.map((item) => (
                                                <div className="col-6 col-md-4 col-lg-6" key={item.index}>
                                                    <div className="check-item mb-2">
                                                        <label className="d-flex align-items-center">
                                                            <input type="checkbox"
                                                                className="filter-check-input filter-input"
                                                                checked={filterTypeValue.includes(item.code)}
                                                                onChange={() => handleChangeFilterType(item.code)}
                                                            />
                                                            <span className="check-item-text ms-2">
                                                                {item.name}
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <div className="border-bottom border-color-white mt-4 mb-3"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="filter-item-title">
                            <p className="text-start">
                                Sort By
                            </p>
                        </div>
                        <div className="sort text-white border border-color-white rounded-3 p-1 ps-3">
                            <select className="w-100 form-select-md bg-transparent text-white border-0"
                                aria-label="select example"
                                value={sort}
                                onChange={handleChangeSort}
                            >
                                {
                                    sortBys.map((item, index) => (
                                        <option className="background-black" key={index} value={item}>{item}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Filter;