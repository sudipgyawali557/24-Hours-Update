import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import SlidingPane from "../components/utils/slidingPane.utils";
import Modal from "../components/utils/modal.utils";
import SlidingPaneWrapper from "../components/SlidingPane/slidingPane-wrapper.component";
import ModalWrapper from "../components/Modal/modelWrapper.component";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import AdminLayout from "../components/AdminLayout/AdminLayout";
let globalSlidingPaneRef: any;
let globalModalRef: any;
function MyApp({ Component, pageProps }) {
    let props = {
        newestOnTop: true,
        hideProgressBar: true,
        closeButton: false,
        bodyClassName: "toastBody",
        position: "top-right",
    };
    useEffect(() => {
        SlidingPane.register(globalSlidingPaneRef);
        Modal.registerModal(globalModalRef);
    }, []);
    const router = useRouter();

    return (
        <>
            {router.pathname == "/admin" ||
            router.pathname == "/category" ||
            router.pathname == "/subcategory" ||
            router.pathname == "/post" ? (
                <AdminLayout {...props}>
                    <Component {...pageProps} />
                </AdminLayout>
            ) : (
                <Layout {...props}>
                    <Component {...pageProps} />
                </Layout>
            )}
            <SlidingPaneWrapper ref={(ref) => (globalSlidingPaneRef = ref)} />
            <ModalWrapper ref={(ref) => (globalModalRef = ref)} />
            <ToastContainer
                autoClose={5000}
                hideProgressBar={true}
                bodyClassName={"toastBody"}
                position={"top-right"}
            />

            <link
                href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
                rel="stylesheet"
            />
        </>
    );
}

export default MyApp;
