import { useState } from "react";
import { toast } from "react-toastify"
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "./ViewModeSelect.css";
import { ComputerViewIcon, MobileViewIcon } from "./IconsViewMode";


function ViewModeSelect(props) {
  function notify(mensagem){
    toast.info(mensagem);
  }
  
  const [viewMode, setViewMode] = useState("");
  const onComputerClick = () => {
    viewMode !== "computer" && setViewMode("computer");
    notify("No modo de visualização de computador é possível fazer edições")
  };
  const onMobileClick = () => {
    viewMode !== "mobile" && setViewMode("mobile");
    notify("No modo de visualização de celular não é possível fazer edições")
  };

  return (
    <DropdownButton
      title={<Title viewMedia={viewMode}/>}
      className={viewMode ? "touched" : ""}
    >
      <Dropdown.Item onClick={onComputerClick}>
        <div className="iconcontainer">
          <ComputerViewIcon height={"15px"} />
        </div>
        {props.optionLabelOne}
      </Dropdown.Item>
      <Dropdown.Item onClick={onMobileClick}>
        <div className="iconcontainer">
          <MobileViewIcon height={"15px"} />
        </div>
        {props.optionLabelTwo}

      </Dropdown.Item>
    </DropdownButton>
  );
}

export default ViewModeSelect;

function Title({viewMedia}){
    return(<>
        {!viewMedia && "Modo de Visualização"
        }
        {viewMedia === "computer" && <><div>
            <ComputerViewIcon height={"16px"}/>
            </div>
            <div style={{alignText:"center"}}>Computador</div></>}
        {viewMedia === "mobile" && <><div style={{paddingLeft:"15px"}}>
            <MobileViewIcon height={"18px"}/>
            </div>
            <div style={{paddingLeft:"10px", alignText:"center"}}>Celular</div></>}
</>
    );
}



