import classes from "./MainNavigation.module.css";
import logo from "./Logo.svg";
import DefaultButton from "./DefaultButton";
import ButtonSecondary from "./ButtonSecondary";
import menuProfile from "./menuprofile.svg";
import { UndoLeft, UndoRight } from "./undo.js";
import ViewModeSelect from "./ViewModeSelect";
import ProfileSelect from "./ProfileSelect";

function MainNavigation(props) {
  return (
    <header className={classes.header}>
      <div className={classes.firstitem}>
        <img src={logo} alt="oniva logo" className={classes.logo} />
        <h2 className={classes.actiontitle}>Criar/</h2>
        <input className={classes.emailtitle} id='emailtitle' value="E-mail sem título"/>
      </div>
      <div>
        <ViewModeSelect optionLabelOne="Computador" optionLabelTwo="Celular"/>
      </div>
      <div>
        <button className={classes.undo}>
          <UndoLeft width={"20px"} className={classes.undoicon}/>
        </button>
        <button className={classes.undo}>
          <UndoRight width={"20px"} className={classes.undoicon}/>
        </button>
      </div>
      <div>
        <DefaultButton buttonLabel="Salvar" />
        <ButtonSecondary buttonLabel="Continuar" />
      </div>
      <div>
        {/* <button className={classes.profilebutton}>
          <img
            src={menuProfile}
            alt="acessar seu perfil"
            className={classes.profileicon}
          />
        </button> */}
        <ProfileSelect/>
      </div>
    </header>
  );
}

export default MainNavigation;
