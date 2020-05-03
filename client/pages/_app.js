import React from "react";
import App from "next/app";
import Head from "next/head";
import cookies from "next-cookies";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { AuthProvider } from "../src/components/users/AuthContext";
import { post } from "../api/request";

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, user } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Crypto</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthProvider initialUser={user}>
            <Component {...pageProps} />
          </AuthProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

MyApp.getInitialProps = async ({ ctx, Component }) => {
  let user = null;
  const token = cookies(ctx).token;
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  try {
    const response = await post("auth", { headers: { token } });
    user = response.success ? response.user : null;
  } catch (e) {
    // TODO: handle error
  }
  return {
    pageProps,
    user
  };
};
