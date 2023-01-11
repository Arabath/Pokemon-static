import { NextPage, GetStaticProps } from 'next';


import { Layout } from '../components/layouts';
import pokeApi from '../api/pokeApi';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';
import { PokemonCard } from '../components/pokemon';
import { Grid } from '@nextui-org/react';


interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> =({pokemons})=> {
  console.log(pokemons)
  return (

    <Layout title='Listado de Pokemons'>

      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map( ( pokemon ) => (
            <PokemonCard key={ pokemon.id } pokemon={pokemon} />
          ))
        }
      </Grid.Container>

    </Layout>
  
  )
}

//getStaticProps solo se ejecuta del lado del servidor y en buildtime. NO puede usarse fuera de Pages
export const getStaticProps: GetStaticProps = async(ctx) => {

  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  console.log(data)
  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }) )

  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg

  return {
    props:{
      pokemons
    }
  }
}

export default Home