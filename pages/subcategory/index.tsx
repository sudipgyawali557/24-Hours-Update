import React, { useEffect, useState } from "react";
import Layout from "../../components/MainContainer/index";
import List from "../../containers/category/list/index";
import Create from "../../containers/subcategory/create/index";

const subcategory = [
    {
        name: "+2",
        category: "Education",
    },
    {
        name: "Election",
        category: "Politics",
    },
];

function Index(props: any) {
    const mainProps = {
        breadcrumb: ["Sub-Category"],
        component: Create,
        updateOnCreate: () => {},
        updateOnEdit: () => {},
    };

    const childProps = {
        data: subcategory,
        view: null,
        handleEdit: () => {},
        // omitHeaders: ["id", "created", "updated", "createdBy", "deletedAt"],
    };

    return (
        <Layout {...mainProps}>
            <List {...childProps} />
        </Layout>
    );
}
export default Index;
