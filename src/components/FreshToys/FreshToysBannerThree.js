import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshToysBannerThreeFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, imgCaption, altCaption, actionLink  } = this.props;
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
                    <label htmlFor="actionLink">Action Link</label>
                    <input type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}


class FreshToysBannerThreeFormGeneral extends React.Component {
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

class FreshToysBannerThree extends BaseSectionConfig {
    defaultTitle = "Fresh Toys Banner Three";
    scopeName = "FreshToysBannerThree";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            items: [
                { 
                    img: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/banner-chidrenwear.png', 
                    alt: 'banner-chidrenwear.png', 
                    imgCaption: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/banner-chidrenwear-text.png',
                    altCaption: 'banner-chidrenwear-text.png',
                    actionLink: '#'
                },
                { 
                    img: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/banner-kidproduct.png', 
                    alt: 'banner-kidproduct.png', 
                    imgCaption: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/banner-kidproduct-text.png',
                    altCaption: 'banner-kidproduct-text.png',
                    actionLink: '#'
                },
                { 
                    img: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/banner-pampers.png', 
                    alt: 'banner-pampers.png', 
                    imgCaption: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/banner-pampers-text.png',
                    altCaption: 'banner-pampers-text.png',
                    actionLink: '#'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshToysBannerThree" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshToysBannerThreeFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Banner item ${index + 1}`,
                        element: <FreshToysBannerThreeFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-toys-banner-three" data-template="fresh_toys_banner_three" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshToysBannerThree;
