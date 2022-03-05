export type AppLinkProps = {
  href: string;
  name: string;
};

export const AppLink = (props: AppLinkProps) => {
  const { name, href } = props;
  return (
    <a
      className="App-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
};
