import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';
import Footer from './footer';

const videos = [
  {
    id: '1',
    icon: 'md-videocam',
    description: 'https://www.youtube.com/watch?v=Gi5QxKITke4',
    title: 'Exercícios Abdominais',
  },
  {
    id: '2',
    icon: 'md-videocam',
    description: 'https://www.youtube.com/watch?v=zt7PjySXWCw',
    title: 'Prancha Lateral',
  },
  {
    id: '3',
    icon: 'md-videocam',
    description: 'https://www.youtube.com/watch?v=mAJQBYPxH8M',
    title: 'Alongamento de Pernas',
  },
  {
    id: '4',
    icon: 'md-videocam',
    description: 'https://www.youtube.com/watch?v=6-uv-G3ABeI',
    title: 'Flexões',
  },
];

export default function Exercícios({ navigation }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (videoUrl) => {
    // Abre o link do vídeo
    Linking.openURL(videoUrl);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => selectVideo(item.description)}
      style={styles.videoContainer}>
      <Ionicons name={item.icon} size={50} color="#463529" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>Clique para assistir</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      {/* Conteúdo */}
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9E9D1',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#463529',
    padding: 24,
  },
  headerTextLeft: {
    color: '#F9E9D1',
    fontSize: 24,
    fontFamily: 'Inter-Regular',
    marginTop: 30,
  },
  headerIcon: {
    marginTop: 30,
  },
  list: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  videoContainer: {
    marginBottom: 40,
    alignItems: 'center',
    width: '100%',
    marginTop: 40,
  },
  title: {
    color: '#402D21',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  description: {
    color: '#8B4513',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#211A15',
    padding: 16,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerIcon: {
    marginHorizontal: 20,
  },
  footerText: {
    color: '#F9E9D1',
    marginTop: 0,
  },
});
