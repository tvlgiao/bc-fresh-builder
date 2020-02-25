import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshToysFooterInformationFormGeneral extends React.Component {
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

class FreshToysFooterInformation extends BaseSectionConfig {
    defaultTitle = "Fresh Toys Footer Information";
    scopeName = "FreshToysFooterInformation";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            logo: 'https://cdn11.bigcommerce.com/s-7hgzkc2z3h/images/stencil/original/logo_1579490274__82009.original.png',
            logoAlt: 'logo.png',
            caption: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni am, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.</p>`
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshToysFooterInformation" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshToysFooterInformationFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-toys-footer-information" data-template="fresh_toys_footer_information" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshToysFooterInformation;
