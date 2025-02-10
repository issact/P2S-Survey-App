export interface FormData {
  email: string;
  orgname: string;
  industry: string;
  revenue: string;
  priorities: string;
  challenges: string;
  importance: string;
  respondentname: string;
  designation: string;
  acceptTerms: boolean;
}

export interface GeneralFormProps {
  //onNext?: (data: FormData) => void;
  onNext: () => void;
  onSkip: () => void;
}

export interface LoginFormProps {
  onNext: () => void;
}

export interface SurveyFormProps {
  onBack: () => void;
}

export interface HomeProps {
  onStart: () => void;
}

export type Option = {
  label: string;
  value: string;
  description: string;
  tooltip: string;
}

export type Question = {
  id: number;
  title: string;
  description: string;
  options: Option[];
}

export type SessionData = {
  id: number;
  title: string;
  questions: Question[];
}
export type ScoreTableProps = {
  answers: Record<string, string>;
  sessions: SessionData[];
};