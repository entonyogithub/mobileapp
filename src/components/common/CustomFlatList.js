import React, { Component } from "react";
import { FlatList, Text, View, Image } from "react-native";
import { styles } from "../../styles";
import { t } from "../../config/Localization";
import { noItem } from "../../config/Enum";

export default class CustomFlatList extends Component {
  render() {
    const {
      ListHeaderComponent,
      ItemSeparatorComponent,
      keyExtractor,
      onRenderItem,
      onEndReached,
      refreshing,
      onRefresh,
      data,
      style
    } = this.props;
    return (
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        ListEmptyComponent={
          <View
            style={[
              styles.flexRowSpaceBetween,
              styles.justifyContentCenter,
              styles.alignItemsCenter,
              { height: "100%" }
            ]}
          >
            <Text style={styles.notItemFound}>No Item Found</Text>
          </View>
        }
        ListHeaderComponent={ListHeaderComponent}
        style={[style]}
        keyExtractor={keyExtractor}
        data={data}
        renderItem={onRenderItem}
        onEndReachedThreshold={0.01}
        initialNumToRender={10}
        onEndReached={onEndReached}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    );
  }
}
export { CustomFlatList };
