const data=[
  {title:"Organize Your Tasks",
    desc:"Keep track of assignments, exams, and deadlines with a personalized task manager. Never miss a due date again.",
    imgUrl:"/312bcdf4-74ff-4a4b-9fae-c4d9f0a12988.jpeg"
  },
  {title:"Track Your Academic Progress",
    desc:"Monitor your grades, class performance, and academic achievements with real-time updates. Set goals and stay focused on your academic journey.",
    imgUrl:"/88d9e5c5-91d0-4983-a403-ac7035b3a4ff.jpeg"
  },
  {title:"Manage Extracurriculars",
    desc:"Balancing clubs, sports, and social activities? Our platform lets you keep everything organized so you can enjoy a well-rounded student experience.",
    imgUrl:"/fa95b17d-282f-43ae-9404-dfb5562a1e7f.jpeg"
  },
  {title:"Collaborate with Peers",
    desc:"Join group projects, collaborate on tasks, and communicate easily with classmates using our in-built communication tools.",
    imgUrl:"/099fea4a-3f97-432c-8797-292b16f7bcfe.jpeg"
  },
]
function LandingPage() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Cardholder/>
    </div>
  );
}

export default LandingPage;
function Navbar(){
  return(
    <div className="landing-Navbar">
      <div className="landing-Navbar-head">UniSync</div>
      <div className="landing-Navbar-options">
        <div className="landing-Navbar-option">Home</div>
        <div className="landing-Navbar-option">About</div>
        <div className="landing-Navbar-option">Testimonial</div>
        <div className="landing-Navbar-option">Contact</div>
      </div>
    </div>
  )
}

function Main(){
  return(
    <div className="landing-main">
      <div className="landing-main-text">
        <h1>Welcome to UniSync</h1>
        <p>Your one-stop solution to organize, track, and enhance student life!</p>
      </div>
      <div className="landing-main-buttons">
        <button className="landing-main-buttons1">Go to Student Login</button>
        <button className="landing-main-buttons2">Go to Teacher Login</button>
      </div>
    </div>
  )
}
function Cardholder() {
  return (
    <>
    <div className="landing-card-area">
        {data.map((d)=>(
            <Maincard title={d.title} desc={d.desc} imgUrl={d.imgUrl} key={d.title}/>
        ))}
    </div>
    </>
  );
}
function Maincard({title,desc,imgUrl}) {
  return (
    <>
      <div className="landing-wrapper">
        <div className="landing-box-area">
          <div className="landing-box">
            <img src={imgUrl} alt="" />
            <div className="landing-overlay">
            <h2>{title}</h2>
            <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
