import { FC } from "react";
import Head from "next/head";
import { Navbar } from '../ui';


interface Props {
    title?: string;
    children: React.ReactNode
}

export const Layout: FC<Props>= ({ children, title }) => {
  return (
        <>
            <Head>
                <title>{ title || 'PokemonApp' }</title>
                <meta name="author" content="arabath"/>
                <meta name="description" content="Información sobre el Pokemon"/>
                <meta name="keywords" content="pokemon, pokedex"/>
            </Head>

           <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                { children }
            </main>

        </>
  )
};
