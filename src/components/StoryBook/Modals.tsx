import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import CommonStyles from '../../constants/commonStyles';
import { HEIGHT, LightColors, scalePx, verticalScalePx } from '../../constants';
import { Button, Text } from '../index';
import { useTheme } from '../../context/ThemeContext';
import Ionicons from '@react-native-vector-icons/ionicons';

const Modals = () => {
  const { theme, themeType } = useTheme();
  const styles = createStyles(theme.colors);

  const [centerModal, setCenterModal] = useState(false);
  const [bottomModal, setBottomModal] = useState(false);
  const [fullModal, setFullModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  return (
    <View style={CommonStyles.flex1}>
      <Button
        label="Open Center Modal"
        mode="contained"
        onPress={() => {
          setCenterModal(true);
        }}
        buttonStyle={CommonStyles.flex1}
      />
      <Button
        label="Open Bottom Modal"
        mode="contained"
        onPress={() => {
          setBottomModal(true);
        }}
        buttonStyle={CommonStyles.flex1}
      />
      <Button
        label="Open Full-Screen Modal"
        mode="contained"
        onPress={() => {
          setFullModal(true);
        }}
        buttonStyle={CommonStyles.flex1}
      />
      <Button
        label="Open Logout Modal"
        mode="contained"
        onPress={() => {
          setLogoutModal(true);
        }}
        buttonStyle={CommonStyles.flex1}
      />
      <Button
        label="Open Info Modal"
        mode="contained"
        onPress={() => {
          setInfoModal(true);
        }}
        buttonStyle={CommonStyles.flex1}
      />

      {/* Center Modal */}
      <Modal
        isVisible={centerModal}
        onBackdropPress={() => setCenterModal(false)}
        animationIn="zoomIn"
        animationOut="zoomOut"
        backdropColor={theme.colors.black}
        backdropOpacity={themeType === 'dark' ? 0.1 : 0.7}
      >
        <View style={styles.centerModal}>
          <Text mode="titleSmall" style={styles.modalText}>
            This is a Center Modal
          </Text>
        </View>
      </Modal>

      {/* Bottom Modal */}
      <Modal
        isVisible={bottomModal}
        onBackdropPress={() => setBottomModal(false)}
        style={styles.bottomModalContainer}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropColor={theme.colors.black}
        backdropOpacity={themeType === 'dark' ? 0.1 : 0.7}
      >
        <View style={styles.bottomModal}>
          <Text mode="titleSmall" style={styles.modalText}>
            This is a Bottom Sheet Modal
          </Text>
        </View>
      </Modal>

      {/* Full Screen Modal */}
      <Modal
        isVisible={fullModal}
        onBackdropPress={() => setFullModal(false)}
        style={styles.fullModalContainer}
        animationIn="fadeIn"
        animationOut="fadeOut"
        backdropColor={theme.colors.black}
        backdropOpacity={themeType === 'dark' ? 0.1 : 0.7}
      >
        <View style={styles.fullModal}>
          <Text
            mode="titleMedium"
            style={styles.modalText}
            onPress={() => {
              setFullModal(false);
            }}
          >
            This is a Full-Screen Modal
          </Text>
        </View>
      </Modal>

      {/* Logout Modal */}
      <Modal
        isVisible={logoutModal}
        onBackdropPress={() => setLogoutModal(false)}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropColor={theme.colors.black}
        backdropOpacity={themeType === 'dark' ? 0.1 : 0.7}
      >
        <View style={styles.centerLogout}>
          <Text mode="titleMedium" family="medium" style={styles.modalText}>
            Are you sure you want to log out?
          </Text>
          <View style={[CommonStyles.row, styles.cancelLogoutView]}>
            <Button
              label="Cancel"
              mode="contained"
              onPress={() => setLogoutModal(false)}
              buttonStyle={CommonStyles.flex1}
            />
            <Button
              label="Logout"
              mode="contained"
              onPress={() => setLogoutModal(false)}
              buttonStyle={CommonStyles.flex1}
            />
          </View>
        </View>
      </Modal>

      {/* Info Modal */}
      <Modal
        isVisible={infoModal}
        onBackdropPress={() => setInfoModal(false)}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropColor={theme.colors.black}
        backdropOpacity={themeType === 'dark' ? 0.1 : 0.7}
      >
        <View style={styles.centerInfo}>
          <TouchableOpacity
            hitSlop={CommonStyles.hitSlop}
            onPress={() => setInfoModal(false)}
            activeOpacity={0.7}
            style={styles.closeIcon}
          >
            <Ionicons name="close" size={20} color={theme.colors.black} />
          </TouchableOpacity>
          <Text mode="titleSemiLarge" family="medium" style={styles.modalText}>
            About
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.modalText}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
              dignissimos eos aut magni, sapiente porro ratione esse consectetur
              reiciendis eum dolor dicta vitae quidem amet iure modi minus
              quisquam cupiditate rerum doloribus. Nostrum voluptatum odit
              consequatur quaerat nesciunt, atque, labore accusamus culpa dolor
              modi itaque adipisci, eveniet error! Error, delectus! Facilis
              dicta quaerat aut illo provident, expedita officia blanditiis, nam
              tenetur cum maxime doloremque corporis! Delectus quam
              consequuntur, tempore ratione qui labore corporis! Fugiat
              accusamus maiores nihil. {'\n'}
              {'\n'}
              Soluta sed aspernatur nam sequi nemo praesentium eveniet error
              libero consequuntur, voluptatum nisi ipsam et obcaecati harum
              facere nobis ea, nesciunt quod commodi tempore minus debitis.
              Eveniet, inventore. Voluptas omnis sed praesentium esse in optio
              nam, neque, deserunt odio soluta officiis suscipit laborum vel
              molestiae! Nesciunt fugit quos id omnis perspiciatis? accusamus
              maiores nihil. {'\n'}
              {'\n'}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
              ullam nemo at tempore, natus doloribus nihil!
            </Text>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default Modals;

const createStyles = (colors: LightColors) =>
  StyleSheet.create({
    cancelLogoutView: { gap: scalePx(20), marginTop: verticalScalePx(8) },
    closeIcon: { alignSelf: 'flex-end' },
    modalText: {
      textAlign: 'center',
    },
    centerModal: {
      backgroundColor: colors.white,
      padding: scalePx(20),
      borderRadius: scalePx(12),
      alignItems: 'center',
    },
    centerLogout: {
      backgroundColor: colors.white,
      padding: scalePx(20),
      borderRadius: scalePx(12),
    },
    centerInfo: {
      backgroundColor: colors.white,
      padding: scalePx(20),
      borderRadius: scalePx(12),
      height: HEIGHT * 0.7,
    },
    bottomModalContainer: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    bottomModal: {
      backgroundColor: colors.white,
      padding: scalePx(20),
      borderTopLeftRadius: scalePx(16),
      borderTopRightRadius: scalePx(16),
    },
    fullModalContainer: {
      margin: 0,
    },
    fullModal: {
      flex: 1,
      backgroundColor: colors.white,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
