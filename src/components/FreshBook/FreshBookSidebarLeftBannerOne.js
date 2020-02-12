import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshBookSidebarLeftBannerOneFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { avata, avataAlt, position, name, actionText, actionLink } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="avata">Avata image URL</label>
                    <input type="text" className="form-control" id="avata" name="avata" value={avata} onChange={this.handleChange} placeholder="Enter the avata image url" />
                </div>
                <div className="form-group">
                    <label htmlFor="avataAlt">Avata image Alt</label>
                    <input type="text" className="form-control" id="avataAlt" name="avataAlt" value={avataAlt} onChange={this.handleChange} placeholder="Enter the avata image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="position">Position</label>
                    <input type="text" className="form-control" id="position" name="position" value={position} onChange={this.handleChange} placeholder="Enter Position" />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={this.handleChange} placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionText">Action Text</label>
                    <input type="text" className="form-control" id="actionText" name="actionText" value={actionText} onChange={this.handleChange} placeholder="Enter the action text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink">Action Link</label>
                    <input type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
            </form>
        );
    }
}

class FreshBookSidebarLeftBannerOne extends BaseSectionConfig {
    defaultTitle = "Fresh Book Sidebar Left Banner One";
    scopeName = "FreshBookSidebarLeftBannerOne";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            avata: 'https://cdn11.bigcommerce.com/s-d7pvcwryxv/product_images/uploaded_images/new-author.jpg',
            avataAlt: 'new-author.jpg',
            position: 'NEW AUTHOR',
            name: 'Patrick Wiegand',
            actionText: 'Read More',
            actionLink: '#'
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshBookSidebarLeftBannerOne" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshBookSidebarLeftBannerOneFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-book-sidebar-left-banner-one" data-template="fresh_book_sidebar_left_banner_one" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshBookSidebarLeftBannerOne;
