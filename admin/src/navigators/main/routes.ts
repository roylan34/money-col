import { RouteComponentProps } from 'react-router-dom';
import { paths } from '../../constants/routes/urls';
import { HomeContainer } from '../../components/pages/Home';
import { InstructorsContainer } from '../../components/pages/Instructors';
import { VideosContainer } from '../../components/pages/Videos';
import { ProjectContentsContainer } from '../../components/pages/ProjectContents';
import { EAProgramsContainer } from '../../components/pages/EAPrograms';
import { ManualsContainer } from '../../components/pages/Manuals';
import { MailContainer } from '../../components/pages/Mailbox';
import { UsersContainer } from '../../components/pages/Users';
import { UserDetailsContainer } from '../../components/pages/UserDetails';
import { PendingPaymentsContainer } from '../../components/pages/PendingPayments';

type ComponentParam =
  | React.ComponentType<RouteComponentProps<any>>
  | React.ComponentType<any>;

const routes: Array<{
  key: string;
  path: string;
  component: ComponentParam;
  authorization: 'admin-instructor' | 'admin' | 'instructor';
}> = [
  {
    key: 'home',
    path: paths.home,
    component: HomeContainer,
    authorization: 'admin-instructor',
  },
  {
    key: 'teachers',
    path: paths.teachers,
    component: InstructorsContainer,
    authorization: 'admin',
  },
  {
    key: 'videos',
    path: paths.videos,
    component: VideosContainer,
    authorization: 'admin',
  },
  {
    key: 'projectContents',
    path: paths.projectContents,
    component: ProjectContentsContainer,
    authorization: 'admin',
  },
  {
    key: 'eaPrograms',
    path: paths.eaPrograms,
    component: EAProgramsContainer,
    authorization: 'admin',
  },
  {
    key: 'articles',
    path: paths.manuals,
    component: ManualsContainer,
    authorization: 'admin',
  },
  {
    key: 'instructors',
    path: paths.instructors,
    component: InstructorsContainer,
    authorization: 'admin',
  },
  {
    key: 'mailbox',
    path: paths.mailbox,
    component: MailContainer,
    authorization: 'admin-instructor',
  },
  {
    key: 'instructorMailbox',
    path: paths.instructorMailbox,
    component: MailContainer,
    authorization: 'instructor',
  },
  {
    key: 'users',
    path: paths.users,
    component: UsersContainer,
    authorization: 'admin',
  },
  {
    key: 'userDetails',
    path: paths.userDetails,
    component: UserDetailsContainer,
    authorization: 'admin',
  },
  {
    key: 'pendingPayments',
    path: paths.pendingPayments,
    component: PendingPaymentsContainer,
    authorization: 'admin',
  },
];

export default routes;
