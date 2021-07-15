import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import {SIZES, FONTS, COLORS} from '../../../constants';

export const CartItem = ({navigation, item}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: item.product.image}}
            resizeMode="cover"
            style={styles.image}
          />
        </View>
        <View style={styles.dataContainer}>
          {/* Product and Item Details like Brand Name, Product Name, category name, seller name, variants etc. */}

          <Text style={styles.brandName}>{item.product.brand}</Text>
          <Text numberOfLines={4} ellipsizeMode="clip" style={styles.itemName}>
            {item.product.name}
          </Text>
          <Text style={styles.categoryName}>{item.product.category}</Text>
          <Text style={{...FONTS.semiH5, fontStyle: 'italic'}}>
            by {item.product.seller}
          </Text>

          {/* Conditinally shown data */}
          <View style={styles.variantsContainer}>
            {item.size ? (
              <Text style={{...FONTS.body4}}>Size: {item.size}</Text>
            ) : null}

            {item.color ? (
              <Text style={{...FONTS.body4}}>Color: {item.color}</Text>
            ) : null}
          </View>

          {/* Item quanity and buttons */}
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity style={styles.minusButton}>
              <Text style={{...FONTS.h2, color: COLORS.white}}>-</Text>
            </TouchableOpacity>
            <View style={styles.quantity}>
              <Text style={{...FONTS.h3, color: COLORS.gray}}>
                {item.quantity}
              </Text>
            </View>
            <TouchableOpacity style={styles.plusButton}>
              <Text style={{...FONTS.h2, color: COLORS.white}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Remove and Save fro later buttons */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              marginRight: SIZES.padding,
            },
          ]}>
          <Text style={{...FONTS.semiH5, color: COLORS.gray200}}>
            SAVE FOR LATER
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.gray100,
            height: SIZES.smallButton,
          }}></View>
        <TouchableOpacity style={styles.button}>
          <Text style={{...FONTS.semiH5, color: COLORS.red400}}>
            REMOVE FROM CART
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray100,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageContainer: {
    padding: SIZES.padding,
  },
  image: {
    height: 200,
    width: SIZES.width / 3,
    borderRadius: SIZES.radiusS,
  },
  dataContainer: {
    padding: SIZES.padding,
    paddingLeft: 0,
    height: '100%',
    width: SIZES.width / 2 + SIZES.padding,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    //backgroundColor: COLORS.gray100,
  },
  brandName: {
    ...FONTS.h4,
  },
  itemName: {
    ...FONTS.body3,
    //maxWidth: SIZES.width / 2 + SIZES.padding,
  },
  categoryName: {
    ...FONTS.semiH5,
    color: COLORS.gray200,
  },
  variantsContainer: {
    flexDirection: 'row',
    marginVertical: SIZES.base,
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radiusS,
  },
  button: {
    // borderWidth: 1,
    // borderRadius: 5,
    // borderColor: COLORS.gray200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.padding,
  },
  minusButton: {
    height: SIZES.smallButton,
    width: SIZES.smallButton,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.gray,
    borderTopLeftRadius: SIZES.base,
    borderBottomLeftRadius: SIZES.base,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  plusButton: {
    height: SIZES.smallButton,
    width: SIZES.smallButton,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.gray,
    borderTopRightRadius: SIZES.base,
    borderBottomRightRadius: SIZES.base,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  quantity: {
    height: SIZES.smallButton,
    width: SIZES.smallButton,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.gray,
  },
});
