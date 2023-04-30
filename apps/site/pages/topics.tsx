import { TopicButton } from '@nx-next-tailwind/shared/ui';

/* eslint-disable-next-line */
export interface TopicsProps {}

export function Topics(props: TopicsProps) {
  const topics = [
    {
      topicName: 'GitHub',
      icon: 'FaGithub',
      href: 'https://github.com/timdoes',
    },
    {
      topicName: 'YouTube',
      icon: 'FaYoutube',
      href: 'https://youtube.com/timdoes',
    },
    {
      topicName: 'Shop',
      icon: 'BiShoppingBag',
      href: 'https://timdoes.com/shop',
    },
  ];

  return (
    <main className='bg-zinc-200 dark:bg-zinc-800 min-h-screen'>
      <div className='p-4 pb-0 max-w-5xl mx-auto'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 pt-4 pb-16'>
          {topics.map(topic => (
            <li key={topic.topicName} className='flex flex-col'>
              <TopicButton {...topic} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Topics;
