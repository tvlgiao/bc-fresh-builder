import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshClothesBannerThreeFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, title, subTitle, actionLink  } = this.props;
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
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle">Sub Title</label>
                    <input type="text" className="form-control" id="subTitle" name="subTitle" value={subTitle} onChange={this.handleChange} placeholder="Enter the sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink">Banner Link</label>
                    <input type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter the banner link URL" />
                </div>
            </form>
        );
    }
}


class FreshClothesBannerThreeFormGeneral extends React.Component {
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

class FreshClothesBannerThree extends BaseSectionConfig {
    defaultTitle = "Fresh Clothes Banner Three";
    scopeName = "FreshClothesBannerThree";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            items: [
                { 
                    img: 'https://fresh-clothes-demo.mybigcommerce.com/product_images/uploaded_images/cl-bt1.jpg', 
                    alt: 'The Classic', 
                    title: 'The Classic',
                    subTitle: '5 items',
                    actionLink: '#'
                },
                { 
                    img: 'https://fresh-clothes-demo.mybigcommerce.com/product_images/uploaded_images/cl-bt2.jpg', 
                    alt: 'Big bag', 
                    title: 'Big bag',
                    subTitle: '3 items',
                    actionLink: '#'
                },
                { 
                    img: 'https://fresh-clothes-demo.mybigcommerce.com/product_images/uploaded_images/cl-bt3.jpg', 
                    alt: 'New Style', 
                    title: 'New Style',
                    subTitle: '7 items',
                    actionLink: '#'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshClothesBannerThree" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshClothesBannerThreeFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Banner item ${index + 1}`,
                        element: <FreshClothesBannerThreeFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-clothes-banner-three" data-template="fresh_clothes_banner_three" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshClothesBannerThree;
