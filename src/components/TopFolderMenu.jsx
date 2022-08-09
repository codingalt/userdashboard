import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as bs from "react-icons/bs";
import * as io from "react-icons/io";
import "../sass/FolderMenu/folderMenu.css";
import { folderMenuContext } from "../contexts/FolderMenu";

const TopFolderMenu = () => {
  const { openMenu, closeMenu } = useContext(folderMenuContext);

  return (
    <Menu
      id="muipopup1"
      open={openMenu}
      onClose={closeMenu}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <div className="clipboard-container">
        <span>Clipboard</span>
        <span>
          <bs.BsThreeDotsVertical />
        </span>
      </div>
      <div className="heading mb-2 mt-1">User Actions</div>
      <div className="inner">
        <div className="time-date">
          <span>01:06:2022 13:33</span>
          <span>13/05/KR/2022</span>
        </div>
      </div>

      <div className="inner">
        <div className="time-date">
          <span>01:06:2022 13:33</span>
          <span>13/05/KR/2022</span>
        </div>
      </div>

      <div className="inner">
        <div className="time-date">
          <span>01:06:2022 13:33</span>
          <span>My Searching Criterae</span>
        </div>
      </div>
      <div className="heading mb-2 mt-1">Process</div>

      <div className="inner">
        <div className="time-date">
          <span>01:06:2022 13:33</span>
          <span>My Process 001</span>
        </div>
      </div>

      <div className="inner">
        <div className="time-date">
          <span>01:06:2022 13:33</span>
          <span>My process 002</span>
        </div>
      </div>

      <div className="show-all">
        <span>Show All</span>
        <span>
          <io.IoIosArrowForward />
        </span>
      </div>
    </Menu>
  );
};

export default TopFolderMenu;
