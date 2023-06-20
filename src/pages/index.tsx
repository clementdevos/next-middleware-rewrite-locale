import Link from "next/link";
import {AppLink} from "../../components/App_link";
import {Page} from "../../components/Page";
import {GetStaticProps} from "next";


export default function Home({locale}: { locale: string }) {
    return (
        <div style={{display: "flex",flexDirection: 'column', alignItems:'flex-start'}}>
            <h2>
                Home !
            </h2>
            <AppLink href="/resource" style={{padding: 8, backgroundColor: 'lightblue',margin: 8}}>
                Go to resource page
            </AppLink>

            <Page serverLocale={locale}/>
        </div>
    )
}
export const getStaticProps: GetStaticProps<{ locale: string }> = async (context) => {
    const locale = context.locale ?? ""
    return {props: {locale}}
}