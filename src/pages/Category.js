import React, { useEffect } from "react";
import { Pagination } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import moment from "moment";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getNewsListByCat } from '../store/MainRedux'
import Config from "../common/Config";
import { Helmet } from "react-helmet";

function Category(props) {
    let navigate = useNavigate();
    let { Id } = useParams();
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const token = Config.token
    const categorys = useSelector((state) => state.auth.categorys)
    const newsListByCat = useSelector((state) => state.auth.newsListByCat.data)
    const newsListByCatCount = useSelector((state) => state.auth.newsListByCat.count)
    const category = categorys.find((x) => x.name == Id)

    useEffect(() => {
        window.scrollTo(0, 0)
        handlePageChange()
        if (!category) {
            navigate('/')
        }
    }, [Id]);


    const handlePageChange = (page = 1, size = 12) => {
        let params = { token, Id, page, size }
        dispatch(getNewsListByCat(params))
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{category?.meta_title}</title>
                <meta name="description" content={category?.meta_description} />
            </Helmet>
            <section className="single-post-area">
                <div className="container">
                    <div className="weekly-list-item">
                        {newsListByCat ? newsListByCat.map((item, key) => <div key={key} className="news-vcard-single">
                            <div className="news-vcard-img">
                                {Config.randerImage(item, 220)}
                            </div>
                            <div className="news-vcard-content">
                                <div className="news-vcard-title">
                                    <span>{moment.utc(item.published_time).format('hh:mm A')}</span>
                                    <span>{moment.utc(item.published_on).format('Do MMM YYYY')}</span>
                                    <span>{item.blogger}</span>
                                </div>
                                <h3><NavLink to={`/news/${item.route}`}>{Config.trunCate(item.title, '2')}</NavLink></h3>
                            </div>
                        </div>) : null}
                    </div>
                    <div style={{ marginTop: 10, textAlign: 'right' }}><Pagination onChange={handlePageChange} defaultCurrent={1} pageSize={12} total={newsListByCatCount} /></div>
                </div>
            </section>

        </>
    );
}

export default Category;
