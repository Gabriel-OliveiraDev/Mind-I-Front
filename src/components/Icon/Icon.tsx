import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { ViewStyle } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

interface IconsProps{
    style?: ViewStyle
}

export function SearchIcon({ style}: IconsProps) {
  return <Feather style={style} name="search" size={24} color="white" />;
}

export function LanguageIcon({style}: IconsProps) {
    return <Entypo name="language" size={24} color="white" />;
}

export function AccessibilityIcon({style}: IconsProps) {
    return <Ionicons name="accessibility-sharp" size={24} color="white" />;
}

export function GestureIcon({style}: IconsProps) {
    return <FontAwesome6 name="hands" size={24} color="white" />;
}

export function TermsIcon({style}: IconsProps) {
    return <Ionicons name="newspaper" size={24} color="white" />;
}

export function MoonIcon({style}: IconsProps) {
    return <Ionicons name="moon-sharp" size={24} color="white" />;
}

export function BellIcon({style}: IconsProps) {
    return <MaterialCommunityIcons name="bell-ring" size={24} color="white" />;
}

export function QuestionIcon({style}: IconsProps) {
    return <MaterialCommunityIcons name="comment-question" size={24} color="white" />;
}

export function PrivacyIcon({style}: IconsProps) {
    return <MaterialIcons name="privacy-tip" size={24} color="white" />
}

export function ShareIcon({style}: IconsProps) {
    return <Entypo name="slideshare" size={24} color="white" />

}

export function ActivityIcon({style}: IconsProps) {
    return <Feather name="activity" size={24} color="white" />

}

export function LockIcon({style}: IconsProps) {
    return <FontAwesome name="lock" size={24} color="white" />

}

export function SwitcherIcon({style}: IconsProps) {
    return <MaterialCommunityIcons name="file-document-multiple" size={24} color="white" />
}

export function SafetyIcon({style}: IconsProps) {
    return <MaterialIcons name="safety-check" size={24} color="white" />
}

export function LogoutIcon({style}: IconsProps) {
    return <MaterialCommunityIcons name="logout" size={24} color="white" />
}
