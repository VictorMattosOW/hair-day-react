import ButtonIcon from "../../components/button-icon/button-icon";
import Icon from "../../components/icon/icon";
import Text from "../../components/text";
import TrashIcon from "../../assets/Trash.svg?react";
import style from "./style.module.css";
import type { Agenda } from "../../models/horarios";
import { useAppointments } from "../../context/AppointmentContext";

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
  const { deleteAppointment } = useAppointments();

  function handleDelete(id: string | undefined) {
    if (id) {
      deleteAppointment(id);
    }
  }

  if (agenda?.agendamento && agenda.agendamento.length > 0) {
    return (
      <div className={style.card_bottom}>
        {agenda.agendamento.map((apt) => (
          <div key={apt.id || apt.horario} className={style.aling}>
            <div className={style.aling}>
              <Text variant="title-md">{apt.horario}</Text>
              <Text variant="md">{apt.cliente}</Text>
            </div>
            <ButtonIcon icon={TrashIcon} onClick={() => handleDelete(apt.id)} />
          </div>
        ))}
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
