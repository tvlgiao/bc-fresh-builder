import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';

class FreshFashionInstagramFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { link1, title1, link2, title2 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="link1">Instagram post link 1</label>
                    <input type="text" className="form-control" id="link1" name="link1" value={link1} onChange={this.handleChange} placeholder="Enter The instagram post link" />
                </div>
                <div className="form-group">
                    <label htmlFor="title1">Title 1</label>
                    <input type="text" className="form-control" id="title1" name="title1" value={title1} onChange={this.handleChange} placeholder="Enter The title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="link2">Instagram post link 2</label>
                    <input type="text" className="form-control" id="link2" name="link2" value={link2} onChange={this.handleChange} placeholder="Enter The instagram post link" />
                </div>
                <div className="form-group">
                    <label htmlFor="title2">Title 2</label>
                    <input type="text" className="form-control" id="title2" name="title2" value={title2} onChange={this.handleChange} placeholder="Enter The title text" />
                </div>
            </form>
        );
    }
}


class FreshFashionInstagramFormGeneral extends React.Component {
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

class FreshFashionInstagram extends BaseSectionConfig {
    defaultTitle = "Fresh Fashion Instagram";
    scopeName = "FreshFashionInstagram";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: "Instagram",
            items: [
                { 
                    link1: 'https://www.instagram.com/p/B5b8KBgF87a',
                    title1: 'link title',
                    link2: 'https://www.instagram.com/p/B5cNnHSFj_3', 
                    title2: 'link title'
                },
                { 
                    link1: 'https://www.instagram.com/p/B5cJa68F-Rd', 
                    title1: 'link title',
                    link2: 'https://www.instagram.com/p/B5cJdURl-zV', 
                    title2: 'link title'
                },
                { 
                    link1: 'https://www.instagram.com/p/B5b8GdolCW8', 
                    title1: 'link title',
                    link2: 'https://www.instagram.com/p/B5cNoLEFqzk', 
                    title2: 'link title' 
                },
                { 
                    link1: 'https://www.instagram.com/p/B5b8HS0l640', 
                    title1: '',
                    link2: 'https://www.instagram.com/p/B5b8ImtlnYY', 
                    title2: 'link title'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshFashionInstagram" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshFashionInstagramFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Banner item ${index + 1}`,
                        element: <FreshFashionInstagramFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-fashion-instagram" data-template="fresh_fashion_instagram" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshFashionInstagram;
