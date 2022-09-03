import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Img50ty, ImgLogo, ImgQuaKhung, ImgQuaVip, ImgRinging, ImgSHT50, ImgSieuLiXi, ImgSKM, ImgSTTV, ImgTele, ImgThuongKhiThang } from "../../styles/@img";
import SwiperCore,{ EffectFade, Autoplay } from 'swiper';

import "swiper/css";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";

SwiperCore.use([Autoplay]);

function Home() {

  const [chromeWidth, setChromeWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setChromeWidth(window.innerWidth);
    });
  }, [typeof window !== "undefined" && window]);
      
  return (
    <div className="links-container">
      <div className="logo">
        <Image width={323} height={88} src={ImgLogo} alt="Alternate Text" />
      </div>

      <div class="col-lg-12 p-lg-0 m-lg-auto box-noti">
        <div className="notification">
          <div class="icon-noti">
            <Image src={ImgRinging} />
          </div>
          <div>
            <marquee>
              Siêu khuyến mãi khủng chào mừng sự kiện{" "}
              <span className="searchText"> Jun88.com </span> trở thành đối tác
              hợp tác chính thức FIFA Word Cup QATAR 2022
            </marquee>
          </div>
        </div>
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div className="box-promos">
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                  <Swiper
                  direction={"vertical"}
                  // modules={[EffectFade]}
                  effect="coverflow"
                  // slidesPerView={2}s
                  centeredSlides
                  autoplay={true}
                  >
                    <SwiperSlide>
                      <a href="https://www.jun82.com/promotions/39153765-76eb-4bef-8b0c-6a7bebb936cd" target="_blank">
                      <Image src={ImgQuaKhung} alt="Alternate Text"/>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="https://www.jun82.com/promotions/66054bae-ddf4-406b-86fe-2eab5c98fabe" target="_blank">
                      <Image src={ImgThuongKhiThang} alt="Alternate Text"/>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="https://www.jun82.com/promotions/10329565-5c62-48f0-a4c2-8b2479bd5c18" target="_blank">
                      <Image src={ImgSieuLiXi} alt="Alternate Text"/>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="https://www.jun82.com/promotions" target="_blank">
                      <Image src={ImgQuaVip} alt="Alternate Text"/>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="https://www.jun82.com/promotions" target="_blank">
                      <Image src={Img50ty} alt="Alternate Text"/>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="https://www.jun82.com/promotions" target="_blank">
                      <Image src={ImgSHT50} alt="Alternate Text"/>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="https://www.jun82.com/promotions" target="_blank">
                      <Image src={ImgSTTV} alt="Alternate Text"/>
                      </a>
                    </SwiperSlide>
                    <SwiperSlide>
                      <a href="https://www.jun82.com/promotions" target="_blank">
                      <Image src={ImgSKM} alt="Alternate Text"
                      />
                      </a>
                    </SwiperSlide>
                  </Swiper>
                  </div>
                </div>
              </div>
            </div>
            {chromeWidth > 1220 ?<div class="col">
              <div className="domains-list">
                <div className="link" link="https://www.jun8811.com">
                  <div className="col-8 p-0 float-left">
                    <div className="link-number">
                      <div className="yellow-circle">
                        <div className="black-circle">
                          <p className="test-p">1</p>
                        </div>
                      </div>
                    </div>
                    <div className="float-left ml-2 link-info">
                      <h5 className="d-inline text-white">100</h5>
                      <span className="text-white">ms</span>
                      <h5 className="d-inline text-white ml-3">
                        Link truy cập 1
                      </h5>
                    </div>
                  </div>
                  <div className="col-4 p-0 float-left text-right pr-2">
                    <a href="https://www.jun8811.com" id="btn-1" className="btn button" >
                      <span>Truy cập</span>
                    </a>
                  </div>
                  <div className="clear-both"></div>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="domains-list">
                <div className="link" link="https://www.jun8822.com/">
                  <div className="col-8 p-0 float-left">
                    <div className="link-number">
                      <div className="yellow-circle">
                        <div className="black-circle">
                          <p className="test-p">2</p>
                        </div>
                      </div>
                    </div>
                    <div className="float-left ml-2 link-info">
                      <h5 className="d-inline text-white">200</h5>
                      <span className="text-white">ms</span>
                      <h5 className="d-inline text-white ml-3">
                        Link truy cập 2 
                      </h5>
                    </div>
                  </div>
                  <div className="col-4 p-0 float-left text-right pr-2">
                    <a href="https://www.jun8822.com/" id="btn-1" className="btn button" >
                      <span>Truy cập</span>
                    </a>
                  </div>
                  <div className="clear-both"></div>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="domains-list">
                <div className="link" link="https://www.jun8833.com/">
                  <div className="col-8 p-0 float-left">
                    <div className="link-number">
                      <div className="yellow-circle">
                        <div className="black-circle">
                          <p className="test-p">3</p>
                        </div>
                      </div>
                    </div>
                    <div className="float-left ml-2 link-info">
                      <h5 className="d-inline text-white">300</h5>
                      <span className="text-white">ms</span>
                      <h5 className="d-inline text-white ml-3">
                        Link truy cập 3
                      </h5>
                    </div>
                  </div>
                  <div className="col-4 p-0 float-left text-right pr-2">
                    <a href="https://www.jun8833.com/" id="btn-1" className="btn button" >
                      <span>Truy cập</span>
                    </a>
                  </div>
                  <div className="clear-both"></div>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="domains-list">
                <div className="link" link="https://www.jun8844.com/">
                  <div className="col-8 p-0 float-left">
                    <div className="link-number">
                      <div className="yellow-circle">
                        <div className="black-circle">
                          <p className="test-p">4</p>
                        </div>
                      </div>
                    </div>
                    <div className="float-left ml-2 link-info">
                      <h5 className="d-inline text-white">400</h5>
                      <span className="text-white">ms</span>
                      <h5 className="d-inline text-white ml-3">
                        Link truy cập 4
                      </h5>
                    </div>
                  </div>
                  <div className="col-4 p-0 float-left text-right pr-2">
                    <a href="https://www.jun8844.com/" id="btn-1" className="btn button" >
                      <span>Truy cập</span>
                    </a>
                  </div>
                  <div className="clear-both"></div>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="domains-list">
                <div className="link" link="https://www.jun8855.com/">
                  <div className="col-8 p-0 float-left">
                    <div className="link-number">
                      <div className="yellow-circle">
                        <div className="black-circle">
                          <p className="test-p">5</p>
                        </div>
                      </div>
                    </div>
                    <div className="float-left ml-2 link-info">
                      <h5 className="d-inline text-white">500</h5>
                      <span className="text-white">ms</span>
                      <h5 className="d-inline text-white ml-3">
                        Link truy cập 5
                      </h5>
                    </div>
                  </div>
                  <div className="col-4 p-0 float-left text-right pr-2">
                    <a href="https://www.jun8855.com/" id="btn-1" className="btn button" >
                      <span>Truy cập</span>
                    </a>
                  </div>
                  <div className="clear-both"></div>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="domains-list">
                <div className="link" link="https://www.jun8866.com/">
                  <div className="col-8 p-0 float-left">
                    <div className="link-number">
                      <div className="yellow-circle">
                        <div className="black-circle">
                          <p className="test-p">6</p>
                        </div>
                      </div>
                    </div>
                    <div className="float-left ml-2 link-info">
                      <h5 className="d-inline text-white">600</h5>
                      <span className="text-white">ms</span>
                      <h5 className="d-inline text-white ml-3">
                        Link truy cập 6
                      </h5>
                    </div>
                  </div>
                  <div className="col-4 p-0 float-left text-right pr-2">
                    <a href="https://www.jun8866.com/" id="btn-1" className="btn button" >
                      <span>Truy cập</span>
                    </a>
                  </div>
                  <div className="clear-both"></div>
                </div>
                <div className="clear-both"></div>
              </div>
            </div>:''}
          </div>
         {chromeWidth < 1220?
          <div class="row">
          <div class="col">
            <div className="domains-list">
              <div className="link" link="https://www.jun8811.com">
                <div className="col-8 p-0 float-left">
                  <div className="link-number">
                    <div className="yellow-circle">
                      <div className="black-circle">
                        <p className="test-p">1</p>
                      </div>
                    </div>
                  </div>
                  <div className="float-left ml-2 link-info">
                    <h5 className="d-inline text-white">100</h5>
                    <span className="text-white">ms</span>
                    <h5 className="d-inline text-white ml-3">
                      Link truy cập 1
                    </h5>
                  </div>
                </div>
                <div className="col-4 p-0 float-left text-right pr-2">
                  <a href="https://www.jun8811.com" id="btn-1" className="btn button" >
                    <span>Truy cập</span>
                  </a>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="clear-both"></div>
            </div>
            <div className="domains-list">
              <div className="link" link="https://www.jun8822.com/">
                <div className="col-8 p-0 float-left">
                  <div className="link-number">
                    <div className="yellow-circle">
                      <div className="black-circle">
                        <p className="test-p">2</p>
                      </div>
                    </div>
                  </div>
                  <div className="float-left ml-2 link-info">
                    <h5 className="d-inline text-white">200</h5>
                    <span className="text-white">ms</span>
                    <h5 className="d-inline text-white ml-3">
                      Link truy cập 2 
                    </h5>
                  </div>
                </div>
                <div className="col-4 p-0 float-left text-right pr-2">
                  <a href="https://www.jun8822.com/" id="btn-1" className="btn button" >
                    <span>Truy cập</span>
                  </a>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="clear-both"></div>
            </div>
            <div className="domains-list">
              <div className="link" link="https://www.jun8833.com/">
                <div className="col-8 p-0 float-left">
                  <div className="link-number">
                    <div className="yellow-circle">
                      <div className="black-circle">
                        <p className="test-p">3</p>
                      </div>
                    </div>
                  </div>
                  <div className="float-left ml-2 link-info">
                    <h5 className="d-inline text-white">300</h5>
                    <span className="text-white">ms</span>
                    <h5 className="d-inline text-white ml-3">
                      Link truy cập 3
                    </h5>
                  </div>
                </div>
                <div className="col-4 p-0 float-left text-right pr-2">
                  <a href="https://www.jun8833.com/" id="btn-1" className="btn button" >
                    <span>Truy cập</span>
                  </a>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="clear-both"></div>
            </div>
            <div className="domains-list">
              <div className="link" link="https://www.jun8844.com/">
                <div className="col-8 p-0 float-left">
                  <div className="link-number">
                    <div className="yellow-circle">
                      <div className="black-circle">
                        <p className="test-p">4</p>
                      </div>
                    </div>
                  </div>
                  <div className="float-left ml-2 link-info">
                    <h5 className="d-inline text-white">400</h5>
                    <span className="text-white">ms</span>
                    <h5 className="d-inline text-white ml-3">
                      Link truy cập 4
                    </h5>
                  </div>
                </div>
                <div className="col-4 p-0 float-left text-right pr-2">
                  <a href="https://www.jun8844.com/" id="btn-1" className="btn button" >
                    <span>Truy cập</span>
                  </a>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="clear-both"></div>
            </div>
            <div className="domains-list">
              <div className="link" link="https://www.jun8855.com/">
                <div className="col-8 p-0 float-left">
                  <div className="link-number">
                    <div className="yellow-circle">
                      <div className="black-circle">
                        <p className="test-p">5</p>
                      </div>
                    </div>
                  </div>
                  <div className="float-left ml-2 link-info">
                    <h5 className="d-inline text-white">500</h5>
                    <span className="text-white">ms</span>
                    <h5 className="d-inline text-white ml-3">
                      Link truy cập 5
                    </h5>
                  </div>
                </div>
                <div className="col-4 p-0 float-left text-right pr-2">
                  <a href="https://www.jun8855.com/" id="btn-1" className="btn button" >
                    <span>Truy cập</span>
                  </a>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="clear-both"></div>
            </div>
            <div className="domains-list">
              <div className="link" link="https://www.jun8866.com/">
                <div className="col-8 p-0 float-left">
                  <div className="link-number">
                    <div className="yellow-circle">
                      <div className="black-circle">
                        <p className="test-p">6</p>
                      </div>
                    </div>
                  </div>
                  <div className="float-left ml-2 link-info">
                    <h5 className="d-inline text-white">600</h5>
                    <span className="text-white">ms</span>
                    <h5 className="d-inline text-white ml-3">
                      Link truy cập 6
                    </h5>
                  </div>
                </div>
                <div className="col-4 p-0 float-left text-right pr-2">
                  <a href="https://www.jun8866.com/" id="btn-1" className="btn button" >
                    <span>Truy cập</span>
                  </a>
                </div>
                <div className="clear-both"></div>
              </div>
              <div className="clear-both"></div>
            </div>
          </div>
        </div>:''
         } 
        </div>
    
        <div className="menu-container">
          <div className="menu">
            <div className="menu-bg" >
              <img src="https://jun88.vin/images/icons/menu-bg.png" alt="Alternate Text" />
            </div>
            <div className="btn-bg" id="android">
              <div className="item-menu">
                <a href="https://jun47.com/" target="_blank" className="icon" icon-name="android">
                  <img className="icon" src="https://jun88.vin/images/icons/android-icon.png" alt="android-icon" />
                </a>
                <p>
                  <a href="https://jun47.com/" target="_blank">
                    ANDROID
                  </a>
                </p>
              </div>
            </div>
            <div class="btn-bg" id="agent">
            <div className="item-menu">
              <a href="https://jun.bet/" target="_blank" className="icon" icon-name="agent">
                <img className="icon" src="https://jun88.vin/images/icons/agent-icon.png" alt="agent-icon"/>
              </a>
              <p>
                <a href="https://jun.bet/" target="_blank"> ĐẠI LÝ </a>
              </p>
            </div>
            </div>
            <div class="btn-bg" id="customer-service">
              <div className="item-menu">
                <a href="https://jun88.gofiber.dev/tawkto" target="_blank" className="icon" icon-name="customerService">
                  <img className="icon" src="https://jun88.vin/images/icons/customer-service-icon.png" alt="customer-service-icon"/>
                </a>
                <p>
                  <a href="https://jun88.gofiber.dev/tawkto" target="_blank">
                    CSKH
                  </a>
                </p>
              </div>
            </div>
            <div class="btn-bg" id="gift">
              <div className="item-menu">
                <a href="https://www.jun85.com/promotions" target="_blank" className="icon" icon-name="gift" >
                    <img className="icon" src="https://jun88.vin/images/icons/gift-icon.png" alt="gift-icon"/>
                  </a>
                  <p>
                    <a href="https://www.jun85.com/promotions" target="_blank">
                      KHUYẾN MÃI
                    </a>
                  </p>
              </div>
            </div>
            <div class="btn-bg" id="ios">
              <div className="item-menu">
                <a href="https://jun47.com/" target="_blank" className="icon" icon-name="ios">
                  <img className="icon" src="	https://jun88.vin/images/icons/ios-icon.png" alt="ios-icon" />
                </a>
                <p>
                  <a href="https://jun47.com/" target="_blank">
                    IOS
                  </a>
                </p>
              </div>
            </div>
            <div id="btn-home">
              <div id="btn-home-items">
                <div id="home-icon">
                  <a href="https://www.jun82.com/" target="_blank">
                    <img src="https://jun88.vin/images/icons/home-icon.png" alt="android-icon" />
                  </a>
                </div>
                <div id="home-text">
                  <a href="https://www.jun82.com/" target="_blank">
                    TRANG CHỦ
                  </a>
                </div>
                <div className="clear-both"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
      <div id="cskh-icon">
        <a href="https://t.me/+w2UhveqvYOUwYWM1">
            <Image src={ImgTele} alt="cskh-icon" />
        </a>
      </div>
      <style>{`
            .links-container {
              width: 70%;
              margin: 0 auto;
              text-align: center;
            }

            .logo {
              padding-top: 30px;
              padding-bottom: 20px;
            }

            .notification {
              border: 1px solid #02a9dc;
              border-radius: 25px;
              font-size: 20px;
              box-shadow: 0 0 2px #02a9dc, 0 0 2px #02a9dc inset;
              height: 42px;
              display: flex;
              align-items: center;
              margin: 0 auto;
            }

            .icon-noti {
              padding-right: 10px;
              padding-left: 10px;
              width: 40px;
            }

            .searchText{
              color: #02a9dc;
            }

            .box-promos {
              padding: 10px 0;
              width: 100%;
              height: 430px;
            }

            .swiper-container {
              margin: 0 auto;
              width: 100%;
              height: 100%;
              overflow: hidden;
            }


            .float-lg-left {
            float: left!important;
            }

          .domains-list{
            .width: 100%;
          }

          .link{
            height: 60px;
            background-color: #124da5da;
            border: 1px solid rgba(255, 255, 255, 0.25);
            padding: 4px;
            border-radius: 42px;
            margin-top: 10px
          }

          .p-0 {
            padding: 0!important;
          }

          .float-left {
            float: left!important;
          }

          .col-8 {
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
        }

         .link-number {
          float: left;
          }

        .yellow-circle {
          background: linear-gradient(to bottom, #cdf0ff 0%, #62a8c6 47%, #cee8ff 100%);
          position: relative;
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        .black-circle {
          background-color: #0e5f81;
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          top: 5px;
          left: 5px;
          text-align: center;
          }

          .test-p{
            color: white;
            font-size: 20px;
            margin-top: 6px;
          }

          .link-info {
            margin-top: 13px;
          }

          .ml-2, .mx-2 {
            margin-left: 0.5rem!important;
          }

          .float-left {
            float: left!important;
          }

          .h5 {
            font-size: 14px !important;
          }

          .ml-3{
            margin-left: 1rem!important;
          }

          .text-right {
            text-align: right!important;
           }

           .pr-2, .px-2 {
            padding-right: 0.5rem!important;
            }

            .link .button {
              background: linear-gradient(to bottom, #90d3ef 0%, #489dc1 47%, #68a3d7 100%);
              border: none;
              padding: 2px 8px;
              border-radius: 14px;
              margin-top: 12px;
              transition: all 0.5s;
              cursor: pointer;
              display: inline-block;
              color: white;
              font-size: 14px;
          }

          .menu-container {
            text-align: center;
            padding-top: 300px;
          }

          .menu {
            width: 800px;
            height: 340px;
            position: absolute;
            bottom: 0px;
            left: 50%;
            transform: translateX(-50%);
            display: inline-block;
            }
            .menu-bg {
              width: 100%;
            }

            .btn-bg {
              background-image: url(https://jun88.vin/images/icons/btn-bg-1.png);
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
              width: 130px;
              height: 130px;
              position: absolute;
          }
          #android {
            top: 210px;
            left: 78px;
          }

          a {
            color: black;
            font-weight: 600;
            text-decoration: none;
           }

           .item-menu{
            padding-top: 10px;
           }

           #agent {
            top: 87px;
            left: 184px;
            }

            #customer-service {
              top: 42px;
              left: 337px;
            }

            #gift {
              top: 87px;
              left: 490px;
            }

            #ios {
              top: 210px;
              left: 592px;
          }

          #btn-home {
            background-image: url(https://jun88.vin/images/icons/btn-home-bg.png);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            width: 300px;
            height: 84px;
            position: absolute;
            top: 240px;
            left: 250px;
           }

           #btn-home-items {
            margin-top: 23px;
            margin-left: 50px;
           }

           #home-icon {
            float: left;
            }

            #home-text {
              float: left;
              padding-top: 8px;
              margin-left: 32px;
             }

          .clear-both {
            clear: both;
          }

          
          img {
            display: block;
            max-width: 100%;
          }

          .icon{
            padding-left: 50px;
          }

          icon-item{
            padding-left: 50px;
          }

          .swiper {
            width: 100%;
            height: 100%;
          }
          
          .swiper-slide {
            text-align: center;
            font-size: 18px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
          }
          
          .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          #cskh-icon {
            position: fixed;
            right: 20px;
            bottom: 20px;
            width: 90px;
            height: 90px;
            border-radius: 50%;
            animation: at-ripple-blue 0.6s linear infinite;
          }


          `}</style>
    </div>
  );
}

export default Home;
