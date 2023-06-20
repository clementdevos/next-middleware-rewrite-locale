import React, {useMemo} from "react";
import {useRouter} from "next/router";
import Link from "next/link";

export const AppLink: React.FC<React.ComponentProps<typeof Link>> = React.forwardRef(
    ({href, legacyBehavior = true, ...rest}, ref) => {
        const {locale: routerLocale} = useRouter();
        const targetLocale = (routerLocale !== rest.locale ? rest.locale : routerLocale) ?? routerLocale;
        const localizedAppHref = useMemo(
            () => {
                if (targetLocale !== 'en') {
                    return `/app/${targetLocale}${href}`;
                }
                return `/app${href}`;
            }, [targetLocale, href]);

        return <Link ref={ref} {...rest} locale={false} href={localizedAppHref}/>;
    }
);
