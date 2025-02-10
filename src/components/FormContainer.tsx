"use client"
import React, { useState } from 'react'
import GeneralInformationForm from '@/components/FormGeneral'
import CardBlurry from '@/components/ui/card-blurry'
import SurveyForm from './SurveyForm'
import LoginForm from './LoginForm'

function FormContainer() {
  const [currentForm, setCurrentForm] = useState<'login' | 'general' | 'survey'>('login');
  

  const handleLoginSuccess = () => {
    setCurrentForm('general');
  };

  const handleStartSurvey = () => { //handle GeneralForm Next 
    setCurrentForm('survey');
  };

  const handleBackToGeneral = () => { // handle Survey Back 
    setCurrentForm('general');
  };

  const handleGeneralFormSkip = () => {
      setCurrentForm('survey');
  };

  return (
    <div className='container py-8'>

          {currentForm === 'login' && (
            <LoginForm onNext={handleLoginSuccess}/>
          )}
          {currentForm === 'general' && (
            <CardBlurry className='w-7/12 mx-auto'>
            <GeneralInformationForm onNext={handleStartSurvey} onSkip={handleGeneralFormSkip}/>
            </CardBlurry>
          )}
          {currentForm === 'survey' && (
            <SurveyForm onBack={handleBackToGeneral}/>
          )}
      </div>
  )
}

export default FormContainer;