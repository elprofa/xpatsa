import { TitreStc } from "./Titre.stc";

const Titre = (props) => {
  const { texte, color, underline } = props;
  return <TitreStc underline={underline} color={color}>{texte}</TitreStc>;
};

export default Titre;