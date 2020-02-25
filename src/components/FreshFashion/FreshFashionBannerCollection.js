import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshFashionBannerCollectionItemOne extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img1, alt1, title1, subTitle1, number1, actionLink1 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img1">Banner Image URL(Recommended image size 960x656)</label>
                    <input type="text" className="form-control" id="img1" name="img1" value={img1} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt1">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt1" name="alt1" value={alt1} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="title1">Title</label>
                    <input type="text" className="form-control" id="title1" name="title1" value={title1} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle1">Sub Title</label>
                    <input type="text" className="form-control" id="subTitle1" name="subTitle1" value={subTitle1} onChange={this.handleChange} placeholder="Enter the sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="number1">Number of items</label>
                    <input type="text" className="form-control" id="number1" name="number1" value={number1} onChange={this.handleChange} placeholder="Enter the Number of items text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink1">Action Link</label>
                    <input type="text" className="form-control" id="actionLink1" name="actionLink1" value={actionLink1} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshFashionBannerCollectionItemTwo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img2, alt2, title2, subTitle2, number2, actionLink2 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img2">Banner Image URL(Recommended image size 480x262)</label>
                    <input type="text" className="form-control" id="img2" name="img2" value={img2} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt2">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt2" name="alt2" value={alt2} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="title2">Title</label>
                    <input type="text" className="form-control" id="title2" name="title2" value={title2} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle2">Sub Title</label>
                    <input type="text" className="form-control" id="subTitle2" name="subTitle2" value={subTitle2} onChange={this.handleChange} placeholder="Enter the sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="number2">Number of items</label>
                    <input type="text" className="form-control" id="number2" name="number2" value={number2} onChange={this.handleChange} placeholder="Enter the Number of items text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink2">Action Link</label>
                    <input type="text" className="form-control" id="actionLink2" name="actionLink2" value={actionLink2} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshFashionBannerCollectionItemThree extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img3, alt3, title3, subTitle3, number3, actionLink3 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img3">Banner Image URL(Recommended image size 480x262)</label>
                    <input type="text" className="form-control" id="img3" name="img3" value={img3} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt3">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt3" name="alt3" value={alt3} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="title3">Title</label>
                    <input type="text" className="form-control" id="title3" name="title3" value={title3} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle3">Sub Title</label>
                    <input type="text" className="form-control" id="subTitle3" name="subTitle3" value={subTitle3} onChange={this.handleChange} placeholder="Enter the sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="number3">Number of items</label>
                    <input type="text" className="form-control" id="number3" name="number3" value={number3} onChange={this.handleChange} placeholder="Enter the Number of items text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink3">Action Link</label>
                    <input type="text" className="form-control" id="actionLink3" name="actionLink3" value={actionLink3} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshFashionBannerCollectionItemFour extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img4, alt4, title4, subTitle4, number4, actionLink4 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img4">Banner Image URL(Recommended image size 480x262)</label>
                    <input type="text" className="form-control" id="img4" name="img4" value={img4} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt4">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt4" name="alt4" value={alt4} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="title4">Title</label>
                    <input type="text" className="form-control" id="title4" name="title4" value={title4} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle4">Sub Title</label>
                    <input type="text" className="form-control" id="subTitle4" name="subTitle4" value={subTitle4} onChange={this.handleChange} placeholder="Enter the sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="number4">Number of items</label>
                    <input type="text" className="form-control" id="number4" name="number4" value={number4} onChange={this.handleChange} placeholder="Enter the Number of items text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink4">Action Link</label>
                    <input type="text" className="form-control" id="actionLink4" name="actionLink4" value={actionLink4} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshFashionBannerCollectionItemFive extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img5, alt5, title5, subTitle5, number5, actionLink5 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img5">Banner Image URL(Recommended image size 480x262)</label>
                    <input type="text" className="form-control" id="img5" name="img5" value={img5} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt5">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt5" name="alt5" value={alt5} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="title5">Title</label>
                    <input type="text" className="form-control" id="title5" name="title5" value={title5} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle5">Sub Title</label>
                    <input type="text" className="form-control" id="subTitle5" name="subTitle5" value={subTitle5} onChange={this.handleChange} placeholder="Enter the sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="number5">Number of items</label>
                    <input type="text" className="form-control" id="number5" name="number5" value={number5} onChange={this.handleChange} placeholder="Enter the Number of items text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink5">Action Link</label>
                    <input type="text" className="form-control" id="actionLink5" name="actionLink5" value={actionLink5} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshFashionBannerCollectionItemSix extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img6, alt6, title6, subTitle6, number6, actionLink6 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img6">Banner Image URL(Recommended image size 960x656)</label>
                    <input type="text" className="form-control" id="img6" name="img6" value={img6} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt6">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt6" name="alt6" value={alt6} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="title6">Title</label>
                    <input type="text" className="form-control" id="title6" name="title6" value={title6} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle6">Sub Title</label>
                    <input type="text" className="form-control" id="subTitle6" name="subTitle6" value={subTitle6} onChange={this.handleChange} placeholder="Enter the sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="number6">Number of items</label>
                    <input type="text" className="form-control" id="number6" name="number6" value={number6} onChange={this.handleChange} placeholder="Enter the Number of items text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink6">Action Link</label>
                    <input type="text" className="form-control" id="actionLink6" name="actionLink6" value={actionLink6} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshFashionBannerCollection extends BaseSectionConfig {
    defaultTitle = "Fresh Fashion Banner Collection";
    scopeName = "FreshFashionBannerCollection";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img1: "https://fresh-fashion-demo.mybigcommerce.com/product_images/uploaded_images/fs-bc1.jpg",
            alt1: "fs-bc1.jpg",
            title1: "",
            subTitle1: "NEW CLOTHES",
            number1: "(23 ITEMS)",
            actionLink1: "#",
            img2: "https://fresh-fashion-demo.mybigcommerce.com/product_images/uploaded_images/fs-bc2.jpg",
            alt2: "fs-bc2.jpg",
            title2: "",
            subTitle2: "SHOES",
            number2: "(12 ITEMS)",
            actionLink2: "#",
            img3: "https://fresh-fashion-demo.mybigcommerce.com/product_images/uploaded_images/fs-bc3.jpg",
            alt3: "fs-bc3.jpg",
            title3: "",
            subTitle3: "GLASSES",
            number3: "(7 ITEMS)",
            actionLink3: "#",
            img4: "https://fresh-fashion-demo.mybigcommerce.com/product_images/uploaded_images/fs-bc4.jpg",
            alt4: "fs-bc4.jpg",
            title4: "",
            subTitle4: "BAG",
            number4: "(6 ITEMS)",
            actionLink4: "#",
            img5: "https://fresh-fashion-demo.mybigcommerce.com/product_images/uploaded_images/fs-bc5.jpg",
            alt5: "fs-bc5.jpg",
            title5: "",
            subTitle5: "HAT",
            number5: "(9 ITEMS)",
            actionLink5: "#",
            img6: "https://fresh-fashion-demo.mybigcommerce.com/product_images/uploaded_images/fs-bc6.jpg",
            alt6: "fs-bc6.jpg",
            title6: "MID SEASON SALE",
            subTitle6: "WATCHES",
            number6: "(12 ITEMS)",
            actionLink6: "#"
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshFashionBannerCollection" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: 'Banner item 1',
                        element: <FreshFashionBannerCollectionItemOne onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 2',
                        element: <FreshFashionBannerCollectionItemTwo onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 3',
                        element: <FreshFashionBannerCollectionItemThree onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 4',
                        element: <FreshFashionBannerCollectionItemFour onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 5',
                        element: <FreshFashionBannerCollectionItemFive onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 6',
                        element: <FreshFashionBannerCollectionItemSix onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    }
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-fashion-banner-collection" data-template="fresh_fashion_banner_collection" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshFashionBannerCollection;
