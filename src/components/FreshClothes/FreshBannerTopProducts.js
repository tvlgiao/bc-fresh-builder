import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshBannerTopProductsFormGeneral extends React.Component {
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
            </form>
        );
    }
}

class FreshBannerTopProducts extends BaseSectionConfig {
    defaultTitle = "Fresh Banner Top Products";
    scopeName = "FreshBannerTopProducts";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img: 'https://fresh-clothes-demo.mybigcommerce.com/product_images/uploaded_images/cl-bp1.jpg', 
            alt: 'cl-bp1.jpg',
            imgCaption: 'https://fresh-clothes-demo.mybigcommerce.com/product_images/uploaded_images/cl-bpc1.png', 
            altCaption: 'cl-bpc1.png',
            actionLink: '#'
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshBannerTopProducts" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshBannerTopProductsFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-banner-top-products" data-template="fresh_banner_top_products" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshBannerTopProducts;
