import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '../../../constants'
import { checkImageURL } from '../../../utils'

const Company = ({ companyLogo, jobTitle, companyName, city, state, country}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image 
          source={{
            url: checkImageURL(companyLogo) ? companyLogo : "https://img.icons8.com/nolan/64/work.png"
          }}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.jobTitle}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName} / </Text>
        <View style={styles.locationBox}>
          <Image 
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          />
          <Text style={styles.location}>{city} {state} {country}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company