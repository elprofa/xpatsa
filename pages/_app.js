import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../containers/Layout";
import withData from "../lib/withData";

import NProgress from 'nprogress';
import Router from "next/router";
//la barre de chargement
Router.events.on('routeChangeStart',()=>NProgress.start());
Router.events.on('routeChangeComplete',()=>NProgress.done());
Router.events.on('routeChangeError',()=>NProgress.done());



//TODO:Swap with our own
import 'nprogress/nprogress.css';
import '../public/styles/nprogress.css';

 function App({ Component, pageProps,apollo}) {
  // const apolloClient = useApollo(pageProps.initialApolloState);
  //console.log(apollo);
  
  return (
    <ApolloProvider client={apollo}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

App.getInitialProps=async function ({Component,ctx}){

  let pageProps={};
  if(Component.getInitialProps){
    pageProps=await Component.getInitialProps(ctx);
  }

  pageProps.query=ctx.query;

  return {pageProps};

}
export default withData(App);
