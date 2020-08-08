import React, {
  useState
} from 'react'

export default function useFetch(url, option, body) {
  const [result, setresult] = useState([])
  const [error, seterror] = useState(null)

  async function fetcher() {
    // if a post request
    if (option === "post") {
      try {
        const response = await fetch(url, {
          method: 'post',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(body)
        })
        const json = await response.json()
        setresult(json)
      } catch (error) {
        seterror(error)
      }
      return [result, error]
    }

    // if a get request
    else {
      try {
        const response = await fetch(url)
        const json = await response.json()
        setresult(json)
      } catch (error) {
        seterror(error)
      }
      return [result, error]
    }
  }
  fetcher()
}