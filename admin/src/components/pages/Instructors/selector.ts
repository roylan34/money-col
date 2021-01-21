import { RootStateOrAny } from 'react-redux';
import { Instructor } from '../../../domain/entities';
import { InstructorsRowData } from '../../templates/InstructorsTemplate/types';

export type StateFromProps = {
  instructorData: Array<InstructorsRowData>;
  instructors: { [key: string]: Instructor };
};

export default (state: RootStateOrAny): StateFromProps => {
  const {
    instructor: { instructors },
  } = state;

  const instructorData = Object.values(instructors).map(instructor => {
    const { name, email, id } = instructor as Instructor & {
      createdAt: Date;
      lastLogIn: Date;
    };
    const fullName = `${name.lastName} ${name.firstName} `;

    return {
      name: fullName,
      email: email,
      id: id,
    };
  });

  return {
    instructorData,
    instructors,
  };
};
