
import Box from "./Box"
import '../App.css'
const Display = () => {

    return (
        <div>
            <h1>display</h1>
            <div id='display'>
                <Box text='left' />
                <Box text='right' />
            </div>
        </div>
    )
}
export default Display