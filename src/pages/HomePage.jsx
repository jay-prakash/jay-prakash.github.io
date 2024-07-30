// import Rive from "@rive-app/react-canvas";
import corpconLogo from "../assets/corpcon-logo.png";
// import riveUrl from "../assets/rive/spiral.riv";

function HomePage() {
  return (
    <>
      {/* hero section */}
      <section className="hero is-fullheight-with-navbar hero-bg">
        <div className="hero-body has-text-centered">
          {/* <h1 className="title">CORPCON 2024</h1> */}
          <div className="container">
            {/* <div className="has-text-centered">
              <div className="rive-container">
                <Rive
                  src={riveUrl}
                  stateMachines="State Machine 1"
                  artboard="spirals 2"
                />
              </div>
              <div className="container has-text-centered">
                <img
                  src={corpconLogo}
                  alt=""
                  className="corpcon-main-logo"
                />
              </div>
            </div> */}

            <img src={corpconLogo} alt="" className="corpcon-main-logo" />
            <p className="title main-subtitle">TRANSFORMING TOMORROW</p>
            <br />
            <p className="subtitle is-4">The Annual Corporate Conference</p>
            <div className="">
              <br />
              {/* <p className="subtitle is-6-widescreen is-5-tablet is-4-mobile">
                Join industry leaders and innovators at Christ University for a
                day of insights, networking, and inspiration.
              </p> */}
              <br />
              <div className="columns is-multiline mt-6">
                {/* <div className="column"></div> */}
                <div className="column">
                  <div className="card glass-card">
                    <div className="card-content">
                      <div className="content title is-size-4-mobile is-size-6-tablet is-size-4-widescreen">
                        50+ Speakers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card glass-card">
                    <div className="card-content">
                      <div className="content title is-size-4-mobile is-size-6-tablet is-size-4-widescreen">
                        20+ Sessions
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card glass-card">
                    <div className="card-content">
                      <div className="content title is-size-4-mobile is-size-6-tablet is-size-4-widescreen">
                        Opportunities
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* speakers section */}
      <section className="section">
        <h2 className="title is-size-2 has-text-centered mb-6">Speakers</h2>
        <div className="columns is-multiline">
          <div className="column is-one-quarter-widescreen is-half-tablet">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/assets/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.{" "}
                  <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                </div>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter-widescreen is-half-tablet">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://i.gadgets360cdn.com/large/disney_plus_hotstar_logo_1583901149861.jpg"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/assets/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.{" "}
                  <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                </div>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter-widescreen is-half-tablet">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/assets/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.{" "}
                  <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                </div>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter-widescreen is-half-tablet">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://logowik.com/content/uploads/images/zerodha6662.jpg"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src="https://bulma.io/assets/images/placeholders/96x96.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                  </div>
                </div>

                <div className="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. <a>@bulmaio</a>.{" "}
                  <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  {/* <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* what is corpcon */}
      <section className="section">
        <div className="card">
          <h2 className="title is-size-2 has-text-centered mb-6">
            What is CorpCon?
          </h2>
          <div className="columns">
            <div className="column is-two-thirds">
              <p className="subtitle is-6">
                CORPCON is an annual corporate conference hosted by the
                Department of Computer Science at Christ University. It serves
                as an integrating platform for professionals and tech
                enthusiasts from diverse backgrounds to connect, collaborate,
                and explore emerging trends in the world of technology.
              </p>

              <p className="subtitle mt-5">CHRIST (Deemed to be University)</p>
              <p className="subtitle is-6 mt-2">
                CHRIST (Deemed to be University), Bangalore is a
                multi-disciplinary experience that offers students the
                opportunity to grow both professionally and personally. The
                university has a diverse student population, with students from
                all over India and the world. The faculty and staff are highly
                qualified, encouraging students to think critically and abide by
                the moto excellence and service.
              </p>
              <p className="subtitle mt-5">MSc CSA</p>
              <p className="subtitle is-6 mt-2">
                The MSc in Computer Science and Applications offered by CHRIST
                (Deemed to be University) is an excellent option for
                professionals working in the software industry or related
                fields. The program is designed to enhance their existing
                academic foundations with a comprehensive understanding of the
                use and application of information technology. Graduates of this
                program will be well-equipped to take on leadership roles in the
                software industry and make significant contributions to the
                development of innovative technology solutions.
              </p>
            </div>
            <div className="column">
              <figure className="image image is-4by3">
                <img src={corpconLogo} />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
