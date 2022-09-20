import styled from 'styled-components';
import {Field} from "formik";

const ChatBodyDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background: #e7e7e7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChatBoxDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #eee;
`;

const MessageLineDiv = styled.div`
  margin-top: 1px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5vh;
`

const StyledMessageInput = styled(Field)`
  width: auto;
  box-sizing: content-box;
  padding: 5px;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
`

const StyledSubmitButton = styled.button`
  margin: 20px auto 0;
  width: fit-content;
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
  outline: none;
`;

const BaseMessageStyle = styled.div`
  width: 50%;
  height: auto;
  padding: 2px 10px 2px 2px;
  word-wrap: break-word;
  border-radius: 5px;
  border: 1px solid #555;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MyMessageDiv = styled(BaseMessageStyle)`
  align-self: flex-end;
  text-align: right;
`;

const PartnerMessageDiv = styled(BaseMessageStyle)`
  text-align: left;
  align-self: flex-start;
`;

const BaseSystemMessageStyle = styled.p`
  margin: 0;
  width: 100%;
  text-align: center;
  font-size: 0.8em;
  word-wrap: break-word;
  font-style: italic;
`;

const InfoMessageP = styled(BaseSystemMessageStyle)`
  background: beige;
`;

const ErrorMessageP = styled(BaseSystemMessageStyle)`
  background: lightpink;
`;

const ChatTimeStampStyle = styled.div`
  margin-top: 2px;
  font-size: 0.7em;
  font-style: italic;
  text-align: right;
`

export {
    ChatBodyDiv,
    ChatBoxDiv,
    MessageLineDiv,
    MyMessageDiv,
    PartnerMessageDiv,
    InfoMessageP,
    ErrorMessageP,
    InputFormWrapper,
    StyledMessageInput,
    StyledSubmitButton,
    ChatTimeStampStyle,
};

