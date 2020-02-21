import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshStrollersBannerProductFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { backgroundImage, backgroundImageAlt, productId, categoryLink } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="backgroundImage">Background Image URL</label>
                    <input type="text" className="form-control" id="backgroundImage" name="backgroundImage" value={backgroundImage} onChange={this.handleChange} placeholder="Enter The Background Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="backgroundImageAlt">Background Image ALT</label>
                    <input type="text" className="form-control" id="backgroundImageAlt" name="backgroundImageAlt" value={backgroundImageAlt} onChange={this.handleChange} placeholder="Enter The Background Image ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="productId">Product ID</label>
                    <input type="text" className="form-control" id="productId" name="productId" value={productId} onChange={this.handleChange} placeholder="Enter The Product ID" />
                </div>
                <div className="form-group">
                    <label htmlFor="categoryLink">Category Link of product(EX: /shop-all)</label>
                    <input type="text" className="form-control" id="categoryLink" name="categoryLink" value={categoryLink} onChange={this.handleChange} placeholder="Category Link URL of product" />
                </div>
            </form>
        );
    }
}

class FreshStrollersBannerProduct extends BaseSectionConfig {
    defaultTitle = "Fresh Strollers Banner Product";
    scopeName = "FreshStrollersBannerProduct";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            backgroundImage: 'https://fresh-strollers-demo.mybigcommerce.com/product_images/uploaded_images/red-bg.jpg',
            backgroundImageAlt: 'red-bg.jpg',
            productId: '111',
            categoryLink: '/shop-all'
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshStrollersBannerProduct" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshStrollersBannerProductFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-strollers-banner-product" data-template="fresh_strollers_banner_product" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshStrollersBannerProduct;
