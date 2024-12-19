import { t } from '@/Locales';

export const ValidationSchema = {
  // email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\s]{8,}$/,
  number: / ^(0|[1-9][0-9]*)$/,
  phoneNumber: /^[0-9\-\+]{8,15}$/,
  regDigital: /^[0-9]*$/,
  regPhoneNumber: /^\+(?:[0-9]●?){6,14}[0-9]$/,
  positiveNumber: /^[+]?(?!0+)\d*\.?\d+$/,
  onlyWord: /^[a-zA-Z]+(\s[a-zA-Z]+)*$/,
  postcodeLength: /^[0-9a-zA-Z]{3,15}$/,
  dialogReview: /^[0-9a-zA-Z]{50,}$/,
  numberDuration: /^(0?[1-9]|[12][0-9]|3[00])$/,
  checkWhitespace: /\s/,
};

export const ValidationError = {
  required: t('validation.required'),
  email: t('validation.email'),
  password: t('validation.passwordRequired'),
  number: t('validation.mustBeNumber'),
  phoneNumber: t('validation.phoneInvalid'),
  maxLength: (length: number = 30) => {
    return `${t('validation.cannotLongerThan')} ${length} ${t('validation.characters')}.`;
  },
  positive: t('validation.positive'),
  date: t('validation.plsChooseDateAfter'),
  incorrectPhoneNumber: t('validation.incorrectPhoneNumber'),
  firstNameOnlyWord: t('validation.firstNameOnlyWord'),
  lastNameOnlyWord: t('validation.lastNameOnlyWord'),
  postcodeLength: t('validation.postcodeLength'),
  dialogReview: t('validation.dialogReview'),
  firstNameLimit60: t('validation.firstNameLimit60'),
  lastNameLimit60: t('validation.lastNameLimit60'),
  relationshipLimit120: t('validation.relationshipLimit120'),
  applySuspensionLimit: t('validation.applySuspensionLimit'),
  applySuspensionDuration: t('validation.applySuspensionDuration'),
  numberDuration: t('validation.numberDuration'),
  idInvalid: t('validation.idInvalid'),
};

export const Placeholders = {
  emailPhonenumber: 'test@example.com/ +84618007000',
  email: 'test@example.com',
  phonenumber: '123456789',
};
