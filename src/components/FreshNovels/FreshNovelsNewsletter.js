import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshNovelsNewsletterFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { formAction, title, placeholder, actionText, background, backgroundAlt } = this.props;
        return (
            <form>
            <div className="form-group">
                    <label htmlFor="formAction">Form action URL</label>
                    <input type="text" className="form-control" id="formAction" name="formAction" value={formAction} onChange={this.handleChange} placeholder="Enter form action url" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter The title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="placeholder">Input Placeholder</label>
                    <input type="text" className="form-control" id="placeholder" name="placeholder" value={placeholder} onChange={this.handleChange} placeholder="Enter the input placeholder text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionText">Action text</label>
                    <input type="text" className="form-control" id="actionText" name="actionText" value={actionText} onChange={this.handleChange} placeholder="Enter the action text" />
                </div>
                <div className="form-group">
                    <label htmlFor="background">Background image URL</label>
                    <input type="text" className="form-control" id="background" name="background" value={background} onChange={this.handleChange} placeholder="Enter the background image url" />
                </div>
                <div className="form-group">
                    <label htmlFor="backgroundAlt">Background image Alt</label>
                    <input type="text" className="form-control" id="backgroundAlt" name="backgroundAlt" value={backgroundAlt} onChange={this.handleChange} placeholder="Enter the background image alt" />
                </div>
            </form>
        );
    }
}

class FreshNovelsNewsletter extends BaseSectionConfig {
    defaultTitle = "Fresh Novels Newsletter";
    scopeName = "FreshNovelsNewsletter";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            actionText: "Subscribe",
            title: "Sign up to get 10% off your first order",
            placeholder: "Subscribe",
            formAction: "/",
            background: "/product_images/uploaded_images/no-newsletter-background.jpg",
            backgroundAlt: "no-newsletter-background.jpg",
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshNovelsNewsletter" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshNovelsNewsletterFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-novels-newsletter" data-template="fresh_novels_newsletter" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshNovelsNewsletter;
