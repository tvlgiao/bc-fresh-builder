import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshSweetsSidebarInformationFormItem extends React.Component {
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


class FreshSweetsSidebarInformationFormGeneral extends React.Component {
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

class FreshSweetsSidebarInformation extends BaseSectionConfig {
    defaultTitle = "Fresh Sweets Sidebar Information";
    scopeName = "FreshSweetsSidebarInformation";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-o2thz2aet8/product_images/uploaded_images/info1.png', 
                    alt: 'FREE SHIPPING', 
                    title: 'FREE SHIPPING',
                    subTitle: 'Lorem ipsum dolor sit amet tetur adipiscing elit'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-o2thz2aet8/product_images/uploaded_images/info2.png', 
                    alt: '24/7 FREE SUPPORT', 
                    title: '24/7 FREE SUPPORT',
                    subTitle: 'Lorem ipsum dolor sit amet tetur adipiscing elit'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-o2thz2aet8/product_images/uploaded_images/info3.png', 
                    alt: 'MONEY BACK GURANTEE', 
                    title: 'MONEY BACK GURANTEE',
                    subTitle: 'Lorem ipsum dolor sit amet tetur adipiscing elit'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-o2thz2aet8/product_images/uploaded_images/info4.png', 
                    alt: 'WIN $100 TO SHOP', 
                    title: 'WIN $100 TO SHOP',
                    subTitle: 'Lorem ipsum dolor sit amet tetur adipiscing elit'
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshSweetsSidebarInformation" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshSweetsSidebarInformationFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Banner item ${index + 1}`,
                        element: <FreshSweetsSidebarInformationFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-sweets-sidebar-information" data-template="fresh_sweets_sidebar_information" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshSweetsSidebarInformation;
