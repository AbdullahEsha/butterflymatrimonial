import React, { useEffect, useState } from "react";
import logo from "../../asset/image/butterfly.png";
import "../../asset/css/sidebar.css";
import { Link } from "react-router-dom";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

import { MdDeleteForever, MdOutlineCalendarViewDay } from "react-icons/md";
import { GrFormView } from "react-icons/gr";

const DisplayAllCV = () => {
  const [cvdata, setCvData] = useState([]);
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.isLogin) {
    navigate("/admin/login");
  }

  const handleLogout = () => {
    auth.logout();
    navigate("/admin/login");
  };

  useEffect(() => {
    getAllCv();
    return () => {
      //console.log("removing...", e);
    };
  }, []);

  const getAllCv = async () => {
    fetch(`http://localhost:8000/api/get/all/cv`, {})
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log("vul");
        } else {
          setCvData(data);
        }
      })
      .catch((err) => {
        console.log("pro erro", err);
      });
  };

  return (
    <>
      <div class="sidebar">
        <Link to="/admin">Dashboard</Link>
        <Link class="active" to="/admin/display-cv">
          Display CV
        </Link>
        <Link to="/admin/venus">Venus</Link>
        <Link to="/admin/special-pairing">Special Pairing</Link>
        <Link to="/admin/login" onClick={handleLogout}>
          Logout
        </Link>
      </div>

      <div
        class="content"
        style={{ backgroundColor: "#ededed", padding: "20px" }}
      >
        <div style={{ backgroundColor: "#fff", padding: "20px" }}>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {cvdata.map((item, index) => {
                  return (
                    <>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{`${
                          item.created_at
                            ? new Date(item.created_at).toLocaleString(
                                "en-GB",
                                {
                                  weekday: "short",
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                }
                              )
                            : ""
                        }`}</td>
                        <td>
                          <Link
                            to={`/admin/display-cv/${item.id}`}
                            title="View"
                            className="btn btn-outline-info"
                          >
                            <MdOutlineCalendarViewDay size={20} />
                          </Link>{" "}
                          <button
                            className="btn btn-outline-danger"
                            title="Delete"
                          >
                            <MdDeleteForever size={20} />
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="logoStyle">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </>
  );
};

export default DisplayAllCV;
