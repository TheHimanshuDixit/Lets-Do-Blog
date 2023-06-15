import React from 'react'

const Dummy = () => {
    return (
        <>
            {/* to use these css in any components write global after hsx */}
            {/* <style jsx global>  */}
            <style jsx>
                {`
                div {
                    color: red;
                }
            `}
            </style>
            <div>Dummy</div>
        </>
    )
}

export default Dummy