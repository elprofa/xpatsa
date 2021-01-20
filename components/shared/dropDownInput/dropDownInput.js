import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Label, Input ,Form,Row,Col} from "reactstrap";
import { SelectGroup } from "./dropDownInput.stc";
import { BsChevronRight } from "react-icons/bs";
import { BiGlobe } from 'react-icons/bi';


const DropoDownInput = (props) => {
  const {OptionList,textLabel,nameInput,idInput,backgroundColor,color} = props;
  return (
    <SelectGroup backgroundColor={backgroundColor} color={color}>
      <BiGlobe />
      <select className="form-control" >
        {OptionList.map(list => <option key={list.value.length}>{list.item} </option>)}
      </select>
    </SelectGroup>
  );
};

export default DropoDownInput;