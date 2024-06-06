import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useAuth() {
  const isAuthenticated = ref(false);
  const router = useRouter();
  const loginMethod = ref<'password' | 'otp'>('password');
  const showOTPInput = ref(false);
  const employeeNumber = ref('');
  const otp = ref('');
  const correctUsername = 'bunnyman'
  const correctPassword = 'nconnect@123'
  const correctEmployeeNumber = '1234567890'
  const correctOTP = '9999'
  const login = (username: string, password: string): void => {
    if (loginMethod.value === 'password') {
      if (username === correctUsername && password === correctPassword) {
        isAuthenticated.value = true;
        localStorage.setItem('isAuthenticated', 'true');
        router.push('/');
      } else {
        alert('Invalid username or password');
      }
    }
  };
  
  const validateEmployeeNumber = (employeeNumber: string): void => {
    if (employeeNumber === correctEmployeeNumber) {
      showOTPInput.value = true;
    } else {
      alert('Invalid Employee Number');
    }
  };

  const validateOTP = (otp: string): void => {
    if (otp === correctOTP) {
      isAuthenticated.value = true;
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/');
    } else {
      alert('Incorrect OTP. Please try again.');
    }
  };

  const logout = (): void => {
    isAuthenticated.value = false;
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
  };

  const init = (): void => {
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    if (storedAuthStatus === 'true') {
      isAuthenticated.value = true;
    } else {
      router.push('/login');
    }
  };

  init();

  return {
    isAuthenticated,
    loginMethod,
    showOTPInput,
    employeeNumber,
    otp,
    login,
    validateEmployeeNumber,
    validateOTP,
    logout,
  };
}