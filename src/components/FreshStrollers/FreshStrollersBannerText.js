import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshStrollersBannerTextFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const {text, actionText, actionLink } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="text">Content(HTML)</label>
                    <textarea type="text" className="form-control" id="text" name="text" value={text} onChange={this.handleChange} placeholder="Enter the content text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionText">Action Text</label>
                    <input type="text" className="form-control" id="actionText" name="actionText" value={actionText} onChange={this.handleChange} placeholder="Enter the action text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink">Action Link</label>
                    <input type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshStrollersBannerText extends BaseSectionConfig {
    defaultTitle = "Fresh Strollers Banner Text";
    scopeName = "FreshStrollersBannerText";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            text: `<span>save up to 50%</span> Online and in Store`,
            actionText: 'Shop all deals Now!', 
            actionLink: '#'
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshStrollersBannerText" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshStrollersBannerTextFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-strollers-banner-text" data-template="fresh_strollers_banner_text" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshStrollersBannerText;
