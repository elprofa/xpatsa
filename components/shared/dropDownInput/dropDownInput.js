import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Label, Input ,Form,Row,Col} from "reactstrap";
import { SelectGroup } from "./dropDownInput.stc";
import { BsChevronRight } from "react-icons/bs";


const DropoDownInput = (props) => {
  const {OptionList,textLabel,nameInput,idInput} = props;
  return (
    <SelectGroup>
        <Label for={idInput}>{textLabel}</Label>
        <Row>
          <Col sm={12}>
            <BsChevronRight />
            <select className="form-control">
              {OptionList.map(list => <option key={list.value.length}>{list.item} </option>)}
            </select>
          </Col>
        </Row>
        
    </SelectGroup>
  );
};

export default DropoDownInput;