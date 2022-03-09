import { AppLink } from 'components/atoms/AppLink';

export type AppLinkCardProps = {
  head: string;
  href: string;
  name: string;
};

export const AppLinkCard = (props: AppLinkCardProps) => {
  return (
    <>
      <span>{props.head} </span>
      <AppLink href={props.href} name={props.name} />
    </>
  );
};
