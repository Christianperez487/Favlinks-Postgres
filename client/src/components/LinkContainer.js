import { useState } from 'react'
import Table from './Table';
import Form from './Form';

const LinkContainer = (props) => {
  const fetchLinks = async () => {
    
  }
    const postLink = async (newLink) => {
      let testLink = {
        name: 'Test 5/1/23',
        URL: 'test.com',
      }
    
       try {
        let response = await fetch('/new', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(testLink),
        })
        console.log(response)
        let message = response.text()
        console.log(message)
       } 
       catch (error) {
        console.log(error)
       }
  }


  useEffect(() => {
    fetchLinks()
  }, [])

  const handleSubmit = async (form) => {
   await fetch(`/links/${id}`, {method: 'DELETE'})
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      <Table linkData={links} removeLink={handleRemove} />

      <br />

      <h3>Add New</h3>
      <Form handleSubmit={handleSubmit} />
    </div>
  )
}

export default LinkContainer
