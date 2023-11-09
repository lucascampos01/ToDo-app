import {
  Container,
  Header,
  Logo,
  Form,
  InputTask,
  ButtonAddTask,
  AddIcon,
  TasksInfo,
  CreatedTasks,
  CreatedTitle,
  FinishTasks,
  FinishTitle,
  Count,
} from "./styles";

import { Task } from "../../components/Tasks";

const imageLogo = require("../../assets/logoTo.png");
const plusIcon = require("../../assets/icons/plus.png");

export function Home() {
  return (
    <Container>
      <Header>
        <Logo source={imageLogo} />
      </Header>

      <Form>
        <InputTask
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <ButtonAddTask>
          <AddIcon source={plusIcon} />
        </ButtonAddTask>
      </Form>

      <TasksInfo>
        <CreatedTasks>
          <CreatedTitle>Criadas</CreatedTitle>
          <Count>0</Count>
        </CreatedTasks>

        <FinishTasks>
          <FinishTitle>Concluídas</FinishTitle>
          <Count>0</Count>
        </FinishTasks>
      </TasksInfo>

      <Task />
    </Container>
  );
}
