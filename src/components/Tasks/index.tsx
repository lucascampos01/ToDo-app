import { TouchableOpacity, StyleSheet } from "react-native";
import {
  Container,
  Checkbox,
  TaskDescription,
  DeleteTask,
  TaskDescriptionCheck,
} from "./styles";

const checkIcon = require("../../assets/icons/check.png");
const checkIconMark = require("../../assets/icons/checkMark.png");
const deleteIcon = require("../../assets/icons/trash.png");

type Props = {
  description: string;
  onRemove: () => void;
  onCheck: () => void;
  check: boolean;
};

export function Task({ description, onRemove, onCheck, check }: Props) {
  return (
    <Container>
      <TouchableOpacity onPress={onCheck}>
        {check ? (
          <Checkbox source={checkIconMark} />
        ) : (
          <Checkbox source={checkIcon} />
        )}
      </TouchableOpacity>
      <TaskDescription style={check ? styles.checkText : styles.noCheckText}>
        {description}
      </TaskDescription>
      <TouchableOpacity onPress={onRemove}>
        <DeleteTask source={deleteIcon} />
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  checkText: {
    textDecorationLine: "line-through",
  },
  noCheckText: {
    textDecorationLine: "none",
  },
});
