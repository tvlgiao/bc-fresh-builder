import React from 'react';
import { SectionConfigLayout } from './utils';
import BaseSectionConfig from './BaseSectionConfig';

class FreshNovelsAuthorFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { title, subTitle, description, categories, avata, avataAlt, productID } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter The title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="subTitle">Sub title</label>
                    <input type="text" className="form-control" id="subTitle" name="subTitle" value={subTitle} onChange={this.handleChange} placeholder="Enter The sub title text" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" className="form-control" id="description" name="description" rows="4" onChange={this.handleChange} placeholder="Enter the description text">{description}</textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="categories">Categories</label>
                    <input type="text" className="form-control" id="categories" name="categories" value={categories} onChange={this.handleChange} placeholder="Enter the categories text" />
                </div>
                <div className="form-group">
                    <label htmlFor="avata">Avata image URL</label>
                    <input type="text" className="form-control" id="avata" name="avata" value={avata} onChange={this.handleChange} placeholder="Enter the avata image url" />
                </div>
                <div className="form-group">
                    <label htmlFor="avataAlt">Avata image Alt</label>
                    <input type="text" className="form-control" id="avataAlt" name="avataAlt" value={avataAlt} onChange={this.handleChange} placeholder="Enter the avata image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="productID">Product ID</label>
                    <input type="text" className="form-control" id="productID" name="productID" value={productID} onChange={this.handleChange} placeholder="Enter the product id" />
                </div>
            </form>
        );
    }
}

class FreshNovelsAuthor extends BaseSectionConfig {
    defaultTitle = "Fresh Novels Author";
    scopeName = "FreshNovelsAuthor";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            title: "Patrick Wiegand",
            subTitle: "NEW AUTHOR",
            description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have variations of passages of Lorem Ipsum available, but going to use a passage of Lorem Ipsum",
            categories: "STYLE ART, SRTCHITECTURE",
            avata: "/product_images/uploaded_images/no-author.jpg",
            avataAlt: "no-author.jpg",
            productID: "111"
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshNovelsAuthor" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshNovelsAuthorFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-novels-author" data-template="fresh_novels_author" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshNovelsAuthor;
