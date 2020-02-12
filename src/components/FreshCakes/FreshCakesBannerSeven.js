import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshCakesBannerSevenItemOne extends React.Component {
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
                    <label htmlFor="img1">Banner Image URL</label>
                    <input type="text" className="form-control" id="img1" name="img1" value={img1} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt1">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt1" name="alt1" value={alt1} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgc1">Banner Caption Image URL</label>
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

class FreshCakesBannerSevenItemTwo extends React.Component {
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
                    <label htmlFor="img2">Banner Image URL</label>
                    <input type="text" className="form-control" id="img2" name="img2" value={img2} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt2">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt2" name="alt2" value={alt2} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgc2">Banner Caption Image URL</label>
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

class FreshCakesBannerSevenItemThree extends React.Component {
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
                    <label htmlFor="img3">Banner Image URL</label>
                    <input type="text" className="form-control" id="img3" name="img3" value={img3} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt3">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt3" name="alt3" value={alt3} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgc3">Banner Caption Image URL</label>
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

class FreshCakesBannerSevenItemFour extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img4, alt4, imgc4, altc4, actionLink4 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img4">Banner Image URL</label>
                    <input type="text" className="form-control" id="img4" name="img4" value={img4} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt4">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt4" name="alt4" value={alt4} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgc4">Banner Caption Image URL</label>
                    <input type="text" className="form-control" id="imgc4" name="imgc4" value={imgc4} onChange={this.handleChange} placeholder="Enter the banner caption image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="altc4">Banner Caption Image alt</label>
                    <input type="text" className="form-control" id="altc4" name="altc4" value={altc4} onChange={this.handleChange} placeholder="Enter the banner caption image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink4">Action Link</label>
                    <input type="text" className="form-control" id="actionLink4" name="actionLink4" value={actionLink4} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshCakesBannerSevenItemFive extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img5, alt5, imgc5, altc5, actionLink5 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img5">Banner Image URL</label>
                    <input type="text" className="form-control" id="img5" name="img5" value={img5} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt5">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt5" name="alt5" value={alt5} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgc5">Banner Caption Image URL</label>
                    <input type="text" className="form-control" id="imgc5" name="imgc5" value={imgc5} onChange={this.handleChange} placeholder="Enter the banner caption image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="altc5">Banner Caption Image alt</label>
                    <input type="text" className="form-control" id="altc5" name="altc5" value={altc5} onChange={this.handleChange} placeholder="Enter the banner caption image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink5">Action Link</label>
                    <input type="text" className="form-control" id="actionLink5" name="actionLink5" value={actionLink5} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshCakesBannerSevenItemSix extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img6, alt6, imgc6, altc6, actionLink6 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img6">Banner Image URL</label>
                    <input type="text" className="form-control" id="img6" name="img6" value={img6} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt6">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt6" name="alt6" value={alt6} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgc6">Banner Caption Image URL</label>
                    <input type="text" className="form-control" id="imgc6" name="imgc6" value={imgc6} onChange={this.handleChange} placeholder="Enter the banner caption image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="altc6">Banner Caption Image alt</label>
                    <input type="text" className="form-control" id="altc6" name="altc6" value={altc6} onChange={this.handleChange} placeholder="Enter the banner caption image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink6">Action Link</label>
                    <input type="text" className="form-control" id="actionLink6" name="actionLink6" value={actionLink6} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshCakesBannerSevenItemSeven extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img7, alt7, imgc7, altc7, actionLink7 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img7">Banner Image URL</label>
                    <input type="text" className="form-control" id="img7" name="img7" value={img7} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt7">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt7" name="alt7" value={alt7} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgc7">Banner Caption Image URL</label>
                    <input type="text" className="form-control" id="imgc7" name="imgc7" value={imgc7} onChange={this.handleChange} placeholder="Enter the banner caption image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="altc7">Banner Caption Image alt</label>
                    <input type="text" className="form-control" id="altc7" name="altc7" value={altc7} onChange={this.handleChange} placeholder="Enter the banner caption image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink7">Action Link</label>
                    <input type="text" className="form-control" id="actionLink7" name="actionLink7" value={actionLink7} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshCakesBannerSeven extends BaseSectionConfig {
    defaultTitle = "Fresh Cakes Banner Seven";
    scopeName = "FreshCakesBannerSeven";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img1: "https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-cake-item1.jpg",
            alt1: "img-cake-item1.jpg",
            imgc1: "https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-cake-item1.png",
            altc1: "img-cake-item1.png",
            actionLink1: "#",
            img2: "https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-cake-item2.jpg",
            alt2: "img-cake-item2.jpg",
            imgc2: "https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-cake-item2.png",
            altc2: "img-cake-item2.png",
            actionLink2: "#",
            img3: "https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-cake-item3.jpg",
            alt3: "img-cake-item3.jpg",
            imgc3: "https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-cake-item3.png",
            altc3: "img-cake-item3.png",
            actionLink3: "#",
            img4: "https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-cake-item4.jpg",
            alt4: "img-cake-item4.jpg",
            imgc4: "https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-cake-item4.png",
            altc4: "img-cake-item4.png",
            actionLink4: "#",
            img5: "https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-cake-item5.jpg",
            alt5: "img-cake-item5.jpg",
            imgc5: "https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-cake-item5.png",
            altc5: "img-cake-item5.png",
            actionLink5: "#",
            img6: "https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-cake-item6.jpg",
            alt6: "img-cake-item6.jpg",
            imgc6: "https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-cake-item6.png",
            altc6: "img-cake-item6.png",
            actionLink6: "#",
            img7: "https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-cake-item7.jpg",
            alt7: "img-cake-item7.jpg",
            imgc7: "https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-cake-item7.png",
            altc7: "img-cake-item7.png",
            actionLink7: "#",
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshCakesBannerSeven" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: 'Banner item 1',
                        element: <FreshCakesBannerSevenItemOne onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 2',
                        element: <FreshCakesBannerSevenItemTwo onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 3',
                        element: <FreshCakesBannerSevenItemThree onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 4',
                        element: <FreshCakesBannerSevenItemFour onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 5',
                        element: <FreshCakesBannerSevenItemFive onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 6',
                        element: <FreshCakesBannerSevenItemSix onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 7',
                        element: <FreshCakesBannerSevenItemSeven onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    }
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-cakes-banner-seven" data-template="fresh_cakes_banner_seven" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshCakesBannerSeven;
