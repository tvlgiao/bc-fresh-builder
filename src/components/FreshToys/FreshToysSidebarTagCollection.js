import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshToysSidebarTagCollectionFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { title,link } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title">Tag title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter The tag title" />
                </div>
                <div className="form-group">
                    <label htmlFor="link">Tag link</label>
                    <input type="text" className="form-control" id="link" name="link" value={link} onChange={this.handleChange} placeholder="Enter The tag link" />
                </div>
            </form>
        );
    }
}


class FreshToysSidebarTagCollectionFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { heading, items_count } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter The heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of banner items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of banner items" />
                </div>
            </form>
        );
    }
}

class FreshToysSidebarTagCollection extends BaseSectionConfig {
    defaultTitle = "Fresh Toys Sidebar Tag Collection";
    scopeName = "FreshToysSidebarTagCollection";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: "SPECIAL COLLECTION",
            items: [
                { 
                    title: 'Toy',
                    link: '#'
                },
                { 
                    title: 'Dolls',
                    link: '#'
                },
                { 
                    title: 'Cars',
                    link: '#'
                },
                { 
                    title: 'Lego',
                    link: '#'
                },
                { 
                    title: 'Gundam',
                    link: '#'
                },
                { 
                    title: 'Fashion',
                    link: '#'
                },
                { 
                    title: 'Color',
                    link: '#'
                },
                { 
                    title: 'Building Sets',
                    link: '#'
                },
                { 
                    title: 'Electronics',
                    link: '#'
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshToysSidebarTagCollection" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshToysSidebarTagCollectionFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Banner item ${index + 1}`,
                        element: <FreshToysSidebarTagCollectionFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-toys-sidebar-tag-collection" data-template="fresh_toys_sidebar_tag_collection" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshToysSidebarTagCollection;
