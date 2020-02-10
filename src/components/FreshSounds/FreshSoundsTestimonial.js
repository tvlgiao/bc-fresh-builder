import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';


class FreshSoundsTestimonialFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { title, content } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title text</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content text</label>
                    <input type="text" className="form-control" id="content" name="content" value={content} onChange={this.handleChange} placeholder="Enter content text" />
                </div>
            </form>
        );
    }
}

class FreshSoundsTestimonialFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { icon, iconAlt, items_count } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="icon">Icon image URL</label>
                    <input type="text" className="form-control" id="icon" name="icon" value={icon} onChange={this.handleChange} placeholder="Enter the background icon image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="iconAlt">Icon alt</label>
                    <input type="text" className="form-control" id="iconAlt" name="iconAlt" value={iconAlt} onChange={this.handleChange} placeholder="Enter the icon image Alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of testimonial items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of testimonial items" />
                </div>
            </form>
        );
    }
}

class FreshSoundsTestimonial extends BaseSectionConfig {
    defaultTitle = "Fresh Sounds Testimonial";
    scopeName = "FreshSoundsTestimonial";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            icon: '/product_images/uploaded_images/iconcmt.png',
            iconAlt: 'iconcmt.png',
            items: [
                { 
                    title: 'GREAT CUSTOM GEAR', 
                    content: 'If you’ve ever fit a mouthguard, you can fit Decibullz. Soften them in boiling water, press into your ears, and in minutes they harden to deliver a snug fit and clear sound.'
                },
                { 
                    title: 'Miranda Robertson', 
                    content: 'If you’ve ever fit a mouthguard, you can fit Decibullz. Soften them in boiling water, press into your ears, and in minutes they harden to deliver a snug fit and clear sound.'
                },
                { 
                    title: 'Miranda Robertson', 
                    content: 'Floristry can involve the cultivation of flowers as well as their arrangement, and to the business of selling them. Much of the raw material supplied for the floristry trade.'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshSoundsTestimonial" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: "General",
                        element: <FreshSoundsTestimonialFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Item ${index + 1}`,
                        element: <FreshSoundsTestimonialFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-sounds-testimonial" data-template="fresh_sounds_testimonial" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshSoundsTestimonial;
