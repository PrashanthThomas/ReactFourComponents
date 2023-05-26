interface Props {
  message: string;
}

function Message(props: Props) {
  return <h1>{props.message}</h1>;
}

export default Message;
