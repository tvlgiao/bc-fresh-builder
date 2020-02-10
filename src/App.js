import React from 'react';
import './App.css';
import FreshClothesBannerCollection from './FreshClothesBannerCollection';
import FreshClothesBannerDeal from './FreshClothesBannerDeal';
import FreshClothesBannerThree from './FreshClothesBannerThree';
import FreshClothesInformation from './FreshClothesInformation';
import FreshFashionBannerCollection from './FreshFashionBannerCollection';
import FreshFashionBannerFull from './FreshFashionBannerFull';
import FreshFashionInstagram from './FreshFashionInstagram';
import FreshNovelsAuthor from './FreshNovelsAuthor';
import FreshNovelsBannerThree from './FreshNovelsBannerThree';
import FreshNovelsNewsletter from './FreshNovelsNewsletter';
import FreshSoundsInstagram from './FreshSoundsInstagram';
import FreshNovelsBook from './FreshNovelsBook';
import FreshSoundsBannerCollection from './FreshSoundsBannerCollection';
import FreshSoundsBrand from './FreshSoundsBrand';
import FreshSoundsEasyShapeSystem from './FreshSoundsEasyShapeSystem';
import FreshSoundsBanner from './FreshSoundsBanner';
import FreshSoundsHearingProtection from './FreshSoundsHearingProtection';
import FreshSoundsTestimonial from './FreshSoundsTestimonial';
import FreshSoundsVideo from './FreshSoundsVideo';

function App() {
    const tabs = [
        <FreshClothesBannerCollection title="Fresh Clothes Banner Collection" sectionKey="fresh-clothes-banner-collection" />,
        <FreshClothesBannerDeal title="Fresh Clothes Banner Deal" sectionKey="fresh-clothes-banner-deal" />,
        <FreshClothesBannerThree title="Fresh Clothes Banner Three" sectionKey="fresh-clothes-banner-three" />,
        <FreshClothesInformation title="Fresh Clothes Information" sectionKey="fresh-clothes-information" />,
        <FreshFashionBannerCollection title="Fresh Fashion Banner Collection" sectionKey="fresh-fashion-banner-collection" />,
        <FreshFashionBannerFull title="Fresh Fashion Banner Full" sectionKey="fresh-fashion-banner-full" />,
        <FreshFashionInstagram title="Fresh Fashion Instagram" sectionKey="fresh-fashion-instagram" />,
        <FreshNovelsAuthor title="Fresh Novels Author" sectionKey="fresh-novels-author" />,
        <FreshNovelsBannerThree title="Fresh Novels Banner Three" sectionKey="fresh-novels-banner-three" />,
        <FreshNovelsNewsletter title="Fresh Novels Newsletter" sectionKey="fresh-novels-newsletter" />,
        <FreshNovelsBook title="Fresh Novels Book" sectionKey="fresh-novels-book" />,
        <FreshSoundsBannerCollection title="Fresh Sounds Banner Collection" sectionKey="fresh-sounds-banner-collection" />,
        <FreshSoundsBrand title="Fresh Sounds Brand" sectionKey="fresh-sounds-brand" />,
        <FreshSoundsEasyShapeSystem title="Fresh Sounds Easy Shape System" sectionKey="fresh-sounds-easy-shape-system" />,
        <FreshSoundsBanner title="Fresh Sounds Banner" sectionKey="fresh-sounds-banner" />,
        <FreshSoundsHearingProtection title="Fresh Sounds Hearing Protection" sectionKey="fresh-sounds-hearing-protection" />,
        <FreshSoundsTestimonial title="Fresh Sounds Testimonial" sectionKey="fresh-sounds-testimonial" />,
        <FreshSoundsVideo title="Fresh Sounds Video" sectionKey="fresh-sounds-video" />,
        <FreshSoundsInstagram title="Fresh Sounds Instagram" sectionKey="fresh-sounds-instagram" />
    ];

    return (
        <div className="App">
            <div className="container-fuild">
                <div className="row App-row">
                    <div className="col-md-auto App-col-sidebar">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {tabs.map((el, i) =>
                                <a key={i} className={`nav-link ${i === 0 ? 'active' : ''}`} id={`v-pills-${i}-tab`} data-toggle="pill" href={`#v-pills-${i}`} role="tab" aria-controls={`v-pills-${i}`} aria-selected={i === 0 ? 'true' : 'false'}>{el.props.title}</a>
                            )}
                        </div>
                    </div>
                    <div className="col">
                        <div className="tab-content" id="v-pills-tabContent">
                            {tabs.map((el, i) =>
                                <div key={i} className={`tab-pane fade ${i === 0 ? 'show active' : ''}`} id={`v-pills-${i}`} role="tabpanel" aria-labelledby={`v-pills-${i}-tab`}>
                                    {el}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
