import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshStrollersBannerCarouselFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, imgCaption, altCaption, actionLink, img1, alt1, imgCaption1, altCaption1, actionLink1 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Banner Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter The Banner Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Banner Image ALT</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter The Banner Image ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgCaption">Banner Image Caption URL</label>
                    <input type="text" className="form-control" id="imgCaption" name="imgCaption" value={imgCaption} onChange={this.handleChange} placeholder="Enter The Banner Image Caption URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="altCaption">Banner Image Caption ALT</label>
                    <input type="text" className="form-control" id="altCaption" name="altCaption" value={altCaption} onChange={this.handleChange} placeholder="Enter The Banner Image Caption ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink">Action Link</label>
                    <input type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="img1">Banner Image 1 URL</label>
                    <input type="text" className="form-control" id="img1" name="img1" value={img1} onChange={this.handleChange} placeholder="Enter The Banner Image 1 URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt1">Banner Image 1 ALT</label>
                    <input type="text" className="form-control" id="alt1" name="alt1" value={alt1} onChange={this.handleChange} placeholder="Enter The Banner Image 1 ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgCaption1">Banner Image 1 Caption URL</label>
                    <input type="text" className="form-control" id="imgCaption1" name="imgCaption1" value={imgCaption1} onChange={this.handleChange} placeholder="Enter The Banner Image Caption 1 URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="altCaption1">Banner Image 1 Caption ALT</label>
                    <input type="text" className="form-control" id="altCaption1" name="altCaption1" value={altCaption1} onChange={this.handleChange} placeholder="Enter The Banner Image Caption 1 ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink1">Action Link</label>
                    <input type="text" className="form-control" id="actionLink1" name="actionLink1" value={actionLink1} onChange={this.handleChange} placeholder="Enter the action link 1 URL" />
                </div>
            </form>
        );
    }
}

class FreshStrollersBannerCarousel extends BaseSectionConfig {
    defaultTitle = "Fresh Strollers Banner Carousel";
    scopeName = "FreshStrollersBannerCarousel";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img: 'https://fresh-strollers-demo.mybigcommerce.com/product_images/uploaded_images/banner-top1.jpg', 
            alt: 'banner-top1.jpg',
            imgCaption: 'https://fresh-strollers-demo.mybigcommerce.com/product_images/uploaded_images/text-banner1.png', 
            altCaption: 'text-banner1.png',
            actionLink: '#',
            img1: 'https://fresh-strollers-demo.mybigcommerce.com/product_images/uploaded_images/banner-top2.jpg', 
            alt1: 'banner-top2.jpg',
            imgCaption1: 'https://fresh-strollers-demo.mybigcommerce.com/product_images/uploaded_images/text-banner2.png', 
            altCaption1: 'text-banner2.png',
            actionLink1: '#'
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshStrollersBannerCarousel" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshStrollersBannerCarouselFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-strollers-banner-carousel" data-template="fresh_strollers_banner_carousel" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshStrollersBannerCarousel;
