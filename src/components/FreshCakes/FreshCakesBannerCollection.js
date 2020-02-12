import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshCakesBannerCollectionFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, actionLink  } = this.props;
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
                    <label htmlFor="actionLink">Action Link</label>
                    <input type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}


class FreshCakesBannerCollectionFormGeneral extends React.Component {
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

class FreshCakesBannerCollection extends BaseSectionConfig {
    defaultTitle = "Fresh Cakes Banner Collection";
    scopeName = "FreshCakesBannerCollection";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/bl1.png', 
                    alt: 'bl1.png', 
                    actionLink: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/bl2.png', 
                    alt: 'bl2.png', 
                    actionLink: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/bl3.png', 
                    alt: 'bl3.png', 
                    actionLink: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/bl4.png', 
                    alt: 'bl4.png', 
                    actionLink: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/bl5.png', 
                    alt: 'bl5.png', 
                    actionLink: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/bl6.png', 
                    alt: 'bl6.png', 
                    actionLink: '#'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshCakesBannerCollection" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshCakesBannerCollectionFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Banner item ${index + 1}`,
                        element: <FreshCakesBannerCollectionFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-cakes-banner-collection" data-template="fresh_cakes_banner_collection" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshCakesBannerCollection;
