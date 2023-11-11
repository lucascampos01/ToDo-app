import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  max-width: 100%;
  flex-direction: row;
  background-color: #262626;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 10px;
  padding: 16px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const Checkbox = styled.Image`
  width: 28px;
  height: 28px;
`;

export const TaskDescription = styled.Text`
  padding: 16px;
  font-size: 14px;
  border-radius: 8px;
  width: 271px;
  color: #fff;
`;

export const TaskDescriptionCheck = styled.Text`
  padding: 16px;
  font-size: 14px;
  border-radius: 8px;
  width: 271px;
  color: #fff;
  text-decoration-line: line-through;
`;

export const DeleteTask = styled.Image`
  width: 16.48px;
  height: 18px;
`;
