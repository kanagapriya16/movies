import React from 'react'

const ChildTabs = ({child}) => {
  return (
    <div>
        {
                child.map((addmovie) => {
                    
                    return (
                        <tr key={addmovie.id}>
                            <td >{addmovie.id}</td>
                            <td>{addmovie.title}</td>
                            <td>{addmovie.director}</td>
                           
                        </tr>
                    )
                })
            }
    </div>
  )
}

export default ChildTabs;

