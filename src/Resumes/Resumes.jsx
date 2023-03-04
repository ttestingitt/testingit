import React from "react";
import "./Resumes.scss";

import Resume from "../Resume/Resume";
import ResumesData from "../assets/data/resumes";

const Resumes = () => {
  return (
    <div className="resumes-container">
      <div className="title-part">
        <div className="title">Hire Top Notch Talents</div>
        <div className="desc">
          These are a glimpse of the top notch talents that you can hire right
          now
        </div>
      </div>
      <div className="cards-part">
        {ResumesData.map((cv, index) => (
          <Resume
            role={cv.role}
            years={cv.years}
            desc={cv.desc}
            skills={cv.skills}
            availability={cv.availability}
            salary={cv.salary}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Resumes;
