import styled from "styled-components/native";

export const Container = styled.View`
  max-width: 100%;
  flex-direction: row;
  background-color: #262626;
  margin: 20px;
  padding: 16px;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const Checkbox = styled.Image`
  width: 24px;
  height: 24px;
`;

export const TaskDescription = styled.Text`
  padding: 16px;
  font-size: 14px;
  border-radius: 8px;
  width: 271px;
`;

export const DeleteTask = styled.Image`
  width: 12.48px;
  height: 14px;
`;
