import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Label, Input, Form, Row, Col } from "reactstrap";
import { SelectGroup } from "./dropDownInput.stc";
import { BsChevronRight } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";

const DropoDownInput = (props) => {
  const {
    OptionList,
    textLabel,
    nameInput,
    idInput,
    backgroundcolor,
    color,
  } = props;
  return (
    <SelectGroup backgroundcolor={backgroundcolor} color={color}>
      <BiGlobe />
      <select className="form-control">
        {OptionList.map((list, index) => (
          <option key={index}>{list.item} </option>
        ))}
      </select>
    </SelectGroup>
  );
};

export default DropoDownInput;
