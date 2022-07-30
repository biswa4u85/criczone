import noData from "../assets/img/nodata.jpg";
import playBtn from "../assets/img/svg/play-btn.svg";
export default {
    liveScoreApiURL: 'https://api.sports.roanuz.com/v5/core/RS_P_1546828966243995659/graphql',
    apiKey: 'RS5:3b28e1af862fe552f9cade04db1a8705',
    frappe_url: 'https://news.techwizards.io',
    token: 'token 8013775618bd3a7:8fa905e93b04d2b',
    randerImage: (src, height, imgHeight) => {
        let imageURL = src ? (String(src).includes('https://') ? src : 'https://news.techwizards.io' + src) : noData
        return <div style={{ textAlign: "center", objectFit: 'cover', height: height }}>
            <img style={{ height: (imgHeight ? imgHeight : 'inherit') }} src={imageURL} alt="image" />
            {/* <div className="news-vcard-play">
                <a className="vimo1" href="https://vimeo.com/63729905"><img
                    src={playBtn} alt="image" /></a>
            </div> */}
        </div>
    },
    trunCate: (str, max, suffix) => {
        return str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))} ${suffix}`
    }
}