import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshNovelsFooterInstagramFormItem extends React.Component {
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


class FreshNovelsFooterInstagramFormGeneral extends React.Component {
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

class FreshNovelsFooterInstagram extends BaseSectionConfig {
    defaultTitle = "Fresh Novels Footer Instagram";
    scopeName = "FreshNovelsFooterInstagram";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: "Instagram",
            items: [
                { 
                    link: 'https://www.instagram.com/p/B5b8FtGlhtx', 
                },
                { 
                    link: 'https://www.instagram.com/p/B5b8E5pFXRU', 
                },
                { 
                    link: 'https://www.instagram.com/p/B5b8DFmFq8s', 
                },
                { 
                    link: 'https://www.instagram.com/p/B5b8CWWFdae', 
                },
                { 
                    link: 'https://www.instagram.com/p/B5b8BqiFleU', 
                },
                { 
                    link: 'https://www.instagram.com/p/B5b8A9dFTY6'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshNovelsFooterInstagram" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshNovelsFooterInstagramFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Banner item ${index + 1}`,
                        element: <FreshNovelsFooterInstagramFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-novels-footer-instagram" data-template="fresh_novels_footer_instagram" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshNovelsFooterInstagram;
