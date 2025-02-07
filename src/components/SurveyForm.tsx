import React, { useState, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import InfoIcon from "@/components/icons/info-icon";
import { FormProps } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radiogroup';
import CardBlurry from './ui/card-blurry';
import ScoreTable from './ScoreTable';

// Types
type Option = {
  label: string;
  value: string;
  description: string;
  tooltip: string;
}

type Question = {
  id: number;
  title: string;
  description: string;
  options: Option[];
}

type SessionData = {
  id: number;
  title: string;
  questions: Question[];
}

// Main Survey Form Component
const SurveyForm: React.FC<FormProps> = ({ onBack }) => {
  const [currentSession, setCurrentSession] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const form = useForm({
    defaultValues: {
      currentAnswer: '',
    },
  });

  const sessions: SessionData[] = useMemo(() => [
    {
      id: 1,
      title: "Strategy and governance",
      questions: [
        {
          id: 1,
          title: "AI Vision",
          description: "Organizations should have a vision for Artificial Intelligence (AI) to strategically guide their efforts in leveraging AI technologies effectively.",
          options: [
            {
              label: "Unreliable",
              value: "unreliable",
              description: "No existing vision document or purpose statement in place to guide AI program",
              tooltip: "Indicates a lack of formal documentation and direction"
            },
            {
              label: "Initial",
              value: "initial",
              description: "Some agreement on the vision and purpose statement across the organisation, but not formally accepted",
              tooltip: "Early stages of vision development"
            },
            {
              label: "Developing / Managed",
              value: "developing",
              description: "Purpose statement formulated outlining the vision, objectives, and guiding principles for AI in the organisation, with the key stakeholders having some understanding of the organisation's AI strategy, objectives and future growth",
              tooltip: "Well-defined vision with regular updates"
            },
            {
              label: "Optimised / Transformative",
              value: "optimised",
              description: "Good understanding of the organisation's AI vision, objectives and guiding principles - that must be followed to manage and further progress the AI program in the organisation",
              tooltip: "Advanced vision implementation"
            },
            {
              label: "AI driven / Ecosystem Impact",
              value: "ai-driven",
              description: "Detailed strategy in place with roadmap updated on a regular basis to support the vision, objectives and guiding principles of the AI program",
              tooltip: "Leading-edge vision implementation"
            }
          ]
        },
        {
          id: 2,
          title: "AI alignment with business and / or IT priorities.",
          description: "Aligning AI with business and / or IT priorities is crucial for successful AI adoption and maximizing its value",
          options: [
            {
              label: "Unreliable",
              value: "unreliable",
              description: "There is basic understanding of how AI could potentially address business needs and assist / progress IT operations",
              tooltip: "Indicates a lack of formal documentation and direction"
            },
            {
              label: "Initial",
              value: "initial",
              description: "In addition to the basic understanding, there is some testing / experimentation with specific AI solutions underway, to help address defined business problems",
              tooltip: "Early stages of vision development"
            },
            {
              label: "Developing / Managed",
              value: "developing",
              description: "AI solutions are integrated into existing business processes and workflows",
              tooltip: "Well-defined vision with regular updates"
            },
            {
              label: "Optimised / Transformative",
              value: "optimised",
              description: "There is a widespread adoption of AI across the organization to drive strategic business outcomes",
              tooltip: "Advanced vision implementation"
            },
            {
              label: "AI driven / Ecosystem Impact",
              value: "ai-driven",
              description: "AI is extensively utilized to drive continuous improvement, innovation, and competitive advantage",
              tooltip: "Leading-edge vision implementation"
            }
          ]
        },
        {
          id: 3,
          title: "AI approach - ad hoc, incremental or transformational",
          description: "Having a well defined approach to AI helps prevent wasted resources, misaligned efforts, and unrealized potential",
          options: [
            {
              label: "Unreliable",
              value: "unreliable",
              description: "Approach is not defined, largely ad hoc",
              tooltip: "Indicates a lack of formal documentation and direction"
            },
            {
              label: "Initial",
              value: "initial",
              description: "Though the approach is ad hoc, but some initiatives have been successful, thereby driving further interest and investment in AI within the organisation",
              tooltip: "Early stages of vision development"
            },
            {
              label: "Developing / Managed",
              value: "developing",
              description: "The AI approach is incremental or transformational, and is aligned to the AI strategy. However, AI is not currently driving continuous improvement, innovation, and competitive advantage",
              tooltip: "Well-defined vision with regular updates"
            },
            {
              label: "Optimised / Transformative",
              value: "optimised",
              description: "The AI approach is incremental or transformational, and is aligned to the AI strategy. AI is partly driving continuous improvement, innovation, and competitive advantage.",
              tooltip: "Advanced vision implementation"
            },
            {
              label: "AI driven / Ecosystem Impact",
              value: "ai-driven",
              description: "The AI approach is incremental or transformational, and is aligned to the AI strategy. AI is extensively utilized to drive continuous improvement, innovation, and competitive advantage",
              tooltip: "Leading-edge vision implementation"
            }
          ]
        },
        {
          id: 4,
          title: "Policies and Procedures - Policy and procedures span across areas like:",
          description: "AI Model Development & DeploymentAI Risk Management, Change Management, Compliance / Legal, Data Governance, Ethics / Responsible AI, Human-AI Collaboration, Intellectual Property (IP)",
          options: [
            {
              label: "Unreliable",
              value: "unreliable",
              description: "No policy and procedures in place for responsible and effective AI adoption",
              tooltip: "Indicates a lack of formal documentation and direction"
            },
            {
              label: "Initial",
              value: "initial",
              description: "Some initial (not detailed) policies and procedures for responsible and effective AI adoption exist, however compliance is not tracked",
              tooltip: "Early stages of vision development"
            },
            {
              label: "Developing / Managed",
              value: "developing",
              description: "Well defined policies and procedures for responsible and effective AI adoption exist across some of the specified areas but compliance is low",
              tooltip: "Well-defined vision with regular updates"
            },
            {
              label: "Optimised / Transformative",
              value: "optimised",
              description: "Well defined policies and procedures for responsible and effective AI adoption exist across most of the specified areas and compliance is moderate",
              tooltip: "Advanced vision implementation"
            },
            {
              label: "AI driven / Ecosystem Impact",
              value: "ai-driven",
              description: "Well defined policies and procedures for responsible and effective AI adoption exist across most of the specified areas and compliance is high and is tracked and reported on",
              tooltip: "Leading-edge vision implementation"
            }
          ]
        },
        {
          id: 5,
          title: "Ethical AI adoption",
          description: "Ethical AI refers to the development and deployment of artificial intelligence systems in a way that aligns with human values, respects fundamental rights, and avoids causing harm. It's about ensuring that AI is used Responsibly, Transparently, with Accountability, is Inclusive and for the benefit of society.",
          options: [
            {
              label: "Unreliable",
              value: "unreliable",
              description: "Unaware - No explicit consideration of ethical implications of AI.",
              tooltip: "Indicates a lack of formal documentation and direction"
            },
            {
              label: "Initial",
              value: "initial",
              description: "Reactive - Ethical issues are addressed only after they have surfaced or caused problems.",
              tooltip: "Early stages of vision development"
            },
            {
              label: "Developing / Managed",
              value: "developing",
              description: "Proactive - Formal ethical frameworks and processes are implemented to guide AI development and deployment.",
              tooltip: "Well-defined vision with regular updates"
            },
            {
              label: "Optimised / Transformative",
              value: "optimised",
              description: "Integrated - Ethical considerations are embedded into the entire AI lifecycle, from data collection to model deployment and monitoring.",
              tooltip: "Advanced vision implementation"
            },
            {
              label: "AI driven / Ecosystem Impact",
              value: "ai-driven",
              description: "Ecosystem leadership - The organization becomes a leader in ethical AI and actively contributes to the development of industry standards and best practices.",
              tooltip: "Leading-edge vision implementation"
            }
          ]
        },
        {
          id: 6,
          title: "AI risk management and compliance",
          description: "AI risk management is essential for responsible and ethical AI adoption, Staying up-to-date with the evolving regulatory landscape and best practices is important",
          options: [
            {
              label: "Unreliable",
              value: "unreliable",
              description: "Limited awareness of AI-specific risks, though basic data privacy awareness might exist. Focus on existing data privacy regulations (e.g., GDPR, CCPA) without specific consideration for AI",
              tooltip: "Indicates a lack of formal documentation and direction"
            },
            {
              label: "Initial",
              value: "initial",
              description: "Initial risk assessments for pilot projects, focusing on specific risks like data privacy and model accuracy.Initial considerations regarding existing regulations that might apply to specific AI use cases",
              tooltip: "Early stages of vision development"
            },
            {
              label: "Developing / Managed",
              value: "developing",
              description: "A formal risk management framework for AI exists that includes, but is not limited to risk identification, assessment, mitigation, and monitoring.",
              tooltip: "Well-defined vision with regular updates"
            },
            {
              label: "Optimised / Transformative",
              value: "optimised",
              description: "A mature risk management framework with regular audits and continuous monitoring is in place for the proactive identification and mitigation of emerging AI risks. The framework is aligned to AI focussed industry standard risk frameworks like the NIST AI Risk Management Framework or the ISO/IEC 23894:2023 AI Risk Management Framework.",
              tooltip: "Advanced vision implementation"
            },
            {
              label: "AI driven / Ecosystem Impact",
              value: "ai-driven",
              description: "An Adaptive risk management framework that evolves with advancements in AI technology and regulatory landscape is in place. The framework is aligned to AI focussed industry standard risk frameworks like the NIST AI Risk Management Framework or the ISO/IEC 23894:2023 AI Risk Management Framework. The organisation actively participates in shaping industry standards and best practices for responsible AI.",
              tooltip: "Leading-edge vision implementation"
            }
          ]
        },
      ]
    },
    {
      id: 2,
      title: "AI foundations",
      questions: [
        {
          id: 1,
          title: "Data availability and reliability",
          description: "Data availability and reliability is vital for successful AI implementations and crucial for achieving AI maturity within organizations",
          options: [
            {
              label: "Unreliable",
              value: "unreliable",
              description: "Basic data management for operational needs with minimal focus on AI. Data is siloed, inconsistent, and often of poor quality and no formal data governance policies or processes are in place.",
              tooltip: "Indicates a lack of formal documentation and direction"
            },
            {
              label: "Initial",
              value: "initial",
              description: "Basic data governance processes and policies exist.Initial efforts to centralize data and improve data quality are underway and basic metadata management has been  introduced. Data is prepared for specific AI projects on an ad-hoc basis.",
              tooltip: "Early stages of vision development"
            },            
            {
              label: "Developing / Managed",
              value: "developing",
              description: "The organisation proactively focuses on data governance practices to support AI at scale. Data governance is integrated into business processes with automated data quality checks, data cleansing processes and comprehensive metadata management in place.",
              tooltip: "Well-defined vision with regular updates" 
            },
            {
              label: "Optimised / Transformative",
              value: "optimised",
              description: "The organisation leverages data governance to drive AI innovation and create new business value. Data is treated as a product, with clear ownership and quality standards. AI is used to automate data governance tasks, such as data quality monitoring and metadata management. Data is actively explored and analysed to identify new AI opportunities.",
              tooltip: "Advanced vision implementation"
            },
            {
              label: "AI driven / Ecosystem Impact",
              value: "ai-driven",
              description: "The organization actively contributes to industry data governance standards and best practices. Data governance is fully integrated into the organization's culture and strategy. Real-time data governance and AI model monitoring are in place. The organization is at the forefront of ethical AI and responsible data use.",
              tooltip: "Leading-edge vision implementation"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "AI metrics",
      questions: [
        {
          id: 1,
          title: "Data availability and reliability",
          description: "Data availability and reliability is vital for successful AI implementations and crucial for achieving AI maturity within organizations",
          options: [
            {
              label: "Unreliable",
              value: "unreliable",
              description: "Basic data management for operational needs with minimal focus on AI. Data is siloed, inconsistent, and often of poor quality and no formal data governance policies or processes are in place.",
              tooltip: "Indicates a lack of formal documentation and direction"
            },
            {
              label: "Initial",
              value: "initial",
              description: "Basic data governance processes and policies exist.Initial efforts to centralize data and improve data quality are underway and basic metadata management has been  introduced. Data is prepared for specific AI projects on an ad-hoc basis.",
              tooltip: "Early stages of vision development"
            },            
            {
              label: "Developing / Managed",
              value: "developing",
              description: "The organisation proactively focuses on data governance practices to support AI at scale. Data governance is integrated into business processes with automated data quality checks, data cleansing processes and comprehensive metadata management in place.",
              tooltip: "Well-defined vision with regular updates" 
            },
            {
              label: "Optimised / Transformative",
              value: "optimised",
              description: "The organisation leverages data governance to drive AI innovation and create new business value. Data is treated as a product, with clear ownership and quality standards. AI is used to automate data governance tasks, such as data quality monitoring and metadata management. Data is actively explored and analysed to identify new AI opportunities.",
              tooltip: "Advanced vision implementation"
            },
            {
              label: "AI driven / Ecosystem Impact",
              value: "ai-driven",
              description: "The organization actively contributes to industry data governance standards and best practices. Data governance is fully integrated into the organization's culture and strategy. Real-time data governance and AI model monitoring are in place. The organization is at the forefront of ethical AI and responsible data use.",
              tooltip: "Leading-edge vision implementation"
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "AI currency",
      questions: [
        {
          id: 1,
          title: "Data availability and reliability",
          description: "Data availability and reliability is vital for successful AI implementations and crucial for achieving AI maturity within organizations",
          options: [
            {
              label: "Unreliable",
              value: "unreliable",
              description: "Basic data management for operational needs with minimal focus on AI. Data is siloed, inconsistent, and often of poor quality and no formal data governance policies or processes are in place.",
              tooltip: "Indicates a lack of formal documentation and direction"
            },
            {
              label: "Initial",
              value: "initial",
              description: "Basic data governance processes and policies exist.Initial efforts to centralize data and improve data quality are underway and basic metadata management has been  introduced. Data is prepared for specific AI projects on an ad-hoc basis.",
              tooltip: "Early stages of vision development"
            },            
            {
              label: "Developing / Managed",
              value: "developing",
              description: "The organisation proactively focuses on data governance practices to support AI at scale. Data governance is integrated into business processes with automated data quality checks, data cleansing processes and comprehensive metadata management in place.",
              tooltip: "Well-defined vision with regular updates" 
            },
            {
              label: "Optimised / Transformative",
              value: "optimised",
              description: "The organisation leverages data governance to drive AI innovation and create new business value. Data is treated as a product, with clear ownership and quality standards. AI is used to automate data governance tasks, such as data quality monitoring and metadata management. Data is actively explored and analysed to identify new AI opportunities.",
              tooltip: "Advanced vision implementation"
            },
            {
              label: "AI driven / Ecosystem Impact",
              value: "ai-driven",
              description: "The organization actively contributes to industry data governance standards and best practices. Data governance is fully integrated into the organization's culture and strategy. Real-time data governance and AI model monitoring are in place. The organization is at the forefront of ethical AI and responsible data use.",
              tooltip: "Leading-edge vision implementation"
            }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "AI change management",
      questions: [
        {
          id: 1,
          title: "Data availability and reliability",
          description: "Data availability and reliability is vital for successful AI implementations and crucial for achieving AI maturity within organizations",
          options: [
            {
              label: "Unreliable",
              value: "unreliable",
              description: "Basic data management for operational needs with minimal focus on AI. Data is siloed, inconsistent, and often of poor quality and no formal data governance policies or processes are in place.",
              tooltip: "Indicates a lack of formal documentation and direction"
            },
            {
              label: "Initial",
              value: "initial",
              description: "Basic data governance processes and policies exist.Initial efforts to centralize data and improve data quality are underway and basic metadata management has been  introduced. Data is prepared for specific AI projects on an ad-hoc basis.",
              tooltip: "Early stages of vision development"
            },            
            {
              label: "Developing / Managed",
              value: "developing",
              description: "The organisation proactively focuses on data governance practices to support AI at scale. Data governance is integrated into business processes with automated data quality checks, data cleansing processes and comprehensive metadata management in place.",
              tooltip: "Well-defined vision with regular updates" 
            },
            {
              label: "Optimised / Transformative",
              value: "optimised",
              description: "The organisation leverages data governance to drive AI innovation and create new business value. Data is treated as a product, with clear ownership and quality standards. AI is used to automate data governance tasks, such as data quality monitoring and metadata management. Data is actively explored and analysed to identify new AI opportunities.",
              tooltip: "Advanced vision implementation"
            },
            {
              label: "AI driven / Ecosystem Impact",
              value: "ai-driven",
              description: "The organization actively contributes to industry data governance standards and best practices. Data governance is fully integrated into the organization's culture and strategy. Real-time data governance and AI model monitoring are in place. The organization is at the forefront of ethical AI and responsible data use.",
              tooltip: "Leading-edge vision implementation"
            }
          ]
        }
      ]
    },

  ], []); 

  // Calculate progress based on answered questions
  useEffect(() => {
    const totalQuestions = sessions.reduce((acc, session) => acc + session.questions.length, 0);
    const answeredQuestions = Object.keys(answers).length;
    const newProgress = Math.round((answeredQuestions / totalQuestions) * 100);
    setProgress(Math.min(newProgress, 100));
  }, [answers, sessions]);

  // Set initial answer for current question if it exists
  useEffect(() => {
    const questionKey = `${currentSession}-${currentQuestion}`;
    const existingAnswer = answers[questionKey];
    if (existingAnswer) {
      form.setValue('currentAnswer', existingAnswer);
    } else {
      form.setValue('currentAnswer', '');
    }
  }, [currentSession, currentQuestion, answers, form]);

  const isLastQuestion = useMemo(() => {
    return currentSession === sessions.length - 1 && 
           currentQuestion === sessions[currentSession].questions.length - 1;
  }, [currentSession, currentQuestion, sessions]);

  const handleNext = () => {

    const currentAnswer = form.getValues('currentAnswer');
    if (!currentAnswer) return;

    // Save the current answer
    const questionKey = `${currentSession}-${currentQuestion}`;
    setAnswers(prev => ({
      ...prev,
      [questionKey]: currentAnswer
    }));

    if (isLastQuestion) {
      setIsCompleted(true);
    } else {
      const currentSessionData = sessions[currentSession];
      if (currentQuestion < currentSessionData.questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else if (currentSession < sessions.length - 1) {
        setCurrentSession(prev => prev + 1);
        setCurrentQuestion(0);
      }
    }
  };

  if (isCompleted) {
    return <ScoreTable />;
  }

  const handlePrev = () => {
    if (currentSession === 0 && currentQuestion === 0) {
      onBack(); // Call the callback to return to general form
    } else if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    } else if (currentSession > 0) {
      setCurrentSession(prev => prev - 1);
      setCurrentQuestion(sessions[currentSession - 1].questions.length - 1);
    }
  };

  const handleAnswerChange = (value: string) => {
    const questionKey = `${currentSession}-${currentQuestion}`;
    setAnswers(prev => ({
      ...prev,
      [questionKey]: value
    }));
    form.setValue('currentAnswer', value);
  };

  const currentSessionData = sessions[currentSession];
  const currentQuestionData = currentSessionData.questions[currentQuestion];
  const hasAnswer = !!form.watch('currentAnswer');

  return (
    <div className='w-7/12 mx-auto'>
    <Card className="w-full bg-transparent border-0 shadow-none overflow-visible">
      <CardHeader className="flex flex-row items-center justify-between px-0">
        <div>
          <CardTitle className='text-[#E7ECF0] mb-4 font-ubuntu'>{currentSessionData.title}</CardTitle>
          <p className="text-base text-[#E7ECF0]/40">
            Session {currentSessionData.id}/{sessions.length}
          </p>
        </div>
        <div>
        <span className="ml-2 text-sm text-[#E7ECF0]">{progress}%</span>
        <Progress value={progress} className="w-[250px] h-[12px]" />
        </div>
      </CardHeader>
      <CardBlurry className='bg-gradient3'>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6">
            <FormField
              control={form.control}
              name="currentAnswer"
              rules={{ required: 'Please select an option' }}
              render={({ field }) => (
                <FormItem>
                  <div className='flex justify-between'>
                  <FormLabel className="text-lg font-semibold text-[#E7ECF0] font-ubuntu">
                    {currentQuestionData.title}
                  </FormLabel>
                  <span className="text-[#E7ECF0]/40 w-[100px] inline-block">Question {currentQuestionData.id}</span>
                  </div>
                  <FormDescription className='!mb-10 text-[#B4C4D1] text-base'>{currentQuestionData.description}</FormDescription>
                  <FormControl className='text-[#B4C4D1]'>
                    <RadioGroup
                      onValueChange={(value) => handleAnswerChange(value)}
                      value={field.value}
                    >
                      {currentQuestionData.options.map((option) => (
                        <div key={option.value} className='bg-[#051B2C] px-4 rounded-md'>
                          <div className="flex items-center justify-between">
                            <FormItem className="flex items-center space-x-3 w-full">
                              <FormControl>
                                <RadioGroupItem value={option.value} className='data-[state=checked]:border-none'/>
                              </FormControl>
                              <FormLabel className="font-normal w-full text-base py-3 !mt-0 cursor-pointer">
                                {option.label}
                              </FormLabel>
                            </FormItem>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <InfoIcon className="fill-[#8FA7BA]" />
                                </TooltipTrigger>
                                <TooltipContent className='bg-black text-[#E7ECF0] border-none max-w-48 -ml-[50px] text-xs p-4'>
                                  <p>{option.tooltip}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          {field.value === option.value && (
                            <div className="text-sm bg-[#051B2C] text-[#8FA7BA] pb-4 px-4">
                              {option.description}
                            </div>
                          )}
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrev}
                className='bg-[#B4C4D1] text-base px-6 py-3 hover:bg-none hover:shadow-xl border-none hover:bg-[#5C7F9B] hover:text-white'
              >
                PREV
              </Button>
              <span className="flex items-center text-base font-bold text-[#E7ECF0]/40">
                {currentQuestion + 1}/{currentSessionData.questions.length}
              </span>
              <Button
                type="button"
                onClick={handleNext}
                //disabled={!form.watch('currentAnswer')}
                disabled={!hasAnswer}
                className='bg-gradient1 text-base px-6 py-3 hover:bg-none hover:bg-primary hover:shadow-xl'
              >
                NEXT
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
      </CardBlurry>
    </Card>
    </div>
  );
};

export default SurveyForm;