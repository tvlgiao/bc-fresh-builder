import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshSweetsStepProcessFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { items_count, heading, subHeading} = this.props;
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
                    <label htmlFor="items_count">Number of steps</label>
                    <input type="number" min="0" max="100" className="form-control" id="items_count" name="items_count" value={items_count} onChange={this.handleChange} placeholder="Enter number of steps" />
                </div>
            </form>
        );
    }
}

class FreshSweetsStepProcessFormItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormItemChange(event.target.name, event.target.value);
    }

    render() {
        const { numberStep, title, caption } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="numberStep">Number of step</label>
                    <input type="text" className="form-control" id="numberStep" name="numberStep" value={numberStep} onChange={this.handleChange} placeholder="Enter The number of step" />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={this.handleChange} placeholder="Enter The title" />
                </div>
                <div className="form-group">
                    <label htmlFor="caption">Caption</label>
                    <input type="text" className="form-control" id="caption" name="caption" value={caption} onChange={this.handleChange} placeholder="Enter The caption" />
                </div>
            </form>
        );
    }
}

class FreshSweetsStepProcess extends BaseSectionConfig {
    defaultTitle = "Fresh Sweets Step Process";
    scopeName = "FreshSweetsStepProcess";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            heading: 'Solution in 3 Easy Steps',
            subHeading: 'Explain that your product, service or event can solve anything in 3 easy steps.',
            items: [
                {
                    numberStep: "01",
                    title: "Step 1",
                    caption: "Add short description of the Step 1, so your customers could feel how it's easy to get a solution with your qui ratione"
                },
                {
                    numberStep: "02",
                    title: "Step 2",
                    caption: "Add short description of the Step 1, so your customers could feel how it's easy to get a solution with your qui ratione"
                },
                {
                    numberStep: "03",
                    title: "Step 3",
                    caption: "Add short description of the Step 1, so your customers could feel how it's easy to get a solution with your qui ratione"
                },
            ]
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshSweetsStepProcess" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshSweetsStepProcessFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} items_count={this.state.items.length}/>
                    },
                    ...this.state.items.map((item, index) => ({
                        title: `Information blocks ${index + 1}`,
                        element: <FreshSweetsStepProcessFormItem onFormItemChange={this.onFormItemChange.bind(this, index)} {...item} />,
                    })),
                ]}


                code={`<div class="u-hiddenVisually" data-local-banner-position="fresh-sweets-step-process" data-template="Fresh_Sweets_Step_Process" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshSweetsStepProcess;
