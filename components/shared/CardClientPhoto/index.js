import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/client";
import CardClientPhotoStc from "./CardClientPhoto.stc";
import { BsEye } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import useForm from "../../../lib/useForm";

const SINGLE_CLIENT = gql`
  query SINGLE_CLIENT($id: ID!) {
    client(id: $id) {
      id
      firstname
      name
      telephone
      pays
      Ville
      client_image {
        image {
          id
          url
          name
        }
      }
    }
  }
`;

const UPLOAD = gql`
  mutation UPLOAD($image: Upload!) {
    upload(file: $image) {
      id
    }
  }
`;

const CREATE_CLIENT_IMAGE = gql`
  mutation CREATE_CLIENT_IMAGE($image: ID!, $client: ID!) {
    createClientImage(input: { data: { image: $image, client: $client } }) {
      clientImage {
        id
        image {
          id
        }
      }
    }
  }
`;
export default function CardClientPhoto(props) {
  // variable globale state
  //   on initialise l'id de media on le stock dans un state
  const [media, setMedia] = useState(0); // ----------------------------------------------------

  // le fichier uploader se stock ici
  const [file, setFile] = useState("");
  // -----------------------------------------------

  // on cherche l'image du client
  const exe = useQuery(SINGLE_CLIENT, {
    variables: {
      id: props.id_client,
    },
  });

  const client = exe?.data?.client;
  // --------------------------------------------------

  // -------------------------------------------------------------------------------------------------
  // initialisation de l'inputs
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    client: props.id_client,
    image: "",
    imageClient: "",
  });
  //

  // initialisation des données du formulaire
  const [upload, { data, error, loading }] = useMutation(UPLOAD, {
    variables: inputs,
  });
  const [createClientImage, { data1, error1, loading1 }] = useMutation(
    CREATE_CLIENT_IMAGE,
    {
      variables: inputs,
      refetchQueries: [
        { query: SINGLE_CLIENT, variables: { id: props.id_client } },
      ],
    }
  );

  // -----------------------------------------

  // se declenche lorsqu'on choisi un fichier
  const changeInput = (e) => {
    setFile(e.target.files[0]);
    inputs.image = e.target.files[0];
  };

  // se declenche lorsqu'on valide le formulaire
  const onSubmitMedia = async (e) => {
    e.preventDefault();
    const res = await upload();

    inputs.image = res?.data?.upload?.id;
    const res1 = await createClientImage();
  };

  let lien = exe?.data?.client?.client_image?.image ? (
    <img
      src={
        "https://www.xpatsa.online/" +
        exe?.data?.client?.client_image?.image?.url
      }
    />
  ) : (
    <Image src="/img/avatar.png" width="220" height="220" />
  );

  return (
    <CardClientPhotoStc>
      <Row>
        <Col lg={3}>
          <p className="label">Photo du client </p>
          <div className="cadrePhoto">{lien}</div>
          <form onSubmit={onSubmitMedia} className="formChangeFile">
            <Row className="">
              <Col sm={8}>
                <input
                  type="file"
                  onChange={changeInput}
                  className="form-control"
                />
              </Col>
              <Col sm={4}>
                <button type="submit" className="btn form-control">
                  Ok
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </CardClientPhotoStc>
  );
}
