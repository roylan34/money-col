const errorMsgs: { [key: string]: string } = {
  cardNumber: 'カード番号が無効です。',
  cardExpiry: 'カードの有効期限が無効です。',
  cardCvc: 'セキュリティコードが無効です。',
  nameIsRequired: 'カード名義人を正しく入力してください。',
  cardNumberIsRequired: 'カード番号を正しく入力してください。',
  cardExpiryIsRequired: 'カードの有効期限を正しく入力してください。',
  cardCvcIsRequired: 'セキュリティコードを正しく入力してください。',
};

export default {
  // Login Screen
  todoApp: 'Todo App',
  employeeNumber: 'Employee number',
  login: 'Login',
  userNotFound: 'メールアドレスまたはパスワードが間違っています。',
  verifyEmail:
    'ご登録されたメールアドレス宛に送付されている確認メール より、メールアドレスを認証してください。',
  errorProcessRequest: 'リクエスト実行中にエラーが発生しました。',
  roleInvalid: 'ログインできません。',

  // Change Password Screen
  pleaseSetNewPassword: 'Please set the new password',
  newPasswordConfirm: 'New password (confirm)',
  change: 'Change',
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
  san: 'さん',

  // Errors
  required: 'This field is required',
  loginError: 'Incorrect ID or password',
  changePassNotMatchError: 'Passwords do not match.',
  changePassCaseError:
    'Use at least one lowercase letter and one half-size number each.',
  somethingWentWrong: 'Something went wrong. Please retry.',
  unauthenticatedError: '未認証',

  // Sidebar
  sidebar: [
    { title: 'Investment Basics', subTitle: 'Manual' },
    { title: 'Overseas bank account', subTitle: 'Thorough Manual' },
    { title: 'Virtual currency ', subTitle: 'Thorough Manual' },
  ],

  // Registration
  registration: {
    title: '無料会員登録',
    invitation: {
      urgency: 'さあ、今すぐチャンスをその手に。',
      ease: '簡単登録5分で投資を始めましょう！',
    },
    placeholders: {
      email: 'メールアドレス',
      password: 'パスワード',
      passwordConfirmation: 'パスワード(確認)',
    },
    passwordRequirement: '半角英字、数字含む8文字以上',
    submitButtonTitle: '登録する',
    joinFree: '無料会員登録',
    terms: {
      byRegistering: '登録すると ',
      termsOfService: '利用規約',
      and: ' と ',
      privayPolicy: 'プライバシーポリシー',
      consideredAccepted: ' に同意したことになります。',
    },
    logIn: 'ログイン',
    confirmationEmailNotReceived: '確認メールを受信できませんか？',
    registrationComplete: '登録完了',
    emailVerification: {
      instructions: `ご登録のメールアドレス宛に確認メールが送信されました。
        メールを確認して認証を完了してください。`,
      verified: 'メールアドレス認証完了',
      logInCallToAction:
        '登録したメールアドレスの認証が完了しました。 下記よりログインしてください。',
      errors: {
        emailRequired: 'メールアドレスを入力してください',
        passwordRequired: 'パスワードを入力してください',
        retypedPasswordRequired: '同じパスワードを入力してください',
      },
    },
    joinMailingListLabel: 'おすすめ案件などのメールマガジンを受け取る',
  },

  lastName: 'Last Name',
  firstName: 'First Name',

  // Registration Errors
  emailIsRequired: 'Email is required.',
  emailIsInvalid: 'Email is invalid.',
  lastNameIsRequired: '姓を入力してください。',
  lastNameIsInvalid: '姓を正しく入力してください。',
  firstNameIsRequired: '名を入力してください。',
  firstNameIsInvalid: '名を正しく入力してください。',
  passwordIsRequired: 'Password is required.',
  passwordIsInvalid: 'Password is invalid',
  passwordContainsInvalidChars: 'Password contains unavailable characters.',
  retypedPasswordIsRequired: 'Password Confirmation is required.',
  passwordsMustMatch: 'Passwords must match.',
  emailAlreadyInUse: 'このメールアドレスは登録済です。',

  // Forgot Password
  forgotPassword: 'パスワードをお忘れですか？',

  // User Dropdown
  userDropdown: {
    myPageMenu: 'マイページメニュー',
    profile: {
      basicInfo: 'Profile',
      purchases: 'Purchased Item List',
      termsOfServices: 'Terms of Services',
      privacyPolicy: 'Privacy Policy',
      logOut: 'Log Out',
    },
    manuals: {
      overseas: '海外口座徹底解説マニュアル',
      fx: 'FXの始め方マニュアル',
      virtual: '仮想通貨徹底解説マニュアル',
      articles: '記事一覧',
    },
  },

  // Top Nav Bar labels
  topNavBarLabels: {
    myPageTopUrl: 'MyPageTop',
    manuals: 'Manuals',
  },

  // Right Sidebar labels
  pointsHeldLabel: 'Money-co points held',
  purchasePointsLabel: {
    web: {
      firstRow: 'Purchase',
      secondRow: 'money-co points',
    },
    mobile: {
      firstRow: 'Purchase',
      secondRow: 'money-co points',
    },
  },
  // Progress Bar
  progressTitle: 'Up to the next rank',

  // Basic Info
  name: 'Name',
  profileImage: 'Profile Image',
  changePassword: 'Change password',
  noFilesSelected: 'No files selected',
  email: 'Email',
  password: 'Password',
  oldPassword: 'Old Password',
  cancelPasswordChange: 'Cancel Password Change',
  newPassword: 'New Password',
  confirmNewPassword: 'Confirm New Password',
  registeredEmail: 'Registered Email',
  save: 'Save',
  basicInfoTitle: 'Basic Information',
  fileIsTooLarge: 'File is too large',
  unsupportedFileFormat: 'Unsupported file format',

  // Payment Info
  paymentInfoTitle: 'Payment Information',
  confirmPurchaseTitle: 'Confirm purchase details',
  comfirmPurchaseMsg: 'ポイントを円で購入しますか？',

  // Footer Labels
  footerLinks: {
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
  footerFirstColumn: [
    {
      label: 'About company',
      link: 'http://cityofdreams.xsrv.jp/company/',
    },
    {
      label: 'About Money-college',
      link: 'http://cityofdreams.xsrv.jp/about/',
    },
    {
      label: 'Instructor introduction',
      link: 'http://cityofdreams.xsrv.jp/teacher/',
    },
    {
      label: 'Students’ voice',
      link: 'http://cityofdreams.xsrv.jp/voice/',
    },
  ],
  footerSecondColumn: [
    {
      label: 'Course introduction',
      link: 'http://cityofdreams.xsrv.jp/course/',
    },
    {
      label: 'Knowledge and Education Course',
      link: 'http://cityofdreams.xsrv.jp/course/education/',
    },
    {
      label: 'FX trade course',
      link: 'http://cityofdreams.xsrv.jp/course/trade/',
    },
    {
      label: 'EA create course',
      link: 'http://cityofdreams.xsrv.jp/course/expert/',
    },
  ],
  footerThirdColumn: [
    {
      label: 'Investment Basics',
      link: 'http://cityofdreams.xsrv.jp/investment/',
    },
    {
      label: 'Overseas Bank',
      link: 'http://cityofdreams.xsrv.jp/acount/',
    },
    {
      label: 'Virtual currency',
      link: 'http://cityofdreams.xsrv.jp/virtual/',
    },
    {
      label: 'FAQ',
      link: 'http://cityofdreams.xsrv.jp/faq/',
    },
  ],
  footerFourthColumn: [
    {
      label: 'New information',
      link: 'http://cityofdreams.xsrv.jp/news/',
    },
    {
      label: 'Blog',
      link: 'http://cityofdreams.xsrv.jp/blog/',
    },
    {
      label: 'Contact info',
      link: 'http://cityofdreams.xsrv.jp/contact/',
    },
  ],
  footerSiteMap: {
    label: 'サイトマップ',
    link: 'http://cityofdreams.xsrv.jp/sitemap/',
  },
  footerPrivacyPolicy: {
    label: 'プライバシーポリシー',
    link: 'http://cityofdreams.xsrv.jp/privacy/',
  },

  // Default placeholder of text input and area
  defaultPlaceHolder: 'Enter Text',

  // Ask Modal Title
  askModalTitle: 'Ask Questions',
  inputLabels: {
    instructor: 'Instructor',
    title: 'Title',
    description: 'Description',
    attachment: 'Attach File',
  },
  inputTitlePlaceholder: 'Input Title',
  submitButtonLabel: 'Use points to ask question',
  confirmPurchasePoints:
    'ポイントが不足しています。 追加のポイント購入を行いますか？',

  // Confirmation Modal
  confirmationTitle: '送信確認',
  confirmButton: '送信する',
  confirmationDeleteTitle: '消去確認',
  confirmDeleteButton: '削除する',
  cancelButton: 'キャンセル',

  // Update Button
  updateButton: '更新する',

  // AskInstructor Validation
  instructorIsRequired: 'Instructor is required.',
  titleIsRequired: 'Title is required.',
  descriptionIsRequired: 'Description is required.',

  // Stripe Card
  stripeLabels: {
    addButton: '追加する',
    confirmationModalMsg: 'このカード情報を本当に削除しますか？',
    delConfirmationMsg:
      'Are you sure you want to delete this card information?',
    placeHolder: {
      cardName: 'Credit Card Holder',
      cardNumber: 'Card Number',
      cardExpiry: 'MM / YY',
      cardCvc: 'Security Code',
    },
    errorMsgs,
  },
  // Movie Item Titles
  recommendedPastVideos: 'Recommended Videos',
  recommendedTopics: 'Recommended Topics',
  recentlyBoughtVideos: 'Purchased Videos',
  recentlyBoughtManuals: 'Purchased Topic',
  recommendedEA: 'Recommended EA Programs',

  // Reset Password
  resetPassEmailTitle: 'パスワードのリセット',
  resetPassEmailMsg: `登録メールアドレスを入力し、『送信』ボタンを押してください。
    パスワードのリセットのURLを含むメールが送信されます。`,

  resetPassNewPassTitle: 'パスワードの再設定',
  resetPassNewPassMsg: `パスワードの再設定を行います。
  新しいパスワードを入力してください。`,
  resetPassEmailInputLabel:
    'Money Collegeに登録したメールアドレスを入力してください。',
  newPassInputLabel: '半角英字、数字含む8文字以上',
  resetPasswordLinkSent: 'Successfully Sent',
  resetPasswordLinkInstructions: `An email containing your password reset URL has been sent. 
  Please click the link and complete the verification.`,

  // Payment Info Labels
  paymentInfo: {
    registeredCard: 'Current registered card：',
    addCard: 'Add new card information',
    deleteCard: 'Delete card information',
    cancelCard: 'Cancel',
  },

  // input password modal
  identification: 'Identification',
  reauthRationale: `To make sure it's you, please enter your password.`,
  reauthPasswordPlaceholder: 'Password',
  confirmation: 'Confirm',

  error: 'Error',
  updatedSuccessfully: 'Updated Successfully',
  updatedProfileMsg:
    'If you change your email address click the verification link in the confirmation email you received.',
  profileHasBeenUpdated: 'Your profile has been updated.',
  // contents page
  pastVideos: 'おすすめ動画',
  pastProjectVideo: 'おすすめ案件',
  manualList: 'マニュアル一覧',
  eaProgram: 'EAプログラム',
  buy: 'Buy',
  browse: 'Browse',
  purchaseVideoPrompt: 'Do you want to buy this video using:',
  yourPoints: 'your points',
  points: 'points',
  purchaseConfirmation: 'Confirm Purchase',
  notEnoughPoints: 'Not Enough Points',
  replenishPointsPrompt: 'Buy more points?',
  your: 'Your',
  goToPurchase: 'Go To Purchase',

  updateCompleted: 'Update Completed',
  yourLoginEmail: 'Your log in email',
  hasRevertedTo: 'has been changed',
  emailRecoveryInfo:
    "If you haven't requested to change your login email address, it's possible that someone is trying to access your account. right now",
  resetPassword: 'reset password',
  pleaseDoIt: 'please',
  contactBannerLabel:
    '当学習塾では、お金に関する教養のほか、資産運用や副業として、FXのトレード方法などの情報も提供しております。どんな事でもお尋ねください。',
  view: 'View',
  unavailable: 'Unavailable',

  // bought contents page
  purchasedItems: 'Purchased Items',
  boughtPastVideos: 'Past Videos',
  case: 'Case',
  boughtContentsHeaders: {
    videos: '過去動画',
    projectContents: '案件',
  },
  boughtContentsTitle: {
    videos: '過去動画',
    projectContents: '購入済みアイテム',
  },
  pointsWereRefunded: 'pts were refunded',

  seeMore: 'もっと見る',
  noPurchasedContent: '購入済コンテンツはありません',

  // Mailbox
  mailboxHeader: 'メールボックス',
  mailboxInputPlaceholder: 'ここに返信を入力',
  mailboxInputSendButton: 'マネカレポイントを使って返信する',
  mailFileSizeError: 'ファイル容量は20MBまでです',
  mailboxSettingsTitle: '設定',
  mailboxSettingsDone: '完了',
  mailboxNotifLabel: '通知',
  mailboxNotifCheckboxLabel: '返信が来たら登録メールアドレス宛に通知する',
  mailboxNotifUsageLabel: 'ポイント使用 の通知',
  mailboxNotifUsageCheckboxLabel:
    'メッセージ送信の際にポイント使用確認画面を表示する',
  msgSeen: 'Seen',
  adminHeader: 'メールボックス - 岡田准一',

  // Admin Mailbox
  pointMgmtModalHeader: 'ポイント管理',
  pointMgmtModalInputLabel: 'ポイント',
  pointMgmtModalInputPlaceholder: 'ポイント数を入力',
  pointMgmtModalCheckboxLabel: 'マイナスにする',
  confirmButtonLabel: '確定',
  userDetailsBackLabel: 'ユーザー詳細ページ',
  userDetailsPtUsageHist: 'ポイント使用履歴',

  // Admin Users list
  addGiveAwaysSuccessTitle: 'ポイント付与完了',
  addGiveAwaysSuccessMsg: '全ユーザーへのポイント付与が完了しました。',

  // Purchase Points
  selectPointsHeader: 'ポイントを選ぶ',
  purchasePointsWarning:
    'デジタルコンテンツのため、商品の性質上返品はお受けしておりません。ポイントの有効期限は最後にポイントをご購入、または最後にポイントをご利用いただいた日より半年間です。',
  aboutPaymentMethod: 'お支払い方法について',
  return: 'もどる',
  paymentConfirmationTitle: '支払い完了',
  paymentFailureToAddPoints: 'ポイント付与失敗',
  paymentCompleted: '支払いが完了しました。',
  continueToMyPageTop: '引き続きMoney Collegeをお楽しみください。',
  toMyPageTopPrompt: 'マイページトップへ',
  toContentListPrompt: 'コンテンツ一覧ページへ',
  paymentFailAddPointsError:
    'ポイント付与の手続き中にエラーが発生いたしました。\nお客様のお支払いは完了しており、運営よりポイント付与の手続きをさせていただきます。\nポイント付与まで少々お待ちください。\nご不便をおかけし、大変申し訳ございません。',
  paymentFailAddPointsPrompt:
    '万が一ポイントが付与されない場合は、お手数ですがマイページトップの「お問い合わせ」より運営へご報告いただきますよう、何卒よろしくお願いいたします。',

  // Users Template
  usersHeader: 'ユーザー情報ページ',
  usersSearchBarPlaceholder: '検索したいワードを入力',

  purchaseHistory: {
    videoLectures: 'Video Lecture Purchase',
    projectContents: 'Project Content Purchase',
    EAPrograms: 'EA Program Purchase',
    manuals: 'Manuals Purchase',
    replyToInstructor: 'Reply to Mail',
    askInstructor: 'Ask Instructor',
    default: 'Purchase',
  },
  // Purchase Points
  paymentOverview: '概要',
  paymentTotal: '合計：',
  pointsToBePurchased: 'ポイント：',
  paymentTermsAndConditions:
    '支払いを完了することにより、サービス規約に同意したものとみなされます。',
  selectPaymentOption: '支払方法を選択',
  paypal: 'PayPal',
  addNewCard: '新しくカードを追加する',
  paypalPrompt:
    '取引を完了するために、PayPalのセキュリティで保護されたサーバーに移動します。',
  checkoutFailure: 'エラーが発生しました。再試行してください。',
  welcomeToast: 'Welcome!',
  bonusPoint: 'Bonus Point',

  //Error boundary, unexpected errors
  errorBoundaryTitle: '操作中に予期せぬエラーが発生しました',
  errorBoundaryMessage: 'Well, sorry this is unexpected....',
  errorBoundaryButton: 'ホームに戻る',

  // PaymentErrors
  cardDeclined: '支払いができませんでした。決済業者へご確認ください。',
  stripeServerError:
    'サーバエラーが発生いたしました。時間を置いて再度手続きしてください。',
  stripeConnectionError:
    '接続中にエラーが発生しました。時間を置いて再度手続きしてください。',
};
