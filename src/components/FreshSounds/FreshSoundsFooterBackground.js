import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshSoundsFooterBackgroundFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { backgroundImage, backgroundImageAlt } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="backgroundImage">Background Image URL</label>
                    <input type="text" className="form-control" id="backgroundImage" name="backgroundImage" value={backgroundImage} onChange={this.handleChange} placeholder="Enter The Background Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="backgroundImageAlt">Background Image ALT</label>
                    <input type="text" className="form-control" id="backgroundImageAlt" name="backgroundImageAlt" value={backgroundImageAlt} onChange={this.handleChange} placeholder="Enter The Background Image ALT" />
                </div>
            </form>
        );
    }
}

class FreshSoundsFooterBackground extends BaseSectionConfig {
    defaultTitle = "Fresh Sounds Footer Background";
    scopeName = "FreshSoundsFooterBackground";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            backgroundImage: 'https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-footer-bg.jpg', 
            backgroundImageAlt: 'so-footer-bg.jpg',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshSoundsFooterBackground" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshSoundsFooterBackgroundFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-sounds-footer-background" data-template="fresh_sounds_footer_background" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshSoundsFooterBackground;
