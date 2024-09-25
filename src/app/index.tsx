import { Link } from 'expo-router';
import { View, Text } from '@/components/general/Themed';
import CustomButton from '@/components/general/CustomButton';
import Card from '@/components/general/Card';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        gap: 10,
        padding: 10,
        backgroundColor: 'transparent',
      }}
    >
      <Link href="/workout/current" asChild>
        <CustomButton title="Resume workout" />
      </Link>

      <Card title="Morning workout" href="/workout/123">
        <Text>Hello</Text>
      </Card>
    </View>
  );
}
