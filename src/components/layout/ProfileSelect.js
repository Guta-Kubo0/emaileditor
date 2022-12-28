import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "./ProfileSelect.css";

function ProfileSelect() {
  return (
    <DropdownButton>
      <Dropdown.Item>Meu Perfil</Dropdown.Item>
      <Dropdown.Item>Meu Plano</Dropdown.Item>
      <Dropdown.Item>Segurança</Dropdown.Item>
      <Dropdown.Item>Contatos</Dropdown.Item>
      <Dropdown.Item>Sair</Dropdown.Item>
    </DropdownButton>
  );
}

export default ProfileSelect;
