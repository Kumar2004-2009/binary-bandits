import { Link } from "react-router-dom";
import bg_1 from '../../public/bg-1.jpeg';

const data = [
  {
    title: "Organize Your Tasks",
    desc: "Keep track of assignments, exams, and deadlines with a personalized task manager. Never miss a due date again.",
    imgUrl:"/bg-1.jpeg"
  },
  {
    title: "Track Your Academic Progress",
    desc: "Monitor your grades, class performance, and academic achievements with real-time updates. Set goals and stay focused on your academic journey.",
    imgUrl: "/bg-2.jpeg"
  },
  {
    title: "Manage Extracurriculars",
    desc: "Balancing clubs, sports, and social activities? Our platform lets you keep everything organized so you can enjoy a well-rounded student experience.",
    imgUrl: "/bg-3.jpeg"
  },
  {
    title: "Collaborate with Peers",
    desc: "Join group projects, collaborate on tasks, and communicate easily with classmates using our in-built communication tools.",
    imgUrl: "/bg-1.jpeg"
  },
];

function LandingPage() {
  return (
    <div>
      <Main />
      <Cardholder />
    </div>
  );
}

export default LandingPage;
function Main() {
  return (
    <div className="landing-main">
      <div className="landing-main-text">
        <h1>Welcome to UniSync</h1>
        <p>Your one-stop solution to organize, track, and enhance student life!</p>
      </div>
      <div className="landing-main-buttons">
        <button className="landing-main-buttons1"><Link to="/login" style={{ color: "white" , textDecoration: "none"}}>Go to Student Login</Link></button>
        <button className="landing-main-buttons2"><Link to="/login" style={{ color: "white" , textDecoration: "none"}}>Go to Teacher Login</Link></button>
      </div>
    </div>
  );
}

function Cardholder() {
  return (
    <div className="landing-card-area">
      {data.map((d) => (
        <Maincard title={d.title} desc={d.desc} imgUrl={d.imgUrl} key={d.title} />
      ))}
    </div>
  );
}

function Maincard({ title, desc, imgUrl }) {
  return (
    <div className="landing-wrapper">
      <div className="landing-box-area">
        <div className="landing-box">
          <img src={imgUrl} alt={title} />
          <div className="landing-overlay">
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
