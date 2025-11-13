import ButtonIcon from "../../components/button-icon/button-icon";
import Icon from "../../components/icon/icon";
import Text from "../../components/text";
import TrashIcon from "../../assets/Trash.svg?react";
import ManhaIcon from "../../assets/CloudSun.svg?react";
import style from "./style.module.css";
import InputCalendar from "../../components/input-calendar/input-calendar";

interface CardAgenda {
  icon: React.ComponentProps<typeof Icon>["svg"];
}

interface Agendamento {
  horario: string;
  cliente: string;
}

interface Agenda {
  periodo: string;
  horarios: string;
  agendamento: Agendamento[];
}

const agenda: Agenda = {
  periodo: "Manhã",
  horarios: "09h-12h",
  agendamento: [
    {
      horario: "09:00",
      cliente: "Marcos vinicius",
    },
  ],
};

export default function CardAgenda() {
  return (
    <section className={style.base}>
      <div className={style.wrapper}>
        <header className={style.header}>
          <div>
            <Text as="h2" variant="title-lg">Sua Agenda</Text>
            <Text as="span" variant="sm">Consulte os seus cortes de cabelo agendados por dia</Text>
          </div>
          <InputCalendar className={style.calendar}/>
        </header>
        {/* fazendo a parte debaixo, o card */}
        <section className={style.card_border}>
          <div className={style.card}>
            <div className={style.aling}>
              <Icon svg={ManhaIcon} />
              <Text variant="md">{agenda.periodo}</Text>
            </div>
            <Text as="span" variant="md">
              {agenda.horarios}
            </Text>
          </div>
          <div className={style.card_bottom}>
            <div className={style.aling}>
              <Text variant="title-md">{agenda.agendamento[0].horario}</Text>
              <Text variant="md">{agenda.agendamento[0].cliente}</Text>
            </div>
            <ButtonIcon icon={TrashIcon}></ButtonIcon>
          </div>
        </section>
      </div>
    </section>
  );
}
