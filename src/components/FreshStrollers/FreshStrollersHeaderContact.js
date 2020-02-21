import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshStrollersHeaderContactFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { title, phoneNumber, phoneAction } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title">title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title" />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={phoneNumber} onChange={this.handleChange} placeholder="Enter the phone number" />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneAction">Phone Number Link Action</label>
                    <input type="text" className="form-control" id="phoneAction" name="phoneAction" value={phoneAction} onChange={this.handleChange} placeholder="Enter the phone number action link" />
                </div>
            </form>
        );
    }
}

class FreshStrollersHeaderContact extends BaseSectionConfig {
    defaultTitle = "Fresh Strollers Header Contact";
    scopeName = "FreshStrollersHeaderContact";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            title: 'Speak with a Baby Gear Expert',
            phoneNumber: '(+ 08 ) - 123 - 678 - 8899',
            phoneAction: 'tel:  (+ 08 ) - 123 - 678 - 8899'
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshStrollersHeaderContact" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshStrollersHeaderContactFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-strollers-header-contact" data-template="fresh_strollers_header_contact" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshStrollersHeaderContact;
