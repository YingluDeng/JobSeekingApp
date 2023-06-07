import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'
import { checkImageURL } from '../../../../utils'
// import job_placeholder from "../../../../assets/icons/job_placeholder.png"

const NeaybyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image 
          // source={{ url: job.employer_logo }}
          source={{ uri: checkImageURL(job.employer_logo) ? job.employer_logo : "https://img.icons8.com/nolan/64/work.png" }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      {/* <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text> */}

      <View style={styles.textContainer}> 
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.location}>{job.job_city} {job.job_state} {job.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NeaybyJobCard