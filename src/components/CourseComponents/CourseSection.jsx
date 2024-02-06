import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseImage from "../../assets/images/contact/c1.jpg";
import slugify from "slugify";
import axios from "axios";

const CourseSection = () => {
  const [courses, setCourses] = useState([]);

  const getAllCourses = useCallback(async () => {
    const response = await axios.get(
      "http://localhost:5000/api/v1/course/get-all-courses"
    );

    setCourses(response.data.courses);
  }, []);

  useEffect(() => {
    getAllCourses();
  }, [getAllCourses]);

  return (
    <div className="py-5">
      <h4
        className="text-center mx-1"
        style={{ color: "#a87fff", fontWeight: "600" }}
      >
        COURSES AND TRAININGS
      </h4>
      <h2 className="fs-1 fw-bold text-black text-center mx-1">
        Learn and grow your skills <br /> with our courses
      </h2>

      <div className="course-cards container px-5">
        <div className="row d-flex flex-wrap flex-row my-5">
          {courses?.map((course) => (
            <div className="col-md-4 my-2" key={course?._id}>
              <div className="course-card border shadow">
                <div className="card-img course-card-img img-fluid">
                  <img
                    src={CourseImage}
                    alt=""
                    height={"250px"}
                    width={"100%"}
                  />
                </div>

                <div className="card-content p-3">
                  <div className="course-card-head d-flex justify-content-between align-items-center">
                    <h4
                      className="text-black"
                      style={{ fontSize: "22px", fontWeight: "600" }}
                    >
                      {course?.courseName}
                    </h4>
                    <span className="badge badge-success">
                      {`${course?.coursePriceDiscount}% off`}
                    </span>
                  </div>
                  <p className="text-justify" style={{ fontSize: "16px" }}>
                    {course?.courseContent}
                  </p>

                  <div className="course-card-btn d-flex align-items-center gap-2">
                    <Link
                      className="btn contact-banner-btn"
                      to={`/courses/${slugify(
                        course?.courseName,
                        "-"
                      ).toLowerCase()}`}
                      onClick={() => {
                        localStorage.setItem(
                          "cardData",
                          JSON.stringify(courses)
                        );
                      }}
                    >
                      View Details
                    </Link>

                    <div className="card-price">
                      <span className="m-0 text-gradient">
                        Rs. {course?.courseDiscountedPrice}
                        <p
                          className="text-decoration-line-through d-inline"
                          style={{
                            marginLeft: "8px",
                            fontWeight: "normal",
                            color: "gray",
                          }}
                        >
                          Rs. {course?.coursePrice}
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
