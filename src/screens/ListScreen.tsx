import { FlatList, Text, View } from 'react-native';
import React from 'react';

const FLAT_DATA = Array.from({ length: 100000 }, (_, index) => ({
  id: index.toString(),
  title: `Items - ${index + 1}`,
}));

const ListScreen = () => {
  const handleitem = ({ item }: { item: { id: string; title: string } }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <Text>Lists</Text>
      <View>
        <FlatList
          keyExtractor={item => item.id}
          data={FLAT_DATA}
          renderItem={handleitem}
        />
      </View>
    </View>
  );
};

export default ListScreen;

// const styles = StyleSheet.create({});
