import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshSoundsHearingProtectionFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count, backgroundImage, backgroundImageAlt, backgroundImageOverlay, backgroundImageOverlayAlt, caption } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="backgroundImage">Background Image URL(Recommended image size 1920x1500)</label>
                    <input type="text" className="form-control" id="backgroundImage" name="backgroundImage" value={backgroundImage} onChange={this.handleChange} placeholder="Enter The Background Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="backgroundImageAlt">Background Image alt</label>
                    <input type="text" className="form-control" id="backgroundImageAlt" name="backgroundImageAlt" value={backgroundImageAlt} onChange={this.handleChange} placeholder="Enter The Background Image Alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="backgroundImageOverlay">Background overlay Image URL(Recommended image size 1920x1500)</label>
                    <input type="text" className="form-control" id="backgroundImageOverlay" name="backgroundImageOverlay" value={backgroundImageOverlay} onChange={this.handleChange} placeholder="Enter The Background overlay Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="backgroundImageOverlayAlt">Background Image Alt</label>
                    <input type="text" className="form-control" id="backgroundImageOverlayAlt" name="backgroundImageOverlayAlt" value={backgroundImageOverlayAlt} onChange={this.handleChange} placeholder="Enter The Background Image Alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="caption">Caption</label>
                    <textarea col="4" className="form-control" id="caption" name="caption" onChange={this.handleChange} placeholder="Enter The caption text" defaultValue={caption} />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of information blocks</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of information blocks" />
                </div>
            </form>
        );
    }
}

class FreshSoundsHearingProtectionFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { icon, iconAlt, title, actionLink } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="icon">Icon image url(Recommended image size 50x50)</label>
                    <input type="text" className="form-control" id="icon" name="icon" value={icon} onChange={this.handleChange} placeholder="Enter The image icon url" />
                </div>
                <div className="form-group">
                    <label htmlFor="iconAlt">Icon image alt</label>
                    <input type="text" className="form-control" id="iconAlt" name="iconAlt" value={iconAlt} onChange={this.handleChange} placeholder="Enter The image icon alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter The title" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink">Link</label>
                    <input type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter The action link" />
                </div>
            </form>
        );
    }
}

class FreshSoundsHearingProtection extends BaseSectionConfig {
    defaultTitle = "Fresh Sounds Hearing Protection";
    scopeName = "FreshSoundsHearingProtection";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            backgroundImage: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/bkg2.png",
            backgroundImageAlt: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/bkg2.png",
            backgroundImageOverlay: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-hp-overlay.png",
            backgroundImageOverlayAlt: "so-hp-overlay.png",
            caption: "Decibullz earplugs have the highest Noise Reduction Rating for a custom earplug with a maximum NRR of 31. Decibullz enviroments",
            items: [
                {
                    icon: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-hp-ico4.png",
                    iconAlt: "so-hp-ico4.png",
                    title: "UP TO 31 NRR",
                    actionLink: "#"
                },
                {
                    icon: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-hp-ico5.png",
                    iconAlt: "so-hp-ico5.png",
                    title: "MADE IN THE USA",
                    actionLink: "#"
                },
                {
                    icon: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-hp-ico6.png",
                    iconAlt: "so-hp-ico6.png",
                    title: "SECURE CUSTOM FIT",
                    actionLink: "#"
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshSoundsHearingProtection" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshSoundsHearingProtectionFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length}/>
                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Information blocks ${index + 1}`,
                        element: <FreshSoundsHearingProtectionFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-sounds-hearing-protection" data-template="fresh_sounds_hearing_protection" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshSoundsHearingProtection;
