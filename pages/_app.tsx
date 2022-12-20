import Layout from "../components/Layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    let props = {
        newestOnTop: true,
        hideProgressBar: true,
        closeButton: false,
        bodyClassName: "toastBody",
        position: "top-right",
    };
    return (
        <>
            <Layout {...props}>
                <Component {...pageProps} />
            </Layout>
            <link
                href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
                rel="stylesheet"
            />
        </>
    );
}

export default MyApp;
