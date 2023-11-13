import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native'

export interface CosmoProducts{
    length: number
    country: any
    product_id: number,
    product_name: string,
    product_category: string,
    product_description: string,
    price: number,
}

const [userSearch, setSearch] = useState('')
const [result, setResult] = useState('')

const handleProducts = async() => {
    const response = await axios.get(`https://api.cosmoproducts.io?name=${userSearch}`)
    console.log(response.data)
    setProductsFromAPI(response.data)
}


const setProductsFromAPI = (response: CosmoProducts) =>
{
    if(response.length > 0)
    {
        setResult(response.product_name)
    }
    else 
    {
        setResult("")
    }
}

const ShowProducts = () => {
  return (
    <View>
        <View>
        <Button title="Search" onPress={handleProducts}/>
        </View>
      <Text>Products</Text>
      
    </View>
  )
}

export default ShowProducts

const styles = StyleSheet.create({})