import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard from '../components/feature-card'
import Question1 from '../components/question1'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>CityCompeer</title>
        <meta property="og:title" content="CityCompeer" />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="heroContainer home-hero1">
          <div className="home-container1">
            <h1 className="home-hero-heading heading1">Explore Your City</h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span>
                    Discover the hidden gems of your city with our interactive
                    map
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
            <div className="home-btn-group">
              <button className="buttonFilled">Get Started</button>
              <button className="buttonFlat">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container2">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Discover, Share, Connect
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Experience the city like never before with our exclusive
                      features
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
            </div>
            <div className="home-container3">
              <FeatureCard
                Heading="Explore Places"
                SubHeading="Discover the best attractions, restaurants, and hidden gems in the city"
              ></FeatureCard>
              <FeatureCard
                Heading="Upload Posts &amp; Blogs"
                SubHeading="Share your experiences and recommendations with the community"
              ></FeatureCard>
              <FeatureCard
                Heading="Buy, Sell &amp; Rent"
                SubHeading="Find your perfect home or room, or list your property for others to discover"
              ></FeatureCard>
              <FeatureCard
                Heading="Connect with Newcomers"
                SubHeading="Meet and connect with people who are new to the city, and help them settle in"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
            Find Your Perfect Home
          </h1>
          <span className="home-banner-sub-heading bodySmall">
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
          <button className="buttonFilled">View Listings</button>
        </div>
      </div>
      <div className="home-faq">
        <div className="faqContainer">
          <div className="home-faq1">
            <div className="home-container4">
              <span className="overline">
                <span>FAQ</span>
                <br></br>
              </span>
              <h2 className="home-text48 heading2">Common questions</h2>
              <span className="home-text49 bodyLarge">
                <span>
                  Here are some of the most common questions that we get.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container5">
              <Question1
                Answer="You can use our interactive map feature to explore different places in the city. Simply click on the map markers to get more information about each location."
                Question="How can I explore places in the city?"
              ></Question1>
              <Question1
                Answer="Yes, you can easily upload posts and blogs about your favorite city places. Share your experiences, recommendations, and tips with other users."
                Question="Can I upload posts and blogs related to city places?"
              ></Question1>
              <Question1
                Answer="Our platform provides a marketplace where you can easily buy, sell, or rent rooms and homes in the city. Simply create an account, list your property, and connect with potential buyers or renters."
                Question="How can I buy, sell, or rent rooms and homes in the city?"
              ></Question1>
              <Question1
                Answer="Using our platform is completely free for users. There are no hidden fees or charges. However, certain premium features may require a subscription or additional payment."
                Question="Is there a fee for using the platform?"
              ></Question1>
              <Question1
                Answer="If you have any questions or need assistance, you can reach out to our customer support team through the contact form on our website. We strive to provide prompt and helpful support to all our users."
                Question="How can I contact customer support?"
              ></Question1>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
