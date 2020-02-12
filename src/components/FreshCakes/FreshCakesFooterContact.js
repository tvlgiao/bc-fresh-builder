import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshCakesFooterContactFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { phoneText, phoneLink, mailText, mailLink, addressText, addressLink } = this.props;
        return (
            <form>
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

class FreshCakesFooterContact extends BaseSectionConfig {
    defaultTitle = "Fresh Cakes Footer Contact";
    scopeName = "FreshCakesFooterContact";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            phoneText: '0-123-678-8899',
            phoneLink: 'tel:01236788899',
            mailText: 'contact@Theme.com',
            mailLink: 'mailto:contact@Theme.com',
            addressText: '184 Main Rd E, St Albans Victoria 3021, Australia',
            addressLink: ''
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshCakesFooterContact" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshCakesFooterContactFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-cakes-footer-contact" data-template="fresh_cakes_footer_contact" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshCakesFooterContact;
