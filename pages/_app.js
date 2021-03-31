import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../containers/Layout";
import withData from "../lib/withData";

 function App({ Component, pageProps,apollo}) {
  // const apolloClient = useApollo(pageProps.initialApolloState);
  console.log(apollo);
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
