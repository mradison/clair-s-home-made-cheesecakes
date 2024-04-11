import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import Strawberryswirl from "../assets/strawberryswirl.jpg";
import Carrotcake from "../assets/carrotcake.jpg";
import NewroomJPG from "../assets/newroom.jpg";

function Homepage({ TasksValue }) {
  return (
    <main className="main">
      <div className="welcome">
      <h1 style={{ textDecoration: "underline" }}>Welcome to Clair's Home Made Cheesecakes</h1>
      </div>

      <div className="friend">
        <h3>Your Friend in the Cheesecake Business</h3>
      </div>

      <section className="ourServices">
        <h2 style={{ textDecoration: "underline" }}>Our Cheesecake Categories</h2>
        <ul>
          <p>Single layered - 8 inch $20, or 9-10 inch $30: Each cheesecake comes with its standard crust. You can choose your own choice of crust from original graham cracker, chocolate graham cracker, cinnamon graham cracker, vanilla wafer, shortbread, gingerbread, crumble crust (like you would find on a pie or cobbler), brownie, Oreo or chocolate chip cookie crust for an additional $5.00. </p>
          <div className="imageItem">
            <img className="frontPics" src={Strawberryswirl} alt="Before Picture" />
          </div>
          <p>Multi-Layered - 8 inch $30 and 9-10 $40</p>
          <div className="imageItem">
            <img className="frontPics" src={Carrotcake} alt="Before Picture" />
          </div>
          <p>Cheesecake Cupcakes – 12 cupcakes for $25 or 24 cupcakes for $35</p>
          <p>Jumbo Cheesecake Cupcakes – 6 cupcakes for $20 or 12 cupcakes for $30</p>
          <p>Mini Cheesecake Cupcakes – 24 cupcakes for $15 or 48 cupcakes for $25</p>
          <p>Cheesecake Bars 2x2 – 16 for $20 or 24 bars for $30 or 48 bars for $40</p>
          <p>Cheesecake Bars 1x1 – 64 for $20 or 96 bars for $30</p>
          <p>“All about the Crust” – This is cheesecake encased in graham cracker crust! - 8 inch $20 or 9-10 $30 add $5 dollars and I will add in the flavor or topping of your choice</p>
          <p>Seasonal Favorites or anytime you like - 8 inch $20 or 9-10 inch $30</p>
        </ul>
      </section>

      {/* <section className="portfolio">
        <h2 style={{ textDecoration: "underline" }}>C</h2>
        <div className="imageContainer">
        <p className="LCText">Before</p>
          <div className="imageItem">
            <img className="frontPics" src={OldroomJPG} alt="Before Picture" />
          </div>
          <p className="LCText">During</p>
          <div className="imageItem">
            <img
              className="frontPics"
              src={HalfwayroomJPG}
              alt="Halfway Picture"
            />
          </div>
          <p className="LCText">After</p>
          <div className="imageItem">
            <img className="frontPics" src={NewroomJPG} alt="After Picture" />
          </div>
        </div>
      </section> */}
    </main>
  );
}
export default Homepage;
