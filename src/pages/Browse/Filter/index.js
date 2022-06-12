// import 'bootstrap/dist/css/bootstrap.min.css';
import './Filter.css';
import { useState, useEffect } from 'react';


const filterStatus = ["Tất cả", "Hoàn thành", "Đang tiến hành"];
const filterTypes = ["Action", "Adventure", "Chuyển sinh", "Comic", "Cổ Đại", "Drama", "Anime", "Manhua", "Manhwa", "Shounen", "Shoujo", "Slice of Life", "Sports", "Supernatural", "Trinh thám", "Võ lâm", "Hài", "Huyền bí", "Tình cảm", "Thể loại khác"];
const sortBys = ["Mặc định", "Mới nhất", "Cũ nhất", "Tên A-Z", "Tên Z-A", "Lượt xem nhiều nhất", "Lượt xem ít nhất"];


function Filter() {

    const [filterStatusValue, setFilterStatusValue] = useState(filterStatus[0]);
    const [filterTypeValue, setFilterTypeValue] = useState([]);
    const [displayFilterBtn, setDisplayFilterBtn] = useState(false);

    const handleChangeFilterType = (item) => {
        setFilterTypeValue(pre => {
            if (pre.includes(item)) {
                return pre.filter(i => i !== item);
            } else {
                return [...pre, item];
            }
        })
    }

    const handleClearFilter = () => {
        setFilterStatusValue(filterStatus[0]);
        setFilterTypeValue([]);
    }


    useEffect(() => {
        if ((filterTypeValue.length > 0) || (filterStatusValue !== filterStatus[0])) {
            setDisplayFilterBtn(true);
        } else {
            setDisplayFilterBtn(false);
        }
    }, [filterStatusValue, filterTypeValue]);



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
                                            filterTypes.map((item, index) => (
                                                <div className="col-6 col-md-4 col-lg-6" key={index}>
                                                    <div className="check-item mb-2">
                                                        <label className="d-flex align-items-center">
                                                            <input type="checkbox"
                                                                className="filter-check-input filter-input"
                                                                checked={filterTypeValue.includes(item)}
                                                                onChange={() => handleChangeFilterType(item)}
                                                            />
                                                            <span className="check-item-text ms-2">
                                                                {item}
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
                        <div className="filter-item">
                            <div className="filter-item-title">
                                <p className="text-start">
                                    Release Status
                                </p>
                            </div>
                            <div className="filter-item-content">
                                <div className="radio-group">
                                    <form>
                                        <div className="row">

                                            {
                                                filterStatus.map((item, index) => (
                                                    <div className="col-6 col-md-3 col-lg-6" key={index}>
                                                        <div className="radio-item mb-2">
                                                            <label className="d-flex align-items-center">
                                                                <input type="radio"
                                                                    className="filter-radio-input filter-input"
                                                                    checked={item === filterStatusValue}
                                                                    value=""
                                                                    onChange={() => setFilterStatusValue(item)}
                                                                />
                                                                <span className="radio-item-text ms-2">
                                                                    {item}
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                ))
                                            }

                                        </div>
                                    </form>
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
                                aria-label="select example">
                                {
                                    sortBys.map((item, index) => (
                                        <option className="background-black" key={index} value="">{item}</option>

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