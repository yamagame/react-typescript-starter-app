import { Link } from 'react-router-dom';

type Props = {
  urls: { url: string; title: string }[];
};

export const LinkTable = (props: Props) => {
  return (
    <>
      {props.urls.map((v) => (
        <div>
          <Link to={v.url}>{v.title}</Link>
        </div>
      ))}
    </>
  );
};
