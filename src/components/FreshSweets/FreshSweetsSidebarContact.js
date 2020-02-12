import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshSweetsSidebarContactFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, label, actionText, actionLink  } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Icon Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the Icon Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Icon Image ALT</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter the Icon Image ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="label">Contact label</label>
                    <input type="text" className="form-control" id="label" name="label" value={label} onChange={this.handleChange} placeholder="Enter the contact label text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionText">Action Text</label>
                    <input type="text" className="form-control" id="actionText" name="actionText" value={actionText} onChange={this.handleChange} placeholder="Enter the action text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink">Action Link</label>
                    <input type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}


class FreshSweetsSidebarContactFormGeneral extends React.Component {
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
                    <label htmlFor="items_count">Number of contact items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of contact items" />
                </div>
            </form>
        );
    }
}

class FreshSweetsSidebarContact extends BaseSectionConfig {
    defaultTitle = "Fresh Sweets Sidebar Contact";
    scopeName = "FreshSweetsSidebarContact";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            items: [
                {
                img: 'https://cdn11.bigcommerce.com/s-tyhv2hf1i4/product_images/uploaded_images/icon-info-1.png',
                alt: 'icon-info-1.png',
                label: 'Phone',
                actionText: '0 - 123 - 678 - 8899',
                actionLink: 'tel: 0 - 123 - 678 - 8899'
                },
                {
                    img: 'https://cdn11.bigcommerce.com/s-tyhv2hf1i4/product_images/uploaded_images/icon-info-2.png',
                    alt: 'icon-info-2.png',
                    label: 'Email',
                    actionText: 'contact@Theme.com',
                    actionLink: 'mailto: contact@Theme.com'
                },
                {
                    img: 'https://cdn11.bigcommerce.com/s-tyhv2hf1i4/product_images/uploaded_images/icon-info-3.png',
                    alt: 'icon-info-3.png',
                    label: 'Skype',
                    actionText: 'freshcommerce',
                    actionLink: 'skype:freshcommerce?call'
                },
                {
                    img: 'https://cdn11.bigcommerce.com/s-tyhv2hf1i4/product_images/uploaded_images/icon-info-4.png',
                    alt: 'icon-info-4.png',
                    label: 'Address',
                    actionText: '184 Main Rd E, St Albans Victoria 3021, Australia',
                    actionLink: '#'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshSweetsSidebarContact" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshSweetsSidebarContactFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Contact item ${index + 1}`,
                        element: <FreshSweetsSidebarContactFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-sweets-sidebar-contact" data-template="fresh_sweets_sidebar_contact" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshSweetsSidebarContact;
