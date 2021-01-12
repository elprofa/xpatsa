import { TitreStc } from "./Titre.stc";

const Titre = (props) => {
  const { text } = props;
  return <TitreStc>{text}</TitreStc>;
};

export default Titre;
