'use client';
import {RootProvider} from 'fumadocs-ui/provider';
import SearchDialog from '@/components/search';
import type {ReactNode} from 'react';
import {Banner} from "fumadocs-ui/components/banner";
import Link from "next/link";

export function Provider({children}: { children: ReactNode }) {
    return (
        <>
            <Banner variant="rainbow" id="pedro-v2-archive">
                <span className="prose">
                    Unofficial Pedro Pathing v2.1.2 documentation archive (pre-v3 snapshot).{' '}
                    <Link className="link prose" href="https://pedropathing.com/docs">Current official documentation</Link>
                </span>
            </Banner>
            <RootProvider theme={{defaultTheme: 'dark'}} search={{SearchDialog}}>{children}</RootProvider>
        </>
    )

}