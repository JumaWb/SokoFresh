import MaskedView from '@react-native-masked-view/masked-view';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
    Animated,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function LoginScreen() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [isSignUp, setIsSignUp] = useState(false);
  const [role, setRole] = useState('Farmer');

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleLogin = () => {
    router.push('/home');
  };

  const handleToggle = () => {
    setIsSignUp(prev => !prev);
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://plus.unsplash.com/premium_photo-1700695638084-5f46e469e223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFybSUyMHByb2R1Y2V8ZW58MHx8MHx8fDA%3D',
      }}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.innerContainer}
        >
          <View style={styles.loginBox}>
            {/* Gradient Title */}
            <Animated.View style={{ opacity: fadeAnim }}>
              <MaskedView
                maskElement={<Text style={styles.title}>{isSignUp ? 'Create an Account' : 'Welcome to SokoFresh'}</Text>}
              >
                <LinearGradient
                  colors={['#34A853', '#FDD835']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text style={[styles.title, { opacity: 0 }]}>
                    {isSignUp ? 'Create an Account' : 'Welcome to SokoFresh'}
                  </Text>
                </LinearGradient>
              </MaskedView>
            </Animated.View>

            {/* Sign Up Form */}
            {isSignUp && (
              <>
                <TextInput
                  placeholder="Full Name"
                  placeholderTextColor="#bbb"
                  style={styles.input}
                />
              </>
            )}

            {/* Shared Inputs */}
            <TextInput
              placeholder="Phone Number"
              placeholderTextColor="#bbb"
              style={styles.input}
              keyboardType="phone-pad"
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor="#bbb"
              secureTextEntry
              style={styles.input}
            />

            {/* Role Picker (Sign Up Only) */}
            {isSignUp && (
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={role}
                  onValueChange={(itemValue) => setRole(itemValue)}
                  dropdownIconColor="#fff"
                  style={styles.picker}
                >
                  <Picker.Item label="Farmer" value="Farmer" />
                  <Picker.Item label="Buyer" value="Buyer" />
                  <Picker.Item label="Supplier" value="Supplier" />
                </Picker>
              </View>
            )}

            {/* Submit Button */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>{isSignUp ? 'Sign Up' : 'Log In'}</Text>
            </TouchableOpacity>

            {/* Toggle Text */}
            <TouchableOpacity onPress={handleToggle}>
              <MaskedView
                maskElement={
                  <Text style={styles.linkText}>
                    {isSignUp ? 'Already have an account? ' : 'Don’t have an account? '}
                    <Text style={styles.linkUnderline}>{isSignUp ? 'Log In' : 'Sign Up'}</Text>
                  </Text>
                }
              >
                <LinearGradient
                  colors={['#34A853', '#FDD835']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text style={[styles.linkText, { opacity: 0 }]}>
                    {isSignUp ? 'Already have an account? ' : 'Don’t have an account? '}
                    <Text style={styles.linkUnderline}>{isSignUp ? 'Log In' : 'Sign Up'}</Text>
                  </Text>
                </LinearGradient>
              </MaskedView>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
  },
  innerContainer: {
    width: '100%',
  },
  loginBox: {
    paddingBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 32,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: 18,
    color: '#fff',
    fontSize: 16,
  },
  pickerContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 18,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    color: '#fff',
  },
  button: {
    width: '100%',
    backgroundColor: '#34A853',
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 6,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 17,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  linkText: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  linkUnderline: {
    textDecorationLine: 'underline',
  },
});
