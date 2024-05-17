import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const imageMap = {
  'background1.jpg': require('../assets/background1.jpg'),
  'fundoCinza.jpg': require('../assets/fundoCinza.jpg'),
  // Adicione todas as suas imagens aqui
};

export default TelaFundo = ({ children, caminho }) => {
  const image = imageMap[caminho];
  
  if (!image) {
    console.warn(`Image not found: ${caminho}`);
    return null;
  }

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});
