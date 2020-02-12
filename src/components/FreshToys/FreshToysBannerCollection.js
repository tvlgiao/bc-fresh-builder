import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshToysBannerCollectionFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, imgCaption, altCaption, title, actionText, actionLink  } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Banner Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgCaption">Banner Image Caption URL</label>
                    <input type="text" className="form-control" id="imgCaption" name="imgCaption" value={imgCaption} onChange={this.handleChange} placeholder="Enter the banner image caption URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="altCaption">Banner Image Caption alt</label>
                    <input type="text" className="form-control" id="altCaption" name="altCaption" value={altCaption} onChange={this.handleChange} placeholder="Enter the banner image caption alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionText">Action text</label>
                    <textarea type="text" className="form-control" id="actionText" name="actionText" value={actionText} onChange={this.handleChange} placeholder="Enter the action text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink">Action Link</label>
                    <input type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}


class FreshToysBannerCollectionFormGeneral extends React.Component {
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

class FreshToysBannerCollection extends BaseSectionConfig {
    defaultTitle = "Fresh Toys Banner Collection";
    scopeName = "FreshToysBannerCollection";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            items: [
                { 
                    img: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/0-12months.png', 
                    alt: '0-12months.png', 
                    imgCaption: 'http://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/form-bg-white.png',
                    altCaption: 'form-bg-white.png',
                    title: '0 - 12 Months',
                    actionText: 'Discover now',
                    actionLink: '#'
                },
                { 
                    img: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/1-3years.png', 
                    alt: '1-3years.png', 
                    imgCaption: 'http://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/form-bg-white.png',
                    altCaption: 'form-bg-white.png',
                    title: '1 - 3 Years',
                    actionText: 'Discover now',
                    actionLink: '#'
                },
                { 
                    img: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/3-5years.png', 
                    alt: '3-5years.png', 
                    imgCaption: 'http://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/form-bg-white.png',
                    altCaption: 'form-bg-white.png',
                    title: '3 - 5 Years',
                    actionText: 'Discover now',
                    actionLink: '#'
                },
                { 
                    img: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/6-8years.png', 
                    alt: '6-8years.png', 
                    imgCaption: 'http://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/form-bg-white.png',
                    altCaption: 'form-bg-white.png',
                    title: '6 - 8 Years',
                    actionText: 'Discover now',
                    actionLink: '#'
                },
                { 
                    img: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/9-15years.png', 
                    alt: '9-15years.png', 
                    imgCaption: 'http://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/form-bg-white.png',
                    altCaption: 'form-bg-white.png',
                    title: '9 - 15 Years',
                    actionText: 'Discover now',
                    actionLink: '#'
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshToysBannerCollection" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshToysBannerCollectionFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Banner item ${index + 1}`,
                        element: <FreshToysBannerCollectionFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-toys-banner-collection" data-template="fresh_toys_banner_collection" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshToysBannerCollection;
