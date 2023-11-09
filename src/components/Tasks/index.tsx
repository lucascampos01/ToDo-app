import { FlatList } from "react-native";
import { Container, Checkbox, TaskDescription, DeleteTask } from "./styles";

const checkIcon = require("../../assets/icons/check.png");
const deleteIcon = require("../../assets/icons/trash.png");

export function Task() {
  return (
    <Container>
      <Checkbox source={checkIcon} />
      <TaskDescription>
        Enviar o projeto para o github, Enviar o projeto para o github
      </TaskDescription>
      <DeleteTask source={deleteIcon} />
    </Container>
  );
}
