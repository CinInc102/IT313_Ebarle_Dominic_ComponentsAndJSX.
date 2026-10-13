import { StyleSheet, Text, View } from 'react-native';

type StudentCardProps = {
name: string;
course: string;
units: number;
isFullLoad: boolean;
};

export default function StudentCard({
name,
course,
units,
isFullLoad,
}: StudentCardProps) {
return ( <View style={styles.card}> <Text style={styles.name}>{name}</Text> <Text style={styles.info}>Course: {course}</Text> <Text style={styles.info}>Units: {units}</Text>


  {isFullLoad && (
    <Text style={styles.status}>Full Load</Text>
  )}
</View>


);
}

const styles = StyleSheet.create({
card: {
backgroundColor: '#FFFFFF',
padding: 16,
marginVertical: 8,
marginHorizontal: 16,
borderRadius: 12,
borderWidth: 1,
borderColor: '#D1D5DB',
},
name: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 8,
color: '#1D4ED8',
},
info: {
fontSize: 16,
marginVertical: 3,
color: '#374151',
},
status: {
fontSize: 16,
fontWeight: 'bold',
marginTop: 8,
color: '#15803D',
},
});
