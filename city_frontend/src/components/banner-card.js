import React from 'react'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
    return (
        <div className="banner-banner">
            <div className="bannerContainer banner-banner1">
                <h1 className="banner-banner-heading heading2">
                    {props.BannerHeading}
                </h1>
                <span className="banner-banner-sub-heading bodySmall">
                    <span>
                        <span>
                            <span>
                                Browse through a wide range of rooms and homes available for
                                rent or sale in your city. Whether you&apos;re a newcomer or a
                                local, we have the perfect place for you.
                            </span>
                            <span>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: ' ',
                                    }}
                                />
                            </span>
                        </span>
                        <span>
                            <span>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: ' ',
                                    }}
                                />
                            </span>
                            <span>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: ' ',
                                    }}
                                />
                            </span>
                        </span>
                    </span>
                    <span>
                        <span>
                            <span>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: ' ',
                                    }}
                                />
                            </span>
                            <span>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: ' ',
                                    }}
                                />
                            </span>
                        </span>
                        <span>
                            <span>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: ' ',
                                    }}
                                />
                            </span>
                            <span>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: ' ',
                                    }}
                                />
                            </span>
                        </span>
                    </span>
                </span>
                <button className="buttonFilled">{props.BannerButton}</button>
            </div>
        </div>
    )
}

Banner.defaultProps = {
    BannerHeading: 'Find Your Perfect Home',
    BannerButton: 'Learn More',
}

Banner.propTypes = {
    BannerHeading: PropTypes.string,
    BannerButton: PropTypes.string,
}

export default Banner

