import NavBar from "../components/NavBar";

export default function about() {
    return (
      <div className="about">
          <NavBar></NavBar>
          <div className="page">
            <div className="left">
              <div className="backGround">
                <img src="jack.JPG"></img>
              </div>
            </div>
            <div className="right">
              <div className="box">
                <h1>In 1995, Mark and long-time friend Todd Wagner came up with an internet based solution to not being able to listen to Hoosiers Basketball games out in Texas. That solution was Broadcast.com – streaming audio over the internet. In just four short years, Broadcast.com (then Audionet) would be sold to Yahoo for $5.6 billion dollars. His trade to collar his shares of Yahoo! stock received in the sale of Broadcast.com in advance of the popping of the Internet bubble has been called one of the top 10 trades of all time.</h1>
              </div>
            </div>
          </div>
      </div>
    )
  }