import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';


class FreshToysProductsDealFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { productId, date } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="productId">Product ID</label>
                    <input type="text" className="form-control" id="productId" name="productId" value={productId} onChange={this.handleChange} placeholder="Enter The Product ID" />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input type="date" className="form-control" id="date" name="date" value={date} onChange={this.handleChange} placeholder="Enter the end of date" />
                </div>
            </form>
        );
    }
}

class FreshToysProductsDealFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count, heading} = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="heading">Heading</label>
                    <input type="text" className="form-control" id="heading" name="heading" value={heading} onChange={this.handleChange} placeholder="Enter the heading text" />
                </div>
                <div className="form-group">
                    <label htmlFor="items_count">Number of client items</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of client items" />
                </div>
            </form>
        );
    }
}

class FreshToysProductsDeal extends BaseSectionConfig {
    defaultTitle = "Fresh Toys Product Deal";
    scopeName = "FreshToysProductsDeal";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: '',
            items: [
                { 
                    productId: '107',
                    date: '2020-09-15'
                },
                { 
                    productId: '111',
                    date: '2020-10-15'
                }
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshToysProductsDeal" title={this.title} sectionKey={this.sectionKey}
                panels={[
                    {
                        title: "General",
                        element: <FreshToysProductsDealFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length} />,

                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Product Items ${index + 1}`,
                        element: <FreshToysProductsDealFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}

                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-toys-products-deal" data-template="fresh_toys_products_deal" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshToysProductsDeal;
