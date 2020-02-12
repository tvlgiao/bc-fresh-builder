import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';


class FreshToysSidebarClientSaysFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { avata, avataAlt, name, position, content } = this.props;
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
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={this.handleChange} placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position</label>
                    <input type="text" className="form-control" id="position" name="position" value={position} onChange={this.handleChange} placeholder="Enter Position" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <input type="text" className="form-control" id="content" name="content" value={content} onChange={this.handleChange} placeholder="Enter The Content" />
                </div>
            </form>
        );
    }
}

class FreshToysSidebarClientSaysFormGeneral extends React.Component {
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

class FreshToysSidebarClientSays extends BaseSectionConfig {
    defaultTitle = "Fresh Toys Sidebar Client Says";
    scopeName = "FreshToysSidebarClientSays";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'What Our Client Says',
            items: [
                { 
                    avata: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/avatar.png',
                    avataAlt: 'avatar.png',
                    name: 'Anna Belle', 
                    position: 'client',
                    content: 'Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores'
                },
                { 
                    avata: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/avatar.png',
                    avataAlt: 'avatar.png',
                    name: 'John Doe', 
                    position: 'Abc Company',
                    content: 'Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores'
                },
                { 
                    avata: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/avatar.png',
                    avataAlt: 'avatar.png',
                    name: 'Anna Belle', 
                    position: 'client',
                    content: 'Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshToysSidebarClientSays" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: "General",
                        element: <FreshToysSidebarClientSaysFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Item ${index + 1}`,
                        element: <FreshToysSidebarClientSaysFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-toys-sidebar-client-says" data-template="fresh_toys_sidebar_client_says" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshToysSidebarClientSays;
