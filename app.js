import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import seta1 from './assets/seta.png'
import produto from './assets/produto2.png'
import makena1 from './assets/makena.png'
import barcode1 from './assets/barcode.png'
import casa1 from './assets/casa.png'
import dinheiro1 from './assets/dinheiro.png'
import qr1 from './assets/qr.png'
import cartao1 from './assets/cartao.png'






export default function App() {
  return (
    <View style={styles.container}>
     
      <Image source={seta1} style={styles.setaimg}/>
      <Image source={produto} style={styles.produtoimg}/>
      <Image source={makena1} style={styles.makenaimg}/>
      <Text style={styles.makenatxt}>Makena Baptista</Text>
      <View style={styles.novo}>
      <Text style={styles.novotxt}>Novo</Text>
      </View>
      <Text style={styles.biketxt}>Bicicleta</Text>
      <Text style={styles.rs}>120,00</Text>
      <Text style={styles.rs2}>R$</Text>
      <Text style={styles.bigtxt}>Cras congue cursus in tortor sagittis placerat{'\n'}nunc, tella arcu. Vitae ante leo eget maecenas{'\n'}urna mattis cursus. Maurius metus amet nibh{'\n'}mauris mauris accumsan,euismod.Aeneanleo{'\n'}nunc,purus iaculis in aliquam.</Text>
      <Text style={styles.trocatxt}>Aceita troca?</Text>
      <Text style={styles.simtxt}>Sim</Text>
      <Text style={styles.pagamentotxt}>Meios de pagamento</Text>
      <Text style={styles.pagamentotxt1}>Boleto</Text>
      <Text style={styles.pagamentotxt1}>Pix</Text>
      <Text style={styles.pagamentotxt1}>Dinheiro</Text>
      <Text style={styles.pagamentotxt1}>Cartão de crédito</Text>
      <Text style={styles.pagamentotxt1}>Depósito bancário</Text>
      <Image source={casa1} style={styles.casaimg}/>
      <Image source={barcode1} style={styles.barcodeimg}/>
      <Image source={qr1} style={styles.qrimg}/>
      <Image source={dinheiro1} style={styles.dinheiroimg}/>
      <Image source={cartao1} style={styles.cartaoimg}/>
      <Text style={styles.rs23}>120,00</Text>
      <Text style={styles.rs22}>R$</Text>

      <TouchableOpacity style={styles.btn}>
         <Text style={styles.entrartxt}> Entrar </Text>
          </TouchableOpacity>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#EDECEE'
  },

  setaimg:{
    position:'relative',
    top:10,
    marginBottom:10
  },
  produtoimg:{
    width:'100%',
    height:'30%',
  },
  makenaimg:{
    position:'relative',
    top:15,
    left:15,
  },
  makenatxt:{
    position:'relative',
    left:75,
    bottom:15,
    width:110,
  },
  novo:{
    backgroundColor:'#D9D8DA',
    width:50,
    borderRadius:20,
    position:'relative',
    left:27,
    top:25,
    padding:2,
  },
  novotxt:{
    color:'#3D3A40',
    position:'relative',
    left:7,
    
  },
  biketxt:{
    position:'relative',
    top:40,
    left:30,
    fontSize:20,
    fontWeight:'bolder',
    width:90,
  },
  rs:{
    position:'relative',
    top:18,
    left:250,
    fontWeight:'bolder',
    fontSize:18,
    color:'#6879C1',
    width:60,
  },
  rs2:{
    position:'relative',
    top:-1,
    left:225,
    fontWeight:'bolder',
    fontSize:15,
    color:'#6879C1',
    width:20,
  },
  bigtxt:{
    position:'relative',
    color:'#3D3A40',
    left:30,
    top:10,
    width:'90%',
  },
  trocatxt:{
    position:'relative',
    left:30,
    top:40,
    width:100,
    fontWeight:'bolder',
    color:'#3D3A40',
  },
  simtxt:{
    position:'relative',
    left:130,
    top:24,
    width:100,
  },
  pagamentotxt:{
    position:'relative',
    left:30,
    top:55,
    fontWeight:"bolder",
    color:'#3D3A40',
    marginBottom:10,
        width:150,


  },
  pagamentotxt1:{
     position:'relative',
    left:60,
    top:55,
    marginBottom:10,
    color:'#3D3A40',
        width:120,

  },
  barcodeimg:{
    position:'relative',
    left:29,
    bottom:104,
    width:20,
    height:25,
  },
  qrimg:{
    position:'relative',
    left:29,
    bottom:103,
    width:20,
    height:25,
  },
  dinheiroimg:{
    position:'relative',
    bottom:102,
    left:27,
    width:23,
    height:25,
  },
  cartaoimg:{
    position:'relative',
    bottom:76,
    left:24,
  },
  casaimg:{
    position:'relative',
    left:24,
  },
  rs22:{
    position:'relative',
    left:20,
    fontWeight:'bolder',
    fontSize:15,
    color:'#6879C1',
    width:20,
    bottom:59,

  },
  rs23:{
     position:'relative',
    bottom:40,
    left:45,
    fontWeight:'bolder',
    fontSize:18,
    color:'#6879C1',
    width:60,
  },
  btn:{
  position:'relative',
  bottom:90,
  left:150,
  width:170,
  height:40,
  backgroundColor:'#6879C1',
  borderRadius:8,
  paddingLeft:20,
  },
   entrartxt:{
    position:'relative',
    left:40,
    top:10,
    fontWeight:'bolder',
    color:'white',
    fontSize:16,
    width:60,
  },
});
