import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshToysInformationFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, backgroundImage, backgroundImageAlt, title, subTitle  } = this.props;
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
                    <label htmlFor="backgroundImage">Background Image URL(Recommended image size 1920x495)</label>
                    <input type="text" className="form-control" id="backgroundImage" name="backgroundImage" value={backgroundImage} onChange={this.handleChange} placeholder="Enter The Background Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="backgroundImageAlt">Background Image ALT</label>
                    <input type="text" className="form-control" id="backgroundImageAlt" name="backgroundImageAlt" value={backgroundImageAlt} onChange={this.handleChange} placeholder="Enter The Background Image ALT" />
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


class FreshToysInformationFormGeneral extends React.Component {
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

class FreshToysInformation extends BaseSectionConfig {
    defaultTitle = "Fresh Toys Information";
    scopeName = "FreshToysInformation";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            items: [
                { 
                    img: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/img-freeship.png', 
                    alt: 'Free Shipping & Return', 
                    backgroundImage: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/bg-info.png',
                    backgroundImageAlt: 'bg-info.png',
                    title: 'Free Shipping & Return',
                    subTitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium totam rem aperid'
                },
                { 
                    img: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/img-moneyback.png', 
                    alt: '100% money Back', 
                    backgroundImage: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/bg-info.png',
                    backgroundImageAlt: 'bg-info.png',
                    title: '100% money Back',
                    subTitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium totam rem aperid'
                },
                { 
                    img: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/img-phone.png', 
                    alt: 'Phone : 0 - 123 - 678 - 8899', 
                    backgroundImage: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/bg-info.png',
                    backgroundImageAlt: 'bg-info.png',
                    title: 'Phone : 0 - 123 - 678 - 8899',
                    subTitle: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem laudantium totam rem aperid'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshToysInformation" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshToysInformationFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Banner item ${index + 1}`,
                        element: <FreshToysInformationFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-toys-information" data-template="fresh_toys_information" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshToysInformation;
