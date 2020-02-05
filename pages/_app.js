import React from "react";
import App from "next/app";
import Layout from "../components/Layout";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
