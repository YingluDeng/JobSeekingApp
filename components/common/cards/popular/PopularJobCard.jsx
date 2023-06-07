import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utils'
// import job_placeholder from "../../../../assets/icons/job_placeholder.png"

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity 
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image 
          // source={{ url: item.employer_logo }}
          source={{ uri: checkImageURL(item.employer_logo) ? item.employer_logo : "https://img.icons8.com/nolan/64/work.png" }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

      <View style={styles.infoContainer}> 
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_city} {item.job_state} {item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard