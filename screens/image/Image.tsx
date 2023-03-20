import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { colors } from "../../constants/colors";

const imageUrl =
  "https://images.pexels.com/photos/255419/pexels-photo-255419.jpeg?cs=srgb&dl=pexels-pixabay-255419.jpg&fm=jpg";

export const ImageScreen: React.FC = () => {
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    Image.getSize(imageUrl, (width, height) => {
      setImageDimensions({ width, height });
    });
  }, []);

  return (
    <View style={styles.container}>
      {imageDimensions.width > 0 && (
        <Image
          style={{
            width: "100%",
            aspectRatio: imageDimensions.width / imageDimensions.height,
          }}
          source={{ uri: imageUrl }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: colors.primaryDark,
  },
  text: {
    color: colors.secondary,
  },
  bold: {
    fontWeight: "bold",
  },
  logo: {
    width: "100%",
    aspectRatio: 1,
  },
});
