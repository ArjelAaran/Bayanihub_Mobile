import { useRouter } from "expo-router";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "@/src/theme";

const { width } = Dimensions.get("window");

export function LandingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topCurvedSection}>
          <View style={styles.headerPillContainer}>
            <View style={styles.logoPill}>
              <View style={styles.logoRingWrapper}>
                <View style={styles.logoRingInner}>
                  <Image source={require("../../assets/logo.png")} style={styles.logoImage} resizeMode="contain" />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.contentSection}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.brandText}>BayaniHub</Text>
          <Text style={styles.descriptionText}>
            BayaniHub is a unified resource management engine designed to empower modern-day
            heroes. By managing both manpower and material aid in one place, we help disaster
            response teams forecast needs, avoid bottlenecks, and deploy aid efficiently.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => router.push("/login")}
            >
              <Text style={styles.primaryButtonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => router.push("/signup")}
            >
              <Text style={styles.secondaryButtonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomArcBackgroundContainer}>
            <Image source={require("../../assets/bg.png")} style={styles.bottomArcImage} resizeMode="cover" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  topCurvedSection: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  headerPillContainer: {
    height: 140,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logoPill: {
    width: width * 0.75,
    height: 110,
    borderRadius: 30,
    backgroundColor: "#426FB0", 
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
  },
  logoRingWrapper: {
    backgroundColor: COLORS.white,
    padding: 8,
    borderRadius: 24,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  logoRingInner: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#5C6DCB",
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: 35,
    height: 35,
  },
  contentSection: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 32,
    marginTop: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "300",
    color: "#333",
    marginBottom: 6,
  },
  brandText: {
    fontSize: 42,
    fontWeight: "600",
    color: COLORS.primaryDark,
    marginBottom: 20,
    letterSpacing: -0.5,
  },
  descriptionText: {
    fontSize: 14,
    color: COLORS.textSoft,
    textAlign: "center",
    lineHeight: 22,
    fontStyle: "italic",
    marginBottom: 40,
  },
  buttonContainer: {
    width: "100%",
    gap: 16,
  },
  primaryButton: {
    width: "100%",
    height: 52,
    borderRadius: 14,
    backgroundColor: COLORS.primaryDark,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  primaryButtonText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: "700",
  },
  secondaryButton: {
    width: "100%",
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#4A4A4A",
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryButtonText: {
    color: "#4A4A4A",
    fontSize: 17,
    fontWeight: "700",
  },
  bottomArcBackgroundContainer: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 180,
    borderTopRightRadius: 180,
    transform: [{ scaleX: 1.5 }],
    alignSelf: "center",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  bottomArcImage: {
    width: "100%",
    height: "100%",
    transform: [{ scaleX: 1 / 1.5 }], 
    opacity: 0.9,
  },
});
