import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Create from "./child";
import React, { useMemo, useState, useEffect } from "react";
import { isString } from "lodash";
import { customToast } from "../../../helpers";
import { decodeToken } from "../../../helpers/decodeToken";
import { isFileEmpty } from "../../../helpers/utils";
import { Category, CreateCategory } from "../../../models/category/category";
import {
    CreateSubCategory,
    SubCategory,
} from "../../../models/subcategory/subcategory";

const Index: React.FunctionComponent<CreateSubCategory> = (props) => {
    const [loading, setLoading] = useState(false);

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        category: Yup.string().required("Category is required"),
    });

    const formOptions = {
        defaultValues: useMemo(() => props.items, [props.items.id]),
        resolver: yupResolver(validationSchema),
    };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } =
        useForm<SubCategory>(formOptions);
    const { errors } = formState;

    const next = () => {
        setLoading(false);
    };

    const childProps = {
        handleSubmit,
        register,
        reset,
        errors,
        loading,
        edit: props.items.id ? true : false,
    };
    // debugger
    return <Create {...childProps} />;
};

export default Index;
