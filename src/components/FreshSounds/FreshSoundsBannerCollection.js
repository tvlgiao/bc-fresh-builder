import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshSoundsBannerCollectionItemOne extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img1, alt1, title1, subTitle1, description1, actionLink1 } = this.props;
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
                    <label htmlFor="title1">Title</label>
                    <input type="text" className="form-control" id="title1" name="title1" value={title1} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle1">Sub Title</label>
                    <input type="text" className="form-control" id="subTitle1" name="subTitle1" value={subTitle1} onChange={this.handleChange} placeholder="Enter the sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="description1">Description</label>
                    <textarea type="text" className="form-control" id="description1" name="description1" rows="4" onChange={this.handleChange} placeholder="Enter the description text" defaultValue={description1} />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink1">Action Link</label>
                    <input type="text" className="form-control" id="actionLink1" name="actionLink1" value={actionLink1} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshSoundsBannerCollectionItemTwo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img2, alt2, title2, subTitle2, description2, actionLink2 } = this.props;
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
                    <label htmlFor="title2">Title</label>
                    <input type="text" className="form-control" id="title2" name="title2" value={title2} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle2">Sub Title</label>
                    <input type="text" className="form-control" id="subTitle2" name="subTitle2" value={subTitle2} onChange={this.handleChange} placeholder="Enter the sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="description2">Description</label>
                    <textarea type="text" className="form-control" id="description2" name="description2" rows="4" onChange={this.handleChange} placeholder="Enter the description text" defaultValue={description2} />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink2">Action Link</label>
                    <input type="text" className="form-control" id="actionLink2" name="actionLink2" value={actionLink2} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshSoundsBannerCollectionItemThree extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img3, alt3, title3, subTitle3, description3, actionLink3 } = this.props;
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
                    <label htmlFor="title3">Title</label>
                    <input type="text" className="form-control" id="title3" name="title3" value={title3} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle3">Sub Title</label>
                    <input type="text" className="form-control" id="subTitle3" name="subTitle3" value={subTitle3} onChange={this.handleChange} placeholder="Enter the sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="description3">Description</label>
                    <textarea type="text" className="form-control" id="description3" name="description3" rows="4" onChange={this.handleChange} placeholder="Enter the description text" defaultValue={description3} />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink3">Action Link</label>
                    <input type="text" className="form-control" id="actionLink3" name="actionLink3" value={actionLink3} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshSoundsBannerCollectionItemFour extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img4, alt4, title4, subTitle4, description4, actionLink4 } = this.props;
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
                    <label htmlFor="title4">Title</label>
                    <input type="text" className="form-control" id="title4" name="title4" value={title4} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle4">Sub Title</label>
                    <input type="text" className="form-control" id="subTitle4" name="subTitle4" value={subTitle4} onChange={this.handleChange} placeholder="Enter the sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="description4">Description</label>
                    <textarea type="text" className="form-control" id="description4" name="description4" rows="4" onChange={this.handleChange} placeholder="Enter the description text" defaultValue={description4} />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink4">Action Link</label>
                    <input type="text" className="form-control" id="actionLink4" name="actionLink4" value={actionLink4} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshSoundsBannerCollectionItemFive extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { img5, alt5, title5, subTitle5, description5, actionLink5 } = this.props;
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
                    <label htmlFor="title5">Title</label>
                    <input type="text" className="form-control" id="title5" name="title5" value={title5} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle5">Sub Title</label>
                    <input type="text" className="form-control" id="subTitle5" name="subTitle5" value={subTitle5} onChange={this.handleChange} placeholder="Enter the sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="description5">Description</label>
                    <textarea type="text" className="form-control" id="description5" name="description5" rows="5" onChange={this.handleChange} placeholder="Enter the description text" defaultValue={description5} />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink5">Action Link</label>
                    <input type="text" className="form-control" id="actionLink5" name="actionLink5" value={actionLink5} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshSoundsBannerCollection extends BaseSectionConfig {
    defaultTitle = "Fresh Sounds Banner Collection";
    scopeName = "FreshSoundsBannerCollection";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            img1: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-b1.jpg",
            alt1: "so-b1.jpg",
            title1: "TRAVEL",
            subTitle1: "",
            description1: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
            actionLink1: "#",
            img2: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-b2.jpg",
            alt2: "so-b2.jpg",
            title2: "SPORTS & FITNESS",
            subTitle2: "",
            description2: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
            actionLink2: "#",
            img3: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-b3.jpg",
            alt3: "so-b3.jpg",
            title3: "MUSIC",
            subTitle3: "",
            description3: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
            actionLink3: "#",
            img4: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-b4.jpg",
            alt4: "so-b4.jpg",
            title4: "SHOOTING SPORTS",
            subTitle4: "",
            description4: "",
            actionLink4: "#",
            img5: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-b5.jpg",
            alt5: "so-b5.jpg",
            title5: "CONSTRUCTION",
            subTitle5: "Manufacturing &",
            description5: "",
            actionLink5: "#"
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshSoundsBannerCollection" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: 'Banner item 1',
                        element: <FreshSoundsBannerCollectionItemOne onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 2',
                        element: <FreshSoundsBannerCollectionItemTwo onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 3',
                        element: <FreshSoundsBannerCollectionItemThree onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 4',
                        element: <FreshSoundsBannerCollectionItemFour onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Banner item 5',
                        element: <FreshSoundsBannerCollectionItemFive onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    }
                ]}

                code={`<div class="fresh-section fresh-section--sounds-banner-collection u-hiddenVisually" data-local-banner-position="fresh-sounds-banner-collection" data-template="fresh_sounds_banner_collection" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshSoundsBannerCollection;
