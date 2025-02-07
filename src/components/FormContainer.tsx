"use client"
import React, { useState } from 'react'
import GeneralInformationForm from '@/components/FormGeneral'
import CardBlurry from '@/components/ui/card-blurry'
import SurveyForm from './SurveyForm'

function FormContainer() {
  const [showSurvey, setShowSurvey] = useState(false);
  

  const handleStartSurvey = () => {
    setTimeout(() => {
      setShowSurvey(true);
    }, 500);
  };

  const handleBackToGeneral = () => {
    setTimeout(() => {
      setShowSurvey(false);
    }, 500);
  };

  return (
    <div className='container py-8'>
            {!showSurvey ? (
              <CardBlurry className='w-7/12 mx-auto'>
            <GeneralInformationForm onNext={handleStartSurvey} onBack={handleBackToGeneral}/>
            </CardBlurry>
          ) : (
            <SurveyForm onBack={handleBackToGeneral} onNext={handleStartSurvey}/>
          )}
      </div>
  )
}

export default FormContainer;