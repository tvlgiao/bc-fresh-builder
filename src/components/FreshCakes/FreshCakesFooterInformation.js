import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshCakesFooterInformationFormGeneral extends React.Component {
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

class FreshCakesFooterInformation extends BaseSectionConfig {
    defaultTitle = "Fresh Cakes Footer Information";
    scopeName = "FreshCakesFooterInformation";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            logo: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/cakes-logo.png',
            logoAlt: 'cakes-logo.png',
            caption: `<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt again is there anyone who loves</p>`
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshCakesFooterInformation" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshCakesFooterInformationFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-cakes-footer-information" data-template="fresh_cakes_footer_information" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshCakesFooterInformation;
