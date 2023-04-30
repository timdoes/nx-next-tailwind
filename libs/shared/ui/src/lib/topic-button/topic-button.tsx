import Link from "next/link";
import {BiShoppingBag} from 'react-icons/bi';
import {FaGithub, FaYoutube, FaEnvelope} from 'react-icons/fa';

interface TopicIconProps {
  icon: string;
  className: string;
}

const TopicIcon = ({icon, className}: TopicIconProps) => {
    switch (icon) {
        case 'FaGithub':
            return <FaGithub className={className} />;
        case 'BiShoppingBag':
            return <BiShoppingBag className={className} />;
        case 'FaYoutube':
            return <FaYoutube className={className} />;
        case 'FaEnvelope':
            return <FaEnvelope className={className} />;
        default:
            return null;
    }
}

export interface TopicButtonProps {
  topicName: string;
  href: string;
  icon: string;
}

export function TopicButton(props: TopicButtonProps) {

  return (
    <Link href={props.href} data-testid='topicLink'>
      <div
      className='bg-white pl-4 rounded-lg shadow flex max-w-md min-w-max hover:shadow-md transition-shadow cursor-pointer'
    >
        <div className="p-5 flex items-center" data-testid='topicInnerWrap'>
          <TopicIcon icon={props.icon} className='text-4xl mr-2' />
          <h2 className='font-bold text-4xl' data-testid='topicName'>{props.topicName}</h2>
        </div>
      </div>
    </Link>
  );
}

export default TopicButton;
