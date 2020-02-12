import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshCakesInstagramFormItem extends React.Component {
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


class FreshCakesInstagramFormGeneral extends React.Component {
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

class FreshCakesInstagram extends BaseSectionConfig {
    defaultTitle = "Fresh Cakes Instagram";
    scopeName = "FreshCakesInstagram";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            items: [
                { 
                    link: 'https://www.instagram.com/p/B8a6_TLJzTV'
                },
                { 
                    link: 'https://www.instagram.com/p/B8a6-deJRuY' 
                },
                { 
                    link: 'https://www.instagram.com/p/B8a69iXJhEy'
                },
                { 
                    link: 'https://www.instagram.com/p/B8a67T-ptw0'
                },
                { 
                    link: 'https://www.instagram.com/p/B8a66qBpQSG'
                },
                { 
                    link: 'https://www.instagram.com/p/B8a66BlplQF'
                },
                { 
                    link: 'https://www.instagram.com/p/B8a65YCJ6_Q'
                },
                { 
                    link: 'https://www.instagram.com/p/B8a64rOppCX'
                },
                { 
                    link: 'https://www.instagram.com/p/B8a632Upika'
                },
                { 
                    link: 'https://www.instagram.com/p/B8a62-4J9Sa'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshCakesInstagram" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshCakesInstagramFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Banner item ${index + 1}`,
                        element: <FreshCakesInstagramFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-cakes-instagram" data-template="fresh_cakes_instagram" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshCakesInstagram;
