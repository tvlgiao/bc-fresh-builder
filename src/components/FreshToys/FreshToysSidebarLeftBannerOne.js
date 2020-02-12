import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshToysSidebarLeftBannerOneFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, imgCaption, altCaption, actionLink } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Banner Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter The Banner Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Banner Image ALT</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter The Banner Image ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgCaption">Banner Image Caption URL</label>
                    <input type="text" className="form-control" id="imgCaption" name="imgCaption" value={imgCaption} onChange={this.handleChange} placeholder="Enter The Banner Image Caption URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="altCaption">Banner Image Caption ALT</label>
                    <input type="text" className="form-control" id="altCaption" name="altCaption" value={altCaption} onChange={this.handleChange} placeholder="Enter The Banner Image Caption ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink">Action Link</label>
                    <input type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshToysSidebarLeftBannerOne extends BaseSectionConfig {
    defaultTitle = "Fresh Toys Sidebar Left Banner One";
    scopeName = "FreshToysSidebarLeftBannerOne";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/banner-newbaby.png', 
            alt: 'banner-newbaby.png',
            imgCaption: 'https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/banner-newbaby-text.png', 
            altCaption: 'banner-newbaby-text.png',
            actionLink: '#'
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshToysSidebarLeftBannerOne" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshToysSidebarLeftBannerOneFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-toys-sidebar-left-banner-one" data-template="fresh_toys_sidebar_left_banner_one" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshToysSidebarLeftBannerOne;
