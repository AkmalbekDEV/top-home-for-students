import { Button, FormControl, FormLabel, Input, Link, List, ListItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, OrderedList, UnorderedList, useDisclosure, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Odd09 = () => {
  const [data, setData] = useState([])
  const [listening, setListening] = useState("")
  const [reading, setReading] = useState("")
  const [writing, setWriting] = useState("")
  const [speaking, setSpeaking] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const listeningTopic = "Listening"
  const readingTopic = "Reading"
  const writingTopic = "Writing"
  const speakingTopic = "Speaking"
  const navigate = useNavigate()

  const getData = async () => {
    try {
      const response = await axios.get('https://a67474a4e6e67b1c.mokky.dev/hwOdd09')
      if (Array.isArray(response.data)) {
        setData(response.data)
      } else {
        setData([])
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='mt-36 max-w-[1250px] mx-auto max-sm:px-5'>
      <div className='rounded-2xl shadow-2xl w-full p-10 border'>
        <h1 className='text-4xl max-sm:text-3xl font-medium text-blue-700 text-center'>Today's Homeworks</h1>
        <div className='mt-5'>
          {data.length > 0 ? data.map((item) => (
            <OrderedList key={item.id} display={'grid'} gap={'5'}>
              <ListItem fontSize={'20'}>
                Listening: {item.desc1} <div><Button marginTop={'5'} colorScheme='blue'><Link href='https://t.me/+EYnsj1Iz1e4wMDhi' _hover={'none'}>Explaination is here</Link></Button></div>
              </ListItem>
              <ListItem fontSize={'20'}>
                Reading: {item.desc2} <div><Button marginTop={'5'} colorScheme='blue'><Link href='https://t.me/+EYnsj1Iz1e4wMDhi' _hover={'none'}>Explaination is here</Link></Button></div>
              </ListItem>
              <ListItem fontSize={'20'}>
                Writing: {item.desc3} <div><Button marginTop={'5'} colorScheme='blue'><Link href='https://t.me/+EYnsj1Iz1e4wMDhi' _hover={'none'}>Explaination is here</Link></Button></div>
              </ListItem>
              <ListItem fontSize={'20'}>
                Speaking: {item.desc4} <div><Button marginTop={'5'} colorScheme='blue'><Link href='https://t.me/+EYnsj1Iz1e4wMDhi' _hover={'none'}>Explaination is here</Link></Button></div>
              </ListItem>
            </OrderedList>
          )) : <p className='font-medium text-3xl text-red-500 text-center'>No data available</p>}
        </div>
      </div>
    </div>
  )
}

// 

export default Odd09
