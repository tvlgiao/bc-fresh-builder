import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshSweetsFooterInformationFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { logo, logoAlt, caption } = this.props;
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
                    <label htmlFor="caption">Caption</label>
                    <textarea type="text" className="form-control" id="caption" name="caption" rows="4" onChange={this.handleChange} placeholder="Enter The Caption Text" defaultValue={caption} />
                </div>
            </form>
        );
    }
}

class FreshSweetsFooterInformation extends BaseSectionConfig {
    defaultTitle = "Fresh Sweets Footer Information";
    scopeName = "FreshSweetsFooterInformation";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            logo: 'https://cdn11.bigcommerce.com/s-hlswig5u2s/product_images/uploaded_images/logo.png',
            logoAlt: 'logo.png',
            caption: `<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>`
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshSweetsFooterInformation" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshSweetsFooterInformationFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-sweets-footer-information" data-template="fresh_sweets_footer_information" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshSweetsFooterInformation;
