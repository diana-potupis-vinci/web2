interface FooterTextProps {
  text: string;
}

const FooterText = (props: FooterTextProps) => {
  return <footer> {props.text}</footer>;
};

export default FooterText;
