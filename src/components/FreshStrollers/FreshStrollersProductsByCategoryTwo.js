import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshStrollersProductsByCategoryTwoFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { backgroundImage, backgroundImageAlt, backgroundImageCaption, backgroundImageCaptionAlt, backgroundPosition, productLimit, categoryLink } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="backgroundImage">Banner Image URL</label>
                    <input type="text" className="form-control" id="backgroundImage" name="backgroundImage" value={backgroundImage} onChange={this.handleChange} placeholder="Enter The Banner Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="backgroundImageAlt">Banner Image ALT</label>
                    <input type="text" className="form-control" id="backgroundImageAlt" name="backgroundImageAlt" value={backgroundImageAlt} onChange={this.handleChange} placeholder="Enter The Banner Image ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="backgroundImageCaption">Banner Image Caption URL</label>
                    <input type="text" className="form-control" id="backgroundImageCaption" name="backgroundImageCaption" value={backgroundImageCaption} onChange={this.handleChange} placeholder="Enter The Banner Image Caption URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="backgroundImageCaptionAlt">Banner Image Caption ALT</label>
                    <input type="text" className="form-control" id="backgroundImageCaptionAlt" name="backgroundImageCaptionAlt" value={backgroundImageCaptionAlt} onChange={this.handleChange} placeholder="Enter The Banner Image Caption ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="backgroundPosition">Banner Image Position</label>
                    <select className="form-control" id="backgroundPosition" name="backgroundPosition" value={backgroundPosition} onChange={this.handleChange}>
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="productLimit">Product number</label>
                    <input type="number" min="0" max="100" className="form-control" id="productLimit" name="productLimit" value={productLimit} onChange={this.handleChange} placeholder="Enter The number of product items" />
                </div>
                <div className="form-group">
                    <label htmlFor="categoryLink">Category Link of product(EX: /shop-all)</label>
                    <input type="text" className="form-control" id="categoryLink" name="categoryLink" value={categoryLink} onChange={this.handleChange} placeholder="Category Link URL of product" />
                </div>
            </form>
        );
    }
}

class FreshStrollersProductsByCategoryTwo extends BaseSectionConfig {
    defaultTitle = "Fresh Strollers Products By Category Two";
    scopeName = "FreshStrollersProductsByCategoryTwo";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            backgroundImage: 'https://fresh-strollers-demo.mybigcommerce.com/product_images/uploaded_images/banner-carrycot.jpg',
            backgroundImageAlt: 'banner-carrycot.jpg',
            backgroundImageCaption: 'https://fresh-strollers-demo.mybigcommerce.com/product_images/uploaded_images/text-banner-carrycot.png',
            backgroundImageCaptionAlt: 'text-banner-carrycot.png',
            backgroundPosition: 'right',
            productLimit: '4',
            categoryLink: '/shop-all'
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshStrollersProductsByCategoryTwo" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshStrollersProductsByCategoryTwoFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-strollers-products-by-category-two" data-template="fresh_strollers_products_by_category_two" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshStrollersProductsByCategoryTwo;
