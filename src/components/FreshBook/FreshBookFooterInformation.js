import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshBookFooterInformationFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { logo, logoAlt, phoneText, phoneLink, mailText, mailLink, addressText, addressLink } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="logo">Logo Image URL(Recommended image size 160x50)</label>
                    <input type="text" className="form-control" id="logo" name="logo" value={logo} onChange={this.handleChange} placeholder="Enter The Logo Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="logoAlt">Logo Image ALT</label>
                    <input type="text" className="form-control" id="logoAlt" name="logoAlt" value={logoAlt} onChange={this.handleChange} placeholder="Enter The Logo Image ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneText">Phone Text</label>
                    <input type="text" className="form-control" id="phoneText" npame="phoneText" value={phoneText} onChange={this.handleChange} placeholder="Enter The Phone Text" />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneLink">Phone Link</label>
                    <input type="text" className="form-control" id="phoneLink" name="phoneLink" value={phoneLink} onChange={this.handleChange} placeholder="Enter The Phone Link" />
                </div>
                <div className="form-group">
                    <label htmlFor="mailText">Mail Text</label>
                    <input type="text" className="form-control" id="mailText" name="mailText" value={mailText} onChange={this.handleChange} placeholder="Enter The Mail Text" />
                </div>
                <div className="form-group">
                    <label htmlFor="mailLink">Mail Link</label>
                    <input type="text" className="form-control" id="mailLink" name="mailLink" value={mailLink} onChange={this.handleChange} placeholder="Enter The Mail Link" />
                </div>
                <div className="form-group">
                    <label htmlFor="addressText">Address Text</label>
                    <input type="text" className="form-control" id="addressText" name="addressText" value={addressText} onChange={this.handleChange} placeholder="Enter The Address Text" />
                </div>
                <div className="form-group">
                    <label htmlFor="addressLink">Address Link</label>
                    <input type="text" className="form-control" id="addressLink" name="addressLink" value={addressLink} onChange={this.handleChange} placeholder="Enter The Address Link" />
                </div>
            </form>
        );
    }
}

class FreshBookFooterInformation extends BaseSectionConfig {
    defaultTitle = "Fresh Book Footer Information";
    scopeName = "FreshBookFooterInformation";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            logo: 'https://cdn11.bigcommerce.com/s-d7pvcwryxv/product_images/uploaded_images/logo-footer.png',
            logoAlt: 'logo-footer.png',
            phoneText: 'tel:(+0) 123 456 789',
            phoneLink: 'tel:(+0) 123 456 789',
            mailText: 'contact@papathemes.com',
            mailLink: 'mailto: contact@papathemes.com',
            addressText: '2593 Timbercrest Road, Chisana, Alaska Badalas',
            addressLink: ''
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshBookFooterInformation" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshBookFooterInformationFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-book-footer-information" data-template="fresh_book_footer_information" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshBookFooterInformation;
