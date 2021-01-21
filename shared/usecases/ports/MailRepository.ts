import { EmailTypes } from '../../domain/entities';

export default interface MailRepository {
  create(receiverEmail: string, name: string, type: EmailTypes): Promise<void>;
}
