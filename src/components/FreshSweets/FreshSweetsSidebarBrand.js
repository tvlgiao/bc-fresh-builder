import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshSweetsSidebarBrandFormItem extends React.Component {
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


class FreshSweetsSidebarBrandFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="items_count">Number of banner items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of banner items" />
                </div>
            </form>
        );
    }
}

class FreshSweetsBrand extends BaseSectionConfig {
    defaultTitle = "Fresh Sweets Sidebar Brand";
    scopeName = "FreshSweetsSidebarBrand";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            items: [
                { 
                    img: "https://cdn11.bigcommerce.com/s-tyhv2hf1i4/product_images/uploaded_images/brand1.png",
                    alt: "brand1.png",
                    actionLink: "#" 
                },
                { 
                    img: "https://cdn11.bigcommerce.com/s-tyhv2hf1i4/product_images/uploaded_images/brand2.png",
                    alt: "brand2.png",
                    actionLink: "#" 
                },
                { 
                    img: "https://cdn11.bigcommerce.com/s-tyhv2hf1i4/product_images/uploaded_images/brand3.png",
                    alt: "brand3.png",
                    actionLink: "#" 
                },
                { 
                    img: "https://cdn11.bigcommerce.com/s-tyhv2hf1i4/product_images/uploaded_images/brand4.png",
                    alt: "brand4.png",
                    actionLink: "#" 
                },
                { 
                    img: "https://cdn11.bigcommerce.com/s-tyhv2hf1i4/product_images/uploaded_images/brand5.png",
                    alt: "brand5.png",
                    actionLink: "#" 
                },
                { 
                    img: "https://cdn11.bigcommerce.com/s-tyhv2hf1i4/product_images/uploaded_images/brand6.png",
                    alt: "brand6.png",
                    actionLink: "#" 
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshSweetsSidebarBrand" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshSweetsSidebarBrandFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Banner item ${index + 1}`,
                        element: <FreshSweetsSidebarBrandFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-sweets-sidebar-brand" data-template="fresh_sweets_sidebar_brand" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshSweetsBrand;
