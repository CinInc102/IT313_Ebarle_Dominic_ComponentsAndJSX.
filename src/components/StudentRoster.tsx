import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import StudentCard from './studentcard';

type Student = {
id: string;
name: string;
course: string;
units: number;
isFullLoad: boolean;
};

const students: Student[] = [
{ id: 's1', name: 'Ana Cruz', course: 'IT313', units: 21, isFullLoad: true },
{ id: 's2', name: 'Bea Santos', course: 'IT313', units: 15, isFullLoad: false },
{ id: 's3', name: 'Cid Ramos', course: 'IT313', units: 18, isFullLoad: true },
{ id: 's4', name: 'Dex Alonzo', course: 'IT313', units: 12, isFullLoad: false },
];

export default function StudentRoster() {
const [reversed, setReversed] = useState(false);

const displayedStudents = reversed ? [...students].reverse() : students;

return ( <ScrollView style={styles.container}> <Text style={styles.title}>Student Roster</Text>

  <Text style={styles.count}>
    Total Students: {students.length}
  </Text>

  <View style={styles.button}>
    <Button
      title={reversed ? 'Restore Original Order' : 'Reverse Student Order'}
      onPress={() => setReversed(!reversed)}
    />
  </View>

  {displayedStudents.map((student) => (
    <StudentCard
      key={student.id}
      name={student.name}
      course={student.course}
      units={student.units}
      isFullLoad={student.isFullLoad}
    />
  ))}
</ScrollView>

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#F3F4F6',
},
title: {
fontSize: 28,
fontWeight: 'bold',
textAlign: 'center',
marginTop: 30,
marginBottom: 10,
color: '#1D4ED8',
},
count: {
fontSize: 18,
textAlign: 'center',
marginBottom: 15,
color: '#374151',
},
button: {
marginHorizontal: 16,
marginBottom: 10,
},
});
