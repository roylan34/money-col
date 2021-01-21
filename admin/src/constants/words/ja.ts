export default {
  // Login Screen
  todoApp: 'Todo App',
  employeeNumber: '社員番号',
  password: 'パスワード',
  login: 'ログイン',
  emailLabel: 'メールアドレス',
  passwordLabel: 'パスワード',
  saveLogin: 'ログイン状態を保存する',
  forgotPassLabel: 'パスワードを忘れた場合',
  emailIsRequired: 'メールアドレスを入力してください。',
  emailIsInvalid: 'メールアドレスを正しく入力してください。',
  passwordIsRequired: 'パスワードを入力してください。',
  passwordIsInvalid: 'パスワードを正しく入力してください。',
  passwordContainsInvalidChars: '使用できない文字が含まれています。',

  // Change Password Screen
  pleaseSetNewPassword: '新しいパスワードを設定してください',
  newPassword: '新しいパスワード',
  newPasswordConfirm: '新しいパスワード（確認）',
  change: '変更',
  changePassword: 'パスワード変更',
  member: 'メンバー',
  substituteRecord: '代理打刻',

  // Home Screen
  home: 'ホーム',
  offDuty: '勤務外',
  onDuty: '勤務中',
  constructionNumber: '三機工業 20-011 マツダ中関B棟',
  constructionSubject: '防塵室新築工事ダクト工事',
  start: '勤務開始',
  modify: '修正',
  finish: '勤務終了',
  cancel: 'キャンセル',
  confirm: '確認',
  confirmAttendance: '以下の内容で出勤を打刻します。よろしいでしょうか？',
  all: '全員',

  // Errors
  required: 'このフィールドは入力必須です。',
  loginError: '社員番号またはパスワードに誤りがあります',
  changePassNotMatchError: 'パスワードが一致しません。',
  changePassCaseError:
    '小文字アルファベット・半角数字を最低１文字ずつ使ってください。',
  somethingWentWrong: 'Something went wrong. Please retry.',

  // Update Default Password
  retypedPasswordIsRequired: 'パスワード（確認）を入力してください。',
  passwordsMustMatch: '同じパスワードを入力してください。',
  updatePassLabel: `新しく設定するパスワードを入力し、
    パスワード変更ボタンを押してください。
    パスワードには、半角英字・数字を含む8文字以上で設定してください。`,

  // Left Sidebar
  leftSideBarHeader: '管理者ページ',
  leftSideBarAdminItems: {
    users: 'ユーザー',
    teachers: '講師',
    videos: '動画',
    'project-contents': '案件',
    'ea-programs': 'EAプログラム',
    articles: '記事',
    mailbox: 'メールボックス',
    'pending-payments': '支払い情報',
    logout: 'ログアウト',
  },
  leftSideBarInstructorItems: {
    users: '講師情報',
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
  edit: '編集する',
  delete: '削除する',

  // Default placeholder of text input and area
  defaultPlaceHolder: '本文を入力',

  // Video Upload Label
  dragAndDropLabel: 'アップロードする動画ファイルをドラッグ＆ドロップします',
  selectFileLabel: 'ファイルを選択',

  // File Description Modal
  release: '公開',
  unreleased: '非公開',
  copyTooltip: 'コピーしました',
  fileDescPlaceholders: {
    videoTitle: '動画のタイトル（必須）',
    videoDesc: '動画の説明（必須）',
    pdfTitle: '案件タイトル（必須）',
    pdfDesc: '事項の説明（必須）',
    thumbnail: 'サムネイル',
    disclosure: '公開制限',
    salesPlan: '販売方法',
    sellAmount: '販売ポイント',
    points: 'ポイント',
    displayMypage: 'マイページに表示させる',
  },
  fileDescErrorMsgs: {
    thumbnailIsRequired: 'サムネイルを設定してください',
    salesPriceIsRequired: '販売ポイントを入力してください。',
    videoTitleIsRequired: '動画のタイトルを入力してください',
    videoDescIsRequired: '動画の説明文を入力してください',
    pdfTitleIsRequired: '案件のタイトルを入力してください。',
    pdfDescIsRequired: '案件の説明文を入力してください。',
  },
  disclosureValues: ['制限なし', 'エリートランク以上', 'プライムランクのみ'],
  free: '無料',
  paid: '有料',
  salesPlanValues: ['無料', '有料'],
  noLimit: '制限なし',
  primeOnly: 'プライムのみ',
  atLeastElite: 'エリート以上',
  // Publish Dropdown
  publishDropdownTitle: '公開設定',
  publishDropdownValue: ['非公開', '公開'],

  // Project Content Template
  post: '新規作成',
  projectHeaders: {
    title: 'タイトル',
    publish: '公開設定',
    createdAt: '投稿日',
    thumbnail: 'アイキャッチ',
    status: 'ステータス',
  },
  uploadPDFLabel: 'PDF をアップロードする',
  projectsLabel: '案件',

  // Videos Template
  videoHeaders: {
    video: '動画',
    publishSettings: '公開設定',
    limit: '制限',
    createdAt: '投稿日',
    views: '視聴回数',
  },
  uploadVideoLabel: '動画のアップロード',
  shownOnMyPage: 'マイページに表示',
  videosLabel: '動画',

  // Recommended Dropdown
  recommendedPlaceholder: 'マイページ表示を設定してください',
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
