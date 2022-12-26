import React, { useEffect, useState } from "react";
import Layout from "../../components/MainContainer/index";
import List from "../../containers/category/list/index";
import Create from "../../containers/category/create/index";
import { Category } from "../../models/category/category";
import { categoryService } from "../../service";

const category = [
    {
        name: "Education",
    },
    {
        name: "Politics",
    },
];

function Index(props: any) {
    const [pagination, setPagination] = useState({
        TAKE: 10,
        SKIP: 0,
        sort: "DESC",
    });
    const [category, setCategory] = useState<Array<Category>>([]);
    useEffect(() => {
        categoryService.getAll(pagination).then((data) => {
            setCategory(data.data);
        });
    }, [pagination]);
    console.log(category, "category");
    const mainProps = {
        breadcrumb: ["Category"],
        component: Create,
        updateOnCreate: () => {},
        updateOnEdit: () => {},
    };

    const childProps = {
        data: category,
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
