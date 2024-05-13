import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SignupComponent from '../../components/SignupComponent'
import Step2 from '../../components/SignupStep1'
import { RootState } from '../../store/store';

const SignUp: React.FC = () => {
  
  const { step, userType } = useSelector((state: RootState) => state.signUp);

  useEffect(() => {
      document.title = 'Sign Up';
  }, []);

  return (
    <>
    {step === 1 && <SignupComponent/>}
    {step === 2 && <Step2/>}
    </>
  )
}

export default SignUp