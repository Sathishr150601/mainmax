import { Helmet } from "react-helmet";

export default function meta(props: any) {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.desc} />
      <link rel="canonical" href={props.ln} />
    </Helmet>
  );
}
