import {useState} from 'react'
import { View, Text,TextInput,TouchableOpacity,Image,FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import {icons,SIZES} from '../../../constants'


const jobTypes=["Full-time","Internships","Contractor"]


const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {
  const router=useRouter();
  const [activeJobtype,setAcitveJobTypes]=useState('Full-time');
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello There!</Text>
        <Text style={styles.welcomeMessage}>Let the job find you</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder='Search your job here'
            placeholderTextColor="grey"
            value={searchTerm}
            onChangeText={(text)=>{setSearchTerm(text)}}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}

          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({item})=>(
            <TouchableOpacity 
              style={styles.tab(activeJobtype,item)}
              onPress={()=>{
                setAcitveJobTypes(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobtype,item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item=>item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome