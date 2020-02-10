import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshSweetsSidebarInstagramFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { link } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="link">Instagram post link</label>
                    <input type="text" className="form-control" id="link" name="link" value={link} onChange={this.handleChange} placeholder="Enter The instagram post link" />
                </div>
            </form>
        );
    }
}


class FreshSweetsSidebarInstagramFormGeneral extends React.Component {
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

class FreshSweetsSidebarInstagram extends BaseSectionConfig {
    defaultTitle = "Fresh Sweets Sidebar Instagram";
    scopeName = "FreshSweetsSidebarInstagram";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: "Instagram",
            items: [
                { 
                    link: 'https://www.instagram.com/p/B8Lh5iQp3dJ', 
                },
                { 
                    link: 'https://www.instagram.com/p/B8Lh5CeJOxm', 
                },
                { 
                    link: 'https://www.instagram.com/p/B8Lh4UJJVaQ', 
                },
                { 
                    link: 'https://www.instagram.com/p/B8Lh3u8pvwa', 
                },
                { 
                    link: 'https://www.instagram.com/p/B8Lh3J7JUke', 
                },
                { 
                    link: 'https://www.instagram.com/p/B8Lh2ehJi5j'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshSweetsSidebarInstagram" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshSweetsSidebarInstagramFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Banner item ${index + 1}`,
                        element: <FreshSweetsSidebarInstagramFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-sweets-sidebar-instagram" data-template="fresh_sweets_sidebar_instagram" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshSweetsSidebarInstagram;
