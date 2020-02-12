import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshCakesFooterBrandsFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt , actionLink } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Brand Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the Brand image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Brand Image alt</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter the Brand image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink">Brand link</label>
                    <input type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter The Brand link" />
                </div>
            </form>
        );
    }
}


class FreshCakesFooterBrandsFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { heading ,items_count } = this.props;
        return (
            <form>
            <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of brand items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of brand items" />
                </div>
            </form>
        );
    }
}

class FreshCakesFooterBrands extends BaseSectionConfig {
    defaultTitle = "Fresh Cakes Footer Brands";
    scopeName = "FreshCakesFooterBrands";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'Brand',
            items: [
                { 
                    img: "https://cdn11.bigcommerce.com/s-o2thz2aet8/product_images/uploaded_images/brand1.png",
                    alt: "brand1.png",
                    actionLink: "#" 
                },
                { 
                    img: "https://cdn11.bigcommerce.com/s-o2thz2aet8/product_images/uploaded_images/brand2.png",
                    alt: "brand2.png",
                    actionLink: "#" 
                },
                { 
                    img: "https://cdn11.bigcommerce.com/s-o2thz2aet8/product_images/uploaded_images/brand3.png",
                    alt: "brand3.png",
                    actionLink: "#" 
                },
                { 
                    img: "https://cdn11.bigcommerce.com/s-o2thz2aet8/product_images/uploaded_images/brand4.png",
                    alt: "brand4.png",
                    actionLink: "#" 
                },
                { 
                    img: "https://cdn11.bigcommerce.com/s-o2thz2aet8/product_images/uploaded_images/brand5.png",
                    alt: "brand5.png",
                    actionLink: "#" 
                },
                { 
                    img: "https://cdn11.bigcommerce.com/s-o2thz2aet8/product_images/uploaded_images/brand6.png",
                    alt: "brand6.png",
                    actionLink: "#" 
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshCakesFooterBrands" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshCakesFooterBrandsFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Brand item ${index + 1}`,
                        element: <FreshCakesFooterBrandsFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-cakes-footer-brands" data-template="fresh_cakes_footer_brands" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshCakesFooterBrands;
