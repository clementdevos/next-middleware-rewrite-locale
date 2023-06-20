import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {useRouter} from "next/router";
import {useMemo} from "react";
import Link from "next/link";
import {AppLink} from "../../components/App_link";

const LocaleSwitcher = () => {
    const {locale, asPath} = useRouter();
    // const serverUrl = useSelector((state) => state.firebaseServer.from);
    const newLocale = useMemo(() => (locale === 'fr' ? 'en' : 'fr'), [locale]);
    // const location = useLocation();
    // const href = useMemo(() => buildHref(locale, serverUrl), [locale, location]);
    // const dispatch = useDispatch();
    // const uid = useUserUid();
    const targetPath = useMemo(() => {
        if (asPath.startsWith('/app')) {
            return asPath.toString().replace(`/app/${locale}`, '/').toString().replace(`/app/`, '/');
        }
        return asPath;
    }, [asPath, locale]);
    // if (!data) {
    //     return null;
    // }
    const LinkComponent = targetPath === '/' ? Link : AppLink;

    return (
        <LinkComponent locale={newLocale} href={targetPath}>
            Change to {newLocale}

        </LinkComponent>
    );
}
export default function App({Component, pageProps}: AppProps) {
    return <div>
        <div style={{padding : 8, display:"flex", justifyContent:'flex-end' }}>
        <LocaleSwitcher/>
        </div>
        <Component {...pageProps} />
    </div>
}
