import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="screen">
      <header>
        <section className="media-nav">
          <a href="#" className="active">
            Games
          </a>
          <a href="#">Media</a>
        </section>
        <section className="settings">
          <span className="icon">
            <i className="fa fa-search"></i>
          </span>
          <span className="icon">
            <i className="fa fa-cog"></i>
          </span>
          <span className="icon">
            <img 
              className="user"
              src="https://randomuser.me/api/portraits/women/44.jpg"
              />
          </span>
          <span className="time">8:06 PM</span>
        </section>
      </header>
      <div className="container">
        <section className="game-nav">
          <div className="game active">
            <i className="fa fa-location-arrow"></i>
          </div>
          <div className="game">
            <div
              className="img"
              style={{
                background: "url('https://i.redd.it/8pvdi0pne8a51.png')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                transform: "scale(1.5)",
              }}
            />
          </div>

          <div className="game">
            <div
              className="img"
              style={{
                background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427993cv11d.jpg;maxHeight=640;maxWidth=550')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                transform: "scale(1.5)",
              }}
            />
          </div>
          <div className="game">
            <div
              className="img"
              style={{
                background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426004_sd.jpg;maxHeight=640;maxWidth=550')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                transform: "scale(1.5)",
              }}
            />
          </div>
          <div className="game">
            <div
              className="img"
              style={{
                background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430152_sd.jpg')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                transform: "scale(1.5)",
              }}
            />
          </div>
          <div className="game">
            <div
              className="img"
              style={{
                background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6420/6420086cv11a.jpg;maxHeight=200;maxWidth=300')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                transform: "scale(1.5)",
              }}
            />
          </div>
          <div className="game">
            <div
              className="img"
              style={{
                background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6442/6442231_sd.jpg;maxHeight=640;maxWidth=550')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                transform: "scale(1.5)",
              }}
            />
          </div>
          <div className="game">
            <div
              className="img"
              style={{
                background: "url('https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6438/6438717_sd.jpg;maxHeight=640;maxWidth=550')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                transform: "scale(1.5)",
              }}
            />
          </div>
        </section>
        <section className="info">
          <span className="sub-title">
            Official News From Playstation | 12/5/2020
          </span>
          <h1>Ready For A PS5 Adventure?</h1>
          <p>
            ASTRO's PLAYROOM is pre-loaded and waiting for you! Explore the new capabilites of PS5 and feel the world...
          </p>
        </section>
        
      </div>
      <section id="video-trailers">
          <div className="trailer">
            <img
              className="image"
              src="https://i.ytimg.com/vi/ZM7HC4aQ57g/maxresdefault.jpg"
            />
            <div className="video-info">
              <div className="circle-player">
                <i className="fa fa-play"></i>
              </div>
              <span className="title">Grand Theft Auto 6</span>
            </div>
          </div>
          
          <div className="trailer">
            <img
              className="image"
              src="https://sm.ign.com/t/ign_za/video/d/dirt-5-pla/dirt-5-playstation-5-gameplay-and-next-gen-details-video_8g5a.1200.jpg"
            />
            <div className="video-info">
              <div className="circle-player">
                <i className="fa fa-play" aria-hidden="true"></i>
              </div>
              <span className="title">Dirt 5</span>
            </div>
          </div>

          <div className="trailer">
            <img
              className="image"
              src="https://www.playstationlifestyle.net/assets/uploads/2020/11/warframe-on-ps5.jpg"
            />
            <div className="video-info">
              <div className="circle-player">
                <i className="fa fa-play" aria-hidden="true"></i>
              </div>
              <span className="title">Warframe</span>
            </div>
          </div>

          <div className="trailer">
            <img
              className="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUsEzqnRlRfqzRgTvWNSI4axkhEMl5mtPd0g&usqp=CAU"
            />
            <div className="video-info">
              <div className="circle-player">
                <i className="fa fa-play" aria-hidden="true"></i>
              </div>
              <span className="title">Spider Man: Miles Morales</span>
            </div>
          </div>

          <div className="trailer">
            <img
              className="image"
              src="https://pbs.twimg.com/media/EkDb6p2WkAAQdYN.jpg"
            />
            <div className="video-info">
              <div className="circle-player">
                <i className="fa fa-play" aria-hidden="true"></i>
              </div>
              <span className="title">Godfall</span>
            </div>
          </div>

          <div className="trailer">
            <img
              className="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRrchRI8TlWMONswQuaxnjke18k2o2LwPXHA&usqp=CAU"
            />
            <div className="video-info">
              <div className="circle-player">
                <i className="fa fa-play" aria-hidden="true"></i>
              </div>
              <span className="title">God Of War</span>
            </div>
          </div>

          <div className="trailer">
            <img
              className="image"
              src="https://www.operationsports.com/wp-content/uploads/2020/10/NBA-2K21-Next-Gen-Damian-Lillard-scaled.jpg"
            />
            <div className="video-info">
              <div className="circle-player">
                <i className="fa fa-play" aria-hidden="true"></i>
              </div>
              <span className="title">NBA 2k21</span>
            </div>
          </div>

        </section>
    </div>
  )
}
