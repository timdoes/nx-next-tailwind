export interface YoutubeProps {
  title: string;
  uid: string;
}

export function Youtube({title, uid}: YoutubeProps) {
  return (
    <div>
      <iframe src={`https://www.youtube.com/embed/${uid}`}
      width='100%'
      height='500px'
      title={title}></iframe>
    </div>
  );
}

export default Youtube;
