import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';


class FreshSweetsSidebarOurChefsFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { avata, avataAlt, content } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="avata">Avata Image URL</label>
                    <input type="text" className="form-control" id="avata" name="avata" value={avata} onChange={this.handleChange} placeholder="Enter The Avata Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="avataAlt">Avata Image ALT</label>
                    <input type="text" className="form-control" id="avataAlt" name="avataAlt" value={avataAlt} onChange={this.handleChange} placeholder="Enter The Avata Image ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <input type="text" className="form-control" id="content" name="content" value={content} onChange={this.handleChange} placeholder="Enter The Content" />
                </div>
            </form>
        );
    }
}

class FreshSweetsSidebarOurChefsFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count, heading} = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of client items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of client items" />
                </div>
            </form>
        );
    }
}

class FreshSweetsSidebarOurChefs extends BaseSectionConfig {
    defaultTitle = "Fresh Sweets Sidebar Our Chefs";
    scopeName = "FreshSweetsSidebarOurChefs";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'Our Chefs',
            items: [
                { 
                    avata: 'https://cdn11.bigcommerce.com/s-tyhv2hf1i4/product_images/uploaded_images/avatar.png',
                    avataAlt: 'avatar.png',
                    content: ' We have awesome chefs in our team. We are also always looking for new people to join our team. Our chefs know thei stuff very well.'
                },
                { 
                    avata: 'https://cdn11.bigcommerce.com/s-tyhv2hf1i4/product_images/uploaded_images/avatar.png',
                    avataAlt: 'avatar.png',
                    content: ' We have awesome chefs in our team. We are also always looking for new people to join our team. Our chefs know thei stuff very well.'
                },
                { 
                    avata: 'https://cdn11.bigcommerce.com/s-tyhv2hf1i4/product_images/uploaded_images/avatar.png',
                    avataAlt: 'avatar.png',
                    content: ' We have awesome chefs in our team. We are also always looking for new people to join our team. Our chefs know thei stuff very well.'
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshSweetsSidebarOurChefs" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: "General",
                        element: <FreshSweetsSidebarOurChefsFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Item ${index + 1}`,
                        element: <FreshSweetsSidebarOurChefsFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-sweets-sidebar-our-chefs" data-template="fresh_sweets_sidebar_our_chefs" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshSweetsSidebarOurChefs;
