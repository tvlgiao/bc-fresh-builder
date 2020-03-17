import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshSoundsBrandFormItem extends React.Component {
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


class FreshSoundsBrandFormGeneral extends React.Component {
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

class FreshSoundsBrand extends BaseSectionConfig {
    defaultTitle = "Fresh Sounds Brand";
    scopeName = "FreshSoundsBrand";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            items: [
                { 
                    img: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-brand1.png",
                    alt: "so-brand1.png",
                    actionLink: "#" 
                },
                { 
                    img: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-brand2.png",
                    alt: "so-brand2.png",
                    actionLink: "#" 
                },
                { 
                    img: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-brand3.png",
                    alt: "so-brand3.png",
                    actionLink: "#" 
                },
                { 
                    img: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-brand4.png",
                    alt: "so-brand4.png",
                    actionLink: "#" 
                },
                { 
                    img: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-brand5.png",
                    alt: "so-brand5.png",
                    actionLink: "#" 
                },
                { 
                    img: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-brand6.png",
                    alt: "so-brand6.png",
                    actionLink: "#" 
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshSoundsBrand" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshSoundsBrandFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Banner item ${index + 1}`,
                        element: <FreshSoundsBrandFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="fresh-section fresh-section--sounds-brand u-hiddenVisually" data-local-banner-position="fresh-sounds-brand" data-template="fresh_sounds_brand" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshSoundsBrand;
