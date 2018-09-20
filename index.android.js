import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

class app03 extends Component {

  constructor(props) {
    super(props);

    this.state = { choiseUser : '', choisePC: '', result: ''};
  }

  funcEscolha(choiseUser) {    
    //Escolha do Sistema
    const aleatoryNumber = Math.floor( Math.random() * 3 );
    let choisePC = '';

    switch (aleatoryNumber) {
      case 0 : choisePC = 'pedra'; break;
      case 1 : choisePC = 'papel'; break;
      case 2 : choisePC = 'tesoura'; break;
      default: choisePC = '';
    }

    //Verificar Vencedor 
    let result = '';

    if(choisePC === 'pedra') {
      if(choiseUser === 'pedra') {
          result = 'empate';
      }
      if (choiseUser === 'papel') {
          result = 'Você Venceu';
      }  
      if (choiseUser === 'tesoura') {
          result = 'Você Perdeu';
      }
    };

    if(choisePC === 'papel'){
      if(choiseUser === 'papel') {
          result = 'empate';
      }
      if (choiseUser === 'tesoura') {
          result = 'Você Venceu';
      }  
      if (choiseUser === 'pedra') {
          result = 'Você Perdeu';
      }
    };

    if(choisePC === 'tesoura'){
      if(choiseUser === 'tesoura') {
          result = 'empate';
      }
      if (choiseUser === 'pedra') {
          result = 'Você Venceu';

      }  
      if (choiseUser === 'papel') {
          result = 'Você Perdeu';
      }
    };

    this.setState( { choiseUser, choisePC, result });
  }
  
  render() {
    return (
      <View>

        <Topo />

        <View style = {styles.painelAcoes}>   

          <View style={styles.btnEscolha} >  
            <Button title='pedra' onPress={() => {this.funcEscolha('pedra'); }} />
           </View>   
           <View style={styles.btnEscolha} >  
            <Button title='tesoura' onPress={() => {this.funcEscolha('tesoura'); }} />
          </View>  
          <View style={styles.btnEscolha} >  
            <Button title='papel' onPress={() => {this.funcEscolha('papel'); }} />
          </View>  

        </View>

        <View style={styles.palco}>  
          <Text style={styles.txtResultado}>{ this.state.result}</Text>
          <Icone escolha={this.state.choisePC} jogador='Computador' />
          <Icone escolha={this.state.choiseUser} jogador='Você' />
        </View>         

      </View>
    );
  }
};


const styles = StyleSheet.create({
  btnEscolha:{
    width: 90
  },
  painelAcoes:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  palco:{
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado:{
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});

AppRegistry.registerComponent('app03', () => app03);
