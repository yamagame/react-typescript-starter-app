import {
  AppLinkCard,
  AppLinkCardProps,
} from 'components/molecules/AppLinkCard';

type Props = {
  cards: AppLinkCardProps[];
};

export const CounterLinks = (props: Props) => {
  return (
    <span>
      {props.cards.map((value, i) => (
        <AppLinkCard
          key={i}
          head={value.head}
          href={value.href}
          name={value.name}
        />
      ))}
    </span>
  );
};
