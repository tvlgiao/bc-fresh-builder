import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';

class FreshClothesInformationFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, title, subTitle  } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Information icon URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter The Information icon URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Information icon alt</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter The Information icon alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle">Sub Title</label>
                    <input type="text" className="form-control" id="subTitle" name="subTitle" value={subTitle} onChange={this.handleChange} placeholder="Enter the sub title text" />
                </div>
            </form>
        );
    }
}


class FreshClothesInformationFormGeneral extends React.Component {
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

class FreshClothesInformation extends BaseSectionConfig {
    defaultTitle = "Fresh Clothes Information";
    scopeName = "FreshClothesInformation";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            items: [
                { 
                    img: '/product_images/uploaded_images/cl-ic1.png', 
                    alt: 'Free Worldwide Shipping', 
                    title: 'Free Worldwide Shipping',
                    subTitle: 'On all orders over $75.00'
                },
                { 
                    img: '/product_images/uploaded_images/cl-ic2.png', 
                    alt: 'Support 24/7', 
                    title: 'Support 24/7',
                    subTitle: 'Contact us 24 hours a day'
                },
                { 
                    img: '/product_images/uploaded_images/cl-ic3.png', 
                    alt: '30 Days Return', 
                    title: '30 Days Return',
                    subTitle: 'Return it within 30 day for an exchange'
                },
                { 
                    img: '/product_images/uploaded_images/cl-ic4.png', 
                    alt: '100% Payment Secure', 
                    title: '100% Payment Secure',
                    subTitle: 'We ensure secure payment with PEV'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshClothesInformation" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshClothesInformationFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Banner item ${index + 1}`,
                        element: <FreshClothesInformationFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-clothes-information" data-template="fresh_clothes_information" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshClothesInformation;
