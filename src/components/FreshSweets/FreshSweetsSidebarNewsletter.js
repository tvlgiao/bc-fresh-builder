import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshSweetsSidebarNewsletterFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { formAction, title, placeholder, actionText, background, backgroundAlt, imgCaption, imgCaptionAlt } = this.props;
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
                <div className="form-group">
                    <label htmlFor="imgCaption">Background image caption URL</label>
                    <input type="text" className="form-control" id="imgCaption" name="imgCaption" value={imgCaption} onChange={this.handleChange} placeholder="Enter the background image caption url" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgCaptionAlt">Background image caption Alt</label>
                    <input type="text" className="form-control" id="imgCaptionAlt" name="imgCaptionAlt" value={imgCaptionAlt} onChange={this.handleChange} placeholder="Enter the background image caption alt" />
                </div>
            </form>
        );
    }
}

class FreshSweetsSidebarNewsletter extends BaseSectionConfig {
    defaultTitle = "Fresh Sweets Sidebar Newsletter";
    scopeName = "FreshSweetsSidebarNewsletter";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            actionText: "Send",
            title: "Subscribe Newsletter",
            placeholder: "Enter your email",
            formAction: "/",
            background: "https://cdn11.bigcommerce.com/s-tyhv2hf1i4/product_images/uploaded_images/bkg-newletter.png",
            backgroundAlt: "bkg-newletter.png",
            imgCaption: "https://cdn11.bigcommerce.com/s-tyhv2hf1i4/product_images/uploaded_images/icon-newletter.png",
            imgCaptionAlt: "icon-newletter.png"
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshSweetsSidebarNewsletter" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshSweetsSidebarNewsletterFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-sweets-sidebar-newsletter" data-template="fresh_sweets_sidebar_newsletter" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshSweetsSidebarNewsletter;
