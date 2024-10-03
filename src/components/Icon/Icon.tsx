import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { ViewStyle } from "react-native";

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

