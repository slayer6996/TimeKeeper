import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';

const TaskTags = () => {
    const tags = ['Need-to-do', 'Want-to-do', 'Ritual', 'Hobby', 'School', 'Exam', 'Career'];

    const [selectedTag, setSelectedTag] = useState('');

    const handleSelectTag = (tag) => {
        if(tag !== selectedTag) {
            setSelectedTag(tag);
        } else {
            setSelectedTag('');
        }
    }

    return (
        <View className='mx-4 my-2'>
            <Text className='text-lg text-gray-500'>Task Tag</Text>
            <View style={styles.container}>
                {
                    tags.map((tag) => (
                        <Pressable key={tag} onPress={() => handleSelectTag(tag)} className={(selectedTag == tag ? 'bg-primary-100' : 'bg-gray-70') + ' rounded-xl px-5 py-3 my-1 mx-1'}>
                            <Text className='text-white'>{tag}</Text>
                        </Pressable>
                    ))
                }
            </View>
        </View>
    )
};

export default TaskTags

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});