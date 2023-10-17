import {useState} from 'react'

function ShowHide() {
    const [show, setShow] = useState(true)

    const handleClick = (event) => {
        setShow(!show)
    }

  return (
    <div>
        
        
        <button onClick={handleClick}>Show/Hide</button>
        { show && <h2>Show/Hide</h2>}
    </div>
  )
}

export default ShowHide 