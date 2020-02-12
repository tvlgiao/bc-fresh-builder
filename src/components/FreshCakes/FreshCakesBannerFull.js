import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshCakesBannerFullFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, imgCaption, altCaption, actionLink } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Banner Image URL</label>
                    <input type="text" className="form-control" id="img" npame="img" value={img} onChange={this.handleChange} placeholder="Enter The Banner Image URL" />
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
            </form>
        );
    }
}

class FreshCakesBannerFull extends BaseSectionConfig {
    defaultTitle = "Fresh Cakes Banner Full";
    scopeName = "FreshCakesBannerFull";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/banner-cake-full.jpg', 
            alt: 'banner-cake-full.jpg',
            imgCaption: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/banner-cake-sale.png', 
            altCaption: 'banner-cake-sale.png',
            actionLink: '#'
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshCakesBannerFull" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshCakesBannerFullFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-cakes-banner-full" data-template="fresh_cakes_banner_full" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshCakesBannerFull;
