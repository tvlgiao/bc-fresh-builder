import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshSoundsBannerFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { backgroundImage, backgroundImageAlt, title } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="backgroundImage">Background Image URL(Recommended image size 1920x495)</label>
                    <input type="text" className="form-control" id="backgroundImage" name="backgroundImage" value={backgroundImage} onChange={this.handleChange} placeholder="Enter The Background Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="backgroundImageAlt">Background Image ALT</label>
                    <input type="text" className="form-control" id="backgroundImageAlt" name="backgroundImageAlt" value={backgroundImageAlt} onChange={this.handleChange} placeholder="Enter The Background Image ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
            </form>
        );
    }
}

class FreshSoundsBanner extends BaseSectionConfig {
    defaultTitle = "Fresh Sounds Banner";
    scopeName = "FreshSoundsBanner";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            backgroundImage: 'https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-freeship-bg.jpg', 
            backgroundImageAlt: 'so-freeship-bg.jpg', 
            title: '<strong>FREE SHIPPING</strong> US ORDERS OVER <strong>$50</strong>'
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshSoundsBanner" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshSoundsBannerFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="fresh-section fresh-section--sounds-banner u-hiddenVisually" data-local-banner-position="fresh-sounds-banner" data-template="fresh_sounds_banner" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshSoundsBanner;
