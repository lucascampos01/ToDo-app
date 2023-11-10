import { TouchableOpacity } from "react-native";
import { Container, Checkbox, TaskDescription, DeleteTask } from "./styles";

const checkIcon = require("../../assets/icons/check.png");
const deleteIcon = require("../../assets/icons/trash.png");

type Props = {
  description: string;
  onRemove: () => void;
};

export function Task({ description, onRemove }: Props) {
  return (
    <Container>
      <Checkbox source={checkIcon} />
      <TaskDescription>{description} </TaskDescription>
      <TouchableOpacity onPress={onRemove}>
        <DeleteTask source={deleteIcon} />
      </TouchableOpacity>
    </Container>
  );
}
