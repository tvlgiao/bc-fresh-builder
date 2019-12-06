import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';

class FreshSoundsEasyShapeSystemFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count, backgroundImage, backgroundImageAlt, heading, subHeading, img, alt } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="backgroundImage">Background Image URL(Recommended image size 1920x1500)</label>
                    <input type="text" className="form-control" id="backgroundImage" name="backgroundImage" value={backgroundImage} onChange={this.handleChange} placeholder="Enter The Background Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="backgroundImageAlt">Background Image Alt</label>
                    <input type="text" className="form-control" id="backgroundImageAlt" name="backgroundImageAlt" value={backgroundImageAlt} onChange={this.handleChange} placeholder="Enter The Background Image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter The heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subHeading">Sub Heading</label>
                    <input type="text" className="form-control" id="subHeading" name="subHeading" value={subHeading} onChange={this.handleChange} placeholder="Enter The sub heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="img">Banner Image URL(Recommended image size 1170x683)</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of information blocks</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of information blocks" />
                </div>
            </form>
        );
    }
}

class FreshSoundsEasyShapeSystemFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { icon1, iconAlt1, title1, caption1, actionLink1, icon2, iconAlt2, title2, caption2, actionLink2 } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="icon1">Icon 1 image url(Recommended image size 50x50)</label>
                    <input type="text" className="form-control" id="icon1" name="icon1" value={icon1} onChange={this.handleChange} placeholder="Enter The image icon url" />
                </div>
                <div className="form-group">
                    <label htmlFor="iconAlt1">Icon 1 image alt</label>
                    <input type="text" className="form-control" id="iconAlt1" name="iconAlt1" value={iconAlt1} onChange={this.handleChange} placeholder="Enter The image icon alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="title1">Title 1</label>
                    <input type="text" className="form-control" id="title1" name="title1" value={title1} onChange={this.handleChange} placeholder="Enter The title" />
                </div>
                <div className="form-group">
                    <label htmlFor="caption1">Caption 1</label>
                    <input type="text" className="form-control" id="caption1" name="caption1" value={caption1} onChange={this.handleChange} placeholder="Enter The caption" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink1">Link 1</label>
                    <input type="text" className="form-control" id="actionLink1" name="actionLink1" value={actionLink1} onChange={this.handleChange} placeholder="Enter The action link" />
                </div>
                <div className="form-group">
                    <label htmlFor="icon2">Icon 2 image url(Recommended image size 50x50)</label>
                    <input type="text" className="form-control" id="icon2" name="icon2" value={icon2} onChange={this.handleChange} placeholder="Enter The image icon url" />
                </div>
                <div className="form-group">
                    <label htmlFor="iconAlt2">Icon 2 image alt</label>
                    <input type="text" className="form-control" id="iconAlt2" name="iconAlt2" value={iconAlt2} onChange={this.handleChange} placeholder="Enter The image icon alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="title2">Title 2</label>
                    <input type="text" className="form-control" id="title2" name="title2" value={title2} onChange={this.handleChange} placeholder="Enter The title" />
                </div>
                <div className="form-group">
                    <label htmlFor="caption2">Caption 2</label>
                    <input type="text" className="form-control" id="caption2" name="caption2" value={caption2} onChange={this.handleChange} placeholder="Enter The caption" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink2">Link 2</label>
                    <input type="text" className="form-control" id="actionLink2" name="actionLink2" value={actionLink2} onChange={this.handleChange} placeholder="Enter The action link" />
                </div>
            </form>
        );
    }
}

class FreshSoundsEasyShapeSystem extends BaseSectionConfig {
    defaultTitle = "Fresh Sounds Easy Shape System";
    scopeName = "FreshSoundsEasyShapeSystem";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            backgroundImage: "/product_images/uploaded_images/so-section-bg02.jpg",
            backgroundImageAlt: "so-section-bg02.jpg",
            heading: "System",
            subHeading: "Easy Shape",
            img: "/product_images/uploaded_images/bkg.png",
            alt: "bkg.png",
            items: [
                {
                    icon1: "/product_images/uploaded_images/so-hp-ico1.png",
                    iconAlt1: "so-hp-ico1.png",
                    title1: "RE - MOLDABLE",
                    caption1: "It is a long established fact that a reader will be distracted by the readable content.",
                    actionLink1: "#",
                    icon2: "",
                    iconAlt2: "",
                    title2: "",
                    caption2: "",
                    actionLink2: ""
                },
                {
                    icon1: "/product_images/uploaded_images/so-hp-ico2.png",
                    iconAlt1: "so-hp-ico2.png",
                    title1: "HEAT",
                    caption1: "Many desktop publishing packages and web page editors now use Lorem Ipsum as",
                    actionLink1: "#",
                    icon2: "/product_images/uploaded_images/so-hp-ico3.png",
                    iconAlt2: "so-hp-ico3.png",
                    title2: "SHAPE",
                    caption2: "Many desktop publishing packages and web page editors now use Lorem Ipsum as",
                    actionLink2: "#"
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshSoundsEasyShapeSystem" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshSoundsEasyShapeSystemFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length}/>
                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Information blocks ${index + 1}`,
                        element: <FreshSoundsEasyShapeSystemFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-sounds-easy-shape-system" data-template="fresh_sounds_easy_shape_system" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshSoundsEasyShapeSystem;
