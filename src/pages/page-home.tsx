import Container from "../components/container/container";
import Icon from "../components/icon/icon";
import Form from "../core-components/card-form/form";
import Logo from "../assets/App Name.svg?react"
import style from "./style.module.css"
import CardAgenda from "../core-components/card-agenda/card-agenda";

export default function PageHome() {
  return (
    <Container as="main" className={style.base}>
      <Icon svg={Logo}  className={style.logo}/>
      <Form></Form>
      <CardAgenda />
    </Container>
  );
}
