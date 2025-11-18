import ButtonIcon from "../../components/button-icon/button-icon";
import Icon from "../../components/icon/icon";
import Text from "../../components/text";
import TrashIcon from "../../assets/Trash.svg?react";
import style from "./style.module.css";
import type { Agenda } from "../../models/horarios";

interface CardAgendaProps {
  agenda?: Agenda;
}

export default function CardAgenda({ agenda }: CardAgendaProps) {
  return (
    <section className={style.card_border}>
      <div className={style.card}>
        <div className={style.aling}>
          <Icon svg={agenda?.icon} />
          <Text variant="md">{agenda?.periodo}</Text>
        </div>
        <Text as="span" variant="md">
          {agenda?.horarios}
        </Text>
      </div>
      <Card agenda={agenda} />
    </section>
  );
}

function Card({ agenda }: CardAgendaProps) {
  if (agenda?.agendamento.length !== 0) {
    return (
      <div className={style.card_bottom}>
        <div className={style.aling}>
          <Text variant="title-md">{agenda?.agendamento[0].horario}</Text>
          <Text variant="md">{agenda?.agendamento[0].cliente}</Text>
        </div>
        <ButtonIcon icon={TrashIcon}></ButtonIcon>
      </div>
    );
  } else {
    return (
      <div className={style.card_bottom}>
        <div className={style.aling}>
          <Text variant="sm">Nenhum agendamento para este período</Text>
        </div>
      </div>
    );
  }
}
