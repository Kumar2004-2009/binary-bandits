import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");
  const [showQuestions, setShowQuestions] = useState(false);

  const navigate = useNavigate();

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.id);
    setShowQuestions(true); // Show questions when a club is selected
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic
    alert(`You selected ${selectedRadio} and submitted the form.`);
  };

  // Define questions for different clubs
  const renderClubQuestions = () => {
    switch (selectedRadio) {
      case "btnradio1":
        return (
          <>
            <h5>Sports Club Questions:</h5>
            <div className="mb-3">
              <label>What sport do you play?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your sport"
              />
            </div>
            <div className="mb-3">
              <label>How often do you train?</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g., daily, weekly"
              />
            </div>
            <div className="mb-3">
              <label>What is your favorite sport?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Favorite sport"
              />
            </div>
          </>
        );
      case "btnradio2":
        return (
          <>
            <h5>Music Club Questions:</h5>
            <div className="mb-3">
              <label>What instrument do you play?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Instrument"
              />
            </div>
            <div className="mb-3">
              <label>What genre of music do you enjoy?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Music genre"
              />
            </div>
            <div className="mb-3">
              <label>Have you performed in any events?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Performance experience"
              />
            </div>
          </>
        );
      case "btnradio3":
        return (
          <>
            <h5>Art Club Questions:</h5>
            <div className="mb-3">
              <label>
                What is your favorite medium (e.g., painting, sculpture)?
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Your medium"
              />
            </div>
            <div className="mb-3">
              <label>How long have you been practicing art?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Years of experience"
              />
            </div>
            <div className="mb-3">
              <label>What inspires your artwork?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your inspiration"
              />
            </div>
          </>
        );
      case "btnradio4":
        return (
          <>
            <h5>Tech Club Questions:</h5>
            <div className="mb-3">
              <label>What programming languages do you know?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Languages"
              />
            </div>
            <div className="mb-3">
              <label>Have you worked on any tech projects?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Project experience"
              />
            </div>
            <div className="mb-3">
              <label>
                What is your area of interest (e.g., web development, AI)?
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Interest area"
              />
            </div>
          </>
        );
        case "btnradio5":
        return (
          <>
            <h5>Dance Club Questions:</h5>
            <div className="mb-3">
              <label>What programming languages do you know?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Languages"
              />
            </div>
            <div className="mb-3">
              <label>Have you worked on any tech projects?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Project experience"
              />
            </div>
            <div className="mb-3">
              <label>
                What is your area of interest (e.g., web development, AI)?
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Interest area"
              />
            </div>
          </>
        );
        case "btnradio6":
        return (
          <>
            <h5>Drama Club Questions:</h5>
            <div className="mb-3">
              <label>What programming languages do you know?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Languages"
              />
            </div>
            <div className="mb-3">
              <label>Have you worked on any tech projects?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Project experience"
              />
            </div>
            <div className="mb-3">
              <label>
                What is your area of interest (e.g., web development, AI)?
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Interest area"
              />
            </div>
          </>
        );
        case "btnradio7":
        return (
          <>
            <h5>Chess Club Questions:</h5>
            <div className="mb-3">
              <label>What programming languages do you know?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Languages"
              />
            </div>
            <div className="mb-3">
              <label>Have you worked on any tech projects?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Project experience"
              />
            </div>
            <div className="mb-3">
              <label>
                What is your area of interest (e.g., web development, AI)?
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Interest area"
              />
            </div>
          </>
        );
        case "btnradio8":
        return (
          <>
            <h5>Flimming Club Questions:</h5>
            <div className="mb-3">
              <label>What programming languages do you know?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Languages"
              />
            </div>
            <div className="mb-3">
              <label>Have you worked on any tech projects?</label>
              <input
                type="text"
                className="form-control"
                placeholder="Project experience"
              />
            </div>
            <div className="mb-3">
              <label>
                What is your area of interest (e.g., web development, AI)?
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Interest area"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-120">
      <div className="bg-white p-3 rounded" style={{ width: '570px' }}>
        <h2 className="mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              autoComplete="off"
              name="username"
              className="form-control rounded-0"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="container mt-4">
            <div className="row">
              <div className="col-3">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autoComplete="off"
                  checked={selectedRadio === "btnradio1"}
                  onChange={handleRadioChange}
                />
                <label
                  className="btn btn-outline-primary w-100"
                  htmlFor="btnradio1"
                >
                  Sports Club
                </label>
              </div>
              <div className="col-3">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                  checked={selectedRadio === "btnradio2"}
                  onChange={handleRadioChange}
                />
                <label
                  className="btn btn-outline-primary w-100"
                  htmlFor="btnradio2"
                >
                  Music Club
                </label>
              </div>
              <div className="col-3">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio3"
                  autoComplete="off"
                  checked={selectedRadio === "btnradio3"}
                  onChange={handleRadioChange}
                />
                <label
                  className="btn btn-outline-primary w-100"
                  htmlFor="btnradio3"
                >
                  Art Club
                </label>
              </div>
              <div className="col-3">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio4"
                  autoComplete="off"
                  checked={selectedRadio === "btnradio4"}
                  onChange={handleRadioChange}
                />
                <label
                  className="btn btn-outline-primary w-100"
                  htmlFor="btnradio4"
                >
                  Tech Club
                </label>
              </div>

              {/* Second Row */}
              <div className="col-3 mt-4">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio5"
                  autoComplete="off"
                  checked={selectedRadio === "btnradio5"}
                  onChange={handleRadioChange}
                />
                <label
                  className="btn btn-outline-primary w-100"
                  htmlFor="btnradio5"
                >
                  Dance Club
                </label>
              </div>
              <div className="col-3 mt-4">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio6"
                  autoComplete="off"
                  checked={selectedRadio === "btnradio6"}
                  onChange={handleRadioChange}
                />
                <label
                  className="btn btn-outline-primary w-100"
                  htmlFor="btnradio6"
                >
                  Drama Club
                </label>
              </div>
              <div className="col-3 mt-4">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio7"
                  autoComplete="off"
                  checked={selectedRadio === "btnradio6"}
                  onChange={handleRadioChange}
                />
                <label
                  className="btn btn-outline-primary w-100"
                  htmlFor="btnradio7"
                >
                  Film Club
                </label>
              </div>
              <div className="col-3 mt-4">
                <input
                  type="radio"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio8"
                  autoComplete="off"
                  checked={selectedRadio === "btnradio6"}
                  onChange={handleRadioChange}
                />
                <label
                  className="btn btn-outline-primary w-100"
                  htmlFor="btnradio8"
                >
                  Chess Club
                </label>
              </div>
              
            </div>
          </div>

          {/* Display club-specific questions based on selection */}
          {showQuestions && <div className="mt-4">{renderClubQuestions()}</div>}

          <button
            type="submit"
            className="mt-4 btn btn-success w-100 rounded-0"
          >
            Register
          </button>
        </form>

        <div
          className="d-flex align-items-center my-4"
          style={{ textAlign: "center" }}
        >
          <div
            style={{
              flex: 1,
              borderBottom: "1px dashed #000",
              marginRight: "0.25em",
            }}
          ></div>
          <span style={{ padding: "0 10px", backgroundColor: "#FDF2C0" }}>
            OR
          </span>
          <div
            style={{
              flex: 1,
              borderBottom: "1px dashed #000",
              marginLeft: "0.25em",
            }}
          ></div>
        </div>

        <p>Already Have an Account?</p>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
