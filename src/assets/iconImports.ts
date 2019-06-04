import {lazy} from 'react'
const iconList: Function = (iconName: string) => {
  switch(iconName) {
    case "AcUnit":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AcUnitRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AcUnitOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AcUnitSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AcUnitTwoTone'))
    }
    case "AccessAlarm":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AccessAlarmRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AccessAlarmOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AccessAlarmSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AccessAlarmTwoTone'))
    }
    case "AccessAlarms":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AccessAlarmsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AccessAlarmsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AccessAlarmsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AccessAlarmsTwoTone'))
    }
    case "AccessTime":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AccessTimeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AccessTimeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AccessTimeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AccessTimeTwoTone'))
    }
    case "AccessibilityNew":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AccessibilityNewRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AccessibilityNewOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AccessibilityNewSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AccessibilityNewTwoTone'))
    }
    case "Accessibility":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AccessibilityRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AccessibilityOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AccessibilitySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AccessibilityTwoTone'))
    }
    case "AccessibleForward":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/AccessibleForwardRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AccessibleForwardOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AccessibleForwardSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AccessibleForwardTwoTone'))
    }
    case "Accessible":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AccessibleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AccessibleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AccessibleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AccessibleTwoTone'))
    }
    case "AccountBalance":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AccountBalanceRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AccountBalanceOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AccountBalanceSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AccountBalanceTwoTone'))
    }
    case "AccountBalanceWallet":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/AccountBalanceWalletRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AccountBalanceWalletOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AccountBalanceWalletSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/AccountBalanceWalletTwoTone'))
    }
    case "AccountBox":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AccountBoxRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AccountBoxOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AccountBoxSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AccountBoxTwoTone'))
    }
    case "AccountCircle":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AccountCircleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AccountCircleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AccountCircleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AccountCircleTwoTone'))
    }
    case "Adb":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AdbRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AdbOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AdbSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AdbTwoTone'))
    }
    case "AddAPhoto":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AddAPhotoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AddAPhotoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AddAPhotoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AddAPhotoTwoTone'))
    }
    case "AddAlarm":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AddAlarmRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AddAlarmOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AddAlarmSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AddAlarmTwoTone'))
    }
    case "AddAlert":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AddAlertRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AddAlertOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AddAlertSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AddAlertTwoTone'))
    }
    case "AddBox":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AddBoxRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AddBoxOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AddBoxSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AddBoxTwoTone'))
    }
    case "AddCircleOutline":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AddCircleOutlineRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AddCircleOutlineOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AddCircleOutlineSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AddCircleOutlineTwoTone'))
    }
    case "AddCircle":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AddCircleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AddCircleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AddCircleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AddCircleTwoTone'))
    }
    case "AddComment":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AddCommentRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AddCommentOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AddCommentSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AddCommentTwoTone'))
    }
    case "AddLocation":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AddLocationRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AddLocationOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AddLocationSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AddLocationTwoTone'))
    }
    case "Add":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AddRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AddOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AddSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AddTwoTone'))
    }
    case "AddPhotoAlternate":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/AddPhotoAlternateRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AddPhotoAlternateOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AddPhotoAlternateSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AddPhotoAlternateTwoTone'))
    }
    case "AddShoppingCart":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AddShoppingCartRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AddShoppingCartOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AddShoppingCartSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AddShoppingCartTwoTone'))
    }
    case "AddToHomeScreen":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AddToHomeScreenRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AddToHomeScreenOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AddToHomeScreenSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AddToHomeScreenTwoTone'))
    }
    case "AddToPhotos":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AddToPhotosRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AddToPhotosOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AddToPhotosSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AddToPhotosTwoTone'))
    }
    case "AddToQueue":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AddToQueueRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AddToQueueOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AddToQueueSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AddToQueueTwoTone'))
    }
    case "Adjust":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AdjustRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AdjustOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AdjustSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AdjustTwoTone'))
    }
    case "AirlineSeatFlatAngled":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/AirlineSeatFlatAngledRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AirlineSeatFlatAngledOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/AirlineSeatFlatAngledSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/AirlineSeatFlatAngledTwoTone'))
    }
    case "AirlineSeatFlat":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AirlineSeatFlatRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AirlineSeatFlatOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AirlineSeatFlatSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AirlineSeatFlatTwoTone'))
    }
    case "AirlineSeatIndividualSuite":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/AirlineSeatIndividualSuiteRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AirlineSeatIndividualSuiteOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/AirlineSeatIndividualSuiteSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/AirlineSeatIndividualSuiteTwoTone'))
    }
    case "AirlineSeatLegroomExtra":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomExtraRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomExtraOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomExtraSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomExtraTwoTone'))
    }
    case "AirlineSeatLegroomNormal":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomNormalRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomNormalOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomNormalSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomNormalTwoTone'))
    }
    case "AirlineSeatLegroomReduced":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomReducedRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomReducedOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomReducedSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/AirlineSeatLegroomReducedTwoTone'))
    }
    case "AirlineSeatReclineExtra":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/AirlineSeatReclineExtraRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AirlineSeatReclineExtraOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/AirlineSeatReclineExtraSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/AirlineSeatReclineExtraTwoTone'))
    }
    case "AirlineSeatReclineNormal":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/AirlineSeatReclineNormalRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AirlineSeatReclineNormalOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/AirlineSeatReclineNormalSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/AirlineSeatReclineNormalTwoTone'))
    }
    case "AirplanemodeActive":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/AirplanemodeActiveRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AirplanemodeActiveOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AirplanemodeActiveSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/AirplanemodeActiveTwoTone'))
    }
    case "AirplanemodeInactive":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/AirplanemodeInactiveRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AirplanemodeInactiveOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AirplanemodeInactiveSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/AirplanemodeInactiveTwoTone'))
    }
    case "Airplay":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AirplayRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AirplayOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AirplaySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AirplayTwoTone'))
    }
    case "AirportShuttle":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AirportShuttleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AirportShuttleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AirportShuttleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AirportShuttleTwoTone'))
    }
    case "AlarmAdd":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AlarmAddRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AlarmAddOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AlarmAddSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AlarmAddTwoTone'))
    }
    case "AlarmOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AlarmOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AlarmOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AlarmOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AlarmOffTwoTone'))
    }
    case "AlarmOn":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AlarmOnRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AlarmOnOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AlarmOnSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AlarmOnTwoTone'))
    }
    case "Alarm":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AlarmRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AlarmOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AlarmSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AlarmTwoTone'))
    }
    case "Album":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AlbumRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AlbumOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AlbumSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AlbumTwoTone'))
    }
    case "AllInbox":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AllInboxRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AllInboxOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AllInboxSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AllInboxTwoTone'))
    }
    case "AllInclusive":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AllInclusiveRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AllInclusiveOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AllInclusiveSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AllInclusiveTwoTone'))
    }
    case "AllOut":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AllOutRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AllOutOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AllOutSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AllOutTwoTone'))
    }
    case "AlternateEmail":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AlternateEmailRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AlternateEmailOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AlternateEmailSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AlternateEmailTwoTone'))
    }
    case "Android":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AndroidRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AndroidOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AndroidSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AndroidTwoTone'))
    }
    case "Announcement":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AnnouncementRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AnnouncementOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AnnouncementSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AnnouncementTwoTone'))
    }
    case "Apps":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AppsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AppsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AppsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AppsTwoTone'))
    }
    case "Archive":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ArchiveRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ArchiveOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ArchiveSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ArchiveTwoTone'))
    }
    case "ArrowBackIos":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ArrowBackIosRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ArrowBackIosOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ArrowBackIosSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ArrowBackIosTwoTone'))
    }
    case "ArrowBack":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ArrowBackRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ArrowBackOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ArrowBackSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ArrowBackTwoTone'))
    }
    case "ArrowDownward":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ArrowDownwardRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ArrowDownwardOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ArrowDownwardSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ArrowDownwardTwoTone'))
    }
    case "ArrowDropDownCircle":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/ArrowDropDownCircleRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/ArrowDropDownCircleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ArrowDropDownCircleSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/ArrowDropDownCircleTwoTone'))
    }
    case "ArrowDropDown":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ArrowDropDownRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ArrowDropDownOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ArrowDropDownSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ArrowDropDownTwoTone'))
    }
    case "ArrowDropUp":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ArrowDropUpRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ArrowDropUpOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ArrowDropUpSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ArrowDropUpTwoTone'))
    }
    case "ArrowForwardIos":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ArrowForwardIosRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/ArrowForwardIosOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ArrowForwardIosSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ArrowForwardIosTwoTone'))
    }
    case "ArrowForward":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ArrowForwardRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ArrowForwardOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ArrowForwardSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ArrowForwardTwoTone'))
    }
    case "ArrowLeft":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ArrowLeftRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ArrowLeftOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ArrowLeftSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ArrowLeftTwoTone'))
    }
    case "ArrowRightAlt":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ArrowRightAltRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ArrowRightAltOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ArrowRightAltSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ArrowRightAltTwoTone'))
    }
    case "ArrowRight":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ArrowRightRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ArrowRightOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ArrowRightSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ArrowRightTwoTone'))
    }
    case "ArrowUpward":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ArrowUpwardRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ArrowUpwardOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ArrowUpwardSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ArrowUpwardTwoTone'))
    }
    case "ArtTrack":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ArtTrackRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ArtTrackOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ArtTrackSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ArtTrackTwoTone'))
    }
    case "AspectRatio":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AspectRatioRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AspectRatioOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AspectRatioSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AspectRatioTwoTone'))
    }
    case "Assessment":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AssessmentRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AssessmentOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AssessmentSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AssessmentTwoTone'))
    }
    case "AssignmentInd":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AssignmentIndRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AssignmentIndOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AssignmentIndSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AssignmentIndTwoTone'))
    }
    case "AssignmentLate":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AssignmentLateRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AssignmentLateOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AssignmentLateSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AssignmentLateTwoTone'))
    }
    case "Assignment":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AssignmentRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AssignmentOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AssignmentSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AssignmentTwoTone'))
    }
    case "AssignmentReturn":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AssignmentReturnRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AssignmentReturnOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AssignmentReturnSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AssignmentReturnTwoTone'))
    }
    case "AssignmentReturned":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/AssignmentReturnedRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AssignmentReturnedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AssignmentReturnedSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/AssignmentReturnedTwoTone'))
    }
    case "AssignmentTurnedIn":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/AssignmentTurnedInRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/AssignmentTurnedInOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AssignmentTurnedInSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/AssignmentTurnedInTwoTone'))
    }
    case "Assistant":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AssistantRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AssistantOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AssistantSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AssistantTwoTone'))
    }
    case "AssistantPhoto":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AssistantPhotoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AssistantPhotoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AssistantPhotoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AssistantPhotoTwoTone'))
    }
    case "Atm":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AtmRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AtmOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AtmSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AtmTwoTone'))
    }
    case "AttachFile":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AttachFileRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AttachFileOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AttachFileSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AttachFileTwoTone'))
    }
    case "AttachMoney":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AttachMoneyRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AttachMoneyOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AttachMoneySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AttachMoneyTwoTone'))
    }
    case "Attachment":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AttachmentRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AttachmentOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AttachmentSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AttachmentTwoTone'))
    }
    case "Audiotrack":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AudiotrackRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AudiotrackOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AudiotrackSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AudiotrackTwoTone'))
    }
    case "Autorenew":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AutorenewRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AutorenewOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AutorenewSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AutorenewTwoTone'))
    }
    case "AvTimer":
      return {
      Rounded: lazy(() => import('@material-ui/icons/AvTimerRounded')),
      Outlined: lazy(() => import('@material-ui/icons/AvTimerOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/AvTimerSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/AvTimerTwoTone'))
    }
    case "Backspace":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BackspaceRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BackspaceOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BackspaceSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BackspaceTwoTone'))
    }
    case "Backup":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BackupRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BackupOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BackupSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BackupTwoTone'))
    }
    case "Ballot":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BallotRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BallotOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BallotSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BallotTwoTone'))
    }
    case "BarChart":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BarChartRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BarChartOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BarChartSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BarChartTwoTone'))
    }
    case "Battery20":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Battery20Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Battery20Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Battery20Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Battery20TwoTone'))
    }
    case "Battery30":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Battery30Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Battery30Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Battery30Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Battery30TwoTone'))
    }
    case "Battery50":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Battery50Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Battery50Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Battery50Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Battery50TwoTone'))
    }
    case "Battery60":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Battery60Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Battery60Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Battery60Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Battery60TwoTone'))
    }
    case "Battery80":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Battery80Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Battery80Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Battery80Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Battery80TwoTone'))
    }
    case "Battery90":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Battery90Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Battery90Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Battery90Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Battery90TwoTone'))
    }
    case "BatteryAlert":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BatteryAlertRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BatteryAlertOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BatteryAlertSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BatteryAlertTwoTone'))
    }
    case "BatteryCharging20":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/BatteryCharging20Rounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/BatteryCharging20Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/BatteryCharging20Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BatteryCharging20TwoTone'))
    }
    case "BatteryCharging30":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/BatteryCharging30Rounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/BatteryCharging30Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/BatteryCharging30Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BatteryCharging30TwoTone'))
    }
    case "BatteryCharging50":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/BatteryCharging50Rounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/BatteryCharging50Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/BatteryCharging50Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BatteryCharging50TwoTone'))
    }
    case "BatteryCharging60":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/BatteryCharging60Rounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/BatteryCharging60Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/BatteryCharging60Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BatteryCharging60TwoTone'))
    }
    case "BatteryCharging80":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/BatteryCharging80Rounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/BatteryCharging80Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/BatteryCharging80Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BatteryCharging80TwoTone'))
    }
    case "BatteryCharging90":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/BatteryCharging90Rounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/BatteryCharging90Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/BatteryCharging90Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BatteryCharging90TwoTone'))
    }
    case "BatteryChargingFull":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/BatteryChargingFullRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/BatteryChargingFullOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BatteryChargingFullSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/BatteryChargingFullTwoTone'))
    }
    case "BatteryFull":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BatteryFullRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BatteryFullOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BatteryFullSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BatteryFullTwoTone'))
    }
    case "BatteryStd":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BatteryStdRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BatteryStdOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BatteryStdSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BatteryStdTwoTone'))
    }
    case "BatteryUnknown":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BatteryUnknownRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BatteryUnknownOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BatteryUnknownSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BatteryUnknownTwoTone'))
    }
    case "BeachAccess":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BeachAccessRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BeachAccessOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BeachAccessSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BeachAccessTwoTone'))
    }
    case "Beenhere":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BeenhereRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BeenhereOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BeenhereSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BeenhereTwoTone'))
    }
    case "Block":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BlockRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BlockOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BlockSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BlockTwoTone'))
    }
    case "BluetoothAudio":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BluetoothAudioRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BluetoothAudioOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BluetoothAudioSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BluetoothAudioTwoTone'))
    }
    case "BluetoothConnected":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/BluetoothConnectedRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/BluetoothConnectedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BluetoothConnectedSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/BluetoothConnectedTwoTone'))
    }
    case "BluetoothDisabled":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/BluetoothDisabledRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/BluetoothDisabledOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BluetoothDisabledSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BluetoothDisabledTwoTone'))
    }
    case "Bluetooth":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BluetoothRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BluetoothOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BluetoothSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BluetoothTwoTone'))
    }
    case "BluetoothSearching":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/BluetoothSearchingRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/BluetoothSearchingOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BluetoothSearchingSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/BluetoothSearchingTwoTone'))
    }
    case "BlurCircular":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BlurCircularRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BlurCircularOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BlurCircularSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BlurCircularTwoTone'))
    }
    case "BlurLinear":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BlurLinearRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BlurLinearOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BlurLinearSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BlurLinearTwoTone'))
    }
    case "BlurOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BlurOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BlurOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BlurOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BlurOffTwoTone'))
    }
    case "BlurOn":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BlurOnRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BlurOnOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BlurOnSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BlurOnTwoTone'))
    }
    case "Book":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BookRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BookOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BookSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BookTwoTone'))
    }
    case "BookmarkBorder":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BookmarkBorderRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BookmarkBorderOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BookmarkBorderSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BookmarkBorderTwoTone'))
    }
    case "Bookmark":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BookmarkRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BookmarkOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BookmarkSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BookmarkTwoTone'))
    }
    case "Bookmarks":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BookmarksRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BookmarksOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BookmarksSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BookmarksTwoTone'))
    }
    case "BorderAll":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BorderAllRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BorderAllOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BorderAllSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BorderAllTwoTone'))
    }
    case "BorderBottom":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BorderBottomRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BorderBottomOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BorderBottomSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BorderBottomTwoTone'))
    }
    case "BorderClear":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BorderClearRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BorderClearOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BorderClearSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BorderClearTwoTone'))
    }
    case "BorderColor":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BorderColorRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BorderColorOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BorderColorSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BorderColorTwoTone'))
    }
    case "BorderHorizontal":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BorderHorizontalRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/BorderHorizontalOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BorderHorizontalSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BorderHorizontalTwoTone'))
    }
    case "BorderInner":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BorderInnerRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BorderInnerOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BorderInnerSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BorderInnerTwoTone'))
    }
    case "BorderLeft":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BorderLeftRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BorderLeftOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BorderLeftSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BorderLeftTwoTone'))
    }
    case "BorderOuter":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BorderOuterRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BorderOuterOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BorderOuterSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BorderOuterTwoTone'))
    }
    case "BorderRight":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BorderRightRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BorderRightOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BorderRightSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BorderRightTwoTone'))
    }
    case "BorderStyle":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BorderStyleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BorderStyleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BorderStyleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BorderStyleTwoTone'))
    }
    case "BorderTop":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BorderTopRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BorderTopOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BorderTopSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BorderTopTwoTone'))
    }
    case "BorderVertical":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BorderVerticalRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BorderVerticalOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BorderVerticalSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BorderVerticalTwoTone'))
    }
    case "BrandingWatermark":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/BrandingWatermarkRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/BrandingWatermarkOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BrandingWatermarkSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BrandingWatermarkTwoTone'))
    }
    case "Brightness1":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Brightness1Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Brightness1Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Brightness1Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Brightness1TwoTone'))
    }
    case "Brightness2":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Brightness2Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Brightness2Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Brightness2Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Brightness2TwoTone'))
    }
    case "Brightness3":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Brightness3Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Brightness3Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Brightness3Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Brightness3TwoTone'))
    }
    case "Brightness4":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Brightness4Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Brightness4Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Brightness4Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Brightness4TwoTone'))
    }
    case "Brightness5":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Brightness5Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Brightness5Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Brightness5Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Brightness5TwoTone'))
    }
    case "Brightness6":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Brightness6Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Brightness6Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Brightness6Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Brightness6TwoTone'))
    }
    case "Brightness7":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Brightness7Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Brightness7Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Brightness7Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Brightness7TwoTone'))
    }
    case "BrightnessAuto":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BrightnessAutoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BrightnessAutoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BrightnessAutoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BrightnessAutoTwoTone'))
    }
    case "BrightnessHigh":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BrightnessHighRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BrightnessHighOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BrightnessHighSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BrightnessHighTwoTone'))
    }
    case "BrightnessLow":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BrightnessLowRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BrightnessLowOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BrightnessLowSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BrightnessLowTwoTone'))
    }
    case "BrightnessMedium":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BrightnessMediumRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/BrightnessMediumOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BrightnessMediumSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BrightnessMediumTwoTone'))
    }
    case "BrokenImage":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BrokenImageRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BrokenImageOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BrokenImageSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BrokenImageTwoTone'))
    }
    case "Brush":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BrushRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BrushOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BrushSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BrushTwoTone'))
    }
    case "BubbleChart":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BubbleChartRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BubbleChartOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BubbleChartSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BubbleChartTwoTone'))
    }
    case "BugReport":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BugReportRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BugReportOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BugReportSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BugReportTwoTone'))
    }
    case "Build":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BuildRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BuildOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BuildSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BuildTwoTone'))
    }
    case "BurstMode":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BurstModeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BurstModeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BurstModeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BurstModeTwoTone'))
    }
    case "BusinessCenter":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BusinessCenterRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BusinessCenterOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BusinessCenterSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BusinessCenterTwoTone'))
    }
    case "Business":
      return {
      Rounded: lazy(() => import('@material-ui/icons/BusinessRounded')),
      Outlined: lazy(() => import('@material-ui/icons/BusinessOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/BusinessSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/BusinessTwoTone'))
    }
    case "Cached":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CachedRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CachedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CachedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CachedTwoTone'))
    }
    case "Cake":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CakeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CakeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CakeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CakeTwoTone'))
    }
    case "CalendarToday":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CalendarTodayRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CalendarTodayOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CalendarTodaySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CalendarTodayTwoTone'))
    }
    case "CalendarViewDay":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CalendarViewDayRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/CalendarViewDayOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CalendarViewDaySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CalendarViewDayTwoTone'))
    }
    case "CallEnd":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CallEndRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CallEndOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CallEndSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CallEndTwoTone'))
    }
    case "CallMade":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CallMadeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CallMadeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CallMadeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CallMadeTwoTone'))
    }
    case "CallMerge":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CallMergeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CallMergeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CallMergeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CallMergeTwoTone'))
    }
    case "CallMissedOutgoing":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/CallMissedOutgoingRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/CallMissedOutgoingOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CallMissedOutgoingSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/CallMissedOutgoingTwoTone'))
    }
    case "CallMissed":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CallMissedRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CallMissedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CallMissedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CallMissedTwoTone'))
    }
    case "Call":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CallRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CallOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CallSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CallTwoTone'))
    }
    case "CallReceived":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CallReceivedRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CallReceivedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CallReceivedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CallReceivedTwoTone'))
    }
    case "CallSplit":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CallSplitRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CallSplitOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CallSplitSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CallSplitTwoTone'))
    }
    case "CallToAction":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CallToActionRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CallToActionOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CallToActionSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CallToActionTwoTone'))
    }
    case "CameraAlt":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CameraAltRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CameraAltOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CameraAltSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CameraAltTwoTone'))
    }
    case "CameraEnhance":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CameraEnhanceRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CameraEnhanceOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CameraEnhanceSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CameraEnhanceTwoTone'))
    }
    case "CameraFront":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CameraFrontRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CameraFrontOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CameraFrontSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CameraFrontTwoTone'))
    }
    case "Camera":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CameraRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CameraOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CameraSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CameraTwoTone'))
    }
    case "CameraRear":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CameraRearRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CameraRearOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CameraRearSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CameraRearTwoTone'))
    }
    case "CameraRoll":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CameraRollRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CameraRollOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CameraRollSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CameraRollTwoTone'))
    }
    case "Cancel":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CancelRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CancelOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CancelSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CancelTwoTone'))
    }
    case "CancelPresentation":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/CancelPresentationRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/CancelPresentationOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CancelPresentationSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/CancelPresentationTwoTone'))
    }
    case "CardGiftcard":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CardGiftcardRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CardGiftcardOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CardGiftcardSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CardGiftcardTwoTone'))
    }
    case "CardMembership":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CardMembershipRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CardMembershipOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CardMembershipSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CardMembershipTwoTone'))
    }
    case "CardTravel":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CardTravelRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CardTravelOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CardTravelSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CardTravelTwoTone'))
    }
    case "Casino":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CasinoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CasinoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CasinoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CasinoTwoTone'))
    }
    case "CastConnected":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CastConnectedRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CastConnectedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CastConnectedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CastConnectedTwoTone'))
    }
    case "CastForEducation":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CastForEducationRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/CastForEducationOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CastForEducationSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CastForEducationTwoTone'))
    }
    case "Cast":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CastRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CastOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CastSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CastTwoTone'))
    }
    case "Category":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CategoryRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CategoryOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CategorySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CategoryTwoTone'))
    }
    case "CellWifi":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CellWifiRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CellWifiOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CellWifiSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CellWifiTwoTone'))
    }
    case "CenterFocusStrong":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/CenterFocusStrongRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/CenterFocusStrongOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CenterFocusStrongSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CenterFocusStrongTwoTone'))
    }
    case "CenterFocusWeak":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CenterFocusWeakRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/CenterFocusWeakOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CenterFocusWeakSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CenterFocusWeakTwoTone'))
    }
    case "ChangeHistory":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ChangeHistoryRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ChangeHistoryOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ChangeHistorySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ChangeHistoryTwoTone'))
    }
    case "ChatBubbleOutline":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/ChatBubbleOutlineRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/ChatBubbleOutlineOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ChatBubbleOutlineSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ChatBubbleOutlineTwoTone'))
    }
    case "ChatBubble":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ChatBubbleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ChatBubbleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ChatBubbleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ChatBubbleTwoTone'))
    }
    case "Chat":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ChatRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ChatOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ChatSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ChatTwoTone'))
    }
    case "CheckBoxOutlineBlank":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/CheckBoxOutlineBlankRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/CheckBoxOutlineBlankOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CheckBoxOutlineBlankSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/CheckBoxOutlineBlankTwoTone'))
    }
    case "CheckBox":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CheckBoxRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CheckBoxOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CheckBoxSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CheckBoxTwoTone'))
    }
    case "CheckCircleOutline":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/CheckCircleOutlineRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/CheckCircleOutlineOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CheckCircleOutlineSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/CheckCircleOutlineTwoTone'))
    }
    case "CheckCircle":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CheckCircleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CheckCircleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CheckCircleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CheckCircleTwoTone'))
    }
    case "Check":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CheckRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CheckOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CheckSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CheckTwoTone'))
    }
    case "ChevronLeft":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ChevronLeftRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ChevronLeftOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ChevronLeftSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ChevronLeftTwoTone'))
    }
    case "ChevronRight":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ChevronRightRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ChevronRightOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ChevronRightSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ChevronRightTwoTone'))
    }
    case "ChildCare":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ChildCareRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ChildCareOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ChildCareSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ChildCareTwoTone'))
    }
    case "ChildFriendly":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ChildFriendlyRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ChildFriendlyOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ChildFriendlySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ChildFriendlyTwoTone'))
    }
    case "ChromeReaderMode":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ChromeReaderModeRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/ChromeReaderModeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ChromeReaderModeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ChromeReaderModeTwoTone'))
    }
    case "Class":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ClassRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ClassOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ClassSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ClassTwoTone'))
    }
    case "ClearAll":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ClearAllRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ClearAllOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ClearAllSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ClearAllTwoTone'))
    }
    case "Clear":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ClearRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ClearOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ClearSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ClearTwoTone'))
    }
    case "Close":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CloseRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CloseOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CloseSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CloseTwoTone'))
    }
    case "ClosedCaption":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ClosedCaptionRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ClosedCaptionOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ClosedCaptionSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ClosedCaptionTwoTone'))
    }
    case "CloudCircle":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CloudCircleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CloudCircleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CloudCircleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CloudCircleTwoTone'))
    }
    case "CloudDone":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CloudDoneRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CloudDoneOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CloudDoneSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CloudDoneTwoTone'))
    }
    case "CloudDownload":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CloudDownloadRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CloudDownloadOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CloudDownloadSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CloudDownloadTwoTone'))
    }
    case "CloudOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CloudOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CloudOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CloudOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CloudOffTwoTone'))
    }
    case "Cloud":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CloudRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CloudOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CloudSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CloudTwoTone'))
    }
    case "CloudQueue":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CloudQueueRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CloudQueueOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CloudQueueSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CloudQueueTwoTone'))
    }
    case "CloudUpload":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CloudUploadRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CloudUploadOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CloudUploadSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CloudUploadTwoTone'))
    }
    case "Code":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CodeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CodeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CodeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CodeTwoTone'))
    }
    case "CollectionsBookmark":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/CollectionsBookmarkRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/CollectionsBookmarkOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CollectionsBookmarkSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/CollectionsBookmarkTwoTone'))
    }
    case "Collections":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CollectionsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CollectionsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CollectionsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CollectionsTwoTone'))
    }
    case "ColorLens":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ColorLensRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ColorLensOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ColorLensSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ColorLensTwoTone'))
    }
    case "Colorize":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ColorizeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ColorizeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ColorizeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ColorizeTwoTone'))
    }
    case "Comment":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CommentRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CommentOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CommentSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CommentTwoTone'))
    }
    case "Commute":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CommuteRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CommuteOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CommuteSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CommuteTwoTone'))
    }
    case "CompareArrows":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CompareArrowsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CompareArrowsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CompareArrowsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CompareArrowsTwoTone'))
    }
    case "Compare":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CompareRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CompareOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CompareSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CompareTwoTone'))
    }
    case "CompassCalibration":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/CompassCalibrationRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/CompassCalibrationOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CompassCalibrationSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/CompassCalibrationTwoTone'))
    }
    case "Computer":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ComputerRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ComputerOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ComputerSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ComputerTwoTone'))
    }
    case "ConfirmationNumber":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/ConfirmationNumberRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/ConfirmationNumberOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ConfirmationNumberSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/ConfirmationNumberTwoTone'))
    }
    case "ContactMail":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ContactMailRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ContactMailOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ContactMailSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ContactMailTwoTone'))
    }
    case "ContactPhone":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ContactPhoneRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ContactPhoneOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ContactPhoneSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ContactPhoneTwoTone'))
    }
    case "ContactSupport":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ContactSupportRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ContactSupportOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ContactSupportSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ContactSupportTwoTone'))
    }
    case "Contacts":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ContactsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ContactsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ContactsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ContactsTwoTone'))
    }
    case "ControlCamera":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ControlCameraRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ControlCameraOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ControlCameraSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ControlCameraTwoTone'))
    }
    case "ControlPointDuplicate":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/ControlPointDuplicateRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/ControlPointDuplicateOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/ControlPointDuplicateSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/ControlPointDuplicateTwoTone'))
    }
    case "ControlPoint":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ControlPointRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ControlPointOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ControlPointSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ControlPointTwoTone'))
    }
    case "Copyright":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CopyrightRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CopyrightOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CopyrightSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CopyrightTwoTone'))
    }
    case "CreateNewFolder":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CreateNewFolderRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/CreateNewFolderOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CreateNewFolderSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CreateNewFolderTwoTone'))
    }
    case "Create":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CreateRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CreateOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CreateSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CreateTwoTone'))
    }
    case "CreditCard":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CreditCardRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CreditCardOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CreditCardSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CreditCardTwoTone'))
    }
    case "Crop169":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Crop169Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Crop169Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Crop169Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Crop169TwoTone'))
    }
    case "Crop32":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Crop32Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Crop32Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Crop32Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Crop32TwoTone'))
    }
    case "Crop54":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Crop54Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Crop54Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Crop54Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Crop54TwoTone'))
    }
    case "Crop75":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Crop75Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Crop75Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Crop75Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Crop75TwoTone'))
    }
    case "CropDin":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CropDinRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CropDinOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CropDinSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CropDinTwoTone'))
    }
    case "CropFree":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CropFreeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CropFreeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CropFreeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CropFreeTwoTone'))
    }
    case "CropLandscape":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CropLandscapeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CropLandscapeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CropLandscapeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CropLandscapeTwoTone'))
    }
    case "CropOriginal":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CropOriginalRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CropOriginalOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CropOriginalSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CropOriginalTwoTone'))
    }
    case "Crop":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CropRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CropOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CropSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CropTwoTone'))
    }
    case "CropPortrait":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CropPortraitRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CropPortraitOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CropPortraitSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CropPortraitTwoTone'))
    }
    case "CropRotate":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CropRotateRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CropRotateOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CropRotateSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CropRotateTwoTone'))
    }
    case "CropSquare":
      return {
      Rounded: lazy(() => import('@material-ui/icons/CropSquareRounded')),
      Outlined: lazy(() => import('@material-ui/icons/CropSquareOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/CropSquareSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/CropSquareTwoTone'))
    }
    case "Dashboard":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DashboardRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DashboardOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DashboardSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DashboardTwoTone'))
    }
    case "DataUsage":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DataUsageRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DataUsageOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DataUsageSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DataUsageTwoTone'))
    }
    case "DateRange":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DateRangeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DateRangeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DateRangeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DateRangeTwoTone'))
    }
    case "Dehaze":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DehazeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DehazeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DehazeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DehazeTwoTone'))
    }
    case "DeleteForever":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DeleteForeverRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DeleteForeverOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DeleteForeverSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DeleteForeverTwoTone'))
    }
    case "DeleteOutline":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DeleteOutlineRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DeleteOutlineOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DeleteOutlineSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DeleteOutlineTwoTone'))
    }
    case "Delete":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DeleteRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DeleteOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DeleteSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DeleteTwoTone'))
    }
    case "DeleteSweep":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DeleteSweepRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DeleteSweepOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DeleteSweepSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DeleteSweepTwoTone'))
    }
    case "DepartureBoard":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DepartureBoardRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DepartureBoardOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DepartureBoardSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DepartureBoardTwoTone'))
    }
    case "Description":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DescriptionRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DescriptionOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DescriptionSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DescriptionTwoTone'))
    }
    case "DesktopAccessDisabled":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/DesktopAccessDisabledRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/DesktopAccessDisabledOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/DesktopAccessDisabledSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/DesktopAccessDisabledTwoTone'))
    }
    case "DesktopMac":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DesktopMacRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DesktopMacOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DesktopMacSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DesktopMacTwoTone'))
    }
    case "DesktopWindows":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DesktopWindowsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DesktopWindowsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DesktopWindowsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DesktopWindowsTwoTone'))
    }
    case "Details":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DetailsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DetailsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DetailsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DetailsTwoTone'))
    }
    case "DeveloperBoard":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DeveloperBoardRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DeveloperBoardOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DeveloperBoardSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DeveloperBoardTwoTone'))
    }
    case "DeveloperMode":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DeveloperModeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DeveloperModeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DeveloperModeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DeveloperModeTwoTone'))
    }
    case "DeviceHub":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DeviceHubRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DeviceHubOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DeviceHubSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DeviceHubTwoTone'))
    }
    case "DeviceUnknown":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DeviceUnknownRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DeviceUnknownOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DeviceUnknownSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DeviceUnknownTwoTone'))
    }
    case "DevicesOther":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DevicesOtherRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DevicesOtherOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DevicesOtherSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DevicesOtherTwoTone'))
    }
    case "Devices":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DevicesRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DevicesOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DevicesSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DevicesTwoTone'))
    }
    case "DialerSip":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DialerSipRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DialerSipOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DialerSipSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DialerSipTwoTone'))
    }
    case "Dialpad":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DialpadRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DialpadOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DialpadSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DialpadTwoTone'))
    }
    case "DirectionsBike":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DirectionsBikeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DirectionsBikeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DirectionsBikeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DirectionsBikeTwoTone'))
    }
    case "DirectionsBoat":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DirectionsBoatRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DirectionsBoatOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DirectionsBoatSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DirectionsBoatTwoTone'))
    }
    case "DirectionsBus":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DirectionsBusRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DirectionsBusOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DirectionsBusSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DirectionsBusTwoTone'))
    }
    case "DirectionsCar":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DirectionsCarRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DirectionsCarOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DirectionsCarSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DirectionsCarTwoTone'))
    }
    case "Directions":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DirectionsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DirectionsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DirectionsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DirectionsTwoTone'))
    }
    case "DirectionsRailway":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/DirectionsRailwayRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/DirectionsRailwayOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DirectionsRailwaySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DirectionsRailwayTwoTone'))
    }
    case "DirectionsRun":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DirectionsRunRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DirectionsRunOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DirectionsRunSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DirectionsRunTwoTone'))
    }
    case "DirectionsSubway":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DirectionsSubwayRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/DirectionsSubwayOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DirectionsSubwaySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DirectionsSubwayTwoTone'))
    }
    case "DirectionsTransit":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/DirectionsTransitRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/DirectionsTransitOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DirectionsTransitSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DirectionsTransitTwoTone'))
    }
    case "DirectionsWalk":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DirectionsWalkRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DirectionsWalkOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DirectionsWalkSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DirectionsWalkTwoTone'))
    }
    case "DiscFull":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DiscFullRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DiscFullOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DiscFullSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DiscFullTwoTone'))
    }
    case "Dns":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DnsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DnsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DnsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DnsTwoTone'))
    }
    case "Dock":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DockRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DockOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DockSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DockTwoTone'))
    }
    case "DomainDisabled":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DomainDisabledRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DomainDisabledOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DomainDisabledSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DomainDisabledTwoTone'))
    }
    case "Domain":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DomainRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DomainOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DomainSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DomainTwoTone'))
    }
    case "DoneAll":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DoneAllRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DoneAllOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DoneAllSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DoneAllTwoTone'))
    }
    case "DoneOutline":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DoneOutlineRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DoneOutlineOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DoneOutlineSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DoneOutlineTwoTone'))
    }
    case "Done":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DoneRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DoneOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DoneSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DoneTwoTone'))
    }
    case "DonutLarge":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DonutLargeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DonutLargeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DonutLargeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DonutLargeTwoTone'))
    }
    case "DonutSmall":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DonutSmallRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DonutSmallOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DonutSmallSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DonutSmallTwoTone'))
    }
    case "Drafts":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DraftsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DraftsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DraftsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DraftsTwoTone'))
    }
    case "DragHandle":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DragHandleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DragHandleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DragHandleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DragHandleTwoTone'))
    }
    case "DragIndicator":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DragIndicatorRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DragIndicatorOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DragIndicatorSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DragIndicatorTwoTone'))
    }
    case "DriveEta":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DriveEtaRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DriveEtaOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DriveEtaSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DriveEtaTwoTone'))
    }
    case "Duo":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DuoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DuoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DuoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DuoTwoTone'))
    }
    case "Dvr":
      return {
      Rounded: lazy(() => import('@material-ui/icons/DvrRounded')),
      Outlined: lazy(() => import('@material-ui/icons/DvrOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/DvrSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/DvrTwoTone'))
    }
    case "EditAttributes":
      return {
      Rounded: lazy(() => import('@material-ui/icons/EditAttributesRounded')),
      Outlined: lazy(() => import('@material-ui/icons/EditAttributesOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/EditAttributesSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/EditAttributesTwoTone'))
    }
    case "EditLocation":
      return {
      Rounded: lazy(() => import('@material-ui/icons/EditLocationRounded')),
      Outlined: lazy(() => import('@material-ui/icons/EditLocationOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/EditLocationSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/EditLocationTwoTone'))
    }
    case "Edit":
      return {
      Rounded: lazy(() => import('@material-ui/icons/EditRounded')),
      Outlined: lazy(() => import('@material-ui/icons/EditOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/EditSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/EditTwoTone'))
    }
    case "Eject":
      return {
      Rounded: lazy(() => import('@material-ui/icons/EjectRounded')),
      Outlined: lazy(() => import('@material-ui/icons/EjectOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/EjectSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/EjectTwoTone'))
    }
    case "Email":
      return {
      Rounded: lazy(() => import('@material-ui/icons/EmailRounded')),
      Outlined: lazy(() => import('@material-ui/icons/EmailOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/EmailSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/EmailTwoTone'))
    }
    case "EnhancedEncryption":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/EnhancedEncryptionRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/EnhancedEncryptionOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/EnhancedEncryptionSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/EnhancedEncryptionTwoTone'))
    }
    case "Equalizer":
      return {
      Rounded: lazy(() => import('@material-ui/icons/EqualizerRounded')),
      Outlined: lazy(() => import('@material-ui/icons/EqualizerOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/EqualizerSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/EqualizerTwoTone'))
    }
    case "ErrorOutline":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ErrorOutlineRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ErrorOutlineOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ErrorOutlineSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ErrorOutlineTwoTone'))
    }
    case "Error":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ErrorRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ErrorOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ErrorSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ErrorTwoTone'))
    }
    case "EuroSymbol":
      return {
      Rounded: lazy(() => import('@material-ui/icons/EuroSymbolRounded')),
      Outlined: lazy(() => import('@material-ui/icons/EuroSymbolOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/EuroSymbolSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/EuroSymbolTwoTone'))
    }
    case "EvStation":
      return {
      Rounded: lazy(() => import('@material-ui/icons/EvStationRounded')),
      Outlined: lazy(() => import('@material-ui/icons/EvStationOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/EvStationSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/EvStationTwoTone'))
    }
    case "EventAvailable":
      return {
      Rounded: lazy(() => import('@material-ui/icons/EventAvailableRounded')),
      Outlined: lazy(() => import('@material-ui/icons/EventAvailableOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/EventAvailableSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/EventAvailableTwoTone'))
    }
    case "EventBusy":
      return {
      Rounded: lazy(() => import('@material-ui/icons/EventBusyRounded')),
      Outlined: lazy(() => import('@material-ui/icons/EventBusyOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/EventBusySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/EventBusyTwoTone'))
    }
    case "EventNote":
      return {
      Rounded: lazy(() => import('@material-ui/icons/EventNoteRounded')),
      Outlined: lazy(() => import('@material-ui/icons/EventNoteOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/EventNoteSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/EventNoteTwoTone'))
    }
    case "Event":
      return {
      Rounded: lazy(() => import('@material-ui/icons/EventRounded')),
      Outlined: lazy(() => import('@material-ui/icons/EventOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/EventSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/EventTwoTone'))
    }
    case "EventSeat":
      return {
      Rounded: lazy(() => import('@material-ui/icons/EventSeatRounded')),
      Outlined: lazy(() => import('@material-ui/icons/EventSeatOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/EventSeatSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/EventSeatTwoTone'))
    }
    case "ExitToApp":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ExitToAppRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ExitToAppOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ExitToAppSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ExitToAppTwoTone'))
    }
    case "ExpandLess":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ExpandLessRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ExpandLessOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ExpandLessSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ExpandLessTwoTone'))
    }
    case "ExpandMore":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ExpandMoreRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ExpandMoreOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ExpandMoreSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ExpandMoreTwoTone'))
    }
    case "Explicit":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ExplicitRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ExplicitOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ExplicitSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ExplicitTwoTone'))
    }
    case "ExploreOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ExploreOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ExploreOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ExploreOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ExploreOffTwoTone'))
    }
    case "Explore":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ExploreRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ExploreOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ExploreSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ExploreTwoTone'))
    }
    case "ExposureNeg1":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ExposureNeg1Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/ExposureNeg1Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/ExposureNeg1Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ExposureNeg1TwoTone'))
    }
    case "ExposureNeg2":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ExposureNeg2Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/ExposureNeg2Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/ExposureNeg2Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ExposureNeg2TwoTone'))
    }
    case "Exposure":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ExposureRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ExposureOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ExposureSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ExposureTwoTone'))
    }
    case "ExposurePlus1":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ExposurePlus1Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/ExposurePlus1Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/ExposurePlus1Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ExposurePlus1TwoTone'))
    }
    case "ExposurePlus2":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ExposurePlus2Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/ExposurePlus2Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/ExposurePlus2Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ExposurePlus2TwoTone'))
    }
    case "ExposureZero":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ExposureZeroRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ExposureZeroOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ExposureZeroSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ExposureZeroTwoTone'))
    }
    case "Extension":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ExtensionRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ExtensionOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ExtensionSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ExtensionTwoTone'))
    }
    case "Face":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FaceRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FaceOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FaceSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FaceTwoTone'))
    }
    case "FastForward":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FastForwardRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FastForwardOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FastForwardSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FastForwardTwoTone'))
    }
    case "FastRewind":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FastRewindRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FastRewindOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FastRewindSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FastRewindTwoTone'))
    }
    case "Fastfood":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FastfoodRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FastfoodOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FastfoodSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FastfoodTwoTone'))
    }
    case "FavoriteBorder":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FavoriteBorderRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FavoriteBorderOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FavoriteBorderSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FavoriteBorderTwoTone'))
    }
    case "Favorite":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FavoriteRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FavoriteOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FavoriteSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FavoriteTwoTone'))
    }
    case "FeaturedPlayList":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FeaturedPlayListRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FeaturedPlayListOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FeaturedPlayListSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FeaturedPlayListTwoTone'))
    }
    case "FeaturedVideo":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FeaturedVideoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FeaturedVideoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FeaturedVideoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FeaturedVideoTwoTone'))
    }
    case "Feedback":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FeedbackRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FeedbackOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FeedbackSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FeedbackTwoTone'))
    }
    case "FiberDvr":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FiberDvrRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FiberDvrOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FiberDvrSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FiberDvrTwoTone'))
    }
    case "FiberManualRecord":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/FiberManualRecordRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FiberManualRecordOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FiberManualRecordSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FiberManualRecordTwoTone'))
    }
    case "FiberNew":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FiberNewRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FiberNewOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FiberNewSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FiberNewTwoTone'))
    }
    case "FiberPin":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FiberPinRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FiberPinOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FiberPinSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FiberPinTwoTone'))
    }
    case "FiberSmartRecord":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FiberSmartRecordRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FiberSmartRecordOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FiberSmartRecordSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FiberSmartRecordTwoTone'))
    }
    case "FileCopy":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FileCopyRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FileCopyOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FileCopySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FileCopyTwoTone'))
    }
    case "Filter1":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Filter1Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Filter1Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Filter1Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Filter1TwoTone'))
    }
    case "Filter2":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Filter2Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Filter2Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Filter2Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Filter2TwoTone'))
    }
    case "Filter3":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Filter3Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Filter3Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Filter3Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Filter3TwoTone'))
    }
    case "Filter4":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Filter4Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Filter4Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Filter4Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Filter4TwoTone'))
    }
    case "Filter5":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Filter5Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Filter5Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Filter5Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Filter5TwoTone'))
    }
    case "Filter6":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Filter6Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Filter6Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Filter6Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Filter6TwoTone'))
    }
    case "Filter7":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Filter7Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Filter7Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Filter7Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Filter7TwoTone'))
    }
    case "Filter8":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Filter8Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Filter8Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Filter8Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Filter8TwoTone'))
    }
    case "Filter9":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Filter9Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Filter9Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Filter9Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Filter9TwoTone'))
    }
    case "Filter9Plus":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Filter9PlusRounded')),
      Outlined: lazy(() => import('@material-ui/icons/Filter9PlusOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/Filter9PlusSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Filter9PlusTwoTone'))
    }
    case "FilterBAndW":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FilterBAndWRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FilterBAndWOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FilterBAndWSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FilterBAndWTwoTone'))
    }
    case "FilterCenterFocus":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/FilterCenterFocusRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FilterCenterFocusOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FilterCenterFocusSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FilterCenterFocusTwoTone'))
    }
    case "FilterDrama":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FilterDramaRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FilterDramaOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FilterDramaSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FilterDramaTwoTone'))
    }
    case "FilterFrames":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FilterFramesRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FilterFramesOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FilterFramesSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FilterFramesTwoTone'))
    }
    case "FilterHdr":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FilterHdrRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FilterHdrOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FilterHdrSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FilterHdrTwoTone'))
    }
    case "FilterList":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FilterListRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FilterListOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FilterListSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FilterListTwoTone'))
    }
    case "FilterNone":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FilterNoneRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FilterNoneOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FilterNoneSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FilterNoneTwoTone'))
    }
    case "Filter":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FilterRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FilterOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FilterSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FilterTwoTone'))
    }
    case "FilterTiltShift":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FilterTiltShiftRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FilterTiltShiftOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FilterTiltShiftSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FilterTiltShiftTwoTone'))
    }
    case "FilterVintage":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FilterVintageRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FilterVintageOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FilterVintageSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FilterVintageTwoTone'))
    }
    case "FindInPage":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FindInPageRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FindInPageOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FindInPageSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FindInPageTwoTone'))
    }
    case "FindReplace":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FindReplaceRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FindReplaceOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FindReplaceSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FindReplaceTwoTone'))
    }
    case "Fingerprint":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FingerprintRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FingerprintOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FingerprintSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FingerprintTwoTone'))
    }
    case "FirstPage":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FirstPageRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FirstPageOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FirstPageSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FirstPageTwoTone'))
    }
    case "FitnessCenter":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FitnessCenterRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FitnessCenterOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FitnessCenterSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FitnessCenterTwoTone'))
    }
    case "Flag":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FlagRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FlagOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FlagSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FlagTwoTone'))
    }
    case "Flare":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FlareRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FlareOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FlareSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FlareTwoTone'))
    }
    case "FlashAuto":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FlashAutoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FlashAutoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FlashAutoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FlashAutoTwoTone'))
    }
    case "FlashOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FlashOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FlashOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FlashOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FlashOffTwoTone'))
    }
    case "FlashOn":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FlashOnRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FlashOnOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FlashOnSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FlashOnTwoTone'))
    }
    case "FlightLand":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FlightLandRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FlightLandOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FlightLandSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FlightLandTwoTone'))
    }
    case "Flight":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FlightRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FlightOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FlightSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FlightTwoTone'))
    }
    case "FlightTakeoff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FlightTakeoffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FlightTakeoffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FlightTakeoffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FlightTakeoffTwoTone'))
    }
    case "Flip":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FlipRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FlipOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FlipSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FlipTwoTone'))
    }
    case "FlipToBack":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FlipToBackRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FlipToBackOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FlipToBackSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FlipToBackTwoTone'))
    }
    case "FlipToFront":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FlipToFrontRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FlipToFrontOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FlipToFrontSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FlipToFrontTwoTone'))
    }
    case "FolderOpen":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FolderOpenRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FolderOpenOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FolderOpenSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FolderOpenTwoTone'))
    }
    case "Folder":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FolderRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FolderOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FolderSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FolderTwoTone'))
    }
    case "FolderShared":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FolderSharedRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FolderSharedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FolderSharedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FolderSharedTwoTone'))
    }
    case "FolderSpecial":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FolderSpecialRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FolderSpecialOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FolderSpecialSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FolderSpecialTwoTone'))
    }
    case "FontDownload":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FontDownloadRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FontDownloadOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FontDownloadSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FontDownloadTwoTone'))
    }
    case "FormatAlignCenter":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/FormatAlignCenterRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FormatAlignCenterOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatAlignCenterSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FormatAlignCenterTwoTone'))
    }
    case "FormatAlignJustify":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/FormatAlignJustifyRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FormatAlignJustifyOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatAlignJustifySharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/FormatAlignJustifyTwoTone'))
    }
    case "FormatAlignLeft":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FormatAlignLeftRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FormatAlignLeftOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatAlignLeftSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FormatAlignLeftTwoTone'))
    }
    case "FormatAlignRight":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FormatAlignRightRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FormatAlignRightOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatAlignRightSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FormatAlignRightTwoTone'))
    }
    case "FormatBold":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FormatBoldRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FormatBoldOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatBoldSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FormatBoldTwoTone'))
    }
    case "FormatClear":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FormatClearRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FormatClearOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatClearSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FormatClearTwoTone'))
    }
    case "FormatColorFill":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FormatColorFillRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FormatColorFillOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatColorFillSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FormatColorFillTwoTone'))
    }
    case "FormatColorReset":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FormatColorResetRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FormatColorResetOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatColorResetSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FormatColorResetTwoTone'))
    }
    case "FormatColorText":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FormatColorTextRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FormatColorTextOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatColorTextSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FormatColorTextTwoTone'))
    }
    case "FormatIndentDecrease":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/FormatIndentDecreaseRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FormatIndentDecreaseOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatIndentDecreaseSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/FormatIndentDecreaseTwoTone'))
    }
    case "FormatIndentIncrease":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/FormatIndentIncreaseRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FormatIndentIncreaseOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatIndentIncreaseSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/FormatIndentIncreaseTwoTone'))
    }
    case "FormatItalic":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FormatItalicRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FormatItalicOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatItalicSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FormatItalicTwoTone'))
    }
    case "FormatLineSpacing":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/FormatLineSpacingRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FormatLineSpacingOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatLineSpacingSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FormatLineSpacingTwoTone'))
    }
    case "FormatListBulleted":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/FormatListBulletedRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FormatListBulletedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatListBulletedSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/FormatListBulletedTwoTone'))
    }
    case "FormatListNumbered":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/FormatListNumberedRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FormatListNumberedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatListNumberedSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/FormatListNumberedTwoTone'))
    }
    case "FormatListNumberedRtl":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/FormatListNumberedRtlRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FormatListNumberedRtlOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/FormatListNumberedRtlSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/FormatListNumberedRtlTwoTone'))
    }
    case "FormatPaint":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FormatPaintRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FormatPaintOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatPaintSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FormatPaintTwoTone'))
    }
    case "FormatQuote":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FormatQuoteRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FormatQuoteOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatQuoteSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FormatQuoteTwoTone'))
    }
    case "FormatShapes":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FormatShapesRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FormatShapesOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatShapesSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FormatShapesTwoTone'))
    }
    case "FormatSize":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FormatSizeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FormatSizeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatSizeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FormatSizeTwoTone'))
    }
    case "FormatStrikethrough":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/FormatStrikethroughRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FormatStrikethroughOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatStrikethroughSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/FormatStrikethroughTwoTone'))
    }
    case "FormatTextdirectionLToR":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/FormatTextdirectionLToRRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FormatTextdirectionLToROutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/FormatTextdirectionLToRSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/FormatTextdirectionLToRTwoTone'))
    }
    case "FormatTextdirectionRToL":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/FormatTextdirectionRToLRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FormatTextdirectionRToLOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/FormatTextdirectionRToLSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/FormatTextdirectionRToLTwoTone'))
    }
    case "FormatUnderlined":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FormatUnderlinedRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/FormatUnderlinedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FormatUnderlinedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FormatUnderlinedTwoTone'))
    }
    case "Forum":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ForumRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ForumOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ForumSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ForumTwoTone'))
    }
    case "Forward10":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Forward10Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Forward10Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Forward10Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Forward10TwoTone'))
    }
    case "Forward30":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Forward30Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Forward30Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Forward30Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Forward30TwoTone'))
    }
    case "Forward5":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Forward5Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Forward5Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Forward5Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Forward5TwoTone'))
    }
    case "Forward":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ForwardRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ForwardOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ForwardSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ForwardTwoTone'))
    }
    case "FourK":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FourKRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FourKOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FourKSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FourKTwoTone'))
    }
    case "FreeBreakfast":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FreeBreakfastRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FreeBreakfastOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FreeBreakfastSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FreeBreakfastTwoTone'))
    }
    case "FullscreenExit":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FullscreenExitRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FullscreenExitOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FullscreenExitSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FullscreenExitTwoTone'))
    }
    case "Fullscreen":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FullscreenRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FullscreenOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FullscreenSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FullscreenTwoTone'))
    }
    case "Functions":
      return {
      Rounded: lazy(() => import('@material-ui/icons/FunctionsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/FunctionsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/FunctionsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/FunctionsTwoTone'))
    }
    case "GTranslate":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GTranslateRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GTranslateOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GTranslateSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GTranslateTwoTone'))
    }
    case "Gamepad":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GamepadRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GamepadOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GamepadSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GamepadTwoTone'))
    }
    case "Games":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GamesRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GamesOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GamesSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GamesTwoTone'))
    }
    case "Gavel":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GavelRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GavelOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GavelSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GavelTwoTone'))
    }
    case "Gesture":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GestureRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GestureOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GestureSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GestureTwoTone'))
    }
    case "GetApp":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GetAppRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GetAppOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GetAppSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GetAppTwoTone'))
    }
    case "Gif":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GifRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GifOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GifSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GifTwoTone'))
    }
    case "GolfCourse":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GolfCourseRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GolfCourseOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GolfCourseSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GolfCourseTwoTone'))
    }
    case "GpsFixed":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GpsFixedRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GpsFixedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GpsFixedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GpsFixedTwoTone'))
    }
    case "GpsNotFixed":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GpsNotFixedRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GpsNotFixedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GpsNotFixedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GpsNotFixedTwoTone'))
    }
    case "GpsOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GpsOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GpsOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GpsOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GpsOffTwoTone'))
    }
    case "Grade":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GradeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GradeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GradeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GradeTwoTone'))
    }
    case "Gradient":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GradientRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GradientOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GradientSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GradientTwoTone'))
    }
    case "Grain":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GrainRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GrainOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GrainSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GrainTwoTone'))
    }
    case "GraphicEq":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GraphicEqRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GraphicEqOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GraphicEqSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GraphicEqTwoTone'))
    }
    case "GridOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GridOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GridOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GridOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GridOffTwoTone'))
    }
    case "GridOn":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GridOnRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GridOnOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GridOnSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GridOnTwoTone'))
    }
    case "GroupAdd":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GroupAddRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GroupAddOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GroupAddSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GroupAddTwoTone'))
    }
    case "Group":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GroupRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GroupOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GroupSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GroupTwoTone'))
    }
    case "GroupWork":
      return {
      Rounded: lazy(() => import('@material-ui/icons/GroupWorkRounded')),
      Outlined: lazy(() => import('@material-ui/icons/GroupWorkOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/GroupWorkSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/GroupWorkTwoTone'))
    }
    case "Hd":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HdRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HdOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HdSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HdTwoTone'))
    }
    case "HdrOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HdrOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HdrOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HdrOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HdrOffTwoTone'))
    }
    case "HdrOn":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HdrOnRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HdrOnOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HdrOnSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HdrOnTwoTone'))
    }
    case "HdrStrong":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HdrStrongRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HdrStrongOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HdrStrongSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HdrStrongTwoTone'))
    }
    case "HdrWeak":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HdrWeakRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HdrWeakOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HdrWeakSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HdrWeakTwoTone'))
    }
    case "HeadsetMic":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HeadsetMicRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HeadsetMicOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HeadsetMicSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HeadsetMicTwoTone'))
    }
    case "Headset":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HeadsetRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HeadsetOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HeadsetSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HeadsetTwoTone'))
    }
    case "Healing":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HealingRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HealingOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HealingSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HealingTwoTone'))
    }
    case "Hearing":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HearingRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HearingOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HearingSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HearingTwoTone'))
    }
    case "HelpOutline":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HelpOutlineRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HelpOutlineOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HelpOutlineSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HelpOutlineTwoTone'))
    }
    case "Help":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HelpRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HelpOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HelpSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HelpTwoTone'))
    }
    case "HighQuality":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HighQualityRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HighQualityOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HighQualitySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HighQualityTwoTone'))
    }
    case "HighlightOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HighlightOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HighlightOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HighlightOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HighlightOffTwoTone'))
    }
    case "Highlight":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HighlightRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HighlightOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HighlightSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HighlightTwoTone'))
    }
    case "History":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HistoryRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HistoryOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HistorySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HistoryTwoTone'))
    }
    case "Home":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HomeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HomeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HomeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HomeTwoTone'))
    }
    case "HorizontalSplit":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HorizontalSplitRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/HorizontalSplitOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HorizontalSplitSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HorizontalSplitTwoTone'))
    }
    case "HotTub":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HotTubRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HotTubOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HotTubSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HotTubTwoTone'))
    }
    case "Hotel":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HotelRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HotelOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HotelSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HotelTwoTone'))
    }
    case "HourglassEmpty":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HourglassEmptyRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HourglassEmptyOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HourglassEmptySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HourglassEmptyTwoTone'))
    }
    case "HourglassFull":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HourglassFullRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HourglassFullOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HourglassFullSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HourglassFullTwoTone'))
    }
    case "HowToReg":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HowToRegRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HowToRegOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HowToRegSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HowToRegTwoTone'))
    }
    case "HowToVote":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HowToVoteRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HowToVoteOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HowToVoteSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HowToVoteTwoTone'))
    }
    case "Http":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HttpRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HttpOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HttpSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HttpTwoTone'))
    }
    case "Https":
      return {
      Rounded: lazy(() => import('@material-ui/icons/HttpsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/HttpsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/HttpsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/HttpsTwoTone'))
    }
    case "ImageAspectRatio":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ImageAspectRatioRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/ImageAspectRatioOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ImageAspectRatioSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ImageAspectRatioTwoTone'))
    }
    case "Image":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ImageRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ImageOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ImageSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ImageTwoTone'))
    }
    case "ImageSearch":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ImageSearchRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ImageSearchOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ImageSearchSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ImageSearchTwoTone'))
    }
    case "ImportContacts":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ImportContactsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ImportContactsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ImportContactsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ImportContactsTwoTone'))
    }
    case "ImportExport":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ImportExportRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ImportExportOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ImportExportSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ImportExportTwoTone'))
    }
    case "ImportantDevices":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ImportantDevicesRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/ImportantDevicesOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ImportantDevicesSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ImportantDevicesTwoTone'))
    }
    case "Inbox":
      return {
      Rounded: lazy(() => import('@material-ui/icons/InboxRounded')),
      Outlined: lazy(() => import('@material-ui/icons/InboxOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/InboxSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/InboxTwoTone'))
    }
    case "IndeterminateCheckBox":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/IndeterminateCheckBoxRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/IndeterminateCheckBoxOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/IndeterminateCheckBoxSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/IndeterminateCheckBoxTwoTone'))
    }
    case "Info":
      return {
      Rounded: lazy(() => import('@material-ui/icons/InfoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/InfoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/InfoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/InfoTwoTone'))
    }
    case "Input":
      return {
      Rounded: lazy(() => import('@material-ui/icons/InputRounded')),
      Outlined: lazy(() => import('@material-ui/icons/InputOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/InputSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/InputTwoTone'))
    }
    case "InsertChart":
      return {
      Rounded: lazy(() => import('@material-ui/icons/InsertChartRounded')),
      Outlined: lazy(() => import('@material-ui/icons/InsertChartOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/InsertChartSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/InsertChartTwoTone'))
    }
    case "InsertChartOutlined":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/InsertChartOutlinedRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/InsertChartOutlinedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/InsertChartOutlinedSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/InsertChartOutlinedTwoTone'))
    }
    case "InsertComment":
      return {
      Rounded: lazy(() => import('@material-ui/icons/InsertCommentRounded')),
      Outlined: lazy(() => import('@material-ui/icons/InsertCommentOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/InsertCommentSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/InsertCommentTwoTone'))
    }
    case "InsertDriveFile":
      return {
      Rounded: lazy(() => import('@material-ui/icons/InsertDriveFileRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/InsertDriveFileOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/InsertDriveFileSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/InsertDriveFileTwoTone'))
    }
    case "InsertEmoticon":
      return {
      Rounded: lazy(() => import('@material-ui/icons/InsertEmoticonRounded')),
      Outlined: lazy(() => import('@material-ui/icons/InsertEmoticonOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/InsertEmoticonSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/InsertEmoticonTwoTone'))
    }
    case "InsertInvitation":
      return {
      Rounded: lazy(() => import('@material-ui/icons/InsertInvitationRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/InsertInvitationOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/InsertInvitationSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/InsertInvitationTwoTone'))
    }
    case "InsertLink":
      return {
      Rounded: lazy(() => import('@material-ui/icons/InsertLinkRounded')),
      Outlined: lazy(() => import('@material-ui/icons/InsertLinkOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/InsertLinkSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/InsertLinkTwoTone'))
    }
    case "InsertPhoto":
      return {
      Rounded: lazy(() => import('@material-ui/icons/InsertPhotoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/InsertPhotoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/InsertPhotoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/InsertPhotoTwoTone'))
    }
    case "InvertColorsOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/InvertColorsOffRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/InvertColorsOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/InvertColorsOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/InvertColorsOffTwoTone'))
    }
    case "InvertColors":
      return {
      Rounded: lazy(() => import('@material-ui/icons/InvertColorsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/InvertColorsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/InvertColorsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/InvertColorsTwoTone'))
    }
    case "Iso":
      return {
      Rounded: lazy(() => import('@material-ui/icons/IsoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/IsoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/IsoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/IsoTwoTone'))
    }
    case "KeyboardArrowDown":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/KeyboardArrowDownRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/KeyboardArrowDownOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/KeyboardArrowDownSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/KeyboardArrowDownTwoTone'))
    }
    case "KeyboardArrowLeft":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/KeyboardArrowLeftRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/KeyboardArrowLeftOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/KeyboardArrowLeftSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/KeyboardArrowLeftTwoTone'))
    }
    case "KeyboardArrowRight":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/KeyboardArrowRightRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/KeyboardArrowRightOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/KeyboardArrowRightSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/KeyboardArrowRightTwoTone'))
    }
    case "KeyboardArrowUp":
      return {
      Rounded: lazy(() => import('@material-ui/icons/KeyboardArrowUpRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/KeyboardArrowUpOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/KeyboardArrowUpSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/KeyboardArrowUpTwoTone'))
    }
    case "KeyboardBackspace":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/KeyboardBackspaceRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/KeyboardBackspaceOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/KeyboardBackspaceSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/KeyboardBackspaceTwoTone'))
    }
    case "KeyboardCapslock":
      return {
      Rounded: lazy(() => import('@material-ui/icons/KeyboardCapslockRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/KeyboardCapslockOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/KeyboardCapslockSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/KeyboardCapslockTwoTone'))
    }
    case "KeyboardHide":
      return {
      Rounded: lazy(() => import('@material-ui/icons/KeyboardHideRounded')),
      Outlined: lazy(() => import('@material-ui/icons/KeyboardHideOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/KeyboardHideSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/KeyboardHideTwoTone'))
    }
    case "Keyboard":
      return {
      Rounded: lazy(() => import('@material-ui/icons/KeyboardRounded')),
      Outlined: lazy(() => import('@material-ui/icons/KeyboardOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/KeyboardSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/KeyboardTwoTone'))
    }
    case "KeyboardReturn":
      return {
      Rounded: lazy(() => import('@material-ui/icons/KeyboardReturnRounded')),
      Outlined: lazy(() => import('@material-ui/icons/KeyboardReturnOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/KeyboardReturnSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/KeyboardReturnTwoTone'))
    }
    case "KeyboardTab":
      return {
      Rounded: lazy(() => import('@material-ui/icons/KeyboardTabRounded')),
      Outlined: lazy(() => import('@material-ui/icons/KeyboardTabOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/KeyboardTabSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/KeyboardTabTwoTone'))
    }
    case "KeyboardVoice":
      return {
      Rounded: lazy(() => import('@material-ui/icons/KeyboardVoiceRounded')),
      Outlined: lazy(() => import('@material-ui/icons/KeyboardVoiceOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/KeyboardVoiceSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/KeyboardVoiceTwoTone'))
    }
    case "Kitchen":
      return {
      Rounded: lazy(() => import('@material-ui/icons/KitchenRounded')),
      Outlined: lazy(() => import('@material-ui/icons/KitchenOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/KitchenSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/KitchenTwoTone'))
    }
    case "LabelImportant":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LabelImportantRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LabelImportantOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LabelImportantSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LabelImportantTwoTone'))
    }
    case "LabelOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LabelOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LabelOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LabelOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LabelOffTwoTone'))
    }
    case "Label":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LabelRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LabelOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LabelSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LabelTwoTone'))
    }
    case "Landscape":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LandscapeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LandscapeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LandscapeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LandscapeTwoTone'))
    }
    case "Language":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LanguageRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LanguageOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LanguageSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LanguageTwoTone'))
    }
    case "LaptopChromebook":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LaptopChromebookRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/LaptopChromebookOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LaptopChromebookSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LaptopChromebookTwoTone'))
    }
    case "LaptopMac":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LaptopMacRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LaptopMacOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LaptopMacSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LaptopMacTwoTone'))
    }
    case "Laptop":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LaptopRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LaptopOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LaptopSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LaptopTwoTone'))
    }
    case "LaptopWindows":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LaptopWindowsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LaptopWindowsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LaptopWindowsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LaptopWindowsTwoTone'))
    }
    case "LastPage":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LastPageRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LastPageOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LastPageSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LastPageTwoTone'))
    }
    case "Launch":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LaunchRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LaunchOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LaunchSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LaunchTwoTone'))
    }
    case "LayersClear":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LayersClearRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LayersClearOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LayersClearSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LayersClearTwoTone'))
    }
    case "Layers":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LayersRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LayersOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LayersSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LayersTwoTone'))
    }
    case "LeakAdd":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LeakAddRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LeakAddOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LeakAddSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LeakAddTwoTone'))
    }
    case "LeakRemove":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LeakRemoveRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LeakRemoveOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LeakRemoveSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LeakRemoveTwoTone'))
    }
    case "Lens":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LensRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LensOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LensSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LensTwoTone'))
    }
    case "LibraryAdd":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LibraryAddRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LibraryAddOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LibraryAddSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LibraryAddTwoTone'))
    }
    case "LibraryBooks":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LibraryBooksRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LibraryBooksOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LibraryBooksSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LibraryBooksTwoTone'))
    }
    case "LibraryMusic":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LibraryMusicRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LibraryMusicOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LibraryMusicSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LibraryMusicTwoTone'))
    }
    case "LineStyle":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LineStyleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LineStyleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LineStyleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LineStyleTwoTone'))
    }
    case "LineWeight":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LineWeightRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LineWeightOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LineWeightSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LineWeightTwoTone'))
    }
    case "LinearScale":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LinearScaleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LinearScaleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LinearScaleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LinearScaleTwoTone'))
    }
    case "LinkOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LinkOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LinkOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LinkOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LinkOffTwoTone'))
    }
    case "Link":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LinkRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LinkOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LinkSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LinkTwoTone'))
    }
    case "LinkedCamera":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LinkedCameraRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LinkedCameraOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LinkedCameraSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LinkedCameraTwoTone'))
    }
    case "ListAlt":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ListAltRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ListAltOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ListAltSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ListAltTwoTone'))
    }
    case "List":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ListRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ListOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ListSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ListTwoTone'))
    }
    case "LiveHelp":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LiveHelpRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LiveHelpOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LiveHelpSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LiveHelpTwoTone'))
    }
    case "LiveTv":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LiveTvRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LiveTvOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LiveTvSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LiveTvTwoTone'))
    }
    case "LocalActivity":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalActivityRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalActivityOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalActivitySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalActivityTwoTone'))
    }
    case "LocalAirport":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalAirportRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalAirportOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalAirportSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalAirportTwoTone'))
    }
    case "LocalAtm":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalAtmRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalAtmOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalAtmSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalAtmTwoTone'))
    }
    case "LocalBar":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalBarRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalBarOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalBarSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalBarTwoTone'))
    }
    case "LocalCafe":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalCafeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalCafeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalCafeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalCafeTwoTone'))
    }
    case "LocalCarWash":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalCarWashRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalCarWashOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalCarWashSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalCarWashTwoTone'))
    }
    case "LocalConvenienceStore":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/LocalConvenienceStoreRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/LocalConvenienceStoreOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/LocalConvenienceStoreSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/LocalConvenienceStoreTwoTone'))
    }
    case "LocalDining":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalDiningRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalDiningOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalDiningSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalDiningTwoTone'))
    }
    case "LocalDrink":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalDrinkRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalDrinkOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalDrinkSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalDrinkTwoTone'))
    }
    case "LocalFlorist":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalFloristRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalFloristOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalFloristSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalFloristTwoTone'))
    }
    case "LocalGasStation":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalGasStationRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/LocalGasStationOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalGasStationSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalGasStationTwoTone'))
    }
    case "LocalGroceryStore":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/LocalGroceryStoreRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/LocalGroceryStoreOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalGroceryStoreSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalGroceryStoreTwoTone'))
    }
    case "LocalHospital":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalHospitalRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalHospitalOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalHospitalSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalHospitalTwoTone'))
    }
    case "LocalHotel":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalHotelRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalHotelOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalHotelSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalHotelTwoTone'))
    }
    case "LocalLaundryService":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/LocalLaundryServiceRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/LocalLaundryServiceOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalLaundryServiceSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/LocalLaundryServiceTwoTone'))
    }
    case "LocalLibrary":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalLibraryRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalLibraryOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalLibrarySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalLibraryTwoTone'))
    }
    case "LocalMall":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalMallRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalMallOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalMallSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalMallTwoTone'))
    }
    case "LocalMovies":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalMoviesRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalMoviesOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalMoviesSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalMoviesTwoTone'))
    }
    case "LocalOffer":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalOfferRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalOfferOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalOfferSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalOfferTwoTone'))
    }
    case "LocalParking":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalParkingRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalParkingOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalParkingSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalParkingTwoTone'))
    }
    case "LocalPharmacy":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalPharmacyRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalPharmacyOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalPharmacySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalPharmacyTwoTone'))
    }
    case "LocalPhone":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalPhoneRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalPhoneOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalPhoneSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalPhoneTwoTone'))
    }
    case "LocalPizza":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalPizzaRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalPizzaOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalPizzaSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalPizzaTwoTone'))
    }
    case "LocalPlay":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalPlayRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalPlayOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalPlaySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalPlayTwoTone'))
    }
    case "LocalPostOffice":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalPostOfficeRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/LocalPostOfficeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalPostOfficeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalPostOfficeTwoTone'))
    }
    case "LocalPrintshop":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalPrintshopRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalPrintshopOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalPrintshopSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalPrintshopTwoTone'))
    }
    case "LocalSee":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalSeeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalSeeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalSeeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalSeeTwoTone'))
    }
    case "LocalShipping":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalShippingRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalShippingOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalShippingSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalShippingTwoTone'))
    }
    case "LocalTaxi":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocalTaxiRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocalTaxiOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocalTaxiSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocalTaxiTwoTone'))
    }
    case "LocationCity":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocationCityRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocationCityOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocationCitySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocationCityTwoTone'))
    }
    case "LocationDisabled":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocationDisabledRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/LocationDisabledOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocationDisabledSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocationDisabledTwoTone'))
    }
    case "LocationOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocationOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocationOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocationOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocationOffTwoTone'))
    }
    case "LocationOn":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LocationOnRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LocationOnOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocationOnSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocationOnTwoTone'))
    }
    case "LocationSearching":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/LocationSearchingRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/LocationSearchingOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LocationSearchingSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LocationSearchingTwoTone'))
    }
    case "LockOpen":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LockOpenRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LockOpenOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LockOpenSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LockOpenTwoTone'))
    }
    case "Lock":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LockRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LockOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LockSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LockTwoTone'))
    }
    case "Looks3":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Looks3Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Looks3Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Looks3Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Looks3TwoTone'))
    }
    case "Looks4":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Looks4Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Looks4Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Looks4Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Looks4TwoTone'))
    }
    case "Looks5":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Looks5Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Looks5Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Looks5Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Looks5TwoTone'))
    }
    case "Looks6":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Looks6Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Looks6Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Looks6Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Looks6TwoTone'))
    }
    case "LooksOne":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LooksOneRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LooksOneOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LooksOneSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LooksOneTwoTone'))
    }
    case "Looks":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LooksRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LooksOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LooksSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LooksTwoTone'))
    }
    case "LooksTwo":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LooksTwoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LooksTwoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LooksTwoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LooksTwoTwoTone'))
    }
    case "Loop":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LoopRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LoopOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LoopSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LoopTwoTone'))
    }
    case "Loupe":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LoupeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LoupeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LoupeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LoupeTwoTone'))
    }
    case "LowPriority":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LowPriorityRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LowPriorityOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LowPrioritySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LowPriorityTwoTone'))
    }
    case "Loyalty":
      return {
      Rounded: lazy(() => import('@material-ui/icons/LoyaltyRounded')),
      Outlined: lazy(() => import('@material-ui/icons/LoyaltyOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/LoyaltySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/LoyaltyTwoTone'))
    }
    case "MailOutline":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MailOutlineRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MailOutlineOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MailOutlineSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MailOutlineTwoTone'))
    }
    case "Mail":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MailRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MailOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MailSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MailTwoTone'))
    }
    case "Map":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MapRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MapOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MapSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MapTwoTone'))
    }
    case "MarkunreadMailbox":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/MarkunreadMailboxRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/MarkunreadMailboxOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MarkunreadMailboxSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MarkunreadMailboxTwoTone'))
    }
    case "Markunread":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MarkunreadRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MarkunreadOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MarkunreadSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MarkunreadTwoTone'))
    }
    case "Maximize":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MaximizeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MaximizeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MaximizeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MaximizeTwoTone'))
    }
    case "MeetingRoom":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MeetingRoomRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MeetingRoomOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MeetingRoomSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MeetingRoomTwoTone'))
    }
    case "Memory":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MemoryRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MemoryOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MemorySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MemoryTwoTone'))
    }
    case "Menu":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MenuRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MenuOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MenuSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MenuTwoTone'))
    }
    case "MergeType":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MergeTypeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MergeTypeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MergeTypeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MergeTypeTwoTone'))
    }
    case "Message":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MessageRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MessageOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MessageSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MessageTwoTone'))
    }
    case "MicNone":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MicNoneRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MicNoneOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MicNoneSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MicNoneTwoTone'))
    }
    case "MicOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MicOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MicOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MicOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MicOffTwoTone'))
    }
    case "Mic":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MicRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MicOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MicSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MicTwoTone'))
    }
    case "Minimize":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MinimizeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MinimizeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MinimizeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MinimizeTwoTone'))
    }
    case "MissedVideoCall":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MissedVideoCallRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/MissedVideoCallOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MissedVideoCallSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MissedVideoCallTwoTone'))
    }
    case "Mms":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MmsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MmsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MmsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MmsTwoTone'))
    }
    case "MobileFriendly":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MobileFriendlyRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MobileFriendlyOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MobileFriendlySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MobileFriendlyTwoTone'))
    }
    case "MobileOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MobileOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MobileOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MobileOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MobileOffTwoTone'))
    }
    case "MobileScreenShare":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/MobileScreenShareRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/MobileScreenShareOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MobileScreenShareSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MobileScreenShareTwoTone'))
    }
    case "ModeComment":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ModeCommentRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ModeCommentOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ModeCommentSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ModeCommentTwoTone'))
    }
    case "MonetizationOn":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MonetizationOnRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MonetizationOnOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MonetizationOnSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MonetizationOnTwoTone'))
    }
    case "MoneyOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MoneyOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MoneyOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MoneyOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MoneyOffTwoTone'))
    }
    case "Money":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MoneyRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MoneyOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MoneySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MoneyTwoTone'))
    }
    case "MonochromePhotos":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MonochromePhotosRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/MonochromePhotosOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MonochromePhotosSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MonochromePhotosTwoTone'))
    }
    case "MoodBad":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MoodBadRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MoodBadOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MoodBadSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MoodBadTwoTone'))
    }
    case "Mood":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MoodRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MoodOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MoodSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MoodTwoTone'))
    }
    case "MoreHoriz":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MoreHorizRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MoreHorizOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MoreHorizSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MoreHorizTwoTone'))
    }
    case "More":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MoreRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MoreOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MoreSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MoreTwoTone'))
    }
    case "MoreVert":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MoreVertRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MoreVertOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MoreVertSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MoreVertTwoTone'))
    }
    case "Motorcycle":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MotorcycleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MotorcycleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MotorcycleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MotorcycleTwoTone'))
    }
    case "Mouse":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MouseRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MouseOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MouseSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MouseTwoTone'))
    }
    case "MoveToInbox":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MoveToInboxRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MoveToInboxOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MoveToInboxSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MoveToInboxTwoTone'))
    }
    case "MovieCreation":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MovieCreationRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MovieCreationOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MovieCreationSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MovieCreationTwoTone'))
    }
    case "MovieFilter":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MovieFilterRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MovieFilterOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MovieFilterSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MovieFilterTwoTone'))
    }
    case "Movie":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MovieRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MovieOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MovieSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MovieTwoTone'))
    }
    case "MultilineChart":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MultilineChartRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MultilineChartOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MultilineChartSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MultilineChartTwoTone'))
    }
    case "MusicNote":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MusicNoteRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MusicNoteOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MusicNoteSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MusicNoteTwoTone'))
    }
    case "MusicOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MusicOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MusicOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MusicOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MusicOffTwoTone'))
    }
    case "MusicVideo":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MusicVideoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MusicVideoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MusicVideoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MusicVideoTwoTone'))
    }
    case "MyLocation":
      return {
      Rounded: lazy(() => import('@material-ui/icons/MyLocationRounded')),
      Outlined: lazy(() => import('@material-ui/icons/MyLocationOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/MyLocationSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/MyLocationTwoTone'))
    }
    case "Nature":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NatureRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NatureOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NatureSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NatureTwoTone'))
    }
    case "NaturePeople":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NaturePeopleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NaturePeopleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NaturePeopleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NaturePeopleTwoTone'))
    }
    case "NavigateBefore":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NavigateBeforeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NavigateBeforeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NavigateBeforeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NavigateBeforeTwoTone'))
    }
    case "NavigateNext":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NavigateNextRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NavigateNextOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NavigateNextSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NavigateNextTwoTone'))
    }
    case "Navigation":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NavigationRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NavigationOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NavigationSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NavigationTwoTone'))
    }
    case "NearMe":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NearMeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NearMeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NearMeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NearMeTwoTone'))
    }
    case "NetworkCell":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NetworkCellRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NetworkCellOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NetworkCellSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NetworkCellTwoTone'))
    }
    case "NetworkCheck":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NetworkCheckRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NetworkCheckOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NetworkCheckSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NetworkCheckTwoTone'))
    }
    case "NetworkLocked":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NetworkLockedRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NetworkLockedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NetworkLockedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NetworkLockedTwoTone'))
    }
    case "NetworkWifi":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NetworkWifiRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NetworkWifiOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NetworkWifiSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NetworkWifiTwoTone'))
    }
    case "NewReleases":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NewReleasesRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NewReleasesOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NewReleasesSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NewReleasesTwoTone'))
    }
    case "NextWeek":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NextWeekRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NextWeekOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NextWeekSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NextWeekTwoTone'))
    }
    case "Nfc":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NfcRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NfcOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NfcSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NfcTwoTone'))
    }
    case "NoEncryption":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NoEncryptionRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NoEncryptionOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NoEncryptionSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NoEncryptionTwoTone'))
    }
    case "NoMeetingRoom":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NoMeetingRoomRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NoMeetingRoomOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NoMeetingRoomSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NoMeetingRoomTwoTone'))
    }
    case "NoSim":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NoSimRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NoSimOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NoSimSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NoSimTwoTone'))
    }
    case "NotInterested":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NotInterestedRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NotInterestedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NotInterestedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NotInterestedTwoTone'))
    }
    case "NotListedLocation":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/NotListedLocationRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/NotListedLocationOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NotListedLocationSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NotListedLocationTwoTone'))
    }
    case "NoteAdd":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NoteAddRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NoteAddOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NoteAddSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NoteAddTwoTone'))
    }
    case "Note":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NoteRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NoteOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NoteSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NoteTwoTone'))
    }
    case "Notes":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NotesRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NotesOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NotesSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NotesTwoTone'))
    }
    case "NotificationImportant":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/NotificationImportantRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/NotificationImportantOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/NotificationImportantSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/NotificationImportantTwoTone'))
    }
    case "NotificationsActive":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/NotificationsActiveRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/NotificationsActiveOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NotificationsActiveSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/NotificationsActiveTwoTone'))
    }
    case "NotificationsNone":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/NotificationsNoneRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/NotificationsNoneOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NotificationsNoneSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NotificationsNoneTwoTone'))
    }
    case "NotificationsOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NotificationsOffRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/NotificationsOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NotificationsOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NotificationsOffTwoTone'))
    }
    case "Notifications":
      return {
      Rounded: lazy(() => import('@material-ui/icons/NotificationsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/NotificationsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NotificationsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/NotificationsTwoTone'))
    }
    case "NotificationsPaused":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/NotificationsPausedRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/NotificationsPausedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/NotificationsPausedSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/NotificationsPausedTwoTone'))
    }
    case "OfflineBolt":
      return {
      Rounded: lazy(() => import('@material-ui/icons/OfflineBoltRounded')),
      Outlined: lazy(() => import('@material-ui/icons/OfflineBoltOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/OfflineBoltSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/OfflineBoltTwoTone'))
    }
    case "OfflinePin":
      return {
      Rounded: lazy(() => import('@material-ui/icons/OfflinePinRounded')),
      Outlined: lazy(() => import('@material-ui/icons/OfflinePinOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/OfflinePinSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/OfflinePinTwoTone'))
    }
    case "OndemandVideo":
      return {
      Rounded: lazy(() => import('@material-ui/icons/OndemandVideoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/OndemandVideoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/OndemandVideoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/OndemandVideoTwoTone'))
    }
    case "Opacity":
      return {
      Rounded: lazy(() => import('@material-ui/icons/OpacityRounded')),
      Outlined: lazy(() => import('@material-ui/icons/OpacityOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/OpacitySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/OpacityTwoTone'))
    }
    case "OpenInBrowser":
      return {
      Rounded: lazy(() => import('@material-ui/icons/OpenInBrowserRounded')),
      Outlined: lazy(() => import('@material-ui/icons/OpenInBrowserOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/OpenInBrowserSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/OpenInBrowserTwoTone'))
    }
    case "OpenInNew":
      return {
      Rounded: lazy(() => import('@material-ui/icons/OpenInNewRounded')),
      Outlined: lazy(() => import('@material-ui/icons/OpenInNewOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/OpenInNewSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/OpenInNewTwoTone'))
    }
    case "OpenWith":
      return {
      Rounded: lazy(() => import('@material-ui/icons/OpenWithRounded')),
      Outlined: lazy(() => import('@material-ui/icons/OpenWithOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/OpenWithSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/OpenWithTwoTone'))
    }
    case "OutlinedFlag":
      return {
      Rounded: lazy(() => import('@material-ui/icons/OutlinedFlagRounded')),
      Outlined: lazy(() => import('@material-ui/icons/OutlinedFlagOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/OutlinedFlagSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/OutlinedFlagTwoTone'))
    }
    case "Pages":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PagesRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PagesOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PagesSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PagesTwoTone'))
    }
    case "Pageview":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PageviewRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PageviewOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PageviewSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PageviewTwoTone'))
    }
    case "Palette":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PaletteRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PaletteOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PaletteSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PaletteTwoTone'))
    }
    case "PanTool":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PanToolRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PanToolOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PanToolSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PanToolTwoTone'))
    }
    case "PanoramaFishEye":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PanoramaFishEyeRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PanoramaFishEyeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PanoramaFishEyeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PanoramaFishEyeTwoTone'))
    }
    case "PanoramaHorizontal":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/PanoramaHorizontalRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PanoramaHorizontalOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PanoramaHorizontalSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/PanoramaHorizontalTwoTone'))
    }
    case "Panorama":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PanoramaRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PanoramaOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PanoramaSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PanoramaTwoTone'))
    }
    case "PanoramaVertical":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PanoramaVerticalRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PanoramaVerticalOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PanoramaVerticalSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PanoramaVerticalTwoTone'))
    }
    case "PanoramaWideAngle":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/PanoramaWideAngleRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PanoramaWideAngleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PanoramaWideAngleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PanoramaWideAngleTwoTone'))
    }
    case "PartyMode":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PartyModeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PartyModeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PartyModeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PartyModeTwoTone'))
    }
    case "PauseCircleFilled":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/PauseCircleFilledRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PauseCircleFilledOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PauseCircleFilledSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PauseCircleFilledTwoTone'))
    }
    case "PauseCircleOutline":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/PauseCircleOutlineRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PauseCircleOutlineOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PauseCircleOutlineSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/PauseCircleOutlineTwoTone'))
    }
    case "Pause":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PauseRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PauseOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PauseSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PauseTwoTone'))
    }
    case "PausePresentation":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/PausePresentationRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PausePresentationOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PausePresentationSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PausePresentationTwoTone'))
    }
    case "Payment":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PaymentRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PaymentOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PaymentSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PaymentTwoTone'))
    }
    case "PeopleOutline":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PeopleOutlineRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PeopleOutlineOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PeopleOutlineSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PeopleOutlineTwoTone'))
    }
    case "People":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PeopleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PeopleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PeopleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PeopleTwoTone'))
    }
    case "PermCameraMic":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PermCameraMicRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PermCameraMicOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PermCameraMicSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PermCameraMicTwoTone'))
    }
    case "PermContactCalendar":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/PermContactCalendarRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PermContactCalendarOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PermContactCalendarSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/PermContactCalendarTwoTone'))
    }
    case "PermDataSetting":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PermDataSettingRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PermDataSettingOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PermDataSettingSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PermDataSettingTwoTone'))
    }
    case "PermDeviceInformation":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/PermDeviceInformationRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PermDeviceInformationOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/PermDeviceInformationSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/PermDeviceInformationTwoTone'))
    }
    case "PermIdentity":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PermIdentityRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PermIdentityOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PermIdentitySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PermIdentityTwoTone'))
    }
    case "PermMedia":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PermMediaRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PermMediaOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PermMediaSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PermMediaTwoTone'))
    }
    case "PermPhoneMsg":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PermPhoneMsgRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PermPhoneMsgOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PermPhoneMsgSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PermPhoneMsgTwoTone'))
    }
    case "PermScanWifi":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PermScanWifiRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PermScanWifiOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PermScanWifiSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PermScanWifiTwoTone'))
    }
    case "PersonAddDisabled":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/PersonAddDisabledRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PersonAddDisabledOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PersonAddDisabledSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PersonAddDisabledTwoTone'))
    }
    case "PersonAdd":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PersonAddRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PersonAddOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PersonAddSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PersonAddTwoTone'))
    }
    case "PersonOutline":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PersonOutlineRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PersonOutlineOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PersonOutlineSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PersonOutlineTwoTone'))
    }
    case "Person":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PersonRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PersonOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PersonSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PersonTwoTone'))
    }
    case "PersonPinCircle":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PersonPinCircleRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PersonPinCircleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PersonPinCircleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PersonPinCircleTwoTone'))
    }
    case "PersonPin":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PersonPinRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PersonPinOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PersonPinSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PersonPinTwoTone'))
    }
    case "PersonalVideo":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PersonalVideoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PersonalVideoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PersonalVideoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PersonalVideoTwoTone'))
    }
    case "Pets":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PetsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PetsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PetsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PetsTwoTone'))
    }
    case "PhoneAndroid":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhoneAndroidRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhoneAndroidOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhoneAndroidSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhoneAndroidTwoTone'))
    }
    case "PhoneBluetoothSpeaker":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/PhoneBluetoothSpeakerRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PhoneBluetoothSpeakerOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/PhoneBluetoothSpeakerSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/PhoneBluetoothSpeakerTwoTone'))
    }
    case "PhoneCallback":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhoneCallbackRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhoneCallbackOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhoneCallbackSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhoneCallbackTwoTone'))
    }
    case "PhoneForwarded":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhoneForwardedRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhoneForwardedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhoneForwardedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhoneForwardedTwoTone'))
    }
    case "PhoneInTalk":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhoneInTalkRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhoneInTalkOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhoneInTalkSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhoneInTalkTwoTone'))
    }
    case "PhoneIphone":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhoneIphoneRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhoneIphoneOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhoneIphoneSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhoneIphoneTwoTone'))
    }
    case "PhoneLocked":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhoneLockedRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhoneLockedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhoneLockedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhoneLockedTwoTone'))
    }
    case "PhoneMissed":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhoneMissedRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhoneMissedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhoneMissedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhoneMissedTwoTone'))
    }
    case "Phone":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhoneRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhoneOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhoneSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhoneTwoTone'))
    }
    case "PhonePaused":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhonePausedRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhonePausedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhonePausedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhonePausedTwoTone'))
    }
    case "PhonelinkErase":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhonelinkEraseRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhonelinkEraseOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhonelinkEraseSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhonelinkEraseTwoTone'))
    }
    case "PhonelinkLock":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhonelinkLockRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhonelinkLockOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhonelinkLockSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhonelinkLockTwoTone'))
    }
    case "PhonelinkOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhonelinkOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhonelinkOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhonelinkOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhonelinkOffTwoTone'))
    }
    case "Phonelink":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhonelinkRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhonelinkOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhonelinkSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhonelinkTwoTone'))
    }
    case "PhonelinkRing":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhonelinkRingRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhonelinkRingOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhonelinkRingSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhonelinkRingTwoTone'))
    }
    case "PhonelinkSetup":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhonelinkSetupRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhonelinkSetupOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhonelinkSetupSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhonelinkSetupTwoTone'))
    }
    case "PhotoAlbum":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhotoAlbumRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhotoAlbumOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhotoAlbumSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhotoAlbumTwoTone'))
    }
    case "PhotoCamera":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhotoCameraRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhotoCameraOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhotoCameraSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhotoCameraTwoTone'))
    }
    case "PhotoFilter":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhotoFilterRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhotoFilterOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhotoFilterSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhotoFilterTwoTone'))
    }
    case "PhotoLibrary":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhotoLibraryRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhotoLibraryOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhotoLibrarySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhotoLibraryTwoTone'))
    }
    case "Photo":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PhotoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PhotoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhotoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PhotoTwoTone'))
    }
    case "PhotoSizeSelectActual":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/PhotoSizeSelectActualRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PhotoSizeSelectActualOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/PhotoSizeSelectActualSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/PhotoSizeSelectActualTwoTone'))
    }
    case "PhotoSizeSelectLarge":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/PhotoSizeSelectLargeRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PhotoSizeSelectLargeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhotoSizeSelectLargeSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/PhotoSizeSelectLargeTwoTone'))
    }
    case "PhotoSizeSelectSmall":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/PhotoSizeSelectSmallRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PhotoSizeSelectSmallOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PhotoSizeSelectSmallSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/PhotoSizeSelectSmallTwoTone'))
    }
    case "PictureAsPdf":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PictureAsPdfRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PictureAsPdfOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PictureAsPdfSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PictureAsPdfTwoTone'))
    }
    case "PictureInPictureAlt":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/PictureInPictureAltRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PictureInPictureAltOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PictureInPictureAltSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/PictureInPictureAltTwoTone'))
    }
    case "PictureInPicture":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PictureInPictureRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PictureInPictureOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PictureInPictureSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PictureInPictureTwoTone'))
    }
    case "PieChart":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PieChartRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PieChartOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PieChartSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PieChartTwoTone'))
    }
    case "PinDrop":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PinDropRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PinDropOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PinDropSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PinDropTwoTone'))
    }
    case "Place":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PlaceRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PlaceOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PlaceSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PlaceTwoTone'))
    }
    case "PlayArrow":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PlayArrowRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PlayArrowOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PlayArrowSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PlayArrowTwoTone'))
    }
    case "PlayCircleFilled":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PlayCircleFilledRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PlayCircleFilledOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PlayCircleFilledSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PlayCircleFilledTwoTone'))
    }
    case "PlayCircleFilledWhite":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/PlayCircleFilledWhiteRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PlayCircleFilledWhiteOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/PlayCircleFilledWhiteSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/PlayCircleFilledWhiteTwoTone'))
    }
    case "PlayCircleOutline":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/PlayCircleOutlineRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PlayCircleOutlineOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PlayCircleOutlineSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PlayCircleOutlineTwoTone'))
    }
    case "PlayForWork":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PlayForWorkRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PlayForWorkOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PlayForWorkSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PlayForWorkTwoTone'))
    }
    case "PlaylistAddCheck":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PlaylistAddCheckRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PlaylistAddCheckOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PlaylistAddCheckSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PlaylistAddCheckTwoTone'))
    }
    case "PlaylistAdd":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PlaylistAddRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PlaylistAddOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PlaylistAddSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PlaylistAddTwoTone'))
    }
    case "PlaylistPlay":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PlaylistPlayRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PlaylistPlayOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PlaylistPlaySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PlaylistPlayTwoTone'))
    }
    case "PlusOne":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PlusOneRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PlusOneOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PlusOneSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PlusOneTwoTone'))
    }
    case "Poll":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PollRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PollOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PollSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PollTwoTone'))
    }
    case "Polymer":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PolymerRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PolymerOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PolymerSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PolymerTwoTone'))
    }
    case "Pool":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PoolRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PoolOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PoolSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PoolTwoTone'))
    }
    case "PortableWifiOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PortableWifiOffRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PortableWifiOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PortableWifiOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PortableWifiOffTwoTone'))
    }
    case "Portrait":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PortraitRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PortraitOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PortraitSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PortraitTwoTone'))
    }
    case "PowerInput":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PowerInputRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PowerInputOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PowerInputSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PowerInputTwoTone'))
    }
    case "PowerOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PowerOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PowerOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PowerOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PowerOffTwoTone'))
    }
    case "Power":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PowerRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PowerOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PowerSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PowerTwoTone'))
    }
    case "PowerSettingsNew":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PowerSettingsNewRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/PowerSettingsNewOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PowerSettingsNewSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PowerSettingsNewTwoTone'))
    }
    case "PregnantWoman":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PregnantWomanRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PregnantWomanOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PregnantWomanSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PregnantWomanTwoTone'))
    }
    case "PresentToAll":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PresentToAllRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PresentToAllOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PresentToAllSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PresentToAllTwoTone'))
    }
    case "PrintDisabled":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PrintDisabledRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PrintDisabledOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PrintDisabledSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PrintDisabledTwoTone'))
    }
    case "Print":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PrintRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PrintOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PrintSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PrintTwoTone'))
    }
    case "PriorityHigh":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PriorityHighRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PriorityHighOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PriorityHighSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PriorityHighTwoTone'))
    }
    case "Public":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PublicRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PublicOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PublicSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PublicTwoTone'))
    }
    case "Publish":
      return {
      Rounded: lazy(() => import('@material-ui/icons/PublishRounded')),
      Outlined: lazy(() => import('@material-ui/icons/PublishOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/PublishSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/PublishTwoTone'))
    }
    case "QueryBuilder":
      return {
      Rounded: lazy(() => import('@material-ui/icons/QueryBuilderRounded')),
      Outlined: lazy(() => import('@material-ui/icons/QueryBuilderOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/QueryBuilderSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/QueryBuilderTwoTone'))
    }
    case "QuestionAnswer":
      return {
      Rounded: lazy(() => import('@material-ui/icons/QuestionAnswerRounded')),
      Outlined: lazy(() => import('@material-ui/icons/QuestionAnswerOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/QuestionAnswerSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/QuestionAnswerTwoTone'))
    }
    case "QueueMusic":
      return {
      Rounded: lazy(() => import('@material-ui/icons/QueueMusicRounded')),
      Outlined: lazy(() => import('@material-ui/icons/QueueMusicOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/QueueMusicSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/QueueMusicTwoTone'))
    }
    case "Queue":
      return {
      Rounded: lazy(() => import('@material-ui/icons/QueueRounded')),
      Outlined: lazy(() => import('@material-ui/icons/QueueOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/QueueSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/QueueTwoTone'))
    }
    case "QueuePlayNext":
      return {
      Rounded: lazy(() => import('@material-ui/icons/QueuePlayNextRounded')),
      Outlined: lazy(() => import('@material-ui/icons/QueuePlayNextOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/QueuePlayNextSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/QueuePlayNextTwoTone'))
    }
    case "RadioButtonChecked":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/RadioButtonCheckedRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/RadioButtonCheckedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RadioButtonCheckedSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/RadioButtonCheckedTwoTone'))
    }
    case "RadioButtonUnchecked":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/RadioButtonUncheckedRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/RadioButtonUncheckedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RadioButtonUncheckedSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/RadioButtonUncheckedTwoTone'))
    }
    case "Radio":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RadioRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RadioOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RadioSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RadioTwoTone'))
    }
    case "RateReview":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RateReviewRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RateReviewOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RateReviewSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RateReviewTwoTone'))
    }
    case "Receipt":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ReceiptRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ReceiptOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ReceiptSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ReceiptTwoTone'))
    }
    case "RecentActors":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RecentActorsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RecentActorsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RecentActorsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RecentActorsTwoTone'))
    }
    case "RecordVoiceOver":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RecordVoiceOverRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/RecordVoiceOverOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RecordVoiceOverSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RecordVoiceOverTwoTone'))
    }
    case "Redeem":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RedeemRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RedeemOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RedeemSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RedeemTwoTone'))
    }
    case "Redo":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RedoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RedoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RedoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RedoTwoTone'))
    }
    case "Refresh":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RefreshRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RefreshOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RefreshSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RefreshTwoTone'))
    }
    case "RemoveCircleOutline":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/RemoveCircleOutlineRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/RemoveCircleOutlineOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RemoveCircleOutlineSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/RemoveCircleOutlineTwoTone'))
    }
    case "RemoveCircle":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RemoveCircleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RemoveCircleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RemoveCircleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RemoveCircleTwoTone'))
    }
    case "RemoveFromQueue":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RemoveFromQueueRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/RemoveFromQueueOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RemoveFromQueueSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RemoveFromQueueTwoTone'))
    }
    case "Remove":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RemoveRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RemoveOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RemoveSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RemoveTwoTone'))
    }
    case "RemoveRedEye":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RemoveRedEyeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RemoveRedEyeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RemoveRedEyeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RemoveRedEyeTwoTone'))
    }
    case "RemoveShoppingCart":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/RemoveShoppingCartRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/RemoveShoppingCartOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RemoveShoppingCartSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/RemoveShoppingCartTwoTone'))
    }
    case "Reorder":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ReorderRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ReorderOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ReorderSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ReorderTwoTone'))
    }
    case "RepeatOne":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RepeatOneRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RepeatOneOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RepeatOneSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RepeatOneTwoTone'))
    }
    case "Repeat":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RepeatRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RepeatOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RepeatSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RepeatTwoTone'))
    }
    case "Replay10":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Replay10Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Replay10Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Replay10Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Replay10TwoTone'))
    }
    case "Replay30":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Replay30Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Replay30Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Replay30Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Replay30TwoTone'))
    }
    case "Replay5":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Replay5Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Replay5Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Replay5Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Replay5TwoTone'))
    }
    case "Replay":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ReplayRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ReplayOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ReplaySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ReplayTwoTone'))
    }
    case "ReplyAll":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ReplyAllRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ReplyAllOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ReplyAllSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ReplyAllTwoTone'))
    }
    case "Reply":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ReplyRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ReplyOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ReplySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ReplyTwoTone'))
    }
    case "ReportOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ReportOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ReportOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ReportOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ReportOffTwoTone'))
    }
    case "Report":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ReportRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ReportOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ReportSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ReportTwoTone'))
    }
    case "ReportProblem":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ReportProblemRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ReportProblemOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ReportProblemSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ReportProblemTwoTone'))
    }
    case "RestaurantMenu":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RestaurantMenuRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RestaurantMenuOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RestaurantMenuSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RestaurantMenuTwoTone'))
    }
    case "Restaurant":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RestaurantRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RestaurantOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RestaurantSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RestaurantTwoTone'))
    }
    case "RestoreFromTrash":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RestoreFromTrashRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/RestoreFromTrashOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RestoreFromTrashSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RestoreFromTrashTwoTone'))
    }
    case "Restore":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RestoreRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RestoreOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RestoreSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RestoreTwoTone'))
    }
    case "RestorePage":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RestorePageRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RestorePageOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RestorePageSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RestorePageTwoTone'))
    }
    case "RingVolume":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RingVolumeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RingVolumeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RingVolumeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RingVolumeTwoTone'))
    }
    case "Room":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RoomRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RoomOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RoomSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RoomTwoTone'))
    }
    case "RoomService":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RoomServiceRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RoomServiceOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RoomServiceSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RoomServiceTwoTone'))
    }
    case "Rotate90DegreesCcw":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/Rotate90DegreesCcwRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/Rotate90DegreesCcwOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/Rotate90DegreesCcwSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/Rotate90DegreesCcwTwoTone'))
    }
    case "RotateLeft":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RotateLeftRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RotateLeftOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RotateLeftSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RotateLeftTwoTone'))
    }
    case "RotateRight":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RotateRightRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RotateRightOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RotateRightSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RotateRightTwoTone'))
    }
    case "Router":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RouterRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RouterOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RouterSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RouterTwoTone'))
    }
    case "Rowing":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RowingRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RowingOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RowingSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RowingTwoTone'))
    }
    case "RssFeed":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RssFeedRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RssFeedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RssFeedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RssFeedTwoTone'))
    }
    case "RvHookup":
      return {
      Rounded: lazy(() => import('@material-ui/icons/RvHookupRounded')),
      Outlined: lazy(() => import('@material-ui/icons/RvHookupOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/RvHookupSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/RvHookupTwoTone'))
    }
    case "Satellite":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SatelliteRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SatelliteOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SatelliteSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SatelliteTwoTone'))
    }
    case "SaveAlt":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SaveAltRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SaveAltOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SaveAltSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SaveAltTwoTone'))
    }
    case "Save":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SaveRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SaveOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SaveSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SaveTwoTone'))
    }
    case "Scanner":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ScannerRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ScannerOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ScannerSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ScannerTwoTone'))
    }
    case "ScatterPlot":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ScatterPlotRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ScatterPlotOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ScatterPlotSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ScatterPlotTwoTone'))
    }
    case "Schedule":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ScheduleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ScheduleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ScheduleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ScheduleTwoTone'))
    }
    case "School":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SchoolRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SchoolOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SchoolSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SchoolTwoTone'))
    }
    case "Score":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ScoreRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ScoreOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ScoreSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ScoreTwoTone'))
    }
    case "ScreenLockLandscape":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/ScreenLockLandscapeRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/ScreenLockLandscapeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ScreenLockLandscapeSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/ScreenLockLandscapeTwoTone'))
    }
    case "ScreenLockPortrait":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/ScreenLockPortraitRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/ScreenLockPortraitOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ScreenLockPortraitSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/ScreenLockPortraitTwoTone'))
    }
    case "ScreenLockRotation":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/ScreenLockRotationRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/ScreenLockRotationOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ScreenLockRotationSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/ScreenLockRotationTwoTone'))
    }
    case "ScreenRotation":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ScreenRotationRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ScreenRotationOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ScreenRotationSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ScreenRotationTwoTone'))
    }
    case "ScreenShare":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ScreenShareRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ScreenShareOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ScreenShareSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ScreenShareTwoTone'))
    }
    case "SdCard":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SdCardRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SdCardOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SdCardSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SdCardTwoTone'))
    }
    case "SdStorage":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SdStorageRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SdStorageOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SdStorageSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SdStorageTwoTone'))
    }
    case "Search":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SearchRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SearchOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SearchSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SearchTwoTone'))
    }
    case "Security":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SecurityRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SecurityOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SecuritySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SecurityTwoTone'))
    }
    case "SelectAll":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SelectAllRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SelectAllOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SelectAllSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SelectAllTwoTone'))
    }
    case "Send":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SendRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SendOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SendSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SendTwoTone'))
    }
    case "SentimentDissatisfied":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SentimentDissatisfiedRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SentimentDissatisfiedOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/SentimentDissatisfiedSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SentimentDissatisfiedTwoTone'))
    }
    case "SentimentSatisfiedAlt":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SentimentSatisfiedAltRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SentimentSatisfiedAltOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/SentimentSatisfiedAltSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SentimentSatisfiedAltTwoTone'))
    }
    case "SentimentSatisfied":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SentimentSatisfiedRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SentimentSatisfiedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SentimentSatisfiedSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SentimentSatisfiedTwoTone'))
    }
    case "SentimentVeryDissatisfied":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SentimentVeryDissatisfiedRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SentimentVeryDissatisfiedOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/SentimentVeryDissatisfiedSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SentimentVeryDissatisfiedTwoTone'))
    }
    case "SentimentVerySatisfied":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SentimentVerySatisfiedRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SentimentVerySatisfiedOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/SentimentVerySatisfiedSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SentimentVerySatisfiedTwoTone'))
    }
    case "SettingsApplications":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SettingsApplicationsRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SettingsApplicationsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SettingsApplicationsSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SettingsApplicationsTwoTone'))
    }
    case "SettingsBackupRestore":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SettingsBackupRestoreRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SettingsBackupRestoreOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/SettingsBackupRestoreSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SettingsBackupRestoreTwoTone'))
    }
    case "SettingsBluetooth":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SettingsBluetoothRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SettingsBluetoothOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SettingsBluetoothSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SettingsBluetoothTwoTone'))
    }
    case "SettingsBrightness":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SettingsBrightnessRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SettingsBrightnessOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SettingsBrightnessSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SettingsBrightnessTwoTone'))
    }
    case "SettingsCell":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SettingsCellRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SettingsCellOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SettingsCellSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SettingsCellTwoTone'))
    }
    case "SettingsEthernet":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SettingsEthernetRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SettingsEthernetOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SettingsEthernetSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SettingsEthernetTwoTone'))
    }
    case "SettingsInputAntenna":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SettingsInputAntennaRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SettingsInputAntennaOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SettingsInputAntennaSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SettingsInputAntennaTwoTone'))
    }
    case "SettingsInputComponent":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SettingsInputComponentRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SettingsInputComponentOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/SettingsInputComponentSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SettingsInputComponentTwoTone'))
    }
    case "SettingsInputComposite":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SettingsInputCompositeRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SettingsInputCompositeOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/SettingsInputCompositeSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SettingsInputCompositeTwoTone'))
    }
    case "SettingsInputHdmi":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SettingsInputHdmiRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SettingsInputHdmiOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SettingsInputHdmiSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SettingsInputHdmiTwoTone'))
    }
    case "SettingsInputSvideo":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SettingsInputSvideoRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SettingsInputSvideoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SettingsInputSvideoSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SettingsInputSvideoTwoTone'))
    }
    case "Settings":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SettingsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SettingsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SettingsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SettingsTwoTone'))
    }
    case "SettingsOverscan":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SettingsOverscanRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SettingsOverscanOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SettingsOverscanSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SettingsOverscanTwoTone'))
    }
    case "SettingsPhone":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SettingsPhoneRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SettingsPhoneOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SettingsPhoneSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SettingsPhoneTwoTone'))
    }
    case "SettingsPower":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SettingsPowerRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SettingsPowerOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SettingsPowerSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SettingsPowerTwoTone'))
    }
    case "SettingsRemote":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SettingsRemoteRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SettingsRemoteOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SettingsRemoteSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SettingsRemoteTwoTone'))
    }
    case "SettingsSystemDaydream":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SettingsSystemDaydreamRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SettingsSystemDaydreamOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/SettingsSystemDaydreamSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SettingsSystemDaydreamTwoTone'))
    }
    case "SettingsVoice":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SettingsVoiceRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SettingsVoiceOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SettingsVoiceSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SettingsVoiceTwoTone'))
    }
    case "Share":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ShareRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ShareOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ShareSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ShareTwoTone'))
    }
    case "Shop":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ShopRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ShopOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ShopSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ShopTwoTone'))
    }
    case "ShopTwo":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ShopTwoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ShopTwoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ShopTwoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ShopTwoTwoTone'))
    }
    case "ShoppingBasket":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ShoppingBasketRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ShoppingBasketOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ShoppingBasketSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ShoppingBasketTwoTone'))
    }
    case "ShoppingCart":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ShoppingCartRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ShoppingCartOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ShoppingCartSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ShoppingCartTwoTone'))
    }
    case "ShortText":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ShortTextRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ShortTextOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ShortTextSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ShortTextTwoTone'))
    }
    case "ShowChart":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ShowChartRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ShowChartOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ShowChartSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ShowChartTwoTone'))
    }
    case "Shuffle":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ShuffleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ShuffleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ShuffleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ShuffleTwoTone'))
    }
    case "ShutterSpeed":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ShutterSpeedRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ShutterSpeedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ShutterSpeedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ShutterSpeedTwoTone'))
    }
    case "SignalCellular0Bar":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalCellular0BarRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalCellular0BarOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalCellular0BarSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SignalCellular0BarTwoTone'))
    }
    case "SignalCellular1Bar":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalCellular1BarRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalCellular1BarOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalCellular1BarSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SignalCellular1BarTwoTone'))
    }
    case "SignalCellular2Bar":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalCellular2BarRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalCellular2BarOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalCellular2BarSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SignalCellular2BarTwoTone'))
    }
    case "SignalCellular3Bar":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalCellular3BarRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalCellular3BarOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalCellular3BarSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SignalCellular3BarTwoTone'))
    }
    case "SignalCellular4Bar":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalCellular4BarRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalCellular4BarOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalCellular4BarSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SignalCellular4BarTwoTone'))
    }
    case "SignalCellularAlt":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalCellularAltRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalCellularAltOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalCellularAltSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SignalCellularAltTwoTone'))
    }
    case "SignalCellularConnectedNoInternet0Bar":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet0BarRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet0BarOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet0BarSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet0BarTwoTone'))
    }
    case "SignalCellularConnectedNoInternet1Bar":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet1BarRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet1BarOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet1BarSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet1BarTwoTone'))
    }
    case "SignalCellularConnectedNoInternet2Bar":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet2BarRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet2BarOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet2BarSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet2BarTwoTone'))
    }
    case "SignalCellularConnectedNoInternet3Bar":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet3BarRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet3BarOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet3BarSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet3BarTwoTone'))
    }
    case "SignalCellularConnectedNoInternet4Bar":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet4BarRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet4BarOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet4BarSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SignalCellularConnectedNoInternet4BarTwoTone'))
    }
    case "SignalCellularNoSim":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalCellularNoSimRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalCellularNoSimOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalCellularNoSimSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SignalCellularNoSimTwoTone'))
    }
    case "SignalCellularNull":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalCellularNullRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalCellularNullOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalCellularNullSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SignalCellularNullTwoTone'))
    }
    case "SignalCellularOff":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalCellularOffRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalCellularOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalCellularOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SignalCellularOffTwoTone'))
    }
    case "SignalWifi0Bar":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SignalWifi0BarRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SignalWifi0BarOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalWifi0BarSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SignalWifi0BarTwoTone'))
    }
    case "SignalWifi1BarLock":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalWifi1BarLockRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalWifi1BarLockOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalWifi1BarLockSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SignalWifi1BarLockTwoTone'))
    }
    case "SignalWifi1Bar":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SignalWifi1BarRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SignalWifi1BarOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalWifi1BarSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SignalWifi1BarTwoTone'))
    }
    case "SignalWifi2BarLock":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalWifi2BarLockRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalWifi2BarLockOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalWifi2BarLockSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SignalWifi2BarLockTwoTone'))
    }
    case "SignalWifi2Bar":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SignalWifi2BarRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SignalWifi2BarOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalWifi2BarSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SignalWifi2BarTwoTone'))
    }
    case "SignalWifi3BarLock":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalWifi3BarLockRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalWifi3BarLockOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalWifi3BarLockSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SignalWifi3BarLockTwoTone'))
    }
    case "SignalWifi3Bar":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SignalWifi3BarRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SignalWifi3BarOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalWifi3BarSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SignalWifi3BarTwoTone'))
    }
    case "SignalWifi4BarLock":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SignalWifi4BarLockRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SignalWifi4BarLockOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalWifi4BarLockSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SignalWifi4BarLockTwoTone'))
    }
    case "SignalWifi4Bar":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SignalWifi4BarRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SignalWifi4BarOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalWifi4BarSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SignalWifi4BarTwoTone'))
    }
    case "SignalWifiOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SignalWifiOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SignalWifiOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SignalWifiOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SignalWifiOffTwoTone'))
    }
    case "SimCard":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SimCardRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SimCardOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SimCardSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SimCardTwoTone'))
    }
    case "SkipNext":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SkipNextRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SkipNextOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SkipNextSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SkipNextTwoTone'))
    }
    case "SkipPrevious":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SkipPreviousRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SkipPreviousOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SkipPreviousSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SkipPreviousTwoTone'))
    }
    case "Slideshow":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SlideshowRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SlideshowOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SlideshowSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SlideshowTwoTone'))
    }
    case "SlowMotionVideo":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SlowMotionVideoRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SlowMotionVideoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SlowMotionVideoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SlowMotionVideoTwoTone'))
    }
    case "Smartphone":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SmartphoneRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SmartphoneOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SmartphoneSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SmartphoneTwoTone'))
    }
    case "SmokeFree":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SmokeFreeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SmokeFreeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SmokeFreeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SmokeFreeTwoTone'))
    }
    case "SmokingRooms":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SmokingRoomsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SmokingRoomsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SmokingRoomsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SmokingRoomsTwoTone'))
    }
    case "SmsFailed":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SmsFailedRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SmsFailedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SmsFailedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SmsFailedTwoTone'))
    }
    case "Sms":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SmsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SmsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SmsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SmsTwoTone'))
    }
    case "Snooze":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SnoozeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SnoozeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SnoozeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SnoozeTwoTone'))
    }
    case "SortByAlpha":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SortByAlphaRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SortByAlphaOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SortByAlphaSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SortByAlphaTwoTone'))
    }
    case "Sort":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SortRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SortOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SortSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SortTwoTone'))
    }
    case "Spa":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SpaRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SpaOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SpaSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SpaTwoTone'))
    }
    case "SpaceBar":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SpaceBarRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SpaceBarOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SpaceBarSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SpaceBarTwoTone'))
    }
    case "SpeakerGroup":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SpeakerGroupRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SpeakerGroupOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SpeakerGroupSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SpeakerGroupTwoTone'))
    }
    case "SpeakerNotesOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SpeakerNotesOffRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SpeakerNotesOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SpeakerNotesOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SpeakerNotesOffTwoTone'))
    }
    case "SpeakerNotes":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SpeakerNotesRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SpeakerNotesOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SpeakerNotesSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SpeakerNotesTwoTone'))
    }
    case "Speaker":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SpeakerRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SpeakerOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SpeakerSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SpeakerTwoTone'))
    }
    case "SpeakerPhone":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SpeakerPhoneRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SpeakerPhoneOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SpeakerPhoneSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SpeakerPhoneTwoTone'))
    }
    case "Spellcheck":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SpellcheckRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SpellcheckOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SpellcheckSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SpellcheckTwoTone'))
    }
    case "StarBorder":
      return {
      Rounded: lazy(() => import('@material-ui/icons/StarBorderRounded')),
      Outlined: lazy(() => import('@material-ui/icons/StarBorderOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StarBorderSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/StarBorderTwoTone'))
    }
    case "StarHalf":
      return {
      Rounded: lazy(() => import('@material-ui/icons/StarHalfRounded')),
      Outlined: lazy(() => import('@material-ui/icons/StarHalfOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StarHalfSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/StarHalfTwoTone'))
    }
    case "Star":
      return {
      Rounded: lazy(() => import('@material-ui/icons/StarRounded')),
      Outlined: lazy(() => import('@material-ui/icons/StarOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StarSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/StarTwoTone'))
    }
    case "StarRate":
      return {
      Rounded: lazy(() => import('@material-ui/icons/StarRateRounded')),
      Outlined: lazy(() => import('@material-ui/icons/StarRateOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StarRateSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/StarRateTwoTone'))
    }
    case "Stars":
      return {
      Rounded: lazy(() => import('@material-ui/icons/StarsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/StarsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StarsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/StarsTwoTone'))
    }
    case "StayCurrentLandscape":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/StayCurrentLandscapeRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/StayCurrentLandscapeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StayCurrentLandscapeSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/StayCurrentLandscapeTwoTone'))
    }
    case "StayCurrentPortrait":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/StayCurrentPortraitRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/StayCurrentPortraitOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StayCurrentPortraitSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/StayCurrentPortraitTwoTone'))
    }
    case "StayPrimaryLandscape":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/StayPrimaryLandscapeRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/StayPrimaryLandscapeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StayPrimaryLandscapeSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/StayPrimaryLandscapeTwoTone'))
    }
    case "StayPrimaryPortrait":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/StayPrimaryPortraitRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/StayPrimaryPortraitOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StayPrimaryPortraitSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/StayPrimaryPortraitTwoTone'))
    }
    case "Stop":
      return {
      Rounded: lazy(() => import('@material-ui/icons/StopRounded')),
      Outlined: lazy(() => import('@material-ui/icons/StopOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StopSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/StopTwoTone'))
    }
    case "StopScreenShare":
      return {
      Rounded: lazy(() => import('@material-ui/icons/StopScreenShareRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/StopScreenShareOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StopScreenShareSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/StopScreenShareTwoTone'))
    }
    case "Storage":
      return {
      Rounded: lazy(() => import('@material-ui/icons/StorageRounded')),
      Outlined: lazy(() => import('@material-ui/icons/StorageOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StorageSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/StorageTwoTone'))
    }
    case "StoreMallDirectory":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/StoreMallDirectoryRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/StoreMallDirectoryOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StoreMallDirectorySharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/StoreMallDirectoryTwoTone'))
    }
    case "Store":
      return {
      Rounded: lazy(() => import('@material-ui/icons/StoreRounded')),
      Outlined: lazy(() => import('@material-ui/icons/StoreOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StoreSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/StoreTwoTone'))
    }
    case "Straighten":
      return {
      Rounded: lazy(() => import('@material-ui/icons/StraightenRounded')),
      Outlined: lazy(() => import('@material-ui/icons/StraightenOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StraightenSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/StraightenTwoTone'))
    }
    case "Streetview":
      return {
      Rounded: lazy(() => import('@material-ui/icons/StreetviewRounded')),
      Outlined: lazy(() => import('@material-ui/icons/StreetviewOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StreetviewSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/StreetviewTwoTone'))
    }
    case "StrikethroughS":
      return {
      Rounded: lazy(() => import('@material-ui/icons/StrikethroughSRounded')),
      Outlined: lazy(() => import('@material-ui/icons/StrikethroughSOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StrikethroughSSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/StrikethroughSTwoTone'))
    }
    case "Style":
      return {
      Rounded: lazy(() => import('@material-ui/icons/StyleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/StyleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/StyleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/StyleTwoTone'))
    }
    case "SubdirectoryArrowLeft":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SubdirectoryArrowLeftRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SubdirectoryArrowLeftOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/SubdirectoryArrowLeftSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SubdirectoryArrowLeftTwoTone'))
    }
    case "SubdirectoryArrowRight":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SubdirectoryArrowRightRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SubdirectoryArrowRightOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/SubdirectoryArrowRightSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SubdirectoryArrowRightTwoTone'))
    }
    case "Subject":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SubjectRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SubjectOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SubjectSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SubjectTwoTone'))
    }
    case "Subscriptions":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SubscriptionsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SubscriptionsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SubscriptionsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SubscriptionsTwoTone'))
    }
    case "Subtitles":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SubtitlesRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SubtitlesOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SubtitlesSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SubtitlesTwoTone'))
    }
    case "Subway":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SubwayRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SubwayOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SubwaySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SubwayTwoTone'))
    }
    case "SupervisedUserCircle":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SupervisedUserCircleRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SupervisedUserCircleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SupervisedUserCircleSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SupervisedUserCircleTwoTone'))
    }
    case "SupervisorAccount":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SupervisorAccountRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SupervisorAccountOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SupervisorAccountSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SupervisorAccountTwoTone'))
    }
    case "SurroundSound":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SurroundSoundRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SurroundSoundOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SurroundSoundSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SurroundSoundTwoTone'))
    }
    case "SwapCalls":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SwapCallsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SwapCallsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SwapCallsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SwapCallsTwoTone'))
    }
    case "SwapHoriz":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SwapHorizRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SwapHorizOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SwapHorizSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SwapHorizTwoTone'))
    }
    case "SwapHorizontalCircle":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SwapHorizontalCircleRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SwapHorizontalCircleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SwapHorizontalCircleSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SwapHorizontalCircleTwoTone'))
    }
    case "SwapVert":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SwapVertRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SwapVertOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SwapVertSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SwapVertTwoTone'))
    }
    case "SwapVerticalCircle":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/SwapVerticalCircleRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/SwapVerticalCircleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SwapVerticalCircleSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/SwapVerticalCircleTwoTone'))
    }
    case "SwitchCamera":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SwitchCameraRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SwitchCameraOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SwitchCameraSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SwitchCameraTwoTone'))
    }
    case "SwitchVideo":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SwitchVideoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SwitchVideoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SwitchVideoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SwitchVideoTwoTone'))
    }
    case "SyncDisabled":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SyncDisabledRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SyncDisabledOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SyncDisabledSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SyncDisabledTwoTone'))
    }
    case "Sync":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SyncRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SyncOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SyncSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SyncTwoTone'))
    }
    case "SyncProblem":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SyncProblemRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SyncProblemOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SyncProblemSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SyncProblemTwoTone'))
    }
    case "SystemUpdate":
      return {
      Rounded: lazy(() => import('@material-ui/icons/SystemUpdateRounded')),
      Outlined: lazy(() => import('@material-ui/icons/SystemUpdateOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/SystemUpdateSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/SystemUpdateTwoTone'))
    }
    case "Tab":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TabRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TabOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TabSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TabTwoTone'))
    }
    case "TabUnselected":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TabUnselectedRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TabUnselectedOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TabUnselectedSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TabUnselectedTwoTone'))
    }
    case "TableChart":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TableChartRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TableChartOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TableChartSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TableChartTwoTone'))
    }
    case "TabletAndroid":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TabletAndroidRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TabletAndroidOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TabletAndroidSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TabletAndroidTwoTone'))
    }
    case "TabletMac":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TabletMacRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TabletMacOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TabletMacSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TabletMacTwoTone'))
    }
    case "Tablet":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TabletRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TabletOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TabletSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TabletTwoTone'))
    }
    case "TagFaces":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TagFacesRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TagFacesOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TagFacesSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TagFacesTwoTone'))
    }
    case "TapAndPlay":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TapAndPlayRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TapAndPlayOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TapAndPlaySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TapAndPlayTwoTone'))
    }
    case "Terrain":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TerrainRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TerrainOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TerrainSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TerrainTwoTone'))
    }
    case "TextFields":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TextFieldsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TextFieldsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TextFieldsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TextFieldsTwoTone'))
    }
    case "TextFormat":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TextFormatRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TextFormatOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TextFormatSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TextFormatTwoTone'))
    }
    case "TextRotateUp":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TextRotateUpRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TextRotateUpOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TextRotateUpSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TextRotateUpTwoTone'))
    }
    case "TextRotateVertical":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/TextRotateVerticalRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/TextRotateVerticalOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TextRotateVerticalSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/TextRotateVerticalTwoTone'))
    }
    case "TextRotationDown":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TextRotationDownRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/TextRotationDownOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TextRotationDownSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TextRotationDownTwoTone'))
    }
    case "TextRotationNone":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TextRotationNoneRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/TextRotationNoneOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TextRotationNoneSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TextRotationNoneTwoTone'))
    }
    case "Textsms":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TextsmsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TextsmsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TextsmsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TextsmsTwoTone'))
    }
    case "Texture":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TextureRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TextureOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TextureSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TextureTwoTone'))
    }
    case "Theaters":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TheatersRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TheatersOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TheatersSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TheatersTwoTone'))
    }
    case "ThreeDRotation":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ThreeDRotationRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ThreeDRotationOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ThreeDRotationSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ThreeDRotationTwoTone'))
    }
    case "ThreeSixty":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ThreeSixtyRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ThreeSixtyOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ThreeSixtySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ThreeSixtyTwoTone'))
    }
    case "ThumbDownAlt":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ThumbDownAltRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ThumbDownAltOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ThumbDownAltSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ThumbDownAltTwoTone'))
    }
    case "ThumbDown":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ThumbDownRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ThumbDownOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ThumbDownSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ThumbDownTwoTone'))
    }
    case "ThumbUpAlt":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ThumbUpAltRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ThumbUpAltOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ThumbUpAltSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ThumbUpAltTwoTone'))
    }
    case "ThumbUp":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ThumbUpRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ThumbUpOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ThumbUpSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ThumbUpTwoTone'))
    }
    case "ThumbsUpDown":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ThumbsUpDownRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ThumbsUpDownOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ThumbsUpDownSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ThumbsUpDownTwoTone'))
    }
    case "TimeToLeave":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TimeToLeaveRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TimeToLeaveOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TimeToLeaveSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TimeToLeaveTwoTone'))
    }
    case "Timelapse":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TimelapseRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TimelapseOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TimelapseSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TimelapseTwoTone'))
    }
    case "Timeline":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TimelineRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TimelineOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TimelineSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TimelineTwoTone'))
    }
    case "Timer10":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Timer10Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Timer10Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Timer10Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Timer10TwoTone'))
    }
    case "Timer3":
      return {
      Rounded: lazy(() => import('@material-ui/icons/Timer3Rounded')),
      Outlined: lazy(() => import('@material-ui/icons/Timer3Outlined')),
      Sharp: lazy(() => import('@material-ui/icons/Timer3Sharp')),
      TwoTone: lazy(() => import('@material-ui/icons/Timer3TwoTone'))
    }
    case "TimerOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TimerOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TimerOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TimerOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TimerOffTwoTone'))
    }
    case "Timer":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TimerRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TimerOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TimerSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TimerTwoTone'))
    }
    case "Title":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TitleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TitleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TitleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TitleTwoTone'))
    }
    case "Toc":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TocRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TocOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TocSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TocTwoTone'))
    }
    case "Today":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TodayRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TodayOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TodaySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TodayTwoTone'))
    }
    case "ToggleOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ToggleOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ToggleOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ToggleOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ToggleOffTwoTone'))
    }
    case "ToggleOn":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ToggleOnRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ToggleOnOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ToggleOnSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ToggleOnTwoTone'))
    }
    case "Toll":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TollRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TollOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TollSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TollTwoTone'))
    }
    case "Tonality":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TonalityRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TonalityOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TonalitySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TonalityTwoTone'))
    }
    case "TouchApp":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TouchAppRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TouchAppOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TouchAppSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TouchAppTwoTone'))
    }
    case "Toys":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ToysRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ToysOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ToysSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ToysTwoTone'))
    }
    case "TrackChanges":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TrackChangesRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TrackChangesOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TrackChangesSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TrackChangesTwoTone'))
    }
    case "Traffic":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TrafficRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TrafficOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TrafficSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TrafficTwoTone'))
    }
    case "Train":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TrainRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TrainOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TrainSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TrainTwoTone'))
    }
    case "Tram":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TramRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TramOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TramSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TramTwoTone'))
    }
    case "TransferWithinAStation":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/TransferWithinAStationRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/TransferWithinAStationOutlined')),
      Sharp:
        lazy(() => import('@material-ui/icons/TransferWithinAStationSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/TransferWithinAStationTwoTone'))
    }
    case "Transform":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TransformRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TransformOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TransformSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TransformTwoTone'))
    }
    case "TransitEnterexit":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TransitEnterexitRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/TransitEnterexitOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TransitEnterexitSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TransitEnterexitTwoTone'))
    }
    case "Translate":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TranslateRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TranslateOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TranslateSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TranslateTwoTone'))
    }
    case "TrendingDown":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TrendingDownRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TrendingDownOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TrendingDownSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TrendingDownTwoTone'))
    }
    case "TrendingFlat":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TrendingFlatRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TrendingFlatOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TrendingFlatSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TrendingFlatTwoTone'))
    }
    case "TrendingUp":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TrendingUpRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TrendingUpOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TrendingUpSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TrendingUpTwoTone'))
    }
    case "TripOrigin":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TripOriginRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TripOriginOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TripOriginSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TripOriginTwoTone'))
    }
    case "Tune":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TuneRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TuneOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TuneSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TuneTwoTone'))
    }
    case "TurnedInNot":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TurnedInNotRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TurnedInNotOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TurnedInNotSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TurnedInNotTwoTone'))
    }
    case "TurnedIn":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TurnedInRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TurnedInOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TurnedInSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TurnedInTwoTone'))
    }
    case "TvOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TvOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TvOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TvOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TvOffTwoTone'))
    }
    case "Tv":
      return {
      Rounded: lazy(() => import('@material-ui/icons/TvRounded')),
      Outlined: lazy(() => import('@material-ui/icons/TvOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/TvSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/TvTwoTone'))
    }
    case "Unarchive":
      return {
      Rounded: lazy(() => import('@material-ui/icons/UnarchiveRounded')),
      Outlined: lazy(() => import('@material-ui/icons/UnarchiveOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/UnarchiveSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/UnarchiveTwoTone'))
    }
    case "Undo":
      return {
      Rounded: lazy(() => import('@material-ui/icons/UndoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/UndoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/UndoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/UndoTwoTone'))
    }
    case "UnfoldLess":
      return {
      Rounded: lazy(() => import('@material-ui/icons/UnfoldLessRounded')),
      Outlined: lazy(() => import('@material-ui/icons/UnfoldLessOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/UnfoldLessSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/UnfoldLessTwoTone'))
    }
    case "UnfoldMore":
      return {
      Rounded: lazy(() => import('@material-ui/icons/UnfoldMoreRounded')),
      Outlined: lazy(() => import('@material-ui/icons/UnfoldMoreOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/UnfoldMoreSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/UnfoldMoreTwoTone'))
    }
    case "Unsubscribe":
      return {
      Rounded: lazy(() => import('@material-ui/icons/UnsubscribeRounded')),
      Outlined: lazy(() => import('@material-ui/icons/UnsubscribeOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/UnsubscribeSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/UnsubscribeTwoTone'))
    }
    case "Update":
      return {
      Rounded: lazy(() => import('@material-ui/icons/UpdateRounded')),
      Outlined: lazy(() => import('@material-ui/icons/UpdateOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/UpdateSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/UpdateTwoTone'))
    }
    case "Usb":
      return {
      Rounded: lazy(() => import('@material-ui/icons/UsbRounded')),
      Outlined: lazy(() => import('@material-ui/icons/UsbOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/UsbSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/UsbTwoTone'))
    }
    case "VerifiedUser":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VerifiedUserRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VerifiedUserOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VerifiedUserSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VerifiedUserTwoTone'))
    }
    case "VerticalAlignBottom":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/VerticalAlignBottomRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/VerticalAlignBottomOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VerticalAlignBottomSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/VerticalAlignBottomTwoTone'))
    }
    case "VerticalAlignCenter":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/VerticalAlignCenterRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/VerticalAlignCenterOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VerticalAlignCenterSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/VerticalAlignCenterTwoTone'))
    }
    case "VerticalAlignTop":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VerticalAlignTopRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/VerticalAlignTopOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VerticalAlignTopSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VerticalAlignTopTwoTone'))
    }
    case "VerticalSplit":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VerticalSplitRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VerticalSplitOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VerticalSplitSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VerticalSplitTwoTone'))
    }
    case "Vibration":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VibrationRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VibrationOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VibrationSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VibrationTwoTone'))
    }
    case "VideoCall":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VideoCallRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VideoCallOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VideoCallSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VideoCallTwoTone'))
    }
    case "VideoLabel":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VideoLabelRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VideoLabelOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VideoLabelSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VideoLabelTwoTone'))
    }
    case "VideoLibrary":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VideoLibraryRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VideoLibraryOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VideoLibrarySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VideoLibraryTwoTone'))
    }
    case "VideocamOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VideocamOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VideocamOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VideocamOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VideocamOffTwoTone'))
    }
    case "Videocam":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VideocamRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VideocamOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VideocamSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VideocamTwoTone'))
    }
    case "VideogameAsset":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VideogameAssetRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VideogameAssetOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VideogameAssetSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VideogameAssetTwoTone'))
    }
    case "ViewAgenda":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ViewAgendaRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ViewAgendaOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ViewAgendaSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ViewAgendaTwoTone'))
    }
    case "ViewArray":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ViewArrayRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ViewArrayOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ViewArraySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ViewArrayTwoTone'))
    }
    case "ViewCarousel":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ViewCarouselRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ViewCarouselOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ViewCarouselSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ViewCarouselTwoTone'))
    }
    case "ViewColumn":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ViewColumnRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ViewColumnOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ViewColumnSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ViewColumnTwoTone'))
    }
    case "ViewComfy":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ViewComfyRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ViewComfyOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ViewComfySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ViewComfyTwoTone'))
    }
    case "ViewCompact":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ViewCompactRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ViewCompactOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ViewCompactSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ViewCompactTwoTone'))
    }
    case "ViewDay":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ViewDayRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ViewDayOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ViewDaySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ViewDayTwoTone'))
    }
    case "ViewHeadline":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ViewHeadlineRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ViewHeadlineOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ViewHeadlineSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ViewHeadlineTwoTone'))
    }
    case "ViewList":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ViewListRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ViewListOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ViewListSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ViewListTwoTone'))
    }
    case "ViewModule":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ViewModuleRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ViewModuleOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ViewModuleSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ViewModuleTwoTone'))
    }
    case "ViewQuilt":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ViewQuiltRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ViewQuiltOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ViewQuiltSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ViewQuiltTwoTone'))
    }
    case "ViewStream":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ViewStreamRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ViewStreamOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ViewStreamSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ViewStreamTwoTone'))
    }
    case "ViewWeek":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ViewWeekRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ViewWeekOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ViewWeekSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ViewWeekTwoTone'))
    }
    case "Vignette":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VignetteRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VignetteOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VignetteSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VignetteTwoTone'))
    }
    case "VisibilityOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VisibilityOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VisibilityOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VisibilityOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VisibilityOffTwoTone'))
    }
    case "Visibility":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VisibilityRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VisibilityOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VisibilitySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VisibilityTwoTone'))
    }
    case "VoiceChat":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VoiceChatRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VoiceChatOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VoiceChatSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VoiceChatTwoTone'))
    }
    case "VoiceOverOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VoiceOverOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VoiceOverOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VoiceOverOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VoiceOverOffTwoTone'))
    }
    case "Voicemail":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VoicemailRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VoicemailOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VoicemailSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VoicemailTwoTone'))
    }
    case "VolumeDown":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VolumeDownRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VolumeDownOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VolumeDownSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VolumeDownTwoTone'))
    }
    case "VolumeMute":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VolumeMuteRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VolumeMuteOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VolumeMuteSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VolumeMuteTwoTone'))
    }
    case "VolumeOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VolumeOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VolumeOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VolumeOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VolumeOffTwoTone'))
    }
    case "VolumeUp":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VolumeUpRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VolumeUpOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VolumeUpSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VolumeUpTwoTone'))
    }
    case "VpnKey":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VpnKeyRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VpnKeyOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VpnKeySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VpnKeyTwoTone'))
    }
    case "VpnLock":
      return {
      Rounded: lazy(() => import('@material-ui/icons/VpnLockRounded')),
      Outlined: lazy(() => import('@material-ui/icons/VpnLockOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/VpnLockSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/VpnLockTwoTone'))
    }
    case "Wallpaper":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WallpaperRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WallpaperOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WallpaperSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WallpaperTwoTone'))
    }
    case "Warning":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WarningRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WarningOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WarningSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WarningTwoTone'))
    }
    case "WatchLater":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WatchLaterRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WatchLaterOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WatchLaterSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WatchLaterTwoTone'))
    }
    case "Watch":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WatchRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WatchOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WatchSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WatchTwoTone'))
    }
    case "Waves":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WavesRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WavesOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WavesSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WavesTwoTone'))
    }
    case "WbAuto":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WbAutoRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WbAutoOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WbAutoSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WbAutoTwoTone'))
    }
    case "WbCloudy":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WbCloudyRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WbCloudyOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WbCloudySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WbCloudyTwoTone'))
    }
    case "WbIncandescent":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WbIncandescentRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WbIncandescentOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WbIncandescentSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WbIncandescentTwoTone'))
    }
    case "WbIridescent":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WbIridescentRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WbIridescentOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WbIridescentSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WbIridescentTwoTone'))
    }
    case "WbSunny":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WbSunnyRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WbSunnyOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WbSunnySharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WbSunnyTwoTone'))
    }
    case "Wc":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WcRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WcOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WcSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WcTwoTone'))
    }
    case "WebAsset":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WebAssetRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WebAssetOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WebAssetSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WebAssetTwoTone'))
    }
    case "Web":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WebRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WebOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WebSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WebTwoTone'))
    }
    case "Weekend":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WeekendRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WeekendOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WeekendSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WeekendTwoTone'))
    }
    case "Whatshot":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WhatshotRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WhatshotOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WhatshotSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WhatshotTwoTone'))
    }
    case "WhereToVote":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WhereToVoteRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WhereToVoteOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WhereToVoteSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WhereToVoteTwoTone'))
    }
    case "Widgets":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WidgetsRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WidgetsOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WidgetsSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WidgetsTwoTone'))
    }
    case "WifiLock":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WifiLockRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WifiLockOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WifiLockSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WifiLockTwoTone'))
    }
    case "WifiOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WifiOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WifiOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WifiOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WifiOffTwoTone'))
    }
    case "Wifi":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WifiRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WifiOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WifiSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WifiTwoTone'))
    }
    case "WifiTethering":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WifiTetheringRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WifiTetheringOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WifiTetheringSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WifiTetheringTwoTone'))
    }
    case "WorkOff":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WorkOffRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WorkOffOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WorkOffSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WorkOffTwoTone'))
    }
    case "WorkOutline":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WorkOutlineRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WorkOutlineOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WorkOutlineSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WorkOutlineTwoTone'))
    }
    case "Work":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WorkRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WorkOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WorkSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WorkTwoTone'))
    }
    case "WrapText":
      return {
      Rounded: lazy(() => import('@material-ui/icons/WrapTextRounded')),
      Outlined: lazy(() => import('@material-ui/icons/WrapTextOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/WrapTextSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/WrapTextTwoTone'))
    }
    case "YoutubeSearchedFor":
      return {
      Rounded:
        lazy(() => import('@material-ui/icons/YoutubeSearchedForRounded')),
      Outlined:
        lazy(() => import('@material-ui/icons/YoutubeSearchedForOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/YoutubeSearchedForSharp')),
      TwoTone:
        lazy(() => import('@material-ui/icons/YoutubeSearchedForTwoTone'))
    }
    case "ZoomIn":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ZoomInRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ZoomInOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ZoomInSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ZoomInTwoTone'))
    }
    case "ZoomOutMap":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ZoomOutMapRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ZoomOutMapOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ZoomOutMapSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ZoomOutMapTwoTone'))
    }
    case "ZoomOut":
      return {
      Rounded: lazy(() => import('@material-ui/icons/ZoomOutRounded')),
      Outlined: lazy(() => import('@material-ui/icons/ZoomOutOutlined')),
      Sharp: lazy(() => import('@material-ui/icons/ZoomOutSharp')),
      TwoTone: lazy(() => import('@material-ui/icons/ZoomOutTwoTone'))
    }
    default: 
      return {
        Rounded: lazy(() => import('@material-ui/icons/ZoomOutRounded')),
        Outlined: lazy(() => import('@material-ui/icons/ZoomOutOutlined')),
        Sharp: lazy(() => import('@material-ui/icons/ZoomOutSharp')),
        TwoTone: lazy(() => import('@material-ui/icons/ZoomOutTwoTone'))
      }
    }
  };

export default iconList;