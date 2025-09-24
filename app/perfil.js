import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function PerfilScreen() {
  const { name, avatarUrl } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      {avatarUrl ? (
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      ) : (
        <Text style={styles.fallbackText}>Sem imagem</Text>
      )}
      <Text style={styles.name}>{name || 'Nome não informado'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  fallbackText: {
    fontSize: 16,
    color: '#999',
    marginBottom: 20,
  },
});