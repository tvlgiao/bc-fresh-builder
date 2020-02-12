import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshCakesMostPopularFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { img, alt, title, subTitle, actionLink } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="img">Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter The Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Image ALT</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter The Image ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter the title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle">Sub Title</label>
                    <input type="text" className="form-control" id="subTitle" name="subTitle" value={subTitle} onChange={this.handleChange} placeholder="Enter the sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink">Action link</label>
                    <input type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}


class FreshCakesMostPopularFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { heading, subHeading, img, alt, items_count } = this.props;
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
                    <label htmlFor="img">Banner Left Image URL</label>
                    <input type="text" className="form-control" id="img" name="img" value={img} onChange={this.handleChange} placeholder="Enter The Banner Left Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="alt">Banner Left Image ALT</label>
                    <input type="text" className="form-control" id="alt" name="alt" value={alt} onChange={this.handleChange} placeholder="Enter The Banner Left Image ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of banner items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of banner items" />
                </div>
            </form>
        );
    }
}

class FreshCakesMostPopular extends BaseSectionConfig {
    defaultTitle = "Fresh Cakes Most Popular";
    scopeName = "FreshCakesMostPopular";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'Most Popular Cakes We Have!',
            subHeading: 'Cake Shop',
            img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/banner-popular.jpg',
            alt: 'banner-popular.jpg',
            items: [
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/banner-popular.jpg', 
                    alt: 'banner-popular.jpg', 
                    title: 'Finibus Bonorum et Malorum',
                    subTitle: 'Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa',
                    actionLink: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/banner-popular.jpg', 
                    alt: 'banner-popular.jpg', 
                    title: 'Finibus Bonorum et Malorum',
                    subTitle: 'Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa',
                    actionLink: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/banner-popular.jpg', 
                    alt: 'banner-popular.jpg', 
                    title: 'Finibus Bonorum et Malorum',
                    subTitle: 'Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa',
                    actionLink: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/banner-popular.jpg', 
                    alt: 'banner-popular.jpg', 
                    title: 'Finibus Bonorum et Malorum',
                    subTitle: 'Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa',
                    actionLink: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/banner-popular.jpg', 
                    alt: 'banner-popular.jpg', 
                    title: 'Finibus Bonorum et Malorum',
                    subTitle: 'Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa',
                    actionLink: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/banner-popular.jpg', 
                    alt: 'banner-popular.jpg', 
                    title: 'Finibus Bonorum et Malorum',
                    subTitle: 'Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa',
                    actionLink: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/banner-popular.jpg', 
                    alt: 'banner-popular.jpg', 
                    title: 'Finibus Bonorum et Malorum',
                    subTitle: 'Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa',
                    actionLink: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/banner-popular.jpg', 
                    alt: 'banner-popular.jpg', 
                    title: 'Finibus Bonorum et Malorum',
                    subTitle: 'Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa',
                    actionLink: '#'
                },
                { 
                    img: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/banner-popular.jpg', 
                    alt: 'banner-popular.jpg', 
                    title: 'Finibus Bonorum et Malorum',
                    subTitle: 'Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa',
                    actionLink: '#'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshCakesMostPopular" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshCakesMostPopularFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Banner item ${index + 1}`,
                        element: <FreshCakesMostPopularFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-cakes-most-popular" data-template="fresh_cakes_most_popular" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshCakesMostPopular;
