import {useRouter} from "next/router";

export const Page = ({serverLocale}: { serverLocale: string }) => {
    const {locale, asPath} = useRouter()
    return (<div style={{display: 'flex', flexDirection: 'column'}}>
        <span>Path name : {asPath}</span>
        <span>Server locale : {serverLocale}</span>
        <span>Client Router locale : {locale}</span>
    </div>)
}