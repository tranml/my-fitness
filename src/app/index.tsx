import { Link } from 'expo-router';
import { View, Text } from '@/components/general/Themed';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 30 }}>Title</Text>

      <Link href="/workout/current">
        <Text>Resume Current Workout</Text>
      </Link>
      <Link href="/workout/123">
        <Text>Open Workout with id 123</Text>
      </Link>

      <Text>Home screen</Text>
    </View>
  );
}
