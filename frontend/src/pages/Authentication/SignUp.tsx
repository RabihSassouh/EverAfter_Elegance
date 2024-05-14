import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SignupComponent from '../../components/SignupComponent'
import Step2 from '../../components/SignupStep1'
import { RootState } from '../../store/store';
import CouplesInfo from '../../components/CoupleInfo';
import WeddingInfo from '../../components/WeddingInfo';
import FinishSignup from '../../components/FinishSignup';
import BusinessCategory from '../../components/BusinessCategory';
import BusinessLocation from '../../components/BusinessLocation';
import BusinessStep2 from '../../components/BusinessStep2';
import BusinessPhotos from '../../components/BusinessPhotos';

const SignUp: React.FC = () => {
  
  const { step, userType } = useSelector((state: RootState) => state.signUp);

  useEffect(() => {
      document.title = 'Sign Up';
  }, []);

  return (
    <>
    {step === 1 && <BusinessPhotos/>}
    {step === 2 && <Step2/>}
    {userType===1 && step === 3 && <CouplesInfo/>}
    {userType===1 && step === 4 && <WeddingInfo/>}
    {userType===1 && step === 5 && <FinishSignup/>}
    {userType===2 && step === 3 && <BusinessCategory/>}
    {userType===2 && step === 4 && <BusinessLocation/>}
    {userType===2 && step === 5 && <BusinessStep2/>}
    {userType===2 && step === 6 && <BusinessPhotos/>}

    </>
  )
}

export default SignUp