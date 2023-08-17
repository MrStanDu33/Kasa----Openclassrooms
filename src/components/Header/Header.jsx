import styles from "./Header.module.scss";

function Header(props) {
    return (
      <div className={"header"}>
        <img src={props.img} className={"logo--header"} alt="logo" />
        <ul>
            <li>{props.li1}</li>
            <li>{props.li2}</li>
        </ul>
      </div>
    );
  }

  export default Header;
