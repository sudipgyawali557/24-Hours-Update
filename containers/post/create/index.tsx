import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Create from "./child";
import { isString } from "lodash";
import React, { useMemo, useState, useEffect } from "react";
import { customToast } from "../../../helpers";
import { useRouter } from "next/router";
import { Post } from "../../../models/post/post";

const Index: React.FunctionComponent<Post> = (props: any) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        description: Yup.string().required("Description is required"),
        // attachment: Yup.mixed().test(
        //   '',
        //   'Attachment is required',
        //   (file) => file && [...file].length !== 0,
        // ),
        // thumbnail: Yup.mixed().test(
        //   '',
        //   'Thumbnail is required',
        //   (file) => file && [...file].length !== 0,
        // ),
    });
    const formOptions = {
        defaultValues: useMemo(() => {
            let newss = props.news;
            return newss;
        }, [props.id]),
        resolver: yupResolver(validationSchema),
    };

    const { register, handleSubmit, reset, formState, watch } =
        useForm<Post>(formOptions);
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
        props,
        edit: props.id ? true : false,
    };
    return <Create {...childProps} />;
};

export default Index;
