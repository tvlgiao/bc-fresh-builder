import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshNovelsBookFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { nob, bookName, bookLink } = this.props;
        return (
            <form>
            <div className="form-group">
                    <label htmlFor="nob">Numerical order book</label>
                    <input type="text" className="form-control" id="nob" name="nob" value={nob} onChange={this.handleChange} placeholder="Enter The numerical order book" />
                </div>
                <div className="form-group">
                    <label htmlFor="bookName">Book name</label>
                    <input type="text" className="form-control" id="bookName" name="bookName" value={bookName} onChange={this.handleChange} placeholder="Enter The book name" />
                </div>
                <div className="form-group">
                    <label htmlFor="bookLink">Book link</label>
                    <input type="text" className="form-control" id="bookLink" name="bookLink" value={bookLink} onChange={this.handleChange} placeholder="Enter The book link" />
                </div>
            </form>
        );
    }
}

class FreshNovelsBookFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count, title, subTitle, description, seriesText, seriesLink, authorText, authorLink, bookImage, bookImageAlt, priceText, actionText, actionLink } = this.props;
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
                    <textarea type="text" className="form-control" id="description" name="description" rows="4" onChange={this.handleChange} placeholder="Enter the description text" defaultValue={description} />
                </div>
                <div className="form-group">
                    <label htmlFor="seriesText">Series text</label>
                    <input type="text" className="form-control" id="seriesText" name="seriesText" value={seriesText} onChange={this.handleChange} placeholder="Enter the series text" />
                </div>
                <div className="form-group">
                    <label htmlFor="seriesLink">Series link</label>
                    <input type="text" className="form-control" id="seriesLink" name="seriesLink" value={seriesLink} onChange={this.handleChange} placeholder="Enter the series link" />
                </div>
                <div className="form-group">
                    <label htmlFor="authorText">Author name</label>
                    <input type="text" className="form-control" id="authorText" name="authorText" value={authorText} onChange={this.handleChange} placeholder="Enter the author name" />
                </div>
                <div className="form-group">
                    <label htmlFor="authorLink">Author link</label>
                    <input type="text" className="form-control" id="authorLink" name="authorLink" value={authorLink} onChange={this.handleChange} placeholder="Enter the author link" />
                </div>
                <div className="form-group">
                    <label htmlFor="bookImage">Book image URL</label>
                    <input type="text" className="form-control" id="bookImage" name="bookImage" value={bookImage} onChange={this.handleChange} placeholder="Enter the book image url" />
                </div>
                <div className="form-group">
                    <label htmlFor="bookImageAlt">Book image Alt</label>
                    <input type="text" className="form-control" id="bookImageAlt" name="bookImageAlt" value={bookImageAlt} onChange={this.handleChange} placeholder="Enter the book image alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="priceText">Price</label>
                    <input type="text" className="form-control" id="priceText" name="priceText" value={priceText} onChange={this.handleChange} placeholder="Enter the price text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionText">Action Text</label>
                    <input type="text" className="form-control" id="actionText" name="actionText" value={actionText} onChange={this.handleChange} placeholder="Enter the action text" />
                </div>
                <div className="form-group">
                    <label htmlFor="actionLink">Action Link</label>
                    <input type="text" className="form-control" id="actionLink" name="actionLink" value={actionLink} onChange={this.handleChange} placeholder="Enter the action link URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of book items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of book items" />
                </div>
            </form>
        );
    }
}

class FreshNovelsBook extends BaseSectionConfig {
    defaultTitle = "Fresh Novels Book";
    scopeName = "FreshNovelsBook";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            bookImage: "https://fresh-novels-demo.mybigcommerce.com/product_images/uploaded_images/no-p1.jpg",
            bookImageAlt: "no-p1.jpg",
            title: "The Innocent Ones",
            subTitle: "Discover your next <br>unputdownable thriller",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything ...",
            seriesText: "Dan Grant and Jayne Brett Series",
            seriesLink: "#",
            authorName: "Neil White",
            authorLink: "#",
            priceText:  "$2.99",
            actionText: "Learn more",
            actionLink: "#",
            items: [
                {
                    nob: "10",
                    bookName: "Mystery & Suspense, Thrillers",
                    bookLink: "#"
                },
                {
                    nob: "9",
                    bookName: "Fiction & Literature, Thrillers",
                    bookLink: "#"
                },
                {
                    nob: "13",
                    bookName: "Fiction & Literature",
                    bookLink: "#"
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="freshNovelsBook" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshNovelsBookFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length}/>
                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Book item ${index + 1}`,
                        element: <FreshNovelsBookFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-novels-book" data-template="fresh_novels_book" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshNovelsBook;
