import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshToysBannerMainItemOne extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img1, alt1, imgc1, altc1, actionLink1 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img1">Banner Image URL(Recommended image size 772x345)</label>
                    <input type="text" className="form-control" id="img1" name="img1" value={img1} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt1">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt1" name="alt1" value={alt1} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgc1">Banner Caption Image URL(Recommended image size 772x345)</label>
                    <input type="text" className="form-control" id="imgc1" name="imgc1" value={imgc1} onChange={this.handleChange} placeholder="Enter the banner caption image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="altc1">Banner Caption Image alt</label>
                    <input type="text" className="form-control" id="altc1" name="altc1" value={altc1} onChange={this.handleChange} placeholder="Enter the banner caption image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink1">Action Link</label>
                    <input type="text" className="form-control" id="actionLink1" name="actionLink1" value={actionLink1} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshToysBannerMainItemTwo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img2, alt2, imgc2, altc2, actionLink2 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img2">Banner Image URL(Recommended image size 772x345)</label>
                    <input type="text" className="form-control" id="img2" name="img2" value={img2} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt2">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt2" name="alt2" value={alt2} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgc2">Banner Caption Image URL(Recommended image size 772x345)</label>
                    <input type="text" className="form-control" id="imgc2" name="imgc2" value={imgc2} onChange={this.handleChange} placeholder="Enter the banner caption image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="altc2">Banner Caption Image alt</label>
                    <input type="text" className="form-control" id="altc2" name="altc2" value={altc2} onChange={this.handleChange} placeholder="Enter the banner caption image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink2">Action Link</label>
                    <input type="text" className="form-control" id="actionLink2" name="actionLink2" value={actionLink2} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshToysBannerMainItemMain extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img3, alt3, imgc3, altc3, actionLink3 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img3">Banner Image URL(Recommended image size 772x345)</label>
                    <input type="text" className="form-control" id="img3" name="img3" value={img3} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt3">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt3" name="alt3" value={alt3} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgc3">Banner Caption Image URL(Recommended image size 772x345)</label>
                    <input type="text" className="form-control" id="imgc3" name="imgc3" value={imgc3} onChange={this.handleChange} placeholder="Enter the banner caption image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="altc3">Banner Caption Image alt</label>
                    <input type="text" className="form-control" id="altc3" name="altc3" value={altc3} onChange={this.handleChange} placeholder="Enter the banner caption image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink3">Action Link</label>
                    <input type="text" className="form-control" id="actionLink3" name="actionLink3" value={actionLink3} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshToysBannerMain extends BaseSectionConfig {
    defaultTitle = "Fresh Toys Banner Main";
    scopeName = "FreshToysBannerMain";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img1: "https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/top-banner-1.png",
            alt1: "top-banner-1.png",
            imgc1: "https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/top-banner-1-text.png",
            altc1: "top-banner-1-text.png",
            actionLink1: '#',
            img2: "https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/top-banner-2.png",
            alt2: "top-banner-2.png",
            imgc2: "https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/top-banner-2-text.png",
            altc2: "top-banner-2-text.png",
            actionLink2: '#',
            img3: "https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/top-banner-3.png",
            alt3: "top-banner-3.png",
            imgc3: "https://fresh-toys-demo.mybigcommerce.com/product_images/uploaded_images/top-banner-3-text.png",
            altc3: "top-banner-3-text.png",
            actionLink3: '#',
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshToysBannerMain" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: 'Banner item 1',
                        element: <FreshToysBannerMainItemOne onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 2',
                        element: <FreshToysBannerMainItemTwo onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 3',
                        element: <FreshToysBannerMainItemMain onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    }
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-toys-banner-main" data-template="fresh_toys_banner_main" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshToysBannerMain;
