import { View, Text, StyleSheet } from "react-native";
import { colors, fontSize, radius, spacing } from "../styles/theme";

type OccurrenceCardProps = {
    titulo: string;
    descricacao: string;
    local: string;
};
export default function OccurrenceCard ({
    titulo,
    local,
    descricao
}: OccurrenceCardProps){
    return(
        <View style = {styles.card}>
            <View stule = {styles.topo}>
                <Ionicons name = "alert-circle-outline" size={22} color = {colors.primary} /> 
                <Text styles = {styles.titulo}>{titulo}</Text>
            </View>
            <Text style = {styles.descricao}>(descricao)</Text>
            <View style={styles.rodape}>
               <Ionicons name = "alert-circle-outline" size={18} color = {colors.textLigth} />  
               <Text styles = {styles.titulo}>{titulo}</Text>
            </View>
              </View>
    );
}