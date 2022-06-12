
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { useState } from 'react';

import './SearchField.css';


function SearchField() {

    const [visibleSearchResult, setVisibleSearchResult] = useState(false);

    const handleShowSearchResult = () => {
        setVisibleSearchResult(pre => {
            if (pre) {
                return false;
            } else {
                return true;
            }
        });
    }


    return (
        <>
            <div className="search-size position-relative">
                <Tippy
                    visible={visibleSearchResult}
                    interactive={true}
                    render={attrs => (
                        <div className="box-search-result" tabIndex="-1" {...attrs}>
                            <div className="search-result-content">
                                
                                <div className="search-result-content-item">
                                    <img src="http://st.nettruyenco.com/data/comics/85/thon-phe-mot-the-gioi-tu-tien.jpg" className="search-result-item--img" alt="" />
                                    <p className="search-result-item--info">
                                        Thôn phệ một thế giới tu tiên
                                    </p>
                                </div>
                                

                                {/* <div className="search-result-none">
                                    <div className="search-result-none-icon">
                                        <FontAwesomeIcon icon={faBoxOpen} />
                                    </div>
                                    <div className="search-result-none-text">
                                        Không có kết quả nào phù hợp
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    )}

                >
                    <div className="d-flex align-items-center input-group border border-color-white border-radius">
                        <input
                            type="text"
                            name="search"
                            className="form-control bg-transparent border-0"
                            placeholder="Search titles, author, genres..." autoComplete="off"
                            onFocus={handleShowSearchResult}
                            onBlur={handleShowSearchResult}
                        />
                        <div className="input-group-append">
                            <button
                                className="d-lg-block d-none btn btn-outline-secondary border-0 border-start border-color-white"
                                type="submit">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </div>
                </Tippy>

            </div>
        </>
    );
}

export default SearchField;