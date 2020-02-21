import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshStrollersBannerTwoFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { heading, actionText, backgroundImage, backgroundImageAlt, actionLink, img1, alt1, imgCaption1, altCaption1, actionLink1, img2, alt2, imgCaption2, altCaption2, actionLink2,
            videoHeading, videoSubHeading, videoCaption, videoActiontext, videoActionLink, videoLink, videoImage, videoImageAlt } = this.props;
        return (
            <form>
             <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter The heading text" />
                </div>
               <div className="form-group">
                    <label htmlFor="actionText">Action text</label>
                    <textarea type="text" className="form-control" id="actionText" name="actionText" value={actionText} onChange={this.handleChange} placeholder="Enter the action text" />
                </div>
                <div className="form-group">
                    <label htmlFor="backgroundImage">Background Image URL</label>
                    <input type="text" className="form-control" id="backgroundImage" name="backgroundImage" value={backgroundImage} onChange={this.handleChange} placeholder="Enter The Background Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="backgroundImageAlt">Background Image ALT</label>
                    <input type="text" className="form-control" id="backgroundImageAlt" name="backgroundImageAlt" value={backgroundImageAlt} onChange={this.handleChange} placeholder="Enter The Background Image ALT" />
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
                    <label htmlFor="actionLink1">Action Link 1</label>
                    <input type="text" className="form-control" id="actionLink1" name="actionLink1" value={actionLink1} onChange={this.handleChange} placeholder="Enter the action link 1 URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="img2">Banner Image 2 URL</label>
                    <input type="text" className="form-control" id="img2" name="img2" value={img2} onChange={this.handleChange} placeholder="Enter The Banner Image 2 URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt2">Banner Image 2 ALT</label>
                    <input type="text" className="form-control" id="alt2" name="alt2" value={alt2} onChange={this.handleChange} placeholder="Enter The Banner Image 2 ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgCaption2">Banner Image Caption 2 URL</label>
                    <input type="text" className="form-control" id="imgCaption2" name="imgCaption2" value={imgCaption2} onChange={this.handleChange} placeholder="Enter The Banner Image Caption 2 URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="altCaption2">Banner Image Caption 2 ALT</label>
                    <input type="text" className="form-control" id="altCaption2" name="altCaption2" value={altCaption2} onChange={this.handleChange} placeholder="Enter The Banner Image Caption 2 ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink2">Action Link 2</label>
                    <input type="text" className="form-control" id="actionLink2" name="actionLink2" value={actionLink2} onChange={this.handleChange} placeholder="Enter the action link URL 2" />
                </div>
                <div className="form-group">
                    <label htmlFor="videoHeading">Video Heading</label>
                    <input type="text" className="form-control" id="videoHeading" name="videoHeading" value={videoHeading} onChange={this.handleChange} placeholder="Enter the video heading" />
                </div>
                <div className="form-group">
                    <label htmlFor="videoSubHeading">Video Sub Heading</label>
                    <input type="text" className="form-control" id="videoSubHeading" name="videoSubHeading" value={videoSubHeading} onChange={this.handleChange} placeholder="Enter the video sub heading" />
                </div>
                <div className="form-group">
                    <label htmlFor="videoCaption">Video caption</label>
                    <input type="text" className="form-control" id="videoCaption" name="videoCaption" value={videoCaption} onChange={this.handleChange} placeholder="Enter the video caption" />
                </div>
                <div className="form-group">
                    <label htmlFor="videoActiontext">Video action text</label>
                    <input type="text" className="form-control" id="videoActiontext" name="videoActiontext" value={videoActiontext} onChange={this.handleChange} placeholder="Enter the video action text" />
                </div>
                <div className="form-group">
                    <label htmlFor="videoActionLink">Video Action Link</label>
                    <input type="text" className="form-control" id="videoActionLink" name="videoActionLink" value={videoActionLink} onChange={this.handleChange} placeholder="Enter the video action link" />
                </div>
                <div className="form-group">
                    <label htmlFor="videoLink">Video Link</label>
                    <input type="text" className="form-control" id="videoLink" name="videoLink" value={videoLink} onChange={this.handleChange} placeholder="Enter the video link" />
                </div>
                <div className="form-group">
                    <label htmlFor="videoImage">Video Image URL</label>
                    <input type="text" className="form-control" id="videoImage" name="videoImage" value={videoImage} onChange={this.handleChange} placeholder="Enter the video image url" />
                </div>
                <div className="form-group">
                    <label htmlFor="videoImageAlt">Video image url</label>
                    <input type="text" className="form-control" id="videoImageAlt" name="videoImageAlt" value={videoImageAlt} onChange={this.handleChange} placeholder="Enter the video image url" />
                </div>
            </form>
        );
    }
}

class FreshStrollersBannerTwo extends BaseSectionConfig {
    defaultTitle = "Fresh Strollers Banner Two";
    scopeName = "FreshStrollersBannerTwo";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'Free shipping worldwide on all baskets over $800.',
            actionText: 'Shipping & Returns',
            actionLink: '#',
            backgroundImage: 'https://fresh-strollers-demo.mybigcommerce.com/product_images/uploaded_images/banner-bg.jpg', 
            backgroundImageAlt: 'banner-bg.jpg',
            img1: 'https://fresh-strollers-demo.mybigcommerce.com/product_images/uploaded_images/banner-summer.jpg', 
            alt1: 'banner-top1.jpg',
            imgCaption1: 'https://fresh-strollers-demo.mybigcommerce.com/product_images/uploaded_images/text-banner-summer.png', 
            altCaption1: 'text-banner-summer.png',
            actionLink1: '#',
            img2: 'https://fresh-strollers-demo.mybigcommerce.com/product_images/uploaded_images/banner-blackfriday.jpg', 
            alt2: 'banner-blackfriday.jpg',
            imgCaption2: 'https://fresh-strollers-demo.mybigcommerce.com/product_images/uploaded_images/text-banner-blackfriday.png', 
            altCaption2: 'text-banner-blackfriday.png',
            actionLink2: '#',
            videoHeading: 'VOLUPTATUM DELENITI',
            videoSubHeading: 'FINIBUS CORRUPTI CULPA MALORUM',
            videoLink: 'https://www.youtube.com/watch?v=TNSLaVBBY0M',
            videoImage: 'https://fresh-strollers-demo.mybigcommerce.com/product_images/uploaded_images/img-video.png',
            videoImageAlt: 'img-video.png',
            videoCaption: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer',
            videoActiontext: 'Discover Now',
            videoActionLink: '#',

        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshStrollersBannerTwo" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshStrollersBannerTwoFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-strollers-banner-two" data-template="fresh_strollers_banner_two" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshStrollersBannerTwo;
