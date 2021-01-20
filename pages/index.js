import gql from "graphql-tag";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Caroussel from "../components/shared/caroussel/caroussel";

import { initializeApollo } from "../apollo/client";
import ComponentBlockDevise from "../components/shared/ComponentBlockDevise/ComponentBlockDevise";
import CommentCaFonctionne from "../components/shared/CommentCaFonctionne/CommentCaFonctionne";

const ViewerQuery = gql `
  query ViewerQuery {
    viewer {
      id
      name
      status
    }
  }
`;

const Index = () => {
  const {
    data: { viewer },
  } = useQuery(ViewerQuery);

  const Wrapper = styled.section`
    img
    {
      width:100%;
    }
    .slide
    {
      margin-top:0px;
      @media (min-width: 991px) {
        margin-top:-150px;
      }
    }

    .containerHome
    {
      position: absolute;
      top: 45%;
      left: 0;
      right: 0;
    }
    .colAccueilLeft.col-sm-6 {
        background: rgb(0,0,0,.5);
        padding: 30px;
        color: #fff;
    }

    .carousel-control-next, .carousel-control-prev
    {
      width:2% !important;
    }
`;

  return (
    <div>
      <Wrapper >
        <Caroussel />
      </Wrapper>

      <ComponentBlockDevise />
      <CommentCaFonctionne />
    </div>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ViewerQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
