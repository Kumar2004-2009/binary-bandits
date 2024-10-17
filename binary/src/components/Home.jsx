import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState
import "./Home.css"; // Import the CSS

const posts = [
  {
    name: "Kumar Piyush",
    description:
      "But that's not all! I also focused on improving my problem-solving skills, particularly in Dynamic Programming (DP). I won't lie, it was tough at first, but with persistence and practice, I found it quite interesting and enjoyable! Solving numerous DP problems helped me develop a stronger foundation in algorithms and logical thinking. I'm excited to apply these skills to real-world projects and continue learning.",
    image: "/post.jfif",
    url: "https://www.linkedin.com/in/kumar-piyush-1314ba1b9",
  },
  {
    name: "Manish",
    description:
      "The journey of building this project has been an incredible adventure of learning and innovation. 🌟 Here’s a glimpse into what I’ve mastered: Key Insights & Learnings: Large Language Models (LLMs): Explored the art of generating human-like text and understanding complex language patterns.Weights, Architecture, and Parameters: Delved into the nuances of model optimization and performance fine-tuning. Recurrent Neural Networks (RNNs): Tackled the intricacies of sequential data and language modeling. Long Short-Term Memory (LSTM): Addressed long-term dependencies and solved vanishing gradient challenges.",
    image: "/dummy-2.jpeg",
    url: "https://www.linkedin.com/in/janesmith",
  },
  {
    name: "Parth",
    description:
      "Ideathon Experience with Fetch.AI 🌟I had an incredible experience participating in the Fetch.AI Ideathon! It was an exciting journey filled with brainstorming, collaboration, and innovative thinking. 💡The opportunity to work on real-world challenges alongside talented individuals was both inspiring and rewarding. A huge thank you to the Dev Chauhan Fetch.ai Developers: Meerut team for organizing this event and providing us with the platform to innovate and ideate on future technologies. 🚀Excited to carry forward the learnings from this experience into future projects!.",
    image: "/dummy-3.jpeg",
    url: "https://www.linkedin.com/posts/parth-kamal-025422293_fetchai-ideathon-innovation-activity-7252254373915840513-3TI9",
  },
  {
    name: "Smantha",
    description:
      "Ideathon Experience with Fetch.AI 🌟I had an incredible experience participating in the Fetch.AI Ideathon! It was an exciting journey filled with brainstorming, collaboration, and innovative thinking. 💡The opportunity to work on real-world challenges alongside talented individuals was both inspiring and rewarding. A huge thank you to the Dev Chauhan Fetch.ai Developers: Meerut team for organizing this event and providing us with the platform to innovate and ideate on future technologies. 🚀Excited to carry forward the learnings from this experience into future projects!.",
    image: "/dummy.png",
    url: "https://www.linkedin.com/posts/parth-kamal-025422293_fetchai-ideathon-innovation-activity-7252254373915840513-3TI9",
  },
  {
    name: "Smantha",
    description:
      "Ideathon Experience with Fetch.AI 🌟I had an incredible experience participating in the Fetch.AI Ideathon! It was an exciting journey filled with brainstorming, collaboration, and innovative thinking. 💡The opportunity to work on real-world challenges alongside talented individuals was both inspiring and rewarding. A huge thank you to the Dev Chauhan Fetch.ai Developers: Meerut team for organizing this event and providing us with the platform to innovate and ideate on future technologies. 🚀Excited to carry forward the learnings from this experience into future projects!.",
    image: "/dummy.png",
    url: "https://www.linkedin.com/posts/parth-kamal-025422293_fetchai-ideathon-innovation-activity-7252254373915840513-3TI9",
  },
  {
    name: "Smantha",
    description:
      "Ideathon Experience with Fetch.AI 🌟I had an incredible experience participating in the Fetch.AI Ideathon! It was an exciting journey filled with brainstorming, collaboration, and innovative thinking. 💡The opportunity to work on real-world challenges alongside talented individuals was both inspiring and rewarding. A huge thank you to the Dev Chauhan Fetch.ai Developers: Meerut team for organizing this event and providing us with the platform to innovate and ideate on future technologies. 🚀Excited to carry forward the learnings from this experience into future projects!.",
    image: "/dummy.png",
    url: "https://www.linkedin.com/posts/parth-kamal-025422293_fetchai-ideathon-innovation-activity-7252254373915840513-3TI9",
  },
  // Add more posts as needed
];

function Home({ loggedInUser }) {
  const [likes, setLikes] = useState(Array(posts.length).fill(false)); // Track whether each post is liked
  const [likeCounts, setLikeCounts] = useState(Array(posts.length).fill(10)); // Track total likes for each post

  // Handle like toggle for a specific post
  const handleLikeToggle = (index) => {
    const newLikes = [...likes];
    const newLikeCounts = [...likeCounts];

    if (newLikes[index]) {
      // If already liked, unlike it and decrease the count
      newLikes[index] = false;
      newLikeCounts[index] -= 1;
    } else {
      // If not liked, like it and increase the count
      newLikes[index] = true;
      newLikeCounts[index] += 1;
    }

    setLikes(newLikes);
    setLikeCounts(newLikeCounts);
  };

  return (
    <div className="home-wrapper">
      {/* Profile Section on the Right */}
      <div className="home-container">
        <h1>Welcome, {loggedInUser.username}!</h1>
        <p>Email: {loggedInUser.email}</p>
        <h3>Joined Clubs:</h3>
        <ul>
          {loggedInUser.clubs.map((club, index) => (
            <li key={index}>{club}</li>
          ))}
        </ul>
        <Link to="/edit" className="edit-button">
          Edit
        </Link>
      </div>

      {/* Post Section on the Left */}
      <div className="post-section">
        {posts.map((post, index) => (
          <div className="post-card" key={index}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="post-name"
            >
              {post.name}
            </a>
            <p className="post-description">{post.description}</p>
            <img src={post.image} alt={post.name} className="post-image" />

            <div className="like-container">
              <button
                className={`like-button ${likes[index] ? "liked" : ""}`}
                onClick={() => handleLikeToggle(index)}
              >
                {likes[index] ? "Unlike" : "Like"}
              </button>
              <span className="like-count">{likeCounts[index]} Likes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
