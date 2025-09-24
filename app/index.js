import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const router = useRouter();

  const handleNavigate = () => {
    if (name.trim() && avatarUrl.trim()) {
      router.push({
        pathname: '/perfil',
        params: { name, avatarUrl },
      });
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mini Perfil</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="URL do Avatar"
        value={avatarUrl}
        onChangeText={setAvatarUrl}
      />
      <Button title="Ir para Perfil" onPress={handleNavigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});