import React from "react";
import { NextPageContext } from "next"
import Head from 'next/head'
import Component from "../components/index";

type Props = {
    title: string
}

const app = ({ title }: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Component />
        </>
    )
}

app.getInitialProps = async (ctx: NextPageContext): Promise<Props> => {
    return {
        title: 'Hello World!',
    }
}

export default app
