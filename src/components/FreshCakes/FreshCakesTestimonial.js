import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';


class FreshCakesTestimonialFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { avatar, avatarAlt, name, position, content } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="avatar">Avatar Image URL</label>
                    <input type="text" className="form-control" id="avatar" name="avatar" value={avatar} onChange={this.handleChange} placeholder="Enter Ihe Avatar Image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="avatarAlt">Avatar Image ALT</label>
                    <input type="text" className="form-control" id="avatarAlt" name="avatarAlt" value={avatarAlt} onChange={this.handleChange} placeholder="Enter The Image Avatar ALT" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={this.handleChange} placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position</label>
                    <input type="text" className="form-control" id="position" name="position" value={position} onChange={this.handleChange} placeholder="Enter Position" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <input type="text" className="form-control" id="content" name="content" value={content} onChange={this.handleChange} placeholder="Enter The Content" />
                </div>
            </form>
        );
    }
}

class FreshCakesTestimonialFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { icon, iconAlt, heading, subHeading, background, backgroundAlt, items_count } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="icon">Icon image URL</label>
                    <input type="text" className="form-control" id="icon" name="icon" value={icon} onChange={this.handleChange} placeholder="Enter the background icon image URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="iconAlt">Icon alt</label>
                    <input type="text" className="form-control" id="iconAlt" name="iconAlt" value={iconAlt} onChange={this.handleChange} placeholder="Enter the icon image Alt" />
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
                    <label htmlFor="background">Background image URL</label>
                    <input type="text" className="form-control" id="background" name="background" value={background} onChange={this.handleChange} placeholder="Enter the background image url" />
                </div>
                <div className="form-group">
                    <label htmlFor="backgroundAlt">Background image Alt</label>
                    <input type="text" className="form-control" id="backgroundAlt" name="backgroundAlt" value={backgroundAlt} onChange={this.handleChange} placeholder="Enter the background image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of testimonial items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of testimonial items" />
                </div>
            </form>
        );
    }
}

class FreshCakesTestimonial extends BaseSectionConfig {
    defaultTitle = "Fresh Cakes Testimonial";
    scopeName = "FreshCakesTestimonial";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            icon: 'https://cdn11.bigcommerce.com/s-o2thz2aet8/product_images/uploaded_images/icon-cmt.png',
            iconAlt: 'icon-cmt.png',
            heading: 'We Love Out Clients',
            subHeading: 'Testimonial',
            background: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/bkg-cake.jpg',
            backgroundAlt: 'bkg-cake.jpg',
            items: [
                {
                    avatar: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/avatar-cake.png',
                    avatarAlt: 'avatar-cake.png',
                    name: 'Anna Belle',
                    position: 'Client',
                    content: 'Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam voluptatem quia voluptas porro quisquam est, qui dolorem ipsum quia dolor . '
                },
                {
                    avatar: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/avatar-cake.png',
                    avatarAlt: 'avatar-cake.png',
                    name: 'Anna Belle',
                    position: 'Client',
                    content: 'Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam voluptatem quia voluptas porro quisquam est, qui dolorem ipsum quia dolor . '
                },
                {
                    avatar: 'https://cdn11.bigcommerce.com/s-jcmjokp4ec/product_images/uploaded_images/avatar-cake.png',
                    avatarAlt: 'avatar-cake.png',
                    name: 'Anna Belle',
                    position: 'Client',
                    content: 'Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam voluptatem quia voluptas porro quisquam est, qui dolorem ipsum quia dolor . '
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshCakesTestimonial" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: "General",
                        element: <FreshCakesTestimonialFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Item ${index + 1}`,
                        element: <FreshCakesTestimonialFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-cakes-testimonial" data-template="fresh_cakes_testimonial" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshCakesTestimonial;
