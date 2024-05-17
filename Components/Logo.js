import { Image, StyleSheet } from 'react-native';

export default Logo = ()=>{
    return(
        <Image source={require('../assets/logo.png')} style={styles.logo} />
    );
}

const styles = StyleSheet.create({
    logo: {
      width: '70%',
      height: '70%', 
      marginTop: '-40%', 
      resizeMode: 'contain', 
    }
})