import { Spacer, Text, useTheme, Image } from '@nextui-org/react'
import React from 'react'

export const Navbar = () => {

    const { theme } = useTheme()

  return (
    <div style={{
        display: 'flex',
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor: theme?.colors.gray900.value
    }}>

        <Image 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/132.png"
            alt="icono de la app"
            width={70}
            height={70}
        />

        <Text color='white' h2>P</Text>
        <Text color='white' h3>okemon</Text>
        
        <Spacer css={{ flex: 1 }} />
        <Text color='white'>Favoritos</Text>
    </div>
  )
}
