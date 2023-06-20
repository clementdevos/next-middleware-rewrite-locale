import {GetStaticProps, InferGetStaticPropsType} from "next";
import {Page} from "../../../../components/Page";

export default function Component({
                                      locale,
                                  }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <Page serverLocale={locale}/>
}

export const getStaticProps: GetStaticProps<{ locale: string }> = async (context) => {
    const locale = context.locale ?? ""
    return {props: {locale}}
}