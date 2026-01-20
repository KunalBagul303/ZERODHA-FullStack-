import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/kunalbagul2.jpeg"
            style={{ borderRadius:"100%", width: "50%" }}
          />
          <h4 className="mt-5">Kunal Bagul</h4>
          <h6>CSE Student | Full-Stack (MERN) Learner</h6>
        </div>
        <div className="col-6 p-3">
          <p>
          Hello 👋, I’m a 3rd year Computer Science Engineering student with a strong interest in MERN stack development and building real-world web applications. I enjoy creating user-friendly interfaces and working on full-stack projects that solve practical problems.
          </p>
          <p>
           I have hands-on experience with frontend and backend technologies and continuously work on improving my skills through personal projects and consistent practice. I focus on writing clean code and understanding how complete web applications function.
          </p>
          <p>I’m eager to learn, collaborate, and grow as a MERN stack developer while contributing to meaningful and impactful projects 🚀</p>
          <p>
            Connect on <a href="">Github</a> / <a href="">Linkedin</a> /{" "}
            <a href="">Instagram</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;