import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LogoutUser } from "../../redux/actions/LoginActions";

import "./navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const image = useSelector((state) => state.loginReducer.userData.picture);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    console.log(cMonth);
    if (cDay < 10) {
      cDay = `0${cDay}`;
    }
    switch (cMonth) {
      case 1:
        cMonth = "Jan";
        break;
      case 2:
        cMonth = "Feb";
        break;
      case 3:
        cMonth = "March";
        break;
      case 4:
        cMonth = "Apr";
        break;
      case 5:
        cMonth = "Jun";
        break;
      case 6:
        cMonth = "July";
        break;
      case 8:
        cMonth = "Aug";
        break;
      case 9:
        cMonth = "Sep";
        break;
      case 10:
        cMonth = "Oct";
        break;

      case 11:
        cMonth = "Nov";
        break;
      case 12:
        cMonth = "Dec";
        break;
      default:
        cMonth = "No";
    }

    setDate(`${cDay}/${cMonth}/${cYear}`);
  }, []);

  setInterval(() => {
    let current = new Date();
    let current_hours = current.getHours();
    let current_minutes = current.getMinutes();
    let current_seconds = current.getSeconds();
    if (current_hours < 10) {
      current_hours = `0${current_hours}`;
    } else if (current_minutes < 10) {
      current_minutes = `0${current_minutes}`;
    } else if (current_seconds < 10) {
      current_seconds = `0${current_seconds}`;
    }

    let cTime = current_hours + ":" + current_minutes + ":" + current_seconds;
    setTime(`${cTime}`);
  }, 1000);

  return (
    <header
      className="header"
      style={{
        // background: "#24292f",
        height: "60px",
        display: "flex",
        alignItems: "center",
        borderBottom:"1px solid #F1F3F4"
      }}
    >
      <div
        className="wrapper"
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          margin: "auto",
          justifyContent: "space-between",
          
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="backI"></div>
            <span>

              <strong
                style={{
                  top: "16px",
                  left: "220px",
                  // margin: "0 auto 0 90px",
                  height: "19px",
                  textAlign: "left",
                  paddingRight: "60px",
                  letterSpacing: "0.13px",
                  color: "white",
                  textTransform: "uppercase",
                  opacity: "1",
                  fontSize: "19px",
                  display:"flex",justifyContent:"center",alignItems:"center",
                  fontWeight: "500",
                  whiteSpace: "nowrap",
                }}
              >
                          <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" width={50} height={50}/>
                <span style={{ color:"#5F6368" }}>R</span><span style={{color:"#5F6368"}}>edux</span>{" "}
                <span style={{ color:"#5F6368", marginLeft: "5px" }}>T</span><span style={{color:"#5F6368"}}>odo</span>{" "}
              </strong>
            </span>
          </div>
        </Link>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="bottom"
            style={{ display: "flex", gap: "10px", alignItems: "center",justifyContent:"center",marginRight:"20px" }}
          >
            {image!=="" && (
              <div className="item profile">
                <img
                  src={image}
                  alt=""
                  className="avatar"
                  width={30}
                  height={30}
                  style={{ borderRadius: "50%" }}
                />
              </div>
            )}
            {image!=="" ? <div
              className="item"
              style={{ fontSize: "20px", color: "orange", cursor: "pointer",transform:"translateY(-3px)" }}
              onClick={() => {
                dispatch(LogoutUser());
                navigate("/");
              }}
            >
              <i class="fa-solid fa-power-off"></i>
            </div> : <span style={{color:"white"}}>Please Login to add Tasks</span>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
