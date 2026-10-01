import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <View style={styles.container}>
      <CartInfo
        style={cartCardStyles.container}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
      <FlatList
        data={props}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            category={item.category}
            price={item.price}
            onAddToCart={() => {
              setCartCount(cartCount + 1);
              console.log('Preke prideta');
            }}
          />
        )}
      />
    </View>
  );
}

function ProductCard({ name, price, category, onAddToCart }) {
  return (
    <View style={productCardStyles.borderedContainer}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column', margin: 10, flex: 0.75 }}>
          <Text style={productCardStyles.firstLine}>
            {name} ({category})
          </Text>
          <Text style={productCardStyles.secondLine}>Kaina: {price}€</Text>
        </View>
        <Pressable style={productCardStyles.btn1} onPress={onAddToCart}>
          <Text style={productCardStyles.btn1Text}>Pridėti į krepšelį</Text>
        </Pressable>
      </View>
    </View>
  );
}

function CartInfo({ cartCount, setCartCount }) {
  return (
    <View style={cartCardStyles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column', margin: 10, flex: 0.75 }}>
          <Text style={cartCardStyles.firstLine}>Krepšelis</Text>
          <Text style={cartCardStyles.secondLine}>
            Bendra krepšelio suma: {cartCount}
          </Text>
        </View>
        <Pressable
          style={cartCardStyles.btn1}
          onPress={() => {
            setCartCount(0);
            console.log('Krepselis isvalytas');
          }}>
          <Text style={cartCardStyles.btn1Text}>Išvalyti krepšelį</Text>
        </Pressable>
      </View>
    </View>
  );
}

//-----------------------DATA---------------------------------
const props = [
  { id: '1', name: 'Duona', category: 'Kepiniai', price: 1.49 },
  { id: '2', name: 'Pienas', category: 'Pieno produktai', price: 1.29 },
  { id: '3', name: 'Sūris', category: 'Pieno produktai', price: 3.99 },
  { id: '4', name: 'Obuoliai', category: 'Vaisiai', price: 2.19 },
  { id: '5', name: 'Šalta kava', category: 'Gėrimai', price: 6.99 },
];


//-----------------------STILIAI---------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
});

const cartCardStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 2,
    margin: 4,
  },
  firstLine: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  secondLine: {
    fontSize: 15,
  },

  btn1: {
    height: 45,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'lightcoral',
    flex: 0.25,
    marginHorizontal: 20,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn1Text: {
    fontSize: 12,
    margin: 4,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

const productCardStyles = StyleSheet.create({
  borderedContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 2,
    borderWidth: 1,
    margin: 4,
    borderRadius: 5,
    borderColor: 'lightgray',
  },
  firstLine: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  secondLine: {
    fontSize: 20,
  },

  btn1: {
    height: 45,
    alignSelf: 'center',
    borderRadius: 5,
    backgroundColor: 'royalblue',
    borderWidth: 1,
    borderColor: 'royalblue',
    flex: 0.25,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn1Text: {
    fontSize: 12,
    margin: 1,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
