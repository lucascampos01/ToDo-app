import React, { useState } from "react";
import { Alert, FlatList, Text, Image } from "react-native";
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
  TextListEmpty,
} from "./styles";

import { Task } from "../../components/Tasks";

const imageLogo = require("../../assets/logoTo.png");
const plusIcon = require("../../assets/icons/plus.png");
const listEmptyImage = require("../../assets/listEmpty.png");

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskDescription, setTaskDescription] = useState("");

  const [tasksCreated, setTasksCreated] = useState(0);
  const [tasksFinish, setTasksFinish] = useState(0);

  const [taskCheck, setTaskCheck] = useState(false);

  function handleTaskAdd() {
    if (tasks.includes(taskDescription)) {
      return Alert.alert(
        "Tarefa existe",
        "Esta tarefa já foi adicionada na lista do dia."
      );
    }
    if (taskDescription === "") {
      return Alert.alert(
        "Erro ao adicionar tarefa",
        "Por favor, digite uma tarefa e tente novamente."
      );
    }

    setTasks((prevState) => [...prevState, taskDescription]);
    setTaskDescription("");

    setTasksCreated((prevState) => prevState + 1);
  }

  function handleTaskRemove(description: string) {
    Alert.alert(
      "Remover tarefa",
      `Tem certeza que deseja remover a tarefa "${description}"?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => {
            setTasks((prevState) =>
              prevState.filter((task) => task != description)
            ),
              setTasksCreated((prevState) => prevState - 1);
          },
        },
      ]
    );
  }

  function handleTaskCheck() {
    setTaskCheck(!taskCheck);
  }

  return (
    <Container>
      <Header>
        <Logo source={imageLogo} />
      </Header>

      <Form>
        <InputTask
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskDescription}
          value={taskDescription}
          onSubmitEditing={handleTaskAdd}
        />
        <ButtonAddTask onPress={handleTaskAdd}>
          <AddIcon source={plusIcon} />
        </ButtonAddTask>
      </Form>

      <TasksInfo>
        <CreatedTasks>
          <CreatedTitle>Criadas</CreatedTitle>
          <Count>{tasksCreated}</Count>
        </CreatedTasks>

        <FinishTasks>
          <FinishTitle>Concluídas</FinishTitle>
          <Count>{tasksFinish}</Count>
        </FinishTasks>
      </TasksInfo>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task
            key={item}
            description={item}
            onRemove={() => handleTaskRemove(item)}
            onCheck={() => handleTaskCheck()}
            check={taskCheck}
          />
        )}
        ListEmptyComponent={() => (
          <TextListEmpty>
            Nenhuma tarefa adicionada até o momento.
          </TextListEmpty>
        )}
      />
    </Container>
  );
}
