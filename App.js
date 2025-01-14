import React from 'react';
import { View, Text, FlatList, SectionList, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const App = () => {
  // Danh sách sản phẩm (FlatList)
  const products = [
    { id: '1', name: 'Product A', price: '10.00' },
    { id: '2', name: 'Product B', price: '15.00' },
    { id: '3', name: 'Product C', price: '20.00' },
  ];

  // Danh sách nhóm sản phẩm (SectionList)
  const groupedProducts = [
    { title: 'Category A', data: ['Product A1', 'Product A2', 'Product A3'] },
    { title: 'Category B', data: ['Product B1', 'Product B2'] },
    { title: 'Category C', data: ['Product C1', 'Product C2', 'Product C3'] },
  ];

  // Xử lý khi bấm vào sản phẩm
  const handlePress = (productName) => {
    Alert.alert('Product Selected', productName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>FlatList: Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.name)}>
            <View style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.sectionTitle}>SectionList: Grouped Products</Text>
      <SectionList
        sections={groupedProducts}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, backgroundColor: '#FFFFF' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10, color: '#333' },
  item: { padding: 15, backgroundColor: '#f9f9f9', marginBottom: 5, borderRadius: 20 },
  name: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 14, color: 'gray' },
  header: { fontSize: 18, fontWeight: 'bold', backgroundColor: '#e0e0e0', padding: 5 },
  itemText: { padding: 10, fontSize: 16, borderBottomWidth: 0.5, borderColor: '#ccc' },
});

export default App;
