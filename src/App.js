import React from 'react';
import './App.css';
import FreshClothesBannerCollection from './components/FreshClothes/FreshClothesBannerCollection';
import FreshClothesBannerDeal from './components/FreshClothes/FreshClothesBannerDeal';
import FreshClothesBannerThree from './components/FreshClothes/FreshClothesBannerThree';
import FreshClothesInformation from './components/FreshClothes/FreshClothesInformation';
import FreshFashionBannerCollection from './components/FreshFashion/FreshFashionBannerCollection';
import FreshFashionBannerFull from './components/FreshFashion/FreshFashionBannerFull';
import FreshFashionInstagram from './components/FreshFashion/FreshFashionInstagram';
import FreshNovelsAuthor from './components/FreshNovels/FreshNovelsAuthor';
import FreshNovelsBannerThree from './components/FreshNovels/FreshNovelsBannerThree';
import FreshNovelsNewsletter from './components/FreshNovels/FreshNovelsNewsletter';
import FreshNovelsBook from './components/FreshNovels/FreshNovelsBook';
import FreshSoundsInstagram from './components/FreshSounds/FreshSoundsInstagram';
import FreshSoundsBannerCollection from './components/FreshSounds/FreshSoundsBannerCollection';
import FreshSoundsBrand from './components/FreshSounds/FreshSoundsBrand';
import FreshSoundsEasyShapeSystem from './components/FreshSounds/FreshSoundsEasyShapeSystem';
import FreshSoundsHearingProtection from './components/FreshSounds/FreshSoundsHearingProtection';
import FreshSoundsTestimonial from './components/FreshSounds/FreshSoundsTestimonial';
import FreshSoundsVideo from './components/FreshSounds/FreshSoundsVideo';
import FreshSweetsBannerCollection from './components/FreshSweets/FreshSweetsBannerCollection';
import FreshSweetsStepProcess from './components/FreshSweets/FreshSweetsStepProcess';
import FreshSweetsBannerFull from './components/FreshSweets/FreshSweetsBannerFull';
import FreshSweetsBannerInfo from './components/FreshSweets/FreshSweetsBannerInfo';
import FreshSweetsMainCarousel from './components/FreshSweets/FreshSweetsMainCarousel';
import FreshSweetsSidebarLeftBannerOne from './components/FreshSweets/FreshSweetsSidebarLeftBannerOne';
import FreshSweetsSidebarRightBannerOne from './components/FreshSweets/FreshSweetsSidebarRightBannerOne';
import FreshSweetsSidebarRightBannerTwo from './components/FreshSweets/FreshSweetsSidebarRightBannerTwo';
import FreshSweetsSidebarRightBannerThree from './components/FreshSweets/FreshSweetsSidebarRightBannerThree';
import FreshSweetsSidebarRightBannerFour from './components/FreshSweets/FreshSweetsSidebarRightBannerFour';
import FreshSweetsSidebarBrand from './components/FreshSweets/FreshSweetsSidebarBrand';
import FreshSweetsSidebarInstagram from './components/FreshSweets/FreshSweetsSidebarInstagram';
import FreshSweetsSidebarInformation from './components/FreshSweets/FreshSweetsSidebarInformation';
import FreshSweetsSidebarClientSays from './components/FreshSweets/FreshSweetsSidebarClientSays';
import FreshSweetsSidebarOurChefs from './components/FreshSweets/FreshSweetsSidebarOurChefs';

function App() {
    const tabs = [
        {
            titleGroup: "Fresh Clother Sections",
            children: [
                <FreshClothesBannerCollection title="Fresh Clothes Banner Collection" sectionKey="fresh-clothes-banner-collection" />,
                <FreshClothesBannerDeal title="Fresh Clothes Banner Deal" sectionKey="fresh-clothes-banner-deal" />,
                <FreshClothesBannerThree title="Fresh Clothes Banner Three" sectionKey="fresh-clothes-banner-three" />,
                <FreshClothesInformation title="Fresh Clothes Information" sectionKey="fresh-clothes-information" />
            ]
        },
        {
            titleGroup: "Fresh Fashion Sections",
            children: [
                <FreshFashionBannerCollection title="Fresh Fashion Banner Collection" sectionKey="fresh-fashion-banner-collection" />,
                <FreshFashionBannerFull title="Fresh Fashion Banner Full" sectionKey="fresh-fashion-banner-full" />,
                <FreshFashionInstagram title="Fresh Fashion Instagram" sectionKey="fresh-fashion-instagram" />
            ]
        },
        {
            titleGroup: "Fresh Novels Sections",
            children: [
                <FreshNovelsAuthor title="Fresh Novels Author" sectionKey="fresh-novels-author" />,
                <FreshNovelsBannerThree title="Fresh Novels Banner Three" sectionKey="fresh-novels-banner-three" />,
                <FreshNovelsNewsletter title="Fresh Novels Newsletter" sectionKey="fresh-novels-newsletter" />,
                <FreshNovelsBook title="Fresh Novels Book" sectionKey="fresh-novels-book" />
            ]
        },
        {
            titleGroup: "Fresh Sounds Sections",
            children: [
                <FreshSoundsBannerCollection title="Fresh Sounds Banner Collection" sectionKey="fresh-sounds-banner-collection" />,
                <FreshSoundsBrand title="Fresh Sounds Brand" sectionKey="fresh-sounds-brand" />,
                <FreshSoundsEasyShapeSystem title="Fresh Sounds Easy Shape System" sectionKey="fresh-sounds-easy-shape-system" />,
                <FreshSoundsHearingProtection title="Fresh Sounds Hearing Protection" sectionKey="fresh-sounds-hearing-protection" />,
                <FreshSoundsTestimonial title="Fresh Sounds Testimonial" sectionKey="fresh-sounds-testimonial" />,
                <FreshSoundsVideo title="Fresh Sounds Video" sectionKey="fresh-sounds-video" />,
                <FreshSoundsInstagram title="Fresh Sounds Instagram" sectionKey="fresh-sounds-instagram" />
            ]
        },
        {
            titleGroup: "Fresh Sweets Sections",
            children: [
                <FreshSweetsBannerCollection title="Banner Collection" sectionKey="fresh-sweets-banner-collection" />,
                <FreshSweetsStepProcess title="Step Process" sectionKey="fresh-sweets-step-process" />,
                <FreshSweetsBannerFull title="Banner Full" sectionKey="fresh-sweets-banner-full" />,
                <FreshSweetsBannerInfo title="Banner Info" sectionKey="fresh-sweets-banner-info" />,
                <FreshSweetsMainCarousel title="Main Carousel" sectionKey="fresh-sweets-main-carousel" />,
                <FreshSweetsSidebarLeftBannerOne title="Sidebar -- Banner Left One" />,
                <FreshSweetsSidebarRightBannerOne title="Sidebar -- Banner Right One" />,
                <FreshSweetsSidebarRightBannerTwo title="Sidebar -- Banner Right Two" />,
                <FreshSweetsSidebarRightBannerThree title="Sidebar -- Banner Right Three" />,
                <FreshSweetsSidebarRightBannerFour title="Sidebar -- Banner Right Four" />,
                <FreshSweetsSidebarBrand title="Sidebar -- Sidebar Brand" />,
                <FreshSweetsSidebarInstagram title="Sidebar -- Sidebar Instagram" />,
                <FreshSweetsSidebarInformation title="Sidebar -- Sidebar Information" />,
                <FreshSweetsSidebarClientSays title="Sidebar -- Sidebar Client Says" />,
                <FreshSweetsSidebarOurChefs title="Sidebar -- Sidebar Our Chefs" />
            ]
        }
    ];

    return (
        <div className="App">
            <div className="container-fuild">
                <div className="row App-row">
                    <div className="col-md-auto App-col-sidebar">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <div id="accordion">    
                                {tabs.map((elGroup, iGroup) => {
                                        const link = elGroup.children.map((el, i) => <a key={i} className={`nav-link rounded-0 ${(i === 0 && iGroup === 0) ? 'active' : ''}`} data-toggle="tab" href={`#v-pills-${i}-${iGroup}`} role="tab" aria-controls={`v-pills-${i}-${iGroup}`} aria-selected={(i === 0 && iGroup === 0) ? 'true' : 'false'}>{el.props.title}</a>);
                                        return (
                                            <div className="card mb-1" key={iGroup}>
                                                <div className="card-header" id={`heading${iGroup}`}>
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-link" data-toggle="collapse" data-target={`#collapse${iGroup}`} aria-expanded="true" aria-controls={`collapse${iGroup}`}>
                                                            {elGroup.titleGroup}
                                                        </button>
                                                    </h5>
                                                </div>
                                                <div id={`collapse${iGroup}`} className="collapse" aria-labelledby={`heading${iGroup}`} data-parent="#accordion">
                                                    <div className="card-body p-0">
                                                        {link}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="tab-content" id="v-pills-tabContent">
                            {tabs.map((elGroup, iGroup) => {
                                const element =elGroup.children.map((el, i) => {
                                    return(
                                        <div key={i} className={`tab-pane fade ${(i === 0 && iGroup === 0) ? 'show active' : ''}`} id={`v-pills-${i}-${iGroup}`} aria-labelledby={`v-pills-${i}-${iGroup}-tab`}>
                                            {el}
                                        </div>
                                    )
                                });
                                return(
                                    element
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
