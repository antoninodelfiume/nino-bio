import React from "react";
import Navbar from "./components/Navbar/Navbar";
import NavItem from "./components/NavIteam/NavItem";
import DropdownMenu from "./components/Dropdown/DropdownMenu";
import { BiBellMinus } from "react-icons/bi";
import { AiOutlinePlusCircle, AiOutlineCaretDown } from "react-icons/ai";
import { TbBrandMessenger } from "react-icons/tb";

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<AiOutlinePlusCircle />} />
        <NavItem icon={<BiBellMinus />} />
        <NavItem icon={<TbBrandMessenger />} />
        <NavItem icon={<AiOutlineCaretDown />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </div>
  );
}

export default App;