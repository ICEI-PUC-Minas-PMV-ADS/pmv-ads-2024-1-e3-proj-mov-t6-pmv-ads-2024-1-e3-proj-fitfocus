import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const AlturaStatusBar = StatusBar.currentHeight;

export default function Homepage() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [telaAtual, setTelaAtual] = useState('Home');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton
          icon="menu"
          size={28}
          color="#463529"
          onPress={toggleMenu}
          style={styles.menuIcon}
        />
        <Ionicons
          name="person"
          size={28}
          color="#463529"
          style={styles.profileIcon}
        />
      </View>
      <View style={styles.content}>

      </View>
      {menuAberto && (
        <View style={styles.menuLateral}>
          <View style={styles.menuHeader}>
            <IconButton
              icon="menu"
              size={28}
              color="#463529"
              onPress={toggleMenu}
              style={styles.menuIcon}
            />
          </View>
          <Text style={styles.menuTitle}>FitFocus</Text>
          <TouchableOpacity onPress={() => console.log('Navegar para IMC')}>
            <Text style={styles.menuLink}>.IMC</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.footerItem,
            telaAtual === 'Home' && styles.footerItemSelected,
          ]}
          onPress={() => setTelaAtual('Home')}>
          <View style={styles.footerIconContainer}>
            <View style={styles.footerIconWrapper}>
              <Ionicons name="home" size={28} color="white" style={styles.footerIcon} />
            </View>
          </View>
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="fast-food" size={28} color="white" />
          <Text style={styles.footerText}>Receitas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="newspaper" size={28} color="white" />
          <Text style={styles.footerText}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="search" size={28} color="white" />
          <Text style={styles.footerText}>Pesquisa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="barbell" size={28} color="white" />
          <Text style={styles.footerText}>Exercícios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9E9D1',
    paddingTop: AlturaStatusBar + 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuLateral: {
    position: 'absolute',
    backgroundColor: '#DAAC7C',
    width: '75%',
    height: '95%',
    top: 0,
    left: 0,
    zIndex: 1,
    elevation: 2,
    padding: 10,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#491615',
    textAlign: 'center',
  },
  menuLink: {
    fontSize: 18,
    color: '#4E3D32',
    textDecorationLine: 'underline',
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 20,
  },
  fitFocus: {
    color: '#491615',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#211A15',
    padding: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
  },
  profileIcon: {
    marginRight: 10,
  },
  menuIcon: {
    marginTop: 30,
  },
  footerIconContainer: {
    alignItems: 'center',
  },
  footerIconWrapper: {
    backgroundColor: '#DAAC7C',
    borderRadius: 20,
    padding: 8,
  },

});
