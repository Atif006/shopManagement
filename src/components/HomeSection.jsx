import styled from "@emotion/styled";
import { Badge, Box, Typography } from "@mui/material";
import { message } from "antd";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AdminMenu, UserMenu } from "../data/SideBarMenu";
import "../style/layout.css";
import LogoutIcon from "@mui/icons-material/Logout";
import Header from "./Header";
import AddItem from "./AddItem";
import ViewsData from "./ViewsData";
// import headerpic from "./assets/headerpic.jpeg";
const MainLayout = styled(Box)`
  padding: 5px;
  height: 98vh;
  width: 98vw;
  // position: fixed;
`;
const LayOutBox = styled(Box)`
  display: flex;
`;

const SideBarBox = styled(Box)`
  width: 25%;

  min-height: 90vh;
  //   color: #21618c;
  margin-right: 20px;
  box-shadow: 0 0 2px gray;
`;
const LogoBox = styled(Box)`
  // display: flex;
  // justify-content: center;
  align-items: center;
`;
const MenuBox = styled(Box)`
  height: 60vh;
  margin-top: 50px;
`;
const ContentBox = styled(Box)`
  width: 75%;
  height: 100%;
`;
const HeaderBox = styled(Box)`
  height: 15vh;
  margin-bottom: 20px;
  box-shadow: 0 0 2px gray;

  //   background: #03fc62;
  //   // background-image: assets/headerpic;
`;
const BodyBox = styled(Box)`
  height: 78vh;
  margin-bottom: 20px;
  box-shadow: 0 0 2px gray;
  background: white;
  overflow-y: scroll;
`;
const LogoHeading = styled(Typography)`
  font-size: 1.5rem;
  text-align: center;
  margin: 20px 0px;
  color:'white',
  font-weight:500,
`;
const MenuItem = styled(Box)`
  margin-top: 30px;
  display: flex;
`;
const LogOutSection = styled(Box)`
  padding-top: 10px;
`;
const HeaderContent = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0px 20px;
  height: 50px;
`;
const LogoPic = styled("img")({
  height: "70px",
  width: "100%",
});
const HomeSection = ({ children }) => {
  // const { sellItem } = useSelector((state) => state.sellItem);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(sellItem);

  const logout = () => {
    localStorage.clear();
    message.success("LogOut Successfully...");
  };

  const MyMenu = [
    { name: "Home", path: "/", icon: "fa-solid fa-house" },
    {
      name: " Add Items",
      path: `/additems`,
      icon: "fa-solid fa-plus",
    },
    {
      name: "View Store",
      path: `/viewdata`,
      icon: "fa-solid fa-list",
    },

    {
      name: " Sell Items",
      path: `/smellites`,
      icon: "fa-solid fa-cart-plus",
    },
    {
      name: " Old Orders",
      path: `/allorders`,
      icon: "fa-solid fa-clipboard-list",
    },
  ];

  return (
    <>
      <MainLayout className="main">
        <LayOutBox className="layout">
          <SideBarBox
            className="sideBar"
            sx={{
              //   backgroundImage: "url('assets/sidebarpic.jpg')",
              //   backgroundRepeat: "no-repeat",
              height: "99vh",
            }}
          >
            <LogoBox className="logo">
              <LogoPic src="assets/logo.jpg" alt="logo" />
              <hr />
            </LogoBox>
            <MenuBox className="menu">
              {MyMenu.map((menu) => {
                const isActive = location.pathname === menu.path;

                return (
                  <>
                    <MenuItem className={isActive && "active"}>
                      <i
                        className={menu.icon}
                        style={{
                          fontSize: "1.8rem",
                          margin: "0 15px",
                          color: "black",
                        }}
                      ></i>

                      <Link
                        to={menu.path}
                        style={{
                          textDecoration: "none",
                          fontSize: "1.5rem",
                          color: "black",
                        }}
                      >
                        {menu.name}
                      </Link>
                    </MenuItem>
                  </>
                );
              })}
            </MenuBox>
            <LogOutSection>
              <MenuItem onClick={logout}>
                <i
                  className="fa-solid fa-right-from-bracket"
                  style={{
                    fontSize: "1.8rem",
                    margin: "0 15px",
                    color: "black",
                  }}
                ></i>

                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    fontSize: "1.5rem",
                    color: "red",
                  }}
                >
                  LogOut
                </Link>
              </MenuItem>
            </LogOutSection>
          </SideBarBox>
          <ContentBox className="content">
            <HeaderBox className="header" sx={{}}>
              <Header />
            </HeaderBox>
            <BodyBox className="body">{children}</BodyBox>
          </ContentBox>
        </LayOutBox>
      </MainLayout>
    </>
  );
};

export default HomeSection;
