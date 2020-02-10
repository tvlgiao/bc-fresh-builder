import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshSweetsBannerInfoFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, img2, alt2, title, caption, actionText, actionLink } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Image 1 URL(Recommended size 570x470)</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter The Image 1 URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Image 1 ALT</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter The Image 1 ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="img2">Image 2 URL(Recommended size 570x470)</label>
                    <input type="text" className="form-control" id="img2" name="img2" value={img2} onChange={this.handleChange} placeholder="Enter The Image 2 URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt2">Image 2 ALT</label>
                    <input type="text" className="form-control" id="alt2" name="alt2" value={alt2} onChange={this.handleChange} placeholder="Enter The Image 2 ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="caption">Caption</label>
                    <input type="text" className="form-control" id="caption" name="caption" value={caption} onChange={this.handleChange} placeholder="Enter the caption text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionText">Action Text</label>
                    <input type="text" className="form-control" id="actionText" name="actionText" value={actionText} onChange={this.handleChange} placeholder="Enter the action text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink">Action Link</label>
                    <input type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshSweetsBannerInfo extends BaseSectionConfig {
    defaultTitle = "Fresh Sweets Banner Info";
    scopeName = "FreshSweetsBannerInfo";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img: 'https://cdn11.bigcommerce.com/s-tyhv2hf1i4/product_images/uploaded_images/banner1.jpg',
            alt: 'banner1.jpg',
            img2: 'https://cdn11.bigcommerce.com/s-tyhv2hf1i4/product_images/uploaded_images/banner2.jpg',
            alt2: 'banner2.jpg',
            title: 'We Are The Best !', 
            caption: 'We exclusively use sun ripened whole grains to provide you with a source of power, stamina and health! Spoil yourself with our breads natural flavor! We use only the finest quality ingredients providing your body with important fiber and nutrients.', 
            actionText: 'Read more', 
            actionLink: '#'
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshSweetsBannerInfo" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshSweetsBannerInfoFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-sweets-banner-info" data-template="fresh_sweets_banner_info" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshSweetsBannerInfo;
