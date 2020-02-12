import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshCakesAboutTheProductFormLeft extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { imgl, altl, contentl  } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="imgl">Image URL</label>
                    <input type="text" className="form-control" id="imgl" name="imgl" value={imgl} onChange={this.handleChange} placeholder="Enter The Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="altl">Image ALT</label>
                    <input type="text" className="form-control" id="altl" name="altl" value={altl} onChange={this.handleChange} placeholder="Enter The Image ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="contentl">Content</label>
                    <input type="text" className="form-control" id="contentl" name="contentl" value={contentl} onChange={this.handleChange} placeholder="Enter the content text" />
                </div>
            </form>
        );
    }
}

class FreshCakesAboutTheProductFormRight extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { imgr, altr, contentr  } = this.props;
        return (
            <form>
            <div className="form-group">
                    <label htmlFor="contentr">Content</label>
                    <input type="text" className="form-control" id="contentr" name="contentr" value={contentr} onChange={this.handleChange} placeholder="Enter the content text" />
                </div>
                <div className="form-group">
                    <label htmlFor="imgr">Image URL</label>
                    <input type="text" className="form-control" id="imgr" name="imgr" value={imgr} onChange={this.handleChange} placeholder="Enter The Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="altr">Image ALT</label>
                    <input type="text" className="form-control" id="altr" name="altr" value={altr} onChange={this.handleChange} placeholder="Enter The Image ALT" />
                </div>
            </form>
        );
    }
}

class FreshCakesAboutTheProductFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, actionLink  } = this.props;
        return (
            <form>
            <div className="form-group">
                    <label htmlFor="img">Banner Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter the banner image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Banner Image alt</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter the banner image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink">Action Link</label>
                    <input type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}


class FreshCakesAboutTheProductFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { heading, subHeading, background, backgroundAlt, items_count } = this.props;
        return (
            <form>
            <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter The heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subHeading">Sub Heading</label>
                    <input type="text" className="form-control" id="subHeading" name="subHeading" value={subHeading} onChange={this.handleChange} placeholder="Enter The sub heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="background">Background image URL</label>
                    <input type="text" className="form-control" id="background" name="background" value={background} onChange={this.handleChange} placeholder="Enter the background image url" />
                </div>
                <div className="form-group">
                    <label htmlFor="backgroundAlt">Background image Alt</label>
                    <input type="text" className="form-control" id="backgroundAlt" name="backgroundAlt" value={backgroundAlt} onChange={this.handleChange} placeholder="Enter the background image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of banner items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of banner items" />
                </div>
            </form>
        );
    }
}

class FreshCakesAboutTheProduct extends BaseSectionConfig {
    defaultTitle = "Fresh Cakes About The Product";
    scopeName = "FreshCakesAboutTheProduct";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            imgl: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-video.jpg',
            altl: 'img-video.jpg',
            contentl: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  aliquip</p>`,
            imgr: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-about2.png',
            altr: 'img-about2.png',
            contentr: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  aliquip</p>`,
            heading: 'About The Product',
            subHeading: 'Cake Shop',
            background: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/bkg-about.png',
            backgroundAlt: 'bkg-about.png',
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-about.jpg', 
                    alt: 'img-about.jpg', 
                    actionLink: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-about.jpg', 
                    alt: 'img-about.jpg', 
                    actionLink: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/img-about.jpg', 
                    alt: 'img-about.jpg', 
                    actionLink: '#'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshCakesAboutTheProduct" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: 'Column Left',
                        element: <FreshCakesAboutTheProductFormLeft onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: 'Column Right',
                        element: <FreshCakesAboutTheProductFormRight onFormGeneralChange={this.onFormGeneralChange} {...this.state} />,
                    },
                    {
                        title: "General",
                        element: <FreshCakesAboutTheProductFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Banner item ${index + 1}`,
                        element: <FreshCakesAboutTheProductFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-cakes-about-the-product" data-template="fresh_cakes_about_the_product" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshCakesAboutTheProduct;
