import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'
import { checkImageURL } from '../../../../utils'
import { icons } from '../../../../constants'

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
        <Text style={styles.jobName} numberOfLines={1}>{job.job_title}</Text>
        {/* <Text style={styles.lineColor}>_______________________________</Text> */}
        <Text style={styles.companyName} numberOfLines={1}>{job.employer_name}</Text>
        <View style={styles.locationBox}>  
          <Image 
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage} />
          <Text style={styles.locationName} >{job.job_city} {job.job_state} {job.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>


  )
}

export default NeaybyJobCard