import React from 'react';
import { SectionConfigLayout } from '../../utils';
import BaseSectionConfig from '../../BaseSectionConfig';

class FreshSoundsVideoFormGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onFormGeneralChange(event.target.name, event.target.value);
    }

    render() {
        const { videoUrl, Banner, BannerAlt, iconPlay, iconPlayAlt } = this.props;
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="videoUrl">Video URL(video link)</label>
                    <input type="text" className="form-control" id="videoUrl" name="videoUrl" value={videoUrl} onChange={this.handleChange} placeholder="Enter The video link URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="Banner">Banner video URL(Recomment image size 1920x945)</label>
                    <input type="text" className="form-control" id="Banner" name="Banner" value={Banner} onChange={this.handleChange} placeholder="Banner video URL" />
                </div>
                <div className="form-group">
                    <label htmlFor="BannerAlt">Banner alt</label>
                    <input type="text" className="form-control" id="BannerAlt" name="BannerAlt" value={BannerAlt} onChange={this.handleChange} placeholder="Enter the banner Alt" />
                </div>
                <div className="form-group">
                    <label htmlFor="iconPlay">Icon play image URL</label>
                    <input type="text" className="form-control" id="iconPlay" name="iconPlay" value={iconPlay} onChange={this.handleChange} placeholder="Enter the icon play image url" />
                </div>
                <div className="form-group">
                    <label htmlFor="iconPlayAlt">Icon pay image Alt</label>
                    <input type="text" className="form-control" id="iconPlayAlt" name="iconPlayAlt" value={iconPlayAlt} onChange={this.handleChange} placeholder="Enter the icon play image Alt" />
                </div>
            </form>
        );
    }
}

class FreshSoundsVideo extends BaseSectionConfig {
    defaultTitle = "Fresh Sounds Video";
    scopeName = "FreshSoundsVideo";

    constructor(props) {
        super(props);

        this.state = this.getStateFromLocalStorage() || {
            videoUrl: "https://fresh-sounds-demo.mybigcommerce.com/content/demo-video.mp4",
            Banner: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-video-bg.jpg",
            BannerAlt: "so-video-bg.jpg",
            iconPlay: "https://fresh-sounds-demo.mybigcommerce.com/product_images/uploaded_images/so-icon-play.png",
            iconPlayAlt: "so-icon-play.png"
        };
    }

    render() {
        const data = Buffer.from(JSON.stringify(this.state)).toString('base64');
        return (
            <SectionConfigLayout elClass="FreshSoundsVideo" title={this.title} sectionKey={this.sectionKey}
                 panels={[
                    {
                        title: "General",
                        element: <FreshSoundsVideoFormGeneral onFormGeneralChange={this.onFormGeneralChange} {...this.state} heading={this.state.heading} />
                    }
                ]}


                code={`<div class="fresh-section fresh-section--sounds-video u-hiddenVisually" data-local-banner-position="fresh-sounds-video" data-template="fresh_sounds_video" data-params="${data}">DO NOT REMOVE THIS LINE</div>`}
            />
        );
    }
}

export default FreshSoundsVideo;
