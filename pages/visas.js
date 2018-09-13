import React from "react";

import Catalog from "../components/Catalog";
import Loading from "../components/Loading";

const Visas = props => {
  if (props && props.results && props.results.length) {
    return <Catalog products={props.results} />;
  }
  return <Loading />;
};

Visas.getInitialProps = async function({ req }) {
  const FlameLinkStore = await require("../static/js/flamelink-store").default;
  const res = await FlameLinkStore.getStore().getContent("visaSummary");
  return {
    results: res
  };
};

export default Visas;
