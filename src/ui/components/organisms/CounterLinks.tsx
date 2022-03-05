import {
  AppLinkCard,
  AppLinkCardProps,
} from 'ui/components/molecules/AppLinkCard';

type Props = {
  cards: AppLinkCardProps[];
};

export const CounterLinks = (props: Props) => {
  return (
    <span>
      {props.cards.map((value) => (
        <AppLinkCard head={value.head} href={value.href} name={value.name} />
      ))}
    </span>
  );
};
