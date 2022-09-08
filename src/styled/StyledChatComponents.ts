import styled from 'styled-components';

const ChatBodyDiv = styled.div`
  width: 100%;
  height: auto;
  background: antiquewhite;
`;

const ChatBoxDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: lightgoldenrodyellow;
`;

const MessageLineDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const MyMessageDiv = styled.div`
  width: 50%;
  height: auto;
  align-self: flex-end;
  text-align: right;
  padding: 2px 10px 2px 2px;

  background: #61dafb;
  border-radius: 5px;
  border: 1px solid darkseagreen;
`;

const CpMessageDiv =  styled.div`
  width: 50%;
  height: auto;
  padding: 2px 2px 2px 10px;
  text-align: left;
  align-self: flex-start;
  background: lightblue;
  border-radius: 5px;
  border: 1px solid darkseagreen;
`;

export {
    ChatBodyDiv,
    ChatBoxDiv,
    MessageLineDiv,
    MyMessageDiv,
    CpMessageDiv,
};

