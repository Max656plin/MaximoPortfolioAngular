import { ContactSubject } from './contact-subject.enum';

export interface ContactForm {
  fullName: string;
  email: string;
  subject: ContactSubject;
  message: string;
  createdAt?: Date;
}
