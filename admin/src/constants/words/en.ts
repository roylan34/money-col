export default {
  // Login Screen
  todoApp: 'Todo App',
  employeeNumber: 'Employee number',
  password: 'Password',
  login: 'Login',
  emailLabel: 'Email',
  passwordLabel: 'Password',
  saveLogin: 'Stay Logged In',
  forgotPassLabel: 'Forgot Password',
  emailIsRequired: 'Email is required.',
  emailIsInvalid: 'Email is invalid.',
  passwordIsRequired: 'Password is required.',
  passwordIsInvalid: 'Password is invalid',
  passwordContainsInvalidChars: 'Password contains unavailable characters.',

  // Change Password Screen
  pleaseSetNewPassword: 'Please set the new password',
  newPassword: 'New password',
  newPasswordConfirm: 'New password (confirm)',
  change: 'Change',
  changePassword: 'Change password',
  member: 'Member',
  substituteRecord: 'Substitute',

  // Home Screen
  home: 'Home',
  offDuty: 'Off-duty',
  onDuty: 'On-duty',
  constructionNumber: 'Client number construction',
  constructionSubject: 'Construction subject',
  start: 'Start',
  modify: 'Modify',
  finish: 'Finish',
  cancel: 'Cancel',
  confirm: 'Confirm',
  confirmAttendance: 'The work schedule will be marked as follows. Is it okay?',
  all: 'All',

  // Errors
  required: 'This field is required',
  loginError: 'Incorrect ID or password',
  changePassNotMatchError: 'Passwords do not match.',
  changePassCaseError:
    'Use at least one lowercase letter and one half-size number each.',
  somethingWentWrong: 'Something went wrong. Please retry.',

  // Update Default Password
  retypedPasswordIsRequired: 'Password Confirmation is required.',
  passwordsMustMatch: 'Password Confirmation is required.',
  updatePassLabel: `新しく設定するパスワードを入力し、
  パスワード変更ボタンを押してください。
  パスワードには、半角英字・数字を含む8文字以上で設定してください。`,

  // Left Sidebar
  leftSideBarHeader: 'Admin',
  leftSideBarAdminItems: {
    users: 'User',
    teachers: 'Teachers',
    videos: 'Videos',
    'project-contents': '案件',
    'ea-programs': 'EAプログラム',
    articles: '記事',
    mailbox: 'メールボックス',
    'pending-payments': '支払い情報',
    logout: 'ログアウト',
  },
  leftSideBarInstructorItems: {
    user: '講師情報',
    mailbox: 'メールボックス',
    logout: 'ログアウト',
  },
  leftSideBarLinks: {
    users: '/users',
    teachers: '/teachers',
    videos: '/videos',
    'project-contents': '/project-contents',
    'ea-programs': '/ea-programs',
    articles: '/articles',
    mailbox: '/mailbox',
    'pending-payments': '/pending-payments',
    logout: '/logout',
  },

  // List Item Menu
  edit: 'Edit',
  delete: 'Delete',

  // Default placeholder of text input and area
  defaultPlaceHolder: '本文を入力',

  // Video Upload Label
  dragAndDropLabel: 'アップロードする動画ファイルをドラッグ＆ドロップします',
  selectFileLabel: 'Select File',

  // File Description Modal
  release: '公開',
  unreleased: '非公開',
  copyTooltip: 'Copied',
  fileDescPlaceholders: {
    videoTitle: '動画のタイトル（必須）',
    videoDesc: 'Video Description（required）',
    pdfTitle: '案件タイトル（必須）',
    pdfDesc: 'Project PDF Description（required）',
    thumbnail: 'thumbnail',
    disclosure: '公開制限',
    salesPlan: '販売方法',
    sellAmount: '販売ポイント',
    points: 'points',
    displayMypage: 'マイページに表示させる',
  },
  fileDescErrorMsgs: {
    thumbnailIsRequired: 'Please set up a thumbnail.',
    salesPriceIsRequired: 'Please enter the sales price.',
    videoTitleIsRequired: 'Video Title is required.',
    videoDescIsRequired: 'Please enter the description of the video.',
    pdfTitleIsRequired: '案件のタイトルを入力してください。',
    pdfDescIsRequired: '案件の説明文を入力してください。',
  },
  disclosureValues: ['制限なし', 'エリートランク以上', 'プライムランクのみ'],
  free: 'Free',
  paid: 'Paid',
  salesPlanValues: ['Free', 'Charge'],
  noLimit: 'No Limit',
  primeOnly: 'Prime Rank Only',
  atLeastElite: 'At least Elite',
  // Publish Dropdown
  publishDropdownTitle: 'Publish Settings',
  publishDropdownValue: ['Private', 'Public'],

  // Project Content Template
  post: '新規作成',
  projectHeaders: {
    title: 'Title',
    publish: 'Publish Setting',
    createdAt: 'Created At',
    thumbnail: 'Thumbnail',
    status: 'Status',
  },
  uploadPDFLabel: 'Upload PDF',
  projectsLabel: 'Projects',

  // Videos Template
  videoHeaders: {
    video: 'Video',
    publishSettings: 'Publish Settings',
    limit: 'Limit',
    createdAt: 'Created At',
    views: 'Views',
  },
  uploadVideoLabel: 'Upload Video',
  shownOnMyPage: 'Shown on MyPage',
  videosLabel: 'Videos',

  // Recommended Dropdown
  recommendedPlaceholder: 'Please select the MyPage setting',
  recommendedLabel: 'マイページ表示',

  replaceButton: '置き換える',
  recommended: 'おすすめ',
  displayIn: 'に表示する',
  notSet: '設定しない',

  fileUpload: 'ファイルのアップロード',

  // Articles Template
  articlePlaceholders: {
    title: '記事のタイトル（必須）',
  },
  articlesLabel: '記事作成',

  // Instructors Template
  instructorFormTitle: '講師として追加する',
  instructorFormLabels: {
    lastName: '姓',
    firstName: '名',
    email: 'メールアドレス',
  },
  registerInstructorButton: '新規講師を登録する',
  instructorBackButtonLabel: '講師情報',
  lastNameIsRequired: '姓を入力してください。',
  lastNameIsInvalid: '姓を正しく入力してください。',
  firstNameIsRequired: '名を入力してください。',
  firstNameIsInvalid: '名を正しく入力してください。',
  instructorLabel: '講師情報',
  instructorPostButtonLabel: '追加する',
  instructorHeaders: {
    name: '名前',
    email: 'メールアドレス',
    lastLogin: '最終ログイン',
    mailbox: 'メール',
  },
  gotoPasswordLabel: '現在のパスワード',
  gotoPassword: 'パスワード変更画面へ',
  changeEmailConfiLabel: `変更すると新しいメールアドレス宛に確認メールが送信されます。承認されるまで、
  新しいメールアドレスは有効化されません。`,
  emailNotifLabel: '通知',
  emailNotifCheckBox:
    'ユーザーから質問を受けた時に登録メールアドレス宛にメールで通知する',
  attachPhotoLabel: 'プロフィール写真',

  // Mailbox
  adminHeader: 'メールボックス - 岡田准一',

  // Pending Payment
  pendingPaymentHeader: 'ポイント追加',
  addPoints: 'ポイント追加',

  // Confirmation delete
  confirmDelete: 'このコンテンツを削除しますか？',

  // Delete Instructor
  deleteInstructor: 'この講師を削除しますか？',
};
