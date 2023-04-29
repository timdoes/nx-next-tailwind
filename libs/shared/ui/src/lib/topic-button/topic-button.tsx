/* eslint-disable-next-line */
export interface TopicButtonProps {
  topicName: string;
  onClick?: (topicName: string) => void,
}

export function TopicButton(props: TopicButtonProps) {

const onClickHandler = () => {
  if (props.onClick) {
    props.onClick(props.topicName);
  } else {
    console.warn('No click handler defined on topic button with this topic name');
  }
}

  return (
    <div
      className='bg-white pl-4 rounded-lg shadow flex max-w-md min-w-max hover:shadow-md transition-shadow cursor-pointer'
      onClick={onClickHandler}
    >
      <div className="p-5">
        <h2 className='font-bold text-4xl'>{props.topicName}</h2>
      </div>
    </div>
  );
}

export default TopicButton;
