import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SignupComponent from '../../components/SignupComponent'
import Step2 from '../../components/SignupStep1'
import { RootState } from '../../store/store';
import CouplesInfo from '../../components/CoupleInfo';
import WeddingInfo from '../../components/WeddingInfo';

const SignUp: React.FC = () => {
  
  const { step, userType } = useSelector((state: RootState) => state.signUp);

  useEffect(() => {
      document.title = 'Sign Up';
  }, []);

  return (
    <>
    {step === 1 && <WeddingInfo/>}
    {step === 2 && <Step2/>}
    {step === 3 && <CouplesInfo/>}
    </>
  )
}

export default SignUp