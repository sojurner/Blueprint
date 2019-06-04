import { lazy } from 'react';
const iconList: Function = (iconName: string) => {
  let Rounded;
  let Outlined;
  let Sharp;
  let TwoTone;

  switch (iconName) {
    case "AcUnit":      
        Rounded = lazy(() => import('@material-ui/icons/AcUnitRounded')),
        Outlined = lazy(() => import('@material-ui/icons/AcUnitOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AcUnitSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AcUnitTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AccessAlarm":
      
      Rounded = lazy(() => import('@material-ui/icons/AccessAlarmRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AccessAlarmOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AccessAlarmSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AccessAlarmTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AccessAlarms":
      
      Rounded = lazy(() => import('@material-ui/icons/AccessAlarmsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AccessAlarmsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AccessAlarmsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AccessAlarmsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AccessTime":
      
      Rounded = lazy(() => import('@material-ui/icons/AccessTimeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AccessTimeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AccessTimeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AccessTimeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AccessibilityNew":
      
      Rounded = lazy(() => import('@material-ui/icons/AccessibilityNewRounded')),
      Outlined =lazy(() => import('@material-ui/icons/AccessibilityNewOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AccessibilityNewSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AccessibilityNewTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Accessibility":
      
      Rounded = lazy(() => import('@material-ui/icons/AccessibilityRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AccessibilityOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AccessibilitySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AccessibilityTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AccessibleForward":
      
      Rounded =
        lazy(() => import('@material-ui/icons/AccessibleForwardRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AccessibleForwardOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AccessibleForwardSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AccessibleForwardTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Accessible":
      
      Rounded = lazy(() => import('@material-ui/icons/AccessibleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AccessibleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AccessibleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AccessibleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AccountBalance":
      
      Rounded = lazy(() => import('@material-ui/icons/AccountBalanceRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AccountBalanceOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AccountBalanceSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AccountBalanceTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AccountBalanceWallet":
      
      Rounded =
        lazy(() => import('@material-ui/icons/AccountBalanceWalletRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AccountBalanceWalletOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AccountBalanceWalletSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/AccountBalanceWalletTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AccountBox":
      
      Rounded = lazy(() => import('@material-ui/icons/AccountBoxRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AccountBoxOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AccountBoxSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AccountBoxTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AccountCircle":
      
      Rounded = lazy(() => import('@material-ui/icons/AccountCircleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AccountCircleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AccountCircleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AccountCircleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Adb":
      
      Rounded = lazy(() => import('@material-ui/icons/AdbRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AdbOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AdbSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AdbTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AddAPhoto":
      
      Rounded = lazy(() => import('@material-ui/icons/AddAPhotoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AddAPhotoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AddAPhotoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AddAPhotoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AddAlarm":
      
      Rounded = lazy(() => import('@material-ui/icons/AddAlarmRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AddAlarmOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AddAlarmSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AddAlarmTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AddAlert":
      
      Rounded = lazy(() => import('@material-ui/icons/AddAlertRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AddAlertOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AddAlertSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AddAlertTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AddBox":
      
      Rounded = lazy(() => import('@material-ui/icons/AddBoxRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AddBoxOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AddBoxSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AddBoxTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AddCircleOutline":
      
      Rounded = lazy(() => import('@material-ui/icons/AddCircleOutlineRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AddCircleOutlineOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AddCircleOutlineSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AddCircleOutlineTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AddCircle":
      
      Rounded = lazy(() => import('@material-ui/icons/AddCircleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AddCircleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AddCircleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AddCircleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AddComment":
      
      Rounded = lazy(() => import('@material-ui/icons/AddCommentRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AddCommentOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AddCommentSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AddCommentTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AddLocation":
      
      Rounded = lazy(() => import('@material-ui/icons/AddLocationRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AddLocationOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AddLocationSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AddLocationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Add":
      
      Rounded = lazy(() => import('@material-ui/icons/AddRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AddOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AddSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AddTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AddPhotoAlternate":
      
      Rounded =
        lazy(() => import('@material-ui/icons/AddPhotoAlternateRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AddPhotoAlternateOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AddPhotoAlternateSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AddPhotoAlternateTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AddShoppingCart":
      
      Rounded = lazy(() => import('@material-ui/icons/AddShoppingCartRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AddShoppingCartOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AddShoppingCartSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AddShoppingCartTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AddToHomeScreen":
      
      Rounded = lazy(() => import('@material-ui/icons/AddToHomeScreenRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AddToHomeScreenOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AddToHomeScreenSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AddToHomeScreenTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AddToPhotos":
      
      Rounded = lazy(() => import('@material-ui/icons/AddToPhotosRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AddToPhotosOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AddToPhotosSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AddToPhotosTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AddToQueue":
      
      Rounded = lazy(() => import('@material-ui/icons/AddToQueueRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AddToQueueOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AddToQueueSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AddToQueueTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Adjust":
      
      Rounded = lazy(() => import('@material-ui/icons/AdjustRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AdjustOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AdjustSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AdjustTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AirlineSeatFlatAngled":
      
      Rounded =
        lazy(() => import('@material-ui/icons/AirlineSeatFlatAngledRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AirlineSeatFlatAngledOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/AirlineSeatFlatAngledSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/AirlineSeatFlatAngledTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AirlineSeatFlat":
      
      Rounded = lazy(() => import('@material-ui/icons/AirlineSeatFlatRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AirlineSeatFlatOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AirlineSeatFlatSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AirlineSeatFlatTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AirlineSeatIndividualSuite":
      
      Rounded =
        lazy(() => import('@material-ui/icons/AirlineSeatIndividualSuiteRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AirlineSeatIndividualSuiteOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/AirlineSeatIndividualSuiteSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/AirlineSeatIndividualSuiteTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AirlineSeatLegroomExtra":
      
      Rounded =
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomExtraRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomExtraOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomExtraSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomExtraTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AirlineSeatLegroomNormal":
      
      Rounded =
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomNormalRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomNormalOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomNormalSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomNormalTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AirlineSeatLegroomReduced":
      
      Rounded =
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomReducedRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomReducedOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomReducedSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomReducedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AirlineSeatReclineExtra":
      
      Rounded =
        lazy(() => import('@material-ui/icons/AirlineSeatReclineExtraRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AirlineSeatReclineExtraOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/AirlineSeatReclineExtraSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/AirlineSeatReclineExtraTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AirlineSeatReclineNormal":
      
      Rounded =
        lazy(() => import('@material-ui/icons/AirlineSeatReclineNormalRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AirlineSeatReclineNormalOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/AirlineSeatReclineNormalSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/AirlineSeatReclineNormalTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AirplanemodeActive":
      
      Rounded =
        lazy(() => import('@material-ui/icons/AirplanemodeActiveRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AirplanemodeActiveOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AirplanemodeActiveSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/AirplanemodeActiveTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AirplanemodeInactive":
      
      Rounded =
        lazy(() => import('@material-ui/icons/AirplanemodeInactiveRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AirplanemodeInactiveOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AirplanemodeInactiveSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/AirplanemodeInactiveTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Airplay":
      
      Rounded = lazy(() => import('@material-ui/icons/AirplayRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AirplayOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AirplaySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AirplayTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AirportShuttle":
      
      Rounded = lazy(() => import('@material-ui/icons/AirportShuttleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AirportShuttleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AirportShuttleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AirportShuttleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AlarmAdd":
      
      Rounded = lazy(() => import('@material-ui/icons/AlarmAddRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AlarmAddOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AlarmAddSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AlarmAddTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AlarmOff":
      
      Rounded = lazy(() => import('@material-ui/icons/AlarmOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AlarmOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AlarmOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AlarmOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AlarmOn":
      
      Rounded = lazy(() => import('@material-ui/icons/AlarmOnRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AlarmOnOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AlarmOnSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AlarmOnTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Alarm":
      
      Rounded = lazy(() => import('@material-ui/icons/AlarmRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AlarmOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AlarmSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AlarmTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Album":
      
      Rounded = lazy(() => import('@material-ui/icons/AlbumRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AlbumOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AlbumSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AlbumTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AllInbox":
      
      Rounded = lazy(() => import('@material-ui/icons/AllInboxRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AllInboxOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AllInboxSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AllInboxTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AllInclusive":
      
      Rounded = lazy(() => import('@material-ui/icons/AllInclusiveRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AllInclusiveOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AllInclusiveSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AllInclusiveTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AllOut":
      
      Rounded = lazy(() => import('@material-ui/icons/AllOutRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AllOutOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AllOutSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AllOutTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AlternateEmail":
      
      Rounded = lazy(() => import('@material-ui/icons/AlternateEmailRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AlternateEmailOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AlternateEmailSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AlternateEmailTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Android":
      
      Rounded = lazy(() => import('@material-ui/icons/AndroidRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AndroidOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AndroidSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AndroidTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Announcement":
      
      Rounded = lazy(() => import('@material-ui/icons/AnnouncementRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AnnouncementOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AnnouncementSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AnnouncementTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Apps":
      
      Rounded = lazy(() => import('@material-ui/icons/AppsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AppsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AppsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AppsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Archive":
      
      Rounded = lazy(() => import('@material-ui/icons/ArchiveRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ArchiveOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ArchiveSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ArchiveTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ArrowBackIos":
      
      Rounded = lazy(() => import('@material-ui/icons/ArrowBackIosRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ArrowBackIosOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ArrowBackIosSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ArrowBackIosTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ArrowBack":
      
      Rounded = lazy(() => import('@material-ui/icons/ArrowBackRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ArrowBackOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ArrowBackSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ArrowBackTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ArrowDownward":
      
      Rounded = lazy(() => import('@material-ui/icons/ArrowDownwardRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ArrowDownwardOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ArrowDownwardSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ArrowDownwardTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ArrowDropDownCircle":
      
      Rounded =
        lazy(() => import('@material-ui/icons/ArrowDropDownCircleRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/ArrowDropDownCircleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ArrowDropDownCircleSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/ArrowDropDownCircleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ArrowDropDown":
      
      Rounded = lazy(() => import('@material-ui/icons/ArrowDropDownRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ArrowDropDownOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ArrowDropDownSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ArrowDropDownTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ArrowDropUp":
      
      Rounded = lazy(() => import('@material-ui/icons/ArrowDropUpRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ArrowDropUpOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ArrowDropUpSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ArrowDropUpTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ArrowForwardIos":
      
      Rounded = lazy(() => import('@material-ui/icons/ArrowForwardIosRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/ArrowForwardIosOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ArrowForwardIosSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ArrowForwardIosTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ArrowForward":
      
      Rounded = lazy(() => import('@material-ui/icons/ArrowForwardRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ArrowForwardOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ArrowForwardSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ArrowForwardTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ArrowLeft":
      
      Rounded = lazy(() => import('@material-ui/icons/ArrowLeftRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ArrowLeftOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ArrowLeftSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ArrowLeftTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ArrowRightAlt":
      
      Rounded = lazy(() => import('@material-ui/icons/ArrowRightAltRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ArrowRightAltOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ArrowRightAltSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ArrowRightAltTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ArrowRight":
      
      Rounded = lazy(() => import('@material-ui/icons/ArrowRightRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ArrowRightOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ArrowRightSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ArrowRightTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ArrowUpward":
      
      Rounded = lazy(() => import('@material-ui/icons/ArrowUpwardRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ArrowUpwardOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ArrowUpwardSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ArrowUpwardTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ArtTrack":
      
      Rounded = lazy(() => import('@material-ui/icons/ArtTrackRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ArtTrackOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ArtTrackSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ArtTrackTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AspectRatio":
      
      Rounded = lazy(() => import('@material-ui/icons/AspectRatioRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AspectRatioOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AspectRatioSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AspectRatioTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Assessment":
      
      Rounded = lazy(() => import('@material-ui/icons/AssessmentRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AssessmentOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AssessmentSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AssessmentTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AssignmentInd":
      
      Rounded = lazy(() => import('@material-ui/icons/AssignmentIndRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AssignmentIndOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AssignmentIndSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AssignmentIndTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AssignmentLate":
      
      Rounded = lazy(() => import('@material-ui/icons/AssignmentLateRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AssignmentLateOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AssignmentLateSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AssignmentLateTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Assignment":
      
      Rounded = lazy(() => import('@material-ui/icons/AssignmentRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AssignmentOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AssignmentSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AssignmentTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AssignmentReturn":
      
      Rounded = lazy(() => import('@material-ui/icons/AssignmentReturnRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AssignmentReturnOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AssignmentReturnSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AssignmentReturnTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AssignmentReturned":
      
      Rounded =
        lazy(() => import('@material-ui/icons/AssignmentReturnedRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AssignmentReturnedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AssignmentReturnedSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/AssignmentReturnedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AssignmentTurnedIn":
      
      Rounded =
        lazy(() => import('@material-ui/icons/AssignmentTurnedInRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/AssignmentTurnedInOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AssignmentTurnedInSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/AssignmentTurnedInTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Assistant":
      
      Rounded = lazy(() => import('@material-ui/icons/AssistantRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AssistantOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AssistantSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AssistantTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AssistantPhoto":
      
      Rounded = lazy(() => import('@material-ui/icons/AssistantPhotoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AssistantPhotoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AssistantPhotoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AssistantPhotoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Atm":
      
      Rounded = lazy(() => import('@material-ui/icons/AtmRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AtmOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AtmSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AtmTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AttachFile":
      
      Rounded = lazy(() => import('@material-ui/icons/AttachFileRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AttachFileOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AttachFileSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AttachFileTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AttachMoney":
      
      Rounded = lazy(() => import('@material-ui/icons/AttachMoneyRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AttachMoneyOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AttachMoneySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AttachMoneyTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Attachment":
      
      Rounded = lazy(() => import('@material-ui/icons/AttachmentRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AttachmentOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AttachmentSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AttachmentTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Audiotrack":
      
      Rounded = lazy(() => import('@material-ui/icons/AudiotrackRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AudiotrackOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AudiotrackSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AudiotrackTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Autorenew":
      
      Rounded = lazy(() => import('@material-ui/icons/AutorenewRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AutorenewOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AutorenewSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AutorenewTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "AvTimer":
      
      Rounded = lazy(() => import('@material-ui/icons/AvTimerRounded')),
      Outlined = lazy(() => import('@material-ui/icons/AvTimerOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/AvTimerSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/AvTimerTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Backspace":
      
      Rounded = lazy(() => import('@material-ui/icons/BackspaceRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BackspaceOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BackspaceSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BackspaceTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Backup":
      
      Rounded = lazy(() => import('@material-ui/icons/BackupRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BackupOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BackupSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BackupTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Ballot":
      
      Rounded = lazy(() => import('@material-ui/icons/BallotRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BallotOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BallotSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BallotTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BarChart":
      
      Rounded = lazy(() => import('@material-ui/icons/BarChartRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BarChartOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BarChartSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BarChartTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Battery20":
      
      Rounded = lazy(() => import('@material-ui/icons/Battery20Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Battery20Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Battery20Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Battery20TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Battery30":
      
      Rounded = lazy(() => import('@material-ui/icons/Battery30Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Battery30Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Battery30Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Battery30TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Battery50":
      
      Rounded = lazy(() => import('@material-ui/icons/Battery50Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Battery50Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Battery50Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Battery50TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Battery60":
      
      Rounded = lazy(() => import('@material-ui/icons/Battery60Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Battery60Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Battery60Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Battery60TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Battery80":
      
      Rounded = lazy(() => import('@material-ui/icons/Battery80Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Battery80Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Battery80Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Battery80TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Battery90":
      
      Rounded = lazy(() => import('@material-ui/icons/Battery90Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Battery90Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Battery90Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Battery90TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BatteryAlert":
      
      Rounded = lazy(() => import('@material-ui/icons/BatteryAlertRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BatteryAlertOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BatteryAlertSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BatteryAlertTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BatteryCharging20":
      
      Rounded =
        lazy(() => import('@material-ui/icons/BatteryCharging20Rounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/BatteryCharging20Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/BatteryCharging20Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BatteryCharging20TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BatteryCharging30":
      
      Rounded =
        lazy(() => import('@material-ui/icons/BatteryCharging30Rounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/BatteryCharging30Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/BatteryCharging30Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BatteryCharging30TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BatteryCharging50":
      
      Rounded =
        lazy(() => import('@material-ui/icons/BatteryCharging50Rounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/BatteryCharging50Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/BatteryCharging50Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BatteryCharging50TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BatteryCharging60":
      
      Rounded =
        lazy(() => import('@material-ui/icons/BatteryCharging60Rounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/BatteryCharging60Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/BatteryCharging60Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BatteryCharging60TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BatteryCharging80":
      
      Rounded =
        lazy(() => import('@material-ui/icons/BatteryCharging80Rounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/BatteryCharging80Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/BatteryCharging80Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BatteryCharging80TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BatteryCharging90":
      
      Rounded =
        lazy(() => import('@material-ui/icons/BatteryCharging90Rounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/BatteryCharging90Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/BatteryCharging90Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BatteryCharging90TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BatteryChargingFull":
      
      Rounded =
        lazy(() => import('@material-ui/icons/BatteryChargingFullRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/BatteryChargingFullOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BatteryChargingFullSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/BatteryChargingFullTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BatteryFull":
      
      Rounded = lazy(() => import('@material-ui/icons/BatteryFullRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BatteryFullOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BatteryFullSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BatteryFullTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BatteryStd":
      
      Rounded = lazy(() => import('@material-ui/icons/BatteryStdRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BatteryStdOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BatteryStdSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BatteryStdTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BatteryUnknown":
      
      Rounded = lazy(() => import('@material-ui/icons/BatteryUnknownRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BatteryUnknownOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BatteryUnknownSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BatteryUnknownTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BeachAccess":
      
      Rounded = lazy(() => import('@material-ui/icons/BeachAccessRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BeachAccessOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BeachAccessSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BeachAccessTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Beenhere":
      
      Rounded = lazy(() => import('@material-ui/icons/BeenhereRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BeenhereOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BeenhereSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BeenhereTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Block":
      
      Rounded = lazy(() => import('@material-ui/icons/BlockRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BlockOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BlockSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BlockTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BluetoothAudio":
      
      Rounded = lazy(() => import('@material-ui/icons/BluetoothAudioRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BluetoothAudioOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BluetoothAudioSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BluetoothAudioTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BluetoothConnected":
      
      Rounded =
        lazy(() => import('@material-ui/icons/BluetoothConnectedRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/BluetoothConnectedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BluetoothConnectedSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/BluetoothConnectedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BluetoothDisabled":
      
      Rounded =
        lazy(() => import('@material-ui/icons/BluetoothDisabledRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/BluetoothDisabledOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BluetoothDisabledSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BluetoothDisabledTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Bluetooth":
      
      Rounded = lazy(() => import('@material-ui/icons/BluetoothRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BluetoothOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BluetoothSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BluetoothTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BluetoothSearching":
      
      Rounded =
        lazy(() => import('@material-ui/icons/BluetoothSearchingRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/BluetoothSearchingOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BluetoothSearchingSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/BluetoothSearchingTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BlurCircular":
      
      Rounded = lazy(() => import('@material-ui/icons/BlurCircularRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BlurCircularOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BlurCircularSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BlurCircularTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BlurLinear":
      
      Rounded = lazy(() => import('@material-ui/icons/BlurLinearRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BlurLinearOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BlurLinearSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BlurLinearTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BlurOff":
      
      Rounded = lazy(() => import('@material-ui/icons/BlurOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BlurOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BlurOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BlurOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BlurOn":
      
      Rounded = lazy(() => import('@material-ui/icons/BlurOnRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BlurOnOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BlurOnSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BlurOnTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Book":
      
      Rounded = lazy(() => import('@material-ui/icons/BookRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BookOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BookSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BookTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BookmarkBorder":
      
      Rounded = lazy(() => import('@material-ui/icons/BookmarkBorderRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BookmarkBorderOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BookmarkBorderSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BookmarkBorderTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Bookmark":
      
      Rounded = lazy(() => import('@material-ui/icons/BookmarkRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BookmarkOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BookmarkSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BookmarkTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Bookmarks":
      
      Rounded = lazy(() => import('@material-ui/icons/BookmarksRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BookmarksOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BookmarksSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BookmarksTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BorderAll":
      
      Rounded = lazy(() => import('@material-ui/icons/BorderAllRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BorderAllOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BorderAllSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BorderAllTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BorderBottom":
      
      Rounded = lazy(() => import('@material-ui/icons/BorderBottomRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BorderBottomOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BorderBottomSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BorderBottomTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BorderClear":
      
      Rounded = lazy(() => import('@material-ui/icons/BorderClearRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BorderClearOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BorderClearSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BorderClearTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BorderColor":
      
      Rounded = lazy(() => import('@material-ui/icons/BorderColorRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BorderColorOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BorderColorSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BorderColorTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BorderHorizontal":
      
      Rounded = lazy(() => import('@material-ui/icons/BorderHorizontalRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/BorderHorizontalOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BorderHorizontalSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BorderHorizontalTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BorderInner":
      
      Rounded = lazy(() => import('@material-ui/icons/BorderInnerRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BorderInnerOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BorderInnerSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BorderInnerTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BorderLeft":
      
      Rounded = lazy(() => import('@material-ui/icons/BorderLeftRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BorderLeftOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BorderLeftSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BorderLeftTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BorderOuter":
      
      Rounded = lazy(() => import('@material-ui/icons/BorderOuterRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BorderOuterOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BorderOuterSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BorderOuterTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BorderRight":
      
      Rounded = lazy(() => import('@material-ui/icons/BorderRightRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BorderRightOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BorderRightSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BorderRightTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BorderStyle":
      
      Rounded = lazy(() => import('@material-ui/icons/BorderStyleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BorderStyleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BorderStyleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BorderStyleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BorderTop":
      
      Rounded = lazy(() => import('@material-ui/icons/BorderTopRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BorderTopOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BorderTopSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BorderTopTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BorderVertical":
      
      Rounded = lazy(() => import('@material-ui/icons/BorderVerticalRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BorderVerticalOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BorderVerticalSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BorderVerticalTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BrandingWatermark":
      
      Rounded =
        lazy(() => import('@material-ui/icons/BrandingWatermarkRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/BrandingWatermarkOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BrandingWatermarkSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BrandingWatermarkTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Brightness1":
      
      Rounded = lazy(() => import('@material-ui/icons/Brightness1Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Brightness1Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Brightness1Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Brightness1TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Brightness2":
      
      Rounded = lazy(() => import('@material-ui/icons/Brightness2Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Brightness2Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Brightness2Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Brightness2TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Brightness3":
      
      Rounded = lazy(() => import('@material-ui/icons/Brightness3Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Brightness3Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Brightness3Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Brightness3TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Brightness4":
      
      Rounded = lazy(() => import('@material-ui/icons/Brightness4Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Brightness4Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Brightness4Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Brightness4TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Brightness5":
      
      Rounded = lazy(() => import('@material-ui/icons/Brightness5Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Brightness5Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Brightness5Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Brightness5TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Brightness6":
      
      Rounded = lazy(() => import('@material-ui/icons/Brightness6Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Brightness6Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Brightness6Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Brightness6TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Brightness7":
      
      Rounded = lazy(() => import('@material-ui/icons/Brightness7Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Brightness7Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Brightness7Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Brightness7TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BrightnessAuto":
      
      Rounded = lazy(() => import('@material-ui/icons/BrightnessAutoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BrightnessAutoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BrightnessAutoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BrightnessAutoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BrightnessHigh":
      
      Rounded = lazy(() => import('@material-ui/icons/BrightnessHighRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BrightnessHighOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BrightnessHighSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BrightnessHighTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BrightnessLow":
      
      Rounded = lazy(() => import('@material-ui/icons/BrightnessLowRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BrightnessLowOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BrightnessLowSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BrightnessLowTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BrightnessMedium":
      
      Rounded = lazy(() => import('@material-ui/icons/BrightnessMediumRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/BrightnessMediumOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BrightnessMediumSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BrightnessMediumTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BrokenImage":
      
      Rounded = lazy(() => import('@material-ui/icons/BrokenImageRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BrokenImageOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BrokenImageSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BrokenImageTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Brush":
      
      Rounded = lazy(() => import('@material-ui/icons/BrushRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BrushOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BrushSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BrushTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BubbleChart":
      
      Rounded = lazy(() => import('@material-ui/icons/BubbleChartRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BubbleChartOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BubbleChartSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BubbleChartTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BugReport":
      
      Rounded = lazy(() => import('@material-ui/icons/BugReportRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BugReportOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BugReportSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BugReportTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Build":
      
      Rounded = lazy(() => import('@material-ui/icons/BuildRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BuildOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BuildSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BuildTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BurstMode":
      
      Rounded = lazy(() => import('@material-ui/icons/BurstModeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BurstModeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BurstModeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BurstModeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "BusinessCenter":
      
      Rounded = lazy(() => import('@material-ui/icons/BusinessCenterRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BusinessCenterOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BusinessCenterSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BusinessCenterTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Business":
      
      Rounded = lazy(() => import('@material-ui/icons/BusinessRounded')),
      Outlined = lazy(() => import('@material-ui/icons/BusinessOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/BusinessSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/BusinessTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Cached":
      
      Rounded = lazy(() => import('@material-ui/icons/CachedRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CachedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CachedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CachedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Cake":
      
      Rounded = lazy(() => import('@material-ui/icons/CakeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CakeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CakeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CakeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CalendarToday":
      
      Rounded = lazy(() => import('@material-ui/icons/CalendarTodayRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CalendarTodayOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CalendarTodaySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CalendarTodayTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CalendarViewDay":
      
      Rounded = lazy(() => import('@material-ui/icons/CalendarViewDayRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/CalendarViewDayOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CalendarViewDaySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CalendarViewDayTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CallEnd":
      
      Rounded = lazy(() => import('@material-ui/icons/CallEndRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CallEndOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CallEndSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CallEndTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CallMade":
      
      Rounded = lazy(() => import('@material-ui/icons/CallMadeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CallMadeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CallMadeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CallMadeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CallMerge":
      
      Rounded = lazy(() => import('@material-ui/icons/CallMergeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CallMergeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CallMergeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CallMergeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CallMissedOutgoing":
      
      Rounded =
        lazy(() => import('@material-ui/icons/CallMissedOutgoingRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/CallMissedOutgoingOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CallMissedOutgoingSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/CallMissedOutgoingTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CallMissed":
      
      Rounded = lazy(() => import('@material-ui/icons/CallMissedRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CallMissedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CallMissedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CallMissedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Call":
      
      Rounded = lazy(() => import('@material-ui/icons/CallRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CallOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CallSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CallTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CallReceived":
      
      Rounded = lazy(() => import('@material-ui/icons/CallReceivedRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CallReceivedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CallReceivedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CallReceivedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CallSplit":
      
      Rounded = lazy(() => import('@material-ui/icons/CallSplitRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CallSplitOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CallSplitSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CallSplitTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CallToAction":
      
      Rounded = lazy(() => import('@material-ui/icons/CallToActionRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CallToActionOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CallToActionSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CallToActionTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CameraAlt":
      
      Rounded = lazy(() => import('@material-ui/icons/CameraAltRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CameraAltOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CameraAltSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CameraAltTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CameraEnhance":
      
      Rounded = lazy(() => import('@material-ui/icons/CameraEnhanceRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CameraEnhanceOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CameraEnhanceSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CameraEnhanceTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CameraFront":
      
      Rounded = lazy(() => import('@material-ui/icons/CameraFrontRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CameraFrontOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CameraFrontSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CameraFrontTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Camera":
      
      Rounded = lazy(() => import('@material-ui/icons/CameraRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CameraOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CameraSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CameraTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CameraRear":
      
      Rounded = lazy(() => import('@material-ui/icons/CameraRearRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CameraRearOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CameraRearSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CameraRearTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CameraRoll":
      
      Rounded = lazy(() => import('@material-ui/icons/CameraRollRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CameraRollOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CameraRollSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CameraRollTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Cancel":
      
      Rounded = lazy(() => import('@material-ui/icons/CancelRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CancelOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CancelSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CancelTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CancelPresentation":
      
      Rounded =
        lazy(() => import('@material-ui/icons/CancelPresentationRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/CancelPresentationOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CancelPresentationSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/CancelPresentationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CardGiftcard":
      
      Rounded = lazy(() => import('@material-ui/icons/CardGiftcardRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CardGiftcardOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CardGiftcardSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CardGiftcardTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CardMembership":
      
      Rounded = lazy(() => import('@material-ui/icons/CardMembershipRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CardMembershipOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CardMembershipSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CardMembershipTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CardTravel":
      
      Rounded = lazy(() => import('@material-ui/icons/CardTravelRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CardTravelOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CardTravelSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CardTravelTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Casino":
      
      Rounded = lazy(() => import('@material-ui/icons/CasinoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CasinoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CasinoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CasinoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CastConnected":
      
      Rounded = lazy(() => import('@material-ui/icons/CastConnectedRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CastConnectedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CastConnectedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CastConnectedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CastForEducation":
      
      Rounded = lazy(() => import('@material-ui/icons/CastForEducationRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/CastForEducationOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CastForEducationSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CastForEducationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Cast":
      
      Rounded = lazy(() => import('@material-ui/icons/CastRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CastOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CastSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CastTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Category":
      
      Rounded = lazy(() => import('@material-ui/icons/CategoryRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CategoryOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CategorySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CategoryTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CellWifi":
      
      Rounded = lazy(() => import('@material-ui/icons/CellWifiRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CellWifiOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CellWifiSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CellWifiTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CenterFocusStrong":
      
      Rounded =
        lazy(() => import('@material-ui/icons/CenterFocusStrongRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/CenterFocusStrongOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CenterFocusStrongSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CenterFocusStrongTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CenterFocusWeak":
      
      Rounded = lazy(() => import('@material-ui/icons/CenterFocusWeakRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/CenterFocusWeakOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CenterFocusWeakSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CenterFocusWeakTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ChangeHistory":
      
      Rounded = lazy(() => import('@material-ui/icons/ChangeHistoryRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ChangeHistoryOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ChangeHistorySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ChangeHistoryTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ChatBubbleOutline":
      
      Rounded =
        lazy(() => import('@material-ui/icons/ChatBubbleOutlineRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/ChatBubbleOutlineOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ChatBubbleOutlineSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ChatBubbleOutlineTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ChatBubble":
      
      Rounded = lazy(() => import('@material-ui/icons/ChatBubbleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ChatBubbleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ChatBubbleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ChatBubbleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Chat":
      
      Rounded = lazy(() => import('@material-ui/icons/ChatRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ChatOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ChatSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ChatTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CheckBoxOutlineBlank":
      
      Rounded =
        lazy(() => import('@material-ui/icons/CheckBoxOutlineBlankRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/CheckBoxOutlineBlankOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CheckBoxOutlineBlankSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/CheckBoxOutlineBlankTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CheckBox":
      
      Rounded = lazy(() => import('@material-ui/icons/CheckBoxRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CheckBoxOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CheckBoxSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CheckBoxTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CheckCircleOutline":
      
      Rounded =
        lazy(() => import('@material-ui/icons/CheckCircleOutlineRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/CheckCircleOutlineOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CheckCircleOutlineSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/CheckCircleOutlineTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CheckCircle":
      
      Rounded = lazy(() => import('@material-ui/icons/CheckCircleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CheckCircleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CheckCircleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CheckCircleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Check":
      
      Rounded = lazy(() => import('@material-ui/icons/CheckRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CheckOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CheckSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CheckTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ChevronLeft":
      
      Rounded = lazy(() => import('@material-ui/icons/ChevronLeftRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ChevronLeftOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ChevronLeftSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ChevronLeftTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ChevronRight":
      
      Rounded = lazy(() => import('@material-ui/icons/ChevronRightRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ChevronRightOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ChevronRightSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ChevronRightTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ChildCare":
      
      Rounded = lazy(() => import('@material-ui/icons/ChildCareRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ChildCareOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ChildCareSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ChildCareTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ChildFriendly":
      
      Rounded = lazy(() => import('@material-ui/icons/ChildFriendlyRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ChildFriendlyOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ChildFriendlySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ChildFriendlyTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ChromeReaderMode":
      
      Rounded = lazy(() => import('@material-ui/icons/ChromeReaderModeRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/ChromeReaderModeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ChromeReaderModeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ChromeReaderModeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Class":
      
      Rounded = lazy(() => import('@material-ui/icons/ClassRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ClassOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ClassSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ClassTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ClearAll":
      
      Rounded = lazy(() => import('@material-ui/icons/ClearAllRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ClearAllOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ClearAllSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ClearAllTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Clear":
      
      Rounded = lazy(() => import('@material-ui/icons/ClearRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ClearOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ClearSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ClearTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Close":
      
      Rounded = lazy(() => import('@material-ui/icons/CloseRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CloseOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CloseSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CloseTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ClosedCaption":
      
      Rounded = lazy(() => import('@material-ui/icons/ClosedCaptionRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ClosedCaptionOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ClosedCaptionSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ClosedCaptionTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CloudCircle":
      
      Rounded = lazy(() => import('@material-ui/icons/CloudCircleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CloudCircleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CloudCircleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CloudCircleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CloudDone":
      
      Rounded = lazy(() => import('@material-ui/icons/CloudDoneRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CloudDoneOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CloudDoneSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CloudDoneTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CloudDownload":
      
      Rounded = lazy(() => import('@material-ui/icons/CloudDownloadRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CloudDownloadOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CloudDownloadSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CloudDownloadTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CloudOff":
      
      Rounded = lazy(() => import('@material-ui/icons/CloudOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CloudOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CloudOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CloudOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Cloud":
      
      Rounded = lazy(() => import('@material-ui/icons/CloudRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CloudOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CloudSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CloudTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CloudQueue":
      
      Rounded = lazy(() => import('@material-ui/icons/CloudQueueRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CloudQueueOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CloudQueueSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CloudQueueTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CloudUpload":
      
      Rounded = lazy(() => import('@material-ui/icons/CloudUploadRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CloudUploadOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CloudUploadSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CloudUploadTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Code":
      
      Rounded = lazy(() => import('@material-ui/icons/CodeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CodeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CodeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CodeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CollectionsBookmark":
      
      Rounded =
        lazy(() => import('@material-ui/icons/CollectionsBookmarkRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/CollectionsBookmarkOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CollectionsBookmarkSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/CollectionsBookmarkTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Collections":
      
      Rounded = lazy(() => import('@material-ui/icons/CollectionsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CollectionsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CollectionsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CollectionsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ColorLens":
      
      Rounded = lazy(() => import('@material-ui/icons/ColorLensRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ColorLensOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ColorLensSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ColorLensTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Colorize":
      
      Rounded = lazy(() => import('@material-ui/icons/ColorizeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ColorizeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ColorizeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ColorizeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Comment":
      
      Rounded = lazy(() => import('@material-ui/icons/CommentRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CommentOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CommentSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CommentTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Commute":
      
      Rounded = lazy(() => import('@material-ui/icons/CommuteRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CommuteOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CommuteSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CommuteTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CompareArrows":
      
      Rounded = lazy(() => import('@material-ui/icons/CompareArrowsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CompareArrowsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CompareArrowsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CompareArrowsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Compare":
      
      Rounded = lazy(() => import('@material-ui/icons/CompareRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CompareOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CompareSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CompareTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CompassCalibration":
      
      Rounded =
        lazy(() => import('@material-ui/icons/CompassCalibrationRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/CompassCalibrationOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CompassCalibrationSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/CompassCalibrationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Computer":
      
      Rounded = lazy(() => import('@material-ui/icons/ComputerRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ComputerOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ComputerSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ComputerTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ConfirmationNumber":
      
      Rounded =
        lazy(() => import('@material-ui/icons/ConfirmationNumberRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/ConfirmationNumberOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ConfirmationNumberSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/ConfirmationNumberTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ContactMail":
      
      Rounded = lazy(() => import('@material-ui/icons/ContactMailRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ContactMailOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ContactMailSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ContactMailTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ContactPhone":
      
      Rounded = lazy(() => import('@material-ui/icons/ContactPhoneRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ContactPhoneOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ContactPhoneSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ContactPhoneTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ContactSupport":
      
      Rounded = lazy(() => import('@material-ui/icons/ContactSupportRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ContactSupportOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ContactSupportSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ContactSupportTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Contacts":
      
      Rounded = lazy(() => import('@material-ui/icons/ContactsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ContactsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ContactsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ContactsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ControlCamera":
      
      Rounded = lazy(() => import('@material-ui/icons/ControlCameraRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ControlCameraOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ControlCameraSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ControlCameraTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ControlPointDuplicate":
      
      Rounded =
        lazy(() => import('@material-ui/icons/ControlPointDuplicateRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/ControlPointDuplicateOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/ControlPointDuplicateSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/ControlPointDuplicateTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ControlPoint":
      
      Rounded = lazy(() => import('@material-ui/icons/ControlPointRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ControlPointOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ControlPointSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ControlPointTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Copyright":
      
      Rounded = lazy(() => import('@material-ui/icons/CopyrightRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CopyrightOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CopyrightSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CopyrightTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CreateNewFolder":
      
      Rounded = lazy(() => import('@material-ui/icons/CreateNewFolderRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/CreateNewFolderOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CreateNewFolderSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CreateNewFolderTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Create":
      
      Rounded = lazy(() => import('@material-ui/icons/CreateRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CreateOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CreateSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CreateTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CreditCard":
      
      Rounded = lazy(() => import('@material-ui/icons/CreditCardRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CreditCardOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CreditCardSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CreditCardTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Crop169":
      
      Rounded = lazy(() => import('@material-ui/icons/Crop169Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Crop169Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Crop169Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Crop169TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Crop32":
      
      Rounded = lazy(() => import('@material-ui/icons/Crop32Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Crop32Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Crop32Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Crop32TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Crop54":
      
      Rounded = lazy(() => import('@material-ui/icons/Crop54Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Crop54Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Crop54Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Crop54TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Crop75":
      
      Rounded = lazy(() => import('@material-ui/icons/Crop75Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Crop75Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Crop75Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Crop75TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CropDin":
      
      Rounded = lazy(() => import('@material-ui/icons/CropDinRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CropDinOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CropDinSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CropDinTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CropFree":
      
      Rounded = lazy(() => import('@material-ui/icons/CropFreeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CropFreeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CropFreeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CropFreeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CropLandscape":
      
      Rounded = lazy(() => import('@material-ui/icons/CropLandscapeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CropLandscapeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CropLandscapeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CropLandscapeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CropOriginal":
      
      Rounded = lazy(() => import('@material-ui/icons/CropOriginalRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CropOriginalOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CropOriginalSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CropOriginalTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Crop":
      
      Rounded = lazy(() => import('@material-ui/icons/CropRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CropOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CropSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CropTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CropPortrait":
      
      Rounded = lazy(() => import('@material-ui/icons/CropPortraitRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CropPortraitOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CropPortraitSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CropPortraitTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CropRotate":
      
      Rounded = lazy(() => import('@material-ui/icons/CropRotateRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CropRotateOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CropRotateSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CropRotateTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "CropSquare":
      
      Rounded = lazy(() => import('@material-ui/icons/CropSquareRounded')),
      Outlined = lazy(() => import('@material-ui/icons/CropSquareOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/CropSquareSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/CropSquareTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Dashboard":
      
      Rounded = lazy(() => import('@material-ui/icons/DashboardRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DashboardOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DashboardSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DashboardTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DataUsage":
      
      Rounded = lazy(() => import('@material-ui/icons/DataUsageRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DataUsageOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DataUsageSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DataUsageTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DateRange":
      
      Rounded = lazy(() => import('@material-ui/icons/DateRangeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DateRangeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DateRangeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DateRangeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Dehaze":
      
      Rounded = lazy(() => import('@material-ui/icons/DehazeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DehazeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DehazeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DehazeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DeleteForever":
      
      Rounded = lazy(() => import('@material-ui/icons/DeleteForeverRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DeleteForeverOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DeleteForeverSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DeleteForeverTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DeleteOutline":
      
      Rounded = lazy(() => import('@material-ui/icons/DeleteOutlineRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DeleteOutlineOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DeleteOutlineSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DeleteOutlineTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Delete":
      
      Rounded = lazy(() => import('@material-ui/icons/DeleteRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DeleteOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DeleteSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DeleteTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DeleteSweep":
      
      Rounded = lazy(() => import('@material-ui/icons/DeleteSweepRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DeleteSweepOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DeleteSweepSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DeleteSweepTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DepartureBoard":
      
      Rounded = lazy(() => import('@material-ui/icons/DepartureBoardRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DepartureBoardOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DepartureBoardSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DepartureBoardTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Description":
      
      Rounded = lazy(() => import('@material-ui/icons/DescriptionRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DescriptionOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DescriptionSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DescriptionTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DesktopAccessDisabled":
      
      Rounded =
        lazy(() => import('@material-ui/icons/DesktopAccessDisabledRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/DesktopAccessDisabledOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/DesktopAccessDisabledSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/DesktopAccessDisabledTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DesktopMac":
      
      Rounded = lazy(() => import('@material-ui/icons/DesktopMacRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DesktopMacOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DesktopMacSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DesktopMacTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DesktopWindows":
      
      Rounded = lazy(() => import('@material-ui/icons/DesktopWindowsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DesktopWindowsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DesktopWindowsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DesktopWindowsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Details":
      
      Rounded = lazy(() => import('@material-ui/icons/DetailsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DetailsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DetailsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DetailsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DeveloperBoard":
      
      Rounded = lazy(() => import('@material-ui/icons/DeveloperBoardRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DeveloperBoardOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DeveloperBoardSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DeveloperBoardTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DeveloperMode":
      
      Rounded = lazy(() => import('@material-ui/icons/DeveloperModeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DeveloperModeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DeveloperModeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DeveloperModeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DeviceHub":
      
      Rounded = lazy(() => import('@material-ui/icons/DeviceHubRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DeviceHubOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DeviceHubSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DeviceHubTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DeviceUnknown":
      
      Rounded = lazy(() => import('@material-ui/icons/DeviceUnknownRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DeviceUnknownOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DeviceUnknownSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DeviceUnknownTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DevicesOther":
      
      Rounded = lazy(() => import('@material-ui/icons/DevicesOtherRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DevicesOtherOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DevicesOtherSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DevicesOtherTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Devices":
      
      Rounded = lazy(() => import('@material-ui/icons/DevicesRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DevicesOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DevicesSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DevicesTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DialerSip":
      
      Rounded = lazy(() => import('@material-ui/icons/DialerSipRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DialerSipOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DialerSipSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DialerSipTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Dialpad":
      
      Rounded = lazy(() => import('@material-ui/icons/DialpadRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DialpadOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DialpadSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DialpadTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DirectionsBike":
      
      Rounded = lazy(() => import('@material-ui/icons/DirectionsBikeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DirectionsBikeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DirectionsBikeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DirectionsBikeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DirectionsBoat":
      
      Rounded = lazy(() => import('@material-ui/icons/DirectionsBoatRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DirectionsBoatOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DirectionsBoatSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DirectionsBoatTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DirectionsBus":
      
      Rounded = lazy(() => import('@material-ui/icons/DirectionsBusRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DirectionsBusOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DirectionsBusSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DirectionsBusTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DirectionsCar":
      
      Rounded = lazy(() => import('@material-ui/icons/DirectionsCarRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DirectionsCarOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DirectionsCarSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DirectionsCarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Directions":
      
      Rounded = lazy(() => import('@material-ui/icons/DirectionsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DirectionsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DirectionsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DirectionsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DirectionsRailway":
      
      Rounded =
        lazy(() => import('@material-ui/icons/DirectionsRailwayRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/DirectionsRailwayOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DirectionsRailwaySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DirectionsRailwayTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DirectionsRun":
      
      Rounded = lazy(() => import('@material-ui/icons/DirectionsRunRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DirectionsRunOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DirectionsRunSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DirectionsRunTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DirectionsSubway":
      
      Rounded = lazy(() => import('@material-ui/icons/DirectionsSubwayRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/DirectionsSubwayOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DirectionsSubwaySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DirectionsSubwayTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DirectionsTransit":
      
      Rounded =
        lazy(() => import('@material-ui/icons/DirectionsTransitRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/DirectionsTransitOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DirectionsTransitSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DirectionsTransitTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DirectionsWalk":
      
      Rounded = lazy(() => import('@material-ui/icons/DirectionsWalkRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DirectionsWalkOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DirectionsWalkSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DirectionsWalkTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DiscFull":
      
      Rounded = lazy(() => import('@material-ui/icons/DiscFullRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DiscFullOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DiscFullSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DiscFullTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Dns":
      
      Rounded = lazy(() => import('@material-ui/icons/DnsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DnsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DnsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DnsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Dock":
      
      Rounded = lazy(() => import('@material-ui/icons/DockRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DockOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DockSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DockTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DomainDisabled":
      
      Rounded = lazy(() => import('@material-ui/icons/DomainDisabledRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DomainDisabledOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DomainDisabledSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DomainDisabledTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Domain":
      
      Rounded = lazy(() => import('@material-ui/icons/DomainRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DomainOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DomainSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DomainTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DoneAll":
      
      Rounded = lazy(() => import('@material-ui/icons/DoneAllRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DoneAllOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DoneAllSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DoneAllTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DoneOutline":
      
      Rounded = lazy(() => import('@material-ui/icons/DoneOutlineRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DoneOutlineOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DoneOutlineSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DoneOutlineTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Done":
      
      Rounded = lazy(() => import('@material-ui/icons/DoneRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DoneOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DoneSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DoneTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DonutLarge":
      
      Rounded = lazy(() => import('@material-ui/icons/DonutLargeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DonutLargeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DonutLargeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DonutLargeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DonutSmall":
      
      Rounded = lazy(() => import('@material-ui/icons/DonutSmallRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DonutSmallOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DonutSmallSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DonutSmallTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Drafts":
      
      Rounded = lazy(() => import('@material-ui/icons/DraftsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DraftsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DraftsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DraftsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DragHandle":
      
      Rounded = lazy(() => import('@material-ui/icons/DragHandleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DragHandleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DragHandleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DragHandleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DragIndicator":
      
      Rounded = lazy(() => import('@material-ui/icons/DragIndicatorRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DragIndicatorOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DragIndicatorSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DragIndicatorTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "DriveEta":
      
      Rounded = lazy(() => import('@material-ui/icons/DriveEtaRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DriveEtaOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DriveEtaSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DriveEtaTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Duo":
      
      Rounded = lazy(() => import('@material-ui/icons/DuoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DuoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DuoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DuoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Dvr":
      
      Rounded = lazy(() => import('@material-ui/icons/DvrRounded')),
      Outlined = lazy(() => import('@material-ui/icons/DvrOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/DvrSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/DvrTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "EditAttributes":
      
      Rounded = lazy(() => import('@material-ui/icons/EditAttributesRounded')),
      Outlined = lazy(() => import('@material-ui/icons/EditAttributesOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/EditAttributesSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/EditAttributesTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "EditLocation":
      
      Rounded = lazy(() => import('@material-ui/icons/EditLocationRounded')),
      Outlined = lazy(() => import('@material-ui/icons/EditLocationOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/EditLocationSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/EditLocationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Edit":
      
      Rounded = lazy(() => import('@material-ui/icons/EditRounded')),
      Outlined = lazy(() => import('@material-ui/icons/EditOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/EditSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/EditTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Eject":
      
      Rounded = lazy(() => import('@material-ui/icons/EjectRounded')),
      Outlined = lazy(() => import('@material-ui/icons/EjectOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/EjectSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/EjectTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Email":
      
      Rounded = lazy(() => import('@material-ui/icons/EmailRounded')),
      Outlined = lazy(() => import('@material-ui/icons/EmailOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/EmailSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/EmailTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "EnhancedEncryption":
      
      Rounded =
        lazy(() => import('@material-ui/icons/EnhancedEncryptionRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/EnhancedEncryptionOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/EnhancedEncryptionSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/EnhancedEncryptionTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Equalizer":
      
      Rounded = lazy(() => import('@material-ui/icons/EqualizerRounded')),
      Outlined = lazy(() => import('@material-ui/icons/EqualizerOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/EqualizerSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/EqualizerTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ErrorOutline":
      
      Rounded = lazy(() => import('@material-ui/icons/ErrorOutlineRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ErrorOutlineOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ErrorOutlineSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ErrorOutlineTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Error":
      
      Rounded = lazy(() => import('@material-ui/icons/ErrorRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ErrorOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ErrorSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ErrorTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "EuroSymbol":
      
      Rounded = lazy(() => import('@material-ui/icons/EuroSymbolRounded')),
      Outlined = lazy(() => import('@material-ui/icons/EuroSymbolOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/EuroSymbolSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/EuroSymbolTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "EvStation":
      
      Rounded = lazy(() => import('@material-ui/icons/EvStationRounded')),
      Outlined = lazy(() => import('@material-ui/icons/EvStationOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/EvStationSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/EvStationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "EventAvailable":
      
      Rounded = lazy(() => import('@material-ui/icons/EventAvailableRounded')),
      Outlined = lazy(() => import('@material-ui/icons/EventAvailableOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/EventAvailableSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/EventAvailableTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "EventBusy":
      
      Rounded = lazy(() => import('@material-ui/icons/EventBusyRounded')),
      Outlined = lazy(() => import('@material-ui/icons/EventBusyOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/EventBusySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/EventBusyTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "EventNote":
      
      Rounded = lazy(() => import('@material-ui/icons/EventNoteRounded')),
      Outlined = lazy(() => import('@material-ui/icons/EventNoteOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/EventNoteSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/EventNoteTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Event":
      
      Rounded = lazy(() => import('@material-ui/icons/EventRounded')),
      Outlined = lazy(() => import('@material-ui/icons/EventOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/EventSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/EventTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "EventSeat":
      
      Rounded = lazy(() => import('@material-ui/icons/EventSeatRounded')),
      Outlined = lazy(() => import('@material-ui/icons/EventSeatOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/EventSeatSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/EventSeatTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ExitToApp":
      
      Rounded = lazy(() => import('@material-ui/icons/ExitToAppRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ExitToAppOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ExitToAppSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ExitToAppTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ExpandLess":
      
      Rounded = lazy(() => import('@material-ui/icons/ExpandLessRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ExpandLessOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ExpandLessSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ExpandLessTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ExpandMore":
      
      Rounded = lazy(() => import('@material-ui/icons/ExpandMoreRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ExpandMoreOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ExpandMoreSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ExpandMoreTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Explicit":
      
      Rounded = lazy(() => import('@material-ui/icons/ExplicitRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ExplicitOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ExplicitSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ExplicitTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ExploreOff":
      
      Rounded = lazy(() => import('@material-ui/icons/ExploreOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ExploreOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ExploreOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ExploreOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Explore":
      
      Rounded = lazy(() => import('@material-ui/icons/ExploreRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ExploreOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ExploreSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ExploreTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ExposureNeg1":
      
      Rounded = lazy(() => import('@material-ui/icons/ExposureNeg1Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/ExposureNeg1Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/ExposureNeg1Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ExposureNeg1TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ExposureNeg2":
      
      Rounded = lazy(() => import('@material-ui/icons/ExposureNeg2Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/ExposureNeg2Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/ExposureNeg2Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ExposureNeg2TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Exposure":
      
      Rounded = lazy(() => import('@material-ui/icons/ExposureRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ExposureOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ExposureSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ExposureTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ExposurePlus1":
      
      Rounded = lazy(() => import('@material-ui/icons/ExposurePlus1Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/ExposurePlus1Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/ExposurePlus1Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ExposurePlus1TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ExposurePlus2":
      
      Rounded = lazy(() => import('@material-ui/icons/ExposurePlus2Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/ExposurePlus2Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/ExposurePlus2Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ExposurePlus2TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ExposureZero":
      
      Rounded = lazy(() => import('@material-ui/icons/ExposureZeroRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ExposureZeroOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ExposureZeroSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ExposureZeroTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Extension":
      
      Rounded = lazy(() => import('@material-ui/icons/ExtensionRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ExtensionOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ExtensionSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ExtensionTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Face":
      
      Rounded = lazy(() => import('@material-ui/icons/FaceRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FaceOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FaceSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FaceTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FastForward":
      
      Rounded = lazy(() => import('@material-ui/icons/FastForwardRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FastForwardOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FastForwardSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FastForwardTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FastRewind":
      
      Rounded = lazy(() => import('@material-ui/icons/FastRewindRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FastRewindOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FastRewindSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FastRewindTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Fastfood":
      
      Rounded = lazy(() => import('@material-ui/icons/FastfoodRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FastfoodOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FastfoodSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FastfoodTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FavoriteBorder":
      
      Rounded = lazy(() => import('@material-ui/icons/FavoriteBorderRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FavoriteBorderOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FavoriteBorderSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FavoriteBorderTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Favorite":
      
      Rounded = lazy(() => import('@material-ui/icons/FavoriteRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FavoriteOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FavoriteSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FavoriteTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FeaturedPlayList":
      
      Rounded = lazy(() => import('@material-ui/icons/FeaturedPlayListRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FeaturedPlayListOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FeaturedPlayListSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FeaturedPlayListTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FeaturedVideo":
      
      Rounded = lazy(() => import('@material-ui/icons/FeaturedVideoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FeaturedVideoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FeaturedVideoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FeaturedVideoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Feedback":
      
      Rounded = lazy(() => import('@material-ui/icons/FeedbackRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FeedbackOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FeedbackSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FeedbackTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FiberDvr":
      
      Rounded = lazy(() => import('@material-ui/icons/FiberDvrRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FiberDvrOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FiberDvrSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FiberDvrTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FiberManualRecord":
      
      Rounded =
        lazy(() => import('@material-ui/icons/FiberManualRecordRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FiberManualRecordOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FiberManualRecordSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FiberManualRecordTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FiberNew":
      
      Rounded = lazy(() => import('@material-ui/icons/FiberNewRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FiberNewOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FiberNewSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FiberNewTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FiberPin":
      
      Rounded = lazy(() => import('@material-ui/icons/FiberPinRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FiberPinOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FiberPinSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FiberPinTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FiberSmartRecord":
      
      Rounded = lazy(() => import('@material-ui/icons/FiberSmartRecordRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FiberSmartRecordOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FiberSmartRecordSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FiberSmartRecordTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FileCopy":
      
      Rounded = lazy(() => import('@material-ui/icons/FileCopyRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FileCopyOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FileCopySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FileCopyTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Filter1":
      
      Rounded = lazy(() => import('@material-ui/icons/Filter1Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Filter1Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Filter1Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Filter1TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Filter2":
      
      Rounded = lazy(() => import('@material-ui/icons/Filter2Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Filter2Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Filter2Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Filter2TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Filter3":
      
      Rounded = lazy(() => import('@material-ui/icons/Filter3Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Filter3Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Filter3Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Filter3TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Filter4":
      
      Rounded = lazy(() => import('@material-ui/icons/Filter4Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Filter4Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Filter4Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Filter4TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Filter5":
      
      Rounded = lazy(() => import('@material-ui/icons/Filter5Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Filter5Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Filter5Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Filter5TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Filter6":
      
      Rounded = lazy(() => import('@material-ui/icons/Filter6Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Filter6Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Filter6Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Filter6TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Filter7":
      
      Rounded = lazy(() => import('@material-ui/icons/Filter7Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Filter7Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Filter7Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Filter7TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Filter8":
      
      Rounded = lazy(() => import('@material-ui/icons/Filter8Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Filter8Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Filter8Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Filter8TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Filter9":
      
      Rounded = lazy(() => import('@material-ui/icons/Filter9Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Filter9Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Filter9Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Filter9TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Filter9Plus":
      
      Rounded = lazy(() => import('@material-ui/icons/Filter9PlusRounded')),
      Outlined = lazy(() => import('@material-ui/icons/Filter9PlusOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/Filter9PlusSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Filter9PlusTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FilterBAndW":
      
      Rounded = lazy(() => import('@material-ui/icons/FilterBAndWRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FilterBAndWOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FilterBAndWSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FilterBAndWTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FilterCenterFocus":
      
      Rounded =
        lazy(() => import('@material-ui/icons/FilterCenterFocusRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FilterCenterFocusOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FilterCenterFocusSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FilterCenterFocusTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FilterDrama":
      
      Rounded = lazy(() => import('@material-ui/icons/FilterDramaRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FilterDramaOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FilterDramaSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FilterDramaTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FilterFrames":
      
      Rounded = lazy(() => import('@material-ui/icons/FilterFramesRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FilterFramesOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FilterFramesSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FilterFramesTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FilterHdr":
      
      Rounded = lazy(() => import('@material-ui/icons/FilterHdrRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FilterHdrOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FilterHdrSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FilterHdrTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FilterList":
      
      Rounded = lazy(() => import('@material-ui/icons/FilterListRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FilterListOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FilterListSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FilterListTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FilterNone":
      
      Rounded = lazy(() => import('@material-ui/icons/FilterNoneRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FilterNoneOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FilterNoneSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FilterNoneTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Filter":
      
      Rounded = lazy(() => import('@material-ui/icons/FilterRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FilterOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FilterSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FilterTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FilterTiltShift":
      
      Rounded = lazy(() => import('@material-ui/icons/FilterTiltShiftRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FilterTiltShiftOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FilterTiltShiftSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FilterTiltShiftTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FilterVintage":
      
      Rounded = lazy(() => import('@material-ui/icons/FilterVintageRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FilterVintageOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FilterVintageSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FilterVintageTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FindInPage":
      
      Rounded = lazy(() => import('@material-ui/icons/FindInPageRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FindInPageOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FindInPageSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FindInPageTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FindReplace":
      
      Rounded = lazy(() => import('@material-ui/icons/FindReplaceRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FindReplaceOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FindReplaceSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FindReplaceTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Fingerprint":
      
      Rounded = lazy(() => import('@material-ui/icons/FingerprintRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FingerprintOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FingerprintSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FingerprintTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FirstPage":
      
      Rounded = lazy(() => import('@material-ui/icons/FirstPageRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FirstPageOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FirstPageSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FirstPageTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FitnessCenter":
      
      Rounded = lazy(() => import('@material-ui/icons/FitnessCenterRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FitnessCenterOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FitnessCenterSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FitnessCenterTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Flag":
      
      Rounded = lazy(() => import('@material-ui/icons/FlagRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FlagOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FlagSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FlagTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Flare":
      
      Rounded = lazy(() => import('@material-ui/icons/FlareRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FlareOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FlareSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FlareTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FlashAuto":
      
      Rounded = lazy(() => import('@material-ui/icons/FlashAutoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FlashAutoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FlashAutoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FlashAutoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FlashOff":
      
      Rounded = lazy(() => import('@material-ui/icons/FlashOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FlashOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FlashOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FlashOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FlashOn":
      
      Rounded = lazy(() => import('@material-ui/icons/FlashOnRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FlashOnOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FlashOnSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FlashOnTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FlightLand":
      
      Rounded = lazy(() => import('@material-ui/icons/FlightLandRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FlightLandOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FlightLandSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FlightLandTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Flight":
      
      Rounded = lazy(() => import('@material-ui/icons/FlightRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FlightOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FlightSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FlightTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FlightTakeoff":
      
      Rounded = lazy(() => import('@material-ui/icons/FlightTakeoffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FlightTakeoffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FlightTakeoffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FlightTakeoffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Flip":
      
      Rounded = lazy(() => import('@material-ui/icons/FlipRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FlipOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FlipSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FlipTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FlipToBack":
      
      Rounded = lazy(() => import('@material-ui/icons/FlipToBackRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FlipToBackOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FlipToBackSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FlipToBackTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FlipToFront":
      
      Rounded = lazy(() => import('@material-ui/icons/FlipToFrontRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FlipToFrontOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FlipToFrontSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FlipToFrontTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FolderOpen":
      
      Rounded = lazy(() => import('@material-ui/icons/FolderOpenRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FolderOpenOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FolderOpenSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FolderOpenTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Folder":
      
      Rounded = lazy(() => import('@material-ui/icons/FolderRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FolderOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FolderSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FolderTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FolderShared":
      
      Rounded = lazy(() => import('@material-ui/icons/FolderSharedRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FolderSharedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FolderSharedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FolderSharedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FolderSpecial":
      
      Rounded = lazy(() => import('@material-ui/icons/FolderSpecialRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FolderSpecialOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FolderSpecialSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FolderSpecialTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FontDownload":
      
      Rounded = lazy(() => import('@material-ui/icons/FontDownloadRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FontDownloadOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FontDownloadSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FontDownloadTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatAlignCenter":
      
      Rounded =
        lazy(() => import('@material-ui/icons/FormatAlignCenterRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FormatAlignCenterOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatAlignCenterSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FormatAlignCenterTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatAlignJustify":
      
      Rounded =
        lazy(() => import('@material-ui/icons/FormatAlignJustifyRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FormatAlignJustifyOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatAlignJustifySharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/FormatAlignJustifyTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatAlignLeft":
      
      Rounded = lazy(() => import('@material-ui/icons/FormatAlignLeftRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FormatAlignLeftOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatAlignLeftSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FormatAlignLeftTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatAlignRight":
      
      Rounded = lazy(() => import('@material-ui/icons/FormatAlignRightRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FormatAlignRightOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatAlignRightSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FormatAlignRightTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatBold":
      
      Rounded = lazy(() => import('@material-ui/icons/FormatBoldRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FormatBoldOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatBoldSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FormatBoldTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatClear":
      
      Rounded = lazy(() => import('@material-ui/icons/FormatClearRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FormatClearOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatClearSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FormatClearTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatColorFill":
      
      Rounded = lazy(() => import('@material-ui/icons/FormatColorFillRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FormatColorFillOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatColorFillSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FormatColorFillTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatColorReset":
      
      Rounded = lazy(() => import('@material-ui/icons/FormatColorResetRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FormatColorResetOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatColorResetSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FormatColorResetTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatColorText":
      
      Rounded = lazy(() => import('@material-ui/icons/FormatColorTextRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FormatColorTextOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatColorTextSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FormatColorTextTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatIndentDecrease":
      
      Rounded =
        lazy(() => import('@material-ui/icons/FormatIndentDecreaseRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FormatIndentDecreaseOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatIndentDecreaseSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/FormatIndentDecreaseTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatIndentIncrease":
      
      Rounded =
        lazy(() => import('@material-ui/icons/FormatIndentIncreaseRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FormatIndentIncreaseOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatIndentIncreaseSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/FormatIndentIncreaseTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatItalic":
      
      Rounded = lazy(() => import('@material-ui/icons/FormatItalicRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FormatItalicOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatItalicSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FormatItalicTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatLineSpacing":
      
      Rounded =
        lazy(() => import('@material-ui/icons/FormatLineSpacingRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FormatLineSpacingOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatLineSpacingSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FormatLineSpacingTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatListBulleted":
      
      Rounded =
        lazy(() => import('@material-ui/icons/FormatListBulletedRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FormatListBulletedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatListBulletedSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/FormatListBulletedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatListNumbered":
      
      Rounded =
        lazy(() => import('@material-ui/icons/FormatListNumberedRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FormatListNumberedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatListNumberedSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/FormatListNumberedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatListNumberedRtl":
      
      Rounded =
        lazy(() => import('@material-ui/icons/FormatListNumberedRtlRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FormatListNumberedRtlOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/FormatListNumberedRtlSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/FormatListNumberedRtlTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatPaint":
      
      Rounded = lazy(() => import('@material-ui/icons/FormatPaintRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FormatPaintOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatPaintSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FormatPaintTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatQuote":
      
      Rounded = lazy(() => import('@material-ui/icons/FormatQuoteRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FormatQuoteOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatQuoteSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FormatQuoteTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatShapes":
      
      Rounded = lazy(() => import('@material-ui/icons/FormatShapesRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FormatShapesOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatShapesSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FormatShapesTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatSize":
      
      Rounded = lazy(() => import('@material-ui/icons/FormatSizeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FormatSizeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatSizeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FormatSizeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatStrikethrough":
      
      Rounded =
        lazy(() => import('@material-ui/icons/FormatStrikethroughRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FormatStrikethroughOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatStrikethroughSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/FormatStrikethroughTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatTextdirectionLToR":
      
      Rounded =
        lazy(() => import('@material-ui/icons/FormatTextdirectionLToRRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FormatTextdirectionLToROutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/FormatTextdirectionLToRSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/FormatTextdirectionLToRTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatTextdirectionRToL":
      
      Rounded =
        lazy(() => import('@material-ui/icons/FormatTextdirectionRToLRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FormatTextdirectionRToLOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/FormatTextdirectionRToLSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/FormatTextdirectionRToLTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FormatUnderlined":
      
      Rounded = lazy(() => import('@material-ui/icons/FormatUnderlinedRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/FormatUnderlinedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FormatUnderlinedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FormatUnderlinedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Forum":
      
      Rounded = lazy(() => import('@material-ui/icons/ForumRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ForumOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ForumSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ForumTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Forward10":
      
      Rounded = lazy(() => import('@material-ui/icons/Forward10Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Forward10Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Forward10Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Forward10TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Forward30":
      
      Rounded = lazy(() => import('@material-ui/icons/Forward30Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Forward30Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Forward30Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Forward30TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Forward5":
      
      Rounded = lazy(() => import('@material-ui/icons/Forward5Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Forward5Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Forward5Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Forward5TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Forward":
      
      Rounded = lazy(() => import('@material-ui/icons/ForwardRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ForwardOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ForwardSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ForwardTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FourK":
      
      Rounded = lazy(() => import('@material-ui/icons/FourKRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FourKOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FourKSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FourKTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FreeBreakfast":
      
      Rounded = lazy(() => import('@material-ui/icons/FreeBreakfastRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FreeBreakfastOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FreeBreakfastSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FreeBreakfastTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "FullscreenExit":
      
      Rounded = lazy(() => import('@material-ui/icons/FullscreenExitRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FullscreenExitOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FullscreenExitSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FullscreenExitTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Fullscreen":
      
      Rounded = lazy(() => import('@material-ui/icons/FullscreenRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FullscreenOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FullscreenSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FullscreenTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Functions":
      
      Rounded = lazy(() => import('@material-ui/icons/FunctionsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/FunctionsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/FunctionsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/FunctionsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "GTranslate":
      
      Rounded = lazy(() => import('@material-ui/icons/GTranslateRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GTranslateOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GTranslateSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GTranslateTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Gamepad":
      
      Rounded = lazy(() => import('@material-ui/icons/GamepadRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GamepadOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GamepadSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GamepadTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Games":
      
      Rounded = lazy(() => import('@material-ui/icons/GamesRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GamesOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GamesSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GamesTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Gavel":
      
      Rounded = lazy(() => import('@material-ui/icons/GavelRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GavelOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GavelSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GavelTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Gesture":
      
      Rounded = lazy(() => import('@material-ui/icons/GestureRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GestureOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GestureSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GestureTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "GetApp":
      
      Rounded = lazy(() => import('@material-ui/icons/GetAppRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GetAppOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GetAppSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GetAppTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Gif":
      
      Rounded = lazy(() => import('@material-ui/icons/GifRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GifOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GifSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GifTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "GolfCourse":
      
      Rounded = lazy(() => import('@material-ui/icons/GolfCourseRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GolfCourseOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GolfCourseSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GolfCourseTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "GpsFixed":
      
      Rounded = lazy(() => import('@material-ui/icons/GpsFixedRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GpsFixedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GpsFixedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GpsFixedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "GpsNotFixed":
      
      Rounded = lazy(() => import('@material-ui/icons/GpsNotFixedRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GpsNotFixedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GpsNotFixedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GpsNotFixedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "GpsOff":
      
      Rounded = lazy(() => import('@material-ui/icons/GpsOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GpsOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GpsOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GpsOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Grade":
      
      Rounded = lazy(() => import('@material-ui/icons/GradeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GradeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GradeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GradeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Gradient":
      
      Rounded = lazy(() => import('@material-ui/icons/GradientRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GradientOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GradientSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GradientTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Grain":
      
      Rounded = lazy(() => import('@material-ui/icons/GrainRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GrainOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GrainSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GrainTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "GraphicEq":
      
      Rounded = lazy(() => import('@material-ui/icons/GraphicEqRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GraphicEqOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GraphicEqSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GraphicEqTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "GridOff":
      
      Rounded = lazy(() => import('@material-ui/icons/GridOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GridOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GridOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GridOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "GridOn":
      
      Rounded = lazy(() => import('@material-ui/icons/GridOnRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GridOnOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GridOnSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GridOnTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "GroupAdd":
      
      Rounded = lazy(() => import('@material-ui/icons/GroupAddRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GroupAddOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GroupAddSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GroupAddTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Group":
      
      Rounded = lazy(() => import('@material-ui/icons/GroupRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GroupOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GroupSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GroupTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "GroupWork":
      
      Rounded = lazy(() => import('@material-ui/icons/GroupWorkRounded')),
      Outlined = lazy(() => import('@material-ui/icons/GroupWorkOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/GroupWorkSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/GroupWorkTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Hd":
      
      Rounded = lazy(() => import('@material-ui/icons/HdRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HdOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HdSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HdTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "HdrOff":
      
      Rounded = lazy(() => import('@material-ui/icons/HdrOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HdrOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HdrOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HdrOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "HdrOn":
      
      Rounded = lazy(() => import('@material-ui/icons/HdrOnRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HdrOnOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HdrOnSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HdrOnTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "HdrStrong":
      
      Rounded = lazy(() => import('@material-ui/icons/HdrStrongRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HdrStrongOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HdrStrongSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HdrStrongTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "HdrWeak":
      
      Rounded = lazy(() => import('@material-ui/icons/HdrWeakRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HdrWeakOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HdrWeakSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HdrWeakTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "HeadsetMic":
      
      Rounded = lazy(() => import('@material-ui/icons/HeadsetMicRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HeadsetMicOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HeadsetMicSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HeadsetMicTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Headset":
      
      Rounded = lazy(() => import('@material-ui/icons/HeadsetRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HeadsetOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HeadsetSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HeadsetTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Healing":
      
      Rounded = lazy(() => import('@material-ui/icons/HealingRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HealingOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HealingSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HealingTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Hearing":
      
      Rounded = lazy(() => import('@material-ui/icons/HearingRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HearingOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HearingSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HearingTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "HelpOutline":
      
      Rounded = lazy(() => import('@material-ui/icons/HelpOutlineRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HelpOutlineOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HelpOutlineSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HelpOutlineTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Help":
      
      Rounded = lazy(() => import('@material-ui/icons/HelpRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HelpOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HelpSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HelpTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "HighQuality":
      
      Rounded = lazy(() => import('@material-ui/icons/HighQualityRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HighQualityOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HighQualitySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HighQualityTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "HighlightOff":
      
      Rounded = lazy(() => import('@material-ui/icons/HighlightOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HighlightOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HighlightOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HighlightOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Highlight":
      
      Rounded = lazy(() => import('@material-ui/icons/HighlightRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HighlightOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HighlightSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HighlightTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "History":
      
      Rounded = lazy(() => import('@material-ui/icons/HistoryRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HistoryOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HistorySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HistoryTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Home":
      
      Rounded = lazy(() => import('@material-ui/icons/HomeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HomeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HomeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HomeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "HorizontalSplit":
      
      Rounded = lazy(() => import('@material-ui/icons/HorizontalSplitRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/HorizontalSplitOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HorizontalSplitSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HorizontalSplitTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "HotTub":
      
      Rounded = lazy(() => import('@material-ui/icons/HotTubRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HotTubOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HotTubSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HotTubTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Hotel":
      
      Rounded = lazy(() => import('@material-ui/icons/HotelRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HotelOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HotelSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HotelTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "HourglassEmpty":
      
      Rounded = lazy(() => import('@material-ui/icons/HourglassEmptyRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HourglassEmptyOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HourglassEmptySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HourglassEmptyTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "HourglassFull":
      
      Rounded = lazy(() => import('@material-ui/icons/HourglassFullRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HourglassFullOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HourglassFullSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HourglassFullTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "HowToReg":
      
      Rounded = lazy(() => import('@material-ui/icons/HowToRegRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HowToRegOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HowToRegSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HowToRegTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "HowToVote":
      
      Rounded = lazy(() => import('@material-ui/icons/HowToVoteRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HowToVoteOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HowToVoteSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HowToVoteTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Http":
      
      Rounded = lazy(() => import('@material-ui/icons/HttpRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HttpOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HttpSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HttpTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Https":
      
      Rounded = lazy(() => import('@material-ui/icons/HttpsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/HttpsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/HttpsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/HttpsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ImageAspectRatio":
      
      Rounded = lazy(() => import('@material-ui/icons/ImageAspectRatioRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/ImageAspectRatioOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ImageAspectRatioSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ImageAspectRatioTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Image":
      
      Rounded = lazy(() => import('@material-ui/icons/ImageRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ImageOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ImageSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ImageTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ImageSearch":
      
      Rounded = lazy(() => import('@material-ui/icons/ImageSearchRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ImageSearchOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ImageSearchSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ImageSearchTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ImportContacts":
      
      Rounded = lazy(() => import('@material-ui/icons/ImportContactsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ImportContactsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ImportContactsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ImportContactsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ImportExport":
      
      Rounded = lazy(() => import('@material-ui/icons/ImportExportRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ImportExportOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ImportExportSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ImportExportTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ImportantDevices":
      
      Rounded = lazy(() => import('@material-ui/icons/ImportantDevicesRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/ImportantDevicesOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ImportantDevicesSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ImportantDevicesTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Inbox":
      
      Rounded = lazy(() => import('@material-ui/icons/InboxRounded')),
      Outlined = lazy(() => import('@material-ui/icons/InboxOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/InboxSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/InboxTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "IndeterminateCheckBox":
      
      Rounded =
        lazy(() => import('@material-ui/icons/IndeterminateCheckBoxRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/IndeterminateCheckBoxOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/IndeterminateCheckBoxSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/IndeterminateCheckBoxTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Info":
      
      Rounded = lazy(() => import('@material-ui/icons/InfoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/InfoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/InfoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/InfoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Input":
      
      Rounded = lazy(() => import('@material-ui/icons/InputRounded')),
      Outlined = lazy(() => import('@material-ui/icons/InputOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/InputSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/InputTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "InsertChart":
      
      Rounded = lazy(() => import('@material-ui/icons/InsertChartRounded')),
      Outlined = lazy(() => import('@material-ui/icons/InsertChartOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/InsertChartSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/InsertChartTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "InsertChartOutlined":
      
      Rounded =
        lazy(() => import('@material-ui/icons/InsertChartOutlinedRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/InsertChartOutlinedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/InsertChartOutlinedSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/InsertChartOutlinedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "InsertComment":
      
      Rounded = lazy(() => import('@material-ui/icons/InsertCommentRounded')),
      Outlined = lazy(() => import('@material-ui/icons/InsertCommentOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/InsertCommentSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/InsertCommentTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "InsertDriveFile":
      
      Rounded = lazy(() => import('@material-ui/icons/InsertDriveFileRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/InsertDriveFileOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/InsertDriveFileSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/InsertDriveFileTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "InsertEmoticon":
      
      Rounded = lazy(() => import('@material-ui/icons/InsertEmoticonRounded')),
      Outlined = lazy(() => import('@material-ui/icons/InsertEmoticonOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/InsertEmoticonSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/InsertEmoticonTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "InsertInvitation":
      
      Rounded = lazy(() => import('@material-ui/icons/InsertInvitationRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/InsertInvitationOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/InsertInvitationSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/InsertInvitationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "InsertLink":
      
      Rounded = lazy(() => import('@material-ui/icons/InsertLinkRounded')),
      Outlined = lazy(() => import('@material-ui/icons/InsertLinkOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/InsertLinkSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/InsertLinkTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "InsertPhoto":
      
      Rounded = lazy(() => import('@material-ui/icons/InsertPhotoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/InsertPhotoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/InsertPhotoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/InsertPhotoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "InvertColorsOff":
      
      Rounded = lazy(() => import('@material-ui/icons/InvertColorsOffRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/InvertColorsOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/InvertColorsOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/InvertColorsOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "InvertColors":
      
      Rounded = lazy(() => import('@material-ui/icons/InvertColorsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/InvertColorsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/InvertColorsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/InvertColorsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Iso":
      
      Rounded = lazy(() => import('@material-ui/icons/IsoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/IsoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/IsoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/IsoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "KeyboardArrowDown":
      
      Rounded =
        lazy(() => import('@material-ui/icons/KeyboardArrowDownRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/KeyboardArrowDownOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/KeyboardArrowDownSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/KeyboardArrowDownTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "KeyboardArrowLeft":
      
      Rounded =
        lazy(() => import('@material-ui/icons/KeyboardArrowLeftRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/KeyboardArrowLeftOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/KeyboardArrowLeftSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/KeyboardArrowLeftTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "KeyboardArrowRight":
      
      Rounded =
        lazy(() => import('@material-ui/icons/KeyboardArrowRightRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/KeyboardArrowRightOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/KeyboardArrowRightSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/KeyboardArrowRightTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "KeyboardArrowUp":
      
      Rounded = lazy(() => import('@material-ui/icons/KeyboardArrowUpRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/KeyboardArrowUpOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/KeyboardArrowUpSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/KeyboardArrowUpTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "KeyboardBackspace":
      
      Rounded =
        lazy(() => import('@material-ui/icons/KeyboardBackspaceRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/KeyboardBackspaceOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/KeyboardBackspaceSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/KeyboardBackspaceTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "KeyboardCapslock":
      
      Rounded = lazy(() => import('@material-ui/icons/KeyboardCapslockRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/KeyboardCapslockOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/KeyboardCapslockSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/KeyboardCapslockTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "KeyboardHide":
      
      Rounded = lazy(() => import('@material-ui/icons/KeyboardHideRounded')),
      Outlined = lazy(() => import('@material-ui/icons/KeyboardHideOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/KeyboardHideSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/KeyboardHideTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Keyboard":
      
      Rounded = lazy(() => import('@material-ui/icons/KeyboardRounded')),
      Outlined = lazy(() => import('@material-ui/icons/KeyboardOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/KeyboardSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/KeyboardTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "KeyboardReturn":
      
      Rounded = lazy(() => import('@material-ui/icons/KeyboardReturnRounded')),
      Outlined = lazy(() => import('@material-ui/icons/KeyboardReturnOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/KeyboardReturnSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/KeyboardReturnTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "KeyboardTab":
      
      Rounded = lazy(() => import('@material-ui/icons/KeyboardTabRounded')),
      Outlined = lazy(() => import('@material-ui/icons/KeyboardTabOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/KeyboardTabSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/KeyboardTabTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "KeyboardVoice":
      
      Rounded = lazy(() => import('@material-ui/icons/KeyboardVoiceRounded')),
      Outlined = lazy(() => import('@material-ui/icons/KeyboardVoiceOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/KeyboardVoiceSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/KeyboardVoiceTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Kitchen":
      
      Rounded = lazy(() => import('@material-ui/icons/KitchenRounded')),
      Outlined = lazy(() => import('@material-ui/icons/KitchenOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/KitchenSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/KitchenTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LabelImportant":
      
      Rounded = lazy(() => import('@material-ui/icons/LabelImportantRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LabelImportantOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LabelImportantSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LabelImportantTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LabelOff":
      
      Rounded = lazy(() => import('@material-ui/icons/LabelOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LabelOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LabelOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LabelOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Label":
      
      Rounded = lazy(() => import('@material-ui/icons/LabelRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LabelOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LabelSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LabelTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Landscape":
      
      Rounded = lazy(() => import('@material-ui/icons/LandscapeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LandscapeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LandscapeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LandscapeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Language":
      
      Rounded = lazy(() => import('@material-ui/icons/LanguageRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LanguageOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LanguageSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LanguageTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LaptopChromebook":
      
      Rounded = lazy(() => import('@material-ui/icons/LaptopChromebookRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/LaptopChromebookOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LaptopChromebookSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LaptopChromebookTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LaptopMac":
      
      Rounded = lazy(() => import('@material-ui/icons/LaptopMacRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LaptopMacOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LaptopMacSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LaptopMacTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Laptop":
      
      Rounded = lazy(() => import('@material-ui/icons/LaptopRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LaptopOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LaptopSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LaptopTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LaptopWindows":
      
      Rounded = lazy(() => import('@material-ui/icons/LaptopWindowsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LaptopWindowsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LaptopWindowsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LaptopWindowsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LastPage":
      
      Rounded = lazy(() => import('@material-ui/icons/LastPageRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LastPageOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LastPageSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LastPageTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Launch":
      
      Rounded = lazy(() => import('@material-ui/icons/LaunchRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LaunchOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LaunchSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LaunchTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LayersClear":
      
      Rounded = lazy(() => import('@material-ui/icons/LayersClearRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LayersClearOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LayersClearSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LayersClearTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Layers":
      
      Rounded = lazy(() => import('@material-ui/icons/LayersRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LayersOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LayersSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LayersTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LeakAdd":
      
      Rounded = lazy(() => import('@material-ui/icons/LeakAddRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LeakAddOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LeakAddSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LeakAddTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LeakRemove":
      
      Rounded = lazy(() => import('@material-ui/icons/LeakRemoveRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LeakRemoveOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LeakRemoveSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LeakRemoveTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Lens":
      
      Rounded = lazy(() => import('@material-ui/icons/LensRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LensOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LensSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LensTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LibraryAdd":
      
      Rounded = lazy(() => import('@material-ui/icons/LibraryAddRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LibraryAddOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LibraryAddSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LibraryAddTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LibraryBooks":
      
      Rounded = lazy(() => import('@material-ui/icons/LibraryBooksRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LibraryBooksOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LibraryBooksSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LibraryBooksTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LibraryMusic":
      
      Rounded = lazy(() => import('@material-ui/icons/LibraryMusicRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LibraryMusicOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LibraryMusicSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LibraryMusicTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LineStyle":
      
      Rounded = lazy(() => import('@material-ui/icons/LineStyleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LineStyleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LineStyleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LineStyleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LineWeight":
      
      Rounded = lazy(() => import('@material-ui/icons/LineWeightRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LineWeightOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LineWeightSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LineWeightTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LinearScale":
      
      Rounded = lazy(() => import('@material-ui/icons/LinearScaleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LinearScaleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LinearScaleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LinearScaleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LinkOff":
      
      Rounded = lazy(() => import('@material-ui/icons/LinkOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LinkOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LinkOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LinkOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Link":
      
      Rounded = lazy(() => import('@material-ui/icons/LinkRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LinkOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LinkSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LinkTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LinkedCamera":
      
      Rounded = lazy(() => import('@material-ui/icons/LinkedCameraRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LinkedCameraOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LinkedCameraSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LinkedCameraTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ListAlt":
      
      Rounded = lazy(() => import('@material-ui/icons/ListAltRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ListAltOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ListAltSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ListAltTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "List":
      
      Rounded = lazy(() => import('@material-ui/icons/ListRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ListOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ListSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ListTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LiveHelp":
      
      Rounded = lazy(() => import('@material-ui/icons/LiveHelpRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LiveHelpOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LiveHelpSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LiveHelpTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LiveTv":
      
      Rounded = lazy(() => import('@material-ui/icons/LiveTvRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LiveTvOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LiveTvSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LiveTvTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalActivity":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalActivityRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalActivityOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalActivitySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalActivityTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalAirport":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalAirportRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalAirportOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalAirportSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalAirportTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalAtm":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalAtmRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalAtmOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalAtmSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalAtmTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalBar":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalBarRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalBarOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalBarSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalBarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalCafe":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalCafeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalCafeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalCafeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalCafeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalCarWash":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalCarWashRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalCarWashOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalCarWashSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalCarWashTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalConvenienceStore":
      
      Rounded =
        lazy(() => import('@material-ui/icons/LocalConvenienceStoreRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/LocalConvenienceStoreOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/LocalConvenienceStoreSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/LocalConvenienceStoreTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalDining":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalDiningRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalDiningOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalDiningSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalDiningTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalDrink":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalDrinkRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalDrinkOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalDrinkSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalDrinkTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalFlorist":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalFloristRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalFloristOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalFloristSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalFloristTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalGasStation":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalGasStationRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/LocalGasStationOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalGasStationSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalGasStationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalGroceryStore":
      
      Rounded =
        lazy(() => import('@material-ui/icons/LocalGroceryStoreRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/LocalGroceryStoreOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalGroceryStoreSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalGroceryStoreTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalHospital":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalHospitalRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalHospitalOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalHospitalSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalHospitalTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalHotel":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalHotelRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalHotelOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalHotelSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalHotelTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalLaundryService":
      
      Rounded =
        lazy(() => import('@material-ui/icons/LocalLaundryServiceRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/LocalLaundryServiceOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalLaundryServiceSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/LocalLaundryServiceTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalLibrary":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalLibraryRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalLibraryOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalLibrarySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalLibraryTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalMall":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalMallRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalMallOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalMallSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalMallTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalMovies":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalMoviesRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalMoviesOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalMoviesSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalMoviesTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalOffer":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalOfferRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalOfferOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalOfferSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalOfferTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalParking":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalParkingRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalParkingOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalParkingSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalParkingTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalPharmacy":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalPharmacyRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalPharmacyOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalPharmacySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalPharmacyTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalPhone":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalPhoneRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalPhoneOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalPhoneSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalPhoneTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalPizza":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalPizzaRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalPizzaOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalPizzaSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalPizzaTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalPlay":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalPlayRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalPlayOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalPlaySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalPlayTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalPostOffice":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalPostOfficeRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/LocalPostOfficeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalPostOfficeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalPostOfficeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalPrintshop":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalPrintshopRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalPrintshopOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalPrintshopSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalPrintshopTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalSee":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalSeeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalSeeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalSeeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalSeeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalShipping":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalShippingRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalShippingOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalShippingSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalShippingTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocalTaxi":
      
      Rounded = lazy(() => import('@material-ui/icons/LocalTaxiRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocalTaxiOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocalTaxiSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocalTaxiTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocationCity":
      
      Rounded = lazy(() => import('@material-ui/icons/LocationCityRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocationCityOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocationCitySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocationCityTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocationDisabled":
      
      Rounded = lazy(() => import('@material-ui/icons/LocationDisabledRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/LocationDisabledOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocationDisabledSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocationDisabledTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocationOff":
      
      Rounded = lazy(() => import('@material-ui/icons/LocationOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocationOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocationOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocationOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocationOn":
      
      Rounded = lazy(() => import('@material-ui/icons/LocationOnRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LocationOnOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocationOnSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocationOnTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LocationSearching":
      
      Rounded =
        lazy(() => import('@material-ui/icons/LocationSearchingRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/LocationSearchingOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LocationSearchingSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LocationSearchingTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LockOpen":
      
      Rounded = lazy(() => import('@material-ui/icons/LockOpenRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LockOpenOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LockOpenSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LockOpenTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Lock":
      
      Rounded = lazy(() => import('@material-ui/icons/LockRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LockOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LockSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LockTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Looks3":
      
      Rounded = lazy(() => import('@material-ui/icons/Looks3Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Looks3Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Looks3Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Looks3TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Looks4":
      
      Rounded = lazy(() => import('@material-ui/icons/Looks4Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Looks4Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Looks4Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Looks4TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Looks5":
      
      Rounded = lazy(() => import('@material-ui/icons/Looks5Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Looks5Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Looks5Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Looks5TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Looks6":
      
      Rounded = lazy(() => import('@material-ui/icons/Looks6Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Looks6Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Looks6Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Looks6TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LooksOne":
      
      Rounded = lazy(() => import('@material-ui/icons/LooksOneRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LooksOneOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LooksOneSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LooksOneTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Looks":
      
      Rounded = lazy(() => import('@material-ui/icons/LooksRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LooksOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LooksSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LooksTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LooksTwo":
      
      Rounded = lazy(() => import('@material-ui/icons/LooksTwoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LooksTwoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LooksTwoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LooksTwoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Loop":
      
      Rounded = lazy(() => import('@material-ui/icons/LoopRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LoopOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LoopSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LoopTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Loupe":
      
      Rounded = lazy(() => import('@material-ui/icons/LoupeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LoupeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LoupeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LoupeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "LowPriority":
      
      Rounded = lazy(() => import('@material-ui/icons/LowPriorityRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LowPriorityOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LowPrioritySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LowPriorityTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Loyalty":
      
      Rounded = lazy(() => import('@material-ui/icons/LoyaltyRounded')),
      Outlined = lazy(() => import('@material-ui/icons/LoyaltyOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/LoyaltySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/LoyaltyTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MailOutline":
      
      Rounded = lazy(() => import('@material-ui/icons/MailOutlineRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MailOutlineOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MailOutlineSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MailOutlineTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Mail":
      
      Rounded = lazy(() => import('@material-ui/icons/MailRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MailOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MailSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MailTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Map":
      
      Rounded = lazy(() => import('@material-ui/icons/MapRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MapOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MapSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MapTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MarkunreadMailbox":
      
      Rounded =
        lazy(() => import('@material-ui/icons/MarkunreadMailboxRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/MarkunreadMailboxOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MarkunreadMailboxSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MarkunreadMailboxTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Markunread":
      
      Rounded = lazy(() => import('@material-ui/icons/MarkunreadRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MarkunreadOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MarkunreadSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MarkunreadTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Maximize":
      
      Rounded = lazy(() => import('@material-ui/icons/MaximizeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MaximizeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MaximizeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MaximizeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MeetingRoom":
      
      Rounded = lazy(() => import('@material-ui/icons/MeetingRoomRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MeetingRoomOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MeetingRoomSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MeetingRoomTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Memory":
      
      Rounded = lazy(() => import('@material-ui/icons/MemoryRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MemoryOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MemorySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MemoryTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Menu":
      
      Rounded = lazy(() => import('@material-ui/icons/MenuRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MenuOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MenuSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MenuTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MergeType":
      
      Rounded = lazy(() => import('@material-ui/icons/MergeTypeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MergeTypeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MergeTypeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MergeTypeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Message":
      
      Rounded = lazy(() => import('@material-ui/icons/MessageRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MessageOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MessageSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MessageTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MicNone":
      
      Rounded = lazy(() => import('@material-ui/icons/MicNoneRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MicNoneOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MicNoneSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MicNoneTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MicOff":
      
      Rounded = lazy(() => import('@material-ui/icons/MicOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MicOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MicOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MicOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Mic":
      
      Rounded = lazy(() => import('@material-ui/icons/MicRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MicOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MicSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MicTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Minimize":
      
      Rounded = lazy(() => import('@material-ui/icons/MinimizeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MinimizeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MinimizeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MinimizeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MissedVideoCall":
      
      Rounded = lazy(() => import('@material-ui/icons/MissedVideoCallRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/MissedVideoCallOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MissedVideoCallSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MissedVideoCallTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Mms":
      
      Rounded = lazy(() => import('@material-ui/icons/MmsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MmsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MmsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MmsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MobileFriendly":
      
      Rounded = lazy(() => import('@material-ui/icons/MobileFriendlyRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MobileFriendlyOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MobileFriendlySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MobileFriendlyTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MobileOff":
      
      Rounded = lazy(() => import('@material-ui/icons/MobileOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MobileOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MobileOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MobileOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MobileScreenShare":
      
      Rounded =
        lazy(() => import('@material-ui/icons/MobileScreenShareRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/MobileScreenShareOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MobileScreenShareSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MobileScreenShareTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ModeComment":
      
      Rounded = lazy(() => import('@material-ui/icons/ModeCommentRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ModeCommentOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ModeCommentSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ModeCommentTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MonetizationOn":
      
      Rounded = lazy(() => import('@material-ui/icons/MonetizationOnRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MonetizationOnOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MonetizationOnSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MonetizationOnTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MoneyOff":
      
      Rounded = lazy(() => import('@material-ui/icons/MoneyOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MoneyOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MoneyOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MoneyOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Money":
      
      Rounded = lazy(() => import('@material-ui/icons/MoneyRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MoneyOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MoneySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MoneyTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MonochromePhotos":
      
      Rounded = lazy(() => import('@material-ui/icons/MonochromePhotosRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/MonochromePhotosOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MonochromePhotosSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MonochromePhotosTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MoodBad":
      
      Rounded = lazy(() => import('@material-ui/icons/MoodBadRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MoodBadOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MoodBadSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MoodBadTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Mood":
      
      Rounded = lazy(() => import('@material-ui/icons/MoodRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MoodOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MoodSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MoodTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MoreHoriz":
      
      Rounded = lazy(() => import('@material-ui/icons/MoreHorizRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MoreHorizOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MoreHorizSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MoreHorizTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "More":
      
      Rounded = lazy(() => import('@material-ui/icons/MoreRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MoreOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MoreSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MoreTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MoreVert":
      
      Rounded = lazy(() => import('@material-ui/icons/MoreVertRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MoreVertOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MoreVertSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MoreVertTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Motorcycle":
      
      Rounded = lazy(() => import('@material-ui/icons/MotorcycleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MotorcycleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MotorcycleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MotorcycleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Mouse":
      
      Rounded = lazy(() => import('@material-ui/icons/MouseRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MouseOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MouseSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MouseTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MoveToInbox":
      
      Rounded = lazy(() => import('@material-ui/icons/MoveToInboxRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MoveToInboxOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MoveToInboxSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MoveToInboxTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MovieCreation":
      
      Rounded = lazy(() => import('@material-ui/icons/MovieCreationRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MovieCreationOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MovieCreationSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MovieCreationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MovieFilter":
      
      Rounded = lazy(() => import('@material-ui/icons/MovieFilterRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MovieFilterOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MovieFilterSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MovieFilterTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Movie":
      
      Rounded = lazy(() => import('@material-ui/icons/MovieRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MovieOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MovieSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MovieTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MultilineChart":
      
      Rounded = lazy(() => import('@material-ui/icons/MultilineChartRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MultilineChartOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MultilineChartSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MultilineChartTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MusicNote":
      
      Rounded = lazy(() => import('@material-ui/icons/MusicNoteRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MusicNoteOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MusicNoteSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MusicNoteTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MusicOff":
      
      Rounded = lazy(() => import('@material-ui/icons/MusicOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MusicOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MusicOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MusicOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MusicVideo":
      
      Rounded = lazy(() => import('@material-ui/icons/MusicVideoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MusicVideoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MusicVideoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MusicVideoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "MyLocation":
      
      Rounded = lazy(() => import('@material-ui/icons/MyLocationRounded')),
      Outlined = lazy(() => import('@material-ui/icons/MyLocationOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/MyLocationSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/MyLocationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Nature":
      
      Rounded = lazy(() => import('@material-ui/icons/NatureRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NatureOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NatureSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NatureTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NaturePeople":
      
      Rounded = lazy(() => import('@material-ui/icons/NaturePeopleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NaturePeopleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NaturePeopleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NaturePeopleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NavigateBefore":
      
      Rounded = lazy(() => import('@material-ui/icons/NavigateBeforeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NavigateBeforeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NavigateBeforeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NavigateBeforeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NavigateNext":
      
      Rounded = lazy(() => import('@material-ui/icons/NavigateNextRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NavigateNextOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NavigateNextSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NavigateNextTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Navigation":
      
      Rounded = lazy(() => import('@material-ui/icons/NavigationRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NavigationOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NavigationSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NavigationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NearMe":
      
      Rounded = lazy(() => import('@material-ui/icons/NearMeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NearMeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NearMeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NearMeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NetworkCell":
      
      Rounded = lazy(() => import('@material-ui/icons/NetworkCellRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NetworkCellOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NetworkCellSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NetworkCellTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NetworkCheck":
      
      Rounded = lazy(() => import('@material-ui/icons/NetworkCheckRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NetworkCheckOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NetworkCheckSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NetworkCheckTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NetworkLocked":
      
      Rounded = lazy(() => import('@material-ui/icons/NetworkLockedRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NetworkLockedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NetworkLockedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NetworkLockedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NetworkWifi":
      
      Rounded = lazy(() => import('@material-ui/icons/NetworkWifiRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NetworkWifiOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NetworkWifiSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NetworkWifiTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NewReleases":
      
      Rounded = lazy(() => import('@material-ui/icons/NewReleasesRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NewReleasesOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NewReleasesSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NewReleasesTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NextWeek":
      
      Rounded = lazy(() => import('@material-ui/icons/NextWeekRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NextWeekOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NextWeekSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NextWeekTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Nfc":
      
      Rounded = lazy(() => import('@material-ui/icons/NfcRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NfcOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NfcSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NfcTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NoEncryption":
      
      Rounded = lazy(() => import('@material-ui/icons/NoEncryptionRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NoEncryptionOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NoEncryptionSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NoEncryptionTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NoMeetingRoom":
      
      Rounded = lazy(() => import('@material-ui/icons/NoMeetingRoomRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NoMeetingRoomOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NoMeetingRoomSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NoMeetingRoomTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NoSim":
      
      Rounded = lazy(() => import('@material-ui/icons/NoSimRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NoSimOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NoSimSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NoSimTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NotInterested":
      
      Rounded = lazy(() => import('@material-ui/icons/NotInterestedRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NotInterestedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NotInterestedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NotInterestedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NotListedLocation":
      
      Rounded =
        lazy(() => import('@material-ui/icons/NotListedLocationRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/NotListedLocationOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NotListedLocationSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NotListedLocationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NoteAdd":
      
      Rounded = lazy(() => import('@material-ui/icons/NoteAddRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NoteAddOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NoteAddSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NoteAddTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Note":
      
      Rounded = lazy(() => import('@material-ui/icons/NoteRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NoteOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NoteSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NoteTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Notes":
      
      Rounded = lazy(() => import('@material-ui/icons/NotesRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NotesOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NotesSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NotesTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NotificationImportant":
      
      Rounded =
        lazy(() => import('@material-ui/icons/NotificationImportantRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/NotificationImportantOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/NotificationImportantSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/NotificationImportantTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NotificationsActive":
      
      Rounded =
        lazy(() => import('@material-ui/icons/NotificationsActiveRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/NotificationsActiveOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NotificationsActiveSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/NotificationsActiveTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NotificationsNone":
      
      Rounded =
        lazy(() => import('@material-ui/icons/NotificationsNoneRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/NotificationsNoneOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NotificationsNoneSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NotificationsNoneTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NotificationsOff":
      
      Rounded = lazy(() => import('@material-ui/icons/NotificationsOffRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/NotificationsOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NotificationsOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NotificationsOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Notifications":
      
      Rounded = lazy(() => import('@material-ui/icons/NotificationsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/NotificationsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NotificationsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/NotificationsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "NotificationsPaused":
      
      Rounded =
        lazy(() => import('@material-ui/icons/NotificationsPausedRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/NotificationsPausedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/NotificationsPausedSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/NotificationsPausedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "OfflineBolt":
      
      Rounded = lazy(() => import('@material-ui/icons/OfflineBoltRounded')),
      Outlined = lazy(() => import('@material-ui/icons/OfflineBoltOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/OfflineBoltSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/OfflineBoltTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "OfflinePin":
      
      Rounded = lazy(() => import('@material-ui/icons/OfflinePinRounded')),
      Outlined = lazy(() => import('@material-ui/icons/OfflinePinOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/OfflinePinSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/OfflinePinTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "OndemandVideo":
      
      Rounded = lazy(() => import('@material-ui/icons/OndemandVideoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/OndemandVideoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/OndemandVideoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/OndemandVideoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Opacity":
      
      Rounded = lazy(() => import('@material-ui/icons/OpacityRounded')),
      Outlined = lazy(() => import('@material-ui/icons/OpacityOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/OpacitySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/OpacityTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "OpenInBrowser":
      
      Rounded = lazy(() => import('@material-ui/icons/OpenInBrowserRounded')),
      Outlined = lazy(() => import('@material-ui/icons/OpenInBrowserOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/OpenInBrowserSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/OpenInBrowserTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "OpenInNew":
      
      Rounded = lazy(() => import('@material-ui/icons/OpenInNewRounded')),
      Outlined = lazy(() => import('@material-ui/icons/OpenInNewOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/OpenInNewSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/OpenInNewTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "OpenWith":
      
      Rounded = lazy(() => import('@material-ui/icons/OpenWithRounded')),
      Outlined = lazy(() => import('@material-ui/icons/OpenWithOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/OpenWithSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/OpenWithTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "OutlinedFlag":
      
      Rounded = lazy(() => import('@material-ui/icons/OutlinedFlagRounded')),
      Outlined = lazy(() => import('@material-ui/icons/OutlinedFlagOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/OutlinedFlagSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/OutlinedFlagTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Pages":
      
      Rounded = lazy(() => import('@material-ui/icons/PagesRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PagesOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PagesSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PagesTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Pageview":
      
      Rounded = lazy(() => import('@material-ui/icons/PageviewRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PageviewOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PageviewSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PageviewTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Palette":
      
      Rounded = lazy(() => import('@material-ui/icons/PaletteRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PaletteOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PaletteSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PaletteTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PanTool":
      
      Rounded = lazy(() => import('@material-ui/icons/PanToolRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PanToolOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PanToolSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PanToolTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PanoramaFishEye":
      
      Rounded = lazy(() => import('@material-ui/icons/PanoramaFishEyeRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PanoramaFishEyeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PanoramaFishEyeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PanoramaFishEyeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PanoramaHorizontal":
      
      Rounded =
        lazy(() => import('@material-ui/icons/PanoramaHorizontalRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PanoramaHorizontalOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PanoramaHorizontalSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/PanoramaHorizontalTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Panorama":
      
      Rounded = lazy(() => import('@material-ui/icons/PanoramaRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PanoramaOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PanoramaSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PanoramaTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PanoramaVertical":
      
      Rounded = lazy(() => import('@material-ui/icons/PanoramaVerticalRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PanoramaVerticalOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PanoramaVerticalSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PanoramaVerticalTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PanoramaWideAngle":
      
      Rounded =
        lazy(() => import('@material-ui/icons/PanoramaWideAngleRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PanoramaWideAngleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PanoramaWideAngleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PanoramaWideAngleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PartyMode":
      
      Rounded = lazy(() => import('@material-ui/icons/PartyModeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PartyModeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PartyModeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PartyModeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PauseCircleFilled":
      
      Rounded =
        lazy(() => import('@material-ui/icons/PauseCircleFilledRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PauseCircleFilledOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PauseCircleFilledSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PauseCircleFilledTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PauseCircleOutline":
      
      Rounded =
        lazy(() => import('@material-ui/icons/PauseCircleOutlineRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PauseCircleOutlineOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PauseCircleOutlineSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/PauseCircleOutlineTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Pause":
      
      Rounded = lazy(() => import('@material-ui/icons/PauseRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PauseOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PauseSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PauseTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PausePresentation":
      
      Rounded =
        lazy(() => import('@material-ui/icons/PausePresentationRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PausePresentationOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PausePresentationSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PausePresentationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Payment":
      
      Rounded = lazy(() => import('@material-ui/icons/PaymentRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PaymentOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PaymentSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PaymentTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PeopleOutline":
      
      Rounded = lazy(() => import('@material-ui/icons/PeopleOutlineRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PeopleOutlineOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PeopleOutlineSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PeopleOutlineTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "People":
      
      Rounded = lazy(() => import('@material-ui/icons/PeopleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PeopleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PeopleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PeopleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PermCameraMic":
      
      Rounded = lazy(() => import('@material-ui/icons/PermCameraMicRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PermCameraMicOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PermCameraMicSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PermCameraMicTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PermContactCalendar":
      
      Rounded =
        lazy(() => import('@material-ui/icons/PermContactCalendarRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PermContactCalendarOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PermContactCalendarSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/PermContactCalendarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PermDataSetting":
      
      Rounded = lazy(() => import('@material-ui/icons/PermDataSettingRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PermDataSettingOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PermDataSettingSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PermDataSettingTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PermDeviceInformation":
      
      Rounded =
        lazy(() => import('@material-ui/icons/PermDeviceInformationRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PermDeviceInformationOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/PermDeviceInformationSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/PermDeviceInformationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PermIdentity":
      
      Rounded = lazy(() => import('@material-ui/icons/PermIdentityRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PermIdentityOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PermIdentitySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PermIdentityTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PermMedia":
      
      Rounded = lazy(() => import('@material-ui/icons/PermMediaRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PermMediaOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PermMediaSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PermMediaTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PermPhoneMsg":
      
      Rounded = lazy(() => import('@material-ui/icons/PermPhoneMsgRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PermPhoneMsgOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PermPhoneMsgSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PermPhoneMsgTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PermScanWifi":
      
      Rounded = lazy(() => import('@material-ui/icons/PermScanWifiRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PermScanWifiOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PermScanWifiSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PermScanWifiTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PersonAddDisabled":
      
      Rounded =
        lazy(() => import('@material-ui/icons/PersonAddDisabledRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PersonAddDisabledOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PersonAddDisabledSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PersonAddDisabledTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PersonAdd":
      
      Rounded = lazy(() => import('@material-ui/icons/PersonAddRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PersonAddOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PersonAddSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PersonAddTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PersonOutline":
      
      Rounded = lazy(() => import('@material-ui/icons/PersonOutlineRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PersonOutlineOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PersonOutlineSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PersonOutlineTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Person":
      
      Rounded = lazy(() => import('@material-ui/icons/PersonRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PersonOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PersonSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PersonTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PersonPinCircle":
      
      Rounded = lazy(() => import('@material-ui/icons/PersonPinCircleRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PersonPinCircleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PersonPinCircleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PersonPinCircleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PersonPin":
      
      Rounded = lazy(() => import('@material-ui/icons/PersonPinRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PersonPinOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PersonPinSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PersonPinTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PersonalVideo":
      
      Rounded = lazy(() => import('@material-ui/icons/PersonalVideoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PersonalVideoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PersonalVideoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PersonalVideoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Pets":
      
      Rounded = lazy(() => import('@material-ui/icons/PetsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PetsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PetsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PetsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhoneAndroid":
      
      Rounded = lazy(() => import('@material-ui/icons/PhoneAndroidRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhoneAndroidOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhoneAndroidSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhoneAndroidTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhoneBluetoothSpeaker":
      
      Rounded =
        lazy(() => import('@material-ui/icons/PhoneBluetoothSpeakerRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PhoneBluetoothSpeakerOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/PhoneBluetoothSpeakerSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/PhoneBluetoothSpeakerTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhoneCallback":
      
      Rounded = lazy(() => import('@material-ui/icons/PhoneCallbackRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhoneCallbackOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhoneCallbackSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhoneCallbackTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhoneForwarded":
      
      Rounded = lazy(() => import('@material-ui/icons/PhoneForwardedRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhoneForwardedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhoneForwardedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhoneForwardedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhoneInTalk":
      
      Rounded = lazy(() => import('@material-ui/icons/PhoneInTalkRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhoneInTalkOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhoneInTalkSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhoneInTalkTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhoneIphone":
      
      Rounded = lazy(() => import('@material-ui/icons/PhoneIphoneRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhoneIphoneOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhoneIphoneSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhoneIphoneTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhoneLocked":
      
      Rounded = lazy(() => import('@material-ui/icons/PhoneLockedRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhoneLockedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhoneLockedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhoneLockedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhoneMissed":
      
      Rounded = lazy(() => import('@material-ui/icons/PhoneMissedRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhoneMissedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhoneMissedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhoneMissedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Phone":
      
      Rounded = lazy(() => import('@material-ui/icons/PhoneRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhoneOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhoneSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhoneTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhonePaused":
      
      Rounded = lazy(() => import('@material-ui/icons/PhonePausedRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhonePausedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhonePausedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhonePausedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhonelinkErase":
      
      Rounded = lazy(() => import('@material-ui/icons/PhonelinkEraseRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhonelinkEraseOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhonelinkEraseSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhonelinkEraseTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhonelinkLock":
      
      Rounded = lazy(() => import('@material-ui/icons/PhonelinkLockRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhonelinkLockOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhonelinkLockSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhonelinkLockTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhonelinkOff":
      
      Rounded = lazy(() => import('@material-ui/icons/PhonelinkOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhonelinkOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhonelinkOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhonelinkOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Phonelink":
      
      Rounded = lazy(() => import('@material-ui/icons/PhonelinkRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhonelinkOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhonelinkSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhonelinkTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhonelinkRing":
      
      Rounded = lazy(() => import('@material-ui/icons/PhonelinkRingRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhonelinkRingOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhonelinkRingSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhonelinkRingTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhonelinkSetup":
      
      Rounded = lazy(() => import('@material-ui/icons/PhonelinkSetupRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhonelinkSetupOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhonelinkSetupSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhonelinkSetupTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhotoAlbum":
      
      Rounded = lazy(() => import('@material-ui/icons/PhotoAlbumRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhotoAlbumOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhotoAlbumSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhotoAlbumTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhotoCamera":
      
      Rounded = lazy(() => import('@material-ui/icons/PhotoCameraRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhotoCameraOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhotoCameraSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhotoCameraTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhotoFilter":
      
      Rounded = lazy(() => import('@material-ui/icons/PhotoFilterRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhotoFilterOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhotoFilterSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhotoFilterTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhotoLibrary":
      
      Rounded = lazy(() => import('@material-ui/icons/PhotoLibraryRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhotoLibraryOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhotoLibrarySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhotoLibraryTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Photo":
      
      Rounded = lazy(() => import('@material-ui/icons/PhotoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PhotoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhotoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PhotoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhotoSizeSelectActual":
      
      Rounded =
        lazy(() => import('@material-ui/icons/PhotoSizeSelectActualRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PhotoSizeSelectActualOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/PhotoSizeSelectActualSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/PhotoSizeSelectActualTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhotoSizeSelectLarge":
      
      Rounded =
        lazy(() => import('@material-ui/icons/PhotoSizeSelectLargeRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PhotoSizeSelectLargeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhotoSizeSelectLargeSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/PhotoSizeSelectLargeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PhotoSizeSelectSmall":
      
      Rounded =
        lazy(() => import('@material-ui/icons/PhotoSizeSelectSmallRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PhotoSizeSelectSmallOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PhotoSizeSelectSmallSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/PhotoSizeSelectSmallTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PictureAsPdf":
      
      Rounded = lazy(() => import('@material-ui/icons/PictureAsPdfRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PictureAsPdfOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PictureAsPdfSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PictureAsPdfTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PictureInPictureAlt":
      
      Rounded =
        lazy(() => import('@material-ui/icons/PictureInPictureAltRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PictureInPictureAltOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PictureInPictureAltSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/PictureInPictureAltTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PictureInPicture":
      
      Rounded = lazy(() => import('@material-ui/icons/PictureInPictureRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PictureInPictureOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PictureInPictureSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PictureInPictureTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PieChart":
      
      Rounded = lazy(() => import('@material-ui/icons/PieChartRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PieChartOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PieChartSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PieChartTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PinDrop":
      
      Rounded = lazy(() => import('@material-ui/icons/PinDropRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PinDropOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PinDropSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PinDropTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Place":
      
      Rounded = lazy(() => import('@material-ui/icons/PlaceRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PlaceOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PlaceSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PlaceTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PlayArrow":
      
      Rounded = lazy(() => import('@material-ui/icons/PlayArrowRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PlayArrowOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PlayArrowSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PlayArrowTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PlayCircleFilled":
      
      Rounded = lazy(() => import('@material-ui/icons/PlayCircleFilledRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PlayCircleFilledOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PlayCircleFilledSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PlayCircleFilledTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PlayCircleFilledWhite":
      
      Rounded =
        lazy(() => import('@material-ui/icons/PlayCircleFilledWhiteRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PlayCircleFilledWhiteOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/PlayCircleFilledWhiteSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/PlayCircleFilledWhiteTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PlayCircleOutline":
      
      Rounded =
        lazy(() => import('@material-ui/icons/PlayCircleOutlineRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PlayCircleOutlineOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PlayCircleOutlineSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PlayCircleOutlineTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PlayForWork":
      
      Rounded = lazy(() => import('@material-ui/icons/PlayForWorkRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PlayForWorkOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PlayForWorkSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PlayForWorkTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PlaylistAddCheck":
      
      Rounded = lazy(() => import('@material-ui/icons/PlaylistAddCheckRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PlaylistAddCheckOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PlaylistAddCheckSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PlaylistAddCheckTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PlaylistAdd":
      
      Rounded = lazy(() => import('@material-ui/icons/PlaylistAddRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PlaylistAddOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PlaylistAddSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PlaylistAddTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PlaylistPlay":
      
      Rounded = lazy(() => import('@material-ui/icons/PlaylistPlayRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PlaylistPlayOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PlaylistPlaySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PlaylistPlayTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PlusOne":
      
      Rounded = lazy(() => import('@material-ui/icons/PlusOneRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PlusOneOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PlusOneSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PlusOneTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Poll":
      
      Rounded = lazy(() => import('@material-ui/icons/PollRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PollOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PollSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PollTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Polymer":
      
      Rounded = lazy(() => import('@material-ui/icons/PolymerRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PolymerOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PolymerSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PolymerTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Pool":
      
      Rounded = lazy(() => import('@material-ui/icons/PoolRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PoolOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PoolSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PoolTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PortableWifiOff":
      
      Rounded = lazy(() => import('@material-ui/icons/PortableWifiOffRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PortableWifiOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PortableWifiOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PortableWifiOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Portrait":
      
      Rounded = lazy(() => import('@material-ui/icons/PortraitRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PortraitOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PortraitSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PortraitTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PowerInput":
      
      Rounded = lazy(() => import('@material-ui/icons/PowerInputRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PowerInputOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PowerInputSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PowerInputTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PowerOff":
      
      Rounded = lazy(() => import('@material-ui/icons/PowerOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PowerOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PowerOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PowerOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Power":
      
      Rounded = lazy(() => import('@material-ui/icons/PowerRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PowerOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PowerSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PowerTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PowerSettingsNew":
      
      Rounded = lazy(() => import('@material-ui/icons/PowerSettingsNewRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/PowerSettingsNewOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PowerSettingsNewSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PowerSettingsNewTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PregnantWoman":
      
      Rounded = lazy(() => import('@material-ui/icons/PregnantWomanRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PregnantWomanOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PregnantWomanSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PregnantWomanTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PresentToAll":
      
      Rounded = lazy(() => import('@material-ui/icons/PresentToAllRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PresentToAllOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PresentToAllSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PresentToAllTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PrintDisabled":
      
      Rounded = lazy(() => import('@material-ui/icons/PrintDisabledRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PrintDisabledOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PrintDisabledSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PrintDisabledTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Print":
      
      Rounded = lazy(() => import('@material-ui/icons/PrintRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PrintOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PrintSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PrintTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "PriorityHigh":
      
      Rounded = lazy(() => import('@material-ui/icons/PriorityHighRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PriorityHighOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PriorityHighSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PriorityHighTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Public":
      
      Rounded = lazy(() => import('@material-ui/icons/PublicRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PublicOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PublicSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PublicTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Publish":
      
      Rounded = lazy(() => import('@material-ui/icons/PublishRounded')),
      Outlined = lazy(() => import('@material-ui/icons/PublishOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/PublishSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/PublishTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "QueryBuilder":
      
      Rounded = lazy(() => import('@material-ui/icons/QueryBuilderRounded')),
      Outlined = lazy(() => import('@material-ui/icons/QueryBuilderOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/QueryBuilderSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/QueryBuilderTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "QuestionAnswer":
      
      Rounded = lazy(() => import('@material-ui/icons/QuestionAnswerRounded')),
      Outlined = lazy(() => import('@material-ui/icons/QuestionAnswerOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/QuestionAnswerSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/QuestionAnswerTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "QueueMusic":
      
      Rounded = lazy(() => import('@material-ui/icons/QueueMusicRounded')),
      Outlined = lazy(() => import('@material-ui/icons/QueueMusicOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/QueueMusicSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/QueueMusicTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Queue":
      
      Rounded = lazy(() => import('@material-ui/icons/QueueRounded')),
      Outlined = lazy(() => import('@material-ui/icons/QueueOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/QueueSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/QueueTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "QueuePlayNext":
      
      Rounded = lazy(() => import('@material-ui/icons/QueuePlayNextRounded')),
      Outlined = lazy(() => import('@material-ui/icons/QueuePlayNextOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/QueuePlayNextSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/QueuePlayNextTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RadioButtonChecked":
      
      Rounded =
        lazy(() => import('@material-ui/icons/RadioButtonCheckedRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/RadioButtonCheckedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RadioButtonCheckedSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/RadioButtonCheckedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RadioButtonUnchecked":
      
      Rounded =
        lazy(() => import('@material-ui/icons/RadioButtonUncheckedRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/RadioButtonUncheckedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RadioButtonUncheckedSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/RadioButtonUncheckedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Radio":
      
      Rounded = lazy(() => import('@material-ui/icons/RadioRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RadioOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RadioSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RadioTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RateReview":
      
      Rounded = lazy(() => import('@material-ui/icons/RateReviewRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RateReviewOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RateReviewSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RateReviewTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Receipt":
      
      Rounded = lazy(() => import('@material-ui/icons/ReceiptRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ReceiptOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ReceiptSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ReceiptTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RecentActors":
      
      Rounded = lazy(() => import('@material-ui/icons/RecentActorsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RecentActorsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RecentActorsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RecentActorsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RecordVoiceOver":
      
      Rounded = lazy(() => import('@material-ui/icons/RecordVoiceOverRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/RecordVoiceOverOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RecordVoiceOverSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RecordVoiceOverTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Redeem":
      
      Rounded = lazy(() => import('@material-ui/icons/RedeemRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RedeemOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RedeemSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RedeemTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Redo":
      
      Rounded = lazy(() => import('@material-ui/icons/RedoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RedoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RedoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RedoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Refresh":
      
      Rounded = lazy(() => import('@material-ui/icons/RefreshRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RefreshOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RefreshSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RefreshTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RemoveCircleOutline":
      
      Rounded =
        lazy(() => import('@material-ui/icons/RemoveCircleOutlineRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/RemoveCircleOutlineOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RemoveCircleOutlineSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/RemoveCircleOutlineTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RemoveCircle":
      
      Rounded = lazy(() => import('@material-ui/icons/RemoveCircleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RemoveCircleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RemoveCircleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RemoveCircleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RemoveFromQueue":
      
      Rounded = lazy(() => import('@material-ui/icons/RemoveFromQueueRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/RemoveFromQueueOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RemoveFromQueueSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RemoveFromQueueTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Remove":
      
      Rounded = lazy(() => import('@material-ui/icons/RemoveRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RemoveOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RemoveSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RemoveTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RemoveRedEye":
      
      Rounded = lazy(() => import('@material-ui/icons/RemoveRedEyeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RemoveRedEyeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RemoveRedEyeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RemoveRedEyeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RemoveShoppingCart":
      
      Rounded =
        lazy(() => import('@material-ui/icons/RemoveShoppingCartRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/RemoveShoppingCartOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RemoveShoppingCartSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/RemoveShoppingCartTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Reorder":
      
      Rounded = lazy(() => import('@material-ui/icons/ReorderRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ReorderOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ReorderSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ReorderTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RepeatOne":
      
      Rounded = lazy(() => import('@material-ui/icons/RepeatOneRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RepeatOneOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RepeatOneSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RepeatOneTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Repeat":
      
      Rounded = lazy(() => import('@material-ui/icons/RepeatRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RepeatOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RepeatSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RepeatTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Replay10":
      
      Rounded = lazy(() => import('@material-ui/icons/Replay10Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Replay10Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Replay10Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Replay10TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Replay30":
      
      Rounded = lazy(() => import('@material-ui/icons/Replay30Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Replay30Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Replay30Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Replay30TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Replay5":
      
      Rounded = lazy(() => import('@material-ui/icons/Replay5Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Replay5Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Replay5Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Replay5TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Replay":
      
      Rounded = lazy(() => import('@material-ui/icons/ReplayRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ReplayOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ReplaySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ReplayTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ReplyAll":
      
      Rounded = lazy(() => import('@material-ui/icons/ReplyAllRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ReplyAllOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ReplyAllSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ReplyAllTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Reply":
      
      Rounded = lazy(() => import('@material-ui/icons/ReplyRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ReplyOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ReplySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ReplyTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ReportOff":
      
      Rounded = lazy(() => import('@material-ui/icons/ReportOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ReportOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ReportOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ReportOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Report":
      
      Rounded = lazy(() => import('@material-ui/icons/ReportRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ReportOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ReportSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ReportTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ReportProblem":
      
      Rounded = lazy(() => import('@material-ui/icons/ReportProblemRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ReportProblemOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ReportProblemSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ReportProblemTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RestaurantMenu":
      
      Rounded = lazy(() => import('@material-ui/icons/RestaurantMenuRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RestaurantMenuOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RestaurantMenuSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RestaurantMenuTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Restaurant":
      
      Rounded = lazy(() => import('@material-ui/icons/RestaurantRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RestaurantOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RestaurantSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RestaurantTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RestoreFromTrash":
      
      Rounded = lazy(() => import('@material-ui/icons/RestoreFromTrashRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/RestoreFromTrashOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RestoreFromTrashSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RestoreFromTrashTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Restore":
      
      Rounded = lazy(() => import('@material-ui/icons/RestoreRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RestoreOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RestoreSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RestoreTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RestorePage":
      
      Rounded = lazy(() => import('@material-ui/icons/RestorePageRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RestorePageOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RestorePageSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RestorePageTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RingVolume":
      
      Rounded = lazy(() => import('@material-ui/icons/RingVolumeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RingVolumeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RingVolumeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RingVolumeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Room":
      
      Rounded = lazy(() => import('@material-ui/icons/RoomRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RoomOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RoomSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RoomTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RoomService":
      
      Rounded = lazy(() => import('@material-ui/icons/RoomServiceRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RoomServiceOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RoomServiceSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RoomServiceTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Rotate90DegreesCcw":
      
      Rounded =
        lazy(() => import('@material-ui/icons/Rotate90DegreesCcwRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/Rotate90DegreesCcwOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/Rotate90DegreesCcwSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/Rotate90DegreesCcwTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RotateLeft":
      
      Rounded = lazy(() => import('@material-ui/icons/RotateLeftRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RotateLeftOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RotateLeftSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RotateLeftTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RotateRight":
      
      Rounded = lazy(() => import('@material-ui/icons/RotateRightRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RotateRightOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RotateRightSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RotateRightTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Router":
      
      Rounded = lazy(() => import('@material-ui/icons/RouterRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RouterOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RouterSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RouterTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Rowing":
      
      Rounded = lazy(() => import('@material-ui/icons/RowingRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RowingOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RowingSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RowingTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RssFeed":
      
      Rounded = lazy(() => import('@material-ui/icons/RssFeedRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RssFeedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RssFeedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RssFeedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "RvHookup":
      
      Rounded = lazy(() => import('@material-ui/icons/RvHookupRounded')),
      Outlined = lazy(() => import('@material-ui/icons/RvHookupOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/RvHookupSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/RvHookupTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Satellite":
      
      Rounded = lazy(() => import('@material-ui/icons/SatelliteRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SatelliteOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SatelliteSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SatelliteTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SaveAlt":
      
      Rounded = lazy(() => import('@material-ui/icons/SaveAltRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SaveAltOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SaveAltSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SaveAltTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Save":
      
      Rounded = lazy(() => import('@material-ui/icons/SaveRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SaveOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SaveSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SaveTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Scanner":
      
      Rounded = lazy(() => import('@material-ui/icons/ScannerRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ScannerOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ScannerSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ScannerTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ScatterPlot":
      
      Rounded = lazy(() => import('@material-ui/icons/ScatterPlotRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ScatterPlotOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ScatterPlotSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ScatterPlotTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Schedule":
      
      Rounded = lazy(() => import('@material-ui/icons/ScheduleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ScheduleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ScheduleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ScheduleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "School":
      
      Rounded = lazy(() => import('@material-ui/icons/SchoolRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SchoolOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SchoolSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SchoolTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Score":
      
      Rounded = lazy(() => import('@material-ui/icons/ScoreRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ScoreOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ScoreSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ScoreTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ScreenLockLandscape":
      
      Rounded =
        lazy(() => import('@material-ui/icons/ScreenLockLandscapeRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/ScreenLockLandscapeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ScreenLockLandscapeSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/ScreenLockLandscapeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ScreenLockPortrait":
      
      Rounded =
        lazy(() => import('@material-ui/icons/ScreenLockPortraitRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/ScreenLockPortraitOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ScreenLockPortraitSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/ScreenLockPortraitTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ScreenLockRotation":
      
      Rounded =
        lazy(() => import('@material-ui/icons/ScreenLockRotationRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/ScreenLockRotationOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ScreenLockRotationSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/ScreenLockRotationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ScreenRotation":
      
      Rounded = lazy(() => import('@material-ui/icons/ScreenRotationRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ScreenRotationOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ScreenRotationSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ScreenRotationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ScreenShare":
      
      Rounded = lazy(() => import('@material-ui/icons/ScreenShareRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ScreenShareOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ScreenShareSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ScreenShareTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SdCard":
      
      Rounded = lazy(() => import('@material-ui/icons/SdCardRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SdCardOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SdCardSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SdCardTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SdStorage":
      
      Rounded = lazy(() => import('@material-ui/icons/SdStorageRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SdStorageOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SdStorageSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SdStorageTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Search":
      
      Rounded = lazy(() => import('@material-ui/icons/SearchRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SearchOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SearchSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SearchTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Security":
      
      Rounded = lazy(() => import('@material-ui/icons/SecurityRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SecurityOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SecuritySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SecurityTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SelectAll":
      
      Rounded = lazy(() => import('@material-ui/icons/SelectAllRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SelectAllOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SelectAllSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SelectAllTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Send":
      
      Rounded = lazy(() => import('@material-ui/icons/SendRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SendOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SendSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SendTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SentimentDissatisfied":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SentimentDissatisfiedRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SentimentDissatisfiedOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/SentimentDissatisfiedSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SentimentDissatisfiedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SentimentSatisfiedAlt":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SentimentSatisfiedAltRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SentimentSatisfiedAltOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/SentimentSatisfiedAltSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SentimentSatisfiedAltTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SentimentSatisfied":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SentimentSatisfiedRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SentimentSatisfiedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SentimentSatisfiedSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SentimentSatisfiedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SentimentVeryDissatisfied":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SentimentVeryDissatisfiedRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SentimentVeryDissatisfiedOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/SentimentVeryDissatisfiedSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SentimentVeryDissatisfiedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SentimentVerySatisfied":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SentimentVerySatisfiedRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SentimentVerySatisfiedOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/SentimentVerySatisfiedSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SentimentVerySatisfiedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SettingsApplications":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SettingsApplicationsRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SettingsApplicationsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SettingsApplicationsSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SettingsApplicationsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SettingsBackupRestore":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SettingsBackupRestoreRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SettingsBackupRestoreOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/SettingsBackupRestoreSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SettingsBackupRestoreTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SettingsBluetooth":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SettingsBluetoothRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SettingsBluetoothOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SettingsBluetoothSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SettingsBluetoothTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SettingsBrightness":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SettingsBrightnessRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SettingsBrightnessOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SettingsBrightnessSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SettingsBrightnessTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SettingsCell":
      
      Rounded = lazy(() => import('@material-ui/icons/SettingsCellRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SettingsCellOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SettingsCellSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SettingsCellTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SettingsEthernet":
      
      Rounded = lazy(() => import('@material-ui/icons/SettingsEthernetRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SettingsEthernetOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SettingsEthernetSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SettingsEthernetTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SettingsInputAntenna":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SettingsInputAntennaRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SettingsInputAntennaOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SettingsInputAntennaSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SettingsInputAntennaTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SettingsInputComponent":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SettingsInputComponentRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SettingsInputComponentOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/SettingsInputComponentSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SettingsInputComponentTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SettingsInputComposite":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SettingsInputCompositeRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SettingsInputCompositeOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/SettingsInputCompositeSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SettingsInputCompositeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SettingsInputHdmi":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SettingsInputHdmiRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SettingsInputHdmiOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SettingsInputHdmiSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SettingsInputHdmiTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SettingsInputSvideo":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SettingsInputSvideoRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SettingsInputSvideoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SettingsInputSvideoSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SettingsInputSvideoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Settings":
      
      Rounded = lazy(() => import('@material-ui/icons/SettingsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SettingsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SettingsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SettingsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SettingsOverscan":
      
      Rounded = lazy(() => import('@material-ui/icons/SettingsOverscanRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SettingsOverscanOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SettingsOverscanSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SettingsOverscanTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SettingsPhone":
      
      Rounded = lazy(() => import('@material-ui/icons/SettingsPhoneRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SettingsPhoneOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SettingsPhoneSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SettingsPhoneTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SettingsPower":
      
      Rounded = lazy(() => import('@material-ui/icons/SettingsPowerRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SettingsPowerOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SettingsPowerSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SettingsPowerTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SettingsRemote":
      
      Rounded = lazy(() => import('@material-ui/icons/SettingsRemoteRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SettingsRemoteOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SettingsRemoteSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SettingsRemoteTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SettingsSystemDaydream":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SettingsSystemDaydreamRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SettingsSystemDaydreamOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/SettingsSystemDaydreamSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SettingsSystemDaydreamTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SettingsVoice":
      
      Rounded = lazy(() => import('@material-ui/icons/SettingsVoiceRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SettingsVoiceOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SettingsVoiceSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SettingsVoiceTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Share":
      
      Rounded = lazy(() => import('@material-ui/icons/ShareRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ShareOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ShareSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ShareTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Shop":
      
      Rounded = lazy(() => import('@material-ui/icons/ShopRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ShopOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ShopSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ShopTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ShopTwo":
      
      Rounded = lazy(() => import('@material-ui/icons/ShopTwoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ShopTwoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ShopTwoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ShopTwoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ShoppingBasket":
      
      Rounded = lazy(() => import('@material-ui/icons/ShoppingBasketRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ShoppingBasketOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ShoppingBasketSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ShoppingBasketTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ShoppingCart":
      
      Rounded = lazy(() => import('@material-ui/icons/ShoppingCartRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ShoppingCartOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ShoppingCartSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ShoppingCartTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ShortText":
      
      Rounded = lazy(() => import('@material-ui/icons/ShortTextRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ShortTextOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ShortTextSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ShortTextTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ShowChart":
      
      Rounded = lazy(() => import('@material-ui/icons/ShowChartRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ShowChartOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ShowChartSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ShowChartTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Shuffle":
      
      Rounded = lazy(() => import('@material-ui/icons/ShuffleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ShuffleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ShuffleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ShuffleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ShutterSpeed":
      
      Rounded = lazy(() => import('@material-ui/icons/ShutterSpeedRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ShutterSpeedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ShutterSpeedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ShutterSpeedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalCellular0Bar":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalCellular0BarRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalCellular0BarOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalCellular0BarSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SignalCellular0BarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalCellular1Bar":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalCellular1BarRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalCellular1BarOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalCellular1BarSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SignalCellular1BarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalCellular2Bar":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalCellular2BarRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalCellular2BarOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalCellular2BarSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SignalCellular2BarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalCellular3Bar":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalCellular3BarRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalCellular3BarOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalCellular3BarSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SignalCellular3BarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalCellular4Bar":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalCellular4BarRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalCellular4BarOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalCellular4BarSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SignalCellular4BarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalCellularAlt":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalCellularAltRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalCellularAltOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalCellularAltSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SignalCellularAltTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalCellularConnectedNoInternet0Bar":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet0BarRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet0BarOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet0BarSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet0BarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalCellularConnectedNoInternet1Bar":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet1BarRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet1BarOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet1BarSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet1BarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalCellularConnectedNoInternet2Bar":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet2BarRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet2BarOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet2BarSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet2BarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalCellularConnectedNoInternet3Bar":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet3BarRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet3BarOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet3BarSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet3BarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalCellularConnectedNoInternet4Bar":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet4BarRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet4BarOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet4BarSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet4BarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalCellularNoSim":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalCellularNoSimRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalCellularNoSimOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalCellularNoSimSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SignalCellularNoSimTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalCellularNull":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalCellularNullRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalCellularNullOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalCellularNullSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SignalCellularNullTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalCellularOff":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalCellularOffRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalCellularOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalCellularOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SignalCellularOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalWifi0Bar":
      
      Rounded = lazy(() => import('@material-ui/icons/SignalWifi0BarRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SignalWifi0BarOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalWifi0BarSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SignalWifi0BarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalWifi1BarLock":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalWifi1BarLockRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalWifi1BarLockOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalWifi1BarLockSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SignalWifi1BarLockTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalWifi1Bar":
      
      Rounded = lazy(() => import('@material-ui/icons/SignalWifi1BarRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SignalWifi1BarOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalWifi1BarSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SignalWifi1BarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalWifi2BarLock":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalWifi2BarLockRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalWifi2BarLockOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalWifi2BarLockSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SignalWifi2BarLockTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalWifi2Bar":
      
      Rounded = lazy(() => import('@material-ui/icons/SignalWifi2BarRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SignalWifi2BarOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalWifi2BarSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SignalWifi2BarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalWifi3BarLock":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalWifi3BarLockRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalWifi3BarLockOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalWifi3BarLockSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SignalWifi3BarLockTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalWifi3Bar":
      
      Rounded = lazy(() => import('@material-ui/icons/SignalWifi3BarRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SignalWifi3BarOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalWifi3BarSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SignalWifi3BarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalWifi4BarLock":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SignalWifi4BarLockRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SignalWifi4BarLockOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalWifi4BarLockSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SignalWifi4BarLockTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalWifi4Bar":
      
      Rounded = lazy(() => import('@material-ui/icons/SignalWifi4BarRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SignalWifi4BarOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalWifi4BarSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SignalWifi4BarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SignalWifiOff":
      
      Rounded = lazy(() => import('@material-ui/icons/SignalWifiOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SignalWifiOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SignalWifiOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SignalWifiOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SimCard":
      
      Rounded = lazy(() => import('@material-ui/icons/SimCardRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SimCardOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SimCardSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SimCardTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SkipNext":
      
      Rounded = lazy(() => import('@material-ui/icons/SkipNextRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SkipNextOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SkipNextSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SkipNextTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SkipPrevious":
      
      Rounded = lazy(() => import('@material-ui/icons/SkipPreviousRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SkipPreviousOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SkipPreviousSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SkipPreviousTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Slideshow":
      
      Rounded = lazy(() => import('@material-ui/icons/SlideshowRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SlideshowOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SlideshowSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SlideshowTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SlowMotionVideo":
      
      Rounded = lazy(() => import('@material-ui/icons/SlowMotionVideoRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SlowMotionVideoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SlowMotionVideoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SlowMotionVideoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Smartphone":
      
      Rounded = lazy(() => import('@material-ui/icons/SmartphoneRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SmartphoneOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SmartphoneSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SmartphoneTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SmokeFree":
      
      Rounded = lazy(() => import('@material-ui/icons/SmokeFreeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SmokeFreeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SmokeFreeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SmokeFreeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SmokingRooms":
      
      Rounded = lazy(() => import('@material-ui/icons/SmokingRoomsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SmokingRoomsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SmokingRoomsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SmokingRoomsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SmsFailed":
      
      Rounded = lazy(() => import('@material-ui/icons/SmsFailedRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SmsFailedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SmsFailedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SmsFailedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Sms":
      
      Rounded = lazy(() => import('@material-ui/icons/SmsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SmsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SmsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SmsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Snooze":
      
      Rounded = lazy(() => import('@material-ui/icons/SnoozeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SnoozeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SnoozeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SnoozeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SortByAlpha":
      
      Rounded = lazy(() => import('@material-ui/icons/SortByAlphaRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SortByAlphaOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SortByAlphaSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SortByAlphaTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Sort":
      
      Rounded = lazy(() => import('@material-ui/icons/SortRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SortOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SortSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SortTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Spa":
      
      Rounded = lazy(() => import('@material-ui/icons/SpaRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SpaOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SpaSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SpaTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SpaceBar":
      
      Rounded = lazy(() => import('@material-ui/icons/SpaceBarRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SpaceBarOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SpaceBarSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SpaceBarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SpeakerGroup":
      
      Rounded = lazy(() => import('@material-ui/icons/SpeakerGroupRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SpeakerGroupOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SpeakerGroupSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SpeakerGroupTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SpeakerNotesOff":
      
      Rounded = lazy(() => import('@material-ui/icons/SpeakerNotesOffRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SpeakerNotesOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SpeakerNotesOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SpeakerNotesOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SpeakerNotes":
      
      Rounded = lazy(() => import('@material-ui/icons/SpeakerNotesRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SpeakerNotesOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SpeakerNotesSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SpeakerNotesTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Speaker":
      
      Rounded = lazy(() => import('@material-ui/icons/SpeakerRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SpeakerOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SpeakerSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SpeakerTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SpeakerPhone":
      
      Rounded = lazy(() => import('@material-ui/icons/SpeakerPhoneRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SpeakerPhoneOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SpeakerPhoneSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SpeakerPhoneTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Spellcheck":
      
      Rounded = lazy(() => import('@material-ui/icons/SpellcheckRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SpellcheckOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SpellcheckSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SpellcheckTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "StarBorder":
      
      Rounded = lazy(() => import('@material-ui/icons/StarBorderRounded')),
      Outlined = lazy(() => import('@material-ui/icons/StarBorderOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StarBorderSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/StarBorderTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "StarHalf":
      
      Rounded = lazy(() => import('@material-ui/icons/StarHalfRounded')),
      Outlined = lazy(() => import('@material-ui/icons/StarHalfOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StarHalfSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/StarHalfTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Star":
      
      Rounded = lazy(() => import('@material-ui/icons/StarRounded')),
      Outlined = lazy(() => import('@material-ui/icons/StarOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StarSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/StarTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "StarRate":
      
      Rounded = lazy(() => import('@material-ui/icons/StarRateRounded')),
      Outlined = lazy(() => import('@material-ui/icons/StarRateOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StarRateSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/StarRateTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Stars":
      
      Rounded = lazy(() => import('@material-ui/icons/StarsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/StarsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StarsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/StarsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "StayCurrentLandscape":
      
      Rounded =
        lazy(() => import('@material-ui/icons/StayCurrentLandscapeRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/StayCurrentLandscapeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StayCurrentLandscapeSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/StayCurrentLandscapeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "StayCurrentPortrait":
      
      Rounded =
        lazy(() => import('@material-ui/icons/StayCurrentPortraitRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/StayCurrentPortraitOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StayCurrentPortraitSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/StayCurrentPortraitTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "StayPrimaryLandscape":
      
      Rounded =
        lazy(() => import('@material-ui/icons/StayPrimaryLandscapeRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/StayPrimaryLandscapeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StayPrimaryLandscapeSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/StayPrimaryLandscapeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "StayPrimaryPortrait":
      
      Rounded =
        lazy(() => import('@material-ui/icons/StayPrimaryPortraitRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/StayPrimaryPortraitOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StayPrimaryPortraitSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/StayPrimaryPortraitTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Stop":
      
      Rounded = lazy(() => import('@material-ui/icons/StopRounded')),
      Outlined = lazy(() => import('@material-ui/icons/StopOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StopSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/StopTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "StopScreenShare":
      
      Rounded = lazy(() => import('@material-ui/icons/StopScreenShareRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/StopScreenShareOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StopScreenShareSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/StopScreenShareTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Storage":
      
      Rounded = lazy(() => import('@material-ui/icons/StorageRounded')),
      Outlined = lazy(() => import('@material-ui/icons/StorageOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StorageSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/StorageTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "StoreMallDirectory":
      
      Rounded =
        lazy(() => import('@material-ui/icons/StoreMallDirectoryRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/StoreMallDirectoryOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StoreMallDirectorySharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/StoreMallDirectoryTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Store":
      
      Rounded = lazy(() => import('@material-ui/icons/StoreRounded')),
      Outlined = lazy(() => import('@material-ui/icons/StoreOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StoreSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/StoreTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Straighten":
      
      Rounded = lazy(() => import('@material-ui/icons/StraightenRounded')),
      Outlined = lazy(() => import('@material-ui/icons/StraightenOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StraightenSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/StraightenTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Streetview":
      
      Rounded = lazy(() => import('@material-ui/icons/StreetviewRounded')),
      Outlined = lazy(() => import('@material-ui/icons/StreetviewOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StreetviewSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/StreetviewTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "StrikethroughS":
      
      Rounded = lazy(() => import('@material-ui/icons/StrikethroughSRounded')),
      Outlined = lazy(() => import('@material-ui/icons/StrikethroughSOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StrikethroughSSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/StrikethroughSTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Style":
      
      Rounded = lazy(() => import('@material-ui/icons/StyleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/StyleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/StyleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/StyleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SubdirectoryArrowLeft":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SubdirectoryArrowLeftRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SubdirectoryArrowLeftOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/SubdirectoryArrowLeftSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SubdirectoryArrowLeftTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SubdirectoryArrowRight":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SubdirectoryArrowRightRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SubdirectoryArrowRightOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/SubdirectoryArrowRightSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SubdirectoryArrowRightTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Subject":
      
      Rounded = lazy(() => import('@material-ui/icons/SubjectRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SubjectOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SubjectSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SubjectTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Subscriptions":
      
      Rounded = lazy(() => import('@material-ui/icons/SubscriptionsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SubscriptionsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SubscriptionsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SubscriptionsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Subtitles":
      
      Rounded = lazy(() => import('@material-ui/icons/SubtitlesRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SubtitlesOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SubtitlesSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SubtitlesTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Subway":
      
      Rounded = lazy(() => import('@material-ui/icons/SubwayRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SubwayOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SubwaySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SubwayTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SupervisedUserCircle":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SupervisedUserCircleRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SupervisedUserCircleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SupervisedUserCircleSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SupervisedUserCircleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SupervisorAccount":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SupervisorAccountRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SupervisorAccountOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SupervisorAccountSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SupervisorAccountTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SurroundSound":
      
      Rounded = lazy(() => import('@material-ui/icons/SurroundSoundRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SurroundSoundOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SurroundSoundSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SurroundSoundTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SwapCalls":
      
      Rounded = lazy(() => import('@material-ui/icons/SwapCallsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SwapCallsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SwapCallsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SwapCallsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SwapHoriz":
      
      Rounded = lazy(() => import('@material-ui/icons/SwapHorizRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SwapHorizOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SwapHorizSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SwapHorizTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SwapHorizontalCircle":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SwapHorizontalCircleRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SwapHorizontalCircleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SwapHorizontalCircleSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SwapHorizontalCircleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SwapVert":
      
      Rounded = lazy(() => import('@material-ui/icons/SwapVertRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SwapVertOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SwapVertSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SwapVertTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SwapVerticalCircle":
      
      Rounded =
        lazy(() => import('@material-ui/icons/SwapVerticalCircleRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/SwapVerticalCircleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SwapVerticalCircleSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/SwapVerticalCircleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SwitchCamera":
      
      Rounded = lazy(() => import('@material-ui/icons/SwitchCameraRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SwitchCameraOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SwitchCameraSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SwitchCameraTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SwitchVideo":
      
      Rounded = lazy(() => import('@material-ui/icons/SwitchVideoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SwitchVideoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SwitchVideoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SwitchVideoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SyncDisabled":
      
      Rounded = lazy(() => import('@material-ui/icons/SyncDisabledRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SyncDisabledOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SyncDisabledSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SyncDisabledTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Sync":
      
      Rounded = lazy(() => import('@material-ui/icons/SyncRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SyncOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SyncSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SyncTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SyncProblem":
      
      Rounded = lazy(() => import('@material-ui/icons/SyncProblemRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SyncProblemOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SyncProblemSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SyncProblemTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "SystemUpdate":
      
      Rounded = lazy(() => import('@material-ui/icons/SystemUpdateRounded')),
      Outlined = lazy(() => import('@material-ui/icons/SystemUpdateOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/SystemUpdateSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/SystemUpdateTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Tab":
      
      Rounded = lazy(() => import('@material-ui/icons/TabRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TabOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TabSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TabTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TabUnselected":
      
      Rounded = lazy(() => import('@material-ui/icons/TabUnselectedRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TabUnselectedOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TabUnselectedSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TabUnselectedTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TableChart":
      
      Rounded = lazy(() => import('@material-ui/icons/TableChartRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TableChartOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TableChartSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TableChartTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TabletAndroid":
      
      Rounded = lazy(() => import('@material-ui/icons/TabletAndroidRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TabletAndroidOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TabletAndroidSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TabletAndroidTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TabletMac":
      
      Rounded = lazy(() => import('@material-ui/icons/TabletMacRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TabletMacOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TabletMacSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TabletMacTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Tablet":
      
      Rounded = lazy(() => import('@material-ui/icons/TabletRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TabletOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TabletSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TabletTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TagFaces":
      
      Rounded = lazy(() => import('@material-ui/icons/TagFacesRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TagFacesOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TagFacesSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TagFacesTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TapAndPlay":
      
      Rounded = lazy(() => import('@material-ui/icons/TapAndPlayRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TapAndPlayOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TapAndPlaySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TapAndPlayTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Terrain":
      
      Rounded = lazy(() => import('@material-ui/icons/TerrainRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TerrainOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TerrainSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TerrainTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TextFields":
      
      Rounded = lazy(() => import('@material-ui/icons/TextFieldsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TextFieldsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TextFieldsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TextFieldsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TextFormat":
      
      Rounded = lazy(() => import('@material-ui/icons/TextFormatRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TextFormatOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TextFormatSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TextFormatTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TextRotateUp":
      
      Rounded = lazy(() => import('@material-ui/icons/TextRotateUpRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TextRotateUpOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TextRotateUpSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TextRotateUpTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TextRotateVertical":
      
      Rounded =
        lazy(() => import('@material-ui/icons/TextRotateVerticalRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/TextRotateVerticalOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TextRotateVerticalSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/TextRotateVerticalTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TextRotationDown":
      
      Rounded = lazy(() => import('@material-ui/icons/TextRotationDownRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/TextRotationDownOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TextRotationDownSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TextRotationDownTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TextRotationNone":
      
      Rounded = lazy(() => import('@material-ui/icons/TextRotationNoneRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/TextRotationNoneOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TextRotationNoneSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TextRotationNoneTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Textsms":
      
      Rounded = lazy(() => import('@material-ui/icons/TextsmsRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TextsmsOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TextsmsSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TextsmsTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Texture":
      
      Rounded = lazy(() => import('@material-ui/icons/TextureRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TextureOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TextureSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TextureTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Theaters":
      
      Rounded = lazy(() => import('@material-ui/icons/TheatersRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TheatersOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TheatersSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TheatersTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ThreeDRotation":
      
      Rounded = lazy(() => import('@material-ui/icons/ThreeDRotationRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ThreeDRotationOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ThreeDRotationSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ThreeDRotationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ThreeSixty":
      
      Rounded = lazy(() => import('@material-ui/icons/ThreeSixtyRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ThreeSixtyOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ThreeSixtySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ThreeSixtyTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ThumbDownAlt":
      
      Rounded = lazy(() => import('@material-ui/icons/ThumbDownAltRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ThumbDownAltOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ThumbDownAltSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ThumbDownAltTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ThumbDown":
      
      Rounded = lazy(() => import('@material-ui/icons/ThumbDownRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ThumbDownOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ThumbDownSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ThumbDownTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ThumbUpAlt":
      
      Rounded = lazy(() => import('@material-ui/icons/ThumbUpAltRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ThumbUpAltOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ThumbUpAltSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ThumbUpAltTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ThumbUp":
      
      Rounded = lazy(() => import('@material-ui/icons/ThumbUpRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ThumbUpOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ThumbUpSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ThumbUpTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ThumbsUpDown":
      
      Rounded = lazy(() => import('@material-ui/icons/ThumbsUpDownRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ThumbsUpDownOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ThumbsUpDownSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ThumbsUpDownTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TimeToLeave":
      
      Rounded = lazy(() => import('@material-ui/icons/TimeToLeaveRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TimeToLeaveOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TimeToLeaveSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TimeToLeaveTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Timelapse":
      
      Rounded = lazy(() => import('@material-ui/icons/TimelapseRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TimelapseOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TimelapseSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TimelapseTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Timeline":
      
      Rounded = lazy(() => import('@material-ui/icons/TimelineRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TimelineOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TimelineSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TimelineTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Timer10":
      
      Rounded = lazy(() => import('@material-ui/icons/Timer10Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Timer10Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Timer10Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Timer10TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Timer3":
      
      Rounded = lazy(() => import('@material-ui/icons/Timer3Rounded')),
      Outlined = lazy(() => import('@material-ui/icons/Timer3Outlined')),
      Sharp = lazy(() => import('@material-ui/icons/Timer3Sharp')),
      TwoTone = lazy(() => import('@material-ui/icons/Timer3TwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TimerOff":
      
      Rounded = lazy(() => import('@material-ui/icons/TimerOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TimerOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TimerOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TimerOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Timer":
      
      Rounded = lazy(() => import('@material-ui/icons/TimerRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TimerOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TimerSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TimerTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Title":
      
      Rounded = lazy(() => import('@material-ui/icons/TitleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TitleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TitleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TitleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Toc":
      
      Rounded = lazy(() => import('@material-ui/icons/TocRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TocOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TocSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TocTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Today":
      
      Rounded = lazy(() => import('@material-ui/icons/TodayRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TodayOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TodaySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TodayTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ToggleOff":
      
      Rounded = lazy(() => import('@material-ui/icons/ToggleOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ToggleOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ToggleOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ToggleOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ToggleOn":
      
      Rounded = lazy(() => import('@material-ui/icons/ToggleOnRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ToggleOnOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ToggleOnSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ToggleOnTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Toll":
      Rounded = lazy(() => import('@material-ui/icons/TollRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TollOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TollSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TollTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Tonality":
      
      Rounded = lazy(() => import('@material-ui/icons/TonalityRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TonalityOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TonalitySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TonalityTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TouchApp":
      
      Rounded = lazy(() => import('@material-ui/icons/TouchAppRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TouchAppOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TouchAppSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TouchAppTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Toys":
      
      Rounded = lazy(() => import('@material-ui/icons/ToysRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ToysOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ToysSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ToysTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TrackChanges":
      
      Rounded = lazy(() => import('@material-ui/icons/TrackChangesRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TrackChangesOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TrackChangesSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TrackChangesTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Traffic":
      
      Rounded = lazy(() => import('@material-ui/icons/TrafficRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TrafficOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TrafficSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TrafficTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Train":
      
      Rounded = lazy(() => import('@material-ui/icons/TrainRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TrainOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TrainSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TrainTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Tram":
      
      Rounded = lazy(() => import('@material-ui/icons/TramRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TramOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TramSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TramTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TransferWithinAStation":
      
      Rounded =
        lazy(() => import('@material-ui/icons/TransferWithinAStationRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/TransferWithinAStationOutlined')),
      Sharp =
        lazy(() => import('@material-ui/icons/TransferWithinAStationSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/TransferWithinAStationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Transform":
      
      Rounded = lazy(() => import('@material-ui/icons/TransformRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TransformOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TransformSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TransformTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TransitEnterexit":
      
      Rounded = lazy(() => import('@material-ui/icons/TransitEnterexitRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/TransitEnterexitOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TransitEnterexitSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TransitEnterexitTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Translate":
      
      Rounded = lazy(() => import('@material-ui/icons/TranslateRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TranslateOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TranslateSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TranslateTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TrendingDown":
      
      Rounded = lazy(() => import('@material-ui/icons/TrendingDownRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TrendingDownOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TrendingDownSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TrendingDownTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TrendingFlat":
      
      Rounded = lazy(() => import('@material-ui/icons/TrendingFlatRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TrendingFlatOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TrendingFlatSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TrendingFlatTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TrendingUp":
      
      Rounded = lazy(() => import('@material-ui/icons/TrendingUpRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TrendingUpOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TrendingUpSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TrendingUpTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TripOrigin":
      
      Rounded = lazy(() => import('@material-ui/icons/TripOriginRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TripOriginOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TripOriginSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TripOriginTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Tune":
      
      Rounded = lazy(() => import('@material-ui/icons/TuneRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TuneOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TuneSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TuneTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TurnedInNot":
      
      Rounded = lazy(() => import('@material-ui/icons/TurnedInNotRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TurnedInNotOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TurnedInNotSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TurnedInNotTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TurnedIn":
      
      Rounded = lazy(() => import('@material-ui/icons/TurnedInRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TurnedInOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TurnedInSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TurnedInTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "TvOff":
      
      Rounded = lazy(() => import('@material-ui/icons/TvOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TvOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TvOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TvOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Tv":
      
      Rounded = lazy(() => import('@material-ui/icons/TvRounded')),
      Outlined = lazy(() => import('@material-ui/icons/TvOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/TvSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/TvTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Unarchive":
      
      Rounded = lazy(() => import('@material-ui/icons/UnarchiveRounded')),
      Outlined = lazy(() => import('@material-ui/icons/UnarchiveOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/UnarchiveSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/UnarchiveTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Undo":
      
      Rounded = lazy(() => import('@material-ui/icons/UndoRounded')),
      Outlined = lazy(() => import('@material-ui/icons/UndoOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/UndoSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/UndoTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "UnfoldLess":
      
      Rounded = lazy(() => import('@material-ui/icons/UnfoldLessRounded')),
      Outlined = lazy(() => import('@material-ui/icons/UnfoldLessOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/UnfoldLessSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/UnfoldLessTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "UnfoldMore":
      
      Rounded = lazy(() => import('@material-ui/icons/UnfoldMoreRounded')),
      Outlined = lazy(() => import('@material-ui/icons/UnfoldMoreOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/UnfoldMoreSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/UnfoldMoreTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Unsubscribe":
      
      Rounded = lazy(() => import('@material-ui/icons/UnsubscribeRounded')),
      Outlined = lazy(() => import('@material-ui/icons/UnsubscribeOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/UnsubscribeSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/UnsubscribeTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Update":
      
      Rounded = lazy(() => import('@material-ui/icons/UpdateRounded')),
      Outlined = lazy(() => import('@material-ui/icons/UpdateOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/UpdateSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/UpdateTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Usb":
      
      Rounded = lazy(() => import('@material-ui/icons/UsbRounded')),
      Outlined = lazy(() => import('@material-ui/icons/UsbOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/UsbSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/UsbTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "VerifiedUser":
      
      Rounded = lazy(() => import('@material-ui/icons/VerifiedUserRounded')),
      Outlined = lazy(() => import('@material-ui/icons/VerifiedUserOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VerifiedUserSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/VerifiedUserTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "VerticalAlignBottom":
      
      Rounded =
        lazy(() => import('@material-ui/icons/VerticalAlignBottomRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/VerticalAlignBottomOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VerticalAlignBottomSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/VerticalAlignBottomTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "VerticalAlignCenter":
      
      Rounded =
        lazy(() => import('@material-ui/icons/VerticalAlignCenterRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/VerticalAlignCenterOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VerticalAlignCenterSharp')),
      TwoTone =
        lazy(() => import('@material-ui/icons/VerticalAlignCenterTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "VerticalAlignTop":
      
      Rounded = lazy(() => import('@material-ui/icons/VerticalAlignTopRounded')),
      Outlined =
        lazy(() => import('@material-ui/icons/VerticalAlignTopOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VerticalAlignTopSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/VerticalAlignTopTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "VerticalSplit":
      
      Rounded = lazy(() => import('@material-ui/icons/VerticalSplitRounded')),
      Outlined = lazy(() => import('@material-ui/icons/VerticalSplitOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VerticalSplitSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/VerticalSplitTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Vibration":
      
      Rounded = lazy(() => import('@material-ui/icons/VibrationRounded')),
      Outlined = lazy(() => import('@material-ui/icons/VibrationOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VibrationSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/VibrationTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "VideoCall":
      
      Rounded = lazy(() => import('@material-ui/icons/VideoCallRounded')),
      Outlined = lazy(() => import('@material-ui/icons/VideoCallOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VideoCallSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/VideoCallTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "VideoLabel":
      
      Rounded = lazy(() => import('@material-ui/icons/VideoLabelRounded')),
      Outlined = lazy(() => import('@material-ui/icons/VideoLabelOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VideoLabelSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/VideoLabelTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "VideoLibrary":
      
      Rounded = lazy(() => import('@material-ui/icons/VideoLibraryRounded')),
      Outlined = lazy(() => import('@material-ui/icons/VideoLibraryOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VideoLibrarySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/VideoLibraryTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "VideocamOff":
      
      Rounded = lazy(() => import('@material-ui/icons/VideocamOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/VideocamOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VideocamOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/VideocamOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Videocam":
      
      Rounded = lazy(() => import('@material-ui/icons/VideocamRounded')),
      Outlined = lazy(() => import('@material-ui/icons/VideocamOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VideocamSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/VideocamTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "VideogameAsset":
      
      Rounded = lazy(() => import('@material-ui/icons/VideogameAssetRounded')),
      Outlined = lazy(() => import('@material-ui/icons/VideogameAssetOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VideogameAssetSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/VideogameAssetTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ViewAgenda":
      
      Rounded = lazy(() => import('@material-ui/icons/ViewAgendaRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ViewAgendaOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ViewAgendaSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ViewAgendaTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ViewArray":
      
      Rounded = lazy(() => import('@material-ui/icons/ViewArrayRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ViewArrayOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ViewArraySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ViewArrayTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ViewCarousel":
      
      Rounded = lazy(() => import('@material-ui/icons/ViewCarouselRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ViewCarouselOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ViewCarouselSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ViewCarouselTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ViewColumn":
      
      Rounded = lazy(() => import('@material-ui/icons/ViewColumnRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ViewColumnOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ViewColumnSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ViewColumnTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ViewComfy":
      
      Rounded = lazy(() => import('@material-ui/icons/ViewComfyRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ViewComfyOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ViewComfySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ViewComfyTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ViewCompact":
      
      Rounded = lazy(() => import('@material-ui/icons/ViewCompactRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ViewCompactOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ViewCompactSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ViewCompactTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ViewDay":
      
      Rounded = lazy(() => import('@material-ui/icons/ViewDayRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ViewDayOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ViewDaySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ViewDayTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ViewHeadline":
      
      Rounded = lazy(() => import('@material-ui/icons/ViewHeadlineRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ViewHeadlineOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ViewHeadlineSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ViewHeadlineTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ViewList":
      
      Rounded = lazy(() => import('@material-ui/icons/ViewListRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ViewListOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ViewListSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ViewListTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ViewModule":
      
      Rounded = lazy(() => import('@material-ui/icons/ViewModuleRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ViewModuleOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ViewModuleSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ViewModuleTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ViewQuilt":
      
      Rounded = lazy(() => import('@material-ui/icons/ViewQuiltRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ViewQuiltOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ViewQuiltSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ViewQuiltTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ViewStream":
      
      Rounded = lazy(() => import('@material-ui/icons/ViewStreamRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ViewStreamOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ViewStreamSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ViewStreamTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "ViewWeek":
      
      Rounded = lazy(() => import('@material-ui/icons/ViewWeekRounded')),
      Outlined = lazy(() => import('@material-ui/icons/ViewWeekOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/ViewWeekSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/ViewWeekTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Vignette":
      
      Rounded = lazy(() => import('@material-ui/icons/VignetteRounded')),
      Outlined = lazy(() => import('@material-ui/icons/VignetteOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VignetteSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/VignetteTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "VisibilityOff":
      
      Rounded = lazy(() => import('@material-ui/icons/VisibilityOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/VisibilityOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VisibilityOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/VisibilityOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Visibility":
      
      Rounded = lazy(() => import('@material-ui/icons/VisibilityRounded')),
      Outlined = lazy(() => import('@material-ui/icons/VisibilityOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VisibilitySharp')),
      TwoTone = lazy(() => import('@material-ui/icons/VisibilityTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "VoiceChat":
      
      Rounded = lazy(() => import('@material-ui/icons/VoiceChatRounded')),
      Outlined = lazy(() => import('@material-ui/icons/VoiceChatOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VoiceChatSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/VoiceChatTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "VoiceOverOff":
      
      Rounded = lazy(() => import('@material-ui/icons/VoiceOverOffRounded')),
      Outlined = lazy(() => import('@material-ui/icons/VoiceOverOffOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VoiceOverOffSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/VoiceOverOffTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "Voicemail":
      
      Rounded = lazy(() => import('@material-ui/icons/VoicemailRounded')),
      Outlined = lazy(() => import('@material-ui/icons/VoicemailOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VoicemailSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/VoicemailTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}
    case "VolumeDown":
      
      Rounded = lazy(() => import('@material-ui/icons/VolumeDownRounded')),
      Outlined = lazy(() => import('@material-ui/icons/VolumeDownOutlined')),
      Sharp = lazy(() => import('@material-ui/icons/VolumeDownSharp')),
      TwoTone = lazy(() => import('@material-ui/icons/VolumeDownTwoTone'))
    return {Rounded, Outlined, Sharp, TwoTone}

    case 'VolumeMute':
      (Rounded = lazy(() => import('@material-ui/icons/VolumeMuteRounded'))),
        (Outlined = lazy(() =>
          import('@material-ui/icons/VolumeMuteOutlined')
        )),
        (Sharp = lazy(() => import('@material-ui/icons/VolumeMuteSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/VolumeMuteTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'VolumeOff':
      (Rounded = lazy(() => import('@material-ui/icons/VolumeOffRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/VolumeOffOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/VolumeOffSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/VolumeOffTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'VolumeUp':
      (Rounded = lazy(() => import('@material-ui/icons/VolumeUpRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/VolumeUpOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/VolumeUpSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/VolumeUpTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'VpnKey':
      (Rounded = lazy(() => import('@material-ui/icons/VpnKeyRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/VpnKeyOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/VpnKeySharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/VpnKeyTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'VpnLock':
      (Rounded = lazy(() => import('@material-ui/icons/VpnLockRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/VpnLockOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/VpnLockSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/VpnLockTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'Wallpaper':
      (Rounded = lazy(() => import('@material-ui/icons/WallpaperRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WallpaperOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WallpaperSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WallpaperTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'Warning':
      (Rounded = lazy(() => import('@material-ui/icons/WarningRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WarningOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WarningSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WarningTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'WatchLater':
      (Rounded = lazy(() => import('@material-ui/icons/WatchLaterRounded'))),
        (Outlined = lazy(() =>
          import('@material-ui/icons/WatchLaterOutlined')
        )),
        (Sharp = lazy(() => import('@material-ui/icons/WatchLaterSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WatchLaterTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'Watch':
      (Rounded = lazy(() => import('@material-ui/icons/WatchRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WatchOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WatchSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WatchTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'Waves':
      (Rounded = lazy(() => import('@material-ui/icons/WavesRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WavesOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WavesSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WavesTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'WbAuto':
      (Rounded = lazy(() => import('@material-ui/icons/WbAutoRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WbAutoOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WbAutoSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WbAutoTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'WbCloudy':
      (Rounded = lazy(() => import('@material-ui/icons/WbCloudyRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WbCloudyOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WbCloudySharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WbCloudyTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'WbIncandescent':
      (Rounded = lazy(() =>
        import('@material-ui/icons/WbIncandescentRounded')
      )),
        (Outlined = lazy(() =>
          import('@material-ui/icons/WbIncandescentOutlined')
        )),
        (Sharp = lazy(() => import('@material-ui/icons/WbIncandescentSharp'))),
        (TwoTone = lazy(() =>
          import('@material-ui/icons/WbIncandescentTwoTone')
        ));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'WbIridescent':
      (Rounded = lazy(() => import('@material-ui/icons/WbIridescentRounded'))),
        (Outlined = lazy(() =>
          import('@material-ui/icons/WbIridescentOutlined')
        )),
        (Sharp = lazy(() => import('@material-ui/icons/WbIridescentSharp'))),
        (TwoTone = lazy(() =>
          import('@material-ui/icons/WbIridescentTwoTone')
        ));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'WbSunny':
      (Rounded = lazy(() => import('@material-ui/icons/WbSunnyRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WbSunnyOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WbSunnySharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WbSunnyTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'Wc':
      (Rounded = lazy(() => import('@material-ui/icons/WcRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WcOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WcSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WcTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'WebAsset':
      (Rounded = lazy(() => import('@material-ui/icons/WebAssetRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WebAssetOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WebAssetSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WebAssetTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'Web':
      (Rounded = lazy(() => import('@material-ui/icons/WebRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WebOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WebSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WebTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'Weekend':
      (Rounded = lazy(() => import('@material-ui/icons/WeekendRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WeekendOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WeekendSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WeekendTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'Whatshot':
      (Rounded = lazy(() => import('@material-ui/icons/WhatshotRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WhatshotOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WhatshotSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WhatshotTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'WhereToVote':
      (Rounded = lazy(() => import('@material-ui/icons/WhereToVoteRounded'))),
        (Outlined = lazy(() =>
          import('@material-ui/icons/WhereToVoteOutlined')
        )),
        (Sharp = lazy(() => import('@material-ui/icons/WhereToVoteSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WhereToVoteTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'Widgets':
      (Rounded = lazy(() => import('@material-ui/icons/WidgetsRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WidgetsOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WidgetsSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WidgetsTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'WifiLock':
      (Rounded = lazy(() => import('@material-ui/icons/WifiLockRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WifiLockOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WifiLockSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WifiLockTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'WifiOff':
      (Rounded = lazy(() => import('@material-ui/icons/WifiOffRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WifiOffOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WifiOffSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WifiOffTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'Wifi':
      (Rounded = lazy(() => import('@material-ui/icons/WifiRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WifiOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WifiSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WifiTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'WifiTethering':
      (Rounded = lazy(() => import('@material-ui/icons/WifiTetheringRounded'))),
        (Outlined = lazy(() =>
          import('@material-ui/icons/WifiTetheringOutlined')
        )),
        (Sharp = lazy(() => import('@material-ui/icons/WifiTetheringSharp'))),
        (TwoTone = lazy(() =>
          import('@material-ui/icons/WifiTetheringTwoTone')
        ));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'WorkOff':
      (Rounded = lazy(() => import('@material-ui/icons/WorkOffRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WorkOffOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WorkOffSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WorkOffTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'WorkOutline':
      (Rounded = lazy(() => import('@material-ui/icons/WorkOutlineRounded'))),
        (Outlined = lazy(() =>
          import('@material-ui/icons/WorkOutlineOutlined')
        )),
        (Sharp = lazy(() => import('@material-ui/icons/WorkOutlineSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WorkOutlineTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'Work':
      (Rounded = lazy(() => import('@material-ui/icons/WorkRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WorkOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WorkSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WorkTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'WrapText':
      (Rounded = lazy(() => import('@material-ui/icons/WrapTextRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/WrapTextOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/WrapTextSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/WrapTextTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'YoutubeSearchedFor':
      (Rounded = lazy(() =>
        import('@material-ui/icons/YoutubeSearchedForRounded')
      )),
        (Outlined = lazy(() =>
          import('@material-ui/icons/YoutubeSearchedForOutlined')
        )),
        (Sharp = lazy(() =>
          import('@material-ui/icons/YoutubeSearchedForSharp')
        )),
        (TwoTone = lazy(() =>
          import('@material-ui/icons/YoutubeSearchedForTwoTone')
        ));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'ZoomIn':
      (Rounded = lazy(() => import('@material-ui/icons/ZoomInRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/ZoomInOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/ZoomInSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/ZoomInTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'ZoomOutMap':
      (Rounded = lazy(() => import('@material-ui/icons/ZoomOutMapRounded'))),
        (Outlined = lazy(() =>
          import('@material-ui/icons/ZoomOutMapOutlined')
        )),
        (Sharp = lazy(() => import('@material-ui/icons/ZoomOutMapSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/ZoomOutMapTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };
    case 'ZoomOut':
      (Rounded = lazy(() => import('@material-ui/icons/ZoomOutRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/ZoomOutOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/ZoomOutSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/ZoomOutTwoTone')));
      return { Rounded, Outlined, Sharp, TwoTone };

    default:
      (Rounded = lazy(() => import('@material-ui/icons/ZoomOutRounded'))),
        (Outlined = lazy(() => import('@material-ui/icons/ZoomOutOutlined'))),
        (Sharp = lazy(() => import('@material-ui/icons/ZoomOutSharp'))),
        (TwoTone = lazy(() => import('@material-ui/icons/ZoomOutTwoTone')));

      return { Rounded, Outlined, Sharp, TwoTone };
  }
};

export default iconList;
