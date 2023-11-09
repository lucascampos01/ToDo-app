import styled from "styled-components/native";

export const Container = styled.View`
  height: 100%;
  background-color: #1a1a1a;
`;

export const Header = styled.View`
  height: 200px;
  background-color: #000000;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 110px;
  height: 32px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding: 24px;
  margin-top: -60px;
  align-items: center;
`;

export const InputTask = styled.TextInput`
  flex: 1;
  background-color: #262626;
  padding: 16px;
  font-size: 16px;
  border-radius: 8px;
  margin-right: 10px;
  width: 271px;
  height: 54px;
`;

export const ButtonAddTask = styled.TouchableOpacity`
  width: 54px;
  height: 54px;
  background-color: #1e6f9f;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const AddIcon = styled.Image`
  width: 16px;
  height: 16px;
`;

export const TasksInfo = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 24px;
  border-bottom-width: 1px;
  border-bottom-color: #d9d9d9;
`;

export const CreatedTasks = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const CreatedTitle = styled.Text`
  color: #4ea8de;
  font-weight: bold;
  margin-right: 10px;
`;

export const FinishTasks = styled.View`
  flex-direction: row;
  width: 110px;
`;

export const FinishTitle = styled.Text`
  color: #8284fa;
  font-weight: bold;
  margin-right: 10px;
`;

export const Count = styled.Text`
  background-color: #333333;
  width: 30px;
  height: 20px;
  border-radius: 90px;
  text-align: center;
  color: #d9d9d9;
`;
